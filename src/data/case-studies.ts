import { projects, type Project, type Slide } from './portfolio';
import tfInput from '../assets/images/tashkiflow/display/preview-perspective-screen.jpeg';
import tfOutput from '../assets/images/tashkiflow/display/result-screen-up.jpeg';
import tlOutput from '../assets/images/tadabburlens/display/deteksi-screen(result).png';
import tlGallery from '../assets/images/tadabburlens/display/galeri-screen.png';
import yyDashboard from '../assets/images/yoliyo/display/dashboard-page.png';

export type CaseStudy = {
  project: Project; category: string; introduction: string; headline: string; contribution: string;
  problem: string; decisions: { title: string; description: string }[]; resultContext: string;
  repository: string; cover: ImageMetadata; pairedCover?: ImageMetadata; coverCaption: string;
  shortMetric: string; shortMetricLabel: string; evaluationNotes: string[]; architectureNotes: string[]; architecture: string[];
};
const find = (id: string) => projects.find((project) => project.id === id)!;
export const caseStudies: CaseStudy[] = [
  {
    project: find('tashkiflow'), category: 'OCR / NLP / Android',
    headline: 'A scanned page. Arabic text you can use.',
    introduction: 'A hybrid Arabic OCR pipeline with diacritization, Latin transliteration, and an Android scanning experience.',
    contribution: 'Thesis research, OCR pipeline development, evaluation, and the Android scanning flow.',
    problem: 'Reading an Arabic document involves more than detecting characters. This project connects recognition, restored diacritics, and readable output in one scanning workflow.',
    decisions: [
      { title: 'Let two OCR engines contribute', description: 'PaddleOCR and Kraken feed a hybrid arbitration stage, rather than treating one engine as equally reliable for every image.' },
      { title: 'Measure each stage separately', description: 'Character, word, and diacritic error rates expose different failure modes. The portfolio reports them separately instead of combining them into one accuracy claim.' },
      { title: 'Give the pipeline an application flow', description: 'The Android experience includes capture, perspective correction, enhancement, progress, results, export, and saved scans. FastAPI exposes the pipeline.' },
    ],
    resultContext: 'The original thesis evaluation reports mean character, word, and diacritic error rates across six samples. Lower values mean fewer errors in each stage.',
    repository: 'https://github.com/ecHZee/TashkiFlow', cover: tfOutput, pairedCover: tfInput,
    coverCaption: 'Perspective-corrected input and the actual Android result screen.',
    shortMetric: '13.79%', shortMetricLabel: 'character error rate · 6 samples',
    evaluationNotes: ['The original evaluation records mean character, word, and diacritic error rates across six samples, alongside eight black-box scenarios. The project also reports the worst sample separately.'],
    architectureNotes: ['An original runtime record of the hybrid OCR arbitration stage.', 'Recognition boxes over the scanned Arabic page.', 'The original FastAPI documentation screenshot.'],
    architecture: ['Capture & enhance', 'Hybrid OCR', 'Diacritize & transliterate', 'Review & export'],
  },
  {
    project: find('tadabburlens'), category: 'Computer vision / Mobile AI',
    headline: 'Recognize a letter, right on the phone.',
    introduction: 'An Android application that classifies Hijaiyah letters with a MobileNetV2 model running through TensorFlow Lite.',
    contribution: 'Dataset preparation, transfer learning, model evaluation, and Android model integration.',
    problem: 'The scientific project connects a 29-class Arabic letter classifier with a mobile experience: capture an image, review a prediction, and correct the result when needed.',
    decisions: [
      { title: 'Start with a defined classification task', description: 'The project uses 45,308 images across 29 Hijaiyah classes. MobileNetV2 is fine-tuned through transfer learning.' },
      { title: 'Run inference on the device', description: 'TensorFlow Lite places the classifier inside the Kotlin application, with capture, prediction, manual correction, a letter gallery, and history.' },
      { title: 'Evaluate the model and the experience', description: 'Validation accuracy and the confusion matrix describe model behavior. User Acceptance Testing provides a separate view of the mobile flow.' },
    ],
    resultContext: 'Validation accuracy measures the classifier on the project’s validation set. User Acceptance Testing evaluates the mobile experience separately.',
    repository: 'https://github.com/ecHZee/TadabburLens', cover: tlOutput, pairedCover: tlGallery,
    coverCaption: 'A detection result and the application’s Hijaiyah gallery.',
    shortMetric: '98.41%', shortMetricLabel: 'validation accuracy',
    evaluationNotes: ['Original classifier evaluation across 29 classes. This is a model result, not a measure of the entire application.', 'Training and validation curves from the project, read alongside the reported validation accuracy.', 'The source portfolio records 45,308 images across 29 classes. This is not the size of a separate test set.', 'Original user acceptance results, reported separately from model validation accuracy.'],
    architectureNotes: [], architecture: ['Capture a letter', 'MobileNetV2 / TFLite', 'Review prediction', 'Correct & save'],
  },
  {
    project: find('yoliyo-mentai'), category: 'Automation / Full-stack',
    headline: 'From a chat message to an order workflow.',
    introduction: 'A Telegram ordering system and React administration dashboard for a real food MSME client.',
    contribution: 'Database, chatbot, dashboard, UI/UX, and user testing; teammates owned project-management artefacts and product direction.',
    problem: 'A team software-project course required a real client. The system links a customer-facing Telegram chatbot with payment integration and an owner-facing business dashboard.',
    decisions: [
      { title: 'Connect customer and owner workflows', description: 'Telegram and n8n support the ordering interaction. React and Supabase support the owner’s view of orders, products, customers, and analytics.' },
      { title: 'Handle payments through an integration', description: 'Midtrans and payment callbacks form part of the system. Original workflow screenshots document the integration.' },
      { title: 'Make the team contribution explicit', description: 'Hanif carried out full-stack development and user testing. Teammates handled BRD/PRD and product direction. Publication was made with the team’s permission.' },
    ],
    resultContext: 'User Acceptance Testing was accepted by the business owner. The result describes the owner’s acceptance of the tested system.',
    repository: 'https://github.com/ecHZee/YoLiYo-Mentai', cover: yyDashboard,
    coverCaption: 'The actual administration dashboard, including order and business views.',
    shortMetric: '100%', shortMetricLabel: 'owner UAT acceptance',
    evaluationNotes: ['Original User Acceptance Testing record, accepted by the business owner.'],
    architectureNotes: ['The original n8n automation overview.', 'The ordering workflow as documented in the project.', 'The payment webhook configuration screenshot.'],
    architecture: ['Customer orders', 'Bot & automation', 'Payment callback', 'Owner dashboard'],
  },
];
export function applicationSlides(study: CaseStudy): Slide[] {
  const primary = study.project.primary;
  return primary.kind === 'panel' ? [] : primary.slides ?? [{ src: primary.src, caption: primary.caption }];
}
export function evidenceGroups(study: CaseStudy) {
  const all = study.project.instrumentation.filter((item) => item.kind !== 'panel');
  const evaluation = study.project.id === 'tashkiflow' ? [all[2]] : study.project.id === 'yoliyo-mentai' ? [all[3]] : all;
  const architecture = study.project.id === 'tashkiflow' ? [all[0], all[1], all[3]] : study.project.id === 'yoliyo-mentai' ? all.slice(0, 3) : [];
  return { evaluation, architecture };
}
