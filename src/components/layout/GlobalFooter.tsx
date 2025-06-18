import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github, School, Mail, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const GlobalFooter: React.FC = () => {
  console.log('GlobalFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-muted-foreground border-t border-border/40">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About & Contact */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <School className="h-7 w-7 text-primary" />
              <span className="font-semibold text-lg text-foreground">Innovatech University</span>
            </Link>
            <p className="text-sm mb-2">
              Pioneering the future of engineering and technology research.
            </p>
            <div className="flex items-center gap-2 text-sm mt-3 mb-1">
              <Mail className="h-4 w-4 text-primary" />
              <span>info@innovatech.edu</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="font-semibold text-foreground mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/academics-hub" className="hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/faculty-directory" className="hover:text-primary transition-colors">Faculty</Link></li>
              <li><Link to="/research-and-innovation" className="hover:text-primary transition-colors">Research</Link></li>
              <li><Link to="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li> {/* Placeholder */}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h5 className="font-semibold text-foreground mb-3">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link></li> {/* Placeholder */}
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li> {/* Placeholder */}
              <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li> {/* Placeholder */}
              <li><Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link></li> {/* Placeholder */}
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h5 className="font-semibold text-foreground mb-3">Stay Updated</h5>
            <p className="text-sm mb-3">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" variant="default">Subscribe</Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-border/60" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {currentYear} Innovatech University. All rights reserved.</p>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;