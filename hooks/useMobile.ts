import { useEffect, useState } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen size matches mobile breakpoint
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Common mobile breakpoint
    };

    // Check on mount
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

// Enhanced touch detection hook
export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      // Multiple methods to detect touch capability
      const hasTouchScreen =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-expect-error - for older browsers
        navigator.msMaxTouchPoints > 0;

      // Check user agent for mobile devices (fallback)
      const mobileUserAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );

      // CSS media query check for hover capability
      const hasHoverCapability = window.matchMedia("(hover: hover)").matches;

      // Device is considered touch if it has touch capability AND either:
      // - No hover capability (primary touch device)
      // - Mobile user agent detected
      const isTouchPrimary =
        hasTouchScreen && (!hasHoverCapability || mobileUserAgent);

      setIsTouchDevice(isTouchPrimary);
    };

    // Check on mount
    checkTouchDevice();

    // Listen for media query changes
    const hoverMediaQuery = window.matchMedia("(hover: hover)");
    const handleHoverChange = () => checkTouchDevice();

    hoverMediaQuery.addEventListener("change", handleHoverChange);

    // Also listen for window resize as a fallback
    window.addEventListener("resize", checkTouchDevice);

    // Cleanup
    return () => {
      hoverMediaQuery.removeEventListener("change", handleHoverChange);
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  return isTouchDevice;
}
