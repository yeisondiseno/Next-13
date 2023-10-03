'use client';
import { useRef, useEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  id: string;
  children: ReactNode;
}

export const Portal = ({ id, children }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById(id);
    setMounted(true);
  }, [id]);

  return mounted && ref.current
    ? createPortal(<>{children}</>, ref.current)
    : null;
};
