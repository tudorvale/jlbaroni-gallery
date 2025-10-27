import Image from "next/image";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Catalogues | Jean-Luc Baroni Ltd",
  description: "Browse our collection catalogues featuring scholarly research on Old Master paintings and drawings.",
};

interface Catalogue {
  id: number;
  title: string;
  year: number;
  description: string;
  thumbnail: string;
  yumpuUrl: string;
}

const catalogues: Catalogue[] = [
  {
    id: 1,
    title: "Old Masters: A Selection",
    year: 2024,
    description: "Recent acquisitions of paintings and drawings from the 15th to 19th centuries",
    thumbnail: "https://m.media-amazon.com/images/I/61FE6XY41fL._UF1000,1000_QL80_.jpg",
    yumpuUrl: "https://www.yumpu.com",
  },
  {
    id: 2,
    title: "Italian Renaissance Drawings",
    year: 2023,
    description: "A comprehensive study of Italian drawings from the Renaissance period",
    thumbnail: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/5/24/1369414052135/Raphaels-drawing-of-the-T-010.jpg?width=465&dpr=1&s=none&crop=none",
    yumpuUrl: "https://www.yumpu.com",
  },
  {
    id: 3,
    title: "Flemish Masters",
    year: 2023,
    description: "Exceptional works from the Flemish and Dutch Golden Age",
    thumbnail: "https://blog.dorotheum.com/wp-content/uploads/2019/10/Blogbeitrag-Hampisch-800x499.jpg",
    yumpuUrl: "https://www.yumpu.com",
  },
  {
    id: 4,
    title: "Portraits Through the Ages",
    year: 2022,
    description: "A selection of portrait paintings spanning four centuries",
    thumbnail: "https://www.christies.com/media-library/images/features/articles/2017/07/31/old-master-hits/main-old-masters-tiled-new.jpg",
    yumpuUrl: "https://www.yumpu.com",
  },
  {
    id: 5,
    title: "Religious Art of the Renaissance",
    year: 2022,
    description: "Sacred imagery from Italian and Northern European masters",
    thumbnail: "https://chp-art.s3-us-west-1.amazonaws.com/old-masters/800/christ-in-the-storm.jpg",
    yumpuUrl: "https://www.yumpu.com",
  },
  {
    id: 6,
    title: "The Art of Drawing",
    year: 2021,
    description: "Old Master drawings showcasing diverse techniques and subjects",
    thumbnail: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/5/24/1369414052135/Raphaels-drawing-of-the-T-010.jpg?width=465&dpr=1&s=none&crop=none",
    yumpuUrl: "https://www.yumpu.com",
  },
  {
    id: 7,
    title: "TEFAF Maastricht 2021",
    year: 2021,
    description: "Our exhibition catalogue from TEFAF Maastricht",
    thumbnail: "https://apollo-magazine.com/wp-content/uploads/2021/03/Web-lead-image_FINAL_MET_ZOOM.jpg?fit=1000%2C666",
    yumpuUrl: "https://www.yumpu.com",
  },
  {
    id: 8,
    title: "Baroque Masterpieces",
    year: 2020,
    description: "Dramatic works from the Baroque period",
    thumbnail: "https://www.oldholland.com/wp-content/uploads/2020/02/Nightwatch-by-Rembrandt-van-Rijn-800-x-600.jpg",
    yumpuUrl: "https://www.yumpu.com",
  },
  {
    id: 9,
    title: "Collectors' Pieces",
    year: 2020,
    description: "Cabinet paintings and small-scale masterworks",
    thumbnail: "https://blog.dorotheum.com/wp-content/uploads/2019/10/138_69629_1.jpg",
    yumpuUrl: "https://www.yumpu.com",
  },
  {
    id: 10,
    title: "Landscape Traditions",
    year: 2019,
    description: "The evolution of landscape painting in European art",
    thumbnail: "https://www.pictorem.com/uploads/collection/F/FC10PRO8PMR/900_xzendor7_TheArtGalleryofJanGildemeesterJanszc1794-95byDutchPainterAdriaandeLelie-1755-1820-_FRAME.jpg",
    yumpuUrl: "https://www.yumpu.com",
  },
];

export default function CataloguesPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Catalogues
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our catalogues are recognized for their rigorous scholarship and beautiful presentation. Browse our digital collection to explore our exhibitions and special studies.
          </p>
        </div>

        {/* Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {catalogues.map((catalogue) => (
            <a
              key={catalogue.id}
              href={catalogue.yumpuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <Image
                  src={catalogue.thumbnail}
                  alt={catalogue.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/0 group-hover:bg-white p-3 rounded-full transition-all duration-300">
                    <ExternalLink className="w-6 h-6 text-white group-hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {catalogue.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {catalogue.year}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {catalogue.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
