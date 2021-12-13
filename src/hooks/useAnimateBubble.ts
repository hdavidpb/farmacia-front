import { RootState } from "@redux/store";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

const useAnimate = () => {
  const { shoppingList } = useSelector(
    (store: RootState) => store.orders.shoppingData
  );
  const toAnimate = useRef<any>(null);
  const timeLine = useRef(gsap.timeline());

  useEffect(() => {
    if (shoppingList.length === 0) {
      return;
    }

    timeLine.current
      .to(toAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
      .to(toAnimate.current, { y: 0, duration: 0.2, ease: "bounce.out" });
  }, [shoppingList.length]);

  return {
    toAnimate,
    timeLine,
  };
};

export default useAnimate;
