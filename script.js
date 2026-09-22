/**
 * Portfolio Bilingual Content Dictionary (EN / DE)
 * Modify or replace strings in this object to update portfolio text.
 * Every string that appears on the page is looked up here via [data-i18n]
 * attributes in index.html — nothing is hardcoded twice.
 */
const translations = {
  en: {
    navBrand: "PORTFOLIO '26",
    navWork: "Work",
    navSkills: "Skills",
    navMethodsNav: "Methods",
    navAbout: "About",
    navContact: "Contact",

    coverEdition: "Portfolio Edition — 2026",
    coverSub: "Design Research & Strategic UX Architecture",
    coverTitle: "Design & Systemic UX",
    coverLead: "Research-driven UX/Product Designer with a focus on physical-digital hybrid experiences — spanning civic tech, sustainability, and spatial/service design. Selected case studies: Algorithmic Agency, Campus Circular Economy, Healthcare Sustainability, and Urban Green Heritage.",
    lblAuthor: "Author",
    valAuthor: "UX/Product Designer",
    lblTarget: "Target Market",
    valTarget: "Switzerland / EU",
    lblFocus: "Focus",
    valFocus: "Research, Physical-Digital UX, Service Design",
    lblCoverHero: "[COVER HERO — ARCHIVAL / ABSTRACT TOUCHPOINT]",
    lblCoverHeroSpecs: "PORTRAIT — 2:3 RATIO",

    aboutLabel: "About",
    aboutP1: "I didn't set out to become a designer. I grew up moving between languages and cultures — German, Swiss German, Hungarian, French, a bit of Dutch — and somewhere between an internship at a bank in Hungary and years working service jobs across the Netherlands, I got curious about something more specific: why some systems make people feel understood, and others don't.",
    aboutP2: "That question is what pulled me into UX. I'm drawn to problems where psychology, technology, and human connection meet — how a feed shapes the way someone relates to their own attention, how a park can make a stranger stop and notice a tree, how a small interaction can quietly build trust or erode it. I care less about making things look finished than about understanding why they work.",
    aboutP3: "I like research that gets my hands dirty — interviews, prototyping in cardboard as often as in Figma, testing ideas until they break in useful ways. I've led teams, built physical installations, and run Scrum sprints for the first time, getting them wrong before getting them right. I'm early in this career, and I like that — it means I'm still asking the questions instead of assuming I already know the answers.",

    // Table of Contents
    idxMarkerLeft: "Index & Manifesto",
    idxMarkerRight: "Page 02 // 10",
    idxTitle: "Curated Works",
    idxDesc: "A collection of four design initiatives spanning algorithmic feed research, campus circular service design, spatial installation for healthcare sustainability, and civic heritage storytelling in public green space.",
    lblIdxImg: "[EDITORIAL ABSTRACT SKETCH]",
    p1Sub: "Exploratory Bachelor's Thesis — Algorithmic Agency Framework",
    p2Sub: "Solo Service Design Project — Campus Circular Economy",
    p3Sub: "Team Project — Spatial UX & Interactive Installation, TU Delft",
    p4Sub: "Team Project — Civic Heritage & Spatial Storytelling",
    idx5Sub: "Reference — Evidence-Linked Competencies",
    idx6Sub: "Reference — Research & Design Methods",

    // Shared meta labels (reused across projects)
    lblTimeline: "Timeline",
    lblRole: "Role",
    lblProgram: "Program",
    lblMentors: "Mentors",
    lblResult: "Result",
    lblTutor: "Tutor",
    lblTutors: "Tutors",
    lblClient: "Client",
    lblCourse: "Course",
    lblProductOwner: "Product Owner",
    lblStakeholders: "Stakeholders",
    lblFormat: "Format",

    // Project 01 — Bursting the Bubble
    p1MarkerLeft: "Project 01 // Flagship Thesis",
    p1Tag: "01. Bachelor's Thesis & Research Framework",
    p1Title: "Redesigning Agency in Personalised Feeds",
    p1Img1: "[PROJECT 01 — HERO IMAGE]",
    p1Img1Specs: "LANDSCAPE — 16:9 RATIO",
    p1ValTimeline: "17 Weeks (Bachelor's Thesis)",
    p1ValRole: "UX Designer & Researcher",
    p1ValProgram: "UX Design, THUAS — Civic Technology Group",
    p1ValMentors: "Jos van Leeuwen, Kees Sommer, Alex Zakkas",
    p1ValResult: "Graded 10/10; recommended for further presentation (e.g. CAI)",
    p1Brief: "Investigating how personalised recommendation algorithms — the feeds behind most social platforms — narrow what people see, reinforce existing identity, and quietly erode their sense of control. The central question: could interface design restore awareness, agency, and intentionality for Gen Z feed users, without asking them to abandon algorithmic feeds altogether?",
    p1Heading1: "Method & Rigor",
    p1Body1: "The research moved through five stages: structured desk research across academic databases (2014–2025) with explicit inclusion criteria, two one-on-one interviews with heavy social media users who wanted more control, a co-creation workshop sketching interface ideas together with Gen Z participants, an 18-person Gen Z survey testing an early provocative concept, and moderated usability testing with a think-aloud protocol on the final prototype. Every insight in the write-up is numbered by source, so each design decision traces back to the exact evidence behind it.",
    p1Heading2: "Design Goals",
    p1Body2: "That research converged on a small set of goals: make the algorithm's influence visible instead of invisible, give people a genuine sense of control, interrupt mindless scrolling, encourage exploration beyond the feed's comfort zone, let users personalise structure and aesthetics rather than just content, and support wellbeing without punitive restriction.",
    p1Quote: '"Awareness without agency breeds fatalism, not behavioral change."',
    p1EvoMarker: "Project 01 // Research Mechanisms",
    p1EvoSub: "The 3-Prototype Evolution",
    p1Proto1Img: "[PROTOTYPE 01 — DYSTOPIAN NOTIFICATIONS UI]",
    p1Proto1Title: "Stage 01: Awareness",
    p1Proto1Desc: "A deliberately provocative interface exposing exactly how the algorithm tracks and infers behaviour — designed to unsettle, not for daily use. It made the invisible visible, but gave people no way to act on what they now knew, a gap that shaped the next two prototypes.",
    p1Proto2Img: "[PROTOTYPE 02 — MYCELIUM SPATIAL FEED UI]",
    p1Proto2Title: "Stage 02: Balance",
    p1Proto2Desc: "A spatial, non-linear feed built around a growth metaphor, replacing the infinite vertical list. Testers described feeling calmer and less rushed — but the same distinctive, node-based layout came at a real cost to legibility, a trade-off worth naming rather than hiding.",
    p1Proto3Img: "[PROTOTYPE 03 — ARC SYSTEM UI]",
    p1Proto3Title: "Stage 03: Intentionality",
    p1Proto3Desc: 'The most resolved prototype: a pre-configuration portal where users set an intent and time boundary before entering a session, a modular spatial workspace in place of a linear feed, and an "Intermission Moment" — a reflective close instead of an abrupt cutoff. Across all three prototypes, the portal was the single most well-received element.',
    tblAct: "Framework Act",
    tblTouchpoint: "UI Touchpoint",
    tblMechanism: "Mechanism",
    tblImpact: "Intended Effect",
    tblAct1: "Act I: Pre-Config",
    tblTouch1: "Portal Gatekeeper UI",
    tblMech1: "Mandatory time-boundary and intent selection prior to feed entry.",
    tblImp1: "Aims to break the automatic-scroll habit before it starts.",
    tblAct2: "Act II: Workspace",
    tblTouch2: "Spatial Canvas Engine",
    tblMech2: "Replaces linear lists with resizable node containers.",
    tblImp2: "Testers described feeling more in control of the session.",
    tblAct3: "Act III: Soft Closure",
    tblTouch3: "Souvenir Summary Cards",
    tblMech3: "End-of-session reflective cards replacing rigid timers.",
    tblImp3: "Encourages positive closure without guilt.",
    p1LimitsHeading: "Limitations",
    p1LimitsBody: "These findings are best read as design directions, not statistically validated conclusions — sample sizes were small and self-selected: three testers for the Awareness prototype, eighteen respondents for the Mycelium Feed survey. The scope was also limited to Gen Z users of entertainment-oriented platforms.",

    // Project 02 — SwapU (Mission Zero)
    p2MarkerLeft: "Project 02 // Service Design & User Research",
    p2Tag: "02. Campus Circular Economy — Service Design",
    p2Title: "Designing Trust Into Campus Exchange",
    p2Img1: "[SWAPU — HERO IMAGE]",
    p2Img2: "[SWAPU MOBILE APP — INVENTORY BROWSING]",
    p2ValTutor: "Dany Aguirre Broca",
    p2ValClient: "Jolanda Lütteke — Mission Zero",
    p2ValProgram: "UX Design, THUAS (Solo Project)",
    p2Lead: "A solo project designing a digital-plus-physical system for The Hague University of Applied Sciences, letting students and staff swap or give away items for free — extending a physical exchange space already on campus, in support of the university's Mission Zero sustainability initiative.",
    p2Heading1: "Method",
    p2Body1: "The process started with two transcribed interviews and a student survey, clustered into an affinity map to surface where trust and awareness were actually breaking down. From there, the concept moved through three prototype fidelities — paper, mid-fidelity, and a final high-fidelity Figma prototype — with real user testing at every stage shaping what came next.",
    p2Heading2: "Low-Fi: What Testing Fixed",
    p2Body2: "The paper prototype was tested in person first. Testers found the dual navigation — swiping and tapping meant slightly different things — confusing, so it was simplified to tap-only. There were no visible rules for what could be uploaded, so a dedicated rules section was added. And the chat felt impersonal without any sense of who was on the other end, so usernames were introduced.",
    p2Heading3: "Mid-Fi: Sharper Interactions",
    p2Body3: 'The mid-fidelity version, demoed to the client, tutor, and classmates, introduced Polaroid-style item cards and a green palette suited to the sustainability context. Testers found the "X" button ambiguous — some read it as "never show this again" rather than the intended "back to home" — flagged for a clearer icon. Feedback also surfaced two real needs: a share button, and a no-contact pickup option for people who felt anxious about face-to-face exchanges. Both were added to the plan.',
    p2Heading4: "Hi-Fi & Outcome",
    p2Body4: 'The final Figma prototype, tested with two more users, settled on a browse/mine toggle, category filters, item upload via QR code, "new item" labels, and a short prompt when an item is removed — asking whether it was exchanged or simply given away — to start tracking real usage. Nearly every interface decision in the final version traces back to a specific piece of user feedback from an earlier round.',
    p2Quote: '"A physical shelf will fail without a digital layer that people actually trust."',

    // Project 03 — Re:Waste
    p3MarkerLeft: "Project 03 // Spatial UX & Co-Creation",
    p3Tag: "03. Spatial UX & Interactive Installation",
    p3Title: "Making Invisible Waste Visible",
    p3Img1: "[RE:WASTE — HERO IMAGE]",
    p3Img2: "[PHYSICAL MAQUETTE TESTING WITH EIFFEL TOWER CO2 METRIC]",
    p3Img3: "[REFLECTION POD ERGONOMICS & DIGITAL WHITEBOARD INTEGRATION]",
    p3ValCourse: "Project Shared Spaces, 2024–2025 (THUAS)",
    p3ValClient: "Sustainable Healthcare Learning Community (TU Delft)",
    p3ValTutors: "Romy Koch, Lydia The",
    p3ValFormat: "Travelling interactive two-container installation",
    p3Brief: "Working in a team of six for TU Delft's Sustainable Healthcare Learning Community, I led ideation and planning and built the project's physical maquette. Dutch hospitals produce up to 2,000 kg of waste per hospital bed every year, and healthcare accounts for roughly 7% of the Netherlands' CO2 emissions — a footprint almost nobody outside the sector is aware of. Our task was to design a physical, interactive space that made that impact visible and drove engagement with the Learning Community working to change it.",
    p3Heading1: 'Container 01: "The Impact"',
    p3Body1: "A public storytelling zone: real healthcare waste objects, patient stories, and a physical lifecycle maquette that translates abstract CO2 figures into something visitors can picture, using an Eiffel-Tower-scale comparison.",
    p3Heading2: 'Container 02: "The Action"',
    p3Body2: "A participation zone — semi-private reflection pods where visitors respond to prompts and submit ideas to a shared digital whiteboard archive, turning a moment of awareness into something people could act on immediately.",
    p3TestTitle: "Formative Prototyping & Testing Insights",
    p3Test1Title: "Pod Ergonomics Iteration",
    p3Test1Desc: "Initial tests revealed claustrophobia in study booths. Redesigned with curved edges, natural skylighting, motion-activated lights, and acoustic foam panels.",
    p3Test2Title: "Spatial Flow Correction",
    p3Test2Desc: "Paper model walkthroughs exposed exit/entrance confusion. Introduced bold floor arrows, spatial zoning graphics, and explicit pod prompt cards.",
    p3Test3Title: "Physical vs. Digital Maquette",
    p3Test3Desc: "Digital maquette screens confused users. Transitioned to a life-sized physical model, resulting in significantly higher clarity and engagement.",
    p3ContribHeading: "My Role",
    p3ContribBody: "My own focus was ideation, planning, and building the physical maquette by hand. In peer reviews, my teammates independently described me as someone who took the lead frequently, acted as the main point of contact for the client and tutors, and was good at delegating tasks while keeping an overview of what needed to happen. The same reviews also included fair, useful feedback: that my delivery could feel intense under pressure, and that I sometimes took on more than I needed to rather than trusting teammates with tasks — something I've kept in mind on every team project since.",
    p3TeamCredit: "Team project with 5 others · Client: Sustainable Healthcare Learning Community, TU Delft",

    // Project 04 — Clingendael Quest
    p4MarkerLeft: "Project 04 // Civic Heritage & Spatial Storytelling",
    p4Tag: "04. Civic Tech & Spatial Storytelling",
    p4Title: "Telling the Story of Urban Green Heritage",
    p4ValCourse: "PS2 Smart Society, THUAS",
    p4ValProductOwner: "Kees Sommer",
    p4ValStakeholders: "Wilko van Zijverden, Ronald Visser",
    p4Brief: 'Clingendael Park in The Hague holds historically significant trees, including carvings left by soldiers during WWII — real history layered inside a park that\'s also been described as "artificial nature": curated and human-shaped rather than wild. Our brief, from product owner Kees Sommer, was deliberately open-ended: design a hybrid physical/digital experience that deepens visitors\' emotional connection to the park\'s trees and history and encourages stewardship — without intrusive installations, and without physical signage, which isn\'t permitted in the park.',
    p4Heading1: "Process",
    p4Body1: "We ran the project as a real Scrum team across four sprints, with a product backlog, sprint goals, burndown charts, a retrospective after every sprint, and a Scrum Master role that rotated between team members. I held that role for Sprint 0 — the team's first-ever sprint, effectively a trial run of Scrum for everyone — which is also when we built our first backlog as a Waterfall-style task list instead of proper user stories, a genuine misunderstanding of how Scrum backlogs work. We caught it mid-sprint and rebuilt it around user stories from scratch, a better way to learn the framework than getting it right the first time.",
    p4Heading2: "Research",
    p4Body2: "Research followed four user-story-driven threads: how visitors balance physical and digital time in the park, how tree heritage is currently communicated, what drives an emotional connection to trees, and what brings visitors back — I owned one of these threads. We gathered this through park observation, informal conversations with visitors, and interviews with people who return regularly. Recurring findings: visitors valued the park precisely because it felt separate from the city; they preferred minimal, unobtrusive information; existing signage was Dutch-only, limiting who could access it; QR codes worked for some visitors but not universally; and the Japanese Garden's restricted access was a consistent source of frustration.",
    p4Heading3: "Concept: Quest",
    p4Body3: 'I contributed a high volume of concept ideas during early, divergent ideation, several of which shaped the final direction — among them a seasonal "cultural lens" structure rotating through traditions like Japanese hanami, Scandinavian forest-bathing, Hungarian harvest customs, and Dutch design references, and a digital tree-ring memory archive ("Treedentity") built around giving trees their own persistent identity. The team converged on "Quest": a role-based journey where visitors pick up a hand-drawn Quest Map brochure and take on a role — Story Keeper, Tree Scientist, Nature Guardian, or Past Seeker — each with a tabletop-RPG-style character sheet, unlocking a park-wide narrative through activity stations. Once the team converged on this direction, I produced the concept sketches together with teammate Eszter Stróbl and turned it into a spatial plan mapping which activity happened where in the actual park. The client responded especially well to the character-sheet format and to a "hollow tree" interaction I modeled in 3D, and expressed interest in exploring a "holographic tree" direction as a way to create presence in the park without physical intervention. We also shifted from a booklet to a brochure format specifically to differentiate our concept from a second student group working the same brief in parallel.',
    p4Heading4: "Outcome",
    p4Body4: "Kees responded positively throughout, praising the depth of the research and the pace of iteration, and gave direct steering advice for the final expo — to fully realize one route, Nature Guardian, rather than spreading the demo thin across all four roles. I also built the presentation slides and wrote the plain-language project description used in the client debrief.",
    p4TeamCredit: "Team project with 4 others · Product Owner: Kees Sommer",

    // Skills — evidence-linked competencies
    skillsMarkerLeft: "Skills Index",
    skillsMarkerRight: "Evidence-Linked Competencies",
    skillsTitle: "Skills",
    skillsIntro: "A single, evidence-linked list — every skill below ties back to the specific project(s) that put it into practice.",
    skillCatResearchNum: "01",
    skillCatResearchTitle: "Research",
    skillCatProcessNum: "02",
    skillCatProcessTitle: "Process",
    skillCatCraftNum: "03",
    skillCatCraftTitle: "Craft",
    skillCatCollabNum: "04",
    skillCatCollabTitle: "Collaboration",
    sk01Name: "Mixed-Methods Research",
    sk01Tag: "Bursting the Bubble, SwapU",
    sk02Name: "Usability & Formative Testing",
    sk02Tag: "Bursting the Bubble, SwapU, Re:Waste",
    sk03Name: "Stakeholder & User Interviews",
    sk03Tag: "SwapU, Re:Waste, Clingendael Quest",
    sk04Name: "Scrum / Agile Process",
    sk04Tag: "Clingendael Quest",
    sk05Name: "Rapid Prototyping (Low- to Hi-Fidelity)",
    sk05Tag: "SwapU, Bursting the Bubble",
    sk06Name: "Service Design & Blueprinting",
    sk06Tag: "SwapU, Re:Waste",
    sk07Name: "Physical & Spatial Prototyping",
    sk07Tag: "Re:Waste, Clingendael Quest",
    sk08Name: "Figma Prototyping",
    sk08Tag: "SwapU, Bursting the Bubble",
    sk09Name: "Concept Sketching & Visual Ideation",
    sk09Tag: "Clingendael Quest",
    sk10Name: "Team Leadership & Delegation",
    sk10Tag: "Re:Waste",
    sk11Name: "Client-Facing Communication",
    sk11Tag: "SwapU, Re:Waste, Clingendael Quest",
    sk12Name: "Scrum Master Facilitation",
    sk12Tag: "Clingendael Quest",

    // Methods
    methodsMarkerLeft: "Reference Index",
    methodsMarkerRight: "Methods & Practice",
    methodsTitle: "Methods",
    methodsIntro: "A selection of UX and design research methods I have worked with across the projects in this portfolio — applied in context, not used for their own sake.",
    catResearchNum: "01",
    catResearchTitle: "Research",
    catSynthesisNum: "02",
    catSynthesisTitle: "Synthesis & Analysis",
    catIdeationNum: "03",
    catIdeationTitle: "Ideation & Design",
    catEvalNum: "04",
    catEvalTitle: "Evaluation",

    m01Name: "Stakeholder Interviews",
    m01Desc: "Qualitative conversations with multiple stakeholder groups to surface needs, constraints, and conflicting priorities.",
    m02Name: "Surveys",
    m02Desc: "Quantitative questionnaires used to validate patterns found in qualitative research at scale.",
    m03Name: "Desk Research",
    m03Desc: "Structured review of existing literature, market data, and prior work to frame a project before fieldwork begins.",
    m04Name: "Site Visits",
    m04Desc: "On-location observation used to ground design decisions in the real physical and organisational context.",
    m05Name: "Competitive & Market Analysis",
    m05Desc: "Sizing markets and reviewing comparable products to test commercial and strategic viability.",

    m06Name: "Mixed-Methods Synthesis",
    m06Desc: "Combining quantitative and qualitative findings into a single, decision-ready set of insights.",
    m07Name: "Research Synthesis",
    m07Desc: "Distilling exploratory research into a clear problem framing that can drive design direction.",
    m08Name: "Service Blueprinting & Systems Mapping",
    m08Desc: "Mapping actors, touchpoints, and rules across a service to design governance that actually holds up in use.",

    m09Name: "Prototyping",
    m09Desc: "Building successive, testable versions of an interface or system to learn before committing to a final design.",
    m10Name: "Service Design",
    m10Desc: "Designing the end-to-end structure of a service, not just its interface.",
    m11Name: "Co-Design & Participatory Design",
    m11Desc: "Involving end users directly in generating and shaping ideas rather than designing for them in isolation.",
    m12Name: "Spatial & Experience Design",
    m12Desc: "Designing physical environments and installations as part of a coherent digital-physical experience.",

    m13Name: "Usability & Formative Testing",
    m13Desc: "Early, low-cost testing of prototypes with real users to catch problems while they are still cheap to fix.",
    m14Name: "Concept & Prototype Testing",
    m14Desc: "Comparing alternative concepts (e.g. physical vs. digital) directly with users to decide what actually works.",

    // Imprint / Contact
    contactMarkerLeft: "Imprint & Contact",
    contactMarkerRight: "End of Publication",
    contactTitle: "Let's Build Responsible, Impactful Systems.",
    contactLead: "Available for Product Design, UX Strategy, and Design Research roles across Switzerland and Europe.",
    contactDirect: "Direct Correspondence",
    contactImg: "[BACK COVER / PORTRAIT OR PERSONAL LOGO]"
  },

  de: {
    navBrand: "PORTFOLIO '26",
    navWork: "Arbeiten",
    navSkills: "Skills",
    navMethodsNav: "Methoden",
    navAbout: "Über",
    navContact: "Kontakt",

    coverEdition: "Portfolio Ausgabe — 2026",
    coverSub: "Designforschung & Strategische UX-Architektur",
    coverTitle: "Design & Systemische UX",
    coverLead: "Forschungsorientierte:r UX/Product Designer:in mit Fokus auf physisch-digitale Hybriderfahrungen — von Civic Tech über Nachhaltigkeit bis zu räumlichem Service Design. Ausgewählte Fallstudien: Algorithmische Handlungsfähigkeit, Zirkuläre Campus-Ökonomie, Nachhaltigkeit im Gesundheitswesen und urbanes Grünerbe.",
    lblAuthor: "Autor:in",
    valAuthor: "UX/Product Designer",
    lblTarget: "Zielmarkt",
    valTarget: "Schweiz / EU",
    lblFocus: "Fokus",
    valFocus: "Forschung, Physisch-Digitale UX, Service Design",
    lblCoverHero: "[TITELBILD HERO — ARCHIV / ABSTRAKTER TOUCHPOINT]",
    lblCoverHeroSpecs: "HOCHFORMAT — 2:3 VERHÄLTNIS",

    aboutLabel: "Über mich",
    aboutP1: "Ich habe nicht geplant, Designerin zu werden. Ich bin zwischen Sprachen und Kulturen aufgewachsen — Deutsch, Schweizerdeutsch, Ungarisch, Französisch, ein bisschen Niederländisch —, und irgendwo zwischen einem Praktikum bei einer Bank in Ungarn und Jahren in Servicejobs in den Niederlanden wurde ich neugierig auf etwas Konkreteres: warum manche Systeme Menschen das Gefühl geben, verstanden zu werden, und andere nicht.",
    aboutP2: "Diese Frage hat mich zu UX gebracht. Mich interessieren Probleme, bei denen Psychologie, Technologie und menschliche Verbindung aufeinandertreffen — wie ein Feed beeinflusst, wie jemand mit der eigenen Aufmerksamkeit umgeht, wie ein Park eine fremde Person dazu bringen kann, innezuhalten und einen Baum wahrzunehmen, wie eine kleine Interaktion still Vertrauen aufbauen oder zerstören kann. Es geht mir weniger darum, dass etwas fertig aussieht, als darum, zu verstehen, warum es funktioniert.",
    aboutP3: "Ich mag Forschung, bei der man sich die Hände schmutzig macht — Interviews, Prototyping genauso oft in Karton wie in Figma, Ideen so lange testen, bis sie auf nützliche Weise scheitern. Ich habe Teams geleitet, physische Installationen gebaut und zum ersten Mal Scrum-Sprints durchgeführt — erst falsch, dann richtig. Ich stehe noch am Anfang dieser Laufbahn, und das gefällt mir — es bedeutet, dass ich immer noch Fragen stelle, statt anzunehmen, ich hätte die Antworten schon.",

    // Table of Contents (German)
    idxMarkerLeft: "Index & Manifest",
    idxMarkerRight: "Seite 02 // 10",
    idxTitle: "Kuratierte Arbeiten",
    idxDesc: "Eine Sammlung von vier Designinitiativen: Forschung zu algorithmischen Feeds, zirkuläres Service Design für den Campus, räumliche Installation für Nachhaltigkeit im Gesundheitswesen und Storytelling zum urbanen Grünerbe.",
    lblIdxImg: "[EDITORIAL ABSTRAKTE SKIZZE]",
    p1Sub: "Explorative Bachelorarbeit — Framework für Algorithmische Handlungsfähigkeit",
    p2Sub: "Solo-Service-Design-Projekt — Campus-Kreislaufwirtschaft",
    p3Sub: "Teamprojekt — Räumliche UX & Interaktive Installation, TU Delft",
    p4Sub: "Teamprojekt — Storytelling zum urbanen Grünerbe",
    idx5Sub: "Referenz — Belegte Kernkompetenzen",
    idx6Sub: "Referenz — Forschungs- & Designmethoden",

    // Shared meta labels (German)
    lblTimeline: "Zeitraum",
    lblRole: "Rolle",
    lblProgram: "Programm",
    lblMentors: "Mentor:innen",
    lblResult: "Ergebnis",
    lblTutor: "Tutor:in",
    lblTutors: "Tutor:innen",
    lblClient: "Auftraggeber:in",
    lblCourse: "Kurs",
    lblProductOwner: "Product Owner",
    lblStakeholders: "Stakeholder",
    lblFormat: "Format",

    // Project 01 (German)
    p1MarkerLeft: "Projekt 01 // Bachelorarbeit",
    p1Tag: "01. Bachelorarbeit & Forschungs-Framework",
    p1Title: "Neugestaltung der Handlungsfähigkeit in personalisierten Feeds",
    p1Img1: "[PROJEKT 01 — HERO-BILD]",
    p1Img1Specs: "QUERFORMAT — 16:9 VERHÄLTNIS",
    p1ValTimeline: "17 Wochen (Bachelorarbeit)",
    p1ValRole: "UX Designer & Forscher",
    p1ValProgram: "UX Design, THUAS — Fachgruppe Civic Technology",
    p1ValMentors: "Jos van Leeuwen, Kees Sommer, Alex Zakkas",
    p1ValResult: "Note 10/10; von den Mentor:innen für weitere Präsentationsmöglichkeiten empfohlen (z. B. CAI)",
    p1Brief: "Untersucht, wie personalisierte Empfehlungsalgorithmen — die Feeds hinter den meisten Social-Media-Plattformen — einschränken, was Menschen sehen, bestehende Identität verstärken und ihr Gefühl von Kontrolle unbemerkt untergraben. Die zentrale Frage: Kann Interface-Design Bewusstsein, Handlungsfähigkeit und Intentionalität für Gen-Z-Feed-Nutzer:innen wiederherstellen, ohne dass sie algorithmische Feeds ganz aufgeben müssen?",
    p1Heading1: "Methode & Sorgfalt",
    p1Body1: "Die Forschung durchlief fünf Phasen: strukturierte Desk Research in akademischen Datenbanken (2014–2025) mit klaren Ein- und Ausschlusskriterien, zwei Einzelinterviews mit intensiven Social-Media-Nutzer:innen, die sich mehr Kontrolle wünschten, ein Co-Creation-Workshop, in dem gemeinsam mit Gen-Z-Teilnehmenden Interface-Ideen skizziert wurden, eine Befragung von 18 Gen-Z-Teilnehmenden zu einem frühen, bewusst provokanten Konzept, sowie moderierte Usability-Tests mit Think-Aloud-Protokoll am finalen Prototyp. Jede Erkenntnis im Bericht ist nach Quelle nummeriert, sodass sich jede Designentscheidung bis zum genauen Beleg zurückverfolgen lässt.",
    p1Heading2: "Design-Ziele",
    p1Body2: "Aus der Forschung ergab sich eine kleine Anzahl an Zielen: den Einfluss des Algorithmus sichtbar statt unsichtbar machen, Nutzer:innen ein echtes Gefühl von Kontrolle geben, gedankenloses Scrollen unterbrechen, Erkundung jenseits der Komfortzone des Feeds fördern, Struktur und Ästhetik personalisierbar machen statt nur Inhalte, und Wohlbefinden fördern, ohne auf strafende Einschränkungen zurückzugreifen.",
    p1Quote: '"Bewusstsein ohne Handlungsfähigkeit führt zu Fatalismus, nicht zu Verhaltensänderung."',
    p1EvoMarker: "Projekt 01 // Forschungsmechanismen",
    p1EvoSub: "Die 3-Stufen-Prototypen-Evolution",
    p1Proto1Img: "[PROTOTYP 01 — DYSTOPISCHE BENACHRICHTIGUNGEN UI]",
    p1Proto1Title: "Stufe 01: Bewusstsein",
    p1Proto1Desc: "Eine bewusst provokante Oberfläche, die offenlegt, wie der Algorithmus Verhalten verfolgt und daraus Rückschlüsse zieht — gestaltet, um zu verunsichern, nicht für den Alltag. Sie machte das Unsichtbare sichtbar, bot aber keine Möglichkeit, darauf zu reagieren — eine Lücke, die die nächsten beiden Prototypen prägte.",
    p1Proto2Img: "[PROTOTYP 02 — MYCELIUM SPATIAL FEED UI]",
    p1Proto2Title: "Stufe 02: Balance",
    p1Proto2Desc: "Ein räumlicher, nicht-linearer Feed nach dem Vorbild eines Wachstumsprozesses, der die endlose vertikale Liste ersetzt. Testpersonen beschrieben ein ruhigeres, entschleunigtes Gefühl — doch dasselbe markante, knotenbasierte Layout ging spürbar zulasten der Lesbarkeit, ein Kompromiss, den man offen benennen sollte statt ihn zu verschweigen.",
    p1Proto3Img: "[PROTOTYP 03 — ARC SYSTEM UI]",
    p1Proto3Title: "Stufe 03: Intentionalität",
    p1Proto3Desc: 'Der ausgereifteste Prototyp: ein Konfigurationsportal, in dem Nutzer:innen vor Sitzungsbeginn Absicht und Zeitrahmen festlegen, ein modularer räumlicher Arbeitsbereich anstelle eines linearen Feeds, und ein "Intermission Moment" — ein reflektierender Abschluss statt eines abrupten Endes. Über alle drei Prototypen hinweg war das Portal das mit Abstand am besten aufgenommene Element.',
    tblAct: "Framework Akt",
    tblTouchpoint: "UI Touchpoint",
    tblMechanism: "Mechanismus",
    tblImpact: "Beabsichtigte Wirkung",
    tblAct1: "Akt I: Pre-Config",
    tblTouch1: "Portal Gatekeeper UI",
    tblMech1: "Verbindliche Festlegung von Zeitgrenze und Ziel vor Feed-Beitritt.",
    tblImp1: "Soll die automatische Scroll-Gewohnheit von Anfang an unterbrechen.",
    tblAct2: "Akt II: Workspace",
    tblTouch2: "Spatial Canvas Engine",
    tblMech2: "Ersetzt lineare Listen durch anpassbare Knoten-Container.",
    tblImp2: "Testpersonen beschrieben ein stärkeres Gefühl von Kontrolle über die Sitzung.",
    tblAct3: "Akt III: Soft Closure",
    tblTouch3: "Souvenir Summary Cards",
    tblMech3: "Reflektierende Karten am Session-Ende statt starrer App-Blocker.",
    tblImp3: "Fördert positiven Abschluss ohne Schuldgefühle.",
    p1LimitsHeading: "Grenzen der Studie",
    p1LimitsBody: "Die Erkenntnisse sind als Gestaltungsrichtungen zu verstehen, nicht als statistisch abgesicherte Schlussfolgerungen — die Stichproben waren klein und selbstselektiert: drei Testpersonen für den Awareness-Prototyp, achtzehn Befragte für die Mycelium-Feed-Umfrage. Der Fokus lag zudem ausschliesslich auf Gen-Z-Nutzer:innen unterhaltungsorientierter Plattformen.",

    // Project 02 (German) — SwapU
    p2MarkerLeft: "Projekt 02 // Service Design & Nutzerforschung",
    p2Tag: "02. Campus-Kreislaufwirtschaft — Service Design",
    p2Title: "Vertrauen als Kernfunktion des Campus-Tauschs",
    p2Img1: "[SWAPU — HERO-BILD]",
    p2Img2: "[SWAPU MOBILE APP — INVENTAR-BROWSING]",
    p2ValTutor: "Dany Aguirre Broca",
    p2ValClient: "Jolanda Lütteke — Mission Zero",
    p2ValProgram: "UX Design, THUAS (Solo-Projekt)",
    p2Lead: "Ein Solo-Projekt zur Gestaltung eines digital-physischen Systems für die Hochschule THUAS, mit dem Studierende und Mitarbeitende Gegenstände kostenlos tauschen oder abgeben können — als Erweiterung eines bereits bestehenden physischen Tauschraums auf dem Campus, im Rahmen der Nachhaltigkeitsinitiative Mission Zero der Hochschule.",
    p2Heading1: "Methode",
    p2Body1: "Der Prozess begann mit zwei transkribierten Interviews und einer Studierendenbefragung, die zu einer Affinitätskarte gebündelt wurden, um sichtbar zu machen, wo Vertrauen und Bewusstsein tatsächlich fehlten. Von dort aus durchlief das Konzept drei Prototyp-Stufen — Papier, Mid-Fidelity und ein finaler High-Fidelity-Prototyp in Figma —, wobei echte Nutzertests in jeder Phase die nächsten Schritte bestimmten.",
    p2Heading2: "Low-Fi: Was die Tests aufgedeckt haben",
    p2Body2: "Der Papierprototyp wurde zuerst persönlich getestet. Testpersonen fanden die doppelte Navigation — Wischen und Tippen bedeuteten leicht unterschiedliche Dinge — verwirrend, sie wurde daher auf reines Tippen vereinfacht. Es gab keine sichtbaren Regeln dafür, was hochgeladen werden durfte, weshalb ein eigener Regelbereich ergänzt wurde. Und der Chat wirkte ohne erkennbares Gegenüber unpersönlich, weshalb Benutzernamen eingeführt wurden.",
    p2Heading3: "Mid-Fi: Präzisere Interaktionen",
    p2Body3: 'Die Mid-Fidelity-Version, präsentiert vor Auftraggeberin, Tutor:in und Kommiliton:innen, führte Polaroid-artige Artikelkarten und eine zur Nachhaltigkeit passende grüne Farbpalette ein. Testpersonen empfanden den "X"-Button als mehrdeutig — manche lasen ihn als "nie wieder anzeigen" statt der beabsichtigten Bedeutung "zurück zur Startseite" —, was für ein klareres Icon vorgemerkt wurde. Das Feedback zeigte zudem zwei echte Bedürfnisse: einen Teilen-Button und eine kontaktlose Abholoption für Personen, die sich bei persönlichen Übergaben unwohl fühlten. Beides wurde in die Planung aufgenommen.',
    p2Heading4: "Hi-Fi & Ergebnis",
    p2Body4: "Der finale Figma-Prototyp, getestet mit zwei weiteren Nutzer:innen, setzte sich aus einem Durchsuchen/Meine-Artikel-Umschalter, Kategoriefiltern, Artikel-Upload per QR-Code, 'Neu'-Kennzeichnungen und einer kurzen Abfrage beim Entfernen eines Artikels zusammen — ob er getauscht oder einfach verschenkt wurde —, um erstmals reale statt angenommene Nutzung zu erfassen. Fast jede Interface-Entscheidung der finalen Version lässt sich auf ein konkretes Nutzerfeedback aus einer früheren Runde zurückführen.",
    p2Quote: '"Ein physisches Regal scheitert ohne eine digitale Ebene, der die Menschen tatsächlich vertrauen."',

    // Project 03 (German) — Re:Waste
    p3MarkerLeft: "Projekt 03 // Räumliche UX & Co-Creation",
    p3Tag: "03. Räumliche UX & Interaktive Installation",
    p3Title: "Unsichtbaren Abfall sichtbar machen",
    p3Img1: "[RE:WASTE — HERO-BILD]",
    p3Img2: "[TESTING DES PHYSISCHEN MODELLS MIT EIFFELTURM CO2-SKALA]",
    p3Img3: "[REFLEXIONS-POD ERGONOMIE & DIGITALES WHITEBOARD]",
    p3ValCourse: "Project Shared Spaces, 2024–2025 (THUAS)",
    p3ValClient: "Sustainable Healthcare Learning Community (TU Delft)",
    p3ValTutors: "Romy Koch, Lydia The",
    p3ValFormat: "Mobile interaktive Zwei-Container-Installation",
    p3Brief: "Im Team von sechs Personen für die Sustainable Healthcare Learning Community der TU Delft habe ich die Ideenfindung und Planung geleitet und das physische Modell des Projekts gebaut. Niederländische Krankenhäuser produzieren bis zu 2.000 kg Abfall pro Bett und Jahr, und der Gesundheitssektor verursacht rund 7 % der CO2-Emissionen der Niederlande — ein Fussabdruck, den ausserhalb der Branche kaum jemand kennt. Unsere Aufgabe war es, einen physischen, interaktiven Raum zu gestalten, der diese Wirkung sichtbar macht und das Engagement für die Learning Community fördert, die daran arbeitet, das zu ändern.",
    p3Heading1: 'Container 01: "Der Impact"',
    p3Body1: "Eine öffentliche Bewusstseins- und Storytelling-Zone: echte Objekte aus dem Krankenhausabfall, Erfahrungsberichte von Patient:innen und ein physisches Lebenszyklus-Modell, das abstrakte CO2-Werte mit einem Grössenvergleich zum Eiffelturm greifbar macht.",
    p3Heading2: 'Container 02: "Die Aktion"',
    p3Body2: "Eine Mitmach-Zone — halb-private Reflexions-Pods, in denen Besucher:innen auf Impulsfragen antworten und Ideen in ein gemeinsames digitales Whiteboard-Archiv einreichen, sodass ein Moment des Bewusstseins sofort in etwas Handlungsfähiges übergeht.",
    p3TestTitle: "Formative Prototyping- & Test-Erkenntnisse",
    p3Test1Title: "Pod-Ergonomie-Iteration",
    p3Test1Desc: "Erste Tests zeigten Raumangst in den Kabinen. Neugestaltung mit abgerundeten Kanten, Oberlichtern, bewegungsgesteuertem Licht und Akustikschalldämmung.",
    p3Test2Title: "Korrektur des Raumflusses",
    p3Test2Desc: "Papiermodell-Durchläufe deckten Orientierungsprobleme auf. Ergänzt durch Bodenpfeile, Zonengrafiken und deutliche Aufgaben-Prompts.",
    p3Test3Title: "Physisches vs. digitales Modell",
    p3Test3Desc: "Reine Bildschirmmodelle verwirrten Nutzer:innen. Der Wechsel zu einem lebensgrossen physischen Modell führte zu deutlich höherer Verständlichkeit und Interaktion.",
    p3ContribHeading: "Meine Rolle",
    p3ContribBody: "Mein eigener Schwerpunkt lag auf Ideenfindung, Planung und dem händischen Bau des physischen Modells. In den Peer-Reviews beschrieben mich meine Teamkolleg:innen unabhängig voneinander als jemanden, der häufig die Führung übernahm, als Hauptansprechperson für Auftraggeberin und Tutor:innen fungierte und gut darin war, Aufgaben zu delegieren und den Überblick zu behalten. Dieselben Reviews enthielten auch faires, hilfreiches Feedback: dass meine Arbeitsweise unter Druck intensiv wirken konnte und ich mir manchmal mehr aufgeladen habe, als nötig gewesen wäre, anstatt Aufgaben an Teamkolleg:innen abzugeben — etwas, das ich seither in jedem Teamprojekt im Hinterkopf behalte.",
    p3TeamCredit: "Teamprojekt mit 5 weiteren Personen · Auftraggeber:in: Sustainable Healthcare Learning Community, TU Delft",

    // Project 04 (German) — Clingendael Quest
    p4MarkerLeft: "Projekt 04 // Ziviles Erbe & Räumliches Storytelling",
    p4Tag: "04. Civic Tech & Räumliches Storytelling",
    p4Title: "Die Geschichte des urbanen Grünerbes erzählen",
    p4ValCourse: "PS2 Smart Society, THUAS",
    p4ValProductOwner: "Kees Sommer",
    p4ValStakeholders: "Wilko van Zijverden, Ronald Visser",
    p4Brief: 'Der Clingendael Park in Den Haag beherbergt historisch bedeutsame Bäume, darunter Einritzungen von Soldaten aus dem Zweiten Weltkrieg — echte Geschichte in einem Park, der auch als "künstliche Natur" beschrieben wird: gestaltet und von Menschenhand geformt statt wild. Unser Auftrag von Product Owner Kees Sommer war bewusst offen gehalten: eine hybride physisch-digitale Erfahrung zu gestalten, die die emotionale Verbindung der Besucher:innen zu den Bäumen und der Geschichte des Parks vertieft und zu Verantwortungsbewusstsein anregt — ohne aufdringliche Installationen und ohne physische Beschilderung, die im Park nicht erlaubt ist.',
    p4Heading1: "Prozess",
    p4Body1: "Wir arbeiteten als echtes Scrum-Team über vier Sprints hinweg, mit Product Backlog, Sprintzielen, Burndown-Charts, einer Retrospektive nach jedem Sprint und einer rotierenden Scrum-Master-Rolle. Ich übernahm diese Rolle im Sprint 0 — dem allerersten Sprint des Teams, quasi ein Testlauf von Scrum für alle —, und genau in diesem Sprint bauten wir unser erstes Backlog als Wasserfall-artige Aufgabenliste statt als echtes User-Story-Backlog auf, ein echtes Missverständnis darüber, wie Scrum-Backlogs funktionieren. Wir erkannten den Fehler mitten im Sprint und bauten das Backlog komplett neu rund um User Stories auf — ein besserer Weg, das Framework zu lernen, als es gleich beim ersten Mal richtig zu machen.",
    p4Heading2: "Forschung",
    p4Body2: "Die Forschung folgte vier User-Story-basierten Strängen: wie Besucher:innen physische und digitale Zeit im Park ausbalancieren, wie das Erbe der Bäume derzeit vermittelt wird, was eine emotionale Verbindung zu Bäumen auslöst, und was Besucher:innen zur Rückkehr bewegt — einen dieser Stränge habe ich verantwortet. Wir erhoben dies durch Parkbeobachtung, informelle Gespräche mit Besucher:innen und Interviews mit wiederkehrenden Besucher:innen. Wiederkehrende Erkenntnisse: Besucher:innen schätzten den Park gerade deshalb, weil er sich von der Stadt abgegrenzt anfühlte; sie bevorzugten minimale, unaufdringliche Informationen; bestehende Beschilderung war nur auf Niederländisch, was den Zugang einschränkte; QR-Codes funktionierten für manche Besucher:innen, aber nicht universell; und der eingeschränkte Zugang zum japanischen Garten sorgte durchgehend für Frustration.",
    p4Heading3: "Konzept: Quest",
    p4Body3: 'In der frühen, divergenten Ideenfindung habe ich eine grosse Anzahl an Konzeptideen beigetragen, von denen mehrere die finale Richtung mitgeprägt haben — darunter eine saisonale "kulturelle Linse", die durch Traditionen wie japanisches Hanami, skandinavisches Waldbaden, ungarische Erntebräuche und niederländische Designreferenzen rotiert, sowie ein digitales Jahresring-Gedächtnisarchiv ("Treedentity"), das Bäumen eine eigene, dauerhafte Identität gibt. Das Team einigte sich auf "Quest": eine rollenbasierte Reise, bei der Besucher:innen eine handgezeichnete Quest-Map-Broschüre erhalten und eine Rolle übernehmen — Story Keeper, Tree Scientist, Nature Guardian oder Past Seeker —, jeweils mit einem Charakterbogen im Tabletop-RPG-Stil, der über Aktivitätsstationen eine parkweite Erzählung freischaltet. Nachdem sich das Team auf diese Richtung geeinigt hatte, habe ich gemeinsam mit Teamkollegin Eszter Stróbl die Konzeptskizzen erstellt und daraus den räumlichen Plan entwickelt, welche Aktivität wo im tatsächlichen Park stattfindet. Der Auftraggeber reagierte besonders positiv auf das Charakterbogen-Format und auf eine "hohler Baum"-Interaktion, die ich als 3D-Modell umgesetzt habe, und zeigte Interesse an einer "holografischer Baum"-Richtung, um Präsenz im Park ohne physischen Eingriff zu schaffen. Wir wechselten zudem von einem Heftformat zu einer Broschüre, um unser Konzept gezielt von einer zweiten, parallel am selben Briefing arbeitenden Studierendengruppe abzugrenzen.',
    p4Heading4: "Ergebnis",
    p4Body4: "Kees reagierte durchgehend positiv, lobte die Tiefe der Forschung und das Tempo der Iteration und gab konkrete Hinweise für die Abschlussausstellung — eine Route, Nature Guardian, vollständig auszuarbeiten, statt die Präsentation über alle vier Rollen hinweg zu verdünnen. Ausserdem habe ich die Präsentationsfolien erstellt und die allgemeinverständliche Projektbeschreibung für das Client-Debriefing geschrieben.",
    p4TeamCredit: "Teamprojekt mit 4 weiteren Personen · Product Owner: Kees Sommer",

    // Skills (German) — belegte Kernkompetenzen
    skillsMarkerLeft: "Skills-Index",
    skillsMarkerRight: "Belegte Kernkompetenzen",
    skillsTitle: "Skills",
    skillsIntro: "Eine einzige, mit Belegen verknüpfte Liste — jede Fähigkeit unten ist einem konkreten Projekt zugeordnet, in dem sie zum Einsatz kam.",
    skillCatResearchNum: "01",
    skillCatResearchTitle: "Research",
    skillCatProcessNum: "02",
    skillCatProcessTitle: "Prozess",
    skillCatCraftNum: "03",
    skillCatCraftTitle: "Handwerk",
    skillCatCollabNum: "04",
    skillCatCollabTitle: "Zusammenarbeit",
    sk01Name: "Mixed-Methods-Forschung",
    sk01Tag: "Bursting the Bubble, SwapU",
    sk02Name: "Usability- & formative Tests",
    sk02Tag: "Bursting the Bubble, SwapU, Re:Waste",
    sk03Name: "Stakeholder- & Nutzerinterviews",
    sk03Tag: "SwapU, Re:Waste, Clingendael Quest",
    sk04Name: "Scrum / Agiler Prozess",
    sk04Tag: "Clingendael Quest",
    sk05Name: "Rapid Prototyping (Low- bis Hi-Fi)",
    sk05Tag: "SwapU, Bursting the Bubble",
    sk06Name: "Service Design & Blueprinting",
    sk06Tag: "SwapU, Re:Waste",
    sk07Name: "Physisches & räumliches Prototyping",
    sk07Tag: "Re:Waste, Clingendael Quest",
    sk08Name: "Figma-Prototyping",
    sk08Tag: "SwapU, Bursting the Bubble",
    sk09Name: "Konzeptionelles Skizzieren & visuelle Ideation",
    sk09Tag: "Clingendael Quest",
    sk10Name: "Teamführung & Delegation",
    sk10Tag: "Re:Waste",
    sk11Name: "Kommunikation mit Auftraggeber:innen",
    sk11Tag: "SwapU, Re:Waste, Clingendael Quest",
    sk12Name: "Scrum-Master-Facilitation",
    sk12Tag: "Clingendael Quest",

    // Methods (German)
    methodsMarkerLeft: "Referenz-Index",
    methodsMarkerRight: "Methoden & Praxis",
    methodsTitle: "Methoden",
    methodsIntro: "Eine Auswahl an UX- und Design-Research-Methoden, mit denen ich in den Projekten dieses Portfolios gearbeitet habe — angewendet im jeweiligen Kontext, nicht als Selbstzweck.",
    catResearchNum: "01",
    catResearchTitle: "Research",
    catSynthesisNum: "02",
    catSynthesisTitle: "Synthese & Analyse",
    catIdeationNum: "03",
    catIdeationTitle: "Ideation & Design",
    catEvalNum: "04",
    catEvalTitle: "Evaluation",

    m01Name: "Stakeholder-Interviews",
    m01Desc: "Qualitative Gespräche mit verschiedenen Stakeholder-Gruppen, um Bedürfnisse, Rahmenbedingungen und widersprüchliche Prioritäten sichtbar zu machen.",
    m02Name: "Befragungen",
    m02Desc: "Quantitative Fragebögen zur Validierung qualitativ beobachteter Muster in grösserem Massstab.",
    m03Name: "Desk Research",
    m03Desc: "Strukturierte Auswertung bestehender Literatur, Marktdaten und Vorarbeiten zur Einordnung eines Projekts vor der Feldarbeit.",
    m04Name: "Vor-Ort-Besuche",
    m04Desc: "Beobachtung vor Ort, um Designentscheidungen im realen physischen und organisatorischen Kontext zu verankern.",
    m05Name: "Wettbewerbs- & Marktanalyse",
    m05Desc: "Einschätzung von Marktgrössen und vergleichbaren Produkten zur Prüfung kommerzieller und strategischer Tragfähigkeit.",

    m06Name: "Mixed-Methods-Synthese",
    m06Desc: "Zusammenführung quantitativer und qualitativer Erkenntnisse zu einem entscheidungsreifen Befund.",
    m07Name: "Forschungssynthese",
    m07Desc: "Verdichtung explorativer Forschung zu einer klaren Problemstellung als Grundlage für die Designrichtung.",
    m08Name: "Service Blueprinting & Systemkartierung",
    m08Desc: "Kartierung von Akteuren, Touchpoints und Regeln innerhalb eines Service, um tragfähige Governance zu gestalten.",

    m09Name: "Prototyping",
    m09Desc: "Aufeinanderfolgende, testbare Versionen eines Interfaces oder Systems, um vor der finalen Gestaltung zu lernen.",
    m10Name: "Service Design",
    m10Desc: "Gestaltung der gesamten Struktur eines Service, nicht nur seiner Oberfläche.",
    m11Name: "Co-Design & Partizipative Gestaltung",
    m11Desc: "Einbindung von Nutzer:innen direkt in die Ideenfindung, statt ausschliesslich für sie zu gestalten.",
    m12Name: "Räumliches & Erlebnis-Design",
    m12Desc: "Gestaltung physischer Räume und Installationen als Teil eines kohärenten digital-physischen Erlebnisses.",

    m13Name: "Usability- & formative Tests",
    m13Desc: "Frühe, kostengünstige Tests von Prototypen mit echten Nutzer:innen, um Probleme zu erkennen, solange sie leicht zu beheben sind.",
    m14Name: "Konzept- & Prototypen-Tests",
    m14Desc: "Direkter Vergleich alternativer Konzepte (z. B. physisch vs. digital) mit Nutzer:innen, um zu entscheiden, was tatsächlich funktioniert.",

    // Imprint / Contact (German)
    contactMarkerLeft: "Impressum & Kontakt",
    contactMarkerRight: "Ende der Publikation",
    contactTitle: "Lass uns Systeme mit Verantwortung und Wirkung bauen.",
    contactLead: "Verfügbar für Product Design, UX-Strategie und Design-Research-Rollen in der Schweiz und Europa.",
    contactDirect: "Direkter Kontakt",
    contactImg: "[RÜCKSEITE / PORTRÄT ODER LOGO]"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll("[data-lang-btn]");
  let currentLang = "en";

  /**
   * Updates all DOM elements carrying [data-i18n] attributes
   */
  function updateLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update Language Switcher UI State
    langButtons.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang-btn");
      const isActive = btnLang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    document.documentElement.lang = lang;
  }

  // Bind click handlers to language switcher buttons
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang-btn");
      updateLanguage(targetLang);
    });
  });

  /**
   * IntersectionObserver: Adapts fixed utility bar styling when crossing into dark panels
   */
  const darkSection = document.querySelector(".theme-dark");
  if (darkSection) {
    const themeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          document.body.classList.toggle("theme-dark-active", entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    themeObserver.observe(darkSection);
  }

  /**
   * IntersectionObserver: Highlights the current section's link in the
   * primary navigation as the visitor scrolls through the page.
   */
  const navLinks = document.querySelectorAll(".main-nav a[href^='#']");
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (navLinks.length && sections.length) {
    const setActiveLink = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    };

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => navObserver.observe(section));
  }
});
