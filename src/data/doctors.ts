export interface Doctor {
  id: string;
  name: string;
  slug: string;

  specialty: string;

  qualifications: string[];
  experienceYears: number;

  profileImage: string;
  gender: "Male" | "Female" | "Other";

  languages: string[];

  consultationFee: number;
  rating: number;
  happyPatients: number;

  about: string;

  availability: {
    days: string[];
    time: string;
  };

  contact: {
    email: string;
    phone: string;
  };

  services: string[];
}

export const doctors: Doctor[] = [
  {
    id: "doc-001",
    name: "Dr. Rahul Sharma",
    slug: "dr-rahul-sharma",
    specialty: "cardiac",
    qualifications: ["MBBS", "MD (Cardiology)", "DM Cardiology"],
    experienceYears: 15,
    profileImage: "/images/doctors/rahul-sharma.jpg",
    gender: "Male",
    languages: ["English", "Hindi"],
    consultationFee: 800,
    rating: 4.7,
    happyPatients: 312,
    about:
      "Senior cardiologist specializing in heart failure management, hypertension, and interventional cardiology.",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      time: "10:00 AM - 2:00 PM",
    },
    contact: {
      email: "rahul.sharma@mediplus.com",
      phone: "+91 98765 43210",
    },
    services: ["ECG", "Echocardiography", "Angiography"],
  },

  {
    id: "doc-002",
    name: "Dr. Ananya Verma",
    slug: "dr-ananya-verma",
    specialty: "dentistry",
    qualifications: ["BDS", "MDS"],
    experienceYears: 8,
    profileImage: "/images/doctors/ananya-verma.jpg",
    gender: "Female",
    languages: ["English", "Hindi"],
    consultationFee: 600,
    rating: 4.5,
    happyPatients: 198,
    about:
      "Dental specialist focusing on cosmetic dentistry and oral health care.",
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      time: "11:00 AM - 4:00 PM",
    },
    contact: {
      email: "ananya.verma@mediplus.com",
      phone: "+91 91234 56789",
    },
    services: ["Root Canal", "Braces", "Teeth Whitening"],
  },

  {
    id: "doc-003",
    name: "Dr. Mohit Jain",
    slug: "dr-mohit-jain",
    specialty: "ortho",
    qualifications: ["MBBS", "MS (Orthopedics)"],
    experienceYears: 12,
    profileImage: "/images/doctors/mohit-jain.jpg",
    gender: "Male",
    languages: ["English", "Hindi"],
    consultationFee: 700,
    rating: 4.6,
    happyPatients: 254,
    about:
      "Orthopedic surgeon specializing in joint replacement and sports injuries.",
    availability: {
      days: ["Monday", "Tuesday", "Thursday"],
      time: "9:00 AM - 1:00 PM",
    },
    contact: {
      email: "mohit.jain@mediplus.com",
      phone: "+91 99887 66554",
    },
    services: ["Joint Replacement", "Arthroscopy", "Fracture Care"],
  },

  {
    id: "doc-004",
    name: "Dr. Arjun Malhotra",
    slug: "dr-arjun-malhotra",
    specialty: "neurology",
    qualifications: ["MBBS", "MD (Neurology)", "DM Neurology"],
    experienceYears: 14,
    profileImage: "/images/doctors/arjun-malhotra.jpg",
    gender: "Male",
    languages: ["English", "Hindi"],
    consultationFee: 900,
    rating: 4.7,
    happyPatients: 276,
    about: "Specialist in brain, spine, and nerve-related disorders.",
    availability: {
      days: ["Monday", "Thursday"],
      time: "11:00 AM - 2:00 PM",
    },
    contact: {
      email: "arjun.malhotra@mediplus.com",
      phone: "+91 93456 78901",
    },
    services: ["Migraine Treatment", "Epilepsy Care", "Stroke Management"],
  },

  {
    id: "doc-005",
    name: "Dr. Rakesh Kumar",
    slug: "dr-rakesh-kumar",
    specialty: "gastro",
    qualifications: ["MBBS", "MD (Gastroenterology)"],
    experienceYears: 18,
    profileImage: "/images/doctors/rakesh-kumar.jpg",
    gender: "Male",
    languages: ["English", "Hindi"],
    consultationFee: 500,
    rating: 4.4,
    happyPatients: 410,
    about: "Gastroenterologist treating digestive system and liver disorders.",
    availability: {
      days: ["Monday", "Tuesday", "Friday"],
      time: "9:00 AM - 12:00 PM",
    },
    contact: {
      email: "rakesh.kumar@mediplus.com",
      phone: "+91 88877 66554",
    },
    services: ["Endoscopy", "Liver Care", "Acidity Treatment"],
  },

  {
    id: "doc-006",
    name: "Dr. Sneha Kapoor",
    slug: "dr-sneha-kapoor",
    specialty: "cardiac",
    qualifications: ["MBBS", "MD (Cardiology)"],
    experienceYears: 7,
    profileImage: "/images/doctors/sneha-kapoor.jpg",
    gender: "Female",
    languages: ["English", "Hindi"],
    consultationFee: 550,
    rating: 4.6,
    happyPatients: 189,
    about:
      "Young cardiologist focusing on preventive cardiology and lifestyle care.",
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      time: "10:00 AM - 1:00 PM",
    },
    contact: {
      email: "sneha.kapoor@mediplus.com",
      phone: "+91 90123 45678",
    },
    services: ["Heart Checkup", "ECG", "Cholesterol Management"],
  },

  {
    id: "doc-007",
    name: "Dr. Kavita Nair",
    slug: "dr-kavita-nair",
    specialty: "dentistry",
    qualifications: ["BDS", "MDS"],
    experienceYears: 9,
    profileImage: "/images/doctors/kavita-nair.jpg",
    gender: "Female",
    languages: ["English", "Hindi", "Malayalam"],
    consultationFee: 600,
    rating: 4.5,
    happyPatients: 167,
    about: "Dental surgeon with expertise in advanced oral procedures.",
    availability: {
      days: ["Wednesday", "Friday"],
      time: "10:00 AM - 1:00 PM",
    },
    contact: {
      email: "kavita.nair@mediplus.com",
      phone: "+91 97654 32109",
    },
    services: ["Dental Implants", "Tooth Extraction", "Oral Surgery"],
  },

  {
    id: "doc-008",
    name: "Dr. Amit Bansal",
    slug: "dr-amit-bansal",
    specialty: "gastro",
    qualifications: ["MBBS", "MD (Gastroenterology)"],
    experienceYears: 11,
    profileImage: "/images/doctors/amit-bansal.jpg",
    gender: "Male",
    languages: ["English", "Hindi"],
    consultationFee: 750,
    rating: 4.6,
    happyPatients: 221,
    about: "Expert in gastrointestinal and digestive tract disorders.",
    availability: {
      days: ["Tuesday", "Friday"],
      time: "12:00 PM - 4:00 PM",
    },
    contact: {
      email: "amit.bansal@mediplus.com",
      phone: "+91 98712 33445",
    },
    services: ["IBS Treatment", "Liver Disorders", "Colonoscopy"],
  },

  {
    id: "doc-009",
    name: "Dr. Neha Roy",
    slug: "dr-neha-roy",
    specialty: "neurology",
    qualifications: ["MBBS", "MD (Neurology)"],
    experienceYears: 6,
    profileImage: "/images/doctors/neha-roy.jpg",
    gender: "Female",
    languages: ["English", "Hindi", "Bengali"],
    consultationFee: 700,
    rating: 4.8,
    happyPatients: 143,
    about:
      "Neurology consultant focusing on stress-related neurological disorders.",
    availability: {
      days: ["Monday", "Thursday", "Saturday"],
      time: "3:00 PM - 7:00 PM",
    },
    contact: {
      email: "neha.roy@mediplus.com",
      phone: "+91 98989 76767",
    },
    services: ["Headache Treatment", "Anxiety Disorders", "Sleep Disorders"],
  },
  {
    id: "doc-010",
    name: "Dr. Pooja Mehta",
    slug: "dr-pooja-mehta",
    specialty: "ortho",
    qualifications: ["MBBS", "MD (Orthopedics)"],
    experienceYears: 10,
    profileImage: "/images/doctors/pooja-mehta.jpg",
    gender: "Female",
    languages: ["English", "Hindi", "Gujarati"],
    consultationFee: 650,
    rating: 4.8,
    happyPatients: 341,
    about: "Orthopedic consultant focusing on bones health.",
    availability: {
      days: ["Monday", "Wednesday", "Saturday"],
      time: "10:00 AM - 3:00 PM",
    },
    contact: {
      email: "pooja.mehta@mediplus.com",
      phone: "+91 90909 12121",
    },
    services: ["Headache Treatment", "Anxiety Disorders", "Sleep Disorders"],
  },
];
