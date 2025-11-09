import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-12 px-6 bg-black/2">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Image 
              src="/logo.png" 
              alt="SEOMonk" 
              width={100}
              height={24}
              className="h-6 w-auto opacity-80"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-black/60 text-sm">
            <div>
              © 2024 SEOMonk. All rights reserved.
            </div>
            <div>
              Developed by{" "}
              <Link 
                href="https://vikashk.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Vikash
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

