"use client";

import { SlideTabs } from "@/components/ui/slide-tabs";

const SECTIONS = [
  { label: "Home", id: "top" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Credentials", id: "credentials" },
  { label: "Contact", id: "contact" },
];

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <SlideTabs
        tabs={SECTIONS.map((s) => s.label)}
        onSelect={(_, i) => {
          const { id } = SECTIONS[i];
          if (id === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </nav>
  );
}
