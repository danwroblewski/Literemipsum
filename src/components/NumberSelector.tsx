import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface NumberSelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function NumberSelector({ value, onChange, min = 1, max = 8 }: NumberSelectorProps) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrease}
        disabled={value <= min}
        className="p-2 rounded-full hover:bg-midnight-700 disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200 bg-midnight-800 hover:text-amber-200"
        aria-label="Decrease paragraphs"
      >
        <Minus size={24} className="text-amber-200" />
      </button>
      <span className="text-2xl font-serif w-8 text-center text-amber-100">{value}</span>
      <button
        onClick={increase}
        disabled={value >= max}
        className="p-2 rounded-full hover:bg-midnight-700 disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200 bg-midnight-800 hover:text-amber-200"
        aria-label="Increase paragraphs"
      >
        <Plus size={24} className="text-amber-200" />
      </button>
    </div>
  );
}