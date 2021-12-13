import { RootState } from "@redux/store";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

const useAnimate = () => {
  const { initialPage } = useSelector(
    (store: RootState) => store.crashCarts.crashCartsInventory
  );

  const toAnimate = useRef<any>(null);
  const timeLine = useRef(gsap.timeline());

  useEffect(() => {
    if (timeLine.current === null) {
      return;
    }
    timeLine.current
      .to(toAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(toAnimate.current, { y: 0, duration: 0.2, ease: "bounce.out" });
  }, [initialPage]);

  return {
    toAnimate,
    timeLine,
  };
};

export default useAnimate;
