"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  AsteriskIcon,
  CircleDotIcon,
  CodeXmlIcon,
  CrosshairIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
  RadioIcon,
  ScanLineIcon,
} from "lucide-react";
import { useState, type CSSProperties, type PointerEvent } from "react";

const projects = [
  {
    id: "01",
    title: "NEURAL//ARCHIVE",
    type: "AI KNOWLEDGE SYSTEM",
    year: "2026",
    copy: "把碎片化信息变成可检索、可追溯的个人知识网络。",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=85",
    color: "yellow",
  },
  {
    id: "02",
    title: "NIGHT//SHIFT",
    type: "OPERATIONS DASHBOARD",
    year: "2025",
    copy: "面向高压决策环境的数据驾驶舱，减少噪音，只暴露异常。",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
    color: "red",
  },
  {
    id: "03",
    title: "SIGNAL//OS",
    type: "PRODUCT EXPERIENCE",
    year: "2025",
    copy: "用于追踪业务信号的实时界面系统，强调信息密度与快速判断。",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
    color: "cyan",
  },
];

const experience = [
  ["2024 — NOW", "INDEPENDENT DESIGNER", "PRODUCT DESIGN / FRONTEND"],
  ["2022 — 2024", "NOVA LABS", "INTERFACE DESIGNER"],
  ["2020 — 2022", "FREELANCE", "VISUAL SYSTEMS / WEB"],
];

const skills = [
  "INTERFACE DESIGN",
  "CREATIVE DEVELOPMENT",
  "DESIGN SYSTEMS",
  "MOTION DIRECTION",
  "PROTOTYPING",
  "VISUAL IDENTITY",
];

function ProjectTitleRoll({ title }: { title: string }) {
  const letters = Array.from(title);

  return (
    <h3 aria-label={title} className="cp-project-title-roll">
      <span aria-hidden="true" className="cp-title-roll-row">
        {letters.map((letter, index) => (
          <span
            className="cp-title-roll-letter"
            key={`primary-${letter}-${index}`}
            style={{ "--letter-index": index } as CSSProperties}
          >
            {letter === " " ? "\u00a0" : letter}
          </span>
        ))}
      </span>
      <span aria-hidden="true" className="cp-title-roll-row cp-title-roll-clone">
        {letters.map((letter, index) => (
          <span
            className="cp-title-roll-letter"
            key={`clone-${letter}-${index}`}
            style={{ "--letter-index": index } as CSSProperties}
          >
            {letter === " " ? "\u00a0" : letter}
          </span>
        ))}
      </span>
    </h3>
  );
}

function CornerMarks() {
  return (
    <>
      <i className="cp-corner cp-corner-tl" />
      <i className="cp-corner cp-corner-tr" />
      <i className="cp-corner cp-corner-bl" />
      <i className="cp-corner cp-corner-br" />
    </>
  );
}

export function CyberpunkPortfolio() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);
  const smoothPreviewX = useSpring(previewX, { stiffness: 240, damping: 28 });
  const smoothPreviewY = useSpring(previewY, { stiffness: 240, damping: 28 });

  function getProjectPreviewPosition(event: PointerEvent<HTMLElement>) {
    const previewWidth = Math.min(390, window.innerWidth * 0.62);
    const previewHeight = previewWidth / 1.42;
    return {
      x: Math.min(event.clientX + 24, window.innerWidth - previewWidth - 14),
      y: Math.max(14, Math.min(event.clientY - previewHeight / 2, window.innerHeight - previewHeight - 14)),
    };
  }

  function showProjectPreview(project: (typeof projects)[number], event: PointerEvent<HTMLElement>) {
    const position = getProjectPreviewPosition(event);
    previewX.jump(position.x);
    previewY.jump(position.y);
    smoothPreviewX.jump(position.x);
    smoothPreviewY.jump(position.y);
    setActiveProject(project);
  }

  function updateProjectPreview(event: PointerEvent<HTMLElement>) {
    const position = getProjectPreviewPosition(event);
    previewX.set(position.x);
    previewY.set(position.y);
  }

  return (
    <main className="cp-site">
      <div className="cp-noise" />
      <header className="cp-nav">
        <a className="cp-wordmark" href="#top">
          <span>Q</span>_77
        </a>
        <nav className="cp-nav-links" aria-label="Main navigation">
          <a href="#work">PROJECTS</a>
          <a href="#profile">PROFILE</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="cp-status">
          <span className="cp-status-dot" />
          AVAILABLE FOR WORK
        </div>
      </header>

      <section className="cp-hero" id="top">
        <div className="cp-hero-grid">
          <p className="cp-micro cp-hero-code">PORTFOLIO_BUILD // 2.0.77</p>
          <p className="cp-micro cp-hero-location">
            <MapPinIcon size={13} />
            SHANGHAI, CN / 31.2304° N
          </p>
          <div className="cp-hero-title">
            <p className="cp-kicker">DIGITAL DESIGNER + CREATIVE DEVELOPER</p>
            <h1>
              <span className="cp-outline">QIAN</span>
              <span className="cp-solid">ZHOU<span className="cp-title-dot">.</span></span>
            </h1>
            <p className="cp-hero-copy">
              我设计具有明确态度的数字产品。<br />
              清晰、锋利，并且在正确的地方制造噪音。
            </p>
          </div>

          <div className="cp-hero-visual">
            <div className="cp-portrait-frame">
              <CornerMarks />
              <div className="cp-portrait" />
              <div className="cp-scanline" />
              <div className="cp-portrait-meta">
                <span>ID / QZ-0707</span>
                <span>REC ●</span>
              </div>
            </div>
            <div className="cp-crosshair">
              <CrosshairIcon />
            </div>
          </div>

          <div className="cp-hero-side">
            <p className="cp-side-index">01</p>
            <p className="cp-micro">PERSONAL DATA//</p>
            <div className="cp-side-rule" />
            <p className="cp-side-quote">
              USER EXPERIENCE
              <br />
              SHOULD FEEL
              <br />
              <strong>INEVITABLE.</strong>
            </p>
          </div>
        </div>

        <div className="cp-marquee" aria-hidden="true">
          <div>
            SELECTED WORK <AsteriskIcon /> SELECTED WORK <AsteriskIcon /> SELECTED
            WORK <AsteriskIcon /> SELECTED WORK <AsteriskIcon />
          </div>
        </div>
      </section>

      <section className="cp-work" id="work">
        <div className="cp-section-head">
          <p className="cp-micro">01 / FEATURED MISSIONS</p>
          <h2>SELECTED<br /><span>WORK</span></h2>
          <p className="cp-section-note">
            一组关于产品、界面和数字体验的近期实验。
            <br />
            <span>SCROLL TO EXPLORE ↓</span>
          </p>
        </div>

        <div className="cp-project-list" onMouseLeave={() => setActiveProject(null)}>
          {projects.map((project) => (
            <a
              className={`cp-project cp-project-${project.color}`}
              href="#contact"
              key={project.id}
              onPointerEnter={(event) => showProjectPreview(project, event)}
              onPointerMove={updateProjectPreview}
            >
              <div className="cp-project-id">
                <span>{project.id}</span>
              </div>
              <div className="cp-project-title-window">
                <ProjectTitleRoll title={project.title} />
              </div>
              <div className="cp-project-meta">
                <span>{project.type}</span>
                <i>{project.year}</i>
                <ArrowUpRightIcon />
              </div>
              <div
                className="cp-project-mobile-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </a>
          ))}

          <AnimatePresence>
            {activeProject && (
              <motion.div
                animate={{ opacity: 1, rotate: -2, scale: 1 }}
                className={`cp-project-preview cp-project-preview-${activeProject.color}`}
                exit={{ opacity: 0, rotate: 2, scale: 0.9 }}
                initial={{ opacity: 0, rotate: 3, scale: 0.88 }}
                key={activeProject.id}
                style={{ x: smoothPreviewX, y: smoothPreviewY }}
              >
                <div
                  className="cp-project-preview-image"
                  style={{ backgroundImage: `url(${activeProject.image})` }}
                />
                <span className="cp-image-grid" />
                <div className="cp-project-preview-label">
                  <span>CASE/{activeProject.id}</span>
                  <span>{activeProject.year}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="cp-profile" id="profile">
        <div className="cp-profile-left">
          <p className="cp-micro">02 / OPERATIVE PROFILE</p>
          <h2>ABOUT<br /><span>ME</span></h2>
          <p className="cp-profile-copy">
            我关注复杂系统如何被人理解。我的工作横跨产品设计、视觉系统和前端实现，
            喜欢把混乱的信息变成直接、可靠、有记忆点的界面。
          </p>
          <a className="cp-button" href="#contact">
            <span>INITIATE CONTACT</span>
            <ArrowDownRightIcon />
          </a>
        </div>

        <div className="cp-profile-right">
          <div className="cp-skill-panel">
            <div className="cp-panel-top">
              <span>CORE_CAPABILITIES</span>
              <ScanLineIcon />
            </div>
            {skills.map((skill, index) => (
              <div className="cp-skill" key={skill}>
                <span>0{index + 1}</span>
                <strong>{skill}</strong>
                <i />
              </div>
            ))}
          </div>

          <div className="cp-experience">
            <p className="cp-micro">EXPERIENCE LOG //</p>
            {experience.map(([date, company, role]) => (
              <div className="cp-exp-row" key={date}>
                <span>{date}</span>
                <strong>{company}</strong>
                <em>{role}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-contact" id="contact">
        <div className="cp-contact-radar">
          <RadioIcon />
          <span />
        </div>
        <p className="cp-micro">03 / OPEN CHANNEL</p>
        <h2>LET&apos;S MAKE<br /><span>SOMETHING</span><br />MEMORABLE.</h2>
        <a className="cp-email" href="mailto:hello@example.com">
          HELLO@EXAMPLE.COM
          <ArrowUpRightIcon />
        </a>
      </section>

      <footer className="cp-footer">
        <p>© 2026 QIAN ZHOU // ALL RIGHTS RESERVED</p>
        <div>
          <a aria-label="Code repository" href="#"><CodeXmlIcon /></a>
          <a aria-label="Profile link" href="#"><LinkIcon /></a>
          <a aria-label="Email" href="mailto:hello@example.com"><MailIcon /></a>
        </div>
        <p><CircleDotIcon /> SYSTEM ONLINE</p>
      </footer>
    </main>
  );
}
