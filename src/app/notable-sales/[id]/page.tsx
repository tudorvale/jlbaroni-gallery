import Link from "next/link";
import { notableSales } from "@/lib/artworks";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ArtworkZoom from "@/components/ArtworkZoom";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return notableSales.map((artwork) => ({
    id: artwork.id.toString(),
  }));
}

export default async function ArtworkDetailPage({ params }: Props) {
  const { id } = await params;
  const artwork = notableSales.find((a) => a.id === Number.parseInt(id));

  if (!artwork) {
    notFound();
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-container">
        {/* Back Button */}
        <Link
          href="/notable-sales"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Notable Sales
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 shadow-lg">
          {/* Image with Zoom */}
          <div className="relative">
            <ArtworkZoom src={artwork.image} alt={artwork.title} />
            <p className="text-sm text-muted-foreground mt-4 text-center italic">
              Click image to zoom
            </p>
          </div>

          {/* Artwork Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                {artwork.title}
              </h1>

              {artwork.sold && (
                <div className="inline-block bg-red-600 text-white px-4 py-2 font-semibold mb-4">
                  SOLD
                </div>
              )}
            </div>

            <div className="space-y-6">
              {/* Artist */}
              <div>
                <h2 className="text-lg font-bold text-muted-foreground mb-1">Artist</h2>
                <p className="text-xl">{artwork.artist}</p>
              </div>

              {/* Year - Conditional Display */}
              {artwork.year && (
                <div>
                  <h2 className="text-lg font-bold text-muted-foreground mb-1">Date</h2>
                  <p className="text-xl">{artwork.year}</p>
                </div>
              )}

              {/* Medium - Conditional Display */}
              {artwork.medium && (
                <div>
                  <h2 className="text-lg font-bold text-muted-foreground mb-1">Medium</h2>
                  <p className="text-xl">{artwork.medium}</p>
                </div>
              )}

              {/* Dimensions - Conditional Display */}
              {artwork.dimensions && (
                <div>
                  <h2 className="text-lg font-bold text-muted-foreground mb-1">Dimensions</h2>
                  <p className="text-xl">{artwork.dimensions}</p>
                </div>
              )}

              {/* Price - Conditional Display */}
              {artwork.price && (
                <div>
                  <h2 className="text-lg font-bold text-muted-foreground mb-1">Price</h2>
                  <p className="text-xl">{artwork.price}</p>
                </div>
              )}

              {/* Description - Conditional Display with Rich Text */}
              {artwork.description && (
                <div className="pt-6 border-t border-gray-200">
                  <h2 className="text-lg font-bold text-muted-foreground mb-3">Description</h2>
                  <div className="prose prose-lg">
                    <p className="text-base leading-relaxed">{artwork.description}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Inquiry Button */}
            <div className="mt-auto pt-8">
              <Link
                href="/contact"
                className="inline-block w-full text-center btn-primary"
              >
                Inquire About This Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
