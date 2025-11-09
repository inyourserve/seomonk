import { Lightbulb } from "lucide-react";

interface TipBoxProps {
  children: React.ReactNode;
  title?: string;
}

export function TipBox({ children, title = "Tip" }: TipBoxProps) {
  return (
    <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 my-6">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold text-black mb-2">{title}</h4>
          <div className="text-black/70 prose prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

