import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { ArrowDown, ArrowUpRight, Code2, Globe, Mail, Menu, X, Sparkles, Layers3, ExternalLink } from 'lucide-react';
import { profile, skills, experience, projects, certifications } from './content';

const nav = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pointer, setPointer] = useState({x: 0, y: 0});
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPointer({x:e.clientX, y:e.clientY});
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div className="site-shell">
    <motion.div className="scroll-progress" style={{scaleX}} />
    <div className="ambient ambient-one" style={{left:`${pointer.x * .018}px`, top:`${pointer.y * .018}px`}} />
    <div className="ambient ambient-two" />
    <header className="topbar">
      <a className="brand" href="#home"><span className="brand-mark">SV</span><span>SATHYA<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'nav-links open':'nav-links'}>{nav.map(item=><a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{item}</a>)}</nav>
      <div className="nav-actions">
  <a
    className="resume-button"
    href="/documents/Sathya_Varshan_Resume.pdf"
    download="Sathya_Varshan_Resume.pdf"
  >
    <ArrowDown size={15} />
    Download Resume
  </a>

  <a className="nav-cta" href={`mailto:${profile.email}`}>
    Let's connect <ArrowUpRight size={15}/>
  </a>
</div>
    </header>

    <main>
      <section className="hero section-wrap" id="home" ref={heroRef}>
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7}}><span className="status-dot"/> AVAILABLE FOR LEARNING & OPPORTUNITIES</motion.div>
          <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}}>Ideas into <span className="gradient-text">intelligent</span><br/>experiences<span className="period">.</span></motion.h1>
          <motion.p className="hero-sub" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.25}}>{profile.tagline}</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.5}}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-quiet" href="#about">Discover more <ArrowDown size={16}/></a>
          </motion.div>
          <div className="social-row"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Globe size={17}/> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={17}/> GitHub</a><span><span className="tiny-dot"/> {profile.location}</span></div>
        </div>
<motion.div
  className="hero-art profile-art"
  initial={{ opacity: 0, scale: 0.85, rotate: -7 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ duration: 1, delay: 0.25 }}
>
  <div className="profile-orbit orbit-one" />
  <div className="profile-orbit orbit-two" />
  <div className="profile-orbit orbit-three" />

  <div className="profile-glow" />


<div className="profile-photo">
  <img
    src="/images/profile.jpg"
    alt="Sathya Varshan - AI and Data Science Student"
  />
</div>


  <div className="float-chip chip-one">
    <Sparkles size={15} /> Creative thinking
  </div>

  <div className="float-chip chip-two">
    <Code2 size={15} /> Learning by building
  </div>

  <div className="float-chip chip-three">
    <Layers3 size={15} /> AI + technology
  </div>
</motion.div>
        <div className="hero-index"><span>01 / 05</span><span>SCROLL TO EXPLORE</span></div>
      </section>
      


      <section className="section-wrap content-section" id="about">
        <SectionHeading number="01" kicker="A LITTLE ABOUT ME" title="Curiosity is my starting point."/>
        <div className="about-grid"><p className="about-lead">{profile.about}</p><div className="about-note"><span className="note-icon"><Sparkles/></span><p>My approach</p><strong>Stay curious. Keep learning. Make things that matter.</strong></div></div>
      </section>

      <section className="section-wrap content-section" id="skills">
        <SectionHeading number="02" kicker="TOOLS & INTERESTS" title="Learning, one layer at a time."/>
        <div className="skill-grid">{skills.map((skill,i)=><motion.div className="skill-card" key={skill} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}}><span className="skill-number">0{i+1}</span><span>{skill}</span><ArrowUpRight size={16}/></motion.div>)}</div>
      </section>

      <section className="section-wrap content-section" id="experience">
        <SectionHeading number="03" kicker="EXPERIENCE & LEADERSHIP" title="Learning beyond the classroom."/>
        <div className="timeline">{experience.map((item,i)=><motion.article className="timeline-item" key={item.title} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><div className="timeline-marker"/><div className="timeline-meta">{item.type} · 0{i+1}</div><h3>{item.title}</h3><p>{item.detail}</p></motion.article>)}</div>
      </section>

      <section className="section-wrap content-section" id="projects">
        <SectionHeading number="04" kicker="MY PROJECT JOURNEY" title="Ideas I'm preparing to bring to life."/>
       
<div className="project-grid">
  {projects.map((project, i) => (
    <motion.article
      className="project-card glass-project-card"
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      whileHover={{ y: -8 }}
    >
      <div className="glass-project-visual">
        <div className="project-topline">
          <span>PROJECT 0{i + 1}</span>
          <span className="project-status">
            PERSONAL PROJECT
          </span>
        </div>

        <div className="project-glass-icon">
          <Layers3 size={48} />
        </div>

        <span className="project-category">
          {project.category}
        </span>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tag-row">
          {project.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="glass-project-links">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            <Code2 size={16} />
            GitHub
            <ArrowUpRight size={15} />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Live Website
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  ))}
</div>

      </section>

      <section className="section-wrap content-section" id="certifications">
        <SectionHeading number="05" kicker="CERTIFICATIONS" title="Proof of continuous learning."/>
        <div className="cert-list">{certifications.map((cert,i)=><div className="cert-row" key={cert.title}><span className="cert-index">0{i+1}</span><div><h3>{cert.title}</h3><p>{cert.issuer} · {cert.status}</p></div><ExternalLink size={17}/></div>)}</div>
      </section>

      <section className="contact-section section-wrap" id="contact"><div className="contact-panel"><span className="eyebrow">HAVE AN IDEA OR AN OPPORTUNITY?</span><h2>Let's make something<br/><span className="gradient-text">meaningful.</span></h2><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17}/> Get in touch <ArrowUpRight size={17}/></a><p>Replace the placeholder email in <code>src/content.ts</code> before publishing.</p></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">SV</span><span>SATHYA<span className="brand-dot">.</span></span></a><span>Designed to grow. Built to learn. © {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top ↑</a></footer><Analytics />
  </div>;
}
function SectionHeading({number,kicker,title}:{number:string;kicker:string;title:string}) { return <div className="section-heading"><span className="section-number">{number}</span><div><span className="eyebrow">{kicker}</span><h2>{title}</h2></div></div> }
export default App;
