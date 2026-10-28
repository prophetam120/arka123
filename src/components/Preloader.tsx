"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";

type PreloaderProps = {
  onDone: () => void;
};

export function Preloader({ onDone }: PreloaderProps) {
  const [show, setShow] = useState(true);
  const finished = useRef(false);

  const close = useCallback(() => {
    setShow(false);
  }, []);

  const notifyDone = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    onDone();
  }, [onDone]);

  useEffect(() => {
    const hard = window.setTimeout(close, 2300);
    return () => window.clearTimeout(hard);
  }, [close]);

  useEffect(() => {
    if (show) return;
    const t = window.setTimeout(notifyDone, 580);
    return () => window.clearTimeout(t);
  }, [show, notifyDone]);

  return (
    <AnimatePresence onExitComplete={notifyDone}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream-soft"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -36 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="arch-pattern absolute inset-0 opacity-55" />
          <div className="relative px-6">
            <Logo
              variant="full"
              animated
              size="lg"
              hoverable={false}
              onComplete={close}
            />
          </div>
          <motion.p
            className="relative mt-10 text-[0.65rem] uppercase tracking-[0.32em] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.45 }}
          >
            Собираем пространство
          </motion.p>
          <motion.div
            className="relative mt-6 h-px w-36 origin-left overflow-hidden bg-navy/15"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
          >
            <div className="h-full w-full bg-navy" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
