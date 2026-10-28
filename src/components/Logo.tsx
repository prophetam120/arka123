"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

type LogoProps = {
  variant?: "full" | "mark";
  animated?: boolean;
  hoverable?: boolean;
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  onComplete?: () => void;
};

/**
 * Официальные PNG из materials/logo (фон выбит в прозрачность).
 * Цифры не перерисовываем — layout как в исходнике.
 */
const LOCKUP = {
  dark: "/images/logo/lockup-dark.png",
  light: "/images/logo/lockup-light.png",
} as const;

const MARK = {
  dark: "/images/logo/mark-dark.png",
  light: "/images/logo/mark-light.png",
} as const;

const LOCKUP_H = { sm: 32, md: 40, lg: 64 } as const;
const MARK_H = { sm: 36, md: 48, lg: 96 } as const;

export function Logo({
  variant = "full",
  animated = false,
  hoverable = true,
  tone = "dark",
  size = "md",
  className = "",
  onComplete,
}: LogoProps) {
  const controls = useAnimationControls();
  const isMark = variant === "mark";
  const h = isMark ? MARK_H[size] : LOCKUP_H[size];
  const src = isMark ? MARK[tone] : LOCKUP[tone];

  useEffect(() => {
    if (!animated) {
      onComplete?.();
      return;
    }
    let cancelled = false;
    void (async () => {
      await controls.start("visible");
      if (!cancelled) onComplete?.();
    })();
    return () => {
      cancelled = true;
    };
  }, [animated, controls, onComplete]);

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={isMark ? { height: h, width: h } : undefined}
      initial={animated ? "hidden" : false}
      animate={animated ? controls : undefined}
      variants={{
        hidden: {
          opacity: 0,
          clipPath: isMark ? "inset(100% 0 0 0)" : "inset(0 100% 0 0)",
        },
        visible: {
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={hoverable ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {isMark ? (
        <Image
          src={src}
          alt="АРКА 123"
          fill
          className="object-contain"
          sizes={`${h}px`}
          priority
        />
      ) : (
        <Image
          src={src}
          alt="АРКА 123"
          width={520}
          height={h}
          className="h-auto w-auto object-contain object-left"
          style={{ height: h, width: "auto" }}
          priority
        />
      )}
    </motion.div>
  );
}
