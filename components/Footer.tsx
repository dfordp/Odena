import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#f5eed8] border-t border-border/45 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-2">
                <Link href="/" className="inline-flex items-center group">
                <Image
                    src="/odena-logo.png"
                    alt="Odena Logo"
                    width={80}
                    height={80}
                    className="transition-all duration-300 -ml-1.5 sm:ml-0 scale-110 sm:scale-100"
                />
                </Link>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs md:px-2">
                Building intelligent systems for ranking, segregating, and interpreting large datasets across domains.
                </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Explore
                </h4>
                <ul className="space-y-3">
                <li>
                    <Link 
                    href="/about" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    About Us
                    </Link>
                </li>
                <li>
                    <Link 
                    href="/career" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Careers
                    </Link>
                </li>
                <li>
                    <Link 
                    href="/services" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Services
                    </Link>
                </li>
                </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Resources
                </h4>
                <ul className="space-y-3">
                <li>
                    <Link 
                    href="/projects" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Projects
                    </Link>
                </li>
                <li>
                    <Link 
                    href="/publications" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Publications
                    </Link>
                </li>
                <li>
                    <Link 
                    href="/blogs" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Blogs
                    </Link>
                </li>
                </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Connect
                </h4>
                <p className="text-sm text-muted-foreground">
                Follow us for updates and insights
                </p>
                <div className="flex gap-3">
                <a
                    href="https://instagram.com/odena.labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#a8b5a0]/45 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    aria-label="Instagram"
                >
                    <svg 
                    className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
                <a
                    href="https://x.com/odenadotio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#a8b5a0]/45 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    aria-label="X (formerly Twitter)"
                >
                    <svg 
                    className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/company/odena/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-[#a8b5a0]/45 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                    href="mailto:dilpreetgrover2@gmail.com"
                    className="h-10 w-10 rounded-full bg-[#a8b5a0]/45 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    aria-label="Email"
                >
                    <Mail className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
                </a>
                </div>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                © {currentYear} Odena. All rights reserved.
                </p>
                <div className="flex gap-6">
                <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    Privacy Policy
                </a>
                <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    Terms of Service
                </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
}
