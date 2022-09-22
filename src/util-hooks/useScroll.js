import { useCallback, useEffect, useRef } from "react";

const useScroll = (callback, prepareCallback) => {
  const scheduledAnimationFrame = useRef();

  const rafCallback = useCallback(() => {
    callback();
    scheduledAnimationFrame.current = false;
  }, [callback]);

  useEffect(() => {
    function onScroll() {
      if (scheduledAnimationFrame.current) {
        return;
      }

      prepareCallback?.();

      scheduledAnimationFrame.current = true;
      requestAnimationFrame(rafCallback);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [prepareCallback, rafCallback]);
};

export default useScroll;
