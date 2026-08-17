// src/data/signatureBlooms.js
// Shared source of truth for SignatureBlooms — used by both the grid
// (SignatureBlooms.jsx) and the product detail page
// (SignatureProductDetail.jsx) so they never fall out of sync.

import rose from "../assets/images/Red1.jpg";
import spray1 from "../assets/images/Jumilia.JPG";
import aurora from "../assets/images/Aurora.jpg";
import tulip from "../assets/images/White Chapel.JPG";
import chive from "../assets/images/Chives.jpg";
import agapa from "../assets/images/Agapanthus.jpg";
import pina  from "../assets/images/Pina colada Yellow.jpeg";
import cava from "../assets/images/Pastela Cava.jpeg";
import ever from "../assets/images/EVER RED.JPG";

const PRODUCTS = [
  {
    id: 1,
    name: "Ever Red Rose",
    sub: "Roses Standard",
    stemSize: "50cm",
    image: ever,
    badge: "Bestseller",
    type: "flower",
    description:
      "A deep, classic red rose grown for tight bud structure and long vase life. Cut at first light and pre-cooled within two hours, it holds its colour and shape well past the ten-day mark under normal handling.",
  },
  {
    id: 2,
    name: "Jumilia Rose Plant",
    sub: "Jumilia",
    stemSize: "60cm",
    image: spray1,
    badge: "Popular",
    type: "flower",
    description:
      "Multiple small blooms per stem in a soft white, well suited to bouquet work and mixed arrangements. A reliable filler variety with consistent bud count across the stem.",
  },
  {
    id: 3,
    name: "Aurora Delphinium",
    sub: "Premium Stems",
    stemSize: "70cm",
    image: aurora,
    badge: "Premium",
    type: "flower",
    description:
      "A tall, statement stem with dense floret spacing, grown in the highland cold-night conditions that deepen its colour. Best suited to buyers working larger arrangements or event orders.",
  },
  {
    id: 4,
    name: "White Chapel",
    sub: "Bouquets",
    stemSize: "Mixed",
    image: tulip,
    badge: "Seasonal",
    type: "flower",
    description:
      "A pre-arranged mixed bouquet built around the season's strongest stems. Composition varies slightly week to week depending on what's cutting at peak quality  ask the export desk for the current mix.",
  },
  {
    id: 5,
    name: "Fresh Chives",
    sub: "Culinary Herbs",
    weightKg: "0.1kg",
    image: chive,
    badge: null,
    type: "herb",
    description:
      "Fine, hollow-stemmed chives harvested same-day and cold-chained straight from the packing floor. Sold in small, food-service-friendly weights for consistent recipe portioning.",
  },
  {
    id: 6,
    name: "Agathanpthus",
    sub: "Summer Flower",
    stemSize: "45cm",
    image: agapa,
    badge: null,
    type: "flower",
    description:
      "A striking blue-toned summer bloom on a sturdy stem, popular for adding structure and colour contrast to mixed bunches.",
  },
  {
    id: 7,
    name: "Pastela Cava",
    sub: "Spray Roses",
    stemSize: "55cm",
    image: cava,
    badge: "New",
    type: "flower",
    description:
      "A newly added pastel spray rose variety, soft in tone with a full, layered bloom. Early feedback from buyers has been strong on vase life and colour consistency.",
  },
  {
    id: 8,
    name: "Pina Colada",
    sub: "Summer Flower",
    stemSize: "50cm",
    image: pina,
    badge: "Premium",
    type: "flower",
    description:
      "A warm yellow-toned bloom with strong stem rigidity, holding its form well through packing and transit. A dependable premium pick for buyers wanting brighter seasonal colour.",
  },
];

export default PRODUCTS;