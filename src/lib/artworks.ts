export interface Artwork {
  id: number;
  title: string;
  artist: string;
  year: string;
  medium: string;
  dimensions: string;
  price?: string;
  description?: string;
  image: string;
  sold?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Portrait of a Distinguished Gentleman",
    artist: "Old Master",
    year: "17th Century",
    medium: "Oil on canvas",
    dimensions: "76 × 63 cm",
    image: "/uploads/hero.jpg",
    description: "An exquisite portrait of a distinguished gentleman, masterfully rendered with rich impasto technique and dramatic chiaroscuro. The subject, adorned in elegant period attire and a golden hat, holds what appears to be a letter or document, suggesting a person of importance and learning. The warm, earthy palette and loose, expressive brushwork are characteristic of the Dutch Golden Age masters.",
  },
  {
    id: 2,
    title: "The Collector's Gallery",
    artist: "Adriaan de Lelie",
    year: "1794-1795",
    medium: "Oil on panel",
    dimensions: "70 × 90 cm",
    image: "https://www.pictorem.com/uploads/collection/F/FC10PRO8PMR/900_xzendor7_TheArtGalleryofJanGildemeesterJanszc1794-95byDutchPainterAdriaandeLelie-1755-1820-_FRAME.jpg",
    description: "Interior view of Jan Gildemeester Jansz's art gallery, depicting the connoisseur culture of the late 18th century. The painting shows elegantly dressed visitors examining artworks in an ornate gallery space.",
  },
  {
    id: 3,
    title: "The Night Watch",
    artist: "After Rembrandt van Rijn",
    year: "18th Century",
    medium: "Oil on canvas",
    dimensions: "80 × 100 cm",
    image: "https://www.oldholland.com/wp-content/uploads/2020/02/Nightwatch-by-Rembrandt-van-Rijn-800-x-600.jpg",
    description: "A fine period copy of Rembrandt's masterpiece, demonstrating the enduring influence of the Dutch Golden Age master.",
  },
  {
    id: 4,
    title: "Christ in the Storm on the Sea of Galilee",
    artist: "Flemish School",
    year: "17th Century",
    medium: "Oil on canvas",
    dimensions: "80 × 101 cm",
    image: "https://chp-art.s3-us-west-1.amazonaws.com/old-masters/800/christ-in-the-storm.jpg",
    description: "A dramatic biblical scene depicting Christ calming the storm, executed with masterful attention to light and atmospheric effects.",
  },
  {
    id: 5,
    title: "Portrait of a Lady",
    artist: "Thomas Gainsborough (Circle of)",
    year: "c. 1780",
    medium: "Oil on canvas",
    dimensions: "76 × 63 cm",
    image: "https://www.christies.com/media-library/images/features/articles/2017/07/31/old-master-hits/main-old-masters-tiled-new.jpg",
  },
  {
    id: 6,
    title: "Madonna and Child",
    artist: "Italian School",
    year: "16th Century",
    medium: "Oil on panel",
    dimensions: "45 × 35 cm",
    image: "https://apollo-magazine.com/wp-content/uploads/2021/03/Web-lead-image_FINAL_MET_ZOOM.jpg?fit=1000%2C666",
  },
];

// Generate more artworks for the Notable Sales page (40+ total)
export const notableSales: Artwork[] = [
  ...artworks,
  ...Array.from({ length: 35 }, (_, i) => ({
    id: artworks.length + i + 1,
    title: `Notable Artwork ${i + 7}`,
    artist: ["Flemish School", "Italian School", "Dutch School", "French School"][i % 4],
    year: `${1600 + (i * 10)}`,
    medium: ["Oil on canvas", "Oil on panel", "Tempera on panel"][i % 3],
    dimensions: `${60 + (i % 40)} × ${50 + (i % 30)} cm`,
    image: artworks[i % artworks.length].image,
    sold: i % 3 === 0,
  })),
];

export const heroArtwork = artworks[0];
