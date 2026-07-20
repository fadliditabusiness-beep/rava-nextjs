"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % siteConfig.announcements.length);
        setVisible(true);
      }, 500);
      return () => clearTimeout(timeout);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary dark:bg-secondary-fixed-dim flex justify-center items-center h-8 w-full text-on-secondary font-label-caps text-label-caps z-[60] relative">
      <div
        className="transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {siteConfig.announcements[index]}
      </div>
    </div>
  );
}
