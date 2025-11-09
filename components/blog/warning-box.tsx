import { AlertTriangle } from "lucide-react";

interface WarningBoxProps {
  children: React.ReactNode;
  title?: string;
}

export function WarningBox({ children, title = "Warning" }: WarningBoxProps) {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 my-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
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

