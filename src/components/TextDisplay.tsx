import React from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/textGenerator';

interface TextDisplayProps {
  paragraphs: string[];
}

export function TextDisplay({ paragraphs }: TextDisplayProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    const result = await copyToClipboard(paragraphs.join('\n\n'));
    if (result.success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="bg-midnight-900/90 backdrop-blur-sm border border-midnight-700 rounded-xl shadow-lg">
        <div className="border-b border-midnight-700 p-4 flex justify-between items-center">
          <h2 className="text-xl font-serif text-amber-100">Generated Text</h2>
          <button
            onClick={handleCopy}
            className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 ${
              copied 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-copper-400 hover:bg-copper-500 text-midnight-950'
            }`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied!' : 'Copy Text'}
          </button>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-amber-100 font-serif">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}