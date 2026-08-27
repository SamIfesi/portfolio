'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // lock background scroll

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background p-6 shadow-2xl"
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 10 }}
        transition={{
          type: 'spring',
          stiffness: 380,
          damping: 21,
          mass: 0.9,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1 text-neutral-500 transition-colors hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </motion.div>
    </div>
  );
}
