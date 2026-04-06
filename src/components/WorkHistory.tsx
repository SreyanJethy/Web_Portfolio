"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { motion } from "framer-motion";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <div className="space-y-8 mt-8">
      {timeline.map((item, index) => (
        <motion.div
          key={`timeline-${index}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex flex-col md:flex-row gap-4 md:gap-8"
        >
          <div className="md:w-32 flex-shrink-0">
            <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
              {item.date}
            </span>
          </div>
          <div
            className="flex-1 rounded-xl p-5"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <h4
              className="font-bold text-sm mb-0.5"
              style={{ color: "var(--accent-purple)" }}
            >
              {item.company}
            </h4>
            <p
              className="font-semibold text-sm mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              {item.title}
            </p>
            <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
              {item.description}
            </p>
            <div className="space-y-1.5">
              {item.responsibilities.map((r, i) => (
                <div key={i} className="flex items-start gap-2">
                  <IconCircleCheckFilled
                    className="h-3 w-3 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--text-muted)" }}
                  />
                  <span className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
