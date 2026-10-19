
// import React, { useState } from "react";
// import "./App.css";
// import akmal from "./photo_6246590875165202638_y.jpg";

// const videos = [
//   {
//     id: "dQw4w9WgXcQ",
//     category: "stories",
//     label: "COMMUNITY",
//     title: "Educating Children, Building Futures",
//     description:
//       "Every child deserves access to education and the opportunity to dream bigger.",
//   },
//   {
//     id: "9bZkp7q19f0",
//     category: "latest",
//     label: "CLEAN WATER",
//     title: "Bringing Clean Water to Communities",
//     description:
//       "Working towards healthier communities through awareness and meaningful action.",
//   },
//   {
//     id: "kJQP7kiw5Fk",
//     category: "stories",
//     label: "ENVIRONMENT",
//     title: "Growing a Greener Tomorrow",
//     description:
//       "Inspiring people to protect nature and build a sustainable future together.",
//   },
// ];

// const impact = [
//   { number: "500+", label: "Children Supported" },
//   { number: "10", label: "Villages Reached" },
//   { number: "2,000+", label: "Trees Planted" },
//   { number: "100%", label: "Committed to Change" },
// ];

// function App() {
//   const [tab, setTab] = useState("all");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const filteredVideos =
//     tab === "all"
//       ? videos
//       : videos.filter((video) => video.category === tab);

//   const whatsappNumber = "919876543210";
//   const message = encodeURIComponent(
//     "Hello Akmal, I would like to support your social impact initiatives."
//   );
//   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

//   const shareVideo = async (video) => {
//     const url = `${window.location.origin}${window.location.pathname}#stories`;

//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: video.title,
//           text: video.description,
//           url,
//         });
//       } catch (error) {
//         if (error.name !== "AbortError") {
//           console.error("Sharing failed:", error);
//         }
//       }
//     } else if (navigator.clipboard) {
//       try {
//         await navigator.clipboard.writeText(url);
//         alert("Website link copied. You can now share it!");
//       } catch {
//         window.open(
//           `https://wa.me/?text=${encodeURIComponent(video.title + " " + url)}`,
//           "_blank",
//           "noopener,noreferrer"
//         );
//       }
//     } else {
//       window.open(
//         `https://wa.me/?text=${encodeURIComponent(video.title + " " + url)}`,
//         "_blank",
//         "noopener,noreferrer"
//       );
//     }
//   };

// const [form, setForm] = useState({
//   name: "",
//   phone: "",
//   interest: "Volunteer",
//   message: "",
// });

// const handleChange = (e) =>
//   setForm({ ...form, [e.target.name]: e.target.value });

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const text = encodeURIComponent(
//     `Hello Akmal,\n\nName: ${form.name}\nPhone: ${form.phone}\nI want to: ${form.interest}\n\n${form.message}`
//   );
//   window.open(
//     `https://wa.me/${whatsappNumber}?text=${text}`,
//     "_blank",
//     "noopener,noreferrer"
//   );
// };

//   return (
//     <div className="premium">
//       <div className="announcement">
//         <span className="announcement-dot" />
//         SMALL ACTIONS. LASTING CHANGE.
//         <a href="#mission">Discover our mission ↗</a>
//       </div>

//       <header className="header">
//         <a className="brand" href="#home" aria-label="Akmal Shekh home">
//           <span className="brand-mark">A<span>.</span></span>
//           <span className="brand-copy">
//             <strong>AKMAL SHEKH</strong>
//             <small>SOCIAL IMPACT & COMMUNITY</small>
//           </span>
//         </a>

//         <button
//           className="menu-toggle"
//           aria-label="Toggle navigation"
//           aria-expanded={menuOpen}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>

//         <nav className={menuOpen ? "nav nav-open" : "nav"}>
//           <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
//           <a href="#mission" onClick={() => setMenuOpen(false)}>Our Mission</a>
//           <a href="#stories" onClick={() => setMenuOpen(false)}>Our Stories</a>
//           <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
//           <a
//             className="nav-cta"
//             href={whatsappUrl}
//             target="_blank"
//             rel="noreferrer"
//             onClick={() => setMenuOpen(false)}
//           >
//             Get Involved <span>↗</span>
//           </a>
//         </nav>
//       </header>

//       <main>
//         <section className="hero" id="home">
//           <div className="hero-content">
//             <div className="eyebrow">
//               <span /> PEOPLE FIRST. PURPOSE ALWAYS.
//             </div>

//             <h1>
//               Change begins
//               <br />
//               with <span>someone</span>
//               <br />
//               who cares.
//             </h1>

//             <p className="hero-description">
//               Building stronger communities through education, environmental
//               action and meaningful social initiatives. Every small step
//               brings us closer to a better tomorrow.
//             </p>

//             <div className="hero-actions">
//               <a className="btn btn-primary" href="#mission">
//                 Explore Our Mission <span>↗</span>
//               </a>
//               <a className="btn btn-outline" href="#stories">
//                 <span className="play-icon">▶</span> Watch Our Stories
//               </a>
//             </div>

//             <div className="hero-proof">
//               <div className="avatar-stack" aria-hidden="true">
//                 <span>A</span><span>C</span><span>+</span>
//               </div>
//               <div>
//                 <strong>Community-powered change</strong>
//                 <small>Driven by people. Built on purpose.</small>
//               </div>
//             </div>
//           </div>

//           <div className="hero-visual">
//             <div className="image-frame">
//               <img src={akmal} alt="Akmal Shekh, social activist" />
//               <div className="image-overlay" />
//               <div className="image-caption">
//                 <span className="caption-line" />
//                 <div>
//                   <small>THE PERSON BEHIND THE PURPOSE</small>
//                   <strong>Akmal Shekh</strong>
//                   <p>Social Activist & Youth Advocate</p>
//                 </div>
//               </div>
//             </div>

//             <div className="floating-note">
//               <span className="note-icon">✳</span>
//               <div>
//                 <strong>Purpose in action</strong>
//                 <small>Creating impact, together.</small>
//               </div>
//             </div>
//             <div className="visual-decoration" />
//           </div>

//           <div className="hero-bottom">
//             <span>01 — MAKING A DIFFERENCE</span>
//             <a href="#mission">SCROLL TO EXPLORE ↓</a>
//           </div>
//         </section>

//         <section className="impact-section" id="mission">
//           <div className="section-topline">
//             <span>OUR IMPACT</span>
//             <span>MEASURED IN LIVES, NOT WORDS</span>
//           </div>

//           <div className="impact-heading">
//             <h2>Real work.<br /><span>Real difference.</span></h2>
//             <p>
//               Progress is more than a number. It's a child getting an
//               opportunity, a village gaining access and a community finding
//               the confidence to grow.
//             </p>
//           </div>

//           <div className="impact-grid">
//             {impact.map((item, index) => (
//               <article className="impact-card" key={item.label}>
//                 <span className="impact-index">0{index + 1}</span>
//                 <strong>{item.number}</strong>
//                 <span className="impact-label">{item.label}</span>
//                 <span className="impact-arrow">↗</span>
//               </article>
//             ))}
//           </div>

//           <p className="impact-note">
//             Impact figures shown are project highlights and should be verified
//             before publication.
//           </p>
//         </section>

//         <section className="mission-section">
//           <div className="mission-symbol" aria-hidden="true">✳</div>
//           <div>
//             <span className="eyebrow">WHY WE DO WHAT WE DO</span>
//             <h2>
//               A better world isn't
//               <br />built by <em>standing still.</em>
//             </h2>
//           </div>
//           <p>
//             Lasting change starts when people come together with empathy,
//             responsibility and the courage to act. Our focus is simple:
//             identify real needs, support local communities and keep moving
//             forward.
//           </p>
//           <a href="#contact" className="text-link">
//             Be part of the change <span>↗</span>
//           </a>
//         </section>

//         <section className="stories-section" id="stories">
//           <div className="section-topline">
//             <span>FROM THE FIELD</span>
//             <span>STORIES THAT MATTER</span>
//           </div>

//           <div className="stories-heading">
//             <div>
//               <h2>See the change.<br /><span>Feel the purpose.</span></h2>
//               <p>
//                 A closer look at community initiatives, environmental action
//                 and the people who make it all possible.
//               </p>
//             </div>

//             <div className="filter-tabs" aria-label="Filter stories">
//               {[
//                 ["all", "All Stories"],
//                 ["latest", "Latest"],
//                 ["stories", "Community"],
//               ].map(([value, label]) => (
//                 <button
//                   key={value}
//                   className={tab === value ? "filter active" : "filter"}
//                   onClick={() => setTab(value)}
//                   aria-pressed={tab === value}
//                 >
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="video-grid">
//             {filteredVideos.map((video, index) => (
//               <article className="video-card" key={video.id}>
//                 <div className="video-media">
//                   <iframe
//                     src={`https://www.youtube-nocookie.com/embed/${video.id}`}
//                     title={video.title}
//                     loading="lazy"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     allowFullScreen
//                   />
//                 </div>

//                 <div className="video-info">
//                   <div className="video-meta">
//                     <span>{video.label}</span>
//                     <span>0{index + 1} / STORY</span>
//                   </div>
//                   <h3>{video.title}</h3>
//                   <p>{video.description}</p>
//                   <button
//                     className="share-button"
//                     onClick={() => shareVideo(video)}
//                   >
//                     Share this story <span>↗</span>
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {filteredVideos.length === 0 && (
//             <p className="empty-state">No stories available in this category yet.</p>
//           )}
//         </section>

//         <section className="join-section">
//           <div className="join-decoration">✳</div>
//           <span className="eyebrow">YOUR ACTION MATTERS</span>
//           <h2>
//             The future is built
//             <br />by <em>all of us.</em>
//           </h2>
//           <p>
//             Have an idea, want to volunteer or looking to collaborate?
//             Let's turn good intentions into meaningful action.
//           </p>
//           <div className="join-actions">
//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="btn btn-light"
//             >
//               Let's Work Together <span>↗</span>
//             </a>
//             <a href="#contact" className="join-secondary">Get in touch →</a>
//           </div>
//         </section>

//         <section className="contact-section" id="contact">
//           <div className="contact-intro">
//             <span className="eyebrow">START A CONVERSATION</span>
//             <h2>Good things<br />start with <em>hello.</em></h2>
//             <p>
//               Every connection can spark an idea. Reach out to discuss
//               community initiatives, partnerships or volunteering.
//             </p>
//           </div>

//           <div className="contact-details">
//             <a className="contact-item" href="mailto:contact@akmalshekh.org">
//               <span className="contact-icon">↗</span>
//               <span>
//                 <small>DROP US AN EMAIL</small>
//                 <strong>contact@akmalshekh.org</strong>
//               </span>
//               <span className="contact-arrow">↗</span>
//             </a>

//             <a
//               className="contact-item"
//               href={`https://wa.me/${whatsappNumber}`}
//               target="_blank"
//               rel="noreferrer"
//             >
//               <span className="contact-icon">✳</span>
//               <span>
//                 <small>LET'S CHAT ON WHATSAPP</small>
//                 <strong>+91 98765 43210</strong>
//               </span>
//               <span className="contact-arrow">↗</span>
//             </a>

//             <a className="contact-item" href="tel:+919876543210">
//               <span className="contact-icon">⌕</span>
//               <span>
//                 <small>GIVE US A CALL</small>
//                 <strong>+91 98765 43210</strong>
//               </span>
//               <span className="contact-arrow">↗</span>
//             </a>
//           </div>
//         </section>
//       </main>

//       <footer className="footer">
//         <a className="brand footer-brand" href="#home">
//           <span className="brand-mark">A<span>.</span></span>
//           <span className="brand-copy">
//             <strong>AKMAL SHEKH</strong>
//             <small>SOCIAL IMPACT & COMMUNITY</small>
//           </span>
//         </a>

//         <p>Building a better tomorrow, one action at a time.</p>

//         <div className="footer-links">
//           <a href="#home">Home</a>
//           <a href="#mission">Mission</a>
//           <a href="#stories">Stories</a>
//           <a href="#contact">Contact</a>
//         </div>

//         <div className="footer-bottom">
//           <span>© {new Date().getFullYear()} Akmal Shekh. All rights reserved.</span>
//           <a href="#home">BACK TO TOP ↑</a>
//         </div>
//       </footer>

//       <a
//         className="floating-whatsapp"
//         href={whatsappUrl}
//         target="_blank"
//         rel="noreferrer"
//         aria-label="Contact us on WhatsApp"
//       >
//         <span>✳</span> Let's Talk
//       </a>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import akmal from "./photo_6246590875165202638_y.jpg";

/* =====================================================
   ✏️  SIRF YE TOP WALA HISSA BADALNA HAI
   ===================================================== */

const SITE = {
  name: "Akmal Shekh",
  whatsappNumber: "916307418679", // 91 + number, bina + aur space ke
  email: "mohdakmalshekh@gmail.com",
  phoneDisplay: "6307418679",
  phoneLink: "+916307418679",
};

// Apne asli profile links yahan daalo
const SOCIALS = {
  instagram: { url: "https://www.instagram.com/m_akmal_shekh?vrfl=ODF0Ym1sZHpvbTM5", handle: "@yourhandle" },
  youtube: { url: "https://youtube.com/@hind_times24?si=Ww25XcrhDyNnu5Qz", handle: "@yourchannel" },
  facebook: { url: "https://www.facebook.com/akmalshekh3003", handle: "Akmal Shekh" },
};

const videos = [
  {
    id: "yzVAP1ro_jM", // <- apne video ki ID daalo
    category: "stories",
    label: "COMMUNITY",
    title: "Educating Children, Building Futures",
    description:
      "Every child deserves access to education and the opportunity to dream bigger.",
  },
  {
    id: "9NC_pYAEN4c",
    category: "latest",
    label: "Janta ki Awaz",
    title: "Bringing People's Voices to Light",
    description:
      "WFrom the ground to the people, we cover real issues that matter to our communities. Our ground reports aim to bring public concerns, local challenges, and untold stories into the spotlight.",
  },
  {
    id: "wgSBztvy0rY",
    category: "stories",
    label: "Interview",
    title: "Exclusive Interview with [Shamshul Hasan] | जनता की आवाज़",
    description:
      "In this exclusive interview, we speak with [Leader's Name] about important public issues, community development, and the concerns of local people. Watch the full conversation to hear the leader's views, understand their perspective, and stay informed about the issues that matter to our community"
  },
];

// Asli numbers hi daalo
const impact = [
  { value: 500, suffix: "+", label: "Children Supported" },
  { value: 1000, suffix: "", label: "Villages Reached" },
  { value: 2000, suffix: "+", label: "Trees Planted" },
  { value: 1000, suffix: "%", label: "Committed to Change" },
];

// Asli milestones daalo
const journey = [
  {
    year: "2021",
    title: "A Vision Begins",
    text: "Har badi journey ek chhote se vision se shuru hoti hai. Logon ki awaaz ko saamne laane aur meaningful stories share karne ka safar yahin se shuru hua."
  },
  {
    year: "2022",
    title: "Building Connections",
    text: "Local communities se judna, logon ki baatein sunna aur unke experiences ko duniya tak pahunchane ki direction mein aage badhe."
  },
  {
    year: "2023",
    title: "Voices Getting Stronger",
    text: "Ground reporting, public interviews aur important social issues ke through logon ki awaaz ko ek wider audience tak pahunchane par focus kiya."
  },
  {
    year: "2024",
    title: "Moving Forward",
    text: "Naye ideas, naye perspectives aur better storytelling ke saath community journalism ko aage badhane ka vision."
  }
];

// Asli logon ke asli quotes (unki permission ke saath) daalo
const testimonials = [
  {
    quote: "Every voice matters. We believe in listening to people and bringing their concerns into the spotlight.",
    name: "Our Mission",
    role: "People First"
  },
  {
    quote: "We focus on ground-level stories, public interviews, and issues that deserve attention.",
    name: "Our Approach",
    role: "Ground Reporting"
  },
  {
    quote: "Our goal is to connect communities through honest conversations and meaningful storytelling.",
    name: "Our Vision",
    role: "The People's Voice"
  },
];

/* =====================================================
   Chhote helper components
   ===================================================== */

// const InstagramIcon = () => (
//   <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
//     <rect x="3" y="3" width="18" height="18" rx="5" />
//     <circle cx="12" cy="12" r="4" />
//     <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
//   </svg>
// );


// const InstagramIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width="20"
//     height="20"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//   >
//     <rect x="3" y="3" width="18" height="18" rx="5" />
//     <circle cx="12" cy="12" r="4" />
//     <circle
//       cx="17.5"
//       cy="6.5"
//       r="1"
//       fill="currentColor"
//       stroke="none"
//     />
//   </svg>
// );

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
  >
    <rect width="24" height="24" rx="6" fill="#E1306C" />

    <path
      fill="#F77737"
      d="M6 1h12a5 5 0 0 1 5 5v5H1V6a5 5 0 0 1 5-5Z"
    />

    <path
      fill="#833AB4"
      d="M1 12h22v6a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5Z"
    />

    <rect
      x="5"
      y="5"
      width="14"
      height="14"
      rx="4"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.8"
    />

    <circle
      cx="12"
      cy="12"
      r="3.3"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.8"
    />

    <circle cx="17" cy="7" r="1" fill="#FFFFFF" />
  </svg>
);


// const YoutubeIcon = () => (
//   <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
//     <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
//     {<path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" /> }
//   </svg>
// );


const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
  >
    <path
      fill="#FF0000"
      d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8Z"
    />
    <path
      fill="#FFFFFF"
      d="m9.6 15.6 6.2-3.6-6.2-3.6v7.2Z"
    />
  </svg>
);



// 


const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path
      fill="#FFFFFF"
      d="M16.5 12.5 17 9h-3.2V6.8c0-1 .3-1.7 1.7-1.7h1.7V2c-.3 0-1.4-.2-2.7-.2-2.8 0-4.7 1.7-4.7 4.9V9H7v3.5h2.8V22h4V12.5z"
    />
  </svg>
);

const socialList = [
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "youtube", label: "YouTube", Icon: YoutubeIcon },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`}>
      {socialList.map(({ key, label, Icon }) => (
        <a
          key={key}
          className="social-icon"
          href={SOCIALS[key].url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${SITE.name} on ${label}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

// Number scroll karne par 0 se upar chadhta hai
function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* =====================================================
   Main App
   ===================================================== */

function App() {
  const [tab, setTab] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "Volunteer",
    message: "",
  });

  const filteredVideos =
    tab === "all" ? videos : videos.filter((video) => video.category === tab);

  const message = encodeURIComponent(
    `Hello ${SITE.name.split(" ")[0]}, I would like to support your social impact initiatives.`
  );
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${message}`;

  const closeMenu = () => setMenuOpen(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello ${SITE.name.split(" ")[0]},\n\nName: ${form.name}\nPhone: ${form.phone}\nI want to: ${form.interest}\n\n${form.message}`
    );
    window.open(
      `https://wa.me/${SITE.whatsappNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareVideo = async (video) => {
    const url = `${window.location.origin}${window.location.pathname}#stories`;

    if (navigator.share) {
      try {
        await navigator.share({ title: video.title, text: video.description, url });
      } catch (error) {
        if (error.name !== "AbortError") console.error("Sharing failed:", error);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        alert("Website link copied. You can now share it!");
      } catch {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(video.title + " " + url)}`,
          "_blank",
          "noopener,noreferrer"
        );
      }
    } else {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(video.title + " " + url)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div className="premium">
      <div className="announcement">
        <span className="announcement-dot" />
        SMALL ACTIONS. LASTING CHANGE.
        <a href="#mission">Discover our mission ↗</a>
      </div>

      <header className="header">
        <a className="brand" href="#home" aria-label={`${SITE.name} home`}>
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-copy">
            <strong>AKMAL SHEKH</strong>
            <small>SOCIAL IMPACT & COMMUNITY</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#mission" onClick={closeMenu}>Our Mission</a>
          <a href="#stories" onClick={closeMenu}>Our Stories</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <SocialLinks className="nav-social" />
          <a
            className="nav-cta"
            href="#volunteer"
            onClick={closeMenu}
          >
            Get Involved <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span /> PEOPLE FIRST. PURPOSE ALWAYS.
            </div>

            <h1>
              Change begins
              <br />
              with <span>someone</span>
              <br />
              who cares.
            </h1>

            <p className="hero-description">
              Building stronger communities through education, environmental
              action and meaningful social initiatives. Every small step
              brings us closer to a better tomorrow.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#mission">
                Explore Our Mission <span>↗</span>
              </a>
              <a className="btn btn-outline" href="#stories">
                <span className="play-icon">▶</span> Watch Our Stories
              </a>
            </div>

            <div className="hero-proof">
              <SocialLinks />
              <div>
                <strong>Follow the journey</strong>
                <small>Daily updates on Instagram, YouTube & Facebook.</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-frame">
              <img src={akmal} alt={`${SITE.name}, social activist`} />
              <div className="image-overlay" />
              <div className="image-caption">
                <span className="caption-line" />
                <div>
                  <small>THE PERSON BEHIND THE PURPOSE</small>
                  <strong>{SITE.name}</strong>
                  <p>Social Activist & NGO Leader</p>
                </div>
              </div>
            </div>

            <div className="floating-note">
              <span className="note-icon">✳</span>
              <div>
                <strong>Purpose in action</strong>
                <small>Creating impact, together.</small>
              </div>
            </div>
            <div className="visual-decoration" />
          </div>

          <div className="hero-bottom">
            <span>01 — MAKING A DIFFERENCE</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section className="about-section" id="about">
          <div className="about-photo">
            <img src={akmal} alt={SITE.name} />
          </div>
          <div className="about-text">
            <span className="eyebrow">ABOUT AKMAL</span>
            <h2>
              From one idea
              <br />
              to a whole community.
            </h2>
            <p>
             I began my social work with the aim of ensuring that the voices of ordinary people reach the individuals and authorities who can help address their problems. I believe that every person has the right to be heard and that the concerns of the public should never be ignored. I strive to highlight people's difficulties, raise their voices, and bring their issues to the attention of the relevant authorities.
            </p>
            <p>Through my interactions with people, I have learned how important it is to understand their problems, listen to them carefully, and stand by them during difficult times. My goal is to continue raising public concerns, providing people with a platform to express their problems, and bringing their grievances to the attention of the relevant authorities. I want to reach more people, highlight the issues they face, and work towards ensuring that their voices are heard and meaningful steps are taken to address their concerns.</p>
            <ul className="about-points">
              <li>
  <strong>Public Voice</strong>
  <span>Bringing people's voices and concerns to the right authorities</span>
</li>

<li>
  <strong>Public Issues</strong>
  <span>Highlighting people's problems and raising awareness</span>
</li>

<li>
  <strong>Community Support</strong>
  <span>Standing with people and helping them raise their concerns</span>
</li>
            </ul>
          </div>
        </section>

        {/* ---------- IMPACT ---------- */}
        <section className="impact-section" id="mission">
          <div className="section-topline">
            <span>OUR IMPACT</span>
            <span>MEASURED IN LIVES, NOT WORDS</span>
          </div>

          <div className="impact-heading">
            <h2>Real work.<br /><span>Real difference.</span></h2>
            <p>
              Progress is more than a number. It's a child getting an
              opportunity, a village gaining access and a community finding
              the confidence to grow.
            </p>
          </div>

          <div className="impact-grid">
            {impact.map((item, index) => (
              <article className="impact-card" key={item.label}>
                <span className="impact-index">0{index + 1}</span>
                <strong>
                  <Counter value={item.value} suffix={item.suffix} />
                </strong>
                <span className="impact-label">{item.label}</span>
                <span className="impact-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- MISSION ---------- */}
        <section className="mission-section">
          {/* <div className="mission-symbol" aria-hidden="true">✳</div> */}
          <div>
            <span className="eyebrow">WHY WE DO WHAT WE DO</span>
            <h2>
              A better world isn't
              <br />built by <em>standing still.</em>
            </h2>
          </div>
          <p>
            Lasting change starts when people come together with empathy,
            responsibility and the courage to act. Our focus is simple:
            identify real needs, support local communities and keep moving
            forward.
          </p>
          <a href="#volunteer" className="text-link">
            Be part of the change <span>↗</span>
          </a>
        </section>

        {/* ---------- JOURNEY ---------- */}
        <section className="journey-section" id="journey">
          <div className="section-topline">
            <span>OUR JOURNEY</span>
            <span>STEP BY STEP</span>
          </div>
          <ol className="journey-list">
            {journey.map((item) => (
              <li className="journey-item" key={item.year}>
                <span className="journey-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- STORIES ---------- */}
        <section className="stories-section" id="stories">
          <div className="section-topline">
            <span>FROM THE FIELD</span>
            <span>STORIES THAT MATTER</span>
          </div>

          <div className="stories-heading">
            <div>
              <h2>See the change.<br /><span>Feel the purpose.</span></h2>
              <p>
                A closer look at community initiatives, environmental action
                and the people who make it all possible.
              </p>
            </div>

            <div className="filter-tabs" aria-label="Filter stories">
              {[
                ["all", "All Stories"],
                ["latest", "Latest"],
                ["stories", "Community"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  className={tab === value ? "filter active" : "filter"}
                  onClick={() => setTab(value)}
                  aria-pressed={tab === value}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="video-grid">
            {filteredVideos.map((video, index) => (
              <article className="video-card" key={video.id}>
                <div className="video-media">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="video-info">
                  <div className="video-meta">
                    <span>{video.label}</span>
                    <span>0{index + 1} / STORY</span>
                  </div>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <button className="share-button" onClick={() => shareVideo(video)}>
                    Share this story <span>↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <p className="empty-state">No stories available in this category yet.</p>
          )}

          <a
            className="btn btn-outline stories-more"
            href={SOCIALS.youtube.url}
            target="_blank"
            rel="noreferrer"
          >
            More on YouTube <span>↗</span>
          </a>
        </section>

        {/* ---------- FOLLOW (Insta / YouTube / Facebook) ---------- */}
        <section className="follow-section" id="follow">
          <div className="section-topline">
            <span>STAY CONNECTED</span>
            <span>FOLLOW THE WORK</span>
          </div>
          <h2 className="follow-title">Har din ka kaam, <span>seedha aap tak.</span></h2>

          <div className="follow-grid">
            {socialList.map(({ key, label, Icon }) => (
              <a
                key={key}
                className={`follow-card follow-${key}`}
                href={SOCIALS[key].url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="follow-icon"><Icon /></span>
                <strong>{label}</strong>
                <span className="follow-handle">{SOCIALS[key].handle}</span>
                <small>
                  {key === "instagram" && "Photos, reels aur ground ki jhalkiyan."}
                  {key === "youtube" && "Poori kahaniyan aur documentaries."}
                  {key === "facebook" && "Community updates aur events."}
                </small>
                <span className="follow-arrow">Follow ↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ---------- TESTIMONIALS ---------- */}
        <section className="testimonials-section">
          <div className="section-topline">
            <span>VOICES</span>
            <span>WHAT PEOPLE SAY</span>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <figure className="testimonial" key={i}>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- JOIN ---------- */}
        <section className="join-section">
          <div className="join-decoration">✳</div>
          <span className="eyebrow">YOUR ACTION MATTERS</span>
          <h2>
            The future is built
            <br />by <em>all of us.</em>
          </h2>
          <p>
            Have an idea, want to volunteer or looking to collaborate?
            Let's turn good intentions into meaningful action.
          </p>
          <div className="join-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-light">
              Let's Work Together <span>↗</span>
            </a>
            <a href="#volunteer" className="join-secondary">Fill the form →</a>
          </div>
        </section>

        {/* ---------- VOLUNTEER FORM ---------- */}
        {/* <section className="volunteer-section" id="volunteer">
          <div className="volunteer-intro">
            <span className="eyebrow">JOIN US</span>
            <h2>Madad karni hai? Bas bata do.</h2>
            <p>
              Form bharo, aur aapka message seedha WhatsApp par Akmal tak
              pahunch jayega.
            </p>
          </div>

          <form className="volunteer-form" onSubmit={handleSubmit}>
            <label>
              Aapka naam
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Poora naam" required />
            </label>
            <label>
              Phone number
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="98765 43210" required />
            </label>
            <label>
              Aap kya karna chahte hain?
              <select name="interest" value={form.interest} onChange={handleChange}>
                <option>Volunteer</option>
                <option>Donate</option>
                <option>Partner with us</option>
                <option>Share an idea</option>
              </select>
            </label>
            <label>
              Message (optional)
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Apne baare mein ya idea ke baare mein likho" />
            </label>
            <button type="submit" className="btn btn-primary">
              Send on WhatsApp <span>↗</span>
            </button>
          </form>
        </section> */}

        
<section className="volunteer-section" id="volunteer">
  <div className="volunteer-intro">
    <span className="eyebrow">JOIN US</span>
    <h2>Want to Make a Difference? Get in Touch.</h2>
    <p>
      Fill out the form, and your message will be sent
      directly to Akmal via WhatsApp.
    </p>
  </div>

  <form className="volunteer-form" onSubmit={handleSubmit}>
    <label>
      Your Name
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        required
      />
    </label>

    <label>
      Phone Number
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="98765 43210"
        required
      />
    </label>

    <label>
      How Would You Like to Contribute?
      <select
        name="interest"
        value={form.interest}
        onChange={handleChange}
      >
        <option>Volunteer</option>
        <option>Donate</option>
        <option>Partner with us</option>
        <option>Share an idea</option>
      </select>
    </label>

    <label>
      Message (Optional)
      <textarea
        name="message"
        rows="4"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us about yourself or share your ideas"
      />
    </label>

    <button type="submit" className="btn btn-primary">
      Send via WhatsApp <span>↗</span>
    </button>
  </form>
</section>


        {/* ---------- CONTACT ---------- */}
        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <span className="eyebrow">START A CONVERSATION</span>
            <h2>Good things<br />start with <em>hello.</em></h2>
            <p>
              Every connection can spark an idea. Reach out to discuss
              community initiatives, partnerships or volunteering.
            </p>
          </div>

          <div className="contact-details">
            <a className="contact-item" href={`mailto:${SITE.email}`}>
              <span className="contact-icon">↗</span>
              <span><small>DROP US AN EMAIL</small><strong>{SITE.email}</strong></span>
              <span className="contact-arrow">↗</span>
            </a>
            <a className="contact-item" href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noreferrer">
              <span className="contact-icon">✳</span>
              <span><small>LET'S CHAT ON WHATSAPP</small><strong>{SITE.phoneDisplay}</strong></span>
              <span className="contact-arrow">↗</span>
            </a>
            <a className="contact-item" href={`tel:${SITE.phoneLink}`}>
              <span className="contact-icon">⌕</span>
              <span><small>GIVE US A CALL</small><strong>{SITE.phoneDisplay}</strong></span>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-copy">
            <strong>AKMAL SHEKH</strong>
            <small>SOCIAL IMPACT & COMMUNITY</small>
          </span>
        </a>

        <p>Building a better tomorrow, one action at a time.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#mission">Mission</a>
          <a href="#stories">Stories</a>
          <a href="#contact">Contact</a>
        </div>

        <SocialLinks className="footer-social" />

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact us on WhatsApp">
        <span>✳</span> Let's Talk
      </a>
    </div>
  );
}

export default App;