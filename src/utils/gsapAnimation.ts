import { gsap } from "gsap";

type parameterGsap = {
  el: string;
  delay?: number;
};

// Animasi fadeIn
export const fadeIn = ({ el, delay = 0 }: parameterGsap) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, delay }
  );
};
