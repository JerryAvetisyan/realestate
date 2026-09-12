export type ListingType = "For Sale" | "For Rent";

export interface Property {
  id: string;
  title: string;
  type: ListingType;
  price: number;
  rentPeriod?: "mo";
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: "p1",
    title: "The Cascade Residence",
    type: "For Sale",
    price: 2450000,
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: 4800,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "p2",
    title: "Harbor View Penthouse",
    type: "For Sale",
    price: 3195000,
    location: "Miami Beach, FL",
    beds: 4,
    baths: 3,
    sqft: 3600,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "p3",
    title: "The Birchwood Estate",
    type: "For Rent",
    price: 8900,
    rentPeriod: "mo",
    location: "Aspen, CO",
    beds: 6,
    baths: 5,
    sqft: 6200,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p4",
    title: "Skyline Loft No. 12",
    type: "For Rent",
    price: 4200,
    rentPeriod: "mo",
    location: "Chicago, IL",
    beds: 2,
    baths: 2,
    sqft: 1450,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p5",
    title: "The Meridian House",
    type: "For Sale",
    price: 1875000,
    location: "Austin, TX",
    beds: 4,
    baths: 3,
    sqft: 3200,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "p6",
    title: "Willow Creek Cottage",
    type: "For Sale",
    price: 895000,
    location: "Portland, OR",
    beds: 3,
    baths: 2,
    sqft: 2100,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p7",
    title: "The Onyx Modern",
    type: "For Sale",
    price: 2980000,
    location: "Scottsdale, AZ",
    beds: 5,
    baths: 5,
    sqft: 5100,
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "p8",
    title: "Cedar Point Retreat",
    type: "For Rent",
    price: 6500,
    rentPeriod: "mo",
    location: "Lake Tahoe, NV",
    beds: 4,
    baths: 3,
    sqft: 3400,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p9",
    title: "The Hamilton Townhome",
    type: "For Sale",
    price: 1345000,
    location: "Charleston, SC",
    beds: 3,
    baths: 3,
    sqft: 2650,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
  },
];
