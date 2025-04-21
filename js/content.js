const content = {
    en: {
      // Common Elements
      company_name: "Neoone AI",
      site_title: "Neoone AI - Private AI & Data Solutions",
      nav_home: "Home",
      nav_solutions: "Solutions",
      nav_contact: "Contact",
      learn_more: "Learn More",
      footer_text: "&copy; 2025 Neoone AI. All rights reserved.",
      lang_switch_zh: "中文",
      lang_switch_en: "English",
  
      // Home Page (index.html)
      home_hero_title: "Build Your Dedicated AI Brain, Data-Driven, Secure & Controllable",
      home_hero_subtitle: "We help Taiwan and Asian enterprises build private AI analysis systems, connect data streams, and optimize IT infrastructure for true intelligent operations.",
      home_hero_cta: "Explore Solutions",
      home_pain_title: "Facing Data Challenges?",
      home_pain_text: "Scattered data? Security concerns with public AI clouds? High IT operational costs? We provide the solutions.",
      home_services_title: "Core Service Highlights",
      service_1_title: "Data Integration & Cleansing",
      service_1_desc: "Turn chaotic data into structured assets.",
      service_2_title: "Private RAG Knowledge Base",
      service_2_desc: "Secure, internal AI knowledge assistant.",
      service_3_title: "AI Industry Analysis Reports",
      service_3_desc: "Insightful reports from internal & external data.",
      service_4_title: "Intelligent Quality Control",
      service_4_desc: "Predict risks and suggest improvements.",
      service_5_title: "IT Architecture Modernization",
      service_5_desc: "Cloud migration & open-source transition.",
      home_whyus_title: "Why Choose Us?",
      whyus_1: "<strong>Private Deployment:</strong> Full control, maximum security.",
      whyus_2: "<strong>Industry Savvy:</strong> We understand your domain language.",
      whyus_3: "<strong>Modular & Flexible:</strong> Introduce AI step-by-step.",
      whyus_4: "<strong>Partners in Transformation:</strong> We provide training and support.",
  
      // Solutions Page (solutions.html)
      solutions_page_title: "Solutions - Neoone AI",
      solutions_main_title: "Our Solutions",
      solutions_intro: "Modular, flexible solutions designed for your business needs. Introduce AI capabilities progressively.",
      solution_pain_point_label: "Pain Point:",
      solution_features_label: "Features:",
      solution_benefits_label: "Benefits:",
      solution_use_case_label: "Use Cases:",
      // Solution 2
      solution_1_title: "1. Data Cleansing & Structuring Service",
      solution_1_pain: "Data locked in various formats (Excel, PDF, scans), poor quality hindering analysis.",
      solution_1_features: `<li>Supports Excel, CSV, PDF, scanned documents.</li><li>Automated field recognition, cleaning, standardization.</li><li>Builds high-quality foundational data pool. High automation.</li>`,
      solution_1_benefits: "Improved data quality, enables reliable analysis, saves manual effort.",
      solution_1_use_cases: "Preparing data for BI, AI model training, system migration.",
      // Solution 3
      solution_2_title: "2. Private RAG Knowledge Base Construction",
      solution_2_pain: "Need for secure internal knowledge search, leveraging company-specific documents without cloud risks.",
      solution_2_features: `<li>Fully on-premise deployment ensuring data security.</li><li>Integrates internal knowledge (reports, contracts, presentations).</li><li>Continuous automatic updates, configurable access control.</li>`,
      solution_2_benefits: "Secure knowledge asset, faster information retrieval, preserves corporate memory, avoids vendor lock-in.",
      solution_2_use_cases: "Internal Q&A, research & development support, compliance checks, training material access.",
      // Solution 4
      solution_3_title: "3. AI Industry Analysis Report Generation",
      solution_3_pain: "Difficulty combining internal performance data with external market trends for strategic insights.",
      solution_3_features: `<li>Input: Internal data (orders, pricing, supply chain).</li><li>Combine: Real-time news, commodity prices, policy data, etc.</li><li>Output: Predictive weekly/monthly reports/briefings with actionable suggestions. Customizable formats.</li>`,
      solution_3_benefits: "Proactive decision-making, better market anticipation, data-driven strategies.",
      solution_3_use_cases: "Sales forecasting, supply chain risk management, competitive analysis, strategic planning.",
      // Solution 5
      solution_4_title: "4. Quality Data Analysis & Improvement Suggestions",
      solution_4_pain: "Struggling to identify root causes of quality issues, reactive problem solving.",
      solution_4_features: `<li>Connects to production line quality data, QC reports.</li><li>Uses AI to find anomaly patterns and trends.</li><li>Provides actionable technical recommendations based on best practices. Predictive alerts.</li>`,
      solution_4_benefits: "Reduced defects, improved product quality, lower warranty costs, optimized processes.",
      solution_4_use_cases: "Manufacturing quality control, process engineering, supplier quality management.",
      // Solution 6
      solution_5_title: "5. IT Modernization: Cloud & Open Source Transformation",
      solution_5_pain: "High IT costs (hardware, licenses), lack of system flexibility, vendor lock-in, need for a stable AI platform.",
      solution_5_features: `<li>Migrate local systems (ERP, MES, DB) to Cloud (AWS, Azure, GCP, Private).</li><li>Replace costly licenses with robust Linux & open-source alternatives (e.g., PostgreSQL).</li><li>Includes technical training, SOPs, security design, backup & DR.</li>`,
      solution_5_benefits: "Significantly lower TCO, enhanced scalability & reliability, freedom from vendor lock-in, solid foundation for digital transformation & AI.",
      solution_5_use_cases: "Cost reduction initiatives, companies adopting AI/big data, businesses needing flexible/remote IT infrastructure.",
  
      // Contact Page (contact.html)
      contact_page_title: "Contact Us - Neoone AI",
      contact_main_title: "Get in Touch",
      contact_intro: "Ready to start your AI transformation journey? Let's talk!",
      form_company_name: "Company Name",
      form_contact_person: "Contact Person",
      form_email: "Email",
      form_phone: "Phone (Optional)",
      form_inquiry_type: "Inquiry Type",
      form_select_option: "-- Please Select --",
      form_option_consultation: "Solution Consultation",
      form_option_demo: "Request a Demo",
      form_option_technical: "Technical Question",
      form_option_partnership: "Partnership Inquiry",
      form_option_other: "Other",
      form_message: "Briefly describe your needs",
      form_submit_button: "Send Inquiry",
      contact_other_methods: "Other Ways to Reach Us",
      contact_email_label: "Email:",
      contact_phone_label: "Phone:",
      contact_response_time: "We typically respond within one business day.",
      form_success_message: "Thank you! Your inquiry has been sent successfully.",
      form_error_message: "Sorry, there was an error sending your message. Please try again later or contact us directly via email.",

            // 在 en: { ... } 和 zh: { ... } 中都要添加
      view_details: "View Details", // 英文
      contact_us_for_demo: "Contact Us for a Demo", // 英文
      solution_detail_subtitle: "Empowering Your Support Team", // 英文 (示例)
      solution_detail_key_features: "Key Features & Technology", // 英文 (示例)
      

      
      
      // 在 en: { ... } 內部添加
      solution_detail_ai_assistant_page_title: "AI Assistant Details - YourBrand AI",
      solution_detail_ai_assistant_title: "Intelligent Customer Support AI Assistant",
      solution_detail_ai_assistant_intro: "Go beyond simple chatbots. Our AI Assistant integrates deeply with your existing knowledge base (FAQs, SOPs, manuals) to provide context-aware, accurate, and consistent support across multiple channels... [More detailed text here]",
      solution_detail_ai_assistant_features: `<li>**On-Premise RAG Integration:** Securely leverages your internal documents...</li><li>**Contextual Understanding:** Maintains conversation context...</li><li>... [More features]</li>`,
      solution_detail_ai_assistant_benefits: `<li>**Reduce Agent Load:** Handles common queries automatically...</li><li>... [More benefits]</li>`,
      solution_detail_ai_assistant_implementation: "Our process typically involves: 1. Knowledge Base Assessment & Ingestion...",
      // ... 為 AI Assistant 頁面添加所有需要的鍵 ...


      // --- 為 data-cleansing 子頁面添加類似的內容塊 ---
      solution_detail_data_cleansing_page_title: "Data Cleansing Details - YourBrand AI",
      solution_detail_data_cleansing_title: "Data Cleansing & Structuring Service",
      // ... data cleansing 的詳細內容鍵值對 ..
         // --- General Keys for Detail Pages ---
    solution_detail_subtitle_default: "Unlock Your Potential",
    solution_detail_problem_title: "Is This Your Challenge?",
    solution_detail_solution_title: "Our Solution: How We Help",
    solution_detail_key_features: "Key Features & Technology",
    solution_detail_benefits_title: "How You Benefit",
    solution_detail_use_cases_title: "Ideal Use Cases",
    solution_detail_implementation_title: "Our Implementation Approach",
    solution_detail_why_us_title: "Why Choose Our Approach?",
    contact_us_for_demo: "Contact Us for a Personalized Demo",
    view_details: "View Details", // (You might already have this)

    

    // === 2. Data Cleansing Detail Page ===
    solution_detail_data_cleansing_page_title: "Data Cleansing & Structuring - YourBrand AI",
    solution_detail_data_cleansing_title: "Data Cleansing & Structuring Service",
    solution_detail_data_cleansing_subtitle: "Turn Your Messy Data into Actionable Assets",
    solution_detail_data_cleansing_problem: "Is your valuable data trapped in inconsistent Excel sheets, unsearchable PDFs, scanned documents, or disparate systems? Poor data quality hinders accurate reporting, prevents reliable AI model training, and leads to flawed decision-making, costing you time and resources.",
    solution_detail_data_cleansing_solution_desc: "We provide a robust service to automatically extract, cleanse, standardize, and structure your diverse data sources. Using intelligent automation and customizable rules, we transform your chaotic information into a high-quality, unified data pool ready for Business Intelligence, AI applications, or system migrations. Stop fighting your data; start leveraging it.",
    solution_detail_data_cleansing_features_list_html: `
        <li><strong>Multi-Format Support:</strong> Handles data from Excel, CSV, PDF (native & scanned with OCR), databases, APIs, and more.</li>
        <li><strong>Automated Data Extraction:</strong> Intelligently identifies and extracts relevant fields, tables, and information.</li>
        <li><strong>Intelligent Cleaning & Validation:</strong> Applies customizable rules for standardization (dates, addresses, codes), outlier detection, deduplication, and missing value handling.</li>
        <li><strong>Schema Mapping & Transformation:</strong> Structures data into your desired target format or database schema.</li>
        <li><strong>Scalable Processing:</strong> Capable of handling large volumes of data efficiently.</li>
        <li><strong>Quality Reporting & Audit Trail:</strong> Provides insights into data quality improvements and processing steps.</li>
    `,
    solution_detail_data_cleansing_benefits_list_html: `
        <li><strong>Enable Reliable Analytics & BI:</strong> Base your reports and dashboards on accurate, trustworthy data.</li>
        <li>**Build High-Performing AI Models:** Improve AI accuracy and reduce bias by training on clean, structured data.</li>
        <li><strong>Streamline System Migrations:</strong> Ensure smooth data transfer with consistent formatting.</li>
        <li><strong>Increase Operational Efficiency:</strong> Reduce manual data entry and correction time significantly.</li>
        <li><strong>Enhance Data Governance:</strong> Establish a foundation of high-quality, standardized data across the organization.</li>
        <li><strong>Make Data-Driven Decisions with Confidence:** Trust the insights derived from your data.</li>
    `,
    solution_detail_data_cleansing_use_cases_desc: "Essential for preparing data for business intelligence tools (Tableau, Power BI), machine learning projects, ERP/CRM system implementation or migration, data warehousing, compliance reporting, and unifying data from mergers or acquisitions.",
    solution_detail_data_cleansing_implementation_desc: "Our approach: 1. Data Source Assessment & Profiling. 2. Rule Definition & Configuration. 3. Automated Extraction & Cleansing Pilot. 4. Full-Scale Processing & Structuring. 5. Quality Validation & Delivery. 6. Optional: Setup ongoing data pipelines.",
    solution_detail_data_cleansing_why_us: "We combine automated tools with deep understanding of diverse data formats, especially complex documents like PDFs and scans common in manufacturing and trade. We focus on delivering not just clean data, but data structured for your specific analytical or operational needs.",

    // === 3. RAG Knowledge Base Detail Page ===
    solution_detail_rag_kb_page_title: "Private RAG Knowledge Base - YourBrand AI",
    solution_detail_rag_kb_title: "Private RAG Knowledge Base Construction",
    solution_detail_rag_kb_subtitle: "Unlock Your Internal Knowledge, Securely",
    solution_detail_rag_kb_problem: "Is your company's collective intelligence locked away in scattered reports, contracts, emails, presentations, and wikis? Are employees wasting time searching for information or 'reinventing the wheel'? Are you hesitant to use cloud AI tools due to data privacy and security concerns?",
    solution_detail_rag_kb_solution_desc: "We build a powerful, private knowledge base powered by Retrieval-Augmented Generation (RAG) technology, running entirely within your secure infrastructure. This system intelligently indexes your internal documents (reports, SOPs, contracts, technical docs, etc.) and allows employees to ask natural language questions, receiving accurate, context-aware answers cited directly from the source documents. It's like having an internal expert search engine that truly understands your business.",
    solution_detail_rag_kb_features_list_html: `
        <li><strong>On-Premise or Private Cloud Deployment:</strong> Ensures complete data confidentiality and security. Your documents never leave your control.</li>
        <li><strong>Retrieval-Augmented Generation (RAG):** Combines powerful large language models with direct retrieval from your documents for factual, cited answers. Reduces hallucination risk.</li>
        <li>**Broad Document Support:** Ingests various formats like PDF, Word, PowerPoint, HTML, text, and integrates with existing databases or SharePoint.</li>
        <li>**Natural Language Querying:** Users ask questions in plain language, no complex search syntax needed.</li>
        <li>**Source Citations:** Answers include direct links or references to the source documents for verification.</li>
        <li>**Access Control Integration:** Can integrate with your existing user authentication for permission-based knowledge access.</li>
        <li>**Automated Updates:** Continuously indexes new and updated documents to keep knowledge current.</li>
    `,
    solution_detail_rag_kb_benefits_list_html: `
        <li>**Accelerate Information Discovery:** Find accurate answers and relevant documents in seconds, not hours.</li>
        <li>**Boost Employee Productivity & Efficiency:** Reduce time spent searching and asking colleagues for information.</li>
        <li>**Preserve & Leverage Corporate Knowledge:** Prevent knowledge loss due to employee turnover and make expertise accessible.</li>
        <li>**Enhance Decision Making:** Access relevant internal data and insights quickly.</li>
        <li>**Improve Onboarding & Training:** Provide new hires with an instant resource for company knowledge.</li>
        <li>**Maintain Data Security & Compliance:** Keep sensitive internal information protected within your environment.</li>
    `,
    solution_detail_rag_kb_use_cases_desc: "Ideal for internal Q&A systems, R&D knowledge management, accessing compliance & legal documents, technical support knowledge bases, finding project histories, and surfacing insights from vast internal document repositories.",
    solution_detail_rag_kb_implementation_desc: "Our process: 1. Needs Analysis & Scope Definition. 2. Infrastructure Setup (On-Premise/Private Cloud). 3. Document Collection & Secure Ingestion Pipeline. 4. RAG System Configuration & Indexing. 5. User Interface & Access Control Setup. 6. Testing, Training & Rollout.",
    solution_detail_rag_kb_why_us: "We focus exclusively on private, secure RAG deployments tailored to your internal knowledge. We understand the nuances of enterprise documents and security requirements, ensuring you get a reliable system you fully own and control, unlike generic cloud solutions.",

    // === 4. Analysis Reports Detail Page ===
    solution_detail_analysis_page_title: "AI Industry Analysis Reports - YourBrand AI",
    solution_detail_analysis_title: "AI Industry Analysis Report Generation",
    solution_detail_analysis_subtitle: "From Raw Data to Strategic Foresight, Automatically",
    solution_detail_analysis_problem: "Are you struggling to connect the dots between your internal performance (sales, orders, supply chain) and external market forces (competitors, trends, policies, raw material prices)? Is generating insightful, forward-looking reports a time-consuming manual process prone to delays and inconsistencies?",
    solution_detail_analysis_solution_desc: "Our AI-powered reporting system automates the generation of insightful business analysis reports. It intelligently integrates your internal operational data (orders, pricing, inventory, supply chain metrics) with relevant external sources (market news, commodity prices, competitor actions, regulatory changes, economic indicators). The system analyzes patterns, identifies risks and opportunities, and generates predictive, actionable weekly or monthly reports, briefings, or dashboards tailored to your needs.",
    solution_detail_analysis_features_list_html: `
        <li><strong>Automated Data Integration:** Connectors for various internal systems (ERP, CRM, databases) and external data feeds (APIs, web scraping for public data).</li>
        <li><strong>Internal & External Data Fusion:** Correlates your company's performance with market dynamics, competitor moves, supply chain events, and economic trends.</li>
        <li>**AI-Driven Pattern Recognition & Forecasting:** Utilizes machine learning to identify trends, predict future outcomes (e.g., sales forecast, risk likelihood), and detect anomalies.</li>
        <li>**Actionable Insights & Recommendations:** Goes beyond just data presentation to suggest potential strategies or mitigating actions based on the analysis.</li>
        <li>**Customizable Report Formats:** Delivers insights as structured reports (PDF, PPT), interactive dashboards, or email alerts.</li>
        <li>**Scheduled & On-Demand Generation:** Configure regular report delivery or generate analyses as needed.</li>
        <li>**Private & Secure Analysis:** All analysis, especially involving sensitive internal data, runs within your secure environment.</li>
    `,
    solution_detail_analysis_benefits_list_html: `
        <li>**Gain Proactive Strategic Insights:** Understand market shifts and their impact on your business before it's too late.</li>
        <li>**Improve Forecasting Accuracy:** Make better predictions for sales, demand, and resource planning.</li>
        <li>**Identify Hidden Risks & Opportunities:** Uncover potential supply chain disruptions, competitive threats, or emerging market niches.</li>
        <li>**Save Significant Analyst Time:** Automate the laborious process of data gathering, integration, and report creation.</li>
        <li>**Ensure Consistent & Timely Reporting:** Receive regular, reliable insights without manual delays or variations.</li>
        <li>**Foster Data-Driven Decision Making:** Equip your leadership and teams with clear, actionable intelligence.</li>
    `,
    solution_detail_analysis_use_cases_desc: "Valuable for strategic planning, sales forecasting & pipeline management, supply chain risk assessment, competitive intelligence monitoring, market entry analysis, pricing optimization, and executive performance dashboards.",
    solution_detail_analysis_implementation_desc: "Our approach: 1. Requirements & KPI Definition. 2. Data Source Identification & Integration Setup. 3. AI Model Selection & Configuration. 4. External Data Feed Setup. 5. Report Template & Dashboard Design. 6. Automation & Scheduling. 7. Validation & Rollout.",
    solution_detail_analysis_why_us: "We bridge the gap between your internal data reality and external market context. Our AI focuses on generating *actionable* insights relevant to your industry (manufacturing, trade, supply chain), not just generic charts. The private deployment ensures your strategic data remains confidential.",

    // === 5. Quality Analysis Detail Page ===
    solution_detail_quality_page_title: "AI Quality Analysis & Improvement - YourBrand AI",
    solution_detail_quality_title: "Quality Data Analysis & Improvement Suggestions",
    solution_detail_quality_subtitle: "Proactively Detect Defects, Predict Risks, Optimize Quality",
    solution_detail_quality_problem: "Are you spending too much time reactively chasing quality issues? Is it difficult to pinpoint the root causes of defects from complex production data? Do you lack early warnings for potential quality deviations before they impact customers or cause costly rework/scrap?",
    solution_detail_quality_solution_desc: "Leverage the power of AI to transform your quality control. Our system connects directly to your production line data sources (sensor readings, machine logs, QC reports, inspection results) and uses machine learning algorithms to automatically detect subtle anomaly patterns, identify key factors influencing quality, predict potential failures, and provide actionable recommendations for process improvement – often before a human could spot the trend.",
    solution_detail_quality_features_list_html: `
        <li>**Direct Data Connectivity:** Integrates with MES, SCADA, PLCs, Quality Management Systems (QMS), LIMS, and manual inspection data.</li>
        <li>**AI-Powered Anomaly Detection:** Identifies unusual patterns and deviations from normal operating parameters that often precede defects.</li>
        <li>**Root Cause Analysis Assistance:** Pinpoints statistically significant factors (e.g., specific machine settings, material batches, environmental conditions) correlated with quality issues.</li>
        <li>**Predictive Quality Alerts:** Provides early warnings for batches or processes likely to result in out-of-spec products.</li>
        <li>**Actionable Improvement Recommendations:** Suggests specific parameter adjustments or process changes based on historical data and best practices.</li>
        <li>**Visual Dashboards & Reports:** Clearly presents quality trends, alerts, and analysis results for engineers and managers.</li>
        <li>**Domain-Specific Models:** Utilizes algorithms suited for manufacturing and time-series quality data.</li>
    `,
    solution_detail_quality_benefits_list_html: `
        <li>**Reduce Scrap & Rework Costs:** Catch potential issues earlier in the process, minimizing waste.</li>
        <li>**Improve Product Consistency & Reliability:** Maintain higher quality standards and reduce variations.</li>
        <li>**Lower Warranty Claims & Returns:** Prevent defective products from reaching customers.</li>
        <li>**Optimize Process Parameters:** Fine-tune machine settings and processes for maximum quality yield.</li>
        <li>**Empower Engineers with Data:** Provide actionable insights for faster troubleshooting and continuous improvement.</li>
        <li>**Shift from Reactive to Proactive Quality Control:** Anticipate and prevent problems instead of just reacting to them.</li>
    `,
    solution_detail_quality_use_cases_desc: "Highly effective for manufacturing process control, incoming material inspection analysis, final product quality assurance, predictive maintenance based on quality indicators, supplier quality monitoring, and optimizing complex assembly lines.",
    solution_detail_quality_implementation_desc: "Our process: 1. Goal Setting & Data Source Mapping. 2. Data Integration & Preparation. 3. AI Model Selection & Training (Anomaly Detection, Prediction). 4. Alert & Recommendation Engine Configuration. 5. Dashboard Setup & User Training. 6. Deployment & Performance Monitoring.",
    solution_detail_quality_why_us: "We combine AI expertise with a practical understanding of manufacturing quality challenges. Our solutions are designed to integrate with existing factory systems and provide clear, actionable recommendations that engineers can actually use, moving beyond simple statistical process control.",

    // === 6. IT Modernization Detail Page ===
    solution_detail_it_page_title: "IT Modernization: Cloud & Open Source - YourBrand AI",
    solution_detail_it_title: "IT Modernization: Cloud & Open Source Transformation",
    solution_detail_it_subtitle: "Reduce Costs, Boost Agility, Own Your Infrastructure",
    solution_detail_it_problem: "Are legacy systems holding back your business agility? Are high licensing fees (e.g., Windows Server, Oracle DB) and expensive hardware refreshes draining your IT budget? Do you lack the flexible, scalable infrastructure needed to support modern applications and AI initiatives?",
    solution_detail_it_solution_desc: "We help you break free from vendor lock-in and costly legacy infrastructure. Our comprehensive service guides your transition to modern, cost-effective cloud environments (Public: AWS, Azure, GCP or Private Cloud) and robust open-source alternatives (Linux, PostgreSQL, Kubernetes, etc.). We manage the migration process smoothly, ensuring minimal disruption, enhanced security, and significant long-term savings, while providing the stable, scalable foundation your business needs to innovate.",
    solution_detail_it_features_list_html: `
        <li><strong>Cloud Migration Strategy & Execution:** Assess workloads, design target architecture (Public/Private/Hybrid), and manage seamless migration of servers, databases (e.g., Oracle to PostgreSQL), ERP, MES systems.</li>
        <li><strong>Open Source Stack Implementation:** Replace expensive commercial software with proven, enterprise-grade open source solutions (Linux OS, KVM/Proxmox virtualization, Ceph storage, Ansible automation, etc.).</li>
        <li>**Infrastructure as Code (IaC):** Automate infrastructure provisioning and management for consistency and efficiency using tools like Terraform and Ansible.</li>
        <li><strong>Containerization & Orchestration:** Modernize applications using Docker and Kubernetes for scalability and portability.</li>
        <li>**Robust Security & Compliance:** Implement firewalls, VPNs, backup/disaster recovery, identity management, and logging based on best practices.</li>
        <li>**Cost Optimization:** Analyze cloud spending and implement strategies for reducing operational expenses.</li>
        <li>**Team Training & Documentation:** Equip your IT team with the skills and SOPs needed to manage the new environment effectively.</li>
    `,
    solution_detail_it_benefits_list_html: `
        <li>**Significantly Reduce IT Spending:** Dramatically lower costs associated with software licensing, hardware maintenance, and data center overhead.</li>
        <li>**Increase Agility & Scalability:** Easily scale resources up or down based on demand; deploy new services faster.</li>
        <li>**Eliminate Vendor Lock-In:** Gain freedom and flexibility by using open standards and technologies.</li>
        <li>**Enhance System Reliability & Performance:** Leverage modern cloud infrastructure and stable open-source software.</li>
        <li>**Improve Security Posture:** Implement current security best practices and architectures.</li>
        <li>**Build a Future-Proof Foundation:** Create the robust, flexible infrastructure required for AI, Big Data, and digital transformation.</li>
    `,
    solution_detail_it_use_cases_desc: "Ideal for companies seeking to lower IT operational costs, businesses migrating away from expensive Oracle or Microsoft licenses, organizations adopting cloud-native applications or AI/ML platforms, and enterprises needing scalable, resilient, and remotely manageable infrastructure.",
    solution_detail_it_implementation_desc: "Our phased approach: 1. Assessment & TCO Analysis. 2. Target Architecture Design & PoC. 3. Phased Migration Planning & Execution. 4. Open Source Integration & Configuration. 5. Security Hardening & Testing. 6. Handover, Training & Ongoing Support Options.",
    solution_detail_it_why_us: "We are experts in both cloud platforms and the open-source ecosystem, particularly Linux-based environments. We provide end-to-end migration services, focusing on minimizing disruption and maximizing cost savings while ensuring your team is empowered to manage the new infrastructure. We build solutions you own, not ones that lock you in.",



        
    },
    zh: {
      // Common Elements
      company_name: "Neoone AI", // Consider translating the brand name or keeping it
      site_title: "Neoone AI - 私有 AI 與數據解決方案",
      nav_home: "首頁",
      nav_solutions: "解決方案",
      nav_contact: "聯絡我們",
      learn_more: "了解更多",
      footer_text: "&copy; 2025 Neoone AI. 版權所有。",
      lang_switch_zh: "中文",
      lang_switch_en: "English",
  
      // Home Page (index.html)
      home_hero_title: "打造專屬於您的企業 AI 大腦，數據驅動，安全可控",
      home_hero_subtitle: "我們協助台灣及亞洲企業，建構私有 AI 分析系統、打通數據脈絡、優化 IT 架構，實現真正的智慧營運。",
      home_hero_cta: "探索解決方案",
      home_pain_title: "面臨數據挑戰？",
      home_pain_text: "數據散亂難以利用？擔心公有雲 AI 的資安風險？IT 維運成本居高不下？我們提供解決方案。",
      home_services_title: "核心服務亮點",
      service_1_title: "數據整合與清洗",
      service_1_desc: "將混亂數據轉化為結構化資產。",
      service_2_title: "私有 RAG 知識庫",
      service_2_desc: "安全、內部的 AI 知識助理。",
      service_3_title: "AI 產業分析報告",
      service_3_desc: "融合內外部數據的深度洞察報告。",
      service_4_title: "智慧品質控管",
      service_4_desc: "預測風險並提供改善建議。",
      service_5_title: "IT 架構現代化",
      service_5_desc: "雲端遷移與開源軟體轉型。",
      home_whyus_title: "為何選擇我們？",
      whyus_1: "<strong>私有部署：</strong> 全面掌控，最高安全。",
      whyus_2: "<strong>產業洞察：</strong> 我們懂您的行業語言。",
      whyus_3: "<strong>模組彈性：</strong> 循序漸進導入 AI。",
      whyus_4: "<strong>轉型夥伴：</strong> 提供完整培訓與支援。",
  
       // Solutions Page (solutions.html)
      solutions_page_title: "解決方案 - Neoone AI",
      solutions_main_title: "我們的解決方案",
      solutions_intro: "模組化、具彈性的解決方案，滿足您的業務需求，逐步導入 AI 能力。",
      solution_pain_point_label: "主要痛點：",
      solution_features_label: "核心功能：",
      solution_benefits_label: "帶來效益：",
      solution_use_case_label: "適用情境：",
      
      // Solution 2
      solution_1_title: "1. 資料清洗與結構化服務",
      solution_1_pain: "資料鎖定於多種格式 (Excel、PDF、掃描檔)，品質不佳阻礙分析。",
      solution_1_features: `<li>支援 Excel、CSV、PDF、掃描文件。</li><li>自動欄位辨識、清洗、格式標準化。</li><li>幫助建立高品質基礎資料池。高自動化程度。</li>`,
      solution_1_benefits: "提升數據品質、實現可靠分析、節省人工處理時間。",
      solution_1_use_cases: "準備 BI 分析資料、AI 模型訓練、系統遷移數據。",
       // Solution 3
      solution_2_title: "2. 私有 RAG 知識庫建置",
      solution_2_pain: "需要安全的內部知識搜尋，利用公司特定文件又擔心雲端風險。",
      solution_2_features: `<li>可完全本地部署，保障資料安全。</li><li>整合企業內部知識（報表、合約、簡報等）。</li><li>持續自動更新，可配置的權限控管。</li>`,
      solution_2_benefits: "確保知識資產安全、加速資訊檢索、保存企業記憶、避免供應商綁定。",
      solution_2_use_cases: "內部問答系統、研發支援、合規性檢查、培訓資料存取。",
      // Solution 4
      solution_3_title: "3. AI 產業分析報告生成",
      solution_3_pain: "難以將內部營運數據與外部市場趨勢結合以獲得戰略洞察。",
      solution_3_features: `<li>輸入：企業內部數據（如訂單、價格、供應鏈資訊）。</li><li>結合：即時產業新聞、原物料價格、政策數據等。</li><li>輸出：具備預測性與對策建議的週報／月報／簡報。可客製化格式。</li>`,
      solution_3_benefits: "實現前瞻性決策、更佳的市場預判能力、數據驅動的戰略。",
      solution_3_use_cases: "銷售預測、供應鏈風險管理、競爭對手分析、戰略規劃。",
      // Solution 5
      solution_4_title: "4. 品質數據分析與改善建議",
      solution_4_pain: "難以找出品質問題的根本原因，只能被動解決問題。",
      solution_4_features: `<li>接入產線品質數據、QC報告等。</li><li>利用 AI 找出異常模式與趨勢。</li><li>基於最佳實務提供可執行的技術建議。預測性警報。</li>`,
      solution_4_benefits: "減少不良品、提升產品品質、降低保固成本、優化生產流程。",
      solution_4_use_cases: "製造業品質控管、製程工程、供應商品質管理。",
      // Solution 6
      solution_5_title: "5. IT 現代化：擁抱雲端與開源轉型",
      solution_5_pain: "高昂的 IT 成本（硬體、授權費）、系統缺乏彈性、廠商綁定、需要穩定的 AI 平台。",
      solution_5_features: `<li>協助將本地系統（ERP、MES、DB）遷移至雲端（AWS、Azure、GCP、私有雲）。</li><li>以穩定的 Linux 及開源方案（如 PostgreSQL）取代高額授權軟體。</li><li>包含技術輔導、SOP 建置、資安設計、備份與災難復原。</li>`,
      solution_5_benefits: "大幅降低總體擁有成本、增強擴展性與可靠性、擺脫廠商綁定、為數位轉型與 AI 奠定堅實基礎。",
      solution_5_use_cases: "成本削減計畫、導入 AI/大數據的公司、需要彈性/遠端 IT 架構的企業。",
  
      // Contact Page (contact.html)
      contact_page_title: "聯絡我們 - Neoone AI",
      contact_main_title: "聯繫我們",
      contact_intro: "準備好開始您的 AI 轉型之旅了嗎？讓我們聊聊！",
      form_company_name: "公司名稱",
      form_contact_person: "聯絡人",
      form_email: "電子郵件",
      form_phone: "聯絡電話 (選填)",
      form_inquiry_type: "諮詢類型",
      form_select_option: "-- 請選擇 --",
      form_option_consultation: "方案諮詢",
      form_option_demo: "預約 Demo",
      form_option_technical: "技術詢問",
      form_option_partnership: "合作洽談",
      form_option_other: "其他",
      form_message: "請簡述您的需求",
      form_submit_button: "送出諮詢",
      contact_other_methods: "其他聯繫方式",
      contact_email_label: "電子郵件：",
      contact_phone_label: "聯絡電話：",
      contact_response_time: "我們通常會在一個工作日內回覆您。",
      form_success_message: "感謝您！您的訊息已成功寄出。",
      form_error_message: "抱歉，訊息發送失敗。請稍後再試或透過 Email 直接與我們聯繫。",
    
      solution_detail_ai_assistant_page_title: "AI 助理詳情 - YourBrand AI",
      solution_detail_ai_assistant_title: "智慧客服 AI 助理",
      solution_detail_ai_assistant_intro: "超越簡單的聊天機器人。我們的 AI 助理能深度整合您現有的知識庫（FAQ、SOP、手冊），跨多個渠道提供具備上下文感知、準確且一致的支援... [此處需要更詳細的中文介紹]",
      solution_detail_ai_assistant_features: `<li>**本地 RAG 整合：** 通過檢索增強生成技術安全地利用您的內部文檔...</li><li>**上下文理解：** 在多輪互動中保持對話上下文...</li><li>... [更多中文功能]</li>`,
      solution_detail_ai_assistant_benefits: `<li>**減少客服負荷：** 自動處理常見查詢...</li><li>... [更多中文效益]</li>`,
      solution_detail_ai_assistant_implementation: "我們的流程通常包含：1. 知識庫評估與導入...",
      

      view_details: "查看詳情", // 中文
      contact_us_for_demo: "聯繫我們獲取演示", // 中文
      solution_detail_subtitle: "賦能您的支援團隊", // 中文 (示例)
      solution_detail_key_features: "關鍵功能與技術", // 中文 (示例)
      // ... 其他通用標題的鍵 ...
            // 在 zh: { ... } 內部添加對應的中文翻譯
      solution_detail_ai_assistant_page_title: "AI 助理詳情 - YourBrand AI",
      solution_detail_ai_assistant_title: "智慧客服 AI 助理",
      solution_detail_ai_assistant_intro: "超越簡單的聊天機器人。我們的 AI 助理能深度整合您現有的知識庫（FAQ、SOP、手冊），跨多個渠道提供具備上下文感知、準確且一致的支援... [此處需要更詳細的中文介紹]",
      solution_detail_ai_assistant_features: `<li>**本地 RAG 整合：** 通過檢索增強生成技術安全地利用您的內部文檔...</li><li>**上下文理解：** 在多輪互動中保持對話上下文...</li><li>... [更多中文功能]</li>`,
      solution_detail_ai_assistant_benefits: `<li>**減少客服負荷：** 自動處理常見查詢...</li><li>... [更多中文效益]</li>`,
      solution_detail_ai_assistant_implementation: "我們的流程通常包含：1. 知識庫評估與導入...",
      // ... 為 AI Assistant 頁面添加所有需要的中文鍵 ...

        // --- General Keys for Detail Pages ---
    solution_detail_subtitle_default: "釋放您的潛力",
    solution_detail_problem_title: "這是否是您的挑戰？",
    solution_detail_solution_title: "我們的解決方案：我們如何提供幫助",
    solution_detail_key_features: "關鍵功能與技術",
    solution_detail_benefits_title: "您將如何受益",
    solution_detail_use_cases_title: "理想應用場景",
    solution_detail_implementation_title: "我們的實施方法",
    solution_detail_why_us_title: "為何選擇我們的方案？",
    contact_us_for_demo: "聯繫我們獲取個人化演示",
    view_details: "查看詳情", // (您可能已經有了)



    // === 2. Data Cleansing Detail Page ===
    solution_detail_data_cleansing_page_title: "數據清理與結構化 - YourBrand AI",
    solution_detail_data_cleansing_title: "數據清理與結構化服務",
    solution_detail_data_cleansing_subtitle: "將您的混亂數據轉化為可操作資產",
    solution_detail_data_cleansing_problem: "您寶貴的數據是否被困在不一致的 Excel 表格、無法搜索的 PDF、掃描文件或分散的系統中？低劣的數據品質阻礙了準確的報告，妨礙了可靠的 AI 模型訓練，並導致有缺陷的決策，浪費您的時間和資源。",
    solution_detail_data_cleansing_solution_desc: "我們提供強大的服務，自動提取、清理、標準化和結構化您多樣化的數據源。利用智能自動化和可定制的規則，我們將您混亂的信息轉化為高質量、統一的數據池，為商業智能、AI 應用或系統遷移做好準備。停止與您的數據搏鬥；開始利用它。",
    solution_detail_data_cleansing_features_list_html: `
        <li><strong>多格式支持：</strong> 處理來自 Excel、CSV、PDF（原生及掃描 OCR）、數據庫、API 等的數據。</li>
        <li><strong>自動化數據提取：</strong> 智能識別並提取相關字段、表格和信息。</li>
        <li><strong>智能清理與驗證：</strong> 應用可定制規則進行標準化（日期、地址、代碼）、異常值檢測、重複數據刪除和缺失值處理。</li>
        <li><strong>模式映射與轉換：</strong> 將數據結構化為您期望的目標格式或數據庫模式。</li>
        <li><strong>可擴展處理：</strong> 能夠高效處理大量數據。</li>
        <li><strong>質量報告與審計追踪：</strong> 提供數據質量改進和處理步驟的洞察。</li>
    `,
    solution_detail_data_cleansing_benefits_list_html: `
        <li><strong>實現可靠的分析與 BI：</strong> 將您的報告和儀表板建立在準確、可信的數據之上。</li>
        <li>**構建高性能 AI 模型：** 通過在乾淨、結構化的數據上進行訓練，提高 AI 準確性並減少偏差。</li>
        <li><strong>簡化系統遷移：** 確保數據以一致的格式順利傳輸。</li>
        <li><strong>提高運營效率：</strong> 大幅減少手動數據輸入和校正時間。</li>
        <li><strong>加強數據治理：</strong> 為整個組織建立高質量、標準化數據的基礎。</li>
        <li><strong>自信地做出數據驅動決策：** 信任從您的數據中得出的見解。</li>
    `,
    solution_detail_data_cleansing_use_cases_desc: "對於為商業智能工具（Tableau, Power BI）準備數據、機器學習項目、ERP/CRM 系統實施或遷移、數據倉庫建設、合規報告以及整合來自併購的數據至關重要。",
    solution_detail_data_cleansing_implementation_desc: "我們的方法：1. 數據源評估與分析。2. 規則定義與配置。3. 自動化提取與清理試點。4. 全面處理與結構化。5. 質量驗證與交付。6. 可選：建立持續數據管道。",
    solution_detail_data_cleansing_why_us: "我們將自動化工具與對多樣數據格式（尤其是製造和貿易中常見的複雜文檔如 PDF 和掃描件）的深刻理解相結合。我們專注於不僅交付乾淨的數據，而且是為您特定分析或運營需求而結構化的數據。",

    // === 3. RAG Knowledge Base Detail Page ===
    solution_detail_rag_kb_page_title: "私有 RAG 知識庫 - YourBrand AI",
    solution_detail_rag_kb_title: "私有 RAG 知識庫建置",
    solution_detail_rag_kb_subtitle: "安全地釋放您的內部知識",
    solution_detail_rag_kb_problem: "您公司的集體智慧是否被鎖在分散的報告、合約、郵件、簡報和維基中？員工是否浪費時間搜索信息或「重新發明輪子」？您是否因數據隱私和安全顧慮而對使用雲端 AI 工具猶豫不決？",
    solution_detail_rag_kb_solution_desc: "我們構建一個強大的、私有的知識庫，由檢索增強生成 (RAG) 技術驅動，完全在您的安全基礎設施內運行。該系統智能地索引您的內部文檔（報告、SOP、合約、技術文檔等），並允許員工使用自然語言提問，獲得直接引用自源文檔的準確、上下文感知的答案。這就像擁有一個真正理解您業務的內部專家搜索引擎。",
    solution_detail_rag_kb_features_list_html: `
        <li><strong>本地或私有雲部署：</strong> 確保完全的數據機密性和安全性。您的文檔永遠不離開您的掌控。</li>
        <li><strong>檢索增強生成 (RAG)：</strong> 將強大的大型語言模型與直接從您的文檔中檢索相結合，提供基於事實、可引用的答案。降低「幻覺」風險。</li>
        <li><strong>廣泛的文檔支持：</strong> 導入各種格式，如 PDF、Word、PowerPoint、HTML、文本，並與現有數據庫或 SharePoint 集成。</li>
        <li><strong>自然語言查詢：</strong> 用戶以通俗語言提問，無需複雜的搜索語法。</li>
        <li><strong>來源引用：</strong> 答案包含指向源文檔的直接鏈接或引用，以便核實。</li>
        <li><strong>訪問控制集成：</strong> 可與您現有的用戶身份驗證集成，實現基於權限的知識訪問。</li>
        <li><strong>自動更新：</strong> 持續索引新的和更新的文檔，保持知識的時效性。</li>
    `,
    solution_detail_rag_kb_benefits_list_html: `
        <li><strong>加速信息發現：</strong> 在幾秒鐘內找到準確的答案和相關文檔，而不是幾小時。</li>
        <li><strong>提升員工生產力與效率：** 減少搜索和詢問同事信息的時間。</li>
        <li><strong>保存並利用企業知識：</strong> 防止因員工流失造成的知識損失，使專業知識易於獲取。</li>
        <li><strong>增強決策制定：</strong> 快速訪問相關的內部數據和見解。</li>
        <li><strong>改善入職與培訓：</strong> 為新進人員提供即時的公司知識資源。</li>
        <li><strong>維護數據安全與合規：</strong> 在您的環境中保護敏感的內部信息。</li>
    `,
    solution_detail_rag_kb_use_cases_desc: "適用於內部問答系統、研發知識管理、訪問合規與法律文件、技術支援知識庫、查找項目歷史記錄，以及從海量內部文檔庫中挖掘見解。",
    solution_detail_rag_kb_implementation_desc: "我們的流程：1. 需求分析與範圍界定。2. 基礎設施建立（本地/私有雲）。3. 文檔收集與安全導入管道。4. RAG 系統配置與索引。5. 用戶界面與訪問控制設置。6. 測試、培訓與推廣。",
    solution_detail_rag_kb_why_us: "我們專注於為您的內部知識量身定制的私有、安全的 RAG 部署。我們理解企業文檔和安全需求的細微差別，確保您獲得一個完全由您擁有和控制的可靠系統，不同於通用的雲解決方案。",

    // === 4. Analysis Reports Detail Page ===
    solution_detail_analysis_page_title: "AI 行業分析報告 - YourBrand AI",
    solution_detail_analysis_title: "AI 行業分析報告生成",
    solution_detail_analysis_subtitle: "從原始數據到戰略遠見，全程自動化",
    solution_detail_analysis_problem: "您是否難以將內部績效（銷售、訂單、供應鏈）與外部市場力量（競爭對手、趨勢、政策、原材料價格）聯繫起來？生成富有洞察力、前瞻性的報告是否是一個耗時、容易延遲且不一致的手動過程？",
    solution_detail_analysis_solution_desc: "我們由 AI 驅動的報告系統能自動生成富有洞察力的業務分析報告。它智能地整合您的內部運營數據（訂單、定價、庫存、供應鏈指標）與相關的外部來源（市場新聞、商品價格、競爭對手行動、法規變化、經濟指標）。該系統分析模式，識別風險和機遇，並生成根據您需求定制的、具備預測性和可操作性的每週或每月報告、簡報或儀表板。",
    solution_detail_analysis_features_list_html: `
        <li><strong>自動化數據整合：** 提供針對各種內部系統（ERP、CRM、數據庫）和外部數據源（API、公共數據網絡爬蟲）的連接器。</li>
        <li><strong>內外部數據融合：** 將您公司的績效與市場動態、競爭對手舉動、供應鏈事件和經濟趨勢相關聯。</li>
        <li><strong>AI 驅動模式識別與預測：</strong> 利用機器學習識別趨勢，預測未來結果（例如銷售預測、風險可能性），並檢測異常。</li>
        <li><strong>可操作的見解與建議：</strong> 不僅僅是數據呈現，還能根據分析結果建議潛在策略或緩解措施。</li>
        <li><strong>可定制報告格式：</strong> 以結構化報告（PDF、PPT）、交互式儀表板或電子郵件警報的形式提供見解。</li>
        <li><strong>計劃與按需生成：** 配置定期報告交付或根據需要生成分析。</li>
        <li><strong>私密與安全分析：** 所有分析，尤其是涉及敏感內部數據的分析，都在您的安全環境中運行。</li>
    `,
    solution_detail_analysis_benefits_list_html: `
        <li><strong>獲得前瞻性戰略洞察：</strong> 在為時已晚之前了解市場變化及其對您業務的影響。</li>
        <li><strong>提高預測準確性：</strong> 為銷售、需求和資源規劃做出更好的預測。</li>
        <li><strong>識別隱藏風險與機遇：</strong> 發現潛在的供應鏈中斷、競爭威脅或新興市場機會。</li>
        <li><strong>節省大量分析師時間：</strong> 自動化數據收集、整合和報告創建的繁瑣過程。</li>
        <li><strong>確保報告一致與及時：</strong> 定期收到可靠的見解，無需手動延遲或變動。</li>
        <li><strong>促進數據驅動決策：** 為您的領導層和團隊提供清晰、可操作的情報。</li>
    `,
    solution_detail_analysis_use_cases_desc: "適用於戰略規劃、銷售預測與管道管理、供應鏈風險評估、競爭情報監控、市場進入分析、定價優化和高階主管績效儀表板。",
    solution_detail_analysis_implementation_desc: "我們的方法：1. 需求與 KPI 定義。2. 數據源識別與整合設置。3. AI 模型選擇與配置。4. 外部數據源設置。5. 報告模板與儀表板設計。6. 自動化與排程。7. 驗證與推廣。",
    solution_detail_analysis_why_us: "我們彌合了您內部數據現實與外部市場環境之間的鴻溝。我們的 AI 專注於生成與您的行業（製造、貿易、供應鏈）相關的*可操作*見解，而不僅僅是通用圖表。私有部署確保您的戰略數據保持機密。",

    // === 5. Quality Analysis Detail Page ===
    solution_detail_quality_page_title: "AI 品質分析與改善 - YourBrand AI",
    solution_detail_quality_title: "品質數據分析與改善建議",
    solution_detail_quality_subtitle: "主動偵測缺陷，預測風險，優化品質",
    solution_detail_quality_problem: "您是否花費過多時間被動地追查品質問題？是否難以從複雜的生產數據中找出缺陷的根本原因？在潛在的品質偏差影響客戶或導致昂貴的返工/報廢之前，您是否缺乏早期預警？",
    solution_detail_quality_solution_desc: "利用 AI 的力量來轉變您的品質控制。我們的系統直接連接到您的生產線數據源（傳感器讀數、機器日誌、QC 報告、檢驗結果），並使用機器學習算法自動檢測細微的異常模式，識別影響品質的關鍵因素，預測潛在故障，並提供可操作的流程改進建議——通常在人類發現趨勢之前。",
    solution_detail_quality_features_list_html: `
        <li><strong>直接數據連接：</strong> 與 MES、SCADA、PLC、品質管理系統 (QMS)、LIMS 和手動檢驗數據集成。</li>
        <li><strong>AI 驅動異常檢測：** 識別通常在缺陷發生前出現的、偏離正常操作參數的異常模式和偏差。</li>
        <li><strong>根本原因分析輔助：** 找出與品質問題相關的統計顯著因素（例如特定的機器設置、材料批次、環境條件）。</li>
        <li><strong>預測性質量警報：</strong> 為可能導致不合格產品的批次或流程提供早期預警。</li>
        <li><strong>可操作的改進建議：** 基於歷史數據和最佳實踐，建議特定的參數調整或流程更改。</li>
        <li><strong>可視化儀表板與報告：** 為工程師和管理人員清晰呈現品質趨勢、警報和分析結果。</li>
        <li><strong>領域特定模型：** 利用適合製造業和時間序列品質數據的算法。</li>
    `,
    solution_detail_quality_benefits_list_html: `
        <li><strong>降低報廢與返工成本：** 在流程早期發現潛在問題，最大限度地減少浪費。</li>
        <li><strong>提高產品質量一致性與可靠性：** 維持更高的質量標準並減少變異。</li>
        <li><strong>降低保修索賠與退貨：</strong> 防止有缺陷的產品流向客戶。</li>
        <li><strong>優化製程參數：</strong> 微調機器設置和流程以實現最高品質良率。</li>
        <li><strong>賦能工程師數據洞察：** 提供可操作的見解，以加快故障排除和持續改進。</li>
        <li><strong>從被動轉向主動品質控制：** 預測並預防問題，而不僅僅是應對問題。</li>
    `,
    solution_detail_quality_use_cases_desc: "高效適用於製造過程控制、進料檢驗分析、最終產品質量保證、基於品質指標的預測性維護、供應商品質監控以及優化複雜裝配線。",
    solution_detail_quality_implementation_desc: "我們的流程：1. 目標設定與數據源映射。2. 數據整合與準備。3. AI 模型選擇與訓練（異常檢測、預測）。4. 警報與建議引擎配置。5. 儀表板設置與用戶培訓。6. 部署與績效監控。",
    solution_detail_quality_why_us: "我們將 AI 專業知識與對製造品質挑戰的實際理解相結合。我們的解決方案旨在與現有工廠系統集成，並提供工程師可以實際使用的清晰、可操作的建議，超越簡單的統計過程控制。",

    // === 6. IT Modernization Detail Page ===
    solution_detail_it_page_title: "IT 現代化：雲端與開源 - YourBrand AI",
    solution_detail_it_title: "IT 現代化：雲端與開源轉型",
    solution_detail_it_subtitle: "降低成本，提升敏捷性，掌控您的基礎設施",
    solution_detail_it_problem: "舊有系統是否阻礙了您的業務敏捷性？高昂的授權費用（例如 Windows Server、Oracle DB）和昂貴的硬體更新是否正在耗盡您的 IT 預算？您是否缺乏支持現代應用程序和 AI 計劃所需的靈活、可擴展的基礎設施？",
    solution_detail_it_solution_desc: "我們幫助您擺脫供應商鎖定和昂貴的傳統基礎設施。我們全面的服務指導您轉向現代化、具成本效益的雲環境（公有雲：AWS、Azure、GCP 或私有雲）以及強大的開源替代方案（Linux、PostgreSQL、Kubernetes 等）。我們平穩地管理遷移過程，確保最小化中斷、增強安全性並實現顯著的長期節省，同時提供您的業務創新所需的穩定、可擴展的基礎。",
    solution_detail_it_features_list_html: `
        <li><strong>雲遷移策略與執行：</strong> 評估工作負載，設計目標架構（公有/私有/混合雲），並管理伺服器、數據庫（例如 Oracle 到 PostgreSQL）、ERP、MES 系統的無縫遷移。</li>
        <li><strong>開源技術棧實施：** 以經過驗證的企業級開源解決方案（Linux 操作系統、KVM/Proxmox 虛擬化、Ceph 存儲、Ansible 自動化等）取代昂貴的商業軟件。</li>
        <li><strong>基礎設施即代碼 (IaC)：</strong> 使用 Terraform 和 Ansible 等工具自動化基礎設施配置和管理，以實現一致性和效率。</li>
        <li><strong>容器化與編排：** 使用 Docker 和 Kubernetes 將應用程序現代化，以提高可擴展性和可移植性。</li>
        <li><strong>強大的安全與合規：** 基於最佳實踐實施防火牆、VPN、備份/災難恢復、身份管理和日誌記錄。</li>
        <li><strong>成本優化：** 分析雲支出並實施降低運營費用的策略。</li>
        <li><strong>團隊培訓與文檔化：** 為您的 IT 團隊提供有效管理新環境所需的技能和 SOP。</li>
    `,
    solution_detail_it_benefits_list_html: `
        <li><strong>顯著降低 IT 支出：** 大幅降低與軟件授權、硬體維護和數據中心開銷相關的成本。</li>
        <li><strong>提高敏捷性與可擴展性：** 根據需求輕鬆擴展或縮減資源；更快地部署新服務。</li>
        <li><strong>消除供應商鎖定：</strong> 通過使用開放標準和技術獲得自由和靈活性。</li>
        <li><strong>增強系統可靠性與性能：** 利用現代雲基礎設施和穩定的開源軟件。</li>
        <li><strong>改善安全態勢：** 實施當前的安全最佳實踐和架構。</li>
        <li><strong>構建面向未來的基礎：** 創建 AI、大數據和數位轉型所需的強大、靈活的基礎設施。</li>
    `,
    solution_detail_it_use_cases_desc: "適用於尋求降低 IT 運營成本的公司、從昂貴的 Oracle 或 Microsoft 授權遷移的企業、採用雲原生應用程序或 AI/ML 平台的組織，以及需要可擴展、彈性且可遠程管理的基礎設施的企業。",
    solution_detail_it_implementation_desc: "我們的分階段方法：1. 評估與 TCO 分析。2. 目標架構設計與概念驗證 (PoC)。3. 分階段遷移規劃與執行。4. 開源整合與配置。5. 安全強化與測試。6. 交付、培訓與持續支持選項。",
    solution_detail_it_why_us: "我們是雲平台和開源生態系統（特別是基於 Linux 的環境）的專家。我們提供端到端的遷移服務，專注於最小化中斷和最大化成本節省，同時確保您的團隊有能力管理新的基礎設施。我們構建您擁有的解決方案，而不是將您鎖定的方案。",

          
    
    }
  };