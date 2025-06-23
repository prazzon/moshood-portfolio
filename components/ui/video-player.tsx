"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  FastForward,
  Loader2,
  Maximize,
  Minimize,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface VideoPlayerModalProps {
  videoUrl: string;
  autoPlay?: boolean;
  trigger?: React.ReactNode;
  className?: string;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  videoUrl,
  autoPlay = false,
  trigger,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [bufferedPercent, setBufferedPercent] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Format time helper
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Handle video events
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);

      // Update buffered progress
      const buffered = videoRef.current.buffered;
      if (buffered.length > 0) {
        const bufferedEnd = buffered.end(buffered.length - 1);
        const bufferedPercent = (bufferedEnd / videoRef.current.duration) * 100;
        setBufferedPercent(bufferedPercent);
      }
    }
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    if (autoPlay && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Control handlers
  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  }, []);

  const skip = useCallback((seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0,
        Math.min(
          videoRef.current.duration,
          videoRef.current.currentTime + seconds,
        ),
      );
    }
  }, []);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent) => {
      if (progressRef.current && videoRef.current) {
        const rect = progressRef.current.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        videoRef.current.currentTime = pos * duration;
      }
    },
    [duration],
  );

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;

    try {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  }, [isFullscreen]);

  // Show/hide controls
  const showControlsTemporarily = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  }, [isPlaying]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          togglePlay();
          break;
        case "KeyF":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "KeyM":
          e.preventDefault();
          toggleMute();
          break;
        case "ArrowLeft":
          e.preventDefault();
          skip(-10);
          break;
        case "ArrowRight":
          e.preventDefault();
          skip(10);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, togglePlay, toggleFullscreen, toggleMute, skip]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Mouse move handler for controls
  useEffect(() => {
    const handleMouseMove = () => {
      if (isOpen) {
        showControlsTemporarily();
      }
    };

    if (isOpen) {
      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isOpen, showControlsTemporarily]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  // Reset states when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      setCurrentTime(0);
      setIsLoading(true);
      setHasError(false);
      setShowControls(true);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="lg" className="gap-2">
            <Play className="h-4 w-4" />
            Play Video
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className={cn(
          "aspect-video h-auto max-h-[90vh] min-h-[50vh] w-6xl !max-w-[calc(100vw-2rem)] border-none bg-transparent p-0",
          className,
        )}
        showCloseButton={false}
      >
        <DialogClose asChild>
          <Button
            variant="secondary"
            className="font-poppins absolute top-4 right-0 z-10 size-10 rounded-full bg-white/10 text-white backdrop-blur-[1px] hover:bg-white/20 md:right-4"
          >
            <X className="flex size-5" />
          </Button>
        </DialogClose>
        <motion.div
          ref={containerRef}
          className="group relative h-full w-full overflow-hidden rounded-3xl bg-black"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            src={videoUrl}
            className="h-full w-full object-contain"
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onCanPlay={handleCanPlay}
            onError={handleError}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            preload="metadata"
            onClick={togglePlay}
          />

          {/* Loading State */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col items-center gap-4 text-white">
                  <Loader2 className="h-8 w-8 animate-spin" />
                  <p className="text-sm font-medium">Loading video...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error State */}
          <AnimatePresence>
            {hasError && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col items-center gap-4 text-white">
                  <AlertCircle className="h-8 w-8 text-red-500" />
                  <p className="text-sm font-medium">Error loading video</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Play Button Overlay */}
          <AnimatePresence>
            {!isPlaying && !isLoading && !hasError && (
              <motion.div
                className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 backdrop-blur-[1px]"
                onClick={togglePlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="rounded-full border border-white/30 bg-white/20 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play
                    className="ml-1 h-12 w-12 text-white"
                    fill="currentColor"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Controls */}
          <AnimatePresence>
            {showControls && !isLoading && !hasError && (
              <motion.div
                className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress Bar */}
                <div className="mb-4">
                  <div
                    ref={progressRef}
                    className="group relative h-2 cursor-pointer rounded-full bg-white/20 transition-all duration-200 hover:h-3"
                    onClick={handleProgressClick}
                  >
                    {/* Buffered Progress */}
                    <div
                      className="absolute top-0 left-0 h-full rounded-full bg-white/30"
                      style={{ width: `${bufferedPercent}%` }}
                    />
                    {/* Current Progress */}
                    <div
                      className="absolute top-0 left-0 h-full rounded-full bg-white"
                      style={{ width: `${progressPercent}%` }}
                    />
                    {/* Progress Handle */}
                    <div
                      className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
                      style={{
                        left: `${progressPercent}%`,
                        transform: "translateX(-50%)",
                      }}
                    />
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-4">
                    {/* Play/Pause */}
                    <motion.button
                      onClick={togglePlay}
                      className="rounded-full bg-white/10 p-2 transition-colors duration-200 hover:bg-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isPlaying ? (
                        <Pause className="h-5 w-5 text-white" />
                      ) : (
                        <Play className="h-5 w-5 text-white" />
                      )}
                    </motion.button>

                    {/* Skip Buttons */}
                    <motion.button
                      onClick={() => skip(-10)}
                      className="rounded-full bg-white/10 p-2 transition-colors duration-200 hover:bg-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FastForward className="h-4 w-4 rotate-180 text-white" />
                    </motion.button>

                    <motion.button
                      onClick={() => skip(10)}
                      className="rounded-full bg-white/10 p-2 transition-colors duration-200 hover:bg-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FastForward className="h-4 w-4 text-white" />
                    </motion.button>

                    {/* Time Display */}
                    <div className="font-bebas-neue text-xs font-medium text-white md:text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:gap-4">
                    {/* Volume Control */}
                    <div className="flex items-center gap-2">
                      <motion.button
                        onClick={toggleMute}
                        className="rounded-full bg-white/10 p-2 transition-colors duration-200 hover:bg-white/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="h-4 w-4 text-white" />
                        ) : (
                          <Volume2 className="h-4 w-4 text-white" />
                        )}
                      </motion.button>

                      {/* Volume Slider */}
                      <div className="relative hidden w-20 md:block">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={isMuted ? 0 : volume}
                          onChange={(e) =>
                            handleVolumeChange(parseFloat(e.target.value))
                          }
                          className="slider absolute top-1/2 h-1 w-full -translate-y-1/2 cursor-pointer appearance-none rounded-full bg-white/20"
                        />
                      </div>
                    </div>

                    {/* Fullscreen */}
                    <motion.button
                      onClick={toggleFullscreen}
                      className="rounded-full bg-white/10 p-2 transition-colors duration-200 hover:bg-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isFullscreen ? (
                        <Minimize className="h-4 w-4 text-white" />
                      ) : (
                        <Maximize className="h-4 w-4 text-white" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerModal;
