import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Jean-Luc Baroni Ltd</h3>
            <p className="text-sm opacity-90">
              Specialists in Old Master paintings and drawings, serving collectors worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Introduction & Biography
                </Link>
              </li>
              <li>
                <Link href="/notable-sales" className="opacity-90 hover:opacity-100 transition-opacity">
                  Notable Sales
                </Link>
              </li>
              <li>
                <Link href="/catalogues" className="opacity-90 hover:opacity-100 transition-opacity">
                  Catalogues
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>16 Mason's Yard</li>
              <li>Duke Street, St. James's</li>
              <li>London SW1Y 6BU</li>
              <li className="mt-4">
                <a href="mailto:jwatson@jlbaroni.com" className="hover:opacity-100">
                  jwatson@jlbaroni.com
                </a>
              </li>
              <li>
                <a href="tel:+442074841199" className="hover:opacity-100">
                  +44 (0)20 7484 1199
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Monday - Friday</li>
              <li>10:00 AM - 6:00 PM</li>
              <li className="mt-4">By appointment only</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>&copy; {new Date().getFullYear()} Jean-Luc Baroni Ltd. All rights reserved.</p>
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">
              Privacy Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
