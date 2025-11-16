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
                    className="transition-all duration-300"
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
                    href="/projects" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Our Projects
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
                <li>
                    <Link 
                    href="/career" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Careers
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
                    <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Documentation
                    </a>
                </li>
                <li>
                    <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Research Papers
                    </a>
                </li>
                <li>
                    <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Blog
                    </a>
                </li>
                <li>
                    <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    API Reference
                    </a>
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
