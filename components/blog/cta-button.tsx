import { Button } from "@/components/ui/button";
import { Download, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

interface CTAButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "outline";
  icon?: "download" | "arrow" | "external";
}

export function CTAButton({ text, href = "#", variant = "primary", icon = "arrow" }: CTAButtonProps) {
  const iconMap = {
    download: Download,
    arrow: ArrowRight,
    external: ExternalLink,
  };

  const Icon = iconMap[icon];
  const isExternal = href.startsWith("http");

  const buttonClasses = variant === "primary"
    ? "bg-primary text-white hover:bg-primary-hover"
    : "border-black/20 text-black hover:bg-black/5";

  const button = (
    <Button className={buttonClasses}>
      {icon === "download" && <Icon className="w-4 h-4 mr-2" />}
      {text}
      {(icon === "arrow" || icon === "external") && <Icon className="w-4 h-4 ml-2" />}
    </Button>
  );

  if (isExternal) {
    return <Link href={href} target="_blank" rel="noopener noreferrer">{button}</Link>;
  }

  return <Link href={href}>{button}</Link>;
}

