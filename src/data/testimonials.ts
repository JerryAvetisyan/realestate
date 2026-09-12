export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amara Okafor",
    role: "Bought in Beverly Hills",
    quote:
      "From the first viewing to closing, the team made the whole process feel effortless. We found a home that exceeded every expectation.",
    avatar: "https://i.pravatar.cc/160?img=47",
  },
  {
    id: "t2",
    name: "Daniel Reyes",
    role: "Sold in Austin",
    quote:
      "They priced our property perfectly and had three offers within a week. Genuinely the most professional agency we've ever worked with.",
    avatar: "https://i.pravatar.cc/160?img=12",
  },
  {
    id: "t3",
    name: "Sophie Laurent",
    role: "Rented in Chicago",
    quote:
      "I relocated across the country and they handled everything remotely. My loft was move-in ready the day I landed. Incredible service.",
    avatar: "https://i.pravatar.cc/160?img=32",
  },
  {
    id: "t4",
    name: "Marcus Bennett",
    role: "Invested in Miami",
    quote:
      "Their market insight is unmatched. Every recommendation they made turned into a smart investment. I won't work with anyone else.",
    avatar: "https://i.pravatar.cc/160?img=68",
  },
];
