import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog - SEOMonk",
  description: "All notable changes and updates to SEOMonk Chrome Extension.",
};

export default function ChangelogPage() {
  return (
    <div>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-black/70 hover:text-black mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Changelog
            </h1>
            <p className="text-lg text-black/60">
              All notable changes and updates to SEOMonk Chrome Extension.
            </p>
          </div>

          <div className="space-y-12">
            {/* Version 1.0.0 */}
            <div className="border-b border-black/10 pb-12">
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
                  v1.0.0
                </Badge>
                <div className="flex items-center gap-2 text-black/50 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>January 2024</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-black mb-4">
                Initial Release
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-black mb-2">Added</h3>
                  <ul className="list-disc list-inside space-y-1 text-black/70">
                    <li>Schema detection for JSON-LD, Microdata, and RDFa formats</li>
                    <li>Schema validation against Schema.org standards</li>
                    <li>AI-powered schema suggestions based on page content</li>
                    <li>Analytics dashboard for SEO performance tracking</li>
                    <li>Export reports in PDF, CSV, and JSON formats</li>
                    <li>16+ comprehensive SEO checks including meta tags, headings, alt text, and more</li>
                    <li>Real-time analysis as you browse websites</li>
                    <li>Support for all Schema.org types</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

