"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote?: string;
    name?: string;
    title?: string;
    icon?: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      const getDirection = () => {
        if (containerRef.current) {
          containerRef.current.style.setProperty(
            "--animation-direction",
            direction === "left" ? "forwards" : "reverse"
          );
        }
      };

      const getSpeed = () => {
        if (containerRef.current) {
          const duration =
            speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
          containerRef.current.style.setProperty(
            "--animation-duration",
            duration
          );
        }
      };

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [direction, speed]);
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item /* idx */) => (
          <li
            className="relative flex-shrink-0 w-auto px-8 py-6 border border-b-0 rounded-2xl border-slate-700"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] flex items-center justify-center"
              ></div>
              <span className="w-full flex justify-center relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.icon}
              </span>
              <div className="relative z-20 flex flex-row items-center justify-center w-full mt-6">
                <span className="flex flex-col justify-center gap-1">
                  <span className="text-center w-full flex justify-center text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                    <span className="text-center text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
