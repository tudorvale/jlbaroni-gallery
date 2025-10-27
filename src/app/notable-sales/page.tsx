import Link from "next/link";
import ProtectedImage from "@/components/ProtectedImage";
import { notableSales } from "@/lib/artworks";

export const metadata = {
  title: "Notable Sales | Jean-Luc Baroni Ltd",
  description: "Browse our collection of notable sales featuring Old Master paintings and drawings from the 14th to 19th century.",
};

export default function NotableSalesPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Notable Sales
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our distinguished collection of Old Master paintings and drawings that have found homes in prestigious collections worldwide
          </p>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {notableSales.map((artwork) => (
            <Link
              key={artwork.id}
              href={`/notable-sales/${artwork.id}`}
              className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <ProtectedImage
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {artwork.sold && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-sm font-semibold">
                    SOLD
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-1">
                  {artwork.artist}
                </p>
                <p className="text-muted-foreground text-sm">
                  {artwork.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
