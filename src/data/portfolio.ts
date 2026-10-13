// ── TadabburLens evidence ───────────────────────────────────────────────────
import portraitFormal from "../assets/portraits/portrait-formal.jpg";
import portraitSeated from "../assets/portraits/portrait-seated.jpg";
import tlSplash from "../assets/images/tadabburlens/display/splash-screen.jpg";
import tlHome from "../assets/images/tadabburlens/display/home-screen.jpg";
import tlLoadingState from "../assets/images/tadabburlens/display/deteksi-screen(loadingstate).png";
import tlLoadingSuccess from "../assets/images/tadabburlens/display/deteksi-screen(loadingsuccess).png.jpg";
import tlResult from "../assets/images/tadabburlens/display/deteksi-screen(result).png";
import tlManualCorrection from "../assets/images/tadabburlens/display/deteksi-screen(manual-correction).png.jpg";
import tlAlternativeChar from "../assets/images/tadabburlens/display/deteksi-screen(alternative-char).png";
import tlAfterCorrection from "../assets/images/tadabburlens/display/deteksi-screen(after-correction)).png.jpg";
import tlGaleri from "../assets/images/tadabburlens/display/galeri-screen.png";
import tlHistory from "../assets/images/tadabburlens/display/history-screen.jpg";
import tlConfmat from "../assets/images/tadabburlens/instrumen/confusion-matrix.png";
import tlCurves from "../assets/images/tadabburlens/instrumen/validation-curves.png";
import tlDatasetDist from "../assets/images/tadabburlens/instrumen/dataset-distribution.png";
import tlUatTable from "../assets/images/tadabburlens/instrumen/uat-table.png";

// ── YoLiYo evidence ─────────────────────────────────────────────────────────
import yyLogin from "../assets/images/yoliyo/display/login-page.png";
import yyDashboard from "../assets/images/yoliyo/display/dashboard-page.png";
import yyOrderMgmt from "../assets/images/yoliyo/display/order-management-page.png";
import yyOrderDetail from "../assets/images/yoliyo/display/order-detail-modal.png";
import yyProductsInv from "../assets/images/yoliyo/display/product-inventory-page.png";
import yyAddProduct from "../assets/images/yoliyo/display/add-product-modal.png";
import yyEditProduct from "../assets/images/yoliyo/display/edit-product-modal.png";
import yyCustomerContacts from "../assets/images/yoliyo/display/customer-contacts-page.png";
import yyCustomerDetail from "../assets/images/yoliyo/display/customer-detail-modal.png";
import yyAnalytics from "../assets/images/yoliyo/display/analytics-page.png";
import yyAccountDetail from "../assets/images/yoliyo/display/account-detail-page.png";
import yyAccountAdmin from "../assets/images/yoliyo/display/account-adminmanagement-page.png";
import yyAuditLog from "../assets/images/yoliyo/display/account-auditlog-page.png";
import yyTelegram1 from "../assets/images/yoliyo/display/telegram-response-chatbot-review.png";
import yyTelegram2 from "../assets/images/yoliyo/display/telegram-response-chatbot-review2.png";
import yyWorkflowUtama from "../assets/images/yoliyo/instrumen/workflow-utama-chatbot.png";
import yyWorkflowPesanan from "../assets/images/yoliyo/instrumen/workflow-pemesanan-chatbot.png";
import yyWorkflowWebhook from "../assets/images/yoliyo/instrumen/workflow-webhook-chatbot.png";
import yyUat1 from "../assets/images/yoliyo/instrumen/uat-1.png";

// ── TashkiFlow evidence ─────────────────────────────────────────────────────
import tfSplash from "../assets/images/tashkiflow/display/splash-screen.jpeg";
import tfHomeUp from "../assets/images/tashkiflow/display/home-screen-up.jpeg";
import tfHomeBottom from "../assets/images/tashkiflow/display/home-screen-bottom.jpeg";
import tfPerspective from "../assets/images/tashkiflow/display/preview-perspective-screen.jpeg";
import tfEnhance from "../assets/images/tashkiflow/display/preview-enhace-screen.jpeg";
import tfProcessing from "../assets/images/tashkiflow/display/processing-screen.jpeg";
import tfResultUp from "../assets/images/tashkiflow/display/result-screen-up.jpeg";
import tfResultBottom from "../assets/images/tashkiflow/display/result-screen-bottom.jpeg";
import tfShareExport from "../assets/images/tashkiflow/display/share-export-screen.jpeg";
import tfHistory from "../assets/images/tashkiflow/display/history-screen.jpeg";
import tfArbitration from "../assets/images/tashkiflow/instrumen/arbitration-engine.png";
import tfBbox from "../assets/images/tashkiflow/instrumen/ocr-bounding-box.png";
import tfEvaluasi from "../assets/images/tashkiflow/instrumen/evaluasi-metrik-blackbox.png";
import tfSwagger from "../assets/images/tashkiflow/instrumen/Swagger-UI.png";

export type Metric = {
  value: string;
  label: string;
  note?: string;
};

/** One slide inside a swipeable phone/screen frame. */
export type Slide = { src: ImageMetadata; caption?: string; label?: string };

export type EvidenceItem =
  | { kind: "phone"; caption: string; src: ImageMetadata; label?: string; slides?: Slide[] }
  | { kind: "screen"; caption: string; src: ImageMetadata; label?: string; slides?: Slide[] }
  | { kind: "panel"; caption: string; rows: Array<[string, string]> };

export type Project = {
  id: string;
  index: string;
  name: string;
  role: string;
  timeframe: string;
  domain: string;
  summary: string;
  detail: string[];
  stack: string[];
  metrics: Metric[];
  primary: EvidenceItem;
  instrumentation: EvidenceItem[];
  limitation?: string;
};

export const profile = {
  name: "Hanif Muhammad Zhafran Sutisna",
  shortName: "H. M. Z. Sutisna",
  positioning:
    "An Informatics Engineering graduate who builds intelligent applications by bridging AI/ML research with practical software engineering.",
  discipline: ["AI / MACHINE LEARNING", "COMPUTER VISION", "NLP", "SOFTWARE ENGINEERING"],
  signals: [
    ["INSTITUTION", "Gunadarma University"],
    ["PROGRAM", "Informatics Engineering — fresh graduate"],
    ["CURRENT ROLE", "AI Engineer Intern, MK RI"],
    ["RESEARCH", "Arabic OCR & diacritization"],
    ["TEACHING", "Former Tutor & Laboratory Assistant, LePKom"],
  ] as Array<[string, string]>,
  portrait: portraitFormal,
  portraitAlt: portraitSeated,
};

export const about = {
  eyebrow: "LOG / 002",
  title: "Research context",
  paragraphs: [
    "I’m Hanif Muhammad Zhafran Sutisna, an Informatics Engineering graduate from Gunadarma University and an AI Engineer intern at the Constitutional Court of Indonesia.",
    "My projects include Arabic OCR with a FastAPI backend, on-device Hijaiyah recognition, and ordering automation for a food business.",
  ],
  domains: [
    ["COMPUTER VISION", "Image classification, recognition pipelines"],
    ["NLP", "Diacritization, sequence modelling"],
    ["ANDROID", "On-device model integration"],
    ["AUTOMATION", "Bot & workflow systems"],
    ["WEB SYSTEMS", "Dashboards, data-facing interfaces"],
    ["OCR", "Document & handwriting pipelines"],
  ] as Array<[string, string]>,
  currentWork: {
    title: "AI Engineer Intern at MK RI",
    period: "Sep 2026 – Present · Internship",
    description: "I’m developing a public-service chatbot, preparing its knowledge base from official MK RI sources, and connecting escalation to a CRM and live agents.",
    detail: "I also experiment with local LLMs through Ollama and define API contracts. I test routing against typos, edge cases, and prompt injection.",
  },
  teaching: {
    label: "FORMER TUTOR & LABORATORY ASSISTANT — LePKom",
    title: "Tutor & Laboratory Assistant at LePKom",
    period: "Sep 2024 – Sep 2026 · Part-time",
    description: "Previously, I supported Java, Go, SQL/DBMS, and web application practicals for classes of around 30–37 students. I helped students with coding and debugging.",
    subjects: ["Java", "Go", "SQL / DBMS", "Web Application Development"],
  },
};

export const projects: Project[] = [
  {
    id: "tadabburlens",
    index: "01",
    name: "TadabburLens",
    role: "Developer / Project Author",
    timeframe: "Academic computer vision project · 2025",
    domain: "COMPUTER VISION · MOBILE AI",
    summary:
      "An on-device Arabic script lens: photograph a letter and a MobileNetV2 classifier returns the Hijaiyah class, running inside an Android app through TensorFlow Lite.",
    detail: [
      "Built as a scientific project with a measurable goal: assemble a 45,308-image dataset across 29 classes, fine-tune MobileNetV2 with transfer learning, and ship the model onto a phone.",
      "The model was evaluated both numerically (validation accuracy, per-class precision/recall, confusion matrix) and with user acceptance testing on the full mobile flow.",
    ],
    stack: ["Python", "TensorFlow", "MobileNetV2", "TFLite", "Kotlin", "Android"],
    metrics: [
      { value: "45,308", label: "training images", note: "dataset_v5 · 29 classes" },
      { value: "98.41%", label: "validation accuracy" },
      { value: "88.57%", label: "UAT score" },
    ],
    primary: {
      kind: "phone",
      caption: "Swipe through the detection flow: splash → home → loading → result → correction options.",
      src: tlSplash,
      label: "tadabburlens",
      slides: [
        { src: tlSplash, caption: "App splash screen", label: "splash-screen" },
        { src: tlHome, caption: "Main home screen ready to scan", label: "home-screen" },
        { src: tlLoadingState, caption: "Loading state during inference", label: "loading-state" },
        { src: tlLoadingSuccess, caption: "Loading complete, model ready", label: "loading-success" },
        { src: tlResult, caption: "Detection result: recognized letter shown", label: "detection-result" },
        { src: tlManualCorrection, caption: "Manual correction options available", label: "manual-correction" },
        { src: tlAlternativeChar, caption: "Alternative character suggestions", label: "alternative-character" },
        { src: tlAfterCorrection, caption: "Final corrected result", label: "after-correction" },
        { src: tlGaleri, caption: "Hijaiyah gallery of learned letters", label: "gallery-screen" },
        { src: tlHistory, caption: "Detection history and saved scans", label: "history-screen" },
      ],
    },
    instrumentation: [
      { kind: "screen", caption: "Confusion matrix, MobileNetV2 across 29 Hijaiyah classes.", src: tlConfmat },
      { kind: "screen", caption: "Validation accuracy & loss curves during training.", src: tlCurves },
      { kind: "screen", caption: "Dataset distribution visualization (45,308 images).", src: tlDatasetDist },
      { kind: "screen", caption: "User Acceptance Testing results (88.57% success rate).", src: tlUatTable },
    ],
  },
  {
    id: "yoliyo-mentai",
    index: "02",
    name: "YoLiYo Mentai",
    role: "Full-Stack Developer",
    timeframe: "Team project · Pengelolaan Proyek Perangkat Lunak · 2026",
    domain: "AUTOMATION · AI INTEGRATION",
    summary:
      "An ordering system for a real MSME client: customers order through a Telegram chatbot (n8n + AI agent), payments run through Midtrans, and the owner runs the business from a React dashboard backed by Supabase.",
    detail: [
      "Group coursework required a real client — the client here is a family-owned food MSME. Full-stack development of the system (database, chatbot, dashboard, UI/UX, user testing) was carried out by me; teammates handled project management artefacts (BRD/PRD) and product direction.",
      "Published with the team's permission. Integration depth is described from the built system itself.",
    ],
    stack: ["React", "Supabase", "n8n", "Telegram Bot", "Midtrans", "AI Agent"],
    metrics: [
      { value: "100%", label: "UAT", note: "accepted by the business owner" },
    ],
    primary: {
      kind: "screen",
      caption: "Complete admin workflow: login → dashboard → orders/products/customers → analytics + Telegram bot interactions.",
      src: yyLogin,
      label: "yoliyo-mentai",
      slides: [
        { src: yyLogin, caption: "Admin login page", label: "login-page" },
        { src: yyDashboard, caption: "Main dashboard with KPIs", label: "dashboard-page" },
        { src: yyOrderMgmt, caption: "Order management overview", label: "order-management-page" },
        { src: yyOrderDetail, caption: "Order detail modal", label: "order-detail-modal" },
        { src: yyProductsInv, caption: "Products and inventory management", label: "products-inventory-page" },
        { src: yyAddProduct, caption: "Add new product modal", label: "add-product-modal" },
        { src: yyEditProduct, caption: "Edit existing product modal", label: "edit-product-modal" },
        { src: yyCustomerContacts, caption: "Customer and contacts page", label: "customer-contacts-page" },
        { src: yyCustomerDetail, caption: "Customer detail modal", label: "customer-detail-modal" },
        { src: yyAnalytics, caption: "Analytics and reporting dashboard", label: "analytics-page" },
        { src: yyAccountDetail, caption: "Account detail view", label: "account-detail-page" },
        { src: yyAccountAdmin, caption: "Admin account management", label: "account-admin-management-page" },
        { src: yyAuditLog, caption: "Audit log page", label: "account-audit-log-page" },
        { src: yyTelegram1, caption: "Telegram chatbot response flow (1)", label: "telegram-response-chatbot-1" },
        { src: yyTelegram2, caption: "Telegram chatbot response flow (2)", label: "telegram-response-chatbot-2" },
      ],
    },
    instrumentation: [
      { kind: "screen", caption: "Primary n8n workflow automation", src: yyWorkflowUtama },
      { kind: "screen", caption: "Ordering workflow process", src: yyWorkflowPesanan },
      { kind: "screen", caption: "Webhook configuration for payment callbacks", src: yyWorkflowWebhook },
      { kind: "screen", caption: "User Acceptance Testing validation (100%).", src: yyUat1 },
    ],
  },
  {
    id: "tashkiflow",
    index: "03",
    name: "TashkiFlow",
    role: "Thesis Researcher & Developer",
    timeframe: "Undergraduate thesis research · 2026",
    domain: "OCR · NLP · MOBILE PIPELINE",
    summary:
      "An Arabic OCR and diacritization pipeline: scan a page, a hybrid OCR engine (PaddleOCR + Kraken, arbitration-merged) extracts the text, a sequence model restores the harakat, and an Android app presents Arabic + diacritics + Latin transliteration.",
    detail: [
      "Measured per stage rather than with one accuracy figure, because each stage fails differently — character, word and diacritic error rates are reported separately.",
      "Iterated through 20+ pipeline builds (v79 → v80) with per-stage evaluation before the final architecture was fixed.",
    ],
    stack: ["Python", "PaddleOCR", "Kraken", "Diacritization", "FastAPI", "Android"],
    metrics: [
      { value: "13.79%", label: "average CER", note: "character error rate" },
      { value: "23.15%", label: "average WER", note: "word error rate" },
      { value: "25.75%", label: "average DER", note: "diacritic error rate" },
    ],
    primary: {
      kind: "phone",
      caption: "End-to-end scanning experience: capture → enhance → process → results export.",
      src: tfSplash,
      label: "tashkiflow",
      slides: [
        { src: tfSplash, caption: "App initialization", label: "splash-screen" },
        { src: tfHomeUp, caption: "Home screen (top half)", label: "home-screen-up" },
        { src: tfHomeBottom, caption: "Home screen (bottom half)", label: "home-screen-bottom" },
        { src: tfPerspective, caption: "Preview with perspective correction", label: "preview-perspective-screen" },
        { src: tfEnhance, caption: "Preview enhancement options", label: "preview-enhance-screen" },
        { src: tfProcessing, caption: "Processing scan with progress indicator", label: "processing-screen" },
        { src: tfResultUp, caption: "Result screen (top half)", label: "result-screen-up" },
        { src: tfResultBottom, caption: "Result screen (bottom half)", label: "result-screen-bottom" },
        { src: tfShareExport, caption: "Share and export results", label: "share-export-screen" },
        { src: tfHistory, caption: "Scan history and saved results", label: "history-screen" },
      ],
    },
    instrumentation: [
      { kind: "screen", caption: "Hybrid OCR arbitration engine decisions", src: tfArbitration },
      { kind: "screen", caption: "OCR bounding boxes over scanned text", src: tfBbox },
      { kind: "screen", caption: "Black box evaluation metrics (CER/WER/DER)", src: tfEvaluasi },
      { kind: "screen", caption: "REST API documentation (Swagger UI)", src: tfSwagger },
    ],
    limitation:
      "Known limitation: classical handwritten Arabic remains difficult for this pipeline — character error rate rises to 40.52% on that subset. The results above are not a claim of flawless accuracy.",
  },
];

export const contact = [
  { label: "GITHUB", href: "https://github.com/ecHZee" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/hanifzhfran/" },
  { label: "EMAIL", href: "mailto:hz.sutisna2042@gmail.com" },
  { label: "RESUME", href: "mailto:hz.sutisna2042@gmail.com?subject=Resume%20request" },
];
