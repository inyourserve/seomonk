import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-black/10 sticky top-0 bg-white z-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="SEOMonk" 
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#features" className="text-black/70 hover:text-black text-sm font-medium transition-colors">
              Features
            </Link>
            <Link href="/blog" className="text-black/70 hover:text-black text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link href="/changelog" className="text-black/70 hover:text-black text-sm font-medium transition-colors">
              Changelog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

