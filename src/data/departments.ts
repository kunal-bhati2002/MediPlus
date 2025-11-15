// import type { Department } from "../components/home/DepartmentTabs";

export const departments = [
  // export const departments: Department[] = [
  // 1️⃣ CARDIAC CLINIC
  {
    id: "cardiac",
    title: "Cardiac Clinic",
    subtitle: "Heart & Vascular Care",
    icon: "❤️",
    content: {
      quote:
        "Compassionate cardiac care with advanced diagnostics for a healthier tomorrow.",
      desc: `Our Cardiac Clinic provides comprehensive treatments for heart-related
      conditions using state-of-the-art equipment and internationally approved
      protocols. From preventive checkups to complex cardiac procedures, our
      team ensures personalized care for every patient.`,

      points: [
        "Advanced ECG, 2D Echo, and Stress Test diagnostics",
        "Expert cardiologists with 24/7 emergency support",
        "Management of hypertension, arrhythmia, and heart failure",
        "Post-surgery rehabilitation & lifestyle counselling",
      ],

      treatments: [
        "Coronary Angiography",
        "Angioplasty with Stent Placement",
        "Pacemaker Implantation",
        "Cardiac Rehabilitation Program",
      ],

      image: "/images/cardiac_clinic.webp",
    },
  },

  // 2️⃣ NEUROLOGY
  {
    id: "neurology",
    title: "Neurology",
    subtitle: "Brain & Spine Care",
    icon: "🧠",
    content: {
      quote:
        "Advanced neurological care supported by cutting-edge neurodiagnostics.",
      desc: `Our Neurology Department specializes in treating disorders related
      to the brain, spinal cord, and peripheral nerves. We combine clinical
      experience with the latest technology for accurate diagnosis and
      effective long-term management.`,

      points: [
        "Comprehensive stroke care & prevention",
        "Treatment for seizures, epilepsy, and migraines",
        "Diagnosis of memory disorders including dementia",
        "Long-term management of Parkinson’s & multiple sclerosis",
      ],

      treatments: [
        "EEG & Nerve Conduction Study (NCS)",
        "Brain & Spine MRI",
        "Stroke Thrombolysis",
        "Neuro Rehabilitation Therapy",
      ],

      image: "/images/neurology_department.webp",
    },
  },

  // 3️⃣ DENTISTRY
  {
    id: "dentistry",
    title: "Dentistry",
    subtitle: "Dental & Oral Care",
    icon: "🦷",
    content: {
      quote:
        "A beautiful smile starts with trusted dental care and modern technology.",
      desc: `Our Dentistry Department offers a complete range of oral
      healthcare services from routine checkups to advanced cosmetic
      treatments. We ensure painless, safe, and hygienic procedures with
      world-class equipment.`,

      points: [
        "Digital X-ray and painless root canals",
        "Preventive dentistry for children & adults",
        "Cosmetic dental procedures including whitening & veneers",
        "Full mouth rehabilitation with implants",
      ],

      treatments: [
        "Root Canal Treatment (RCT)",
        "Dental Implants",
        "Orthodontic Braces & Aligners",
        "Teeth Whitening & Smile Designing",
      ],

      image: "/images/dentistry_department.webp",
    },
  },

  // 4️⃣ GASTROENTEROLOGY
  {
    id: "gastro",
    title: "Gastroenterology",
    subtitle: "Digestive Health Care",
    icon: "💙",
    content: {
      quote:
        "Comprehensive digestive care with advanced endoscopic procedures.",
      desc: `Our Gastroenterology Department specializes in diagnosing and managing
      conditions related to the stomach, liver, pancreas, and intestines. With
      experienced gastroenterologists and modern endoscopy units, we provide
      accurate and minimally invasive treatments.`,

      points: [
        "Treatment for acidity, IBS, IBD, and chronic gastritis",
        "Liver disease management including fatty liver & hepatitis",
        "Advanced endoscopy & colonoscopy services",
        "Pancreatic disorder evaluation & treatment",
      ],

      treatments: [
        "Upper GI Endoscopy",
        "Colonoscopy & Polypectomy",
        "Liver FibroScan",
        "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
      ],

      image: "/images/gastroenterology_department.webp",
    },
  },

  // 5️⃣ ORTHOPEDAGOGY (Orthopedics)
  {
    id: "orthopedagogy",
    title: "Orthopedagogy",
    subtitle: "Bone & Joint Care",
    icon: "🦴",
    content: {
      quote:
        "Trusted orthopedic care to help you move freely and live pain-free.",
      desc: `The Orthopedics Department provides advanced treatments for bone,
      joint, ligament, and spine-related conditions. From sports injuries to
      chronic arthritis, we deliver personalized surgical and non-surgical
      care.`,

      points: [
        "Diagnosis and treatment of fractures & joint injuries",
        "Arthritis and osteoporosis management",
        "Sports injury care with physiotherapy support",
        "Joint replacement surgeries with rapid recovery programs",
      ],

      treatments: [
        "Knee Replacement",
        "Hip Replacement",
        "Arthroscopy (Shoulder/Knee)",
        "Physiotherapy & Rehabilitation Programs",
      ],

      image: "/images/orthopedics_department.webp",
    },
  },
];
