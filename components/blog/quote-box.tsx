import { Quote } from "lucide-react";

interface QuoteBoxProps {
  children: React.ReactNode;
  author?: string;
  source?: string;
}

export function QuoteBox({ children, author, source }: QuoteBoxProps) {
  return (
    <blockquote className="border-l-4 border-primary pl-6 pr-4 py-4 my-6 bg-primary/5 rounded-r-lg">
      <Quote className="w-5 h-5 text-primary mb-3" />
      <div className="text-lg text-black/80 italic mb-3">
        {children}
      </div>
      {(author || source) && (
        <footer className="text-sm text-black/60">
          {author && <cite className="font-medium">{author}</cite>}
          {author && source && <span> in </span>}
          {source && <cite>{source}</cite>}
        </footer>
      )}
    </blockquote>
  );
}

