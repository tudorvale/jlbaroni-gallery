import Link from "next/link";
import ProtectedImage from "@/components/ProtectedImage";
import { heroArtwork } from "@/lib/artworks";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Featured Artwork */}
      <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-30">
          <ProtectedImage
            src={heroArtwork.image}
            alt={heroArtwork.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-container text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Jean-Luc Baroni Ltd
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Old Master Paintings & Drawings
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-80">
              Specialists in European paintings and works on paper from the 14th to the 19th century
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/notable-sales" className="btn-primary">
                View Notable Sales
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              Introduction & Biography
            </h2>

            <div className="prose prose-lg mx-auto">
              <p className="text-lg leading-relaxed mb-6">
                Jean-Luc Baroni has been dealing in Old Master paintings and drawings for over four decades.
                Based in London's prestigious St. James's district, the gallery has established itself as one
                of the world's leading authorities on European art from the 14th to the 19th century.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The gallery specializes in museum-quality works by the great masters of European art, with
                particular expertise in Italian, Flemish, and Dutch paintings and drawings. Our collection
                encompasses religious and mythological scenes, portraits, landscapes, and still lifes, each
                piece carefully selected for its historical significance, aesthetic merit, and provenance.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Jean-Luc Baroni Ltd has placed important works in major museums and private collections
                worldwide, including the Metropolitan Museum of Art, the National Gallery, the Louvre, and
                the Getty Museum. We pride ourselves on our scholarly approach, providing comprehensive
                research and documentation for every work we handle.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We participate in prestigious art fairs including TEFAF Maastricht, where we have been
                exhibiting for many years. Our catalogues are recognized for their rigorous scholarship
                and are widely collected by art historians and bibliophiles.
              </p>

              <p className="text-lg leading-relaxed">
                Visitors are welcome by appointment to view works in our gallery in Mason's Yard, where
                they can experience these masterpieces in an intimate setting and benefit from our
                extensive knowledge and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Featured Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of Old Master paintings and drawings
            </p>
          </div>

          <div className="text-center">
            <Link href="/notable-sales" className="inline-block btn-primary">
              View All Notable Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
