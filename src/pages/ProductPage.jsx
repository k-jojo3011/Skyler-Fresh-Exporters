import React, { useState, useMemo } from 'react';
import '../styles/theme.css';
import '../styles/ProductPage.css';
import LeadMagnet from '../components/LeadMagnet';
import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import mirana from "../assets/images/Mirana.jpeg";
import lumistar from "../assets/images/Lumistar Dark.jpeg";
import dreamland from "../assets/images/Dreamland.jpeg";

/**
 * SkylerFresh — Shop / Manifest page
 * Simple grey banner + breadcrumb up top (matches the reference
 * layout exactly), then a faceted catalog: sidebar filters
 * (category, collection, colour, farm, availability), a toolbar
 * (sort + count + grid/list view), and the lot grid. No pricing,
 * no enquiry CTA on the card — informational only. Every card
 * states its type (flower collection, or "Culinary Herb") and a
 * short description.
 */

const COLLECTIONS = [
  { id: 'premium-garden', label: 'Premium Garden Roses' },
  { id: 'summer', label: 'Summer Collection' },
  { id: 'wedding-white', label: 'Wedding Whites' },
  { id: 'filler-foliage', label: 'Filler & Foliage' },
];

const LOTS = [
  {
    id: 'SF-RS-014',
    category: 'flower',
    collection: 'premium-garden',
    name: 'DreamLand Roses',
    farm: 'Naivasha Lakeside Farm',
    spec: { label: 'Stem length', options: ['40cm', '50cm', '60cm', '70cm'] },
    colors: [
      { name: 'Ruby Red', hex: '#A5222B' },
      { name: 'Wine', hex: '#5C1420' },
      { name: 'Blush Pink', hex: '#E8B4BC' },
    ],
    harvest: 'Year-round',
    note: 'Deep red, tight bud, 14+ day vase life.',
    image: dreamland,
  },
  {
    id: 'SF-LS-022',
    category: 'flower',
    collection: 'summer',
    name: 'Lisianthus — Mariachi',
    farm: 'Timau Highland Farm',
    spec: { label: 'Stem length', options: ['45cm', '55cm'] },
    colors: [
      { name: 'Lavender', hex: '#B7A4D1' },
      { name: 'Ivory', hex: '#F5F0E6' },
      { name: 'Blush Pink', hex: '#E8B4BC' },
    ],
    harvest: 'Apr – Nov',
    note: 'Double bloom, ruffled petal, low pollen.',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80',
  },
  {
    id: 'SF-HY-009',
    category: 'flower',
    collection: 'filler-foliage',
    name: 'Hypericum Berries',
    farm: 'Nyahururu Ridge Farm',
    spec: { label: 'Stem length', options: ['35cm', '45cm'] },
    colors: [
      { name: 'Coral', hex: '#E8825A' },
      { name: 'Cream', hex: '#F3E6C8' },
    ],
    harvest: 'Year-round',
    note: 'Filler stem, coral and cream berry sets.',
    image: 'https://images.unsplash.com/photo-1462530260150-162092dbf011?w=800&q=80',
  },
  {
    id: 'SF-RM-031',
    category: 'herb',
    name: 'Rosemary — Officinalis',
    farm: 'Molo Escarpment Farm',
    spec: { label: 'Net weight', options: ['0.5kg', '1kg', '5kg'] },
    harvest: 'Year-round',
    note: 'Woody stem, high oil content, food-grade.',
    image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=800&q=80',
  },
  {
    id: 'SF-MN-018',
    category: 'herb',
    name: 'Kenyan Mint',
    farm: 'Naivasha Lakeside Farm',
    spec: { label: 'Net weight', options: ['0.5kg', '1kg'] },
    harvest: 'Year-round',
    note: 'Sharp aromatic, cold-chain from harvest.',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=800&q=80',
  },
  {
    id: 'SF-BS-027',
    category: 'herb',
    name: 'Sweet Basil',
    farm: 'Timau Highland Farm',
    spec: { label: 'Net weight', options: ['0.5kg', '1kg', '5kg'] },
    harvest: 'Mar – Dec',
    note: 'Broad leaf, low bruising, air-freight grade.',
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=800&q=80',
  },
  {
    id: 'SF-BS-028',
    category: 'flower',
    collection: 'wedding-white',
    name: 'Mirana Flowers',
    farm: 'Timau Highland Farm',
    spec: { label: 'Stem length', options: ['40cm', '50cm', '60cm'] },
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Ivory', hex: '#F5F0E6' },
      { name: 'Blush', hex: '#E8B4BC' },
    ],
    harvest: 'Mar – Dec',
    note: 'Broad leaf, low bruising, air-freight grade.',
    image: mirana,
  },

    {
    id: 'SF-BS-030',
    category: 'herb',
    name: 'Sweet Basil',
    farm: 'Timau Highland Farm',
    spec: { label: 'Net weight', options: ['0.5kg', '1kg', '5kg'] },
    harvest: 'Mar – Dec',
    note: 'Broad leaf, low bruising, air-freight grade.',
    image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=800&q=80',
  },
  {
    id: 'SF-BS-029',
    category: 'flower',
    collection: 'summer',
    name: 'Lumistar Flowers',
    farm: 'Timau Highland Farm',
    spec: { label: 'Stem length', options: ['40cm', '50cm', '60cm'] },
    colors: [
      { name: 'Sunflower Yellow', hex: '#E8C547' },
      { name: 'Peach', hex: '#EFAF7B' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    harvest: 'Mar – Dec',
    note: 'Broad leaf, low bruising, air-freight grade.',
    image: lumistar,
  },
];

/*
  Swap the `image` URLs above for your own product photography once
  available — these are placeholders so the layout can be reviewed
  with real imagery instead of blank cards.
*/

function typeLabel(lot) {
  if (lot.category === 'flower') {
    return COLLECTIONS.find((c) => c.id === lot.collection)?.label || 'Flower';
  }
  return 'Culinary Herb';
}

function FilterSection({ title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="sf-filter-section">
      <button
        type="button"
        className="sf-filter-section-head"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="sf-filter-section-title">
          <span className="sf-filter-dot" aria-hidden="true" />
          {title}
        </span>
        <span className="sf-filter-toggle" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="sf-filter-section-body">{children}</div>}
    </div>
  );
}

function LotCard({ lot }) {
  const [spec, setSpec] = useState(lot.spec.options[0]);
  const [color, setColor] = useState(lot.colors ? lot.colors[0] : null);

  return (
    <article className="sf-lot">
      <div className="sf-lot-photo">
        <img src={lot.image} alt={lot.name} loading="lazy" />
        <span className="sf-lot-photo-tag">{lot.category}</span>
      </div>

      <div className="sf-lot-body">
        <div className="sf-lot-head">
          <span className="sf-field-label">Lot {lot.id}</span>
          <span className="sf-lot-collection">{typeLabel(lot)}</span>
        </div>

        <h3 className="sf-display sf-lot-name">{lot.name}</h3>
        <p className="sf-lot-note">{lot.note}</p>

        <div className="sf-lot-spec">
          <span className="sf-field-label">{lot.spec.label}</span>
          <div className="sf-spec-options" role="radiogroup" aria-label={lot.spec.label}>
            {lot.spec.options.map((opt) => (
              <button
                key={opt}
                type="button"
                role="radio"
                aria-checked={spec === opt}
                className={`sf-spec-btn${spec === opt ? ' is-active' : ''}`}
                onClick={() => setSpec(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {lot.colors && (
          <div className="sf-lot-colors">
            <span className="sf-field-label">Colour — {color.name}</span>
            <div className="sf-color-options" role="radiogroup" aria-label="Colour">
              {lot.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  role="radio"
                  aria-checked={color.name === c.name}
                  title={c.name}
                  className={`sf-color-swatch${color.name === c.name ? ' is-active' : ''}`}
                  style={{ backgroundColor: c.hex }}
                  onClick={() => setColor(c)}
                >
                  <span className="sf-color-swatch-check" aria-hidden="true">✓</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProductPage() {
  const [category, setCategory] = useState('all');
  const [collection, setCollection] = useState('all');
  const [selectedColors, setSelectedColors] = useState(() => new Set());
  const [selectedFarms, setSelectedFarms] = useState(() => new Set());
  const [availability, setAvailability] = useState('all');
  const [sort, setSort] = useState('name-asc');
  const [view, setView] = useState('grid');

  const flowerCount = LOTS.filter((l) => l.category === 'flower').length;
  const herbCount = LOTS.filter((l) => l.category === 'herb').length;

  const farms = useMemo(() => {
    const map = new Map();
    LOTS.forEach((l) => map.set(l.farm, (map.get(l.farm) || 0) + 1));
    return Array.from(map.entries());
  }, []);

  const colors = useMemo(() => {
    const map = new Map();
    LOTS.forEach((l) => (l.colors || []).forEach((c) => {
      if (!map.has(c.name)) map.set(c.name, c.hex);
    }));
    return Array.from(map.entries());
  }, []);

  const yearRoundCount = LOTS.filter((l) => l.harvest === 'Year-round').length;
  const seasonalCount = LOTS.length - yearRoundCount;

  function toggleFarm(farm) {
    setSelectedFarms((prev) => {
      const next = new Set(prev);
      next.has(farm) ? next.delete(farm) : next.add(farm);
      return next;
    });
  }

  function toggleColor(name) {
    setSelectedColors((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  function handleCategory(cat) {
    setCategory(cat);
    setCollection('all');
  }

  const visible = useMemo(() => {
    let list = LOTS.filter((l) => {
      if (category !== 'all' && l.category !== category) return false;
      if (collection !== 'all' && l.collection !== collection) return false;
      if (selectedColors.size > 0) {
        if (!l.colors || !l.colors.some((c) => selectedColors.has(c.name))) return false;
      }
      if (selectedFarms.size > 0 && !selectedFarms.has(l.farm)) return false;
      if (availability !== 'all') {
        const isYearRound = l.harvest === 'Year-round';
        if (availability === 'year-round' && !isYearRound) return false;
        if (availability === 'seasonal' && isYearRound) return false;
      }
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === 'lot') return a.id.localeCompare(b.id);
      if (sort === 'type') return typeLabel(a).localeCompare(typeLabel(b));
      return a.name.localeCompare(b.name);
    });

    return list;
  }, [category, collection, selectedColors, selectedFarms, availability, sort]);

  return (
    <>
      <Navbar />

      <div className="sf-root sf-shop">
        <header className="sf-shop-banner">
          <div className="sf-shop-banner-inner">
            <h1 className="sf-display sf-shop-banner-title">Shop</h1>
            <nav className="sf-shop-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <span>Shop</span>
            </nav>
          </div>
        </header>

        <div className="sf-shop-layout">
          <aside className="sf-shop-sidebar">
            <FilterSection title="Category">
              <ul className="sf-filter-list">
                <li>
                  <button
                    type="button"
                    className={`sf-filter-check${category === 'all' ? ' is-checked' : ''}`}
                    onClick={() => handleCategory('all')}
                  >
                    <span className="sf-filter-box" /> All lots
                    <span className="sf-filter-count">({LOTS.length})</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`sf-filter-check${category === 'flower' ? ' is-checked' : ''}`}
                    onClick={() => handleCategory('flower')}
                  >
                    <span className="sf-filter-box" /> Flowers
                    <span className="sf-filter-count">({flowerCount})</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`sf-filter-check${category === 'herb' ? ' is-checked' : ''}`}
                    onClick={() => handleCategory('herb')}
                  >
                    <span className="sf-filter-box" /> Herbs
                    <span className="sf-filter-count">({herbCount})</span>
                  </button>
                </li>
              </ul>
            </FilterSection>

            {category !== 'herb' && (
              <FilterSection title="Flower Collection">
                <ul className="sf-filter-list">
                  <li>
                    <button
                      type="button"
                      className={`sf-filter-check${collection === 'all' ? ' is-checked' : ''}`}
                      onClick={() => setCollection('all')}
                    >
                      <span className="sf-filter-box" /> All collections
                    </button>
                  </li>
                  {COLLECTIONS.map((c) => {
                    const count = LOTS.filter((l) => l.collection === c.id).length;
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          className={`sf-filter-check${collection === c.id ? ' is-checked' : ''}`}
                          onClick={() => setCollection(c.id)}
                        >
                          <span className="sf-filter-box" /> {c.label}
                          <span className="sf-filter-count">({count})</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </FilterSection>
            )}

            <FilterSection title="Availability">
              <ul className="sf-filter-list">
                <li>
                  <button
                    type="button"
                    className={`sf-filter-check${availability === 'all' ? ' is-checked' : ''}`}
                    onClick={() => setAvailability('all')}
                  >
                    <span className="sf-filter-box" /> All
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`sf-filter-check${availability === 'year-round' ? ' is-checked' : ''}`}
                    onClick={() => setAvailability('year-round')}
                  >
                    <span className="sf-filter-box" /> Year-round
                    <span className="sf-filter-count">({yearRoundCount})</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`sf-filter-check${availability === 'seasonal' ? ' is-checked' : ''}`}
                    onClick={() => setAvailability('seasonal')}
                  >
                    <span className="sf-filter-box" /> Seasonal
                    <span className="sf-filter-count">({seasonalCount})</span>
                  </button>
                </li>
              </ul>
            </FilterSection>

            <FilterSection title="Origin Farm" defaultOpen={false}>
              <ul className="sf-filter-list">
                {farms.map(([farm, count]) => (
                  <li key={farm}>
                    <button
                      type="button"
                      className={`sf-filter-check${selectedFarms.has(farm) ? ' is-checked' : ''}`}
                      onClick={() => toggleFarm(farm)}
                    >
                      <span className="sf-filter-box" /> {farm}
                      <span className="sf-filter-count">({count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </FilterSection>

            {category !== 'herb' && (
              <FilterSection title="Colour" defaultOpen={false}>
                <div className="sf-filter-colors">
                  {colors.map(([name, hex]) => (
                    <button
                      key={name}
                      type="button"
                      title={name}
                      className={`sf-color-swatch${selectedColors.has(name) ? ' is-active' : ''}`}
                      style={{ backgroundColor: hex }}
                      onClick={() => toggleColor(name)}
                    >
                      <span className="sf-color-swatch-check" aria-hidden="true">✓</span>
                    </button>
                  ))}
                </div>
              </FilterSection>
            )}
          </aside>

          <main className="sf-shop-main">
            <div className="sf-shop-toolbar">
              <div className="sf-view-toggle" role="group" aria-label="View">
                <button
                  type="button"
                  className={`sf-view-btn${view === 'grid' ? ' is-active' : ''}`}
                  onClick={() => setView('grid')}
                  aria-label="Grid view"
                >
                  ▦
                </button>
                <button
                  type="button"
                  className={`sf-view-btn${view === 'list' ? ' is-active' : ''}`}
                  onClick={() => setView('list')}
                  aria-label="List view"
                >
                  ☰
                </button>
              </div>

              <select
                className="sf-sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort lots"
              >
                <option value="name-asc">Alphabetically, A–Z</option>
                <option value="lot">Lot number</option>
                <option value="type">Type / collection</option>
              </select>

              <span className="sf-shop-count">Showing {visible.length} of {LOTS.length} lots</span>
            </div>

            <div className={`sf-lot-grid${view === 'list' ? ' sf-lot-grid--list' : ''}`}>
              {visible.map((lot) => (
                <LotCard key={lot.id} lot={lot} />
              ))}
              {visible.length === 0 && (
                <p className="sf-shop-empty">No lots match those filters right now — try clearing one.</p>
              )}
            </div>
          </main>
        </div>

        <div className="sf-shop-leadmagnet">
          <LeadMagnet variant="guide" />
        </div>
      </div>

      <Footer />
    </>
  );
}