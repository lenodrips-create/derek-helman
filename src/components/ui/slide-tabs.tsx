"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type SlideTabsProps = {
  tabs?: string[];
  /** Called with the tab label and index when a tab is clicked. */
  onSelect?: (tab: string, index: number) => void;
};

export const SlideTabs = ({
  tabs = ["Home", "Pricing", "Features", "Docs", "Blog"],
  onSelect,
}: SlideTabsProps) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  // State to track the currently selected tab, defaulting to the first tab (index 0)
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Move the cursor onto the currently selected tab.
  const moveToSelected = () => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  };

  // Runs on mount and whenever the selected tab changes.
  useEffect(moveToSelected, [selected]);

  return (
    <ul
      // When the mouse leaves the container, return the cursor to the selected tab.
      onMouseLeave={moveToSelected}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 dark:border-white dark:bg-neutral-800"
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          setPosition={setPosition}
          onClick={() => {
            setSelected(i);
            onSelect?.(tab, i);
          }}
        >
          {tab}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick: () => void;
};

// Forwards its <li> to the parent (for the selected-tab cursor) while keeping
// a local ref for hover measurements: a callback ref has no `.current`.
const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick }, forwardedRef) => {
    const localRef = useRef<HTMLLIElement | null>(null);

    return (
      <li
        ref={(el) => {
          localRef.current = el;
          if (typeof forwardedRef === "function") forwardedRef(el);
          else if (forwardedRef) forwardedRef.current = el;
        }}
        onClick={onClick}
        onMouseEnter={() => {
          if (!localRef.current) return;

          const { width } = localRef.current.getBoundingClientRect();

          setPosition({
            left: localRef.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      >
        {children}
      </li>
    );
  }
);
Tab.displayName = "Tab";

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-12"
    />
  );
};
