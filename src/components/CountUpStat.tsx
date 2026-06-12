'use client';

import { useState, useEffect, useRef } from 'react';

interface CountUpStatProps {
  endValue: number;
  suffix?: string;
  duration?: number;
  label: string;
  labelClassName?: string;
  valueClassName?: string;
}

export default function CountUpStat({ 
  endValue, 
  suffix = '', 
  duration = 2000, 
  label,
  labelClassName = "text-secondary-fixed-dim font-label-md text-label-md uppercase tracking-wider",
  valueClassName = "text-white text-[48px] font-bold mb-2"
}: CountUpStatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const nextCount = Math.min(
        Math.floor((progress / duration) * endValue),
        endValue
      );
      
      setCount(nextCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, endValue, duration]);

  return (
    <div ref={ref}>
      <h3 className={valueClassName}>
        {count}{suffix}
      </h3>
      <p className={labelClassName}>
        {label}
      </p>
    </div>
  );
}
