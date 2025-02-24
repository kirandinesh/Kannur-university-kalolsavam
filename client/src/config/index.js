export const signUpFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "input",
  },
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    type: "password",
    componentType: "input",
  },
];

export const signInFormControls = [
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    type: "password",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};

export const gradeOptions = [
  { id: "a", label: "A" },
  { id: "b", label: "B" },
  { id: "c", label: "C" },
  { id: "d", label: "D" },
  { id: "e", label: "E" },
  { id: "f", label: "F" },
];

export const courseLevelOptions = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];
export const categoryOptions = [
  { id: "Chithrolsavam", label: "Chithrolsavam" },
  { id: "Drishya-Natakolsavam", label: "Drishya-Natakolsavam" },
  { id: "Nritholsavam", label: "Nritholsavam" },
  { id: "Schithyolsavam", label: "Schithyolsavam" },
  { id: "Sangeetholsavam", label: "Sangeetholsavam" },
];

export const eventOptions = [
  { id: "Caricature-Rachana", label: "Caricature Rachana" },
  { id: "Cartoon-Rachana", label: "Cartoon Rachana" },
  { id: "Charcoal-Drawing", label: "Charcoal Drawing" },
  { id: "Collage", label: "Collage" },
  { id: "Computer-Designing", label: "Computer Designing" },
  { id: "Embroidery", label: "Embroidery" },
  { id: "Kaliman-Prathima-Nirmaanam", label: "Kaliman Prathima Nirmaanam" },
  { id: "Mehandi-Design", label: "Mehandi Design" },
  { id: "Painting-Acrylic", label: "Painting - Acrylic" },
  { id: "Painting-Ennachayam", label: "Painting - Ennachayam" },
  { id: "Painting-Jalachayam", label: "Painting - Jalachayam" },
  { id: "Pencil-Drawing", label: "Pencil Drawing" },
  { id: "Photography", label: "Photography" },
  { id: "Pookkalam", label: "Pookkalam" },
  { id: "Poster-Rachana", label: "Poster Rachana" },
  { id: "Rangoli", label: "Rangoli" },
  { id: "Chadkyarkoothu", label: "Chadkyarkoothu" },
  { id: "Kathaprasangam", label: "Kathaprasangam" },
  { id: "Mime", label: "Mime" },
  { id: "Mimicry", label: "Mimicry" },
  { id: "Mono-Act", label: "Mono Act" },
  { id: "Naatakam-English", label: "Naatakam English" },
  { id: "Naatakam-Hindi", label: "Naatakam Hindi" },
  { id: "Naatakam-Kannada", label: "Naatakam Kannada" },
  { id: "Naatakam-Malayalam", label: "Naatakam Malayalam" },
  { id: "Nangyarkoothu", label: "Nangyarkoothu" },
  { id: "Short-film", label: "Short film" },
  { id: "Skit-Malayalam", label: "Skit - Malayalam" },
  { id: "Theruvunaatakam-Malayalam", label: "Theruvunaatakam Malayalam" },
  { id: "Yakshaganam", label: "Yakshaganam" },
  { id: "Arabanamutt", label: "Arabanamutt" },
  { id: "Bharathanatyam-Female", label: "Bharathanatyam - Female" },
  { id: "Bharathanatyam-Male", label: "Bharathanatyam - Male" },
  { id: "Duff-muttukali", label: "Duff muttukali" },
  { id: "Kathakali", label: "Kathakali" },
  { id: "Keralanatanam", label: "Keralanatanam" },
  { id: "Kolkali", label: "Kolkali" },
  { id: "Kuchipudi-Female", label: "Kuchipudi - Female" },
  { id: "Kuchipudi-Male", label: "Kuchipudi - Male" },
  { id: "Madrganikali", label: "Madrganikali" },
  { id: "Mohiniyattam", label: "Mohiniyattam" },
  { id: "Naatoti-Nritham-Group", label: "Naatoti Nritham Group" },
  {
    id: "Naatoti-Nritham-Single-Female",
    label: "Naatoti Nritham Single Female",
  },
  { id: "Naatoti-Nritham-Single-Male", label: "Naatoti Nritham Single Male" },
  { id: "Oppana", label: "Oppana" },
  { id: "Ottamthullal", label: "Ottamthullal" },
  { id: "Parichamutukali", label: "Parichamutukali" },
  { id: "Poorakkali", label: "Poorakkali" },
  { id: "Sanghanritham-Female", label: "Sanghanritham Female" },
  { id: "Sanghanritham-Male", label: "Sanghanritham Male" },
  { id: "Thiruvaatthirakali-Female", label: "Thiruvaatthirakali - Female" },
  { id: "Vattappaatt", label: "Vattappaatt" },
  { id: "Aksharaslokam", label: "Aksharaslokam" },
  { id: "Cherukatharachana-Arabic", label: "Cherukatharachana Arabic" },
  { id: "Cherukatharachana-English", label: "Cherukatharachana English" },
  { id: "Cherukatharachana-Hindi", label: "Cherukatharachana Hindi" },
  { id: "Cherukatharachana-Kannada", label: "Cherukatharachana Kannada" },
  { id: "Cherukatharachana-Malayalam", label: "Cherukatharachana Malayalam" },
  { id: "Cherukatharachana-Sanskrit", label: "Cherukatharachana Sanskrit" },
  { id: "Cherukatharachana-Urdu", label: "Cherukatharachana Urdu" },
  { id: "Cinema-Niroopanam-English", label: "Cinema Niroopanam English" },
  { id: "Cinema-Niroopanam-Hindi", label: "Cinema Niroopanam Hindi" },
  { id: "Cinema-Niroopanam-Malayalam", label: "Cinema Niroopanam Malayalam" },
  { id: "Debate-English", label: "Debate English" },
  { id: "Debate-Malayalam", label: "Debate Malayalam" },
  { id: "Kaavyakeli", label: "Kaavyakeli" },
  { id: "Kavithaalabanam-Arabic", label: "Kavithaalabanam Arabic" },
  { id: "Kavithaalabanam-English", label: "Kavithaalabanam English" },
  { id: "Kavithaalabanam-Hindi", label: "Kavithaalabanam Hindi" },
  { id: "Kavithaalabanam-Kannada", label: "Kavithaalabanam Kannada" },
  { id: "Kavithaalabanam-Malayalam", label: "Kavithaalabanam Malayalam" },
  { id: "Kavithaalabanam-Sanskrit", label: "Kavithaalabanam Sanskrit" },
  { id: "Kavithaalabanam-Urdu", label: "Kavithaalabanam Urdu" },
  { id: "Kavitharachana-Arabic", label: "Kavitharachana Arabic" },
  { id: "Kavitharachana-English", label: "Kavitharachana English" },
  { id: "Kavitharachana-Hindi", label: "Kavitharachana Hindi" },
  { id: "Kavitharachana-Kannada", label: "Kavitharachana Kannada" },
  { id: "Kavitharachana-Malayalam", label: "Kavitharachana Malayalam" },
  { id: "Kavitharachana-Sanskrit", label: "Kavitharachana Sanskrit" },
  { id: "Kavitharachana-Urdu", label: "Kavitharachana Urdu" },
  { id: "Kurunkatha-Arabic", label: "Kurunkatha Arabic" },
  { id: "Kurunkatha-English", label: "Kurunkatha English" },
  { id: "Kurunkatha-Hindi", label: "Kurunkatha Hindi" },
  { id: "Kurunkatha-Kannada", label: "Kurunkatha Kannada" },
  { id: "Kurunkatha-Malayalam", label: "Kurunkatha Malayalam" },
  { id: "Kurunkatha-Sanskrit", label: "Kurunkatha Sanskrit" },
  { id: "Kurunkatha-Urdu", label: "Kurunkatha Urdu" },
  { id: "Prabandharachana-Arabic", label: "Prabandharachana Arabic" },
  { id: "Prabandharachana-English", label: "Prabandharachana English" },
  { id: "Prabandharachana-Hindi", label: "Prabandharachana Hindi" },
  { id: "Prabandharachana-Kannada", label: "Prabandharachana Kannada" },
  { id: "Prabandharachana-Malayalam", label: "Prabandharachana Malayalam" },
  { id: "Prabandharachana-Sanskrit", label: "Prabandharachana Sanskrit" },
  { id: "Prabandharachana-Urdu", label: "Prabandharachana Urdu" },
  { id: "Prasangam-Arabic", label: "Prasangam Arabic" },
  { id: "Prasangam-English", label: "Prasangam English" },
  { id: "Prasangam-Hindi", label: "Prasangam Hindi" },
  { id: "Prasangam-Kannada", label: "Prasangam Kannada" },
  { id: "Prasangam-Malayalam", label: "Prasangam Malayalam" },
  { id: "Prasangam-Sanskrit", label: "Prasangam Sanskrit" },
  { id: "Prasangam-Urdu", label: "Prasangam Urdu" },
  { id: "Quiz", label: "Quiz" },
  {
    id: "Thirakatharachana-Documentary-English",
    label: "Thirakatharachana - Documentary English",
  },
  {
    id: "Thirakatharachana-Documentary-Hindi",
    label: "Thirakatharachana - Documentary Hindi",
  },
  {
    id: "Thirakatharachana-Documentary-Malayalam",
    label: "Thirakatharachana - Documentary Malayalam",
  },
  {
    id: "Thirakatharachana-KathaChithram-English",
    label: "Thirakatharachana - KathaChithram English",
  },
  {
    id: "Thirakatharachana-KathaChithram-Hindi",
    label: "Thirakatharachana - KathaChithram Hindi",
  },
  {
    id: "Thirakatharachana-KathaChithram-Malayalam",
    label: "Thirakatharachana - KathaChithram Malayalam",
  },
  { id: "Wiki-Article-English", label: "Wiki Article English" },
  { id: "Wiki-Article-Hindi", label: "Wiki Article Hindi" },
  { id: "Wiki-Article-Malayalam", label: "Wiki Article Malayalam" },
  { id: "Ashtapadi", label: "Ashtapadi" },
  { id: "Chenda", label: "Chenda" },
  { id: "Etakka", label: "Etakka" },
  { id: "Ghattam", label: "Ghattam" },
  { id: "Ghazal-Female", label: "Ghazal - Female" },
  { id: "Ghazal-Male", label: "Ghazal - Male" },
  { id: "Guitar-Paschchathyam", label: "Guitar - Paschchathyam" },
  { id: "Harmonium-Pourasthyam", label: "Harmonium - Pourasthyam" },
  { id: "Hindustani-Sangeetham-Female", label: "Hindustani Sangeetham Female" },
  { id: "Hindustani-Sangeetham-Male", label: "Hindustani Sangeetham Male" },
  { id: "Jazz-Pashchathyam", label: "Jazz - Pashchathyam" },
  { id: "Karnataka-Sangeetham-Female", label: "Karnataka Sangeetham Female" },
  { id: "Karnataka-Sangeetham-Male", label: "Karnataka Sangeetham Male" },
  { id: "Kathakali-Sangeetham", label: "Kathakali Sangeetham" },
  { id: "Lalitha-Sangeetham-Female", label: "Lalitha Sangeetham Female" },
  { id: "Lalitha-Sangeetham-Male", label: "Lalitha Sangeetham Male" },
  { id: "Maddhalam", label: "Maddhalam" },
  { id: "Mappilappaattu-Group", label: "Mappilappaattu - Group" },
  { id: "Mappilappaattu-Single", label: "Mappilappaattu - Single" },
  { id: "Mrudangam", label: "Mrudangam" },
  { id: "Naddanpattu", label: "Naddanpattu" },
  { id: "Naagaswaram-Pourasthyam", label: "Naagaswaram - Pourasthyam" },
  {
    id: "Pashehcathya-Sangeetham-Single",
    label: "Pashehcathya Sangeetham Single",
  },
  { id: "Pullankuzhal-Pourasthyam", label: "Pullankuzhal - Pourasthyam" },
  { id: "Sanghagaanam-Indian", label: "Sanghagaanam - Indian" },
  { id: "Sanghagaanam-Pashehcathyam", label: "Sanghagaanam - Pashehcathyam" },
  { id: "Tabala", label: "Tabala" },
  { id: "Veena-Pourasthyam", label: "Veena - Pourasthyam" },
  { id: "Violin-Pashehcathyam", label: "Violin - Pashehcathyam" },
  { id: "Violin-Pourasthyam", label: "Violin - Pourasthyam" },
];

export const collegeList = [
  { id: "Payyannur-College", label: "Payyannur College" },
  { id: "Sree-Narayana-College", label: "Sree Narayana College" },
  { id: "NAM-College-Kallikandy", label: "N.A.M. College Kallikandy" },
  { id: "Mangattuparamba-Campus", label: "Mangattuparamba Campus" },
  { id: "Pazhassi-Raja-NSS-College", label: "Pazhassi Raja N.S.S. College" },
  {
    id: "Govt-Brennen-College-Dharmadam",
    label: "Govt. Brennen College Dharmadam",
  },
  { id: "Sir-Syed-College", label: "Sir Syed College" },
  { id: "SES-College", label: "S.E.S. College" },
  {
    id: "Don-Bosco-Arts-Science-College",
    label: "Don Bosco Arts & Science College",
  },
  {
    id: "Mahatma-Gandhi-College-Iritty",
    label: "Mahatma Gandhi College Iritty",
  },
  { id: "Govt-College-Kasaragod", label: "Govt. College Kasaragod" },
  {
    id: "Wadihuda-Institute-Of-Research-And-Advanced-Studie",
    label: "Wadihuda Institute Of Research And Advanced Studie",
  },
  {
    id: "Institute-of-Public-Policy-and-Leadership-Karimbam-Taliparamba",
    label: "Institute of Public Policy and Leadership, Karimbam, Taliparamba",
  },
  {
    id: "SUM-College-Of-Teacher-Education",
    label: "S.U.M. College Of Teacher Education",
  },
  {
    id: "Govt-Brennen-College-Of-Teacher-Education",
    label: "Govt. Brennen College Of Teacher Education",
  },
  {
    id: "Peoples-Co-Operative-Arts-Science-College",
    label: "Peoples Co-Operative Arts & Science College",
  },
  {
    id: "Nehru-Arts-And-Science-College",
    label: "Nehru Arts And Science College",
  },
  { id: "Government-College-Peringome", label: "Government College Peringome" },
  { id: "KMM-Govt-Womens-College", label: "K.M.M. Govt. Women’s College" },
  {
    id: "Kannur-University-School-Of-Legal-Studies-Manjeshwaram-Campus",
    label: "Kannur University School Of Legal Studies, Manjeshwaram Campus",
  },
  {
    id: "Zainab-Memorial-BEd-Centre-Cherkala-North",
    label: "Zainab Memorial B.Ed. Centre, Cherkala North",
  },
  {
    id: "Sir-Syed-Institute-For-Technical-Studies",
    label: "Sir Syed Institute For Technical Studies",
  },
  {
    id: "Dr-Ambedkar-College-Of-Education-Sreesailam",
    label: "Dr. Ambedkar College Of Education, Sreesailam",
  },
  {
    id: "Nusrathul-Islam-Arabic-College",
    label: "Nusrathul Islam Arabic College",
  },
  { id: "Nirmalagiri-College", label: "Nirmalagiri College" },
  {
    id: "MECF-College-Of-Teacher-Education",
    label: "MECF College Of Teacher Education",
  },
  {
    id: "Malabar-Islamic-Complex-Arts-Science-College",
    label: "Malabar Islamic Complex- Arts & Science College",
  },
  {
    id: "Kuniya-College-Of-Arts-And-Science-Kasaragod",
    label: "KUNIYA College Of Arts And Science, Kasaragod",
  },
  { id: "Thalassery-Campus-Palayad", label: "Thalassery Campus, Palayad" },
  {
    id: "Co-Operative-Arts-Science-College-Madai",
    label: "Co-Operative Arts & Science College, Madai",
  },
  {
    id: "Mary-Matha-Arts-Science-College-Mananthavady",
    label: "Mary Matha Arts & Science College, Mananthavady",
  },
  { id: "Keyi-Sahib-Training-College", label: "Keyi Sahib Training College" },
  { id: "St-Marys-College-Bela", label: "St. Mary's College, Bela" },
  { id: "Govt-College-Mananthavady", label: "Govt. College Mananthavady" },
  { id: "University-Campus-Kasaragod", label: "University Campus, Kasaragod" },
  {
    id: "Gurudev-Arts-Science-College",
    label: "Gurudev Arts & Science College",
  },
  {
    id: "Navajyothi-College-Cherupuzha",
    label: "Navajyothi College, Cherupuzha",
  },
  {
    id: "Swami-Ananthatheertha-Campus-Payyannur",
    label: "Swami Ananthatheertha Campus, Payyannur",
  },
  {
    id: "EK-Nayanar-Memorial-Govt-College-Elerithattu",
    label: "E.K. Nayanar Memorial Govt. College, Elerithattu",
  },
  {
    id: "Lasya-College-Of-Fine-Arts-Pilathara",
    label: "Lasya College Of Fine Arts, Pilathara",
  },
  {
    id: "Taliparamba-Arts-Science-College",
    label: "Taliparamba Arts & Science College",
  },
  {
    id: "Dr-P-K-Rajan-Memorial-Campus-Nileshwaram",
    label: "Dr. P.K. Rajan Memorial Campus, Nileshwaram",
  },
  {
    id: "Department-Of-Teacher-Education-Mananthavady",
    label: "Department Of Teacher Education, Mananthavady",
  },
  {
    id: "DR-APJ-Abdul-Kalam-College-Of-Professional-Studies-Ulikkal",
    label: "DR APJ Abdul Kalam College Of Professional Studies, Ulikkal",
  },
  {
    id: "Malik-Deenar-Institute-Of-Management-Studies",
    label: "Malik Deenar Institute Of Management Studies",
  },
  {
    id: "Government-College-Thalassery",
    label: "Government College Thalassery",
  },
  {
    id: "College-For-Costume-And-Fashion-Designing-Thottada",
    label: "College For Costume And Fashion Designing, Thottada",
  },
  {
    id: "Amsteck-Arts-Science-College-Kalliassery",
    label: "Amsteck Arts & Science College, Kalliassery",
  },
  {
    id: "Sanatana-Arts-Science-College-Parakkalay",
    label: "Sanatana Arts & Science College, Parakkalay",
  },
  {
    id: "SUNRISE-College-Of-Advanced-Studies-Kuttur",
    label: "SUNRISE College Of Advanced Studies, Kuttur",
  },
  { id: "Test-College", label: "Test College" },
  {
    id: "People-Institute-Of-Management-Studies-Munnad",
    label: "People Institute Of Management Studies, Munnad",
  },
];

export const resultPublishFormControls = [
  {
    name: "studentName",
    label: "Student Name",
    componentType: "input",
    type: "text",
    placeholder: "Enter Student Name",
  },
  {
    name: "studentCode",
    label: "Student Code",
    componentType: "input",
    type: "text",
    placeholder: "Enter Student Code",
  },
  {
    name: "college",
    label: "College Name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: collegeList,
  },
  {
    name: "category",
    label: "Category",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: categoryOptions,
  },
  {
    name: "eventName",
    label: "Event Name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: eventOptions,
  },
  {
    name: "grade",
    label: "Grade",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: gradeOptions,
  },

  {
    name: "points",
    label: "Points",
    componentType: "input",
    type: "number",
    placeholder: "Enter the Points",
  },
];

export const publishResultFormcontrol = [
  {
    name: "eventName",
    label: "Event Name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: eventOptions,
  },
];

export const winnerResultFormcontrol = [
  {
    name: "studentName",
    label: "Student Name",
    componentType: "input",
    type: "text",
    placeholder: "Enter Student Name",
  },
  {
    name: "college",
    label: "College Name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: collegeList,
  },

  {
    name: "grade",
    label: "Grade",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: gradeOptions,
  },

  {
    name: "points",
    label: "Points",
    componentType: "input",
    type: "number",
    placeholder: "Enter the Points",
  },
];

export const resultPublishInitialFormData = {
  studentName: "",
  studentCode: "",
  college: "",
  eventName: " ",
  category: "",
  grade: "",
  points: "",
};

export const publishResultInitialFormData = {
  eventName: "",
  groupGrade: "",
  groupPoints: "",
  groupCollegeName: "",
};

export const winnerResultFirstInitialFormData = [
  {
    studentName: "",
    studentCode: "",
    collegeName: "",
    grade: "",
    points: "",
  },
];

//group item first
export const groupwinnerResultFirstInitialFormData = [
  {
    memberName: "",
  },
];
export const groupwinnerResultSecondInitialFormData = [
  {
    memberName: "",
  },
];
export const groupwinnerResultThirdInitialFormData = [
  {
    memberName: "",
  },
];
////
export const winnerResultSecondInitialFormData = [
  {
    studentName: "",
    studentCode: "",
    collegeName: "",
    grade: "",
    points: "",
  },
];
export const winnerResultThirdInitialFormData = [
  {
    studentName: "",
    studentCode: "",
    collegeName: "",
    grade: "",
    points: "",
  },
];
export const eventStatusOption = [
  { id: 1, label: "ongoing" },
  { id: 2, label: "upcoming" },
  { id: 3, label: "completed" },
];

export const eventInitialFormData = {
  status: "",
};
export const navBarList = [
  { title: "home", label: "HOME", link: "#home" },
  { title: "college", label: "COLLEGES", link: "#college" },
  { title: "collegelist", label: "COLLEGE LIST", link: "#collegelist" },
  { title: "result", label: "RESULT", link: "#result" },
  { title: "achievement", label: "ACHIEVEMENTS", link: "#achievement" },
];

export const achievementOptions = [
  { id: "kalathilakam", label: "Kalathilakam" },
  { id: "kalaprathibha", label: "Kalaprathibha" },
  { id: "chithra-prathibha", label: "Chithra Prathibha" },
  { id: "sahithya-prathibha", label: "Sahithya Prathibha" },
  { id: "nritha-prathibha", label: "Nritha Prathibha" },
  { id: "sangeetha-prathibha", label: "Sangeetha Prathibha" },
  { id: "drisya-nataka-prathibha", label: "Drisya-Nataka Prathibha" },
];
export const achievementFormcontrol = [
  {
    name: "achievementName",
    label: "Achievement name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: achievementOptions,
  },
  {
    name: "studentName",
    label: "Student Name",
    componentType: "input",
    type: "text",
    placeholder: "Enter Student Name",
  },
  {
    name: "collegeName",
    label: "College Name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: collegeList,
  },
  {
    name: "points",
    label: "Points",
    componentType: "input",
    type: "number",
    placeholder: "Enter the Points",
  },
];

export const announcementFormcontrol = [
  {
    name: "annoucementName",
    label: "Announcement name",
    componentType: "textarea",
    type: "text",
    placeholder: "enter the text",
  },
];

export const announceIntitialFormData = {
  annoucementName: "",
};

export const achievementInitialFormData = {
  achievementName: "",
  studentName: "",
  collegeName: "",
  points: "",
};

export const collegePointUpdateFormcontrol = [
  {
    name: "collegeName",
    label: "College Name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: collegeList,
  },
  {
    name: "points",
    label: "Points",
    componentType: "input",
    type: "number",
    placeholder: "Enter the Points",
  },
];

export const collegePointInitialFormData = {
  collegeName: "",
  points: "",
};
