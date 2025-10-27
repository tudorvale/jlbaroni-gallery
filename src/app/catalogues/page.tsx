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
    title: "Oeuvres sur Papier - Works on Paper",
    year: 2022,
    description: "Jean-Luc Baroni & Marty de Cambiaire's latest collection of works on paper showcasing exceptional drawings and prints.",
    thumbnail: "/uploads/oeuvres-sur-papier.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/67425778/oeuvres-sur-papier-works-on-paper-jean-luc-baroni-marty-de-cambiaire-2022",
  },
  {
    id: 2,
    title: "XVII - Master Paintings",
    year: 2020,
    description: "A curated selection of 17th century master paintings presented by Jean-Luc Baroni and Marty de Cambiaire.",
    thumbnail: "/uploads/xvii-master-paintings.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63157294/xvii-master-paintings-jean-luc-baroni-and-marty-de-cambiaire",
  },
  {
    id: 3,
    title: "Works on Paper 2019",
    year: 2019,
    description: "An exceptional collection of drawings and works on paper from various periods and schools.",
    thumbnail: "/uploads/works-on-paper-2019.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63151998/works-on-paper-2019-jean-luc-baroni",
  },
  {
    id: 4,
    title: "Paintings Drawings Sculptures 2016",
    year: 2016,
    description: "A comprehensive catalogue featuring paintings, drawings, and sculptures from the gallery's collection.",
    thumbnail: "/uploads/paintings-drawings-scuptures-2016.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63151988/paintings-drawings-sculptures-2016-jean-luc-baroni",
  },
  {
    id: 5,
    title: "Premiere Pensees",
    year: 2015,
    description: "First thoughts and initial sketches by Old Master artists, revealing their creative process.",
    thumbnail: "/uploads/premiers-pensees.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63151924/premiere-pensees-jean-luc-baroni",
  },
  {
    id: 6,
    title: "The British Art Medal Society",
    year: 2015,
    description: "A specialized catalogue featuring British art medals and medallions from various periods.",
    thumbnail: "/uploads/british-art-medel-society.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63149337/the-british-art-medal-society-jean-luc-baroni",
  },
  {
    id: 7,
    title: "Baldassarre Franceschini, Il Volterrano",
    year: 2015,
    description: "A focused study on the works of Baldassarre Franceschini, known as Il Volterrano, Baroque master.",
    thumbnail: "/uploads/baldassarre-franceschini-il-volterrano.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63151946/baldassarre-franceschini-il-volterrano-jean-luc-baroni",
  },
  {
    id: 8,
    title: "Jacopo Ligozzi",
    year: 2014,
    description: "An in-depth catalogue exploring the works of Jacopo Ligozzi, Renaissance painter and naturalist.",
    thumbnail: "/uploads/jacopo-ligozzi.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63148947/jacopo-ligozzi-2014-jean-luc-baroni",
  },
  {
    id: 9,
    title: "Catalogue - 2014",
    year: 2014,
    description: "The gallery's comprehensive 2014 catalogue featuring a diverse selection of Old Master works.",
    thumbnail: "/uploads/catalogue-jlb-2014.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63149322/catalogue-2014-jean-luc-baroni",
  },
  {
    id: 10,
    title: "Gillis Egidius Claeissens",
    year: 2014,
    description: "A scholarly examination of works by Gillis Egidius Claeissens, Flemish painter of the 16th century.",
    thumbnail: "/uploads/gillis-egidius-claeissens.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63151960/gillis-egidius-claeissens-jean-luc-baroni",
  },
  {
    id: 11,
    title: "Giuseppe-Bernardino Bison",
    year: 2013,
    description: "A monographic catalogue dedicated to Giuseppe-Bernardino Bison, Italian painter and fresco artist.",
    thumbnail: "/uploads/guiseppe-bernardino-bison.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63148890/giuseppe-bernardino-bison-jean-luc-baroni",
  },
  {
    id: 12,
    title: "Jacob Jordaens - A Rediscovered Cartoon for a Tapestry",
    year: 2012,
    description: "The rediscovery and analysis of a previously unknown Jacob Jordaens cartoon for tapestry production.",
    thumbnail: "/uploads/jacob-jordeans.jpg",
    yumpuUrl: "https://www.yumpu.com/en/document/view/63148940/jacob-jordaens-a-rediscovered-cartoon-for-a-tapestry-jean-luc-baroni",
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
