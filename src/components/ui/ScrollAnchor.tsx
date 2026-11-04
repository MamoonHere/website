"use client";

import type { ReactNode } from "react";

interface ScrollAnchorProps {
  targetId: string;
  className?: string;
  children: ReactNode;
}

export default function ScrollAnchor({ targetId, className, children }: ScrollAnchorProps) {
  return (
    <a
      href={`#${targetId}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </a>
  );
}
