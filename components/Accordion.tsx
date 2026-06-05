'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i} className="border-b border-gray-800">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-4 px-2 text-left group hover:bg-white/[0.02] transition-colors"
          >
            <span className="font-dodger text-[11px] tracking-[0.15em] text-gray-300 group-hover:text-white transition-colors">
              {item.title}
            </span>
            {openIndex === i ? (
              <Minus className="w-4 h-4 text-red-500 flex-shrink-0" />
            ) : (
              <Plus className="w-4 h-4 text-gray-500 group-hover:text-red-500 flex-shrink-0 transition-colors" />
            )}
          </button>
          {openIndex === i && (
            <div className="px-2 pb-4 text-sm text-gray-400 leading-relaxed animate-in">
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
