"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-black/10 bg-black/5">
      {(title || language) && (
        <div className="bg-black/5 px-4 py-2 flex items-center justify-between border-b border-black/10">
          <div className="flex items-center gap-2">
            {title && <span className="text-sm font-medium text-black">{title}</span>}
            {language && (
              <span className="text-xs text-black/50 bg-black/5 px-2 py-1 rounded">
                {language}
              </span>
            )}
          </div>
          <button
            onClick={copyToClipboard}
            className="text-black/50 hover:text-black transition-colors p-1"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-primary" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-black/80">{code}</code>
      </pre>
    </div>
  );
}

