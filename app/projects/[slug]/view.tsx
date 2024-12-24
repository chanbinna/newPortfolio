"use client";

import { useEffect, useRef } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
  const hasReported = useRef(false); // Prevent multiple increments

  useEffect(() => {
    if (hasReported.current) return; // Only increment once
    hasReported.current = true;

    fetch("/api/incr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
  }, [slug]);

  return null;
};