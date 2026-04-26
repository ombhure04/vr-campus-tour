import { useEffect } from "react";

export function useCompass(setDirection: (dir: string) => void) {
  useEffect(() => {
    const interval = setInterval(() => {
      const camera = document.querySelector("a-camera");
      if (!camera) return;

      const rot = camera.getAttribute("rotation") as any;
      if (!rot) return;

      const y = rot.y;

      if (y > -45 && y < 45) setDirection("North");
      else if (y >= 45 && y <= 135) setDirection("West");
      else if (y <= -45 && y >= -135) setDirection("East");
      else setDirection("South");
    }, 200);

    return () => clearInterval(interval);
  }, [setDirection]);
}