// src/components/JournalSection.jsx
import "../styles/JournalSection.css";
import rosemary from "../assets/images/Herbs.jpg";
import flower from "../assets/images/Lilies.jpg";
import farm from "../assets/images/Farm.jpeg";


// Replace with real images:
// import post1Img from "../assets/images/journal-harvest.jpg";
// import post2Img from "../assets/images/journal-herbs.jpg";
// import post3Img from "../assets/images/journal-flowers.jpg";

const posts = [
  {
    id: 1,
    tag: "Farming",
    image: farm,
    title: "Why We Only Harvest in the Early Morning",
    excerpt:
      "Early harvest isn't just tradition it's science. Morning-cut produce stays fresher longer and directly affects the nutrition that ends up on your table.",
    date: "May 12, 2025",
    readTime: "4 min read",
    size: "large",
    // image: post1Img,
  },
  {
    id: 2,
    tag: "Herbs",
    image: rosemary,
    title: "5 Herbs Every Kenyan Kitchen Needs",
    excerpt: "From dhania to rosemary the essential herbs that elevate everyday cooking.",
    date: "April 28, 2025",
    readTime: "3 min read",
    size: "small",
    // image: post2Img,
  },
  {
    id: 3,
    tag: "Flowers",
    image: flower,
    title: "How to Keep Cut Flowers Fresh for 2 Weeks",
    excerpt: "Simple tips from our growers to help your bouquet last longer.",
    date: "April 10, 2025",
    readTime: "2 min read",
    size: "small",
    // image: post3Img,
  },
];

export default function JournalSection() {
  return (
    <section className="journal-section" id="journal">
      <div className="journal-inner">

        {/* Header */}
        <div className="section-header">
          <h2>Stories from <em>The Farm</em></h2>
          <a href="#journal">Skyler Fresh Journal →</a>
        </div>

        {/* Grid */}
        <div className="journal-grid">
          {posts.map((post) => (
            <article className={`journal-card journal-card--${post.size}`} key={post.id}>

              {/* Image / placeholder */}
              <div className="journal-img">
                {post.image
                  ? <img src={post.image} alt={post.title} />
                  : <span className="journal-emoji">{post.emoji}</span>
                }
              </div>

              {/* Body */}
              <div className="journal-body">
                <span className="journal-tag">{post.tag}</span>
                <h3>{post.title}</h3>
                {post.size === "large" && <p className="journal-excerpt">{post.excerpt}</p>}
                <div className="journal-meta">
                  <span>{post.date}</span>
                  <span className="journal-dot">·</span>
                  <span>{post.readTime}</span>
                </div>
                <a href="#" className="journal-read">Read article →</a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
