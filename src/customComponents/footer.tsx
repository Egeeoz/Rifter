import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[--border] mt-auto">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-xs">
            <a
              href="/privacy"
              className="hover:text-[--primary] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-[--primary] transition-colors"
            >
              Terms of Service
            </a>
            <a href="/faq" className="hover:text-[--primary] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-xs text-[--muted-foreground]">© Rifter 2025</div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-[--border] text-xs text-[--muted-foreground] text-center md:text-left">
          Rifter isn't endorsed by Riot Games and doesn't reflect the views or
          opinions of Riot Games or anyone officially involved in producing or
          managing Riot Games properties. Riot Games, and all associated
          properties are trademarks or registered trademarks of Riot Games, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
