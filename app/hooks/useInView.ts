import { useRef } from "react";
import { useInView as useFramerInView, type UseInViewOptions } from "framer-motion";

export function useInView(options: UseInViewOptions = { once: true, margin: "-50px" }) {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, options);

  return { ref, isInView };
}
