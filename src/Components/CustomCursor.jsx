import { useEffect } from "react";

function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    if (!cursor || !ring) {
      return undefined;
    }

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMouseMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
    };

    let animationFrame;
    const animate = () => {
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;

      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;

      animationFrame = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      ring.style.transform = "translate(-50%, -50%) scale(1.8)";
      ring.style.borderColor = "rgba(201,169,110,0.8)";
    };

    const onLeave = () => {
      ring.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.borderColor = "rgba(201,169,110,0.5)";
    };

    const interactiveElements = document.querySelectorAll("a, button");

    document.addEventListener("mousemove", onMouseMove);
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", onEnter);
      element.addEventListener("mouseleave", onLeave);
    });

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", onEnter);
        element.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  );
}

export default CustomCursor;
