import { BiLogoCss3, BiLogoMongodb, BiLogoNodejs, BiLogoReact } from "react-icons/bi";
import { SiExpress, SiMongodb, SiJavascript, SiPython, SiCss3, SiMysql, SiReact, SiGooglecolab, SiHtml5, SiNumpy, SiTensorflow, SiFlask, SiVite } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Web Watcher",
    image: "./web.png",
    icons: [SiPython, SiFlask, SiHtml5, BiLogoCss3, SiJavascript],
    description: "ML-based Chrome extension to detect and classify website legitimacy, preventing spoofing attacks.",
    github: "https://github.com/divyapadisetti21/web-watcher-extension",
    demo: "https://github.com/divyapadisetti21/web-watcher-extension",
  },
  {
    id: "2",
    name: "E-Commerce Website",
    image: "./forever.png",
    icons: [BiLogoReact, SiExpress, SiMongodb, BiLogoNodejs],
    description: "MERN stack shopping store with search, secure checkout, and payment gateway.",
    github: "https://github.com/divyapadisetti21/e-commerce",
    demo: "https://e-commerce-one-lemon-70.vercel.app",
  },
  {
    id: "3",
    name: "Gemini Clone",
    image: "./gemini.png",
    icons: [BiLogoReact, SiCss3],
    description: "Web-based interface replicating Gemini's clean, interactive design for smooth user interaction.",
    github: "https://github.com/divyapadisetti21/GeminiClone",
    demo: "https://gemini-clone-lyart-phi.vercel.app",
  },
  {
    id: "4",
    name: "Bank Management System",
    image: "./bankist.png",
    icons: [ BiLogoReact, SiExpress, BiLogoNodejs, SiMysql],
    description: "Banking app for balances, transfers, loans, and transaction tracking.",
    github: "https://github.com/divyapadisetti21/bank-management",
    demo: "https://bank-management-five.vercel.app",
  },
  {
    id: "5",
    name: "Resume Maker",
    image: "./resume.png",
    icons: [SiVite, BiLogoReact, BiLogoCss3],
    description: "Web tool for ATS-friendly resumes with live preview, customizable sections, and multi-format export.",
    github: "https://github.com/divyapadisetti21/ResumeMaker",
    demo: "https://resume-maker-neon-one.vercel.app",
  },
  {
    id: "6",
    name: "Next Word Predictor",
    image: "./nlp.png",
    icons: [SiPython, SiNumpy, SiTensorflow, SiGooglecolab],
    description: "ML model that predicts the next word in a sentence using context analysis.",
    github: "https://github.com/divyapadisetti21/nextWordPredictor",
    demo: "https://colab.research.google.com/drive/1DTcBwUZfdLM8cV-hQio_Knig3iUYN1Hr?usp=sharing",
  },
  {
    id: "7",
    name: "Blood Management System",
    image: "./blood.png",
    icons: [SiReact, BiLogoNodejs, BiLogoMongodb, SiExpress],
    description: "OTP login app for donor-recipient matching, live chat and request tracking.",
    github: "https://github.com/divyapadisetti21/blood-donation-management",
    demo: "https://blood-donation-management-one.vercel.app",
  },
  {
    id: "8",
    name: "Restaurant Table Booking",
    image: "./food.png",
    icons: [SiVite, BiLogoReact, SiExpress, BiLogoCss3, SiMongodb],
    description: " A simple web app for browsing restaurants & their menus, reserving tables",
    github: "https://github.com/divyapadisetti21/Restaurant-table-booking",
    demo: "https://restaurant-table-booking-livid.vercel.app",
  },
];

export default ProjectsData;


