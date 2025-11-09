import { Info } from "lucide-react";

interface InfoBoxProps {
  children: React.ReactNode;
  title?: string;
}

export function InfoBox({ children, title = "Info" }: InfoBoxProps) {
  return (
    <div className="bg-black/5 border-l-4 border-black/20 rounded-lg p-6 my-6">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-black/70 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          {title && <h4 className="font-semibold text-black mb-2">{title}</h4>}
          <div className="text-black/70 prose prose-sm max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

