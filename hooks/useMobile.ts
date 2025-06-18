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
