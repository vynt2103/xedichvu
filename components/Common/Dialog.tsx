"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-3xl rounded-xl bg-gray-900 p-4 shadow-2xl">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 text-gray-300 hover:text-white"
          aria-label="Close"
        >
          <AiOutlineClose size={20} />
        </button>
        <div className="mt-4 aspect-video w-full overflow-hidden rounded">
          {children}
        </div>
      </div>
    </div>
  );
}
