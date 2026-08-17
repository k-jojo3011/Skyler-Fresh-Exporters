// src/data/journalArticles.js
// Single source of truth for Journal content — used by both the
// listing page (Journal.jsx) and the article detail page
// (JournalArticle.jsx) so they never fall out of sync.

import hass  from "../assets/images/Hass Avocado.jpeg";
import f1  from "../assets/images/FlowerD.jpeg";
import white from "../assets/images/White Chapel.JPG";
import lisi from "../assets/images/Lissianthus.jpg";
import rose from "../assets/images/Herbs.jpg";
import f2 from "../assets/images/Farm.jpeg";
import cld from "../assets/images/Cld-Room.JPG";

import ever from "../assets/images/EVER RED.JPG";


const journalArticles = [
  {
    slug: "kenyan-lisianthus-europe",
    title: "Why European Florists Are Switching to Kenyan Lisianthus",
    date: "November 21, 2025",
    tag: "Flowers",
    image: lisi,
    excerpt:
      "Highland cold nights are producing deeper color and longer vase life than lowland stock buyers are noticing, and reordering.",
    body: [
      "Lisianthus grown at altitude behaves differently than the lowland stock most European buyers are used to. Cold nights above 2,000 metres slow the bloom's development just enough to deepen its colour and tighten the petal structure, which translates directly into a longer vase life once the stems reach a shop floor in Amsterdam or Berlin.",
      "Farms in Kenya's central highlands have leaned into this over the past two seasons, shifting more acreage toward lisianthus varieties that respond well to the temperature swing. The result is a stem that holds its shape and colour for well past the ten-day mark that used to be the industry standard.",
      "For buyers, the practical upside is fewer write-offs on arrival and a product that photographs and sells better in the final days of its shelf life — not just the first few. That's a meaningful difference for florists working recurring weekly orders rather than one-off events.",
    ],
  },
  {
    slug: "ready-to-eat-herb-bundles",
    title: "The Rise of Ready-to-Eat Herb Bundles",
    date: "November 20, 2025",
    tag: "Herbs",
    image: rose,
    excerpt:
      "Retail buyers are asking for pre-portioned herb bundles instead of loose weight  a small packaging shift with real supply chain implications.",
    body: [
      "Retail buyers, particularly supermarket chains, have been asking for something that sounds simple but changes a lot upstream: pre-portioned bundles instead of loose-weight herbs sold by the kilo. A single recipe-sized bundle of rosemary or basil is easier to price, easier to shelve, and easier for a shopper to understand at a glance.",
      "The catch is that bundling has to happen close to harvest, while the herb is still at peak turgidity, or the bundle wilts unevenly and looks tired within a day. That's pushed some of the grading and portioning work earlier in the chain, right at the packing floor rather than at a distribution centre days later.",
      "For exporters willing to adapt their packing line, it's a genuine differentiator  a bundle that still looks fresh on day four is doing real work for a retailer's shelf life numbers, and that's the kind of detail that gets an exporter's contract renewed.",
    ],
  },
  {
    slug: "cold-chain-tech-vegetables",
    title: "Cold Chain Tech Changing Vegetable Exports",
    date: "November 18, 2025",
    tag: "Logistics",
    image: cld,
    excerpt:
      "Cheaper temperature loggers and better pre-cooling rooms are closing the quality gap between air-freighted vegetables and local produce.",
    body: [
      "Vegetable exports have historically lagged behind flowers on cold chain investment, mostly because the margins are thinner and the tolerance for spoilage is lower. That's shifted as temperature-logging hardware has gotten cheap enough to put on every pallet, not just a sample crate.",
      "A logger that costs a few dollars and reports temperature every few minutes for the whole journey gives both the exporter and the buyer a full picture of where, exactly, a shipment spent too long in a warm truck bed or a delayed customs queue. That visibility alone has pushed exporters to fix weak points in their own handling that used to go unnoticed.",
      "Combined with better pre-cooling rooms at the packing stage, the quality gap between air-freighted vegetables and produce sourced locally in the destination market has narrowed considerably over the past two years  which is opening doors with buyers who previously wrote off imported vegetables as not worth the logistics risk.",
    ],
  },
  {
    slug: "day-on-a-rose-farm",
    title: "Behind the Scenes: A Day on a Naivasha Rose Farm",
    date: "November 12, 2025",
    tag: "Farms",
    image: f2,
    excerpt:
      "Cutting starts before sunrise and the first two hours after that decide most of what happens to a stem's quality downstream.",
    body: [
      "Cutting on a Naivasha rose farm starts before the sun is fully up, while the stems are still cool and turgid from the overnight temperature drop. Cutting later in the day, once the sun has warmed the greenhouse, produces a softer stem that doesn't hold up as well through grading and packing.",
      "From the field, stems move fast  the target on well-run farms is under two hours from cut to pre-cooling room. That window is where most of a stem's eventual vase life gets decided; everything that happens after cold storage is really just managing the quality that was already locked in during those first two hours.",
      "Grading happens by hand, stem by stem, checking bud tightness, stem straightness, and leaf condition against the buyer's spec before anything gets bunched and boxed. It's slower than automated grading, but on a lakeside farm the labour is there, and the consistency it produces is part of what buyers are actually paying for.",
    ],
  },
  {
    slug: "avocado-boom-buyers-guide",
    title: "Kenya's Avocado Boom: What Buyers Should Know",
    date: "November 8, 2025",
    tag: "Vegetables",
    image: hass,
    excerpt:
      "Avocado acreage has expanded fast — buyers sourcing for the first time should know what separates a reliable supplier from an opportunistic one.",
    body: [
      "Avocado has been the fastest-growing export crop out of Kenya over the past several seasons, and acreage has expanded quickly enough that quality and consistency vary a lot more than they used to between suppliers. That's created real opportunity for buyers, but also real risk for anyone sourcing for the first time without an established relationship.",
      "The clearest signal of a reliable supplier is whether they can name their actual farms and describe their harvest windows with specifics  maturity testing by dry matter percentage, not just a rough sense of the season. Suppliers who can't answer that in detail are usually aggregating from wherever fruit is available that week, which shows up later as inconsistent ripening on arrival.",
      "Buyers new to the category should also ask directly about cold chain from the packhouse onward, since avocado is far less forgiving of temperature abuse than most vegetables  a few hours in a warm truck can shave days off shelf life that never shows up until the fruit is already on a shelf overseas.",
    ],
  },
  {
    slug: "sustainable-packaging-floriculture",
    title: "Sustainable Packaging Trends in Floriculture",
    date: "November 5, 2025",
    tag: "Logistics",
    image: f1,
    excerpt:
      "Buyers are starting to ask about packaging materials as often as they ask about stem quality here's what's actually changing.",
    body: [
      "Packaging has quietly become one of the more frequent questions buyers ask during onboarding, right alongside stem quality and freight timing. Plastic sleeves and non-recyclable box liners, standard for years, are increasingly a point of friction with retail buyers whose own customers are asking questions about waste.",
      "The shift in response has mostly been toward recycled cardboard boxes with water-based coatings instead of wax, and a move away from single-use plastic sleeves toward biodegradable alternatives where the stem still needs individual protection. None of this is dramatic on its own, but it adds up across a full shipment.",
      "The honest complication is cost sustainable packaging materials still carry a premium in Kenya's supply market, and that premium has to land somewhere. Exporters who've made the switch tend to frame it as a differentiator worth passing partially through to buyers who are asking for it specifically, rather than applying it across the board.",
    ],
  },
  {
    slug: "rosemary-demand-rising",
    title: "Herb Trends: Why Rosemary Demand Is Rising",
    date: "October 30, 2025",
    tag: "Herbs",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=1000&q=80",
    excerpt:
      "Rosemary orders have climbed steadily this year more to do with food service trends than home cooking.",
    body: [
      "Rosemary demand has climbed steadily through this year's quarters, and the driver appears to be food service more than retail. Restaurant menus leaning into Mediterranean and North African flavour profiles have pushed steady, larger-volume orders from wholesalers supplying that segment, rather than the smaller, spikier orders typical of retail holiday demand.",
      "That distinction matters for how a farm plans its growing calendar. Food service demand is comparatively steady week to week, which makes it easier to commit acreage to rosemary with confidence rather than treating it as a seasonal filler crop planted around the more volatile flower calendar.",
      "For herb growers in the Molo escarpment region specifically, the dry highland air actually works in rosemary's favour  the plant's oil content concentrates further in drier conditions, which is part of why buyers sourcing from this specific area have started asking for it by origin rather than just by variety.",
    ],
  },
  {
    slug: "vegetable-export-strategies-smallholders",
    title: "Vegetable Export Strategies for Smallholder Farms",
    date: "October 24, 2025",
    tag: "Vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1000&q=80",
    excerpt:
      "Smallholder farms can compete on quality even without the scale of larger operations  but it requires a different approach to aggregation.",
    body: [
      "Smallholder vegetable farms rarely have the volume to meet a large retail order on their own, but that doesn't mean they're locked out of export markets. The strategy that tends to work is aggregation through a trusted exporter who can combine several smallholder farms' output into a single, consistently graded shipment.",
      "The part that's easy to get wrong is grading consistency across farms that don't share equipment or training. Buyers don't see five different smallholder plots  they see one shipment, and if grading standards vary between contributing farms, the whole lot reads as inconsistent even when individual farms are producing excellent produce.",
      "Exporters who've built this model successfully invest in shared grading standards and, often, a shared collection point close to the farms so produce moves into cold storage quickly regardless of which individual farm it came from. That upfront coordination cost is what actually makes smallholder aggregation viable at export scale.",
    ],
  },
  {
    slug: "direct-to-buyer-sourcing",
    title: "The Future of Direct-to-Buyer Flower Sourcing",
    date: "October 18, 2025",
    tag: "Flowers",
    image: white,
    excerpt:
      "More buyers are skipping auction-based sourcing in favour of direct relationships with named exporters — here's why.",
    body: [
      "Auction-based flower sourcing, historically centred on the Dutch flower auctions, has been losing ground to direct relationships between buyers and named exporters over the past several years. The appeal for buyers is straightforward: pricing and volume certainty over a season, instead of exposure to whatever the auction produces on a given morning.",
      "For exporters, direct sourcing relationships mean planning acreage against a known order book rather than growing speculatively and hoping the auction price holds. That's a meaningfully different way to run a farm, and it rewards exporters who can communicate clearly and consistently rather than those who are simply the cheapest bidder that week.",
      "The trend has accelerated as buyers have gotten more comfortable requesting farm-level transparency knowing exactly which farm a stem came from, not just which country. Exporters who can name their partner farms with confidence are increasingly the ones winning these direct relationships over anonymous auction supply.",
    ],
  },
  {
    slug: "seasonal-guide-this-quarter",
    title: "Seasonal Guide: What's Blooming This Quarter",
    date: "October 12, 2025",
    tag: "Flowers",
    image: ever,
    excerpt:
      "A quick read on what's coming into peak season across the highlands right now, and what to expect on lead times.",
    body: [
      "This quarter's highland conditions have favoured lisianthus and hypericum in particular cooler-than-average nights have pushed both into strong colour development, with hypericum berry sets running fuller than the seasonal average.",
      "Roses remain steady year-round from the lakeside farms, though lead times have tightened slightly this quarter as several farms shift some greenhouse space toward lisianthus in response to buyer demand. Buyers planning larger rose orders should flag volume needs a cutting cycle ahead rather than the usual few days.",
      "On the herb side, rosemary and mint are both running at full volume with no seasonal constraints worth noting basil is the one to watch, since it's more sensitive to the shorter daylight hours moving into the next quarter and yields typically taper slightly until conditions shift back.",
    ],
  },
];

export default journalArticles;