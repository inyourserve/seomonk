import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Target, Download, Sparkles, Code, BarChart3, FileText, Github, ExternalLink, CheckCircle2, AlertTriangle, Layout, Search, Gauge, Layers, TrendingUp, Globe, Users, Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schema Markup Validator & Detector - SEOMonk Chrome Extension | JSON-LD Validator",
  description: "Best schema markup Chrome extension. Detect, validate, and get AI-powered suggestions for JSON-LD, Microdata, and RDFa schema markup. Free schema validator tool.",
};

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            The Best Extension
            <br />
            <span className="text-primary">for Schema Markup</span>
          </h1>
          <p className="text-xl text-black/60 mb-4 max-w-2xl mx-auto leading-relaxed">
            Detect, validate, and get AI-powered suggestions for schema markup. 
            <span className="text-black font-medium"> Scale your SEO and fix your technical SEO issues instantly.</span>
          </p>
          <p className="text-lg text-black/70 mb-8 max-w-xl mx-auto">
            <strong>Free to use.</strong>
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary-hover px-8 h-12">
              <Download className="w-4 h-4 mr-2" />
              Install Extension
            </Button>
          </div>
        </div>
      </section>


      {/* Download Section */}
      <section id="download" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-black text-center mb-4">
            Download
          </h2>
          <p className="text-black/60 text-center mb-8 max-w-2xl mx-auto">
            The latest version is <strong className="text-black">v1.0.0</strong> released on 2024.{" "}
            <Link href="/changelog" className="text-primary hover:underline">See release notes.</Link>
          </p>
          
          <div className="bg-white border border-black/10 rounded-lg p-8 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-black/5 text-black border-black/10 px-4 py-1">
                Chrome Web Store
              </Badge>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-medium text-black mb-2">Install</p>
                <div className="bg-black/5 rounded border border-black/10 p-4 font-mono text-sm">
                  <div className="text-black">1. Install from Chrome Web Store</div>
                  <div className="text-black mt-2">2. Pin extension to toolbar</div>
                  <div className="text-black mt-2">3. Visit any website and click the extension icon</div>
                </div>
              </div>
            </div>
            <Button className="w-full bg-primary text-white hover:bg-primary-hover">
              <Download className="w-4 h-4 mr-2" />
              Install from Chrome Web Store
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-black/50">
              Installation docs →
            </p>
          </div>
        </div>
      </section>

      {/* Feature: Schema Detection */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Schema Detection
              </h2>
              <p className="text-lg text-black/60 mb-6 leading-relaxed">
                Automatically detect JSON-LD, Microdata, and RDFa schema markup on any page with precision. 
                Identify all structured data implementations and their types.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-black/70">Detect multiple schema formats on the same page</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-black/70">Real-time analysis as you browse</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-black/70">Support for all Schema.org types</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 overflow-hidden bg-white shadow-sm">
              <Image
                src="/schema-detection.png"
                alt="Schema Detection - SEOMonk Chrome Extension showing detected schemas"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Validation */}
      <section className="py-20 px-6 bg-black/2">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="rounded-lg border border-black/10 overflow-hidden bg-white shadow-sm">
                <Image
                  src="/schema-validation.png"
                  alt="Schema Validation - SEOMonk Chrome Extension validating schema markup"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-black mb-4">
                Validation
              </h2>
              <p className="text-lg text-black/60 mb-6 leading-relaxed">
                Validate schema markup against Schema.org standards and catch errors before they impact SEO. 
                Get detailed error reports with actionable fixes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-black/70">Comprehensive error detection and reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-black/70">Schema.org compliance checking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-black/70">Detailed suggestions for fixing issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature: Smart Suggestions */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Smart Suggestions
              </h2>
              <p className="text-lg text-black/60 mb-6 leading-relaxed">
                Get AI-powered suggestions for missing schemas based on your page content with confidence scores. 
                Improve your SEO without manual research.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-black/70">AI-powered schema recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-black/70">Content analysis and matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-black/70">Confidence scoring for each suggestion</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-black/10 overflow-hidden bg-white shadow-sm">
              <Image
                src="/schema-suggestion.png"
                alt="Smart Suggestions - SEOMonk Chrome Extension suggesting schema types"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-6 bg-black/2">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Complete technical SEO audit solution. More features are coming to help you scale your SEO.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-black/10 bg-white opacity-60">
              <CardHeader>
                <CardTitle className="text-lg">Complete On-Page SEO Audit</CardTitle>
                <CardDescription>
                  Comprehensive on-page SEO analysis covering meta tags, headings, alt text, canonical URLs, and more (Coming soon)
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-black/10 bg-white opacity-60">
              <CardHeader>
                <CardTitle className="text-lg">Hreflang Checker</CardTitle>
                <CardDescription>
                  Validate hreflang tags for international SEO and multi-language sites (Coming soon)
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-black/10 bg-white opacity-60">
              <CardHeader>
                <CardTitle className="text-lg">Broken Link Checker</CardTitle>
                <CardDescription>
                  Detect and report broken internal and external links automatically (Coming soon)
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-black/10 bg-white opacity-60">
              <CardHeader>
                <CardTitle className="text-lg">Analytics Dashboard</CardTitle>
                <CardDescription>
                  Track schema coverage and SEO performance metrics over time (Coming soon)
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-black/10 bg-white opacity-60">
              <CardHeader>
                <CardTitle className="text-lg">Export Reports</CardTitle>
                <CardDescription>
                  Export detailed audit reports in PDF, CSV, and JSON formats (Coming soon)
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-black/10 bg-white opacity-60">
              <CardHeader>
                <CardTitle className="text-lg">More Technical SEO Checks</CardTitle>
                <CardDescription>
                  Additional technical SEO validations and recommendations (Coming soon)
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Scale Your SEO?
          </h2>
          <p className="text-xl text-black/60 mb-10 max-w-2xl mx-auto">
            Install SEOMonk today and fix your technical SEO issues. The best schema extension to help you scale your SEO with instant insights and actionable recommendations.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary-hover px-8 h-12 text-base">
            <Download className="w-4 h-4 mr-2" />
            Install Extension
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>


    </div>
  );
}
