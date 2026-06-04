(function () {
  const STORAGE_KEY = "ba-da-portfolio-content-v2";
  const LIST_KEY = "ba-da-portfolio-lists-v2";
  const LANG_KEY = "ba-da-portfolio-language";
  const body = document.body;
  const editToggle = document.getElementById("editToggle");
  const saveButton = document.getElementById("saveButton");
  const exportButton = document.getElementById("exportButton");
  const importInput = document.getElementById("importInput");
  const resetButton = document.getElementById("resetButton");
  const languageToggle = document.getElementById("languageToggle");
  const toast = document.getElementById("toast");
  const campusModal = document.getElementById("campusModal");
  const campusModalTitle = document.getElementById("campusModalTitle");
  const campusModalEyebrow = document.getElementById("campusModalEyebrow");
  const projectModal = document.getElementById("projectModal");
  const projectModalKicker = document.getElementById("projectModalKicker");
  const projectModalTitle = document.getElementById("projectModalTitle");
  const projectModalMeta = document.getElementById("projectModalMeta");
  const projectModalSummary = document.getElementById("projectModalSummary");
  const projectModalTags = document.getElementById("projectModalTags");
  const projectModalImage = document.getElementById("projectModalImage");
  const projectModalVisual = document.getElementById("projectModalVisual");
  const projectModalVisualText = document.getElementById("projectModalVisualText");
  const projectModalDetails = document.getElementById("projectModalDetails");
  const experienceModal = document.getElementById("experienceModal");
  const experienceModalKicker = document.getElementById("experienceModalKicker");
  const experienceModalTitle = document.getElementById("experienceModalTitle");
  const experienceModalMeta = document.getElementById("experienceModalMeta");
  const experienceModalSummary = document.getElementById("experienceModalSummary");
  const experienceEvidenceBoard = document.getElementById("experienceEvidenceBoard");
  const experienceModalImage = document.getElementById("experienceModalImage");
  const experienceModalVisualText = document.getElementById("experienceModalVisualText");
  const experienceModalDetails = document.getElementById("experienceModalDetails");
  const credentialProofModal = document.getElementById("credentialProofModal");
  const credentialProofTitle = document.getElementById("credentialProofTitle");
  const credentialProofImage = document.getElementById("credentialProofImage");
  const credentialProofEmpty = document.getElementById("credentialProofEmpty");
  const boundNodes = new WeakSet();

  const enContent = {
    "site.initials": "VG",
    "site.brand": "Vivi",
    "site.role": "BA / DA Portfolio",
    "hero.eyebrow": "Business & Data Analytics Portfolio",
    "hero.title": "Turning business questions into data-backed decisions.",
    "hero.summary":
      "A portfolio for roles at the intersection of technology and business, highlighting requirements analysis, data analytics, dashboard storytelling, and cross-functional collaboration.",
    "hero.meta.one": "Python",
    "hero.meta.two": "SQL / NoSQL",
    "hero.meta.three": "Power BI / Tableau / Dashboard / KPI",
    "hero.meta.four": "Business Storytelling",
    "visual.window.title": "Portfolio Analytics",
    "visual.metric.one.label": "Conversion",
    "visual.metric.one.value": "+18.4%",
    "visual.metric.two.label": "Retention",
    "visual.metric.two.value": "72%",
    "visual.metric.three.label": "Cycle Time",
    "visual.metric.three.value": "-2.1d",
    "framework.title": "A practical structure you can keep refining",
    "framework.one.title": "Positioning",
    "framework.one.body":
      "Summarise why you fit BA/DA roles: business context, analytical thinking, stakeholder communication, and delivery mindset.",
    "framework.two.title": "Evidence",
    "framework.two.body":
      "Use internships, projects, and volunteer work to prove requirement analysis, KPI design, data analysis, and reporting.",
    "framework.three.title": "Work Samples",
    "framework.three.body":
      "Add dashboards, case studies, GitHub repositories, articles, prototypes, or product links that recruiters can inspect quickly.",
    "framework.four.title": "Conversion",
    "framework.four.body":
      "Make it easy for recruiters to download your resume, contact you, and review LinkedIn/GitHub without friction.",
    "projects.title": "Representative Projects",
    "project.1.type": "Data Analytics & Business Intelligence",
    "project.1.time": "Ongoing",
    "project.1.title": "Deepening the Understanding of Shipping Emissions in the North Sea through an Interactive Data Visualisation",
    "project.1.body":
      "Ongoing project using FuelEU shipping emissions data to prototype an interactive North Sea route visualisation, focusing on CO₂ flows between the UK and major European partner countries.",
    "project.1.tag.one": "Python",
    "project.1.tag.two": "3D Visualisation",
    "project.1.tag.three": "Spatial Data Analysis",
    "project.1.detail.one.title": "Project Context",
    "project.1.detail.one.body":
      "Develops a North Sea shipping emissions visualisation prototype connected to collaboration between the Tyrell Centre for Climate Change Research and AMBS, with potential integration into the university's Data Visualisation Observatory.",
    "project.1.detail.two.title": "Current Workflow",
    "project.1.detail.two.body":
      "Uses FuelEU shipping emissions data to identify high-emission UK-Europe route pairs, vessel-type structure, and CO₂ scale, with Python supporting data preparation, spatial mapping, and visual prototype design.",
    "project.1.detail.three.title": "Expected Output",
    "project.1.detail.three.body":
      "A Streamlit-based interactive visualisation app is planned to show emissions patterns across major UK links with the Netherlands, Belgium, France, Germany, Norway, and other North Sea routes.",
    "project.1.detail.four.title": "Tools & Skills",
    "project.1.detail.four.body": "Python / Streamlit / 3D Visualisation / Spatial Data Analysis",
    "project.2.type": "Data Analytics & Business Intelligence",
    "project.2.time": "May 2026",
    "project.2.title": "Impact Analysis of Oxford Road Station Closure",
    "project.2.body":
      "Uses predictive modelling and spatial flow visualisation to assess how the Oxford Road Station closure may redistribute demand towards Piccadilly, Victoria, and key Corridor hotspots.",
    "project.2.tag.one": "Predictive Modelling",
    "project.2.tag.two": "Urban Planning",
    "project.2.tag.three": "Spatial Data Analysis",
    "project.2.detail.one.title": "Project Context",
    "project.2.detail.one.body":
      "Assessed how the Oxford Road Station closure could redistribute pedestrian demand towards Manchester Piccadilly, Manchester Victoria, and key Corridor destinations.",
    "project.2.detail.two.title": "Modelling Workflow",
    "project.2.detail.two.body":
      "Combined forecast demand, route distance, walking time, and spatial hotspot mapping to identify likely transfer paths and Corridor pressure points.",
    "project.2.detail.three.title": "Key Findings",
    "project.2.detail.three.body":
      "Estimated around 17,515 additional pedestrians per day across four Corridor clusters; University of Manchester / MRI (~8,929/day) and Circle Square (~5,120/day) were the highest-priority hotspots.",
    "project.2.detail.four.title": "Tools & Skills",
    "project.2.detail.four.body": "Predictive modelling / urban planning / spatial data analysis / flow visualisation",
    "project.3.type": "Data Analytics & Business Intelligence",
    "project.3.time": "March 2025",
    "project.3.title": "Philips 2025 IT Department KPI Dashboard",
    "project.3.body":
      "Built a Power BI KPI dashboard from project-team Excel data, covering 15 annual IT KPIs across service management, system performance, cybersecurity, project delivery, financial value, and people culture; most targets were manually defined, while DAX calculated achievement rates, target variance, and performance status dynamically.",
    "project.3.tag.one": "Power BI",
    "project.3.tag.two": "DAX",
    "project.3.tag.three": "Excel Data",
    "project.3.tag.four": "KPI Analysis",
    "project.3.detail.one.title": "KPI Framework",
    "project.3.detail.one.body":
      "The dashboard covers 15 IT department KPIs; the indicators below are examples, grouped into service management, system performance, cybersecurity, project delivery, financial and business value, and people culture for executive-level navigation.",
    "project.3.detail.two.title": "Data Basis & Target Setting",
    "project.3.detail.two.body":
      "The main analysis was based on project-team Excel data, including field preparation, metric definition checks, data cleaning, and model structuring; most KPI targets were manually defined, so the dashboard focused on structured monitoring and visual communication.",
    "project.3.detail.three.title": "DAX Logic",
    "project.3.detail.three.body":
      "The landing page includes a 15-KPI index whose labels update automatically from the underlying data. DAX calculates achievement rate, target variance, and performance status, classifying KPIs as Achieved, Nearly Achieved, or Not Achieved, with Red / Amber / Green visual states.",
    "project.3.detail.four.title": "Tools & Skills",
    "project.3.detail.four.body": "Power BI / DAX / Excel Data Preparation / KPI Performance Analysis",
    "project.4.type": "Data Analytics & Business Intelligence",
    "project.4.time": "December 2025",
    "project.4.title": "Monopoly - Manchester Uni Version",
    "project.4.body":
      "Designed and implemented a relational database for University Tycoon, translating board-game requirements into SQLite tables, constraints, queries, and trigger-based game logic.",
    "project.4.tag.one": "SQLite",
    "project.4.tag.two": "Database Design",
    "project.4.tag.three": "Triggers",
    "project.4.detail.one.title": "Project Context",
    "project.4.detail.one.body":
      "Modelled players, tokens, board locations, buildings, special events, credit balances, and turn-by-turn audit records for a Manchester-themed University Tycoon game.",
    "project.4.detail.two.title": "Database Implementation",
    "project.4.detail.two.body":
      "Delivered the ERD, SQLite schema, initial data population, and leaderboard view to report player balances, locations, and owned buildings.",
    "project.4.detail.three.title": "Process",
    "project.4.detail.three.body":
      "Used six SQL triggers to automate building purchases, tuition payments, Welcome Week bonuses, suspension status, RAG/Hearing events, and audit-log updates.",
    "project.4.detail.four.title": "Final Output",
    "project.4.detail.four.body":
      "Produced runnable SQL scripts, view queries, three rounds of gameplay updates, and a concise design defence that turned complex rules into testable database logic.",
    "project.5.type": "Deep Learning & Algorithmic Modelling",
    "project.5.time": "April 2025",
    "project.5.title": "California Bird Species Recognition Based on Convolutional Neural Networks",
    "project.5.body":
      "Built a CNN-based bird recognition workflow on the CUB200-2011 dataset, comparing and optimising VGG16 and ResNet-50; the optimised ResNet-50 reached 93.55% validation accuracy.",
    "project.5.tag.one": "Python",
    "project.5.tag.two": "Deep Learning",
    "project.5.tag.three": "CNN",
    "project.5.detail.one.title": "Project Context",
    "project.5.detail.one.body":
      "Focused on fine-grained California bird species recognition, where similar visual features, pose variation, and complex natural backgrounds make classification difficult.",
    "project.5.detail.two.title": "Modelling Approach",
    "project.5.detail.two.body":
      "Used Python for image cleaning, data augmentation, and sample processing, then trained and compared transfer-learning CNN models based on VGG16 and ResNet-50.",
    "project.5.detail.three.title": "Key Result",
    "project.5.detail.three.body":
      "The optimised ResNet-50 performed best, reaching nearly 98% training accuracy and improving validation accuracy from 44.75% to 93.55%, outperforming VGG16 overall.",
    "project.5.detail.four.title": "Tools & Skills",
    "project.5.detail.four.body": "Python / CNN / Transfer Learning / Model Evaluation",
    "project.6.type": "Web Product & Database Design",
    "project.6.time": "Nov 2024",
    "project.6.title": "Dunhuang-themed Virtual Art Gallery",
    "project.6.body":
      "A 50-member team project. Led a 4-person database subgroup across user requirements, schema design, and database implementation, supporting artwork browsing, search/filtering, comments/likes, and user accounts.",
    "project.6.tag.one": "Database Design",
    "project.6.tag.two": "User Requirements",
    "project.6.tag.three": "Team Collaboration",
    "project.6.detail.one.title": "Project Context",
    "project.6.detail.one.body":
      "Built Desert Oasis, a Dunhuang-themed virtual art gallery that presents artworks, cultural context, and user journeys through a digital exhibition experience.",
    "project.6.detail.two.title": "Scope & Role",
    "project.6.detail.two.body":
      "In a 50-member project, served as Team Phoenix lead and coordinated cross-team resources while leading a 4-person database subgroup across requirements analysis, data planning, ER modelling, schema design, and implementation planning.",
    "project.6.detail.three.title": "Key Output",
    "project.6.detail.three.body":
      "Delivered the database design, data collection plan, implementation foundation, and V2.0 installation/user manual covering login, artwork browsing, search/filtering, comments/likes, shopping, privacy terms, and feedback support.",
    "project.6.detail.four.title": "Tools & Skills",
    "project.6.detail.four.body": "User Requirements / Database Design / Documentation / Cross-team Delivery",
    "project.7.type": "Web Product & System Development",
    "project.7.time": "Dec 2023",
    "project.7.title": "Market Master Ecommerce Website",
    "project.7.body":
      "Designed and built Market Master, an ecommerce website prototype covering frontend pages, backend logic, and a complete database, with role-based access for guests, registered users, and administrators.",
    "project.7.tag.one": "Full-stack Development",
    "project.7.tag.two": "Prototype",
    "project.7.tag.three": "Demo",
    "project.7.detail.one.title": "Project Context",
    "project.7.detail.one.body":
      "Built Market Master as an ecommerce course project prototype, simulating a realistic online shopping journey across product browsing, user accounts, shopping cart behaviour, and checkout.",
    "project.7.detail.two.title": "System Features",
    "project.7.detail.two.body":
      "Implemented three access levels for guests, registered users, and administrators, including login, product search, product-detail pages, cart management, and checkout interactions.",
    "project.7.detail.three.title": "Development Scope",
    "project.7.detail.three.body":
      "Delivered frontend interfaces, backend business logic, and database design for product, user, cart, order, and permission data, creating a complete browsing-to-checkout demo flow.",
    "project.7.detail.four.title": "Tools & Skills",
    "project.7.detail.four.body": "Full-stack Development / Prototype / Database Design / Demo",
    "project.8.type": "AI Governance & Privacy Compliance",
    "project.8.time": "Jul 2025",
    "project.8.title": "Tongji University AI Safety and Rule of Law Summer Training Camp",
    "project.8.body":
      "Joined Tongji University's AI Safety and Rule of Law summer training camp, exploring algorithm ethics, data security, and privacy compliance in generative AI; served as leader and presenter for a six-person team comparing Chinese, US, and EU regulatory frameworks and producing an enterprise compliance analysis.",
    "project.8.tag.one": "AI Governance",
    "project.8.tag.two": "Algorithm Ethics",
    "project.8.tag.three": "Privacy Compliance",
    "project.8.detail.one.title": "Project Context",
    "project.8.detail.one.body":
      "Attended Tongji University's AI Safety and Rule of Law Summer Training Camp, combining seminars and site visits around generative AI, algorithm ethics, data security, privacy protection, and regulatory compliance.",
    "project.8.detail.two.title": "Team Role",
    "project.8.detail.two.body":
      "Served as group leader and presenter for a six-person team, coordinating research, regulatory framework comparison, argument synthesis, and final delivery.",
    "project.8.detail.three.title": "Analytical Output",
    "project.8.detail.three.body":
      "Compared the major differences between Chinese, US, and EU AI governance systems across regulatory approach, algorithm transparency, data-security accountability, privacy requirements, and enterprise compliance pressure.",
    "project.8.detail.four.title": "Tools & Skills",
    "project.8.detail.four.body": "AI Governance / Algorithm Ethics / Privacy Compliance / Presentation",
    "project.9.type": "Cybersecurity & AI Solutions",
    "project.9.time": "Nov 2023",
    "project.9.title": "Deloitte CyberAce Cybersecurity Training Camp",
    "project.9.body":
      "Led a team to the Deloitte x AWS CyberAce finals, translating a simulated client RFP into security scenarios and business requirements, designing the COSEC generative-AI operations solution, and delivering competitor research, solution rationale, and the final pitch.",
    "project.9.tag.one": "Cybersecurity",
    "project.9.tag.two": "Artificial Intelligence",
    "project.9.tag.three": "User Requirements Analysis",
    "project.9.tag.four": "RFP Response",
    "project.9.detail.one.title": "Project Context",
    "project.9.detail.one.body":
      "Joined the 2023 CyberAce cybersecurity training camp co-hosted by Deloitte and AWS and reached the finals, working across enterprise cybersecurity, generative AI application, and client-response scenarios.",
    "project.9.detail.two.title": "Solution Design",
    "project.9.detail.two.body":
      "In the AI track, led the team in designing COSEC, a generative-AI maintenance solution based on a simulated client RFP, clarifying use cases, target users, core features, and delivery logic.",
    "project.9.detail.three.title": "Analysis Process",
    "project.9.detail.three.body":
      "Coordinated data collection and processing, competitor analysis, and market research, translating client requirements into solution rationale and final presentation materials.",
    "project.9.detail.four.title": "Tools & Skills",
    "project.9.detail.four.body": "Cybersecurity / Artificial Intelligence / User Requirements Analysis / RFP Response",
    "project.10.type": "LegalTech & Data Compliance",
    "project.10.time": "May 2023",
    "project.10.title": "Field Research",
    "project.10.body":
      "Initiated and led a four-person field research interview with Shihui Partners Shanghai, designing 18 progressive questions around personal information protection, cross-border data transfer, cybersecurity, and generative AI, then coordinating the on-site English interview, multi-camera recording, subtitled video, and individual report.",
    "project.10.tag.one": "Field Research",
    "project.10.tag.two": "English Interview",
    "project.10.tag.three": "Data Compliance",
    "project.10.tag.four": "LegalTech",
    "project.10.detail.one.title": "Research Context",
    "project.10.detail.one.body":
      "Selected Shihui Partners Shanghai as the research subject and interviewed an English-qualified lawyer specialising in cybersecurity, personal information protection, data compliance, and cross-border transactions to understand information systems and data management from a legal perspective.",
    "project.10.detail.two.title": "Interview Design",
    "project.10.detail.two.body":
      "As one of the initiators and interviewers, coordinated interviewee outreach, timing, location, and research preparation, then helped structure 18 progressive English questions across firm operations, legal expertise, team culture, and individual development.",
    "project.10.detail.three.title": "Key Insights",
    "project.10.detail.three.body":
      "Synthesised findings on PIPL, GDPR, cross-border data transfer, data mapping, encryption, pseudonymisation, anonymisation, law-firm digital platforms, and the compliance implications of generative AI.",
    "project.10.detail.four.title": "Tools & Skills",
    "project.10.detail.four.body": "Field Research / English Interview / Data Compliance / Video Editing",
    "project.11.type": "Data Analytics & Business Intelligence",
    "project.11.time": "April 2026",
    "project.11.title": "UK Gender Equality & LAD Characteristics: A TDA Study",
    "project.11.body":
      "Uses TDA to analyse UK LAD-level gender equality indicators, showing broad parity in education and health while structural gaps in power and unpaid work remain spatially uneven.",
    "project.11.tag.one": "TDA",
    "project.11.tag.two": "LAD Level Analysis",
    "project.11.tag.three": "GEI",
    "project.11.detail.one.title": "Research Scope",
    "project.11.detail.one.body": "Evaluates UK Local Authority District (LAD) level data to examine links between gender equality indicators and regional demographic, social, and economic characteristics.",
    "project.11.detail.two.title": "Methodological Framework",
    "project.11.detail.two.body": "Applies topological data analysis methods to identify high-dimensional indicator structures and compare similarities and differences across LADs.",
    "project.11.detail.three.title": "Analytical Output",
    "project.11.detail.three.body": "Based on dimensional decomposition, topological clustering, and regional visualisation, the analysis concludes that UK gender inequality cannot be explained by the North-South divide alone and requires place-based policy responses.",
    "ai.title": "AI Workflow",
    "ai.workflow.title": "My AI-assisted analysis workflow",
    "ai.step.one.title": "Problem Definition",
    "ai.step.one.body": "Use AI to structure the business context, stakeholder needs, and analytical objectives, then manually confirm the real question to answer.",
    "ai.step.two.title": "Analysis Drafting",
    "ai.step.two.body": "Generate initial SQL/Python directions, metric breakdowns, and visualisation structures, then adjust them against the actual data definitions.",
    "ai.step.three.title": "Human Validation",
    "ai.step.three.body": "Validate AI outputs through field checks, SQL recalculation, outlier review, and business-rule confirmation to keep findings explainable.",
    "ai.code.title": "Example: Prompt → SQL Draft",
    "ai.code.body": "use_case:\n  \"SQL is one example of how AI supports the analysis workflow.\"\n\nprompt:\n  \"Break down this business problem into key metrics, data fields, and potential anomalies.\"\n\nsql_draft:\n  SELECT segment, COUNT(*) AS users,\n         AVG(conversion_rate) AS avg_conversion\n  FROM analysis_table\n  WHERE data_quality_flag = 'valid'\n  GROUP BY segment;",
    "ai.chart.title": "AI Tool Map",
    "ai.chart.caption": "Grouped by analytics use case",
    "ai.tool.one.name": "ChatGPT",
    "ai.tool.one.use": "Problem framing / metric design / analysis drafts",
    "ai.tool.one.value": "92%",
    "ai.tool.two.name": "Claude",
    "ai.tool.two.use": "Long-form synthesis / requirements docs / case reviews",
    "ai.tool.two.value": "78%",
    "ai.tool.three.name": "Gemini",
    "ai.tool.three.use": "Multimodal understanding / spreadsheet cleanup / copy refinement",
    "ai.tool.three.value": "70%",
    "ai.tool.four.name": "Microsoft Copilot",
    "ai.tool.four.use": "Office documents / meeting summaries / presentation support",
    "ai.tool.four.value": "20%",
    "ai.evidence.one": "Prompts are used to frame problems, define metrics, and structure reporting; they do not replace analytical judgement.",
    "ai.evidence.two": "AI-generated SQL, interpretations, and findings are checked through recalculation, field-definition review, and manual revision.",
    "ai.evidence.three": "The main efficiency gain is faster analytical framing, less repetitive documentation work, and quicker dashboard-copy iteration.",
    "experience.eyebrow": "CAREER TIMELINE",
    "experience.title": "Professional Experience",
    "experience.note":
      "Two internships spanning IT operations, business process improvement, data visualisation, CRM, and compliance research, translating business context into structured analytical outputs.",
    "experience.1.time": "Oct 2024 - Mar 2025",
    "experience.1.company": "Philips (China) Investment Co., Ltd.",
    "experience.1.title": "IT Business Specialist Intern · IT Department",
    "experience.1.body":
      "Focused on supplier performance evaluation, internal process optimisation, Power BI KPI dashboards, and information-security compliance, turning IT operations data into management insights.",
    "experience.1.tag.one": "Power BI",
    "experience.1.tag.two": "Data Analytics",
    "experience.1.tag.three": "Process Optimisation",
    "experience.1.tag.four": "Supplier Evaluation",
    "experience.1.detail.1.title": "Supplier Performance Evaluation",
    "experience.1.detail.1.body":
      "Evaluated supplier performance in collaboration with Finance and Procurement teams, supporting continuous business-improvement planning and achieving 95% satisfaction from internal senior leadership.",
    "experience.1.detail.2.title": "Process Optimisation & System Operations",
    "experience.1.detail.2.body":
      "Managed daily operations and account administration for the internal reimbursement approval system; prepared user guidance for business users and improved approval efficiency and compliance to 98%.",
    "experience.1.detail.3.title": "KPI Dashboard",
    "experience.1.detail.3.body":
      "Built a 2025 KPI Dashboard in Power BI covering 15 annual business metrics for the IT department; handled data cleaning, filtering, and visualisation to support portfolio adjustment, resource allocation, and strategic investment decisions.",
    "experience.1.detail.4.title": "Information Security & Data Compliance",
    "experience.1.detail.4.body":
      "Monitored internal IT delivery and external suppliers to ensure delivered and upcoming systems complied with information-security requirements, with cross-border data transfer assessed against personal information protection and general data protection standards.",
    "experience.2.time": "Jul 2024 - Sep 2024",
    "experience.2.company": "Eurasia Consultis International",
    "experience.2.title": "Pre-sales Consultant Intern · Product Team",
    "experience.2.body":
      "Supported CRM data management, opportunity analysis, digital platform advisory, and privacy compliance research for client relationship optimisation and cross-border business assessment.",
    "experience.2.tag.one": "CRM",
    "experience.2.tag.two": "Sales Data Analysis",
    "experience.2.tag.three": "Digital Product Delivery",
    "experience.2.tag.four": "Privacy Compliance",
    "experience.2.detail.1.title": "Digital Platform Advisory",
    "experience.2.detail.1.body":
      "Supported the project director, design team, and development team in advising clients on official websites, WeChat mini-programmes, enterprise WeChat UI/UX, Drupal backend system upgrades, integration feasibility, delivery planning, and system architecture evaluation.",
    "experience.2.detail.2.title": "CRM & Localisation Strategy",
    "experience.2.detail.2.body":
      "Assisted the development team in providing localised marketing technology and CRM consulting, including feasibility analysis and strategy recommendations for Salesforce CRM and enterprise WeChat client-marketing tools in the Chinese market.",
    "experience.2.detail.3.title": "Cross-border Compliance Research",
    "experience.2.detail.3.body":
      "Supported compliance advisory for foreign companies operating in China, covering private-traffic privacy protection, cross-border data transfer, and ICP filing under personal information protection, cybersecurity, and e-commerce legal frameworks.",
    "experience.2.detail.4.title": "Opportunity Analysis",
    "experience.2.detail.4.body":
      "Organised client and opportunity information around business needs, platform feasibility, and implementation context, providing structured inputs for pre-sales communication and solution assessment.",
    "volunteerSection.title": "Volunteer Experience",
    "volunteer.marathon.photo.kicker": "Event Volunteer",
    "volunteer.marathon.photo.title": "Manchester Marathon",
    "volunteer.marathon.label": "Marathon / Volunteer",
    "volunteer.marathon.title": "2026 Manchester Marathon",
    "volunteer.marathon.body":
      "Supported crew room operations through volunteer and crew check-in/out, accreditation and high-visibility vest distribution, equipment organisation, catering support, uniform inventory and breakdown assistance. The line manager noted that she was reliable, proactive, and contributed positively to smooth operations.",
    "volunteer.marathon.time": "Marathon",
    "volunteer.marathon.role": "Sports Event",
    "volunteer.utas.photo.kicker": "Campus Visit",
    "volunteer.utas.photo.title": "UTAS x SHOU",
    "volunteer.utas.label": "Cross-university Visit / Interpretion",
    "volunteer.utas.title": "Interpreter for the University of Tasmania Delegation Visit to Shanghai Ocean University, Autumn 2024",
    "volunteer.utas.body":
      "Guided the University of Tasmania delegation through the Shanghai Ocean University History Museum, providing consecutive interpreting and introducing the university's history to support inter-university exchange and on-site communication.",
    "volunteer.utas.time": "Interpreting",
    "volunteer.utas.role": "Visit Support",
    "volunteer.utas.focus": "Inter-university Collaboration",
    "volunteer.graduation.label": "Graduation Ceremony / Interpretion",
    "volunteer.graduation.title": "Graduation Ceremony Interpreter, AIEN Institute, Shanghai Ocean University",
    "volunteer.graduation.body":
      "Provided full-process Chinese-English interpreting and on-site communication support for the 2024 AIEN Institute graduation ceremony at Shanghai Ocean University, helping ensure smooth ceremony coordination and accurate bilingual information delivery.",
    "volunteer.graduation.time": "Graduation Ceremony",
    "volunteer.graduation.role": "Translation / Interpreting",
    "volunteer.1.label": "WISE Society / Campus Volunteer",
    "volunteer.1.title": "WISE Society Activity Volunteer",
    "volunteer.1.body":
      "Supported around 50 Year 8 students in understanding bridge structures and the construction process, guiding them to build stable bridge models with cardboard, pens, straws, and other materials while encouraging interest in science and engineering, especially among girls.",
    "volunteer.1.time": "Activity Support",
    "volunteer.1.role": "STEM Outreach",
    "volunteer.1.focus": "Women in STEM",
    "volunteer.2.label": "Non-profit / Event",
    "volunteer.2.title": "Event Organisation and Cross-team Collaboration",
    "volunteer.2.body":
      "Describe how you communicated with participants, organised information, managed processes, and reviewed outcomes to show stakeholder management and execution.",
    "volunteer.2.time": "Date",
    "volunteer.2.role": "Role / Responsibility",
    "about.title": "About Me",
    "about.summary":
      "I want to position myself as an analytical candidate who understands business context, respects data, and communicates clearly. Add your education, industry interests, tool stack, target roles, and personal strengths here.",
    "about.skill.title": "Core Skills",
    "about.skill.one": "Requirements Analysis",
    "about.skill.two": "SQL / NoSQL",
    "about.skill.three": "Python",
    "about.skill.four": "Power BI / Tableau",
    "about.skill.five": "KPI Design",
    "about.skill.six": "Excel / Power Query",
    "about.skill.seven": "DAX / Data Modelling",
    "about.skill.eight": "Dashboard Reporting",
    "about.skill.nine": "User Research",
    "about.skill.ten": "Business Process Mapping",
    "about.skill.eleven": "Stakeholder Communication",
    "about.skill.twelve": "Business Storytelling",
    "about.skill.thirteen": "Critical Thinking",
    "about.skill.fourteen": "Cross-functional Collaboration",
    "about.skill.fifteen": "Cross-cultural Communication",
    "about.skill.sixteen": "Attention to Detail",
    "about.skill.seventeen": "Project Management",
    "about.skill.eighteen": "Data Quality Control",
    "about.skill.nineteen": "Structured Documentation",
    "about.skill.twenty": "Business Acumen",
    "about.skill.note":
      "I will keep refining these strengths into concrete tools, industries, methodologies, and measurable outcomes so recruiters can quickly judge role fit.",
    "education.title": "Education",
    "education.note": "A foundation across data science, information systems, and information management, with emphasis on research training, analytical methods, and business understanding.",
    "education.1.school": "The University of Manchester",
    "education.1.time": "Sep 2025 - Sep 2026",
    "education.1.degree": "MSc · Data Science (Business and Management)",
    "education.1.details":
      "🏅 Honour: Stellify Award<br>📈 Expected grade: First Class / Distinction equivalent (70+)<br>📚 Core modules: Statistics and Machine Learning, Topological Data Analysis, Privacy, Confidentiality and Disclosure Control.",
    "education.2.school": "University of Tasmania",
    "education.2.time": "Sep 2022 - Jun 2025",
    "education.2.degree": "BSc · Information Systems",
    "education.2.details":
      "GPA: 6.88/7.0 (Top 1)<br>🏅 Honours: 2025 UTAS Roll of Excellence; Recipient of the Top Graduate Award, Class of 2025.<br>📌 Research and capability: strengthened research design, systems analysis, and data-driven problem solving, with a focus on how information systems support business process optimisation, user needs identification, and organisational decision-making.<br>💡 Communication: literature review, requirements analysis, data modelling, research writing, and English presentation.",
    "education.3.school": "Shanghai Ocean University",
    "education.3.time": "Sep 2021 - Jun 2025",
    "education.3.degree": "BSc · Information Management and Information Systems",
    "education.3.details":
      "GPA: 3.75/4.0 (Top 1%)<br>🎓 Dissertation: California bird species recognition based on convolutional neural networks (Outstanding Undergraduate Dissertation).",
    "global.eyebrow": "Global Perspective",
    "global.title": "Global Perspective / Cross-cultural Collaboration",
    "global.summary":
      "Use education, international collaboration, expert conversations, and project contexts to show a multicultural background. This is not a travel map; it is evidence of understanding different perspectives and translating them into structured analysis.",
    "global.detail.kicker": "Selected context",
    "global.uk.name": "United Kingdom",
    "global.uk.type": "Education / Analytics Context",
    "global.uk.body":
      "MSc study in Manchester, English-speaking academic work, business data analysis contexts, and cross-cultural teamwork foundations.",
    "global.us.name": "United States",
    "global.us.type": "Expert Network / Industry Reference",
    "global.us.body":
      "Add experience related to US-based experts, industry materials, data product cases, or analytical methods.",
    "global.france.name": "France",
    "global.france.type": "Cross-cultural Collaboration",
    "global.france.body": "Add collaboration with French-background peers, experts, or project contexts.",
    "global.italy.name": "Italy",
    "global.italy.type": "Cross-cultural Collaboration",
    "global.italy.body": "Add multicultural teamwork or expert conversations connected to Italy.",
    "global.vietnam.name": "Vietnam",
    "global.vietnam.type": "Regional Perspective",
    "global.vietnam.body": "Add Southeast Asia market context, teamwork, class projects, or cross-cultural communication.",
    "global.singapore.name": "Singapore",
    "global.singapore.type": "Business / Technology Context",
    "global.singapore.body": "Add Singapore-related business analysis, technology ecosystem, project cases, or expert conversations.",
    "global.australia.name": "Australia",
    "global.australia.type": "Education / Research Context",
    "global.australia.body":
      "Information Systems study and Honours research training at the University of Tasmania, showing systems analysis, research writing, and cross-cultural collaboration in an English-speaking environment.",
    "global.philippines.name": "Philippines",
    "global.philippines.type": "Multicultural Collaboration",
    "global.philippines.body": "Add multicultural teamwork, volunteer context, or cross-regional communication.",
    "global.india.name": "India",
    "global.india.type": "Data / Technology Collaboration",
    "global.india.body": "Add collaboration with Indian-background experts, classmates, or data and technology contexts.",
    "global.japan.name": "Japan",
    "global.japan.type": "Regional Perspective / Business Context",
    "global.japan.body": "Add Japan-related industry cases, project materials, cross-cultural discussions, or regional business analysis context.",
    "global.china.name": "China",
    "global.china.type": "Home Market / Data & Business Context",
    "global.china.body":
      "Use Chinese business contexts, data product scenarios, and bilingual communication as a foundation for translating local insight into structured analysis and cross-cultural storytelling.",
    "global.netherlands.name": "Netherlands",
    "global.netherlands.type": "International Collaboration",
    "global.netherlands.body": "Add Dutch expert conversations, research materials, project contexts, or cross-cultural discussions.",
    "global.norway.name": "Norway",
    "global.norway.type": "Nordic Perspective / Expert Context",
    "global.norway.body": "Add Norway-related expert conversations, Nordic industry perspectives, project materials, or cross-cultural exchange.",
    "global.germany.name": "Germany",
    "global.germany.type": "Expert Collaboration / Industry Lens",
    "global.germany.body":
      "Add conversations or experience related to German experts, industry perspectives, process management, or data analytics practice.",
    "campus.manchester.summary":
      "🎓 Add course projects, business analytics cases, team presentations, or career activities from the Manchester MSc period. Focus on how you connect Data Science with Business Management.",
    "campus.manchester.one.title": "Stellify Award",
    "campus.manchester.one.body":
      "Encourages students to take part in volunteering, leadership practice, and Ethical Grand Challenges beyond academic study, building a fuller foundation for personal development.",
    "campus.manchester.two.title": "Student Representative",
    "campus.manchester.two.body":
      "Served as a student representative for the programme, gathering and synthesising peer feedback on learning experience, campus life, career development, and wellbeing support, then communicating student needs to the programme team to support continuous improvement.",
    "campus.manchester.three.title": "Career Exploration",
    "campus.manchester.three.body":
      "Took part in the university’s Career Connect programme, receiving one-to-one mentoring on CV review, interview preparation, and career direction, and attended employer presentations for Data Science students to refine career positioning and application materials.",
    "campus.manchester.tag.one": "Data Science",
    "campus.manchester.tag.two": "Business Management",
    "campus.manchester.tag.three": "Presentation",
    "campus.utas.summary":
      "🏅 Use the UTAS period to highlight Honours study, Information Systems foundations, and research training as evidence of your transition into business and data analysis.",
    "campus.utas.hero.kicker": "Honours / Recognition",
    "campus.utas.hero.body":
      "Awarded the University of Tasmania 2025 Roll of Excellence for BSc Information Systems and recognised with the Best Graduate honour.",
    "campus.utas.one.title": "Transferable Skills",
    "campus.utas.one.body": "Strengthened teamwork, critical thinking, and proactive communication through cross-cultural study and group-based projects.",
    "campus.utas.two.title": "Systems Analysis",
    "campus.utas.two.body": "Practised describing problems from user needs, business processes, and system constraints before proposing improvements.",
    "campus.utas.three.title": "Research Communication",
    "campus.utas.three.body": "Built structured analytical and professional communication skills through literature review, research design, data modelling, and English presentations.",
    "campus.utas.tag.one": "Honours",
    "campus.utas.tag.two": "Information Systems",
    "campus.utas.tag.three": "Research Writing",
    "campus.shou.summary":
      "🌊 Use the Shanghai Ocean University period as early evidence of your information management foundation, management-process awareness, and data mindset.",
    "campus.shou.hero.kicker": "Competition / Leadership",
    "campus.shou.hero.body":
      "Led a seven-member team in the 2024 National College Business Elite Challenge International Trade Competition, winning the National Special Prize and Shanghai First Prize. Also served as Class Monitor and Manager of the Operations Department, AIEN Yiban Workstation.",
    "campus.shou.one.title": "English Language Capability",
    "campus.shou.one.body": "Won awards in multiple national and provincial English competitions, with experience in English debating, impromptu presentations, and public speaking.",
    "campus.shou.two.title": "Campus Operations",
    "campus.shou.two.body": "Served as Manager of the Operations Department, AIEN Yiban Workstation, contributing to event planning, coordination, and cross-department collaboration.",
    "campus.shou.three.title": "ERP Training",
    "campus.shou.three.body": "Built practical understanding of enterprise resource planning, business process coordination, and the role of information systems in organisational operations.",
    "campus.shou.tag.one": "Information Management",
    "campus.shou.tag.two": "Database Basics",
    "campus.shou.tag.three": "Teamwork",
    "extra.title": "Credentials & Additional Materials",
    "cert.kicker": "Certification",
    "cert.name": "Microsoft Certified Power BI Data Analyst",
    "cert.issuer": "Issued by: Microsoft",
    "cert.date": "Earned: Feb 2025",
    "cert.skill.one": "Power BI",
    "cert.skill.two": "DAX",
    "cert.skill.three": "Power Query",
    "cert.skill.four": "Data Modelling",
    "cert.skill.five": "Data Analytics",
    "cert.excel.kicker": "Certification",
    "cert.excel.name": "Microsoft Office Specialist: Excel Expert",
    "cert.excel.issuer": "Issued by: Microsoft",
    "cert.excel.date": "Issued: Sep 2024",
    "cert.excel.skill.one": "Excel",
    "cert.excel.skill.two": "Advanced Formulas",
    "cert.excel.skill.three": "PivotTables",
    "cert.excel.skill.four": "Data Cleaning",
    "cert.excel.skill.five": "Spreadsheet Modelling",
    "cert.ielts.kicker": "Certification",
    "cert.ielts.name": "IELTS Academic English Test",
    "cert.ielts.issuer": "Test provider: British Council",
    "cert.ielts.date": "Test date: Oct 2023",
    "cert.ielts.score.one": "Overall 7.0",
    "cert.ielts.score.two": "Listening 8.5",
    "cert.ielts.score.three": "Reading 7.0",
    "cert.ielts.score.four": "Writing 6.5",
    "cert.ielts.score.five": "Speaking 6.5",
    "extra.product": "Product / Projects: add prototypes, PRDs, dashboards, or demo links",
    "extra.github": "GitHub: add your profile or selected repository links",
    "extra.media": "Media: add your homepage or representative content links",
    "contact.title": "Open to potential opportunities",
    "contact.body":
      "Add your email, LinkedIn, GitHub, target role type, and preferred locations here.",
    "contact.email": "E-mail: yunweigu@outlook.com",
    "contact.linkedin": "LinkedIn: https://www.linkedin.com/in/yunweig/",
    "contact.github": "GitHub: https://github.com/yunweig23",
  };

  const uiText = {
    zh: {
      "nav.home": "首页",
      "nav.projects": "项目",
      "nav.ai": "AI",
      "nav.content": "内容",
      "nav.experience": "经历",
      "nav.volunteer": "志愿者",
      "nav.about": "关于我",
      "nav.contact": "联系",
      "cta.projects": "查看项目",
      "cta.contact": "联系方式",
      "action.edit": "编辑",
      "action.editOff": "退出编辑",
      "action.save": "保存",
      "action.export": "导出",
      "action.import": "导入",
      "action.reset": "重置",
      "action.addProject": "添加项目",
      "action.addExperience": "添加经历",
      "action.addContent": "添加内容",
      "action.addVolunteer": "添加志愿者经历",
      "projects.eyebrow": "PROJECT EXPERIENCE",
      "experience.eyebrow": "CAREER TIMELINE",
      "ai.eyebrow": "AI Workflow",
      "volunteer.eyebrow": "Volunteer Experience",
      "about.eyebrow": "ABOUT ME",
      "global.eyebrow": "Global Perspective",
      "contact.eyebrow": "CONTACT ME",
      "project.filter.all": "全部",
      "project.filter.analytics": "数据分析与商业智能",
      "project.filter.ml": "深度学习与算法建模",
      "project.filter.web": "Web 产品与系统开发",
      "project.filter.security": "网络安全与隐私计算",
      "project.helper": "你可以先放很多项目，再按主题筛选；“全部”会默认按时间从近到远展示。",
      "project.modal.kicker": "Project Detail",
      "project.modal.visual": "Dashboard / 报告 / 截图待添加",
      "project.detail.context": "项目背景",
      "project.detail.context.body": "这里可以补充业务问题、数据来源、目标用户、课程或比赛背景。",
      "project.detail.process": "分析过程",
      "project.detail.process.body": "这里可以补充你的方法：需求拆解、数据清洗、指标设计、建模、可视化或访谈。",
      "project.detail.output": "最终产出",
      "project.detail.output.body": "这里可以放 dashboard、PRD、报告、原型、GitHub README、demo 链接或关键结论。",
      "project.detail.tool": "工具与能力",
      "experience.modal.kicker": "Professional Experience Detail",
      "experience.modal.visual": "工作材料 / Dashboard / 项目照片待添加",
      "experience.detail.scope": "职责范围",
      "experience.detail.scope.body": "这里可以补充你的岗位职责、负责模块、合作对象和工作范围。",
      "experience.detail.problem": "业务问题",
      "experience.detail.problem.body": "这里可以补充你面对的业务场景、流程问题、数据问题或 stakeholder 需求。",
      "experience.detail.action": "工作过程",
      "experience.detail.action.body": "这里可以补充你如何调研、分析、整理、沟通、可视化或推进落地。",
      "experience.detail.result": "产出与影响",
      "experience.detail.result.body": "这里可以补充报告、dashboard、流程文档、分析结论、效率提升或可量化结果。",
      "volunteer.photo.kicker": "团队协作记录",
      "volunteer.photo.title": "实践型协作经历",
      "campus.view": "高光经历",
      "campus.eyebrow": "CAMPUS HIGHLIGHTS",
      "cert.verify": "查看认证",
      "cert.proof.kicker": "Credential preview",
      "cert.proof.title": "认证照片待添加",
      "cert.proof.empty": "之后把成绩单照片发给我，我会把这里替换成可点击查看的大图。",
      "global.tag.uk": "英国",
      "global.tag.us": "美国",
      "global.tag.france": "法国",
      "global.tag.italy": "意大利",
      "global.tag.vietnam": "越南",
      "global.tag.singapore": "新加坡",
      "global.tag.australia": "澳大利亚",
      "global.tag.philippines": "菲律宾",
      "global.tag.india": "印度",
      "global.tag.japan": "日本",
      "global.tag.china": "中国",
      "global.tag.netherlands": "荷兰",
      "global.tag.norway": "挪威",
      "global.tag.germany": "德国",
      "global.region.europe": "欧洲",
      "global.region.asia": "亚洲",
      "global.region.oceania": "大洋洲",
      "global.region.northAmerica": "北美洲",
      "global.region.europe.count": "6 个国家",
      "global.region.asia.count": "6 个国家",
      "global.region.oceania.count": "1 个国家",
      "global.region.northAmerica.count": "1 个国家",
      "toast.editOn": "已进入编辑模式，点击文字即可修改。",
      "toast.editOff": "已退出编辑模式。",
      "toast.saved": "已保存当前语言内容。",
      "toast.exported": "已导出中英文内容 JSON。",
      "toast.imported": "已导入内容。",
      "toast.added": "已添加新模块。",
      "toast.language": "已切换到中文。",
      "confirm.reset": "确定要清除本地保存的修改并恢复初始模板吗？",
      "placeholder.title": "新的标题",
      "placeholder.time": "时间",
      "placeholder.link": "添加链接",
      "placeholder.tag": "标签",
      "placeholder.body": "待补充内容。",
    },
    en: {
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.ai": "AI",
      "nav.content": "Content",
      "nav.experience": "Experience",
      "nav.volunteer": "Volunteer",
      "nav.about": "About",
      "nav.contact": "Contact",
      "cta.projects": "View Projects",
      "cta.contact": "Contact",
      "action.edit": "Edit",
      "action.editOff": "Stop editing",
      "action.save": "Save",
      "action.export": "Export",
      "action.import": "Import",
      "action.reset": "Reset",
      "action.addProject": "Add project",
      "action.addExperience": "Add experience",
      "action.addContent": "Add content",
      "action.addVolunteer": "Add volunteer work",
      "projects.eyebrow": "PROJECT EXPERIENCE",
      "experience.eyebrow": "CAREER TIMELINE",
      "ai.eyebrow": "TOOLS & METHODS",
      "volunteer.eyebrow": "COMMUNITY & EVENT SUPPORT",
      "about.eyebrow": "PROFILE & SKILLS",
      "global.eyebrow": "INTERNATIONAL CONTEXT",
      "contact.eyebrow": "CONTACT ME",
      "project.filter.all": "All",
      "project.filter.analytics": "Data Analytics & Business Intelligence",
      "project.filter.ml": "Deep Learning & Algorithmic Modelling",
      "project.filter.web": "Web Product & System Development",
      "project.filter.security": "Cybersecurity & Privacy Computing",
      "project.helper": "Add as many projects as you want, filter by theme, and use All to browse everything from newest to oldest.",
      "project.modal.kicker": "Project Detail",
      "project.modal.visual": "Dashboard / report / screenshots to add",
      "project.detail.context": "Context",
      "project.detail.context.body": "Add the business problem, data source, target users, coursework, competition, or project background.",
      "project.detail.process": "Process",
      "project.detail.process.body": "Add your method: requirement breakdown, data cleaning, metric design, modelling, visualisation, or interviews.",
      "project.detail.output": "Outputs",
      "project.detail.output.body": "Add dashboards, PRDs, reports, prototypes, GitHub README, demo links, or key findings.",
      "project.detail.tool": "Tools & Skills",
      "experience.modal.kicker": "Professional Experience Detail",
      "experience.modal.visual": "Work materials / dashboard / photos to add",
      "experience.detail.scope": "Scope",
      "experience.detail.scope.body": "Add your responsibilities, owned modules, collaborators, and working scope.",
      "experience.detail.problem": "Business Problem",
      "experience.detail.problem.body": "Add the business context, process gap, data problem, or stakeholder needs.",
      "experience.detail.action": "Actions",
      "experience.detail.action.body": "Add how you researched, analysed, documented, communicated, visualised, or supported implementation.",
      "experience.detail.result": "Outputs & Impact",
      "experience.detail.result.body": "Add reports, dashboards, process documents, findings, efficiency gains, or measurable outcomes.",
      "volunteer.photo.kicker": "Teamwork Snapshot",
      "volunteer.photo.title": "Hands-on collaboration",
      "campus.view": "Highlights",
      "campus.eyebrow": "CAMPUS HIGHLIGHTS",
      "cert.verify": "Verify credential",
      "cert.proof.kicker": "Credential preview",
      "cert.proof.title": "Credential image to be added",
      "cert.proof.empty": "Send me the score report image later, and I will replace this with a clickable full-size preview.",
      "global.tag.uk": "United Kingdom",
      "global.tag.us": "United States",
      "global.tag.france": "France",
      "global.tag.italy": "Italy",
      "global.tag.vietnam": "Vietnam",
      "global.tag.singapore": "Singapore",
      "global.tag.australia": "Australia",
      "global.tag.philippines": "Philippines",
      "global.tag.india": "India",
      "global.tag.japan": "Japan",
      "global.tag.china": "China",
      "global.tag.netherlands": "Netherlands",
      "global.tag.norway": "Norway",
      "global.tag.germany": "Germany",
      "global.region.europe": "Europe",
      "global.region.asia": "Asia",
      "global.region.oceania": "Oceania",
      "global.region.northAmerica": "North America",
      "global.region.europe.count": "6 countries",
      "global.region.asia.count": "6 countries",
      "global.region.oceania.count": "1 country",
      "global.region.northAmerica.count": "1 country",
      "toast.editOn": "Editing is on. Click any text to refine it.",
      "toast.editOff": "Editing is off.",
      "toast.saved": "Saved the current language content.",
      "toast.exported": "Exported bilingual content JSON.",
      "toast.imported": "Imported content.",
      "toast.added": "Added a new block.",
      "toast.language": "Switched to English.",
      "confirm.reset": "Clear locally saved edits and restore the initial template?",
      "placeholder.title": "New title",
      "placeholder.time": "Date",
      "placeholder.link": "Add link",
      "placeholder.tag": "Tag",
      "placeholder.body": "Content to be added.",
    },
  };

  function normalizeLang(lang) {
    return lang === "en" ? "en" : "zh";
  }

  function storageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.warn("Local storage is unavailable:", error);
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.warn("Local storage write failed:", error);
    }
  }

  function storageRemove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn("Local storage remove failed:", error);
    }
  }

  let currentLang = normalizeLang(storageGet(LANG_KEY));
  let toastTimer = null;
  const campusCarouselTimers = new WeakMap();
  const projectCarouselTimers = new WeakMap();

  const editableNodes = () => Array.from(document.querySelectorAll("[data-editable][data-key]"));
  const defaultContent = { zh: collectContent(), en: enContent };

  function readJson(key, fallback) {
    try {
      return JSON.parse(storageGet(key) || "") || fallback;
    } catch {
      return fallback;
    }
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
  }

  function t(key) {
    const dictionary = uiText[currentLang] || uiText.zh;
    return dictionary[key] || uiText.zh[key] || key;
  }

  function collectContent() {
    return editableNodes().reduce((content, node) => {
      content[node.dataset.key] = node.innerHTML;
      return content;
    }, {});
  }

  function collectLists() {
    return Array.from(document.querySelectorAll("[data-list]")).reduce((lists, list) => {
      lists[list.id] = list.innerHTML;
      return lists;
    }, {});
  }

  function syncKpiStripLanguage(root = document) {
    const titleZh = "KPI 示例指标";
    const titleEn = "Selected KPI Examples";
    const noteZh = "以下仅展示典型 KPI 示例，实际报表共覆盖15个 IT 部门 KPI。";
    const noteEn = "Examples only. The full dashboard covers 15 IT department KPIs.";
    root.querySelectorAll(".project-detail-kpi-strip .kpi-strip-head").forEach((head) => {
      head.innerHTML = `
        <span class="kpi-strip-title kpi-lang-zh">${titleZh}</span>
        <span class="kpi-strip-title kpi-lang-en">${titleEn}</span>
        <p class="kpi-strip-note">
          <span class="kpi-lang-zh">${noteZh}</span>
          <span class="kpi-lang-en">${noteEn}</span>
        </p>`;
    });
  }

  function applyContent(content) {
    if (!content) return;
    editableNodes().forEach((node) => {
      if (Object.prototype.hasOwnProperty.call(content, node.dataset.key)) {
        node.innerHTML = content[node.dataset.key];
        syncEditableLink(node);
      }
    });
    syncKpiStripLanguage();
  }

  function marathonVolunteerTemplate() {
    return `<article class="volunteer-card interactive-card volunteer-card-featured" data-item data-volunteer-card="marathon">
      <figure class="volunteer-photo-card volunteer-photo-wide">
        <img src="assets/volunteer-manchester-marathon.jpg" alt="2026 Manchester Marathon volunteer team" loading="lazy" />
        <figcaption>
          <span data-editable data-key="volunteer.marathon.photo.kicker">赛事志愿者</span>
          <strong data-editable data-key="volunteer.marathon.photo.title">曼彻斯特马拉松</strong>
        </figcaption>
      </figure>
      <div class="volunteer-copy-panel">
        <figure class="volunteer-event-mark marathon-event-mark">
          <img src="assets/marathon-date-announced.webp" alt="Manchester Marathon 19 April 2026 event mark" loading="lazy" />
        </figure>
        <p class="volunteer-label" data-editable data-key="volunteer.marathon.label">Marathon / Volunteer</p>
        <h3 data-editable data-key="volunteer.marathon.title">2026曼彻斯特马拉松</h3>
        <p data-editable data-key="volunteer.marathon.body">负责出发团队、所有志愿者及相关人员的签到签退、证件与高可视背心发放、物资整理、餐饮支持、制服盘点及收尾清洁；获得团队经理评价其执行可靠、主动补位，积极支持现场顺畅运作。</p>
        <div class="volunteer-meta">
          <span data-editable data-key="volunteer.marathon.time">马拉松</span>
          <span data-editable data-key="volunteer.marathon.role">体育活动志愿者</span>
        </div>
      </div>
    </article>`;
  }

  function utasVisitVolunteerTemplate() {
    return `<article class="volunteer-card interactive-card volunteer-card-featured" data-item data-volunteer-card="utas-visit">
      <figure class="volunteer-photo-card volunteer-photo-wide">
        <img src="assets/volunteer-utas-shou-visit-v2.jpg" alt="University of Tasmania delegation visit to Shanghai Ocean University" loading="lazy" />
        <figcaption>
          <span data-editable data-key="volunteer.utas.photo.kicker">跨校访问</span>
          <strong data-editable data-key="volunteer.utas.photo.title">塔大 x 上海海洋大学</strong>
        </figcaption>
      </figure>
      <div class="volunteer-copy-panel">
        <figure class="volunteer-event-mark volunteer-event-mark-duo">
          <img src="assets/logo-shou-round.jpeg" alt="Shanghai Ocean University logo" loading="lazy" />
          <img src="assets/logo-utas-stacked.png" alt="University of Tasmania logo" loading="lazy" />
        </figure>
        <p class="volunteer-label" data-editable data-key="volunteer.utas.label">Cross-university Visit / Interpretion</p>
        <h3 data-editable data-key="volunteer.utas.title">2024年秋季塔斯马尼亚大学领导参访上海海洋大学随行翻译</h3>
        <p data-editable data-key="volunteer.utas.body">协助带领塔斯马尼亚大学代表团参观上海海洋大学校史馆，并进行中英文随行翻译与学校历史介绍，支持两校交流与现场沟通。</p>
        <div class="volunteer-meta">
          <span data-editable data-key="volunteer.utas.time">随行翻译</span>
          <span data-editable data-key="volunteer.utas.role">参访支持</span>
          <span data-editable data-key="volunteer.utas.focus">校间合作</span>
        </div>
      </div>
    </article>`;
  }

  function graduationVolunteerTemplate() {
    return `<article class="volunteer-card interactive-card volunteer-card-featured volunteer-card-portrait" data-item data-volunteer-card="graduation">
      <figure class="volunteer-photo-card volunteer-photo-portrait">
        <img src="assets/volunteer-graduation-interpreter.jpg" alt="Graduation ceremony interpreter at AEN College Shanghai Ocean University" loading="lazy" />
      </figure>
      <div class="volunteer-copy-panel">
        <figure class="volunteer-event-mark volunteer-event-mark-duo">
          <img src="assets/logo-shou-round.jpeg" alt="Shanghai Ocean University logo" loading="lazy" />
          <img src="assets/logo-utas-stacked.png" alt="University of Tasmania logo" loading="lazy" />
        </figure>
        <p class="volunteer-label" data-editable data-key="volunteer.graduation.label">Graduation Ceremony / Interpretion</p>
        <h3 data-editable data-key="volunteer.graduation.title">2024年上海海洋大学爱恩学院毕业典礼翻译</h3>
        <p data-editable data-key="volunteer.graduation.body">负责2024年上海海洋大学爱恩学院毕业典礼全程中英口译与现场沟通支持，协助典礼环节顺畅衔接并保障中英文信息准确传达。</p>
        <div class="volunteer-meta">
          <span data-editable data-key="volunteer.graduation.time">毕业典礼</span>
          <span data-editable data-key="volunteer.graduation.role">翻译 / 口译</span>
        </div>
      </div>
    </article>`;
  }

  function ensureFeaturedVolunteerCard(card, imageSrc, altText, captionHtml) {
    if (!card) return;
    card.classList.add("volunteer-card-featured");
    let photo = card.querySelector(".volunteer-photo-card");
    if (!photo) {
      card.insertAdjacentHTML(
        "afterbegin",
        `<figure class="volunteer-photo-card">
          <img src="${imageSrc}" alt="${altText}" loading="lazy" />
          <figcaption>${captionHtml}</figcaption>
        </figure>`,
      );
      photo = card.querySelector(".volunteer-photo-card");
    }
    const image = photo?.querySelector("img");
    if (image) {
      image.src = imageSrc;
      image.alt = altText;
    }
    if (!card.querySelector(".volunteer-copy-panel")) {
      const nodesToWrap = Array.from(card.children).filter((node) => !node.classList.contains("volunteer-photo-card"));
      const panel = document.createElement("div");
      panel.className = "volunteer-copy-panel";
      nodesToWrap.forEach((node) => panel.appendChild(node));
      card.appendChild(panel);
    }
  }

  function ensureVolunteerLogoMark(card, selector, html, images) {
    const panel = card?.querySelector(".volunteer-copy-panel");
    if (!panel) return;
    let mark = panel.querySelector(selector);
    if (!mark) {
      panel.insertAdjacentHTML("afterbegin", html);
      mark = panel.querySelector(selector);
    }
    mark.classList.add("volunteer-event-mark");
    mark.querySelectorAll("img").forEach((image, index) => {
      const source = images[index];
      if (!source) return;
      image.src = source.src;
      image.alt = source.alt;
      image.loading = "lazy";
    });
  }

  function ensureMarathonEventMark(card) {
    ensureVolunteerLogoMark(
      card,
      ".marathon-event-mark",
      `<figure class="volunteer-event-mark marathon-event-mark">
        <img src="assets/marathon-date-announced.webp" alt="Manchester Marathon 19 April 2026 event mark" loading="lazy" />
      </figure>`,
      [{ src: "assets/marathon-date-announced.webp", alt: "Manchester Marathon 19 April 2026 event mark" }],
    );
  }

  function ensureWiseEventMark(card) {
    ensureVolunteerLogoMark(
      card,
      ".volunteer-event-mark-wise",
      `<figure class="volunteer-event-mark volunteer-event-mark-single volunteer-event-mark-wise">
        <img src="assets/logo-wise.jpg" alt="WISE Women in Science and Engineering logo" loading="lazy" />
      </figure>`,
      [{ src: "assets/logo-wise.jpg", alt: "WISE Women in Science and Engineering logo" }],
    );
  }

  function ensureUniversityPairMark(card) {
    ensureVolunteerLogoMark(
      card,
      ".volunteer-event-mark-duo",
      `<figure class="volunteer-event-mark volunteer-event-mark-duo">
        <img src="assets/logo-shou-round.jpeg" alt="Shanghai Ocean University logo" loading="lazy" />
        <img src="assets/logo-utas-stacked.png" alt="University of Tasmania logo" loading="lazy" />
      </figure>`,
      [
        { src: "assets/logo-shou-round.jpeg", alt: "Shanghai Ocean University logo" },
        { src: "assets/logo-utas-stacked.png", alt: "University of Tasmania logo" },
      ],
    );
  }

  function orderVolunteerCards(volunteerList, cards) {
    let previous = null;
    cards.filter(Boolean).forEach((card) => {
      if (previous) {
        previous.insertAdjacentElement("afterend", card);
      } else {
        volunteerList.prepend(card);
      }
      previous = card;
    });
  }

  function setEditableTextIfPlaceholder(card, key, placeholderTexts, replacement) {
    const node = card?.querySelector(`[data-key="${key}"]`);
    if (!node) return;
    const text = node.textContent.trim();
    if (!text || placeholderTexts.includes(text)) {
      node.textContent = replacement;
    }
  }

  function ensureVolunteerMetaItem(card, key, fallbackText) {
    if (!card || card.querySelector(`[data-key="${key}"]`)) return;
    const meta = card.querySelector(".volunteer-meta");
    if (!meta) return;
    meta.insertAdjacentHTML("beforeend", `<span data-editable data-key="${key}">${fallbackText}</span>`);
  }

  function experienceContent(content, id, detailIndex, key) {
    return content?.[`experience.${id}.detail.${detailIndex}.${key}`] || t("placeholder.body");
  }

  function experienceDetailSourceTemplate(id, content) {
    return `
      <div class="experience-detail-source" hidden>
        ${[1, 2, 3, 4]
          .map(
            (detailIndex) => `
              <article>
                <span>${String(detailIndex).padStart(2, "0")}</span>
                <h3 data-editable data-key="experience.${id}.detail.${detailIndex}.title">${experienceContent(content, id, detailIndex, "title")}</h3>
                <p data-editable data-key="experience.${id}.detail.${detailIndex}.body">${experienceContent(content, id, detailIndex, "body")}</p>
              </article>`,
          )
          .join("")}
      </div>`;
  }

  function ensureExperienceDetailSources(content) {
    [1, 2].forEach((id) => {
      const card = document.querySelector(`[data-key="experience.${id}.title"]`)?.closest(".timeline-item");
      if (!card || card.querySelector(".experience-detail-source")) return;
      const contentHost = card.querySelector(":scope > div:not(.experience-meta)") || card.querySelector(":scope > div");
      contentHost?.insertAdjacentHTML("beforeend", experienceDetailSourceTemplate(id, content));
    });
  }

  function ensureExperienceLogos() {
    const logos = {
      1: { src: "assets/logo-philips-flat.svg", label: "Philips", alt: "Philips logo" },
      2: { src: "assets/logo-itc-flat.svg", label: "ITC", alt: "ITC logo" },
    };
    Object.entries(logos).forEach(([id, logo]) => {
      const card = document.querySelector(`[data-key="experience.${id}.title"]`)?.closest(".timeline-item");
      const timeNode = card?.querySelector(`[data-key="experience.${id}.time"]`);
      if (!card || !timeNode || card.querySelector(".experience-logo-strip")) return;

      if (!timeNode.closest(".experience-meta")) {
        const wrapper = document.createElement("div");
        wrapper.className = "experience-meta";
        timeNode.before(wrapper);
        wrapper.appendChild(timeNode);
      }

      timeNode.closest(".experience-meta")?.insertAdjacentHTML(
        "beforeend",
        `<div class="experience-logo-strip" aria-label="${logo.label}">
          <img src="${logo.src}" alt="${logo.alt}" />
        </div>`,
      );
    });
  }

  function ensureExperienceCardStructure() {
    document.querySelectorAll("#experienceList .timeline-item").forEach((card) => {
      const meta = card.querySelector(":scope > .experience-meta");
      const copy = card.querySelector(":scope > div:not(.experience-meta)");
      if (copy) copy.classList.add("experience-copy");
      if (meta) meta.querySelector(".experience-logo-strip")?.setAttribute("aria-hidden", "false");
    });
  }

  const projectScaffold = [
    { id: 1, category: "analytics", year: 999999 },
    { id: 2, category: "analytics", year: 202605 },
    {
      id: 3,
      category: "analytics",
      year: 202503,
      image: "assets/project-philips-kpi-dashboard.svg",
      imageFit: "contain",
      imageTransparent: true,
      hideMeta: true,
    },
    {
      id: 4,
      category: "analytics",
      year: 202512,
      image: "assets/project-university-tycoon-board.png",
      imageFit: "contain",
      hideMeta: true,
    },
    {
      id: 5,
      category: "ml",
      year: 202504,
      image: "assets/project-cnn-bird-classifier.svg",
      imageFit: "contain",
      imageTransparent: true,
      hideMeta: true,
    },
    {
      id: 6,
      category: "web",
      year: 202411,
      image: "assets/project-dunhuang-gallery.jpg",
      hideMeta: true,
    },
    {
      id: 7,
      category: "web",
      year: 202312,
      image: "assets/project-market-master-ecommerce.svg",
      imageFit: "contain",
      imageTransparent: true,
      hideMeta: true,
    },
    {
      id: 8,
      category: "security",
      year: 202507,
      hideMeta: true,
      carousel: [
        "assets/project-ai-governance-tongji-01.jpg",
        "assets/project-ai-governance-tongji-02.jpg",
        "assets/project-ai-governance-tongji-03.jpg",
        "assets/project-ai-governance-tongji-04.jpg",
      ],
      carouselDelay: 3000,
    },
    {
      id: 9,
      category: "security",
      year: 202311,
      hideMeta: true,
      carousel: [
        "assets/project-cyberace-deloitte-01.jpg",
        "assets/project-cyberace-deloitte-02.jpg",
        "assets/project-cyberace-deloitte-03.jpg",
      ],
      carouselDelay: 3000,
    },
    {
      id: 10,
      category: "security",
      year: 202305,
      image: "assets/project-field-research-shihui.jpg",
      imageRatio: "4-3",
      hideMeta: true,
    },
    {
      id: 11,
      category: "analytics",
      year: 202604,
      image: "assets/project-gender-tda-dimensional-decomposition.png",
      imageFit: "contain",
      hideMeta: true,
    },
  ];

  function projectContent(content, id, key) {
    return content?.[`project.${id}.${key}`] || t("placeholder.body");
  }

  function projectDetailSourceTemplate(project, content) {
    if (project.id === 3) {
      return `
        <div class="project-detail-source" hidden>
          <article class="project-detail-kpi-card">
            <span>01</span>
            <h3 data-editable data-key="project.3.detail.one.title">${projectContent(content, 3, "detail.one.title")}</h3>
            <p data-editable data-key="project.3.detail.one.body">${projectContent(content, 3, "detail.one.body")}</p>
          </article>
          <article>
            <span>02</span>
            <h3 data-editable data-key="project.3.detail.two.title">${projectContent(content, 3, "detail.two.title")}</h3>
            <p data-editable data-key="project.3.detail.two.body">${projectContent(content, 3, "detail.two.body")}</p>
          </article>
          <article>
            <span>03</span>
            <h3 data-editable data-key="project.3.detail.three.title">${projectContent(content, 3, "detail.three.title")}</h3>
            <p data-editable data-key="project.3.detail.three.body">${projectContent(content, 3, "detail.three.body")}</p>
          </article>
          <article class="project-detail-tool-card">
            <span>04</span>
            <h3 data-editable data-key="project.3.detail.four.title">${projectContent(content, 3, "detail.four.title")}</h3>
            <div class="tool-code-panel" aria-hidden="true">
              <div>
                <b>Power BI</b>
                <em>dashboard design</em>
              </div>
              <div>
                <b>DAX</b>
                <em>dynamic status</em>
              </div>
              <div>
                <b>Excel</b>
                <em>project data</em>
              </div>
              <div>
                <b>KPI</b>
                <em>performance logic</em>
              </div>
            </div>
            <p data-editable data-key="project.3.detail.four.body">${projectContent(content, 3, "detail.four.body")}</p>
          </article>
          <div class="project-detail-kpi-strip" aria-label="KPI category examples">
            <div class="kpi-strip-head">
              <span class="kpi-strip-title kpi-lang-zh">KPI 示例指标</span>
              <span class="kpi-strip-title kpi-lang-en">Selected KPI Examples</span>
              <p class="kpi-strip-note">
                <span class="kpi-lang-zh">以下仅展示典型 KPI 示例，实际报表共覆盖15个 IT 部门 KPI。</span>
                <span class="kpi-lang-en">Examples only. The full dashboard covers 15 IT department KPIs.</span>
              </p>
            </div>
            <div class="kpi-category-board">
              <div><b>Service Management</b><span>Ticket Resolution Rate (%) / Average Resolution Time</span></div>
              <div><b>System Performance</b><span>Critical Incidents / MTTR</span></div>
              <div><b>Cybersecurity</b><span>Patch Compliance (%) / Vulnerabilities Closed (%)</span></div>
              <div><b>Project Delivery</b><span>On-Time Delivery (%)</span></div>
              <div><b>Financial & Business Value</b><span>IT Budget Utilization (%)</span></div>
              <div><b>People & Culture</b><span>Employee Happiness Index</span></div>
            </div>
          </div>
        </div>`;
    }
    if (project.id === 4) {
      return `
        <div class="project-detail-source" hidden>
          <article>
            <span>01</span>
            <h3 data-editable data-key="project.4.detail.one.title">${projectContent(content, 4, "detail.one.title")}</h3>
            <p data-editable data-key="project.4.detail.one.body">${projectContent(content, 4, "detail.one.body")}</p>
          </article>
          <article>
            <span>02</span>
            <h3 data-editable data-key="project.4.detail.two.title">${projectContent(content, 4, "detail.two.title")}</h3>
            <p data-editable data-key="project.4.detail.two.body">${projectContent(content, 4, "detail.two.body")}</p>
          </article>
          <article>
            <span>03</span>
            <h3 data-editable data-key="project.4.detail.three.title">${projectContent(content, 4, "detail.three.title")}</h3>
            <p data-editable data-key="project.4.detail.three.body">${projectContent(content, 4, "detail.three.body")}</p>
          </article>
          <article>
            <span>04</span>
            <h3 data-editable data-key="project.4.detail.four.title">${projectContent(content, 4, "detail.four.title")}</h3>
            <p data-editable data-key="project.4.detail.four.body">${projectContent(content, 4, "detail.four.body")}</p>
          </article>
        </div>`;
    }
    if (project.id === 8) {
      return `
        <div class="project-detail-source" hidden>
          <article>
            <span>01</span>
            <h3 data-editable data-key="project.8.detail.one.title">${projectContent(content, 8, "detail.one.title")}</h3>
            <p data-editable data-key="project.8.detail.one.body">${projectContent(content, 8, "detail.one.body")}</p>
          </article>
          <article>
            <span>02</span>
            <h3 data-editable data-key="project.8.detail.two.title">${projectContent(content, 8, "detail.two.title")}</h3>
            <p data-editable data-key="project.8.detail.two.body">${projectContent(content, 8, "detail.two.body")}</p>
          </article>
          <article>
            <span>03</span>
            <h3 data-editable data-key="project.8.detail.three.title">${projectContent(content, 8, "detail.three.title")}</h3>
            <p data-editable data-key="project.8.detail.three.body">${projectContent(content, 8, "detail.three.body")}</p>
          </article>
          <article class="project-detail-tool-card">
            <span>04</span>
            <h3 data-editable data-key="project.8.detail.four.title">${projectContent(content, 8, "detail.four.title")}</h3>
            <div class="tool-code-panel" aria-hidden="true">
              <div>
                <b>governance</b>
                <em>AI regulation</em>
              </div>
              <div>
                <b>ethics</b>
                <em>algorithm review</em>
              </div>
              <div>
                <b>privacy</b>
                <em>data compliance</em>
              </div>
              <div>
                <b>presentation</b>
                <em>team delivery</em>
              </div>
            </div>
            <p data-editable data-key="project.8.detail.four.body">${projectContent(content, 8, "detail.four.body")}</p>
          </article>
        </div>`;
    }
    if (project.id === 9) {
      return `
        <div class="project-detail-source" hidden>
          <article>
            <span>01</span>
            <h3 data-editable data-key="project.9.detail.one.title">${projectContent(content, 9, "detail.one.title")}</h3>
            <p data-editable data-key="project.9.detail.one.body">${projectContent(content, 9, "detail.one.body")}</p>
          </article>
          <article>
            <span>02</span>
            <h3 data-editable data-key="project.9.detail.two.title">${projectContent(content, 9, "detail.two.title")}</h3>
            <p data-editable data-key="project.9.detail.two.body">${projectContent(content, 9, "detail.two.body")}</p>
          </article>
          <article>
            <span>03</span>
            <h3 data-editable data-key="project.9.detail.three.title">${projectContent(content, 9, "detail.three.title")}</h3>
            <p data-editable data-key="project.9.detail.three.body">${projectContent(content, 9, "detail.three.body")}</p>
          </article>
          <article class="project-detail-tool-card">
            <span>04</span>
            <h3 data-editable data-key="project.9.detail.four.title">${projectContent(content, 9, "detail.four.title")}</h3>
            <div class="tool-code-panel" aria-hidden="true">
              <div>
                <b>security</b>
                <em>risk context</em>
              </div>
              <div>
                <b>AI</b>
                <em>COSEC solution</em>
              </div>
              <div>
                <b>requirements</b>
                <em>client RFP</em>
              </div>
              <div>
                <b>strategy</b>
                <em>final pitch</em>
              </div>
            </div>
            <p data-editable data-key="project.9.detail.four.body">${projectContent(content, 9, "detail.four.body")}</p>
          </article>
        </div>`;
    }
    if (project.id === 10) {
      return `
        <div class="project-detail-source" hidden>
          <article>
            <span>01</span>
            <h3 data-editable data-key="project.10.detail.one.title">${projectContent(content, 10, "detail.one.title")}</h3>
            <p data-editable data-key="project.10.detail.one.body">${projectContent(content, 10, "detail.one.body")}</p>
          </article>
          <article>
            <span>02</span>
            <h3 data-editable data-key="project.10.detail.two.title">${projectContent(content, 10, "detail.two.title")}</h3>
            <p data-editable data-key="project.10.detail.two.body">${projectContent(content, 10, "detail.two.body")}</p>
          </article>
          <article>
            <span>03</span>
            <h3 data-editable data-key="project.10.detail.three.title">${projectContent(content, 10, "detail.three.title")}</h3>
            <p data-editable data-key="project.10.detail.three.body">${projectContent(content, 10, "detail.three.body")}</p>
          </article>
          <article class="project-detail-tool-card">
            <span>04</span>
            <h3 data-editable data-key="project.10.detail.four.title">${projectContent(content, 10, "detail.four.title")}</h3>
            <div class="tool-code-panel" aria-hidden="true">
              <div>
                <b>research</b>
                <em>field interview</em>
              </div>
              <div>
                <b>privacy</b>
                <em>PIPL / GDPR</em>
              </div>
              <div>
                <b>mapping</b>
                <em>data flows</em>
              </div>
              <div>
                <b>video</b>
                <em>subtitled output</em>
              </div>
            </div>
            <p data-editable data-key="project.10.detail.four.body">${projectContent(content, 10, "detail.four.body")}</p>
          </article>
        </div>`;
    }
    if (project.id === 7) {
      return `
        <div class="project-detail-source" hidden>
          <article>
            <span>01</span>
            <h3 data-editable data-key="project.7.detail.one.title">${projectContent(content, 7, "detail.one.title")}</h3>
            <p data-editable data-key="project.7.detail.one.body">${projectContent(content, 7, "detail.one.body")}</p>
          </article>
          <article>
            <span>02</span>
            <h3 data-editable data-key="project.7.detail.two.title">${projectContent(content, 7, "detail.two.title")}</h3>
            <p data-editable data-key="project.7.detail.two.body">${projectContent(content, 7, "detail.two.body")}</p>
          </article>
          <article>
            <span>03</span>
            <h3 data-editable data-key="project.7.detail.three.title">${projectContent(content, 7, "detail.three.title")}</h3>
            <p data-editable data-key="project.7.detail.three.body">${projectContent(content, 7, "detail.three.body")}</p>
          </article>
          <article class="project-detail-tool-card">
            <span>04</span>
            <h3 data-editable data-key="project.7.detail.four.title">${projectContent(content, 7, "detail.four.title")}</h3>
            <div class="tool-code-panel" aria-hidden="true">
              <div>
                <b>frontend</b>
                <em>storefront UI</em>
              </div>
              <div>
                <b>backend</b>
                <em>business logic</em>
              </div>
              <div>
                <b>database</b>
                <em>schema design</em>
              </div>
              <div>
                <b>demo</b>
                <em>checkout flow</em>
              </div>
            </div>
            <p data-editable data-key="project.7.detail.four.body">${projectContent(content, 7, "detail.four.body")}</p>
          </article>
        </div>`;
    }
    if (project.id === 5) {
      return `
        <div class="project-detail-source" hidden>
          <article>
            <span>01</span>
            <h3 data-editable data-key="project.5.detail.one.title">${projectContent(content, 5, "detail.one.title")}</h3>
            <p data-editable data-key="project.5.detail.one.body">${projectContent(content, 5, "detail.one.body")}</p>
          </article>
          <article>
            <span>02</span>
            <h3 data-editable data-key="project.5.detail.two.title">${projectContent(content, 5, "detail.two.title")}</h3>
            <p data-editable data-key="project.5.detail.two.body">${projectContent(content, 5, "detail.two.body")}</p>
          </article>
          <article>
            <span>03</span>
            <h3 data-editable data-key="project.5.detail.three.title">${projectContent(content, 5, "detail.three.title")}</h3>
            <p data-editable data-key="project.5.detail.three.body">${projectContent(content, 5, "detail.three.body")}</p>
          </article>
          <article class="project-detail-tool-card">
            <span>04</span>
            <h3 data-editable data-key="project.5.detail.four.title">${projectContent(content, 5, "detail.four.title")}</h3>
            <div class="tool-code-panel" aria-hidden="true">
              <div>
                <b>python</b>
                <em>preprocessing</em>
              </div>
              <div>
                <b>cnn</b>
                <em>feature extraction</em>
              </div>
              <div>
                <b>transfer</b>
                <em>fine-tuning</em>
              </div>
              <div>
                <b>metrics</b>
                <em>accuracy review</em>
              </div>
            </div>
            <p data-editable data-key="project.5.detail.four.body">${projectContent(content, 5, "detail.four.body")}</p>
          </article>
        </div>`;
    }
    if (project.id === 6) {
      return `
        <div class="project-detail-source" hidden>
          <article>
            <span>01</span>
            <h3 data-editable data-key="project.6.detail.one.title">${projectContent(content, 6, "detail.one.title")}</h3>
            <p data-editable data-key="project.6.detail.one.body">${projectContent(content, 6, "detail.one.body")}</p>
          </article>
          <article>
            <span>02</span>
            <h3 data-editable data-key="project.6.detail.two.title">${projectContent(content, 6, "detail.two.title")}</h3>
            <p data-editable data-key="project.6.detail.two.body">${projectContent(content, 6, "detail.two.body")}</p>
          </article>
          <article>
            <span>03</span>
            <h3 data-editable data-key="project.6.detail.three.title">${projectContent(content, 6, "detail.three.title")}</h3>
            <p data-editable data-key="project.6.detail.three.body">${projectContent(content, 6, "detail.three.body")}</p>
          </article>
          <article class="project-detail-tool-card">
            <span>04</span>
            <h3 data-editable data-key="project.6.detail.four.title">${projectContent(content, 6, "detail.four.title")}</h3>
            <div class="tool-code-panel" aria-hidden="true">
              <div>
                <b>requirements</b>
                <em>user stories</em>
              </div>
              <div>
                <b>schema</b>
                <em>ER modelling</em>
              </div>
              <div>
                <b>database</b>
                <em>core tables</em>
              </div>
              <div>
                <b>delivery</b>
                <em>manuals</em>
              </div>
            </div>
            <p data-editable data-key="project.6.detail.four.body">${projectContent(content, 6, "detail.four.body")}</p>
          </article>
        </div>`;
    }
    if (project.id !== 11) return "";
    return `
        <div class="project-detail-source" hidden>
          <article>
            <span>01</span>
            <h3 data-editable data-key="project.11.detail.one.title">${projectContent(content, 11, "detail.one.title")}</h3>
            <p data-editable data-key="project.11.detail.one.body">${projectContent(content, 11, "detail.one.body")}</p>
          </article>
          <article>
            <span>02</span>
            <h3 data-editable data-key="project.11.detail.two.title">${projectContent(content, 11, "detail.two.title")}</h3>
            <p data-editable data-key="project.11.detail.two.body">${projectContent(content, 11, "detail.two.body")}</p>
          </article>
          <article>
            <span>03</span>
            <h3 data-editable data-key="project.11.detail.three.title">${projectContent(content, 11, "detail.three.title")}</h3>
            <p data-editable data-key="project.11.detail.three.body">${projectContent(content, 11, "detail.three.body")}</p>
          </article>
          <article class="project-detail-visual-only" aria-label="UK local authority district map visual">
            <img src="assets/project-gender-tda-uk-map-cutout.png" alt="UK local authority district gender equality map" />
          </article>
        </div>`;
  }

  function projectCardTemplate(project, content) {
    const id = project.id;
    return `
      <article
        class="project-card interactive-card"
        data-item
        data-project-category="${project.category}"
        data-project-year="${project.year}"
        ${project.image ? `data-project-image="${project.image}"` : ""}
        ${project.carousel ? `data-project-carousel="${project.carousel.join("|")}"` : ""}
        ${project.carouselDelay ? `data-project-carousel-delay="${project.carouselDelay}"` : ""}
        ${project.imageFit ? `data-project-image-fit="${project.imageFit}"` : ""}
        ${project.imageRatio ? `data-project-image-ratio="${project.imageRatio}"` : ""}
        ${project.imageTransparent ? `data-project-image-transparent="true"` : ""}
        ${project.hideMeta ? `data-project-hide-meta="true"` : ""}
      >
        <div class="project-topline">
          <span data-editable data-key="project.${id}.type">${projectContent(content, id, "type")}</span>
          <span data-editable data-key="project.${id}.time">${projectContent(content, id, "time")}</span>
        </div>
        <h3 data-editable data-key="project.${id}.title">${projectContent(content, id, "title")}</h3>
        <p data-editable data-key="project.${id}.body">${projectContent(content, id, "body")}</p>
        <div class="tag-row">
          <span data-editable data-key="project.${id}.tag.one">${projectContent(content, id, "tag.one")}</span>
          <span data-editable data-key="project.${id}.tag.two">${projectContent(content, id, "tag.two")}</span>
          <span data-editable data-key="project.${id}.tag.three">${projectContent(content, id, "tag.three")}</span>
        </div>
        ${projectDetailSourceTemplate(project, content)}
      </article>`;
  }

  function projectCardById(id) {
    return document.querySelector(`#projectList [data-key="project.${id}.title"]`)?.closest(".project-card");
  }

  function ensureProjectScaffold(content) {
    const list = document.getElementById("projectList");
    if (!list) return;
    projectScaffold.forEach((project) => {
      const existingCard = projectCardById(project.id);
      if (existingCard) {
        existingCard.dataset.projectCategory = project.category;
        existingCard.dataset.projectYear = String(project.year);
        if (project.image) existingCard.dataset.projectImage = project.image;
        if (project.carousel) existingCard.dataset.projectCarousel = project.carousel.join("|");
        if (project.carouselDelay) existingCard.dataset.projectCarouselDelay = String(project.carouselDelay);
        if (project.imageFit) existingCard.dataset.projectImageFit = project.imageFit;
        if (project.imageRatio) existingCard.dataset.projectImageRatio = project.imageRatio;
        if (project.imageTransparent) existingCard.dataset.projectImageTransparent = "true";
        if (project.hideMeta) existingCard.dataset.projectHideMeta = "true";
        const detailSource = projectDetailSourceTemplate(project, content);
        if (detailSource && !existingCard.querySelector(".project-detail-source")) {
          existingCard.querySelector(".tag-row")?.insertAdjacentHTML("afterend", detailSource);
        }
        existingCard.classList.add("interactive-card");
        existingCard.setAttribute("data-item", "");
        return;
      }
      list.insertAdjacentHTML("beforeend", projectCardTemplate(project, content));
    });
  }

  let currentProjectFilter = "all";

  function getProjectCards() {
    return Array.from(document.querySelectorAll("#projectList .project-card"));
  }

  function inferProjectCategories(card) {
    const text = card.textContent.toLowerCase();
    const categories = new Set();
    if (/(sql|nosql|python|cohort|analysis|分析|数据|database|数据库|dashboard|power bi|tableau|visual|可视化|看板|kpi)/i.test(text)) categories.add("analytics");
    if (/(deep learning|machine learning|algorithm|model|cnn|neural|深度学习|机器学习|算法|建模|模型|卷积神经网络)/i.test(text)) categories.add("ml");
    if (/(web|website|frontend|front-end|html|css|javascript|react|github|readme|prototype|product|demo|网站|网页|前端|产品|原型)/i.test(text)) categories.add("web");
    if (/(cybersecurity|security|privacy|threat|vulnerability|access control|disclosure|网络安全|安全|隐私|漏洞|威胁|访问控制|披露控制)/i.test(text)) categories.add("security");
    return Array.from(categories).join(" ") || "analytics";
  }

  function inferProjectYear(card) {
    const raw = card.querySelector(".project-topline span:last-child")?.textContent || card.textContent;
    if (/ongoing|进行中/i.test(raw)) return 999999;
    const numericMonth = raw.match(/(20\d{2})[./-](1[0-2]|0?[1-9])/);
    if (numericMonth) return Number(numericMonth[1]) * 100 + Number(numericMonth[2]);
    const monthMap = {
      jan: 1,
      january: 1,
      feb: 2,
      february: 2,
      mar: 3,
      march: 3,
      apr: 4,
      april: 4,
      may: 5,
      jun: 6,
      june: 6,
      jul: 7,
      july: 7,
      aug: 8,
      august: 8,
      sep: 9,
      sept: 9,
      september: 9,
      oct: 10,
      october: 10,
      nov: 11,
      november: 11,
      dec: 12,
      december: 12,
    };
    const namedMonth = raw.match(/\b([A-Za-z]+)\s+(20\d{2})\b/);
    if (namedMonth) {
      const month = monthMap[namedMonth[1].toLowerCase()];
      if (month) return Number(namedMonth[2]) * 100 + month;
    }
    const years = raw.match(/20\d{2}/g);
    return years ? Math.max(...years.map((year) => Number(year) * 100)) : 0;
  }

  function normalizeProjectCards() {
    getProjectCards().forEach((card, index) => {
      if (!card.dataset.projectOriginalIndex) card.dataset.projectOriginalIndex = String(index);
      if (!card.dataset.projectCategory) card.dataset.projectCategory = inferProjectCategories(card);
      card.dataset.projectYear = String(inferProjectYear(card));
    });
  }

  function applyProjectExplorer() {
    const list = document.getElementById("projectList");
    if (!list) return;
    normalizeProjectCards();
    const cards = getProjectCards();
    const sortedCards = [...cards].sort((a, b) => {
      const yearDiff = Number(b.dataset.projectYear) - Number(a.dataset.projectYear);
      if (yearDiff) return yearDiff;
      return Number(a.dataset.projectOriginalIndex) - Number(b.dataset.projectOriginalIndex);
    });

    sortedCards.forEach((card) => {
      const categories = (card.dataset.projectCategory || "").split(/\s+/);
      const isVisible = currentProjectFilter === "all" || categories.includes(currentProjectFilter);
      card.classList.toggle("is-hidden", !isVisible);
      list.appendChild(card);
    });

    document.querySelectorAll("[data-project-filter]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.projectFilter === currentProjectFilter);
    });
  }

  function setProjectCarouselSlide(carousel, index) {
    const slides = Array.from(carousel.querySelectorAll(".project-carousel-slide"));
    const dots = Array.from(carousel.querySelectorAll(".project-carousel-dots span"));
    if (!slides.length) return;
    const nextIndex = ((index % slides.length) + slides.length) % slides.length;
    carousel.dataset.carouselIndex = String(nextIndex);
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === nextIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === nextIndex);
    });
  }

  function stopProjectCarousels(root = projectModal) {
    root?.querySelectorAll("[data-project-modal-carousel]").forEach((carousel) => {
      const timer = projectCarouselTimers.get(carousel);
      if (timer) window.clearInterval(timer);
      projectCarouselTimers.delete(carousel);
    });
  }

  function startProjectCarousels(root = projectModal) {
    stopProjectCarousels(root);
    root?.querySelectorAll("[data-project-modal-carousel]").forEach((carousel) => {
      setProjectCarouselSlide(carousel, 0);
      const delay = Number(carousel.dataset.carouselDelay || 3000);
      const timer = window.setInterval(() => {
        const currentIndex = Number(carousel.dataset.carouselIndex || 0);
        setProjectCarouselSlide(carousel, currentIndex + 1);
      }, delay);
      projectCarouselTimers.set(carousel, timer);
    });
  }

  function projectCarouselHtml(sources, title, delay) {
    const slides = sources
      .map((src, index) => `<img class="project-carousel-slide${index === 0 ? " is-active" : ""}" src="${src}" alt="${title} photo ${index + 1}" />`)
      .join("");
    const dots = sources.map((_, index) => `<span class="${index === 0 ? "is-active" : ""}"></span>`).join("");
    return `<div class="project-modal-carousel" data-project-modal-carousel data-carousel-delay="${delay}">${slides}<div class="project-carousel-dots" aria-hidden="true">${dots}</div></div>`;
  }

  function projectDetailHtml(card, summary, tags) {
    const source = card.querySelector(".project-detail-source");
    if (source) return source.innerHTML;
    const tools = tags.length ? tags.join(" / ") : t("placeholder.tag");
    return `
      <article>
        <span>01</span>
        <h3>${t("project.detail.context")}</h3>
        <p>${summary || t("project.detail.context.body")}</p>
      </article>
      <article>
        <span>02</span>
        <h3>${t("project.detail.process")}</h3>
        <p>${t("project.detail.process.body")}</p>
      </article>
      <article>
        <span>03</span>
        <h3>${t("project.detail.output")}</h3>
        <p>${t("project.detail.output.body")}</p>
      </article>
      <article>
        <span>04</span>
        <h3>${t("project.detail.tool")}</h3>
        <p>${tools}</p>
      </article>`;
  }

  function openProjectModal(card) {
    if (!projectModal || !card || body.classList.contains("is-editing")) return;
    const topline = Array.from(card.querySelectorAll(".project-topline span")).map((node) => node.textContent.trim()).filter(Boolean);
    const title = card.querySelector("h3")?.textContent.trim() || t("placeholder.title");
    const summary = card.querySelector("p")?.textContent.trim() || "";
    const tags = Array.from(card.querySelectorAll(".tag-row span")).map((node) => node.textContent.trim()).filter(Boolean);
    const imageSrc = card.dataset.projectImage?.trim();

    if (projectModalKicker) projectModalKicker.textContent = t("project.modal.kicker");
    if (projectModalTitle) projectModalTitle.textContent = title;
    if (projectModalSummary) projectModalSummary.textContent = summary;
    if (projectModalMeta) {
      projectModalMeta.innerHTML = card.dataset.projectHideMeta === "true" ? "" : topline.map((item) => `<span>${item}</span>`).join("");
    }
    if (projectModalTags) {
      projectModalTags.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join("");
    }
    projectModalVisual?.classList.toggle("is-ratio-4-3", card.dataset.projectImageRatio === "4-3");
    if (projectModalImage && projectModalVisualText) {
      stopProjectCarousels(projectModal);
      projectModal.querySelectorAll("[data-project-modal-carousel]").forEach((node) => node.remove());
      const carouselSources = (card.dataset.projectCarousel || "").split("|").map((src) => src.trim()).filter(Boolean);
      if (carouselSources.length) {
        projectModalImage.hidden = true;
        projectModalImage.removeAttribute("src");
        projectModalImage.classList.remove("is-contain");
        projectModalImage.classList.remove("is-transparent-art");
        projectModalVisualText.hidden = true;
        projectModalImage.insertAdjacentHTML("afterend", projectCarouselHtml(carouselSources, title, card.dataset.projectCarouselDelay || 3000));
      } else if (imageSrc) {
        projectModalImage.src = imageSrc;
        projectModalImage.alt = title;
        projectModalImage.classList.toggle("is-contain", card.dataset.projectImageFit === "contain");
        projectModalImage.classList.toggle("is-transparent-art", card.dataset.projectImageTransparent === "true");
        projectModalImage.hidden = false;
        projectModalVisualText.hidden = true;
      } else {
        projectModalImage.removeAttribute("src");
        projectModalImage.classList.remove("is-contain");
        projectModalImage.classList.remove("is-transparent-art");
        projectModalImage.hidden = true;
        projectModalVisualText.hidden = false;
        projectModalVisualText.textContent = t("project.modal.visual");
      }
    }
    if (projectModalDetails) {
      projectModalDetails.innerHTML = projectDetailHtml(card, summary, tags);
      syncKpiStripLanguage(projectModalDetails);
    }

    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    startProjectCarousels(projectModal);
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    stopProjectCarousels(projectModal);
    projectModal.querySelectorAll("[data-project-modal-carousel]").forEach((node) => node.remove());
  }

  function experienceDetailHtml(card, summary) {
    const source = card.querySelector(".experience-detail-source");
    if (source) return source.innerHTML;
    return `
      <article>
        <span>01</span>
        <h3>${t("experience.detail.scope")}</h3>
        <p>${t("experience.detail.scope.body")}</p>
      </article>
      <article>
        <span>02</span>
        <h3>${t("experience.detail.problem")}</h3>
        <p>${summary || t("experience.detail.problem.body")}</p>
      </article>
      <article>
        <span>03</span>
        <h3>${t("experience.detail.action")}</h3>
        <p>${t("experience.detail.action.body")}</p>
      </article>
      <article>
        <span>04</span>
        <h3>${t("experience.detail.result")}</h3>
        <p>${t("experience.detail.result.body")}</p>
      </article>`;
  }

  function philipsEvidenceHtml() {
    return `
      <div class="philips-evidence">
        <div class="philips-evidence-hero">
          <img src="assets/experience-philips-collage.jpg" alt="Philips team and recognition collage" />
          <div class="philips-evidence-hero-copy">
            <span>Philips IT</span>
            <strong>Evidence Board</strong>
          </div>
        </div>
        <div class="philips-evidence-stack">
          <article>
            <img src="assets/experience-philips-automation.jpg" alt="Power Automate workflow screenshot" />
            <span>Process Automation</span>
          </article>
          <article>
            <img src="assets/experience-philips-board.jpg" alt="Philips IT KPI whiteboard" />
            <span>KPI & IT Operations</span>
          </article>
          <article>
            <img src="assets/experience-philips-compliance.jpg" alt="Compliance research work setup" />
            <span>Compliance Research</span>
          </article>
        </div>
      </div>`;
  }

  function itcEvidenceHtml() {
    return `
      <div class="philips-evidence itc-evidence">
        <div class="philips-evidence-hero itc-evidence-hero">
          <img src="assets/experience-itc-visual.jpg" alt="ITC office value wall" />
          <div class="philips-evidence-hero-copy">
            <span>ITC</span>
            <strong>Business Advisory</strong>
          </div>
        </div>
      </div>`;
  }

  function openExperienceModal(card) {
    if (!experienceModal || !card || body.classList.contains("is-editing")) return;
    const time = card.querySelector("time")?.textContent.trim();
    const title = card.querySelector("h3")?.textContent.trim() || t("placeholder.title");
    const summary = card.querySelector("p")?.textContent.trim() || "";
    const imageSrc = card.dataset.experienceImage?.trim();
    const visualType = card.dataset.experienceVisual?.trim();

    if (experienceModalKicker) experienceModalKicker.textContent = t("experience.modal.kicker");
    if (experienceModalTitle) experienceModalTitle.textContent = title;
    if (experienceModalSummary) experienceModalSummary.textContent = summary;
    if (experienceModalMeta) experienceModalMeta.innerHTML = time ? `<span>${time}</span>` : "";
    if (experienceEvidenceBoard) {
      if (visualType === "philips" || visualType === "itc") {
        experienceEvidenceBoard.innerHTML = visualType === "philips" ? philipsEvidenceHtml() : itcEvidenceHtml();
        experienceEvidenceBoard.hidden = false;
      } else {
        experienceEvidenceBoard.innerHTML = "";
        experienceEvidenceBoard.hidden = true;
      }
    }
    if (experienceModalImage && experienceModalVisualText) {
      if (visualType === "philips" || visualType === "itc") {
        experienceModalImage.removeAttribute("src");
        experienceModalImage.hidden = true;
        experienceModalVisualText.hidden = true;
      } else if (imageSrc) {
        experienceModalImage.src = imageSrc;
        experienceModalImage.alt = title;
        experienceModalImage.hidden = false;
        experienceModalVisualText.hidden = true;
      } else {
        experienceModalImage.removeAttribute("src");
        experienceModalImage.hidden = true;
        experienceModalVisualText.hidden = false;
        experienceModalVisualText.textContent = t("experience.modal.visual");
      }
    }
    if (experienceModalDetails) experienceModalDetails.innerHTML = experienceDetailHtml(card, summary);

    experienceModal.classList.add("is-open");
    experienceModal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
  }

  function closeExperienceModal() {
    if (!experienceModal) return;
    experienceModal.classList.remove("is-open");
    experienceModal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
  }

  function ensureVolunteerCards() {
    const volunteerList = document.querySelector("#volunteerList");
    if (!volunteerList) return;
    volunteerList.querySelectorAll('[data-key="volunteer.2.title"]').forEach((node) => {
      node.closest(".volunteer-card")?.remove();
    });

    if (!volunteerList.querySelector('[data-volunteer-card="marathon"]')) {
      volunteerList.insertAdjacentHTML("afterbegin", marathonVolunteerTemplate());
    }

    const marathonCard = volunteerList.querySelector('[data-volunteer-card="marathon"]');
    ensureFeaturedVolunteerCard(
      marathonCard,
      "assets/volunteer-manchester-marathon.jpg",
      "2026 Manchester Marathon volunteer team",
      `<span data-editable data-key="volunteer.marathon.photo.kicker">赛事志愿者</span>
      <strong data-editable data-key="volunteer.marathon.photo.title">曼彻斯特马拉松</strong>`,
    );
    marathonCard?.querySelector(".volunteer-photo-card")?.classList.add("volunteer-photo-wide");
    ensureMarathonEventMark(marathonCard);

    let teamCard = volunteerList.querySelector('[data-volunteer-card="team"]');
    if (!teamCard) {
      teamCard = volunteerList.querySelector('[data-key="volunteer.1.title"]')?.closest(".volunteer-card");
      if (teamCard) teamCard.dataset.volunteerCard = "team";
    }
    ensureFeaturedVolunteerCard(
      teamCard,
      "assets/volunteer-team-final.jpg",
      "Volunteer teamwork session",
      `<span data-ui="volunteer.photo.kicker">团队协作记录</span>
      <strong data-ui="volunteer.photo.title">实践型协作经历</strong>`,
    );
    ensureWiseEventMark(teamCard);
    ensureVolunteerMetaItem(teamCard, "volunteer.1.focus", "女性科学与工程");
    setEditableTextIfPlaceholder(teamCard, "volunteer.1.label", ["Community / Campus", "WISE / Campus Volunteer"], "WISE Society / Campus Volunteer");
    setEditableTextIfPlaceholder(teamCard, "volunteer.1.title", ["志愿者经历标题", "Volunteer Experience Title", "WISE 活动协作志愿者"], "WISE社团活动志愿者");
    setEditableTextIfPlaceholder(
      teamCard,
      "volunteer.1.body",
      [
        "放你参与过的社区、校园、公益或组织协作经历。重点写你负责的任务、影响的人群、协调资源和最终产出。",
        "Add community, campus, nonprofit, or organisation work. Focus on responsibilities, people impacted, resources coordinated, and outcomes.",
        "可补充你在活动现场承担的沟通协作、参与者支持、材料整理或团队配合内容。",
      ],
      "协助约50名八年级学生理解桥梁结构与建造原理，引导其使用纸板、笔、吸管等材料完成稳固桥梁模型，激发学生尤其是女生对科学与工程的兴趣。",
    );
    setEditableTextIfPlaceholder(teamCard, "volunteer.1.time", ["时间", "Date", "时间待补充"], "活动协作");
    setEditableTextIfPlaceholder(teamCard, "volunteer.1.role", ["角色 / 职责", "Role / Responsibility", "活动协作 / 志愿者"], "STEM启发");
    setEditableTextIfPlaceholder(teamCard, "volunteer.1.focus", ["女性科学与工程"], "女性科学与工程");

    if (!volunteerList.querySelector('[data-volunteer-card="utas-visit"]')) {
      const teamAnchor = volunteerList.querySelector('[data-volunteer-card="team"]');
      if (teamAnchor) teamAnchor.insertAdjacentHTML("afterend", utasVisitVolunteerTemplate());
      else volunteerList.insertAdjacentHTML("beforeend", utasVisitVolunteerTemplate());
    }
    let utasVisitCard = volunteerList.querySelector('[data-volunteer-card="utas-visit"]');
    ensureFeaturedVolunteerCard(
      utasVisitCard,
      "assets/volunteer-utas-shou-visit-v2.jpg",
      "University of Tasmania delegation visit to Shanghai Ocean University",
      `<span data-editable data-key="volunteer.utas.photo.kicker">跨校访问</span>
      <strong data-editable data-key="volunteer.utas.photo.title">塔大 x 上海海洋大学</strong>`,
    );
    utasVisitCard?.querySelector(".volunteer-photo-card")?.classList.add("volunteer-photo-wide");
    ensureUniversityPairMark(utasVisitCard);
    ensureVolunteerMetaItem(utasVisitCard, "volunteer.utas.focus", "校间合作");
    setEditableTextIfPlaceholder(utasVisitCard, "volunteer.utas.label", ["Cross-university Visit / Interpreting"], "Cross-university Visit / Interpretion");
    setEditableTextIfPlaceholder(
      utasVisitCard,
      "volunteer.utas.title",
      ["塔斯马尼亚大学领导参访上海海洋大学随行翻译"],
      "2024年秋季塔斯马尼亚大学领导参访上海海洋大学随行翻译",
    );
    setEditableTextIfPlaceholder(
      utasVisitCard,
      "volunteer.utas.body",
      ["协助中英文沟通与现场衔接，支持塔斯马尼亚大学领导参访上海海洋大学。"],
      "协助带领塔斯马尼亚大学代表团参观上海海洋大学校史馆，并进行中英文随行翻译与学校历史介绍，支持两校交流与现场沟通。",
    );
    setEditableTextIfPlaceholder(utasVisitCard, "volunteer.utas.time", ["时间待补充", "Date to add"], "随行翻译");
    setEditableTextIfPlaceholder(utasVisitCard, "volunteer.utas.role", ["随行翻译 / 参访支持", "Interpreter / Visit Support"], "参访支持");

    if (!volunteerList.querySelector('[data-volunteer-card="graduation"]')) {
      const utasAnchor = volunteerList.querySelector('[data-volunteer-card="utas-visit"]');
      if (utasAnchor) utasAnchor.insertAdjacentHTML("afterend", graduationVolunteerTemplate());
      else volunteerList.insertAdjacentHTML("beforeend", graduationVolunteerTemplate());
    }
    const graduationCard = volunteerList.querySelector('[data-volunteer-card="graduation"]');
    ensureFeaturedVolunteerCard(
      graduationCard,
      "assets/volunteer-graduation-interpreter.jpg",
      "Graduation ceremony interpreter at AEN College Shanghai Ocean University",
      "",
    );
    graduationCard?.classList.add("volunteer-card-portrait");
    graduationCard?.querySelector(".volunteer-photo-card")?.classList.add("volunteer-photo-portrait");
    ensureUniversityPairMark(graduationCard);
    setEditableTextIfPlaceholder(graduationCard, "volunteer.graduation.label", ["Ceremony / Interpreting"], "Graduation Ceremony / Interpretion");
    setEditableTextIfPlaceholder(
      graduationCard,
      "volunteer.graduation.body",
      ["负责毕业典礼中英文翻译与现场沟通支持，保障典礼流程顺畅衔接。"],
      "负责2024年上海海洋大学爱恩学院毕业典礼全程中英口译与现场沟通支持，协助典礼环节顺畅衔接并保障中英文信息准确传达。",
    );
    setEditableTextIfPlaceholder(graduationCard, "volunteer.graduation.time", ["2024"], "毕业典礼");
    setEditableTextIfPlaceholder(graduationCard, "volunteer.graduation.role", ["翻译 / 典礼支持"], "翻译 / 口译");

    orderVolunteerCards(volunteerList, [marathonCard, teamCard, utasVisitCard, graduationCard]);
  }

  function renderUi() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
    body.dataset.lang = currentLang;
    document.querySelectorAll("[data-ui]").forEach((node) => {
      node.textContent = t(node.dataset.ui);
    });
    document.querySelectorAll("[data-ui-title]").forEach((node) => {
      const key = node === editToggle && body.classList.contains("is-editing") ? "action.editOff" : node.dataset.uiTitle;
      node.title = t(key);
    });
    if (campusModalEyebrow) campusModalEyebrow.textContent = t("campus.eyebrow");
  }

  function renderLanguage() {
    const savedContent = readJson(STORAGE_KEY, {});
    const savedLists = readJson(LIST_KEY, {});
    migrateSavedContent(savedContent);
    const languageLists = savedLists[currentLang];

    if (languageLists) {
      Object.entries(languageLists).forEach(([id, html]) => {
        const list = document.getElementById(id);
        if (list) list.innerHTML = html;
      });
    }

    ensureVolunteerCards();
    ensureExperienceLogos();
    ensureExperienceCardStructure();
    const mergedContent = { ...defaultContent[currentLang], ...(savedContent[currentLang] || {}) };
    ensureExperienceDetailSources(mergedContent);
    applyContent(mergedContent);
    ensureProjectScaffold(mergedContent);
    editableNodes().forEach(syncEditableLink);
    bindEditableEvents();
    setEditing(body.classList.contains("is-editing"), true);
    renderUi();
    applyProjectExplorer();
  }

  function switchLanguage() {
    try {
      saveAll();
    } catch (error) {
      console.warn("Could not save before switching language:", error);
    }
    currentLang = currentLang === "zh" ? "en" : "zh";
    try {
      storageSet(LANG_KEY, currentLang);
    } catch (error) {
      console.warn("Could not persist language:", error);
    }
    try {
      renderLanguage();
    } catch (error) {
      console.error("Language render failed:", error);
      renderUi();
    }
    showToast(t("toast.language"));
  }

  function migrateSavedContent(savedContent) {
    const zh = savedContent.zh;
    const en = savedContent.en;
    let changed = false;
    const migratePlaceholder = (content, key, placeholders, replacement) => {
      if (content && placeholders.includes(content[key])) {
        content[key] = replacement;
        changed = true;
      }
    };
    const ensureContent = (content, key, replacement) => {
      if (content && !content[key]) {
        content[key] = replacement;
        changed = true;
      }
    };
    const migrateContainingText = (content, key, needles, replacement) => {
      if (!content || typeof content[key] !== "string") return;
      if (needles.some((needle) => content[key].includes(needle))) {
        content[key] = replacement;
        changed = true;
      }
    };
    const normaliseBritishEnglish = (content) => {
      if (!content) return;
      Object.keys(content).forEach((key) => {
        if (typeof content[key] !== "string") return;
        const next = content[key]
          .replaceAll("Product Department", "Product Team")
          .replaceAll("Visualization", "Visualisation")
          .replaceAll("visualization", "visualisation")
          .replaceAll("Modeling", "Modelling")
          .replaceAll("modeling", "modelling")
          .replaceAll("Optimization", "Optimisation")
          .replaceAll("optimization", "optimisation")
          .replaceAll("Organization", "Organisation")
          .replaceAll("organization", "organisation")
          .replaceAll("Organized", "Organised")
          .replaceAll("organized", "organised")
          .replaceAll("Analyzed", "Analysed")
          .replaceAll("analyzed", "analysed")
          .replaceAll("Practiced", "Practised")
          .replaceAll("practiced", "practised")
          .replaceAll("Visualized", "Visualised")
          .replaceAll("visualized", "visualised")
          .replaceAll("Summarize", "Summarise")
          .replaceAll("summarize", "summarise")
          .replaceAll("behavior", "behaviour")
          .replaceAll("Behavior", "Behaviour")
          .replaceAll("productized", "productised")
          .replaceAll("Productized", "Productised")
          .replaceAll("nonprofit", "non-profit")
          .replaceAll("Nonprofit", "Non-profit");
        if (next !== content[key]) {
          content[key] = next;
          changed = true;
        }
      });
    };
    migratePlaceholder(zh, "site.initials", ["YN"], "YG");
    migratePlaceholder(zh, "site.brand", ["Your Name"], "顾芸玮");
    migratePlaceholder(
      zh,
      "hero.eyebrow",
      ["Business Analyst / Data Analyst Portfolio"],
      "Business & Data Analytics Portfolio",
    );
    migratePlaceholder(
      zh,
      "hero.title",
      [
        "把业务问题拆清楚，用数据做出可以落地的判断。",
        "用数据拆解业务问题，推动清晰决策。",
        "用数据理解业务，用洞察支持决策。",
      ],
      '<span class="hero-title-line">用数据理解业务，</span><span class="hero-title-line">用洞察支持决策。</span>',
    );
    migratePlaceholder(
      zh,
      "hero.summary",
      [
        "我正在补充一份面向 Business Analyst / Data Analyst 岗位的个人网站。这里会沉淀我的实习/工作经历、项目经历、志愿者经历，以及产品、GitHub 和自媒体内容。",
        "面向 Business Analyst / Data Analyst 岗位，展示我在需求分析、数据分析、可视化汇报和跨团队沟通中的项目与实践经历。",
        "面向 Business Analyst / Data Analyst 岗位，展示我在需求梳理、数据分析、可视化汇报与跨团队协作中的实践积累。",
      ],
      "面向技术与业务交织的岗位，展示我在需求梳理、数据分析、可视化汇报与跨团队协作中的实践积累。",
    );
    migratePlaceholder(zh, "hero.meta.one", ["SQL / Python / Excel"], "Python");
    migratePlaceholder(zh, "hero.meta.two", ["Dashboard / KPI / Research"], "SQL / NoSQL");
    migratePlaceholder(zh, "hero.meta.three", ["Business Storytelling"], "Power BI / Tableau / Dashboard / KPI");
    if (zh && !zh["hero.meta.four"]) {
      zh["hero.meta.four"] = "Business Storytelling";
      changed = true;
    }
    migratePlaceholder(zh, "ai.step.one.title", ["问题拆解"], "问题定义");
    migratePlaceholder(
      zh,
      "ai.step.one.body",
      ["用 AI 辅助梳理业务背景、stakeholder 问题和分析假设。"],
      "先让 AI 帮助拆解业务背景、利益相关人诉求与分析目标，再人工确认真正需要回答的问题。",
    );
    migratePlaceholder(zh, "ai.step.two.title", ["数据处理"], "分析草稿");
    migratePlaceholder(
      zh,
      "ai.step.two.body",
      ["辅助生成 SQL/Python 思路，再人工检查字段口径、逻辑和异常值。"],
      "用 AI 快速生成 SQL/Python 思路、指标拆分和可视化结构，再根据数据口径进行调整。",
    );
    migratePlaceholder(zh, "ai.step.three.title", ["洞察表达"], "人工校验");
    migratePlaceholder(
      zh,
      "ai.step.three.body",
      ["把分析结果转化成 dashboard 文案、汇报结构和行动建议。"],
      "对 AI 输出进行字段核对、SQL 复算、异常值检查与业务口径确认，保证结论可解释。",
    );
    migratePlaceholder(zh, "ai.code.title", ["Prompt → SQL Draft"], "示例：Prompt → SQL 草稿");
    ensureContent(zh, "ai.code.title", "示例：Prompt → SQL 草稿");
    migratePlaceholder(
      zh,
      "ai.code.body",
      [
        `prompt:
  "拆解这个业务问题，列出核心指标、数据字段和可能的异常值。"

sql_draft:
  SELECT segment, COUNT(*) AS users,
         AVG(conversion_rate) AS avg_conversion
  FROM analysis_table
  WHERE data_quality_flag = 'valid'
  GROUP BY segment;`,
      ],
      `use_case:
  "以下 SQL 仅作为 AI 辅助分析流程中的一个示例。"

prompt:
  "拆解这个业务问题，列出核心指标、数据字段和可能的异常值。"

sql_draft:
  SELECT segment, COUNT(*) AS users,
         AVG(conversion_rate) AS avg_conversion
  FROM analysis_table
  WHERE data_quality_flag = 'valid'
  GROUP BY segment;`,
    );
    ensureContent(
      zh,
      "ai.code.body",
      `use_case:
  "以下 SQL 仅作为 AI 辅助分析流程中的一个示例。"

prompt:
  "拆解这个业务问题，列出核心指标、数据字段和可能的异常值。"

sql_draft:
  SELECT segment, COUNT(*) AS users,
         AVG(conversion_rate) AS avg_conversion
  FROM analysis_table
  WHERE data_quality_flag = 'valid'
  GROUP BY segment;`,
    );
    migratePlaceholder(
      zh,
      "ai.evidence.one",
      ["可补充：Prompt 示例、修改前后对比、dashboard 截图或 GitHub 链接。"],
      "Prompt 用于拆解问题、定义指标和整理汇报结构，不直接替代分析判断。",
    );
    migratePlaceholder(
      zh,
      "ai.evidence.two",
      ["可补充：AI 输出如何被人工验证，比如 SQL 复算、来源核对、业务口径确认。"],
      "所有 AI 生成的 SQL、解释和结论都会经过复算、字段口径核对与人工修订。",
    );
    migratePlaceholder(
      zh,
      "ai.evidence.three",
      ["可补充：AI 带来的效率提升，例如分析框架搭建、文档整理或可视化迭代速度。"],
      "主要提升在于快速形成分析框架、减少重复性文档整理，并加快 dashboard 文案迭代。",
    );
    migratePlaceholder(en, "ai.step.one.title", ["Problem Framing"], "Problem Definition");
    migratePlaceholder(
      en,
      "ai.step.one.body",
      ["Use AI to clarify business context, stakeholder questions, and analytical assumptions."],
      "Use AI to structure the business context, stakeholder needs, and analytical objectives, then manually confirm the real question to answer.",
    );
    migratePlaceholder(en, "ai.step.two.title", ["Data Preparation"], "Analysis Drafting");
    migratePlaceholder(
      en,
      "ai.step.two.body",
      ["Generate SQL/Python directions, then manually check field definitions, logic, and anomalies."],
      "Generate initial SQL/Python directions, metric breakdowns, and visualisation structures, then adjust them against the actual data definitions.",
    );
    migratePlaceholder(en, "ai.step.three.title", ["Insight Storytelling"], "Human Validation");
    migratePlaceholder(
      en,
      "ai.step.three.body",
      ["Turn analytical findings into dashboard copy, report structure, and action recommendations."],
      "Validate AI outputs through field checks, SQL recalculation, outlier review, and business-rule confirmation to keep findings explainable.",
    );
    migratePlaceholder(en, "ai.code.title", ["Prompt → SQL Draft"], "Example: Prompt → SQL Draft");
    ensureContent(en, "ai.code.title", "Example: Prompt → SQL Draft");
    migratePlaceholder(
      en,
      "ai.code.body",
      [
        `prompt:
  "Break down this business problem into key metrics, data fields, and potential anomalies."

sql_draft:
  SELECT segment, COUNT(*) AS users,
         AVG(conversion_rate) AS avg_conversion
  FROM analysis_table
  WHERE data_quality_flag = 'valid'
  GROUP BY segment;`,
      ],
      `use_case:
  "SQL is one example of how AI supports the analysis workflow."

prompt:
  "Break down this business problem into key metrics, data fields, and potential anomalies."

sql_draft:
  SELECT segment, COUNT(*) AS users,
         AVG(conversion_rate) AS avg_conversion
  FROM analysis_table
  WHERE data_quality_flag = 'valid'
  GROUP BY segment;`,
    );
    ensureContent(
      en,
      "ai.code.body",
      `use_case:
  "SQL is one example of how AI supports the analysis workflow."

prompt:
  "Break down this business problem into key metrics, data fields, and potential anomalies."

sql_draft:
  SELECT segment, COUNT(*) AS users,
         AVG(conversion_rate) AS avg_conversion
  FROM analysis_table
  WHERE data_quality_flag = 'valid'
  GROUP BY segment;`,
    );
    migratePlaceholder(
      en,
      "ai.evidence.one",
      ["Add evidence: prompt examples, before/after revisions, dashboard screenshots, or GitHub links."],
      "Prompts are used to frame problems, define metrics, and structure reporting; they do not replace analytical judgement.",
    );
    migratePlaceholder(
      en,
      "ai.evidence.two",
      ["Add evidence: how AI outputs are manually verified, such as SQL recalculation, source checks, or business-definition review."],
      "AI-generated SQL, interpretations, and findings are checked through recalculation, field-definition review, and manual revision.",
    );
    migratePlaceholder(
      en,
      "ai.evidence.three",
      ["Add evidence: efficiency gains such as analysis framing, documentation cleanup, or faster visualisation iteration."],
      "The main efficiency gain is faster analytical framing, less repetitive documentation work, and quicker dashboard-copy iteration.",
    );
    migratePlaceholder(en, "projects.title", ["Selected Projects"], "Representative Projects");
    ensureContent(zh, "experience.eyebrow", "CAREER TIMELINE");
    migratePlaceholder(zh, "experience.title", ["实习 / 工作经历"], "工作经历");
    ensureContent(
      zh,
      "experience.note",
      "两段实习经历聚焦 IT 运营、业务流程、数据可视化、客户关系与合规研究，体现从业务问题到可执行分析产出的能力。",
    );
    migratePlaceholder(zh, "experience.1.time", ["2025.06 - 2025.09"], "2024.10 - 2025.03");
    ensureContent(zh, "experience.1.company", "飞利浦（中国）投资有限公司");
    migratePlaceholder(
      zh,
      "experience.1.title",
      ["Business Analyst Intern · 公司名称", "信息技术业务专家实习生 · 飞利浦（中国）投资有限公司", "信息技术业务专家实习生 · <strong class=\"experience-company\">飞利浦（中国）投资有限公司</strong>"],
      "信息技术业务专家实习生 · IT部门",
    );
    migratePlaceholder(
      zh,
      "experience.1.body",
      ["参与需求访谈、竞品研究和用户数据分析，整理业务流程与问题清单，输出分析报告并协助推进功能优化。", "聚焦供应商绩效评估、流程自动化、Power BI KPI 报表与跨部门协作，将 IT 运营数据转化为可执行的管理洞察。"],
      "聚焦供应商绩效评估、内部流程优化、Power BI KPI Dashboard 与信息安全合规，将 IT 运营数据转化为管理洞察。",
    );
    ensureContent(zh, "experience.1.tag.one", "Power BI");
    migratePlaceholder(zh, "experience.1.tag.two", ["流程优化"], "数据分析");
    migratePlaceholder(zh, "experience.1.tag.three", ["供应商评估"], "流程优化");
    ensureContent(zh, "experience.1.tag.four", "供应商评估");
    ensureContent(zh, "experience.1.detail.1.title", "供应商绩效评估");
    migratePlaceholder(zh, "experience.1.detail.1.body", ["设计并执行3场深度访谈、8份问卷和2次现场审计，评估量化供应商表现并形成可执行改进建议，获得内部高层96.7%满意度。"], "评估并与财务、采购团队协同管理供应商表现，推动持续改进业务计划，达到内部高层领导95%满意度。");
    migratePlaceholder(zh, "experience.1.detail.2.title", ["流程优化与合规"], "流程优化与系统运维");
    migratePlaceholder(zh, "experience.1.detail.2.body", ["优化内部报销与账务流程，通过自动化减少36%手工录入并保持100%企业治理合规；监督信息系统交付与运营符合信息安全、个人信息保护和通用数据保护要求。"], "负责公司内部报销审批系统的日常运维及账号管理，编写面向业务用户的使用手册，提升公费审批效率和合规性至98%。");
    migratePlaceholder(zh, "experience.1.detail.3.title", ["KPI 报表与可视化"], "KPI Dashboard");
    migratePlaceholder(zh, "experience.1.detail.3.body", ["基于 Power BI 搭建2025年度 IT 部门 KPI Dashboard，整合15项关键年度业务指标，负责数据清理、筛选与可视化开发，支持预算与资源配置决策。"], "基于 Power BI 搭建2025年度 KPI Dashboard，覆盖信息技术部门15项核心年度业务指标，负责数据清理、筛选及可视化开发，为内部投资组合调整与资源配置提供数字驱动依据。");
    migratePlaceholder(zh, "experience.1.detail.4.title", ["跨部门协作与影响"], "信息安全与数据合规");
    migratePlaceholder(zh, "experience.1.detail.4.body", ["与财务、采购和 IT 团队协作，将业务目标转化为可扩展数字方案，缩短18%报告周期并提升跨部门对齐效率。"], "监督内部信息技术部门与外部供应商，确保已交付及即将投入使用的信息系统符合信息安全等级保护要求，并在跨境数据传输场景下遵守个人信息保护与通用数据保护要求。");
    migratePlaceholder(zh, "experience.2.time", ["2024.10 - 2025.01"], "2024.07 - 2024.09");
    ensureContent(zh, "experience.2.company", "朗高投资咨询（上海）有限公司");
    migratePlaceholder(
      zh,
      "experience.2.title",
      ["Data Analyst Assistant · 团队/实验室名称", "售前咨询助理实习生（产品组）", "售前咨询助理实习生（产品组） · 朗高投资咨询（上海）有限公司", "售前咨询助理实习生（产品组） · <strong class=\"experience-company\">朗高投资咨询（上海）有限公司</strong>"],
      "售前咨询助理实习生 · 产品部",
    );
    migratePlaceholder(
      zh,
      "experience.2.body",
      ["负责数据整理、指标口径核对和可视化图表制作，帮助团队把原始数据转化为可沟通的业务洞察。", "围绕 CRM 数据管理、销售机会分析、数字平台咨询与合规调研，支持客户关系优化、平台改版和跨境业务合规判断。"],
      "参与 CRM 数据管理、销售机会分析、数字平台咨询与隐私合规研究，支持客户关系优化与跨境业务判断。",
    );
    ensureContent(zh, "experience.2.tag.one", "CRM");
    migratePlaceholder(zh, "experience.2.tag.two", ["平台咨询"], "销售数据分析");
    migratePlaceholder(zh, "experience.2.tag.three", ["隐私合规"], "数字化产品交付");
    ensureContent(zh, "experience.2.tag.four", "隐私合规");
    migratePlaceholder(zh, "experience.2.detail.1.title", ["CRM 管理与优化"], "数字平台咨询");
    migratePlaceholder(zh, "experience.2.detail.1.body", ["管理并优化300+客户的 CRM 记录，基于数据分层与分析提升业务拓展效率32%。"], "协助项目总监、设计团队及开发团队为客户提供官方网站、微信小程序及企业微信前端 UI/UX、后端 Drupal 系统升级维护、系统集成可行性与交付流程咨询。");
    migratePlaceholder(zh, "experience.2.detail.2.title", ["销售机会分析与建议"], "CRM 与本地化策略");
    migratePlaceholder(zh, "experience.2.detail.2.body", ["开展销售机会管道分析并向高级管理层提出数据驱动的触达策略，推动 C-suite 互动提升28%，合作机会识别效率提升11%。"], "协助开发团队为客户提供本地化营销技术客户关系系统咨询，包括 Salesforce CRM 与企业微信客户营销工具在中国市场的可行性分析及策略建议。");
    migratePlaceholder(zh, "experience.2.detail.3.title", ["数字平台咨询"], "跨境合规研究");
    migratePlaceholder(zh, "experience.2.detail.3.body", ["为奢华酒店客户提供官网、微信小程序、企业微信前端 UI/UX 与 Drupal 系统优化建议，并支持 stakeholder workshop，降低25%实施风险。"], "协助项目总监向对华经营的境外企业提供私域流量隐私保护、跨境数据传输及 ICP 备案合规咨询，主要基于个人信息保护、网络安全与电子商务相关法律框架。");
    migratePlaceholder(zh, "experience.2.detail.4.title", ["合规与隐私咨询"], "销售机会分析");
    migratePlaceholder(zh, "experience.2.detail.4.body", ["围绕跨境数据传输、ICP 备案、隐私框架和私域流量运营开展合规调研，支持欧洲投资企业在中国市场实现100%监管合规。"], "支持客户与销售机会信息整理，围绕客户需求、业务场景和平台可行性形成结构化输入，辅助团队推进售前沟通与方案判断。");
    migratePlaceholder(zh, "volunteer.1.label", ["Community / Campus", "WISE / Campus Volunteer"], "WISE Society / Campus Volunteer");
    migratePlaceholder(zh, "volunteer.1.title", ["志愿者经历标题", "WISE 活动协作志愿者"], "WISE社团活动志愿者");
    migratePlaceholder(
      zh,
      "volunteer.1.body",
      [
        "放你参与过的社区、校园、公益或组织协作经历。重点写你负责的任务、影响的人群、协调资源和最终产出。",
        "可补充你在活动现场承担的沟通协作、参与者支持、材料整理或团队配合内容。",
      ],
      "协助约50名八年级学生理解桥梁结构与建造原理，引导其使用纸板、笔、吸管等材料完成稳固桥梁模型，激发学生尤其是女生对科学与工程的兴趣。",
    );
    migratePlaceholder(zh, "volunteer.1.time", ["时间", "时间待补充"], "活动协作");
    migratePlaceholder(zh, "volunteer.1.role", ["角色 / 职责", "活动协作 / 志愿者"], "STEM启发");
    if (zh && !zh["volunteer.1.focus"]) {
      zh["volunteer.1.focus"] = "女性科学与工程";
      changed = true;
    }
    migratePlaceholder(zh, "volunteer.marathon.label", ["Sports Event / Volunteer"], "Marathon / Volunteer");
    migratePlaceholder(
      zh,
      "volunteer.marathon.body",
      [
        "可补充你在赛事现场承担的具体职责，例如路线引导、参赛者支持、团队协作、突发情况沟通或活动流程执行。",
        "负责 crew room 签到签退、证件与高可视背心发放、物资整理、餐饮支持、制服盘点及收尾清洁；Line Manager 评价其执行可靠、主动补位，积极支持现场顺畅运作。",
      ],
      "负责出发团队、所有志愿者及相关人员的签到签退、证件与高可视背心发放、物资整理、餐饮支持、制服盘点及收尾清洁；获得团队经理评价其执行可靠、主动补位，积极支持现场顺畅运作。",
    );
    migratePlaceholder(zh, "volunteer.marathon.time", ["2026"], "马拉松");
    migratePlaceholder(zh, "volunteer.marathon.role", ["Event Team / 志愿者"], "体育活动志愿者");
    migratePlaceholder(zh, "volunteer.utas.label", ["Cross-university Visit / Interpreting"], "Cross-university Visit / Interpretion");
    migratePlaceholder(
      zh,
      "volunteer.utas.title",
      ["塔斯马尼亚大学领导参访上海海洋大学随行翻译"],
      "2024年秋季塔斯马尼亚大学领导参访上海海洋大学随行翻译",
    );
    migratePlaceholder(
      zh,
      "volunteer.utas.body",
      ["协助中英文沟通与现场衔接，支持塔斯马尼亚大学领导参访上海海洋大学。"],
      "协助带领塔斯马尼亚大学代表团参观上海海洋大学校史馆，并进行中英文随行翻译与学校历史介绍，支持两校交流与现场沟通。",
    );
    migratePlaceholder(zh, "volunteer.utas.time", ["时间待补充"], "随行翻译");
    migratePlaceholder(zh, "volunteer.utas.role", ["随行翻译 / 参访支持"], "参访支持");
    if (zh && !zh["volunteer.utas.focus"]) {
      zh["volunteer.utas.focus"] = "校间合作";
      changed = true;
    }
    migratePlaceholder(zh, "volunteer.graduation.label", ["Ceremony / Interpreting"], "Graduation Ceremony / Interpretion");
    migratePlaceholder(
      zh,
      "volunteer.graduation.body",
      ["负责毕业典礼中英文翻译与现场沟通支持，保障典礼流程顺畅衔接。"],
      "负责2024年上海海洋大学爱恩学院毕业典礼全程中英口译与现场沟通支持，协助典礼环节顺畅衔接并保障中英文信息准确传达。",
    );
    migratePlaceholder(zh, "volunteer.graduation.time", ["2024"], "毕业典礼");
    migratePlaceholder(zh, "volunteer.graduation.role", ["翻译 / 典礼支持"], "翻译 / 口译");
    migratePlaceholder(zh, "experience.title", ["实习 / 工作经历"], "工作经历");
    migratePlaceholder(zh, "contact.title", ["欢迎联系我聊 BA / DA 岗位机会"], "欢迎联系潜在的岗位机会");
    migratePlaceholder(
      zh,
      "contact.body",
      ["这里可以放你的邮箱、LinkedIn、GitHub、简历下载链接，以及你当前正在寻找的岗位类型和城市。"],
      "这里可以放你的邮箱、LinkedIn、GitHub，以及你当前正在寻找的岗位类型和城市。",
    );
    migratePlaceholder(zh, "contact.email", ["your.email@example.com"], "邮件：yunweigu@outlook.com");
    migratePlaceholder(zh, "contact.github", ["GitHub 链接", "添加链接"], "GitHub主页：https://github.com/yunweig23");
    migratePlaceholder(
      zh,
      "contact.linkedin",
      ["LinkedIn / 领英链接", "添加链接", "https://www.linkedin.com/in/yunweig/"],
      "领英：https://www.linkedin.com/in/yunweig/",
    );
    migratePlaceholder(zh, "project.1.type", ["Data Analysis Case Study", "数据洞察 / 可视化 / 数据库"], "数据分析与商业智能");
    migratePlaceholder(zh, "project.1.time", ["2026", "时间待补充"], "进行中");
    migratePlaceholder(
      zh,
      "project.1.title",
      ["电商转化漏斗与用户留存分析", "数据分析项目 01", "项目名称待补充"],
      "基于交互式数据可视化的北海航运排放理解深化研究",
    );
    migratePlaceholder(
      zh,
      "project.1.body",
      [
        "用 SQL/Python 清洗订单与行为数据，拆解从访问、加购到支付的转化路径，识别关键流失环节，并提出首页推荐与优惠策略优化建议。",
        "这里可以补充项目背景、数据来源、分析目标、使用工具、关键指标和最终洞察。",
        "进行中项目：基于 FuelEU 航运排放数据，构建北海航线排放可视化原型，重点呈现英国与欧陆重点国家间的 CO₂ 排放流向。",
      ],
      "进行中项目：基于 FuelEU 航运排放数据，构建北海航线排放可视化原型，重点呈现英国与荷兰、比利时、法国、德国、挪威等重点国家间的 CO₂ 排放流向。",
    );
    migratePlaceholder(zh, "project.1.tag.one", ["SQL", "SQL / Python"], "Python");
    migratePlaceholder(zh, "project.1.tag.two", ["Python", "Dashboard"], "3D可视化");
    migratePlaceholder(zh, "project.1.tag.three", ["Cohort", "Insight"], "空间数据分析");
    ensureContent(zh, "project.1.detail.one.title", "项目背景");
    ensureContent(zh, "project.1.detail.one.body", "围绕 Tyrell Centre for Climate Change Research 与 AMBS 的合作研究场景，探索如何将北海航运排放数据转化为可解释的交互式可视化原型，并服务大学 Data Visualisation Observatory 的展示需求。");
    migrateContainingText(zh, "project.1.detail.one.body", ["Tyrell Centre for Climate Change Research 与 AMBS 合作"], "围绕 Tyrell Centre for Climate Change Research 与 AMBS 的合作研究场景，探索如何将北海航运排放数据转化为可解释的交互式可视化原型，并服务大学 Data Visualisation Observatory 的展示需求。");
    ensureContent(zh, "project.1.detail.two.title", "分析过程");
    ensureContent(zh, "project.1.detail.two.body", "基于 FuelEU 航运排放数据，识别英国与欧陆国家之间的高排放航线与船型结构；当前重点使用 Python 进行数据整理、空间映射与可视化原型设计。");
    ensureContent(zh, "project.1.detail.three.title", "期望产出");
    ensureContent(zh, "project.1.detail.three.body", "计划交付可交互的 Streamlit 可视化应用，呈现英国-荷兰、比利时、法国、德国、挪威等重点航线的 CO₂ 排放规模、船型贡献与空间分布。");
    ensureContent(zh, "project.1.detail.four.title", "工具与能力");
    ensureContent(zh, "project.1.detail.four.body", "Python / Streamlit / 3D可视化 / 空间数据分析");
    migratePlaceholder(zh, "project.2.type", ["Business Analysis Project", "数据洞察 / 可视化 / 数据库"], "数据分析与商业智能");
    migratePlaceholder(zh, "project.2.time", ["2025", "时间待补充"], "2026.05");
    migratePlaceholder(zh, "project.2.title", ["SaaS 产品 KPI Dashboard 设计", "数据分析项目 02"], "牛津路车站关闭影响分析");
    migratePlaceholder(
      zh,
      "project.2.body",
      [
        "梳理业务目标、核心指标和使用者场景，设计管理层与运营层 dashboard 信息架构，让团队可以按周追踪增长、活跃和留存。",
        "这里可以补充清洗流程、指标体系、可视化设计、业务问题拆解和结论表达。",
        "基于预测模型与空间流向可视化，评估 Oxford Road Station 关闭后客流向 Piccadilly、Victoria 与 Corridor 热点区域转移的影响。",
      ],
      "基于预测模型与空间流向可视化，评估 Oxford Road Station 关闭后客流向 Manchester Piccadilly、Manchester Victoria 与牛津路走廊热点区域转移的影响。",
    );
    migratePlaceholder(zh, "project.2.tag.one", ["KPI", "Power BI / Tableau"], "预测建模");
    migratePlaceholder(zh, "project.2.tag.two", ["Power BI", "KPI"], "城市规划");
    migratePlaceholder(zh, "project.2.tag.three", ["Stakeholder", "Business Storytelling"], "空间数据分析");
    ensureContent(zh, "project.2.detail.one.title", "项目背景");
    migratePlaceholder(
      zh,
      "project.2.detail.one.body",
      ["评估 Oxford Road Station 关闭后，客流向 Manchester Piccadilly、Manchester Victoria 及 Corridor 关键目的地转移对城市出行与站点承载的影响。"],
      "评估 Oxford Road Station 关闭后，客流向 Manchester Piccadilly、Manchester Victoria 及牛津路走廊关键目的地转移对城市出行与站点承载的影响。",
    );
    ensureContent(zh, "project.2.detail.one.body", "评估 Oxford Road Station 关闭后，客流向 Manchester Piccadilly、Manchester Victoria 及牛津路走廊关键目的地转移对城市出行与站点承载的影响。");
    ensureContent(zh, "project.2.detail.two.title", "分析过程");
    ensureContent(zh, "project.2.detail.two.body", "结合预测需求、路线距离、步行时间与空间热点图，识别替代出行路径、走廊压力点和潜在导流区域。");
    ensureContent(zh, "project.2.detail.three.title", "关键结果");
    migratePlaceholder(
      zh,
      "project.2.detail.three.body",
      ["预测四个 Corridor 热点簇将新增约 17,515 人/日；University of Manchester / MRI（约 8,929 人/日）与 Circle Square（约 5,120 人/日）为优先导流和容量管理区域。"],
      "预测四个牛津路走廊热点簇将新增约 17,515 人/日；University of Manchester / MRI（约 8,929 人/日）与 Circle Square（约 5,120 人/日）为优先导流和容量管理区域。",
    );
    ensureContent(zh, "project.2.detail.three.body", "预测四个牛津路走廊热点簇将新增约 17,515 人/日；University of Manchester / MRI（约 8,929 人/日）与 Circle Square（约 5,120 人/日）为优先导流和容量管理区域。");
    ensureContent(zh, "project.2.detail.four.title", "工具与能力");
    ensureContent(zh, "project.2.detail.four.body", "预测建模 / 城市规划 / 空间数据分析 / 流向可视化");
    migratePlaceholder(zh, "project.3.type", ["Product / GitHub", "数据洞察 / 可视化 / 数据库"], "数据分析与商业智能");
    migratePlaceholder(zh, "project.3.time", ["进行中"], "时间待补充");
    migratePlaceholder(zh, "project.3.time", ["时间待补充"], "2025.03");
    migratePlaceholder(zh, "project.3.title", ["个人数据作品集与 GitHub 仓库", "数据库项目 03"], "飞利浦2025年IT部KPI报表");
    migratePlaceholder(
      zh,
      "project.3.body",
      [
        "这里可以放你的 GitHub 链接、README 亮点、产品原型、数据可视化截图，展示你把分析过程产品化和文档化的能力。",
        "这里可以补充数据库设计、查询优化、数据建模、ER 图、NoSQL 或数据管理相关内容。",
      ],
      "基于项目组内部 Excel 数据搭建 Power BI KPI Dashboard，覆盖 IT 服务管理、系统性能、网络安全、项目交付、财务业务价值与人员组织等15个年度 KPI；部分目标值以人工设定为主，并通过 DAX 动态计算完成率、目标差异与绩效状态。",
    );
    migrateContainingText(
      zh,
      "project.3.body",
      ["这里可以补充数据库设计", "ER 图", "NoSQL", "数据管理相关内容"],
      "基于项目组内部 Excel 数据搭建 Power BI KPI Dashboard，覆盖 IT 服务管理、系统性能、网络安全、项目交付、财务业务价值与人员组织等15个年度 KPI；部分目标值以人工设定为主，并通过 DAX 动态计算完成率、目标差异与绩效状态。",
    );
    migratePlaceholder(zh, "project.3.tag.one", ["GitHub", "SQL / NoSQL"], "Power BI");
    migratePlaceholder(zh, "project.3.tag.two", ["README", "Data Modeling", "Data Modelling"], "DAX");
    migratePlaceholder(zh, "project.3.tag.three", ["Portfolio", "Database"], "Excel 数据");
    ensureContent(zh, "project.3.tag.four", "KPI 分析");
    ensureContent(zh, "project.3.detail.one.title", "KPI 指标框架");
    ensureContent(zh, "project.3.detail.one.body", "报表共覆盖15个 IT 部门 KPI；以下为典型指标示例，按管理视角归入服务管理、系统性能、网络安全、项目交付、财务业务价值与人员组织六类，便于管理层快速定位绩效主题。");
    ensureContent(zh, "project.3.detail.two.title", "数据基础与目标设定");
    ensureContent(zh, "project.3.detail.two.body", "主要分析基于项目组内部 Excel 数据，完成字段整理、口径核对、数据清洗与模型关系梳理；KPI 目标值以人工设定为主，因此报表重点放在指标结构化、状态追踪与可视化表达。");
    ensureContent(zh, "project.3.detail.three.title", "DAX 动态计算");
    ensureContent(zh, "project.3.detail.three.body", "首页设置15个 KPI 目录标签，并通过 DAX 根据后台数据自动判断 Achieved、Nearly Achieved、Not Achieved 及 Red / Amber / Green 状态；完成率 ≥100% 为 Achieved，80%-99% 为 Nearly Achieved，低于80% 为 Not Achieved。");
    ensureContent(zh, "project.3.detail.four.title", "工具与能力");
    ensureContent(zh, "project.3.detail.four.body", "Power BI / DAX / Excel 数据整理 / KPI 绩效分析");
    migratePlaceholder(zh, "project.4.type", ["数据洞察 / 可视化 / 数据库"], "数据分析与商业智能");
    migratePlaceholder(zh, "project.4.time", ["时间待补充", "2024.12"], "2025.12");
    migratePlaceholder(zh, "project.4.title", ["可视化汇报项目 04"], "曼彻斯特大学版大富翁游戏");
    migratePlaceholder(
      zh,
      "project.4.body",
      [
        "这里可以补充 dashboard 截图、汇报结构、指标解释、用户场景和数据结论如何转化为建议。",
        "这里可以补充 SQL 数据库设计、游戏数据表结构、查询逻辑和规则实现方式。",
        "基于课程需求设计并实现 University Tycoon 关系型数据库，将棋盘游戏规则转化为 SQLite 表结构、约束、查询与触发器逻辑。",
      ],
      "基于曼彻斯特大学教学建筑设计并实现 University Tycoon 关系型数据库，将棋盘游戏规则转化为 SQLite 表结构、约束、查询与触发器逻辑。",
    );
    migratePlaceholder(zh, "project.4.tag.one", ["Visualization", "SQL Database"], "SQLite");
    migratePlaceholder(zh, "project.4.tag.two", ["Dashboard", "Game Data"], "数据库设计");
    migratePlaceholder(zh, "project.4.tag.three", ["Reporting", "Schema Design"], "触发器");
    ensureContent(zh, "project.4.detail.one.title", "项目背景");
    ensureContent(zh, "project.4.detail.one.body", "围绕曼彻斯特大学主题大富翁游戏，建模玩家、代币、棋盘位置、建筑资产、特殊事件、资金余额与回合审计记录。");
    ensureContent(zh, "project.4.detail.two.title", "数据库实现");
    ensureContent(zh, "project.4.detail.two.body", "完成 ERD、SQLite schema、初始数据填充与 leaderboard 视图，支持按玩家余额、当前位置与持有建筑输出游戏状态。");
    ensureContent(zh, "project.4.detail.three.title", "分析过程");
    migratePlaceholder(
      zh,
      "project.4.detail.three.body",
      ["通过 6 个触发器（Triggers）自动处理建筑购买、学费支付、Welcome Week 奖励、停学状态、RAG/Hearing 事件与审计日志更新。"],
      "通过 6 个触发器自动处理建筑购买、学费支付、欢迎周奖励、停学状态、RAG/Hearing 事件与审计日志更新。",
    );
    ensureContent(zh, "project.4.detail.three.body", "通过 6 个触发器自动处理建筑购买、学费支付、欢迎周奖励、停学状态、RAG/Hearing 事件与审计日志更新。");
    ensureContent(zh, "project.4.detail.four.title", "最终产出");
    ensureContent(zh, "project.4.detail.four.body", "交付可运行的 SQL 脚本、视图查询、三轮 gameplay 更新脚本与设计说明，将复杂规则落地为可验证的数据库逻辑。");
    migratePlaceholder(zh, "project.5.type", ["深度学习 / 算法建模"], "深度学习与算法建模");
    migratePlaceholder(zh, "project.5.time", ["时间待补充"], "2025.04");
    migratePlaceholder(zh, "project.5.title", ["深度学习项目 01"], "基于卷积神经网络的加利福尼亚鸟类识别研究");
    migratePlaceholder(
      zh,
      "project.5.body",
      ["这里可以补充算法目标、数据集、模型结构、训练过程、评估指标和最终效果。"],
      "基于 CUB200-2011 鸟类图像数据集构建 CNN 识别流程，比较并优化 VGG16 与 ResNet-50 模型；优化后 ResNet-50 验证集准确率提升至 93.55%。",
    );
    migratePlaceholder(zh, "project.5.tag.one", ["Deep Learning"], "Python");
    migratePlaceholder(zh, "project.5.tag.two", ["Modelling", "Modeling"], "Deep Learning");
    migratePlaceholder(zh, "project.5.tag.three", ["Evaluation"], "CNN");
    ensureContent(zh, "project.5.detail.one.title", "项目背景");
    ensureContent(zh, "project.5.detail.one.body", "面向加利福尼亚鸟类细粒度识别任务，处理鸟种外观相近、拍摄姿态差异与复杂自然背景带来的分类难点。");
    ensureContent(zh, "project.5.detail.two.title", "建模方法");
    ensureContent(zh, "project.5.detail.two.body", "使用 Python 完成图像清洗、数据增强与样本处理，基于迁移学习训练并对比 VGG16 与 ResNet-50 CNN 模型。");
    ensureContent(zh, "project.5.detail.three.title", "关键结果");
    ensureContent(zh, "project.5.detail.three.body", "优化后 ResNet-50 表现最佳，训练准确率接近 98%，验证集准确率由 44.75% 提升至 93.55%，整体优于 VGG16。");
    ensureContent(zh, "project.5.detail.four.title", "工具与能力");
    ensureContent(zh, "project.5.detail.four.body", "Python / CNN / 迁移学习 / 模型评估");
    migratePlaceholder(zh, "project.6.type", ["网站开发 / 产品实现", "Web 产品与前端开发"], "Web 产品与数据库设计");
    migratePlaceholder(zh, "project.6.time", ["时间待补充"], "2024.11");
    migratePlaceholder(zh, "project.6.title", ["网站开发项目 01"], "敦煌主题线上美术馆");
    migratePlaceholder(
      zh,
      "project.6.body",
      ["这里可以补充产品目标、页面结构、交互设计、前端实现、部署方式和 GitHub 链接。"],
      "50人团队项目；带领4人数据库小组完成用户需求分析、数据结构设计与数据库搭建，支撑作品浏览、搜索筛选、评论点赞与用户账户等核心功能。",
    );
    migratePlaceholder(zh, "project.6.tag.one", ["Frontend"], "数据库设计");
    migratePlaceholder(zh, "project.6.tag.two", ["UX"], "用户需求分析");
    migratePlaceholder(zh, "project.6.tag.three", ["GitHub"], "团队协作");
    ensureContent(zh, "project.6.detail.one.title", "项目背景");
    ensureContent(zh, "project.6.detail.one.body", "围绕敦煌文化搭建线上美术馆 Desert Oasis，通过数字化方式呈现艺术作品、文化背景与用户浏览路径，降低传统展览的时间与空间限制。");
    ensureContent(zh, "project.6.detail.two.title", "职责范围");
    ensureContent(zh, "project.6.detail.two.body", "在50人项目中担任 Team Phoenix 负责人，协调跨团队资源，并带领4人数据库小组完成用户需求分析、数据采集规划、ER 图、数据库 schema 与实施方案。");
    ensureContent(zh, "project.6.detail.three.title", "关键产出");
    ensureContent(zh, "project.6.detail.three.body", "交付数据库设计、数据收集与实施基础，并完成 V2.0 安装与用户手册；系统覆盖注册登录、作品浏览、搜索筛选、评论点赞、购物购买、隐私条款与反馈支持。");
    ensureContent(zh, "project.6.detail.four.title", "工具与能力");
    ensureContent(zh, "project.6.detail.four.body", "用户需求分析 / 数据库设计 / 文档交付 / 跨团队协作");
    migratePlaceholder(zh, "project.7.type", ["网站开发 / 产品实现", "Web 产品与前端开发"], "Web 产品与系统开发");
    migratePlaceholder(zh, "project.7.time", ["时间待补充"], "2023.12");
    migratePlaceholder(zh, "project.7.title", ["网站开发项目 02"], "Market Master 电商网站");
    migratePlaceholder(
      zh,
      "project.7.body",
      ["这里可以补充系统功能、用户流程、页面组件、数据交互或 Demo 展示。"],
      "设计并实现 Market Master 电商网站原型，覆盖前端页面、后端逻辑与完整数据库，支持游客、注册用户与管理员三类角色的差异化访问权限。",
    );
    migratePlaceholder(zh, "project.7.tag.one", ["Web App"], "全栈开发");
    migratePlaceholder(zh, "project.7.tag.two", ["Prototype"], "雏形开发");
    migratePlaceholder(zh, "project.7.tag.three", ["Demo"], "Demo");
    ensureContent(zh, "project.7.detail.one.title", "项目背景");
    ensureContent(zh, "project.7.detail.one.body", "围绕 Market Master 电商平台搭建课程项目原型，目标是模拟真实线上购物流程，并将商品展示、用户账户、购物车与订单结算等核心业务环节串联为完整系统。");
    ensureContent(zh, "project.7.detail.two.title", "系统功能");
    ensureContent(zh, "project.7.detail.two.body", "实现游客、注册用户与管理员三层级访问权限；支持用户登录、商品搜索、商品详情查看、加入购物车、购物车管理与结算等典型电商交互。");
    ensureContent(zh, "project.7.detail.three.title", "开发实现");
    ensureContent(zh, "project.7.detail.three.body", "完成前端页面、后端业务逻辑与数据库设计，实现商品、用户、购物车、订单及权限相关数据的存储与调用，让 Demo 具备从浏览到结算的完整闭环。");
    ensureContent(zh, "project.7.detail.four.title", "工具与能力");
    ensureContent(zh, "project.7.detail.four.body", "全栈开发 / 雏形开发 / 数据库设计 / Demo 展示");
    migratePlaceholder(zh, "project.8.type", ["网络安全 / 隐私保护", "网络安全与隐私计算"], "AI治理与隐私合规");
    migratePlaceholder(zh, "project.8.time", ["时间待补充"], "2025.07");
    migratePlaceholder(zh, "project.8.title", ["网络安全项目 01"], "同济大学人工智能安全与法治暑期训练营");
    migratePlaceholder(
      zh,
      "project.8.body",
      ["这里可以补充安全问题、风险场景、分析方法、防护思路和最终建议。", "参与生成式 AI 相关研讨会与实地走访，聚焦算法伦理、数据安全与隐私保护；带领六人团队比较中、美、欧 AI 监管体系，并形成合规分析报告与展示。"],
      "参加同济大学人工智能安全与法治暑期训练营，围绕生成式 AI 的算法伦理、数据安全与隐私合规开展研讨和走访；担任六人小组组长与汇报人，比较中、美、欧监管框架并形成企业合规分析。",
    );
    migrateContainingText(
      zh,
      "project.8.body",
      ["这里可以补充安全问题", "风险场景", "防护思路", "最终建议", "参与生成式 AI 相关研讨会"],
      "参加同济大学人工智能安全与法治暑期训练营，围绕生成式 AI 的算法伦理、数据安全与隐私合规开展研讨和走访；担任六人小组组长与汇报人，比较中、美、欧监管框架并形成企业合规分析。",
    );
    migratePlaceholder(zh, "project.8.tag.one", ["Cybersecurity"], "人工智能治理");
    migratePlaceholder(zh, "project.8.tag.two", ["Risk"], "算法伦理");
    migratePlaceholder(zh, "project.8.tag.three", ["Mitigation"], "隐私合规");
    ensureContent(zh, "project.8.detail.one.title", "项目背景");
    ensureContent(zh, "project.8.detail.one.body", "参加同济大学人工智能安全与法治暑期训练营，围绕生成式 AI 发展带来的算法伦理、数据安全、隐私保护与监管合规问题进行集中学习、研讨和实地走访。");
    ensureContent(zh, "project.8.detail.two.title", "团队职责");
    ensureContent(zh, "project.8.detail.two.body", "担任六人团队组长与演讲者，组织资料检索、监管框架拆解、观点整合与最终汇报，推动团队围绕中、美、欧 AI 监管体系形成可比较的分析结构。");
    ensureContent(zh, "project.8.detail.three.title", "分析产出");
    ensureContent(zh, "project.8.detail.three.body", "比较中国、美国与欧盟在 AI 治理路径、算法透明度、数据安全责任、隐私保护要求和企业合规压力方面的主要差异，并结合企业全球合规需求形成分析报告与展示材料。");
    ensureContent(zh, "project.8.detail.four.title", "工具与能力");
    ensureContent(zh, "project.8.detail.four.body", "人工智能治理 / 算法伦理 / 隐私合规 / 英文汇报");
    migratePlaceholder(zh, "project.9.type", ["网络安全 / 隐私保护", "网络安全与隐私计算"], "网络安全与AI解决方案");
    migratePlaceholder(zh, "project.9.time", ["时间待补充"], "2023.11");
    migratePlaceholder(zh, "project.9.title", ["隐私保护项目 02"], "Deloitte CyberAce 网络安全训练营");
    migratePlaceholder(
      zh,
      "project.9.body",
      [
        "这里可以补充隐私保护机制、数据披露控制、合规背景、评估方法和项目产出。",
        "作为组长与演讲者参与 Deloitte 与 AWS 合办的 CyberAce 网络安全训练营，进入总决赛；在人工智能赛道中基于模拟客户 RFP，设计名为 COSEC 的生成式 AI 维护解决方案，覆盖需求理解、数据处理、竞品分析与市场研究。",
        "带领团队参与 Deloitte 与 AWS 合办的 CyberAce 网络安全训练营并进入总决赛，围绕模拟客户 RFP 拆解业务痛点、数据需求与安全场景，在人工智能赛道中设计 COSEC 生成式 AI 运维解决方案；项目整合数据处理、竞品分析、市场研究与方案汇报，体现从客户需求识别到技术方案表达的端到端分析与交付能力。",
      ],
      "带领团队进入 Deloitte x AWS CyberAce 总决赛，基于模拟客户 RFP 梳理安全场景与业务需求，设计 COSEC 生成式 AI 运维方案，并完成竞品研究、方案论证与最终汇报。",
    );
    migrateContainingText(
      zh,
      "project.9.body",
      ["这里可以补充", "隐私保护机制", "作为组长与演讲者参与 Deloitte", "带领团队参与 Deloitte"],
      "带领团队进入 Deloitte x AWS CyberAce 总决赛，基于模拟客户 RFP 梳理安全场景与业务需求，设计 COSEC 生成式 AI 运维方案，并完成竞品研究、方案论证与最终汇报。",
    );
    migratePlaceholder(zh, "project.9.tag.one", ["Privacy"], "网络安全");
    migratePlaceholder(zh, "project.9.tag.two", ["Disclosure Control"], "人工智能");
    migratePlaceholder(zh, "project.9.tag.three", ["Compliance"], "用户需求分析");
    ensureContent(zh, "project.9.tag.four", "RFP反馈");
    ensureContent(zh, "project.9.detail.one.title", "项目背景");
    ensureContent(zh, "project.9.detail.one.body", "参与 Deloitte 与 AWS 亚马逊云科技合办的 2023 CyberAce 网络安全训练营，并进入总决赛；项目围绕企业网络安全、生成式 AI 应用与客户需求响应展开。");
    ensureContent(zh, "project.9.detail.two.title", "方案设计");
    ensureContent(zh, "project.9.detail.two.body", "在人工智能赛道中，基于模拟客户的特定需求与 RFP，带领团队设计名为 COSEC 的生成式 AI 维护解决方案，梳理应用场景、目标用户、核心功能与交付逻辑。");
    ensureContent(zh, "project.9.detail.three.title", "分析过程");
    ensureContent(zh, "project.9.detail.three.body", "负责组织数据收集与处理、竞品分析及市场研究，将客户需求转化为方案判断依据，并支持最终展示材料与答辩内容。");
    ensureContent(zh, "project.9.detail.four.title", "工具与能力");
    ensureContent(zh, "project.9.detail.four.body", "网络安全 / 人工智能 / 用户需求分析 / RFP反馈");
    migratePlaceholder(zh, "project.10.type", ["网络安全 / 隐私保护", "网络安全与隐私计算"], "法律科技与数据合规");
    migratePlaceholder(zh, "project.10.time", ["时间待补充"], "2023.05");
    migratePlaceholder(zh, "project.10.title", ["安全分析项目 03"], "实地调研");
    migratePlaceholder(
      zh,
      "project.10.body",
      ["这里可以补充威胁建模、安全审计、漏洞分析、访问控制或安全策略设计内容。"],
      "发起并带领四人小组完成世辉律师事务所上海办公室英文商务访谈，围绕个人信息保护、跨境数据传输、网络安全与生成式 AI 等议题，设计18个递进问题、协调现场采访与多机位拍摄，并完成字幕视频与个人调研报告。",
    );
    migrateContainingText(
      zh,
      "project.10.body",
      ["这里可以补充", "威胁建模", "安全审计", "漏洞分析"],
      "发起并带领四人小组完成世辉律师事务所上海办公室英文商务访谈，围绕个人信息保护、跨境数据传输、网络安全与生成式 AI 等议题，设计18个递进问题、协调现场采访与多机位拍摄，并完成字幕视频与个人调研报告。",
    );
    migratePlaceholder(zh, "project.10.tag.one", ["Security Analysis"], "实地调研");
    migratePlaceholder(zh, "project.10.tag.two", ["Threat Modelling"], "英文访谈");
    migratePlaceholder(zh, "project.10.tag.three", ["Access Control"], "数据合规");
    ensureContent(zh, "project.10.tag.four", "法律科技");
    ensureContent(zh, "project.10.detail.one.title", "调研背景");
    ensureContent(zh, "project.10.detail.one.body", "以世辉律师事务所上海办公室为调研对象，采访专注网络安全、个人信息保护、数据合规与跨境交易的英格兰执业律师，探索法律视角下的信息系统建设与数据管理实践。");
    ensureContent(zh, "project.10.detail.two.title", "访谈设计");
    ensureContent(zh, "project.10.detail.two.body", "作为调研发起者与采访者之一，完成对象筛选、受访者沟通、时间地点协调，并组织小组围绕律所运营、专业领域、团队文化与个人发展设计18个递进式英文问题。");
    ensureContent(zh, "project.10.detail.three.title", "关键洞察");
    ensureContent(zh, "project.10.detail.three.body", "调研聚焦 PIPL、GDPR、跨境数据传输、数据映射、加密、假名化与匿名化等议题，梳理律所在数字化平台、客户数据保护和生成式 AI 发展中的合规机会与挑战。");
    ensureContent(zh, "project.10.detail.four.title", "工具与能力");
    ensureContent(zh, "project.10.detail.four.body", "实地调研 / 英文访谈 / 数据合规 / 视频剪辑");
    migratePlaceholder(zh, "project.11.type", ["数据洞察 / 可视化 / 数据库"], "数据分析与商业智能");
    migratePlaceholder(zh, "project.11.time", ["时间待补充"], "2026.04");
    ensureContent(zh, "project.11.title", "基于拓扑数据分析的英国性别平等指标与地方行政区特征关联研究");
    migratePlaceholder(
      zh,
      "project.11.body",
      [
        "围绕英国地方行政区（LAD）层级数据，探索性别平等指标与地区特征之间的潜在关联；可补充数据来源、TDA 方法、指标体系与主要发现。",
      ],
      "通过 TDA 分析英国 LAD 层级性别平等指标，发现教育与健康领域接近平等，但权力与无偿劳动等结构性差异仍呈现显著空间分布。",
    );
    ensureContent(
      zh,
      "project.11.body",
      "通过 TDA 分析英国 LAD 层级性别平等指标，发现教育与健康领域接近平等，但权力与无偿劳动等结构性差异仍呈现显著空间分布。",
    );
    migratePlaceholder(zh, "project.11.tag.one", ["拓扑数据分析"], "TDA");
    migratePlaceholder(zh, "project.11.tag.two", ["LAD 层级"], "LAD Level Analysis");
    migratePlaceholder(zh, "project.11.tag.three", ["性别平等指标"], "GEI");
    ensureContent(zh, "project.11.detail.one.title", "研究对象");
    ensureContent(zh, "project.11.detail.one.body", "以英国地方行政区（LAD）为分析层级，评估性别平等指标与地区人口、社会及经济特征之间的关联。");
    ensureContent(zh, "project.11.detail.two.title", "方法框架");
    ensureContent(zh, "project.11.detail.two.body", "使用拓扑数据分析方法识别高维指标结构，比较不同维度下地方行政区之间的相似性与差异。");
    ensureContent(zh, "project.11.detail.three.title", "分析输出");
    migratePlaceholder(
      zh,
      "project.11.detail.three.body",
      ["通过维度分解与可视化结果呈现指标分布，为后续解释区域差异与结构性特征提供依据。"],
      "基于维度分解、拓扑聚类与区域可视化，得出性别不平等不能仅由南北经济差异解释，政策应面向不同空间集群进行地方化干预。",
    );
    ensureContent(zh, "project.11.detail.three.body", "基于维度分解、拓扑聚类与区域可视化，得出性别不平等不能仅由南北经济差异解释，政策应面向不同空间集群进行地方化干预。");
    migratePlaceholder(zh, "about.skill.one", ["需求拆解"], "需求分析");
    migratePlaceholder(zh, "about.skill.two", ["SQL / 数据清洗"], "SQL / NoSQL");
    migratePlaceholder(zh, "about.skill.three", ["Python 分析", "Python 数据分析"], "Python");
    migratePlaceholder(zh, "about.skill.four", ["Dashboard"], "Power BI / Tableau");
    migratePlaceholder(zh, "about.skill.six", ["Stakeholder 沟通"], "Excel / Power Query");
    ensureContent(zh, "about.skill.seven", "DAX / 数据建模");
    ensureContent(zh, "about.skill.eight", "Dashboard 汇报");
    ensureContent(zh, "about.skill.nine", "用户研究");
    ensureContent(zh, "about.skill.ten", "业务流程梳理");
    migratePlaceholder(zh, "about.skill.eleven", ["Stakeholder 沟通"], "利益相关人沟通");
    migratePlaceholder(zh, "about.skill.twelve", ["Business Storytelling"], "洞察叙事");
    migratePlaceholder(zh, "about.skill.thirteen", ["Critical Thinking"], "批判性思维");
    ensureContent(zh, "about.skill.eleven", "利益相关人沟通");
    ensureContent(zh, "about.skill.twelve", "洞察叙事");
    ensureContent(zh, "about.skill.thirteen", "批判性思维");
    ensureContent(zh, "about.skill.fourteen", "跨团队协作");
    ensureContent(zh, "about.skill.fifteen", "跨文化沟通");
    ensureContent(zh, "about.skill.sixteen", "细节至上");
    ensureContent(zh, "about.skill.seventeen", "项目管理");
    ensureContent(zh, "about.skill.eighteen", "数据质量控制");
    ensureContent(zh, "about.skill.nineteen", "结构化文档写作");
    ensureContent(zh, "about.skill.twenty", "商业敏感度");
    migratePlaceholder(
      zh,
      "education.note",
      ["这里预留位置补充核心课程、研究方向、毕业论文或校园项目。"],
      "结合数据科学、信息系统与信息管理背景，突出研究训练、分析方法与业务理解能力。",
    );
    if (
      zh &&
      zh["education.1.details"] &&
      (zh["education.1.details"].includes("核心课程 / 项目 / 论文方向：待补充") ||
        zh["education.1.details"].includes("Key modules / projects / dissertation direction"))
    ) {
      zh["education.1.details"] =
        "🏅 荣誉：Stellify奖<br>📈 预计成绩：一等学位（70+）<br>📚 核心课程：统计学与机器学习、拓扑数据分析、隐私、保密性与信息披露控制。";
      changed = true;
    }
    if (
      zh &&
      zh["education.2.details"] &&
      (zh["education.2.details"].includes("核心课程 / 项目 / 论文方向：待补充") ||
        zh["education.2.details"].includes("📊 核心课程") ||
        zh["education.2.details"].includes("围绕 Information Systems"))
    ) {
      zh["education.2.details"] =
        "GPA：6.88/7.0<br>🏅 荣誉：2025年塔斯马尼亚大学最优毕业生；院长名录获得者。<br>📌 研究与能力：强化研究设计、系统分析与数据驱动问题解决能力，关注信息系统如何支持业务流程优化、用户需求识别与组织决策。<br>💡 输出能力：文献综述、需求分析、数据建模、研究写作与英文汇报。";
      changed = true;
    }
    if (
      zh &&
      zh["education.3.details"] &&
      (zh["education.3.details"].includes("核心课程 / 项目 / 论文方向：待补充") ||
        zh["education.3.details"].includes("Key modules / projects / dissertation direction") ||
        zh["education.3.details"].includes("GPA：3.75/4.0"))
    ) {
      zh["education.3.details"] =
        "绩点：3.75/4.0（年级前1%）<br>🎓 毕业设计：基于卷积神经网络的加利福尼亚鸟类识别研究（优秀毕业论文）。";
      changed = true;
    }
    if (zh && zh["ai.tool.three.name"] === "Perplexity") {
      zh["ai.tool.three.name"] = "Gemini";
      changed = true;
    }
    if (zh && zh["ai.tool.three.use"] === "行业研究 / 来源检索 / 竞品背景") {
      zh["ai.tool.three.use"] = "多模态理解 / 表格整理 / 内容润色";
      changed = true;
    }
    if (zh && zh["ai.tool.four.value"] === "64%") {
      zh["ai.tool.four.value"] = "20%";
      changed = true;
    }
    if (zh && zh["ai.tool.four.name"] === "GitHub Copilot") {
      zh["ai.tool.four.name"] = "Microsoft Copilot";
      changed = true;
    }
    if (zh && zh["ai.tool.four.use"] === "代码补全 / 数据脚本 / README 优化") {
      zh["ai.tool.four.use"] = "Office 文档 / 会议总结 / 汇报辅助";
      changed = true;
    }
    if (zh && zh["ai.tool.one.use"] === "问题拆解 / SQL 思路 / 汇报文案") {
      zh["ai.tool.one.use"] = "问题定义 / 指标设计 / 分析草稿";
      changed = true;
    }
    if (zh && zh["extra.title"] === "补充资料") {
      zh["extra.title"] = "认证与补充资料";
      changed = true;
    }
    if (zh && zh["cert.kicker"] === "Microsoft Certification") {
      zh["cert.kicker"] = "Certification";
      changed = true;
    }
    if (zh && zh["cert.skill.one"] === "SQL") {
      zh["cert.skill.one"] = "Power BI";
      changed = true;
    }
    if (zh && zh["cert.skill.two"] === "Power BI") {
      zh["cert.skill.two"] = "DAX";
      changed = true;
    }
    if (zh && zh["cert.skill.three"] === "Data Analytics") {
      zh["cert.skill.three"] = "Power Query";
      changed = true;
    }
    if (zh && zh["cert.skill.four"] === "Business Analysis") {
      zh["cert.skill.four"] = "Data Modelling";
      changed = true;
    }
    if (zh && !zh["cert.skill.five"]) {
      zh["cert.skill.five"] = "Data Analytics";
      changed = true;
    }
    if (zh && zh["cert.ielts.issuer"] === "考试机构：British Council IELTS") {
      zh["cert.ielts.issuer"] = "考试机构：British Council";
      changed = true;
    }
    if (zh && zh["cert.ielts.date"] === "总分：7.0") {
      zh["cert.ielts.date"] = "考试时间：2023年10月";
      changed = true;
    }
    if (zh && zh["cert.ielts.score.one"] === "Listening 8.5") {
      zh["cert.ielts.score.one"] = "总分 7.0";
      zh["cert.ielts.score.two"] = "听力 8.5";
      zh["cert.ielts.score.three"] = "阅读 7.0";
      zh["cert.ielts.score.four"] = "写作 6.5";
      zh["cert.ielts.score.five"] = "口语 6.5";
      changed = true;
    }
    if (zh && zh["campus.manchester.one.title"] === "课堂项目") {
      zh["campus.manchester.one.title"] = "Stellify奖";
      changed = true;
    }
    if (
      zh &&
      zh["campus.manchester.one.body"] &&
      (zh["campus.manchester.one.body"].includes("可补充课程中的数据建模") ||
        zh["campus.manchester.one.body"].includes("Ethical Grand Challenges") ||
        zh["campus.manchester.one.body"].includes("硕士生 Stellify"))
    ) {
      zh["campus.manchester.one.body"] =
        "鼓励学生在学习之外参与志愿服务、领导力实践及伦理与社会责任挑战项目，沉淀更完整的个人发展能力。";
      changed = true;
    }
    if (zh && (zh["campus.manchester.two.title"] === "团队协作" || zh["campus.manchester.two.title"] === "职业探索")) {
      zh["campus.manchester.two.title"] = "学生代表";
      changed = true;
    }
    if (
      zh &&
      zh["campus.manchester.two.body"] &&
      (zh["campus.manchester.two.body"].includes("可补充跨文化团队沟通") ||
        zh["campus.manchester.two.body"].includes("career event"))
    ) {
      zh["campus.manchester.two.body"] =
        "作为本专业学生代表，收集并整理同学在学习体验、校园生活、职业发展与心理健康支持等方面的意见建议，向项目团队反馈学生需求并促进沟通改进。";
      changed = true;
    }
    if (
      zh &&
      zh["campus.manchester.three.body"] &&
      (zh["campus.manchester.three.body"].includes("可补充参加的 career event") ||
        zh["campus.manchester.three.body"].includes("BA/DA 求职准备"))
    ) {
      zh["campus.manchester.three.body"] =
        "参加学校 Career Connect 项目，与导师进行一对一 CV Review、面试辅导与求职方向咨询，并参与面向 Data Science 专业的企业宣讲会，持续完善职业定位与求职材料。";
      changed = true;
    }
    if (!en) {
      if (changed) storageSet(STORAGE_KEY, JSON.stringify(savedContent));
      return;
    }
    migratePlaceholder(en, "site.initials", ["YN"], "VG");
    migratePlaceholder(en, "site.brand", ["Your Name"], "Vivi");
    migratePlaceholder(
      en,
      "hero.eyebrow",
      ["Business Analyst / Data Analyst Portfolio"],
      "Business & Data Analytics Portfolio",
    );
    migratePlaceholder(
      en,
      "hero.title",
      ["Turning business ambiguity into data-backed decisions."],
      "Turning business questions into data-backed decisions.",
    );
    migratePlaceholder(
      en,
      "hero.summary",
      [
        "I am building a portfolio for Business Analyst and Data Analyst roles, bringing together internship/work experience, project cases, volunteer work, product thinking, GitHub work, and media content.",
        "A portfolio for Business Analyst and Data Analyst roles, highlighting requirements analysis, data analytics, dashboard storytelling, and cross-functional collaboration.",
      ],
      "A portfolio for roles at the intersection of technology and business, highlighting requirements analysis, data analytics, dashboard storytelling, and cross-functional collaboration.",
    );
    migratePlaceholder(en, "hero.meta.one", ["SQL / Python / Excel"], "Python");
    migratePlaceholder(en, "hero.meta.two", ["Dashboard / KPI / Research"], "SQL / NoSQL");
    migratePlaceholder(en, "hero.meta.three", ["Business Storytelling"], "Power BI / Tableau / Dashboard / KPI");
    if (!en["hero.meta.four"]) {
      en["hero.meta.four"] = "Business Storytelling";
      changed = true;
    }
    migratePlaceholder(en, "volunteer.1.label", ["Community / Campus", "WISE / Campus Volunteer"], "WISE Society / Campus Volunteer");
    migratePlaceholder(en, "volunteer.1.title", ["Volunteer Experience Title", "WISE Event Support Volunteer"], "WISE Society Activity Volunteer");
    migratePlaceholder(
      en,
      "volunteer.1.body",
      [
        "Add community, campus, nonprofit, or organisation work. Focus on responsibilities, people impacted, resources coordinated, and outcomes.",
        "Add your event communication, participant support, material preparation, or team coordination responsibilities.",
      ],
      "Supported around 50 Year 8 students in understanding bridge structures and the construction process, guiding them to build stable bridge models with cardboard, pens, straws, and other materials while encouraging interest in science and engineering, especially among girls.",
    );
    migratePlaceholder(en, "volunteer.1.time", ["Date", "Date to add"], "Activity Support");
    migratePlaceholder(en, "volunteer.1.role", ["Role / Responsibility", "Event Support / Volunteer"], "STEM Outreach");
    if (!en["volunteer.1.focus"]) {
      en["volunteer.1.focus"] = "Women in STEM";
      changed = true;
    }
    migratePlaceholder(en, "volunteer.marathon.label", ["Sports Event / Volunteer"], "Marathon / Volunteer");
    migratePlaceholder(
      en,
      "volunteer.marathon.body",
      [
        "Add your on-site responsibilities, such as route guidance, participant support, team coordination, incident communication, or event-flow execution.",
        "Supported crew room operations through volunteer and crew check-in/out, accreditation and high-visibility vest distribution, equipment organisation, catering support, uniform inventory and breakdown assistance. Her line manager noted that she was reliable, proactive, and contributed positively to smooth operations.",
      ],
      "Supported crew room operations through volunteer and crew check-in/out, accreditation and high-visibility vest distribution, equipment organisation, catering support, uniform inventory and breakdown assistance. The line manager noted that she was reliable, proactive, and contributed positively to smooth operations.",
    );
    migratePlaceholder(en, "volunteer.marathon.time", ["2026"], "Marathon");
    migratePlaceholder(en, "volunteer.marathon.role", ["Event Team / Volunteer"], "Sports Event");
    migratePlaceholder(en, "volunteer.utas.label", ["Cross-university Visit / Interpreting"], "Cross-university Visit / Interpretion");
    migratePlaceholder(
      en,
      "volunteer.utas.title",
      ["Interpreter for UTAS Delegation Visit to Shanghai Ocean University"],
      "Interpreter for the University of Tasmania Delegation Visit to Shanghai Ocean University, Autumn 2024",
    );
    migratePlaceholder(
      en,
      "volunteer.utas.body",
      ["Supported bilingual communication and on-site coordination during a University of Tasmania leadership visit to Shanghai Ocean University."],
      "Guided the University of Tasmania delegation through the Shanghai Ocean University History Museum, providing consecutive interpreting and introducing the university's history to support inter-university exchange and on-site communication.",
    );
    migratePlaceholder(en, "volunteer.utas.time", ["Date to add"], "Interpreting");
    migratePlaceholder(en, "volunteer.utas.role", ["Interpreter / Visit Support"], "Visit Support");
    if (!en["volunteer.utas.focus"]) {
      en["volunteer.utas.focus"] = "Inter-university Collaboration";
      changed = true;
    }
    migratePlaceholder(en, "volunteer.graduation.label", ["Ceremony / Interpreting"], "Graduation Ceremony / Interpretion");
    migratePlaceholder(
      en,
      "volunteer.graduation.title",
      ["Graduation Ceremony Interpreter, AEN College, Shanghai Ocean University"],
      "Graduation Ceremony Interpreter, AIEN Institute, Shanghai Ocean University",
    );
    migratePlaceholder(
      en,
      "volunteer.graduation.body",
      ["Provided bilingual interpreting and ceremony communication support for the 2024 AEN SHOU graduating students ceremony."],
      "Provided full-process Chinese-English interpreting and on-site communication support for the 2024 AIEN Institute graduation ceremony at Shanghai Ocean University, helping ensure smooth ceremony coordination and accurate bilingual information delivery.",
    );
    migratePlaceholder(en, "volunteer.graduation.time", ["2024"], "Graduation Ceremony");
    migratePlaceholder(en, "volunteer.graduation.role", ["Interpreter / Ceremony Support"], "Translation / Interpreting");
    ensureContent(en, "experience.eyebrow", "CAREER TIMELINE");
    migratePlaceholder(en, "experience.title", ["Internship / Work Experience", "Professional Experiences"], "Professional Experience");
    ensureContent(
      en,
      "experience.note",
      "Two internships spanning IT operations, business process improvement, data visualisation, CRM, and compliance research, translating business context into structured analytical outputs.",
    );
    migratePlaceholder(en, "experience.1.time", ["Jun 2025 - Sep 2025"], "Oct 2024 - Mar 2025");
    ensureContent(en, "experience.1.company", "Philips (China) Investment Co., Ltd.");
    migratePlaceholder(
      en,
      "experience.1.title",
      ["Business Analyst Intern · Company Name", "IT Business Specialist Intern · Philips (China) Investment Co., Ltd.", "IT Business Specialist Intern · <strong class=\"experience-company\">Philips (China) Investment Co., Ltd.</strong>"],
      "IT Business Specialist Intern · IT Department",
    );
    migratePlaceholder(
      en,
      "experience.1.body",
      ["Supported requirement interviews, competitor research, and user data analysis; mapped workflows and issue lists, delivered analysis reports, and helped move feature improvements forward.", "Focused on supplier performance evaluation, process automation, Power BI KPI reporting, and cross-functional collaboration, translating IT operations data into actionable management insights."],
      "Focused on supplier performance evaluation, internal process optimisation, Power BI KPI dashboards, and information-security compliance, turning IT operations data into management insights.",
    );
    ensureContent(en, "experience.1.tag.one", "Power BI");
    migratePlaceholder(en, "experience.1.tag.two", ["Process Optimisation"], "Data Analytics");
    migratePlaceholder(en, "experience.1.tag.three", ["Supplier Evaluation"], "Process Optimisation");
    ensureContent(en, "experience.1.tag.four", "Supplier Evaluation");
    ensureContent(en, "experience.1.detail.1.title", "Supplier Performance Evaluation");
    migratePlaceholder(
      en,
      "experience.1.detail.1.body",
      ["Designed and executed 3 in-depth interviews, 8 surveys, and 2 on-site audits to assess quantitative supplier performance, synthesising findings into actionable recommendations with 96.7% satisfaction from senior leadership."],
      "Evaluated supplier performance in collaboration with Finance and Procurement teams, supporting continuous business-improvement planning and achieving 95% satisfaction from internal senior leadership.",
    );
    migratePlaceholder(en, "experience.1.detail.2.title", ["Process Optimisation & Compliance"], "Process Optimisation & System Operations");
    migratePlaceholder(
      en,
      "experience.1.detail.2.body",
      ["Optimised internal billing and account workflows through automation, reducing manual data entry by 36% while maintaining 100% compliance with corporate governance protocols; monitored information system delivery and operations against information security, personal information protection, and general data protection requirements."],
      "Managed daily operations and account administration for the internal reimbursement approval system; prepared user guidance for business users and improved approval efficiency and compliance to 98%.",
    );
    migratePlaceholder(en, "experience.1.detail.3.title", ["KPI Reporting & Visualisation"], "KPI Dashboard");
    migratePlaceholder(
      en,
      "experience.1.detail.3.body",
      ["Built a 2025 IT Department KPI Dashboard in Power BI, consolidating 15 annual business metrics and handling data cleaning, filtering, and visualisation to support budgeting and resource allocation decisions."],
      "Built a 2025 KPI Dashboard in Power BI covering 15 annual business metrics for the IT department; handled data cleaning, filtering, and visualisation to support portfolio adjustment, resource allocation, and strategic investment decisions.",
    );
    migratePlaceholder(en, "experience.1.detail.4.title", ["Cross-functional Delivery & Impact"], "Information Security & Data Compliance");
    migratePlaceholder(
      en,
      "experience.1.detail.4.body",
      ["Partnered with Finance, Procurement, and IT teams to translate business objectives into scalable digital solutions, streamlining reporting cycles by 18% and improving cross-departmental alignment."],
      "Monitored internal IT delivery and external suppliers to ensure delivered and upcoming systems complied with information-security requirements, with cross-border data transfer assessed against personal information protection and general data protection standards.",
    );
    migratePlaceholder(en, "experience.2.time", ["Oct 2024 - Jan 2025"], "Jul 2024 - Sep 2024");
    ensureContent(en, "experience.2.company", "Eurasia Consultis International");
    migratePlaceholder(
      en,
      "experience.2.title",
      ["Data Analyst Assistant · Team / Lab Name", "Pre-sales Consultant Intern (Product Team)", "Pre-sales Consultant Intern (Product Team) · Eurasia Consultis International", "Pre-sales Consultant Intern (Product Team) · <strong class=\"experience-company\">Eurasia Consultis International</strong>", "Pre-sales Consultant Intern · Product Department"],
      "Pre-sales Consultant Intern · Product Team",
    );
    migratePlaceholder(
      en,
      "experience.2.body",
      ["Handled data preparation, metric checks, and visualization charts, helping the team turn raw data into communicable business insights.", "Handled data preparation, metric checks, and visualisation charts, helping the team turn raw data into communicable business insights.", "Supported CRM data management, opportunity pipeline analysis, digital platform advisory, and compliance research to strengthen client relationship operations, platform redesign, and cross-border business compliance."],
      "Supported CRM data management, opportunity analysis, digital platform advisory, and privacy compliance research for client relationship optimisation and cross-border business assessment.",
    );
    ensureContent(en, "experience.2.tag.one", "CRM");
    migratePlaceholder(en, "experience.2.tag.two", ["Platform Advisory"], "Sales Data Analysis");
    migratePlaceholder(en, "experience.2.tag.three", ["Privacy Compliance"], "Digital Product Delivery");
    ensureContent(en, "experience.2.tag.four", "Privacy Compliance");
    migratePlaceholder(en, "experience.2.detail.1.title", ["CRM Management & Optimisation"], "Digital Platform Advisory");
    migratePlaceholder(
      en,
      "experience.2.detail.1.body",
      ["Managed and optimised CRM records for a portfolio of 300+ clients, using segmentation and analysis to increase business development efficiency by 32%."],
      "Supported the project director, design team, and development team in advising clients on official websites, WeChat mini-programmes, enterprise WeChat UI/UX, Drupal backend system upgrades, integration feasibility, delivery planning, and system architecture evaluation.",
    );
    migratePlaceholder(en, "experience.2.detail.2.title", ["Pipeline Analysis & Recommendations"], "CRM & Localisation Strategy");
    migratePlaceholder(
      en,
      "experience.2.detail.2.body",
      ["Performed opportunity pipeline analysis and presented data-driven outreach strategies to senior leadership, driving a 28% increase in C-suite engagement and an 11% improvement in partnership prospecting efficiency."],
      "Assisted the development team in providing localised marketing technology and CRM consulting, including feasibility analysis and strategy recommendations for Salesforce CRM and enterprise WeChat client-marketing tools in the Chinese market.",
    );
    migratePlaceholder(en, "experience.2.detail.3.title", ["Digital Platform Advisory"], "Cross-border Compliance Research");
    migratePlaceholder(
      en,
      "experience.2.detail.3.body",
      ["Advised luxury hospitality clients on official websites, WeChat mini-programmes, enterprise WeChat UI/UX, and Drupal system enhancements; supported stakeholder workshops that reduced implementation risks by 25%."],
      "Supported compliance advisory for foreign companies operating in China, covering private-traffic privacy protection, cross-border data transfer, and ICP filing under personal information protection, cybersecurity, and e-commerce legal frameworks.",
    );
    migratePlaceholder(en, "experience.2.detail.4.title", ["Compliance & Privacy Advisory"], "Opportunity Analysis");
    migratePlaceholder(
      en,
      "experience.2.detail.4.body",
      ["Conducted compliance research on cross-border data transfer, ICP licensing, privacy frameworks, and private traffic operations, supporting European-invested firms in achieving 100% regulatory compliance in China."],
      "Organised client and opportunity information around business needs, platform feasibility, and implementation context, providing structured inputs for pre-sales communication and solution assessment.",
    );
    migratePlaceholder(en, "contact.title", ["Open to BA / DA opportunities"], "Open to potential opportunities");
    migratePlaceholder(
      en,
      "contact.body",
      ["Add your email, LinkedIn, GitHub, resume link, target role type, and preferred locations here."],
      "Add your email, LinkedIn, GitHub, target role type, and preferred locations here.",
    );
    migratePlaceholder(en, "contact.email", ["your.email@example.com"], "E-mail: yunweigu@outlook.com");
    migratePlaceholder(en, "contact.github", ["GitHub profile", "Add link"], "GitHub: https://github.com/yunweig23");
    migratePlaceholder(
      en,
      "contact.linkedin",
      ["LinkedIn profile", "Add link", "https://www.linkedin.com/in/yunweig/"],
      "LinkedIn: https://www.linkedin.com/in/yunweig/",
    );
    migratePlaceholder(en, "project.1.type", ["Data Analysis Case Study", "Data Insights / Visualization / Databases", "Data Insights / Visualisation / Databases"], "Data Analytics & Business Intelligence");
    migratePlaceholder(en, "project.1.time", ["2026", "Date to add"], "Ongoing");
    migratePlaceholder(
      en,
      "project.1.title",
      ["E-commerce Funnel and Retention Analysis", "Data Analytics Project 01", "Project title to add"],
      "Deepening the Understanding of Shipping Emissions in the North Sea through an Interactive Data Visualisation",
    );
    migratePlaceholder(
      en,
      "project.1.body",
      [
        "Cleaned order and behavior data with SQL/Python, decomposed the conversion path from visit to purchase, identified drop-off points, and proposed recommendation and promotion improvements.",
        "Cleaned order and behaviour data with SQL/Python, decomposed the conversion path from visit to purchase, identified drop-off points, and proposed recommendation and promotion improvements.",
        "Add the project context, data source, analytical objective, tools used, key metrics, and final insights.",
      ],
      "Ongoing project using FuelEU shipping emissions data to prototype an interactive North Sea route visualisation, focusing on CO₂ flows between the UK and major European partner countries.",
    );
    migratePlaceholder(en, "project.1.tag.one", ["SQL", "SQL / Python"], "Python");
    migratePlaceholder(en, "project.1.tag.two", ["Python", "Dashboard"], "3D Visualisation");
    migratePlaceholder(en, "project.1.tag.three", ["Cohort", "Insight"], "Spatial Data Analysis");
    ensureContent(en, "project.1.detail.one.title", "Project Context");
    ensureContent(en, "project.1.detail.one.body", "Develops a North Sea shipping emissions visualisation prototype connected to collaboration between the Tyrell Centre for Climate Change Research and AMBS, with potential integration into the university's Data Visualisation Observatory.");
    migrateContainingText(en, "project.1.detail.one.body", ["Tyrell Centre for Climate Change Research and AMBS"], "Develops a North Sea shipping emissions visualisation prototype connected to collaboration between the Tyrell Centre for Climate Change Research and AMBS, with potential integration into the university\'s Data Visualisation Observatory.");
    ensureContent(en, "project.1.detail.two.title", "Current Workflow");
    ensureContent(en, "project.1.detail.two.body", "Uses FuelEU shipping emissions data to identify high-emission UK-Europe route pairs, vessel-type structure, and CO₂ scale, with Python supporting data preparation, spatial mapping, and visual prototype design.");
    ensureContent(en, "project.1.detail.three.title", "Expected Output");
    ensureContent(en, "project.1.detail.three.body", "A Streamlit-based interactive visualisation app is planned to show emissions patterns across major UK links with the Netherlands, Belgium, France, Germany, Norway, and other North Sea routes.");
    ensureContent(en, "project.1.detail.four.title", "Tools & Skills");
    ensureContent(en, "project.1.detail.four.body", "Python / Streamlit / 3D Visualisation / Spatial Data Analysis");
    migratePlaceholder(en, "project.2.type", ["Business Analysis Project", "Data Insights / Visualization / Databases", "Data Insights / Visualisation / Databases"], "Data Analytics & Business Intelligence");
    migratePlaceholder(en, "project.2.time", ["2025", "Date to add"], "May 2026");
    migratePlaceholder(en, "project.2.title", ["SaaS KPI Dashboard Design", "Data Analytics Project 02"], "Impact Analysis of Oxford Road Station Closure");
    migratePlaceholder(
      en,
      "project.2.body",
      [
        "Mapped business goals, key metrics, and stakeholder scenarios into dashboard architecture for weekly tracking of growth, activation, and retention.",
        "Add the cleaning process, metric framework, visualisation design, business problem breakdown, and insight communication.",
      ],
      "Uses predictive modelling and spatial flow visualisation to assess how the Oxford Road Station closure may redistribute demand towards Piccadilly, Victoria, and key Corridor hotspots.",
    );
    migratePlaceholder(en, "project.2.tag.one", ["KPI", "Power BI / Tableau"], "Predictive Modelling");
    migratePlaceholder(en, "project.2.tag.two", ["Power BI", "KPI"], "Urban Planning");
    migratePlaceholder(en, "project.2.tag.three", ["Stakeholder", "Business Storytelling"], "Spatial Data Analysis");
    ensureContent(en, "project.2.detail.one.title", "Project Context");
    ensureContent(en, "project.2.detail.one.body", "Assessed how the Oxford Road Station closure could redistribute pedestrian demand towards Manchester Piccadilly, Manchester Victoria, and key Corridor destinations.");
    ensureContent(en, "project.2.detail.two.title", "Modelling Workflow");
    ensureContent(en, "project.2.detail.two.body", "Combined forecast demand, route distance, walking time, and spatial hotspot mapping to identify likely transfer paths and Corridor pressure points.");
    ensureContent(en, "project.2.detail.three.title", "Key Findings");
    ensureContent(en, "project.2.detail.three.body", "Estimated around 17,515 additional pedestrians per day across four Corridor clusters; University of Manchester / MRI (~8,929/day) and Circle Square (~5,120/day) were the highest-priority hotspots.");
    ensureContent(en, "project.2.detail.four.title", "Tools & Skills");
    ensureContent(en, "project.2.detail.four.body", "Predictive modelling / urban planning / spatial data analysis / flow visualisation");
    migratePlaceholder(en, "project.3.type", ["Product / GitHub", "Data Insights / Visualization / Databases", "Data Insights / Visualisation / Databases"], "Data Analytics & Business Intelligence");
    migratePlaceholder(en, "project.3.time", ["Ongoing"], "Date to add");
    migratePlaceholder(en, "project.3.time", ["Date to add", "Mar 2025"], "March 2025");
    migratePlaceholder(en, "project.3.title", ["Personal Analytics Portfolio and GitHub Repository", "Database Project 03"], "Philips 2025 IT Department KPI Dashboard");
    migratePlaceholder(
      en,
      "project.3.body",
      [
        "Use this space for GitHub links, README highlights, product prototypes, visualization screenshots, and evidence of productized analysis.",
        "Use this space for GitHub links, README highlights, product prototypes, visualisation screenshots, and evidence of productised analysis.",
        "Add database design, query optimisation, data modelling, ER diagrams, NoSQL, or data management work.",
      ],
      "Built a Power BI KPI dashboard from project-team Excel data, covering 15 annual IT KPIs across service management, system performance, cybersecurity, project delivery, financial value, and people culture; most targets were manually defined, while DAX calculated achievement rates, target variance, and performance status dynamically.",
    );
    migrateContainingText(
      en,
      "project.3.body",
      ["Add database design", "ER diagrams", "NoSQL", "data management work"],
      "Built a Power BI KPI dashboard from project-team Excel data, covering 15 annual IT KPIs across service management, system performance, cybersecurity, project delivery, financial value, and people culture; most targets were manually defined, while DAX calculated achievement rates, target variance, and performance status dynamically.",
    );
    migratePlaceholder(en, "project.3.tag.one", ["GitHub", "SQL / NoSQL"], "Power BI");
    migratePlaceholder(en, "project.3.tag.two", ["README", "Data Modeling", "Data Modelling"], "DAX");
    migratePlaceholder(en, "project.3.tag.three", ["Portfolio", "Database"], "Excel Data");
    ensureContent(en, "project.3.tag.four", "KPI Analysis");
    ensureContent(en, "project.3.detail.one.title", "KPI Framework");
    ensureContent(en, "project.3.detail.one.body", "The dashboard covers 15 IT department KPIs; the indicators below are examples, grouped into service management, system performance, cybersecurity, project delivery, financial and business value, and people culture for executive-level navigation.");
    ensureContent(en, "project.3.detail.two.title", "Data Basis & Target Setting");
    ensureContent(en, "project.3.detail.two.body", "The main analysis was based on project-team Excel data, including field preparation, metric definition checks, data cleaning, and model structuring; most KPI targets were manually defined, so the dashboard focused on structured monitoring and visual communication.");
    ensureContent(en, "project.3.detail.three.title", "DAX Logic");
    ensureContent(en, "project.3.detail.three.body", "The landing page includes a 15-KPI index whose labels update automatically from the underlying data. DAX calculates achievement rate, target variance, and performance status, classifying KPIs as Achieved, Nearly Achieved, or Not Achieved, with Red / Amber / Green visual states.");
    ensureContent(en, "project.3.detail.four.title", "Tools & Skills");
    ensureContent(en, "project.3.detail.four.body", "Power BI / DAX / Excel Data Preparation / KPI Performance Analysis");
    migratePlaceholder(en, "project.4.type", ["Data Insights / Visualization / Databases", "Data Insights / Visualisation / Databases"], "Data Analytics & Business Intelligence");
    migratePlaceholder(en, "project.4.time", ["Date to add", "Dec 2024", "December 2024"], "December 2025");
    migratePlaceholder(en, "project.4.title", ["Visualization Reporting Project 04", "Visualisation Reporting Project 04"], "Monopoly - Manchester Uni Version");
    migratePlaceholder(
      en,
      "project.4.body",
      [
        "Add dashboard screenshots, reporting structure, metric interpretation, user scenarios, and how data findings become recommendations.",
        "Add SQL database design, game data table structure, query logic, and rule implementation.",
      ],
      "Designed and implemented a relational database for University Tycoon, translating board-game requirements into SQLite tables, constraints, queries, and trigger-based game logic.",
    );
    migratePlaceholder(en, "project.4.tag.one", ["Visualization", "Visualisation", "SQL Database"], "SQLite");
    migratePlaceholder(en, "project.4.tag.two", ["Dashboard", "Game Data"], "Database Design");
    migratePlaceholder(en, "project.4.tag.three", ["Reporting", "Schema Design"], "Triggers");
    ensureContent(en, "project.4.detail.one.title", "Project Context");
    ensureContent(en, "project.4.detail.one.body", "Modelled players, tokens, board locations, buildings, special events, credit balances, and turn-by-turn audit records for a Manchester-themed University Tycoon game.");
    ensureContent(en, "project.4.detail.two.title", "Database Implementation");
    ensureContent(en, "project.4.detail.two.body", "Delivered the ERD, SQLite schema, initial data population, and leaderboard view to report player balances, locations, and owned buildings.");
    ensureContent(en, "project.4.detail.three.title", "Process");
    ensureContent(en, "project.4.detail.three.body", "Used six SQL triggers to automate building purchases, tuition payments, Welcome Week bonuses, suspension status, RAG/Hearing events, and audit-log updates.");
    ensureContent(en, "project.4.detail.four.title", "Final Output");
    ensureContent(en, "project.4.detail.four.body", "Produced runnable SQL scripts, view queries, three rounds of gameplay updates, and a concise design defence that turned complex rules into testable database logic.");
    migratePlaceholder(en, "project.5.type", ["Deep Learning / Algorithms", "Deep Learning & Algorithmic Modeling"], "Deep Learning & Algorithmic Modelling");
    migratePlaceholder(en, "project.5.time", ["Date to add"], "April 2025");
    migratePlaceholder(en, "project.5.title", ["Deep Learning Project 01"], "California Bird Species Recognition Based on Convolutional Neural Networks");
    migratePlaceholder(
      en,
      "project.5.body",
      ["Add the modelling goal, dataset, model architecture, training process, evaluation metrics, and final performance."],
      "Built a CNN-based bird recognition workflow on the CUB200-2011 dataset, comparing and optimising VGG16 and ResNet-50; the optimised ResNet-50 reached 93.55% validation accuracy.",
    );
    migratePlaceholder(en, "project.5.tag.one", ["Deep Learning"], "Python");
    migratePlaceholder(en, "project.5.tag.two", ["Modelling", "Modeling"], "Deep Learning");
    migratePlaceholder(en, "project.5.tag.three", ["Evaluation"], "CNN");
    ensureContent(en, "project.5.detail.one.title", "Project Context");
    ensureContent(en, "project.5.detail.one.body", "Focused on fine-grained California bird species recognition, where similar visual features, pose variation, and complex natural backgrounds make classification difficult.");
    ensureContent(en, "project.5.detail.two.title", "Modelling Approach");
    ensureContent(en, "project.5.detail.two.body", "Used Python for image cleaning, data augmentation, and sample processing, then trained and compared transfer-learning CNN models based on VGG16 and ResNet-50.");
    ensureContent(en, "project.5.detail.three.title", "Key Result");
    ensureContent(en, "project.5.detail.three.body", "The optimised ResNet-50 performed best, reaching nearly 98% training accuracy and improving validation accuracy from 44.75% to 93.55%, outperforming VGG16 overall.");
    ensureContent(en, "project.5.detail.four.title", "Tools & Skills");
    ensureContent(en, "project.5.detail.four.body", "Python / CNN / Transfer Learning / Model Evaluation");
    migratePlaceholder(en, "project.6.type", ["Web Development / Product Build", "Web Product & Frontend Development"], "Web Product & Database Design");
    migratePlaceholder(en, "project.6.time", ["Date to add"], "Nov 2024");
    migratePlaceholder(en, "project.6.title", ["Web Development Project 01"], "Dunhuang-themed Virtual Art Gallery");
    migratePlaceholder(
      en,
      "project.6.body",
      ["Add the product objective, page structure, interaction design, front-end implementation, deployment approach, and GitHub link."],
      "A 50-member team project. Led a 4-person database subgroup across user requirements, schema design, and database implementation, supporting artwork browsing, search/filtering, comments/likes, and user accounts.",
    );
    migratePlaceholder(en, "project.6.tag.one", ["Frontend"], "Database Design");
    migratePlaceholder(en, "project.6.tag.two", ["UX"], "User Requirements");
    migratePlaceholder(en, "project.6.tag.three", ["GitHub"], "Team Collaboration");
    ensureContent(en, "project.6.detail.one.title", "Project Context");
    ensureContent(en, "project.6.detail.one.body", "Built Desert Oasis, a Dunhuang-themed virtual art gallery that presents artworks, cultural context, and user journeys through a digital exhibition experience.");
    ensureContent(en, "project.6.detail.two.title", "Scope & Role");
    ensureContent(en, "project.6.detail.two.body", "In a 50-member project, served as Team Phoenix lead and coordinated cross-team resources while leading a 4-person database subgroup across requirements analysis, data planning, ER modelling, schema design, and implementation planning.");
    ensureContent(en, "project.6.detail.three.title", "Key Output");
    ensureContent(en, "project.6.detail.three.body", "Delivered the database design, data collection plan, implementation foundation, and V2.0 installation/user manual covering login, artwork browsing, search/filtering, comments/likes, shopping, privacy terms, and feedback support.");
    ensureContent(en, "project.6.detail.four.title", "Tools & Skills");
    ensureContent(en, "project.6.detail.four.body", "User Requirements / Database Design / Documentation / Cross-team Delivery");
    migratePlaceholder(en, "project.7.type", ["Web Development / Product Build", "Web Product & Frontend Development"], "Web Product & System Development");
    migratePlaceholder(en, "project.7.time", ["Date to add"], "Dec 2023");
    migratePlaceholder(en, "project.7.title", ["Web Development Project 02"], "Market Master Ecommerce Website");
    migratePlaceholder(
      en,
      "project.7.body",
      ["Add system features, user flows, page components, data interaction, or demo evidence."],
      "Designed and built Market Master, an ecommerce website prototype covering frontend pages, backend logic, and a complete database, with role-based access for guests, registered users, and administrators.",
    );
    migratePlaceholder(en, "project.7.tag.one", ["Web App"], "Full-stack Development");
    migratePlaceholder(en, "project.7.tag.two", ["Prototype"], "Prototype");
    migratePlaceholder(en, "project.7.tag.three", ["Demo"], "Demo");
    ensureContent(en, "project.7.detail.one.title", "Project Context");
    ensureContent(en, "project.7.detail.one.body", "Built Market Master as an ecommerce course project prototype, simulating a realistic online shopping journey across product browsing, user accounts, shopping cart behaviour, and checkout.");
    ensureContent(en, "project.7.detail.two.title", "System Features");
    ensureContent(en, "project.7.detail.two.body", "Implemented three access levels for guests, registered users, and administrators, including login, product search, product-detail pages, cart management, and checkout interactions.");
    ensureContent(en, "project.7.detail.three.title", "Development Scope");
    ensureContent(en, "project.7.detail.three.body", "Delivered frontend interfaces, backend business logic, and database design for product, user, cart, order, and permission data, creating a complete browsing-to-checkout demo flow.");
    ensureContent(en, "project.7.detail.four.title", "Tools & Skills");
    ensureContent(en, "project.7.detail.four.body", "Full-stack Development / Prototype / Database Design / Demo");
    migratePlaceholder(en, "project.8.type", ["Cybersecurity / Privacy", "Cybersecurity & Privacy Computing"], "AI Governance & Privacy Compliance");
    migratePlaceholder(en, "project.8.time", ["Date to add"], "Jul 2025");
    migratePlaceholder(en, "project.8.title", ["Cybersecurity Project 01"], "Tongji University AI Safety and Rule of Law Summer Training Camp");
    migratePlaceholder(
      en,
      "project.8.body",
      ["Add the security problem, risk scenario, analysis method, mitigation approach, and final recommendation.", "Joined seminars and site visits on generative AI, focusing on algorithm ethics, data security, and privacy protection; led a six-person team comparing AI regulatory frameworks across China, the US, and the EU, producing a compliance analysis report and presentation."],
      "Joined Tongji University's AI Safety and Rule of Law summer training camp, exploring algorithm ethics, data security, and privacy compliance in generative AI; served as leader and presenter for a six-person team comparing Chinese, US, and EU regulatory frameworks and producing an enterprise compliance analysis.",
    );
    migrateContainingText(
      en,
      "project.8.body",
      ["Add the security problem", "risk scenario", "mitigation approach", "Joined seminars and site visits"],
      "Joined Tongji University's AI Safety and Rule of Law summer training camp, exploring algorithm ethics, data security, and privacy compliance in generative AI; served as leader and presenter for a six-person team comparing Chinese, US, and EU regulatory frameworks and producing an enterprise compliance analysis.",
    );
    migratePlaceholder(en, "project.8.tag.one", ["Cybersecurity"], "AI Governance");
    migratePlaceholder(en, "project.8.tag.two", ["Risk"], "Algorithm Ethics");
    migratePlaceholder(en, "project.8.tag.three", ["Mitigation"], "Privacy Compliance");
    ensureContent(en, "project.8.detail.one.title", "Project Context");
    ensureContent(en, "project.8.detail.one.body", "Attended Tongji University's AI Safety and Rule of Law Summer Training Camp, combining seminars and site visits around generative AI, algorithm ethics, data security, privacy protection, and regulatory compliance.");
    ensureContent(en, "project.8.detail.two.title", "Team Role");
    ensureContent(en, "project.8.detail.two.body", "Served as group leader and presenter for a six-person team, coordinating research, regulatory framework comparison, argument synthesis, and final delivery.");
    ensureContent(en, "project.8.detail.three.title", "Analytical Output");
    ensureContent(en, "project.8.detail.three.body", "Compared the major differences between Chinese, US, and EU AI governance systems across regulatory approach, algorithm transparency, data-security accountability, privacy requirements, and enterprise compliance pressure.");
    ensureContent(en, "project.8.detail.four.title", "Tools & Skills");
    ensureContent(en, "project.8.detail.four.body", "AI Governance / Algorithm Ethics / Privacy Compliance / Presentation");
    migratePlaceholder(en, "project.9.type", ["Cybersecurity / Privacy", "Cybersecurity & Privacy Computing"], "Cybersecurity & AI Solutions");
    migratePlaceholder(en, "project.9.time", ["Date to add"], "Nov 2023");
    migratePlaceholder(en, "project.9.title", ["Privacy Protection Project 02"], "Deloitte CyberAce Cybersecurity Training Camp");
    migratePlaceholder(
      en,
      "project.9.body",
      [
        "Add privacy protection mechanisms, disclosure control, compliance context, evaluation method, and project outputs.",
        "Led a team in the Deloitte x AWS CyberAce cybersecurity training camp and reached the finals; in the AI track, designed COSEC, a generative-AI maintenance solution based on a simulated client RFP, covering requirements analysis, data processing, competitor analysis, and market research.",
        "Led a team to the finals of the Deloitte x AWS CyberAce cybersecurity training camp, translating a simulated client RFP into business pain points, data needs, and security scenarios while designing COSEC, a generative-AI operations solution; the project integrated data processing, competitor analysis, market research, and final pitching, demonstrating end-to-end analytical delivery from client need framing to solution design.",
      ],
      "Led a team to the Deloitte x AWS CyberAce finals, translating a simulated client RFP into security scenarios and business requirements, designing the COSEC generative-AI operations solution, and delivering competitor research, solution rationale, and the final pitch.",
    );
    migrateContainingText(
      en,
      "project.9.body",
      ["Add privacy protection", "Led a team in the Deloitte", "Led a team to the finals"],
      "Led a team to the Deloitte x AWS CyberAce finals, translating a simulated client RFP into security scenarios and business requirements, designing the COSEC generative-AI operations solution, and delivering competitor research, solution rationale, and the final pitch.",
    );
    migratePlaceholder(en, "project.9.tag.one", ["Privacy"], "Cybersecurity");
    migratePlaceholder(en, "project.9.tag.two", ["Disclosure Control"], "Artificial Intelligence");
    migratePlaceholder(en, "project.9.tag.three", ["Compliance"], "User Requirements Analysis");
    ensureContent(en, "project.9.tag.four", "RFP Response");
    ensureContent(en, "project.9.detail.one.title", "Project Context");
    ensureContent(en, "project.9.detail.one.body", "Joined the 2023 CyberAce cybersecurity training camp co-hosted by Deloitte and AWS and reached the finals, working across enterprise cybersecurity, generative AI application, and client-response scenarios.");
    ensureContent(en, "project.9.detail.two.title", "Solution Design");
    ensureContent(en, "project.9.detail.two.body", "In the AI track, led the team in designing COSEC, a generative-AI maintenance solution based on a simulated client RFP, clarifying use cases, target users, core features, and delivery logic.");
    ensureContent(en, "project.9.detail.three.title", "Analysis Process");
    ensureContent(en, "project.9.detail.three.body", "Coordinated data collection and processing, competitor analysis, and market research, translating client requirements into solution rationale and final presentation materials.");
    ensureContent(en, "project.9.detail.four.title", "Tools & Skills");
    ensureContent(en, "project.9.detail.four.body", "Cybersecurity / Artificial Intelligence / User Requirements Analysis / RFP Response");
    migratePlaceholder(en, "project.10.type", ["Cybersecurity / Privacy", "Cybersecurity & Privacy Computing"], "LegalTech & Data Compliance");
    migratePlaceholder(en, "project.10.time", ["Date to add"], "May 2023");
    migratePlaceholder(en, "project.10.title", ["Security Analysis Project 03"], "Field Research");
    migratePlaceholder(
      en,
      "project.10.body",
      ["Add threat modelling, security auditing, vulnerability analysis, access control, or security policy design."],
      "Initiated and led a four-person field research interview with Shihui Partners Shanghai, designing 18 progressive questions around personal information protection, cross-border data transfer, cybersecurity, and generative AI, then coordinating the on-site English interview, multi-camera recording, subtitled video, and individual report.",
    );
    migrateContainingText(
      en,
      "project.10.body",
      ["Add threat", "security auditing", "vulnerability analysis"],
      "Initiated and led a four-person field research interview with Shihui Partners Shanghai, designing 18 progressive questions around personal information protection, cross-border data transfer, cybersecurity, and generative AI, then coordinating the on-site English interview, multi-camera recording, subtitled video, and individual report.",
    );
    migratePlaceholder(en, "project.10.tag.one", ["Security Analysis"], "Field Research");
    migratePlaceholder(en, "project.10.tag.two", ["Threat Modelling"], "English Interview");
    migratePlaceholder(en, "project.10.tag.three", ["Access Control"], "Data Compliance");
    ensureContent(en, "project.10.tag.four", "LegalTech");
    ensureContent(en, "project.10.detail.one.title", "Research Context");
    ensureContent(en, "project.10.detail.one.body", "Selected Shihui Partners Shanghai as the research subject and interviewed an English-qualified lawyer specialising in cybersecurity, personal information protection, data compliance, and cross-border transactions to understand information systems and data management from a legal perspective.");
    ensureContent(en, "project.10.detail.two.title", "Interview Design");
    ensureContent(en, "project.10.detail.two.body", "As one of the initiators and interviewers, coordinated interviewee outreach, timing, location, and research preparation, then helped structure 18 progressive English questions across firm operations, legal expertise, team culture, and individual development.");
    ensureContent(en, "project.10.detail.three.title", "Key Insights");
    ensureContent(en, "project.10.detail.three.body", "Synthesised findings on PIPL, GDPR, cross-border data transfer, data mapping, encryption, pseudonymisation, anonymisation, law-firm digital platforms, and the compliance implications of generative AI.");
    ensureContent(en, "project.10.detail.four.title", "Tools & Skills");
    ensureContent(en, "project.10.detail.four.body", "Field Research / English Interview / Data Compliance / Video Editing");
    migratePlaceholder(en, "project.11.type", ["Data Insights / Visualization / Databases", "Data Insights / Visualisation / Databases"], "Data Analytics & Business Intelligence");
    migratePlaceholder(en, "project.11.time", ["Date to add"], "April 2026");
    migratePlaceholder(
      en,
      "project.11.title",
      ["Evaluate the Links between UK Gender Equality Indicators and Local Authority District Characteristics using Topological Data Analysis Methods"],
      "UK Gender Equality & LAD Characteristics: A TDA Study",
    );
    migratePlaceholder(
      en,
      "project.11.body",
      [
        "Analyses UK Local Authority District (LAD) level data to explore links between gender equality indicators and local characteristics; add data sources, TDA workflow, metric design, and key findings.",
        "Uses TDA to examine how UK gender equality indicators relate to LAD-level demographic, social, and economic characteristics.",
      ],
      "Uses TDA to analyse UK LAD-level gender equality indicators, showing broad parity in education and health while structural gaps in power and unpaid work remain spatially uneven.",
    );
    migratePlaceholder(en, "project.11.tag.one", ["Topological Data Analysis"], "TDA");
    migratePlaceholder(en, "project.11.tag.two", ["LAD Level"], "LAD Level Analysis");
    migratePlaceholder(en, "project.11.tag.three", ["Gender Equality Indicators"], "GEI");
    ensureContent(en, "project.11.detail.one.title", "Research Scope");
    ensureContent(en, "project.11.detail.one.body", "Evaluates UK Local Authority District (LAD) level data to examine links between gender equality indicators and regional demographic, social, and economic characteristics.");
    ensureContent(en, "project.11.detail.two.title", "Methodological Framework");
    ensureContent(en, "project.11.detail.two.body", "Applies topological data analysis methods to identify high-dimensional indicator structures and compare similarities and differences across LADs.");
    ensureContent(en, "project.11.detail.three.title", "Analytical Output");
    migratePlaceholder(
      en,
      "project.11.detail.three.body",
      ["Uses dimensional decomposition and visualisation outputs to support interpretation of regional variation and structural patterns."],
      "Based on dimensional decomposition, topological clustering, and regional visualisation, the analysis concludes that UK gender inequality cannot be explained by the North-South divide alone and requires place-based policy responses.",
    );
    ensureContent(en, "project.11.detail.three.body", "Based on dimensional decomposition, topological clustering, and regional visualisation, the analysis concludes that UK gender inequality cannot be explained by the North-South divide alone and requires place-based policy responses.");
    migratePlaceholder(en, "about.skill.one", ["Requirement Framing"], "Requirements Analysis");
    migratePlaceholder(en, "about.skill.two", ["SQL / Data Cleaning"], "SQL / NoSQL");
    migratePlaceholder(en, "about.skill.three", ["Python Analysis", "Python Analytics"], "Python");
    migratePlaceholder(en, "about.skill.four", ["Dashboarding"], "Power BI / Tableau");
    migratePlaceholder(en, "about.skill.six", ["Stakeholder Communication"], "Excel / Power Query");
    ensureContent(en, "about.skill.seven", "DAX / Data Modelling");
    ensureContent(en, "about.skill.eight", "Dashboard Reporting");
    ensureContent(en, "about.skill.nine", "User Research");
    ensureContent(en, "about.skill.ten", "Business Process Mapping");
    ensureContent(en, "about.skill.eleven", "Stakeholder Communication");
    ensureContent(en, "about.skill.twelve", "Business Storytelling");
    ensureContent(en, "about.skill.thirteen", "Critical Thinking");
    ensureContent(en, "about.skill.fourteen", "Cross-functional Collaboration");
    ensureContent(en, "about.skill.fifteen", "Cross-cultural Communication");
    ensureContent(en, "about.skill.sixteen", "Attention to Detail");
    ensureContent(en, "about.skill.seventeen", "Project Management");
    ensureContent(en, "about.skill.eighteen", "Data Quality Control");
    ensureContent(en, "about.skill.nineteen", "Structured Documentation");
    ensureContent(en, "about.skill.twenty", "Business Acumen");
    migratePlaceholder(
      en,
      "education.note",
      ["Space reserved for key modules, research interests, dissertation topics, or campus projects."],
      "A foundation across data science, information systems, and information management, with emphasis on research training, analytical methods, and business understanding.",
    );
    if (
      en["education.1.details"] === "Key modules / projects / dissertation direction: to be added." ||
      en["education.1.details"]?.includes("核心课程 / 项目 / 论文方向")
    ) {
      en["education.1.details"] =
        "🏅 Honour: Stellify Award<br>📈 Expected grade: First Class / Distinction equivalent (70+)<br>📚 Core modules: Statistics and Machine Learning, Topological Data Analysis, Privacy, Confidentiality and Disclosure Control.";
      changed = true;
    }
    if (en["education.2.degree"] === "Bachelor · Information Systems") {
      en["education.2.degree"] = "BSc · Information Systems";
      changed = true;
    }
    if (
      en["education.2.details"] === "Key modules / projects / dissertation direction: to be added." ||
      en["education.2.details"].includes("📊 Key modules") ||
      en["education.2.details"].includes("Completed an honours pathway") ||
      en["education.2.details"].includes("GPA: 6.88/7.0<br>🏅 Honours: 2025 University of Tasmania Best Graduate")
    ) {
      en["education.2.details"] =
        "GPA: 6.88/7.0 (Top 1)<br>🏅 Honours: 2025 UTAS Roll of Excellence; Recipient of the Top Graduate Award, Class of 2025.<br>📌 Research and capability: strengthened research design, systems analysis, and data-driven problem solving, with a focus on how information systems support business process optimisation, user needs identification, and organisational decision-making.<br>💡 Communication: literature review, requirements analysis, data modelling, research writing, and English presentation.";
      changed = true;
    }
    if (en["education.3.degree"] === "Bachelor · Information Management and Information Systems") {
      en["education.3.degree"] = "BSc · Information Management and Information Systems";
      changed = true;
    }
    if (
      en["education.3.details"] === "Key modules / projects / dissertation direction: to be added." ||
      en["education.3.details"]?.includes("核心课程 / 项目 / 论文方向") ||
      en["education.3.details"]?.includes("GPA: 3.75/4.0<br>")
    ) {
      en["education.3.details"] =
        "GPA: 3.75/4.0 (Top 1%)<br>🎓 Dissertation: California bird species recognition based on convolutional neural networks (Outstanding Undergraduate Dissertation).";
      changed = true;
    }
    migratePlaceholder(en, "campus.shou.one.title", ["English Communication"], "English Language Capability");
    if (en["ai.tool.three.name"] === "Perplexity") {
      en["ai.tool.three.name"] = "Gemini";
      changed = true;
    }
    if (en["ai.tool.three.use"] === "Industry research / source discovery / competitor context") {
      en["ai.tool.three.use"] = "Multimodal understanding / spreadsheet cleanup / copy refinement";
      changed = true;
    }
    if (en["ai.tool.four.value"] === "64%") {
      en["ai.tool.four.value"] = "20%";
      changed = true;
    }
    if (en["ai.tool.four.name"] === "GitHub Copilot") {
      en["ai.tool.four.name"] = "Microsoft Copilot";
      changed = true;
    }
    if (en["ai.tool.four.use"] === "Code completion / data scripts / README refinement") {
      en["ai.tool.four.use"] = "Office documents / meeting summaries / presentation support";
      changed = true;
    }
    if (en["ai.tool.one.use"] === "Problem framing / SQL ideas / reporting copy") {
      en["ai.tool.one.use"] = "Problem framing / metric design / analysis drafts";
      changed = true;
    }
    if (en["extra.title"] === "Additional Materials") {
      en["extra.title"] = "Credentials & Additional Materials";
      changed = true;
    }
    if (en["cert.kicker"] === "Microsoft Certification") {
      en["cert.kicker"] = "Certification";
      changed = true;
    }
    if (en["cert.skill.one"] === "SQL") {
      en["cert.skill.one"] = "Power BI";
      changed = true;
    }
    if (en["cert.skill.two"] === "Power BI") {
      en["cert.skill.two"] = "DAX";
      changed = true;
    }
    if (en["cert.skill.three"] === "Data Analytics") {
      en["cert.skill.three"] = "Power Query";
      changed = true;
    }
    if (en["cert.skill.four"] === "Business Analysis") {
      en["cert.skill.four"] = "Data Modelling";
      changed = true;
    }
    if (!en["cert.skill.five"]) {
      en["cert.skill.five"] = "Data Analytics";
      changed = true;
    }
    if (en["cert.ielts.issuer"] === "Test provider: British Council IELTS") {
      en["cert.ielts.issuer"] = "Test provider: British Council";
      changed = true;
    }
    if (en["cert.ielts.date"] === "Overall band: 7.0") {
      en["cert.ielts.date"] = "Test date: Oct 2023";
      changed = true;
    }
    if (en["cert.ielts.score.one"] === "Listening 8.5") {
      en["cert.ielts.score.one"] = "Overall 7.0";
      en["cert.ielts.score.two"] = "Listening 8.5";
      en["cert.ielts.score.three"] = "Reading 7.0";
      en["cert.ielts.score.four"] = "Writing 6.5";
      en["cert.ielts.score.five"] = "Speaking 6.5";
      changed = true;
    }
    if (en["campus.manchester.one.title"] === "Course Projects") {
      en["campus.manchester.one.title"] = "Stellify Award";
      changed = true;
    }
    if (
      en["campus.manchester.one.body"] &&
      (en["campus.manchester.one.body"].includes("Add data modelling") ||
        en["campus.manchester.one.body"].includes("The Stellify Award for Masters Students") ||
        en["campus.manchester.one.body"].includes("How it works"))
    ) {
      en["campus.manchester.one.body"] =
        "Encourages students to take part in volunteering, leadership practice, and Ethical Grand Challenges beyond academic study, building a fuller foundation for personal development.";
      changed = true;
    }
    if (en["campus.manchester.two.title"] === "Team Collaboration" || en["campus.manchester.two.title"] === "Career Exploration") {
      en["campus.manchester.two.title"] = "Student Representative";
      changed = true;
    }
    if (
      en["campus.manchester.two.body"] &&
      (en["campus.manchester.two.body"].includes("Add cross-cultural teamwork") ||
        en["campus.manchester.two.body"].includes("Add career events"))
    ) {
      en["campus.manchester.two.body"] =
        "Served as a student representative for the programme, gathering and synthesising peer feedback on learning experience, campus life, career development, and wellbeing support, then communicating student needs to the programme team to support continuous improvement.";
      changed = true;
    }
    if (
      en["campus.manchester.three.body"] &&
      (en["campus.manchester.three.body"].includes("Add career events") ||
        en["campus.manchester.three.body"].includes("portfolio-building"))
    ) {
      en["campus.manchester.three.body"] =
        "Took part in the university’s Career Connect programme, receiving one-to-one mentoring on CV review, interview preparation, and career direction, and attended employer presentations for Data Science students to refine career positioning and application materials.";
      changed = true;
    }
    normaliseBritishEnglish(en);
    if (changed) storageSet(STORAGE_KEY, JSON.stringify(savedContent));
  }

  function bindEditableEvents() {
    editableNodes().forEach((node) => {
      if (boundNodes.has(node)) return;
      boundNodes.add(node);
      node.addEventListener(
        "input",
        debounce(() => {
          syncEditableLink(node);
          saveAll();
        }, 350),
      );
    });
  }

  function syncEditableLink(node) {
    if (!(node instanceof HTMLAnchorElement)) return;
    const text = node.textContent.trim();
    const emptyLinks = ["添加链接", "Add link", "LinkedIn profile", "GitHub profile", "Resume link"];
    const email = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
    if (!text || emptyLinks.includes(text)) {
      node.href = "#";
    } else if (email) {
      node.href = `mailto:${email}`;
    } else if (/https?:\/\/[^\s]+/i.test(text)) {
      node.href = text.match(/https?:\/\/[^\s]+/i)[0];
    } else if (text.startsWith("#")) {
      node.href = text;
    }
  }

  function setEditing(isEditing, silent = false) {
    body.classList.toggle("is-editing", isEditing);
    if (!editToggle) return;
    editToggle.setAttribute("aria-pressed", String(isEditing));
    editToggle.title = t(isEditing ? "action.editOff" : "action.edit");
    editableNodes().forEach((node) => {
      node.contentEditable = isEditing ? "true" : "false";
      node.spellcheck = false;
    });
    if (!silent) showToast(t(isEditing ? "toast.editOn" : "toast.editOff"));
  }

  function saveAll() {
    const savedContent = readJson(STORAGE_KEY, {});
    const savedLists = readJson(LIST_KEY, {});
    savedContent[currentLang] = collectContent();
    savedLists[currentLang] = collectLists();
    storageSet(STORAGE_KEY, JSON.stringify(savedContent));
    storageSet(LIST_KEY, JSON.stringify(savedLists));
    storageSet(LANG_KEY, currentLang);
  }

  function addItem(targetId) {
    const list = document.getElementById(targetId);
    const template = list && list.querySelector("[data-item]");
    if (!list || !template) return;

    const clone = template.cloneNode(true);
    clone.classList.add("is-visible");
    const index = list.querySelectorAll("[data-item]").length + 1;
    clone.querySelectorAll("[data-editable][data-key]").forEach((node) => {
      node.dataset.key = `${targetId}.${index}.${Math.random().toString(16).slice(2, 8)}`;
      if (node.matches("h3")) node.textContent = t("placeholder.title");
      else if (node.matches("time")) node.textContent = t("placeholder.time");
      else if (node.matches("a")) node.textContent = t("placeholder.link");
      else if (node.matches("span")) node.textContent = t("placeholder.tag");
      else node.textContent = t("placeholder.body");
      node.contentEditable = body.classList.contains("is-editing") ? "true" : "false";
    });
    list.appendChild(clone);
    bindEditableEvents();
    applyProjectExplorer();
    saveAll();
    showToast(t("toast.added"));
  }

  function setCampusCarouselSlide(carousel, index) {
    const slides = Array.from(carousel.querySelectorAll(".campus-carousel-slide"));
    const dots = Array.from(carousel.querySelectorAll(".campus-carousel-dots span"));
    if (!slides.length) return;
    const nextIndex = ((index % slides.length) + slides.length) % slides.length;
    carousel.dataset.carouselIndex = String(nextIndex);
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === nextIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === nextIndex);
    });
  }

  function stopCampusCarousels(root = campusModal) {
    root?.querySelectorAll("[data-campus-carousel]").forEach((carousel) => {
      const timer = campusCarouselTimers.get(carousel);
      if (timer) window.clearInterval(timer);
      campusCarouselTimers.delete(carousel);
    });
  }

  function startCampusCarousels(panel) {
    stopCampusCarousels(panel);
    panel?.querySelectorAll("[data-campus-carousel]").forEach((carousel) => {
      setCampusCarouselSlide(carousel, Number(carousel.dataset.carouselIndex || 0));
      const delay = Number(carousel.dataset.carouselDelay || 5000);
      const timer = window.setInterval(() => {
        const currentIndex = Number(carousel.dataset.carouselIndex || 0);
        setCampusCarouselSlide(carousel, currentIndex + 1);
      }, delay);
      campusCarouselTimers.set(carousel, timer);
    });
  }

  function openCampusModal(panelId, sourceButton) {
    if (!campusModal) return;
    const panel = campusModal.querySelector(`[data-campus-panel="${panelId}"]`);
    if (!panel) return;
    campusModal.querySelectorAll("[data-campus-panel]").forEach((node) => {
      node.classList.toggle("is-active", node === panel);
    });
    const schoolName = sourceButton.closest(".education-item")?.querySelector(".education-topline h4")?.textContent.trim();
    campusModalTitle.textContent = schoolName || "Campus Highlights";
    campusModal.classList.add("is-open");
    campusModal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    startCampusCarousels(panel);
  }

  function closeCampusModal() {
    if (!campusModal) return;
    campusModal.classList.remove("is-open");
    campusModal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    stopCampusCarousels();
  }

  function openCredentialProof(button) {
    if (!credentialProofModal) return;
    const card = button.closest(".credential-card");
    const cardTitle = card?.querySelector(".credential-copy h4")?.textContent.trim();
    const proofSrc = button.dataset.proofSrc?.trim();
    if (credentialProofTitle) credentialProofTitle.textContent = cardTitle || t("cert.proof.title");
    if (credentialProofImage && credentialProofEmpty) {
      if (proofSrc) {
        credentialProofImage.src = proofSrc;
        credentialProofImage.hidden = false;
        credentialProofEmpty.hidden = true;
      } else {
        credentialProofImage.removeAttribute("src");
        credentialProofImage.hidden = true;
        credentialProofEmpty.hidden = false;
      }
    }
    credentialProofModal.classList.add("is-open");
    credentialProofModal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
  }

  function closeCredentialProof() {
    if (!credentialProofModal) return;
    credentialProofModal.classList.remove("is-open");
    credentialProofModal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
  }

  function activateGlobalCountry(countryId) {
    if (!countryId) return;
    document.querySelectorAll("[data-global-country]").forEach((node) => {
      node.classList.toggle("is-active", node.dataset.globalCountry === countryId);
    });
    document.querySelectorAll("[data-global-detail]").forEach((node) => {
      node.classList.toggle("is-active", node.dataset.globalDetail === countryId);
    });
  }

  // MAP SECTION LOCKED: keep this map interaction block unchanged unless the user explicitly asks to redesign or fix the map.
  // Temporarily keep the country detail popover hidden for a cleaner map.
  // Set this back to true when the detailed country cards are ready to show again.
  const ENABLE_GLOBAL_POPOVER = false;
  // Temporarily disable the country chips below the map while keeping the code ready for later.
  const ENABLE_GLOBAL_REGION_TAG_ACTIONS = false;
  let pinnedGlobalCountry = null;

  function positionGlobalPopover(countryId) {
    const mapShell = document.querySelector(".world-map-shell");
    const popover = document.querySelector(".global-popover");
    const flag = document.querySelector(`.map-flag[data-global-country="${countryId}"]`);
    if (!mapShell || !popover || !flag) return;

    const margin = 16;
    const gap = 24;
    const shellRect = mapShell.getBoundingClientRect();
    const flagRect = flag.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();
    const anchorX = flagRect.left - shellRect.left + flagRect.width / 2;
    const anchorY = flagRect.top - shellRect.top + flagRect.height / 2;
    const popoverWidth = Math.min(popoverRect.width || 360, shellRect.width - margin * 2);
    const popoverHeight = popoverRect.height || 190;
    let side = "right";
    let x = anchorX + gap;
    let y = anchorY - popoverHeight / 2;

    if (x + popoverWidth > shellRect.width - margin) {
      side = "left";
      x = anchorX - popoverWidth - gap;
    }

    x = Math.max(margin, Math.min(shellRect.width - popoverWidth - margin, x));
    y = Math.max(margin, Math.min(shellRect.height - popoverHeight - margin, y));
    popover.style.setProperty("--popover-x", `${x.toFixed(1)}px`);
    popover.style.setProperty("--popover-y", `${y.toFixed(1)}px`);
    popover.dataset.side = side;
  }

  function showGlobalPopover(countryId, shouldPin = false) {
    if (!ENABLE_GLOBAL_POPOVER) {
      pinnedGlobalCountry = null;
      activateGlobalCountry(countryId);
      document.querySelector(".global-popover")?.classList.remove("is-visible");
      return;
    }
    if (shouldPin) pinnedGlobalCountry = countryId;
    activateGlobalCountry(countryId);
    const popover = document.querySelector(".global-popover");
    popover?.classList.add("is-visible");
    positionGlobalPopover(countryId);
    window.requestAnimationFrame(() => positionGlobalPopover(countryId));
  }

  function hideGlobalPopover(force = false) {
    const shouldForce = force === true;
    if (pinnedGlobalCountry && !shouldForce) return;
    if (shouldForce) pinnedGlobalCountry = null;
    document.querySelector(".global-popover")?.classList.remove("is-visible");
    document.querySelectorAll("[data-global-country]").forEach((node) => {
      node.classList.remove("is-active");
    });
  }

  const mapZoomLevels = [1, 1.55, 2.3, 3.15];
  let mapZoomIndex = 0;
  const mapState = { x: 0, y: 0, scale: 1 };
  let isMapDragging = false;
  let suppressNextMapClick = false;
  let mapDragStart = { pointerX: 0, pointerY: 0, mapX: 0, mapY: 0 };

  function clampMapState(mapShell) {
    const rect = mapShell.getBoundingClientRect();
    if (mapState.scale <= 1) {
      mapState.x = 0;
      mapState.y = 0;
      return;
    }
    const minX = rect.width * (1 - mapState.scale);
    const minY = rect.height * (1 - mapState.scale);
    mapState.x = Math.min(0, Math.max(minX, mapState.x));
    mapState.y = Math.min(0, Math.max(minY, mapState.y));
  }

  function applyMapTransform() {
    const mapShell = document.querySelector(".world-map-shell");
    const mapCanvas = document.querySelector(".map-canvas");
    if (!mapShell || !mapCanvas) return;
    clampMapState(mapShell);
    mapCanvas.style.setProperty("--map-scale", mapState.scale.toFixed(2));
    mapCanvas.style.setProperty("--flag-scale", (1 / mapState.scale).toFixed(3));
    mapCanvas.style.setProperty("--map-x", `${mapState.x.toFixed(1)}px`);
    mapCanvas.style.setProperty("--map-y", `${mapState.y.toFixed(1)}px`);
    if (mapState.scale === 1) mapShell.removeAttribute("data-map-zoom");
    else mapShell.dataset.mapZoom = "focused";
    if (pinnedGlobalCountry) positionGlobalPopover(pinnedGlobalCountry);
  }

  function setMapZoom(mode, focusEvent) {
    const mapShell = document.querySelector(".world-map-shell");
    if (!mapShell) return;
    const rect = mapShell.getBoundingClientRect();
    const focusX = focusEvent ? focusEvent.clientX - rect.left : rect.width / 2;
    const focusY = focusEvent ? focusEvent.clientY - rect.top : rect.height / 2;
    const oldScale = mapState.scale;
    const mapX = (focusX - mapState.x) / oldScale;
    const mapY = (focusY - mapState.y) / oldScale;

    if (mode === "in") mapZoomIndex = Math.min(mapZoomIndex + 1, mapZoomLevels.length - 1);
    else if (mode === "out") mapZoomIndex = Math.max(mapZoomIndex - 1, 0);
    else mapZoomIndex = 0;

    mapState.scale = mapZoomLevels[mapZoomIndex];
    if (mode === "reset") {
      mapState.x = 0;
      mapState.y = 0;
    } else {
      mapState.x = focusX - mapX * mapState.scale;
      mapState.y = focusY - mapY * mapState.scale;
    }
    applyMapTransform();

    document.querySelectorAll("[data-map-control]").forEach((button) => {
      button.classList.toggle("is-active", mapZoomIndex > 0 && button.dataset.mapControl === "in");
    });
  }

  function focusGlobalCountry(countryId) {
    const mapShell = document.querySelector(".world-map-shell");
    const mapCanvas = document.querySelector(".map-canvas");
    const flag = document.querySelector(`.map-flag[data-global-country="${countryId}"]`);
    if (!mapShell || !mapCanvas || !flag) return;

    const shellRect = mapShell.getBoundingClientRect();
    const focusX = flag.offsetLeft;
    const focusY = flag.offsetTop;
    const closeClusterCountries = ["uk", "france", "netherlands", "germany", "italy", "norway"];
    mapZoomIndex = closeClusterCountries.includes(countryId) ? 3 : 2;
    mapState.scale = mapZoomLevels[mapZoomIndex];
    mapState.x = shellRect.width / 2 - focusX * mapState.scale;
    mapState.y = shellRect.height / 2 - focusY * mapState.scale;
    applyMapTransform();
    if (ENABLE_GLOBAL_POPOVER) {
      window.setTimeout(() => positionGlobalPopover(countryId), 380);
    }
    mapShell.scrollIntoView({ behavior: "smooth", block: "center" });

    document.querySelectorAll("[data-map-control]").forEach((button) => {
      button.classList.toggle("is-active", mapZoomIndex > 0 && button.dataset.mapControl === "in");
    });
  }

  function panMap(deltaX, deltaY) {
    const mapShell = document.querySelector(".world-map-shell");
    if (!mapShell || mapState.scale <= 1) return;
    mapState.x += deltaX;
    mapState.y += deltaY;
    applyMapTransform();
  }

  function debounce(fn, wait) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = window.setTimeout(() => fn.apply(this, args), wait);
    };
  }

  function initReveal() {
    const targets = Array.from(document.querySelectorAll(".reveal, .interactive-card"));
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((target) => observer.observe(target));
  }

  function initActiveNav() {
    const sections = Array.from(document.querySelectorAll("main > section[id]"));
    const links = Array.from(document.querySelectorAll(".nav-links a"));
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -48% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
  }

  function initInteractions() {
    document.querySelectorAll("[data-tilt]").forEach((panel) => {
      panel.addEventListener("pointermove", (event) => {
        const rect = panel.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        panel.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-4px)`;
      });
      panel.addEventListener("pointerleave", () => {
        panel.style.transform = "";
      });
    });

    document.addEventListener("pointerdown", (event) => {
      const target = event.target.closest("button, .primary-link, .secondary-link");
      if (!target) return;
      target.classList.remove("is-pressed");
      window.requestAnimationFrame(() => target.classList.add("is-pressed"));
      window.setTimeout(() => target.classList.remove("is-pressed"), 260);
    });

    document.querySelectorAll(".map-flag").forEach((flag) => {
      flag.addEventListener("pointerenter", () => showGlobalPopover(flag.dataset.globalCountry));
      flag.addEventListener("pointerleave", hideGlobalPopover);
      flag.addEventListener("focus", () => showGlobalPopover(flag.dataset.globalCountry));
      flag.addEventListener("blur", hideGlobalPopover);
    });

    const mapShell = document.querySelector(".world-map-shell");
    if (mapShell) {
      mapShell.addEventListener("click", (event) => {
        const countryButton = event.target.closest("[data-global-country]");
        if (countryButton) {
          event.preventDefault();
          event.stopPropagation();
          const countryId = countryButton.dataset.globalCountry;
          focusGlobalCountry(countryId);
          showGlobalPopover(countryId, true);
          return;
        }

        const mapControl = event.target.closest("[data-map-control]");
        if (mapControl) {
          event.preventDefault();
          event.stopPropagation();
          setMapZoom(mapControl.dataset.mapControl, event);
          return;
        }

        if (event.target.closest(".global-popover")) return;
        hideGlobalPopover(true);
        if (suppressNextMapClick) {
          suppressNextMapClick = false;
          return;
        }
        setMapZoom("in", event);
      });

      mapShell.addEventListener("pointerdown", (event) => {
        if (event.target.closest(".map-controls, .map-flag, .global-popover")) return;
        event.preventDefault();
        isMapDragging = true;
        suppressNextMapClick = false;
        mapDragStart = {
          pointerX: event.clientX,
          pointerY: event.clientY,
          mapX: mapState.x,
          mapY: mapState.y,
        };
        mapShell.classList.add("is-dragging");
        mapShell.setPointerCapture?.(event.pointerId);
      });

      document.addEventListener("pointermove", (event) => {
        if (!isMapDragging) return;
        event.preventDefault();
        const deltaX = event.clientX - mapDragStart.pointerX;
        const deltaY = event.clientY - mapDragStart.pointerY;
        if (Math.abs(deltaX) + Math.abs(deltaY) > 5) suppressNextMapClick = true;
        mapState.x = mapDragStart.mapX + deltaX;
        mapState.y = mapDragStart.mapY + deltaY;
        applyMapTransform();
      });

      ["pointerup", "pointercancel"].forEach((eventName) => {
        document.addEventListener(eventName, () => {
          if (!isMapDragging) return;
          isMapDragging = false;
          mapShell.classList.remove("is-dragging");
        });
      });

      mapShell.addEventListener("dragstart", (event) => event.preventDefault());

      mapShell.addEventListener(
        "wheel",
        (event) => {
          if (event.target.closest(".global-popover")) return;
          event.preventDefault();
          setMapZoom(event.deltaY < 0 ? "in" : "out", event);
        },
        { passive: false },
      );
    }
  }

  document.addEventListener("click", (event) => {
    const experienceCard = event.target.closest("[data-experience-card], .timeline-item");
    if (experienceCard && !event.target.closest("button, a") && !body.classList.contains("is-editing")) {
      openExperienceModal(experienceCard);
      return;
    }

    if (event.target.closest("[data-experience-close]")) {
      closeExperienceModal();
      return;
    }

    const projectCard = event.target.closest(".project-card");
    if (projectCard && !event.target.closest("button, a") && !body.classList.contains("is-editing")) {
      openProjectModal(projectCard);
      return;
    }

    if (event.target.closest("[data-project-close]")) {
      closeProjectModal();
      return;
    }

    const projectFilter = event.target.closest("[data-project-filter]");
    if (projectFilter) {
      event.preventDefault();
      currentProjectFilter = projectFilter.dataset.projectFilter || "all";
      applyProjectExplorer();
      return;
    }

    const proofButton = event.target.closest("[data-credential-proof]");
    if (proofButton) {
      event.preventDefault();
      openCredentialProof(proofButton);
      return;
    }

    if (credentialProofModal?.classList.contains("is-open") && event.target.closest("#credentialProofModal")) {
      closeCredentialProof();
      return;
    }

    const campusButton = event.target.closest("[data-campus-open]");
    if (campusButton) {
      openCampusModal(campusButton.dataset.campusOpen, campusButton);
    }

    const globalButton = event.target.closest("[data-global-country]");
    if (globalButton) {
      event.preventDefault();
      if (!ENABLE_GLOBAL_REGION_TAG_ACTIONS && globalButton.closest(".global-region-list")) {
        hideGlobalPopover(true);
        globalButton.blur?.();
        return;
      }
      const countryId = globalButton.dataset.globalCountry;
      focusGlobalCountry(countryId);
      showGlobalPopover(countryId, true);
      return;
    }

    const mapControl = event.target.closest("[data-map-control]");
    if (mapControl) {
      event.preventDefault();
      setMapZoom(mapControl.dataset.mapControl, event);
      return;
    }

    const mapShell = event.target.closest(".world-map-shell");
    if (mapShell && !event.target.closest(".map-controls, .map-flag, .global-popover")) {
      hideGlobalPopover(true);
      if (suppressNextMapClick) {
        suppressNextMapClick = false;
        return;
      }
      setMapZoom("in", event);
    }

    if (event.target.closest("[data-campus-close]")) {
      closeCampusModal();
    }

    const addButton = event.target.closest("[data-add-target]");
    if (addButton) addItem(addButton.dataset.addTarget);

    const editableLink = event.target.closest("a");
    if (editableLink && body.classList.contains("is-editing") && editableLink.querySelector("[data-editable]")) {
      event.preventDefault();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (experienceModal?.classList.contains("is-open")) closeExperienceModal();
      if (projectModal?.classList.contains("is-open")) closeProjectModal();
      if (credentialProofModal?.classList.contains("is-open")) closeCredentialProof();
      if (campusModal?.classList.contains("is-open")) closeCampusModal();
    }
  });

  if (languageToggle) languageToggle.addEventListener("click", switchLanguage);

  if (editToggle) editToggle.addEventListener("click", () => setEditing(!body.classList.contains("is-editing")));

  if (saveButton) saveButton.addEventListener("click", () => {
    saveAll();
    showToast(t("toast.saved"));
  });

  if (exportButton) exportButton.addEventListener("click", () => {
    saveAll();
    const data = {
      content: readJson(STORAGE_KEY, {}),
      lists: readJson(LIST_KEY, {}),
      currentLang,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ba-da-bilingual-portfolio-content.json";
    link.click();
    URL.revokeObjectURL(url);
    showToast(t("toast.exported"));
  });

  if (importInput) importInput.addEventListener("change", async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const data = JSON.parse(await file.text());
    if (data.content) storageSet(STORAGE_KEY, JSON.stringify(data.content));
    if (data.lists) storageSet(LIST_KEY, JSON.stringify(data.lists));
    currentLang = normalizeLang(data.currentLang || currentLang);
    storageSet(LANG_KEY, currentLang);
    renderLanguage();
    showToast(t("toast.imported"));
    event.target.value = "";
  });

  if (resetButton) resetButton.addEventListener("click", () => {
    const confirmed = window.confirm(t("confirm.reset"));
    if (!confirmed) return;
    storageRemove(STORAGE_KEY);
    storageRemove(LIST_KEY);
    storageRemove(LANG_KEY);
    window.location.reload();
  });

  try {
    renderLanguage();
    window.__baDaPortfolioPrimaryReady = true;
  } catch (error) {
    console.error("Render failed:", error);
    renderUi();
  }
  try {
    setEditing(false, true);
  } catch (error) {
    console.warn("Editing controls failed:", error);
  }
  body.classList.add("js-enhanced");
  try {
    initReveal();
    initActiveNav();
    initInteractions();
  } catch (error) {
    console.error("Interaction initialization failed:", error);
    body.classList.remove("js-enhanced");
  }
})();
