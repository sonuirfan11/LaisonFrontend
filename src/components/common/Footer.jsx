import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import logo from "../../assets/logo.png";


export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12 w-12" />
            <span className="text-lg font-semibold text-black">Laison</span>
          </div>
          <p className="mt-4 text-sm">
            Empowering businesses with smart solutions — making operations
            easier to manage, track, and grow.
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#"><Twitter className="w-5 h-5 hover:text-black" /></a>
            <a href="#"><Instagram className="w-5 h-5 hover:text-black" /></a>
            <a href="#"><Linkedin className="w-5 h-5 hover:text-black" /></a>
            <a href="#"><Github className="w-5 h-5 hover:text-black" /></a>
            <a href="#"><Facebook className="w-5 h-5 hover:text-black" /></a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/features" className="hover:text-black">Features</a></li>
            <li><a href="/pricing" className="hover:text-black">Pricing</a></li>
            <li><a href="/integrations" className="hover:text-black">Integrations</a></li>
            <li><a href="/changelog" className="hover:text-black">Changelog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/docs" className="hover:text-black">Documentation</a></li>
            <li><a href="/tutorials" className="hover:text-black">Tutorials</a></li>
            <li><a href="/blog" className="hover:text-black">Blog</a></li>
            <li><a href="/support" className="hover:text-black">Support</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-black mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-black">About</a></li>
            <li><a href="/careers" className="hover:text-black">Careers</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
            <li><a href="/partners" className="hover:text-black">Partners</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Policy Line */}
      <div className="border-t border-gray-200 py-6 text-sm text-center text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p>© {new Date().getFullYear()} Laison. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-black">Privacy Policy</a>
          <a href="/terms" className="hover:text-black">Terms of Service</a>
          <a href="/cookies" className="hover:text-black">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}
