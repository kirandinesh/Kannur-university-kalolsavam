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
  { id: "Sahithyolsavam", label: "Sahithyolsavam" },
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
  { id: "Chakkyarkoothu", label: "Chakkyarkoothu" },
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
  { id: "Margamkali", label: "Margamkali" },
  { id: "Mohiniyattam", label: "Mohiniyattam" },
  { id: "Naadodi-Nritham-Group", label: "Naadodi Nritham Group" },
  {
    id: "Naadodi-Nritham-Single-Female",
    label: "Naadodi Nritham Single Female",
  },
  { id: "Naadodi-Nritham-Single-Male", label: "Naadodi Nritham Single Male" },
  { id: "Oppana", label: "Oppana" },
  { id: "Ottamthullal", label: "Ottamthullal" },
  { id: "Parichamutukali", label: "Parichamutukali" },
  { id: "Poorakkali", label: "Poorakkali" },
  { id: "Sanghanritham-Female", label: "Sanghanritham Female" },
  { id: "Sanghanritham-Male", label: "Sanghanritham Male" },
  { id: "Thiruvathira-Female", label: "Thiruvathira - Female" },
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
  { id: "Guitar", label: "Guitar" },
  { id: "Harmonium", label: "Harmonium" },
  { id: "Hindustani-Sangeetham-Female", label: "Hindustani Sangeetham Female" },
  { id: "Hindustani-Sangeetham-Male", label: "Hindustani Sangeetham Male" },
  { id: "Jazz", label: "Jazz" },
  { id: "Karnataka-Sangeetham-Female", label: "Karnataka Sangeetham Female" },
  { id: "Karnataka-Sangeetham-Male", label: "Karnataka Sangeetham Male" },
  { id: "Kathakali-Sangeetham", label: "Kathakali Sangeetham" },
  { id: "Lalitha-Sangeetham-Female", label: "Lalitha Sangeetham Female" },
  { id: "Lalitha-Sangeetham-Male", label: "Lalitha Sangeetham Male" },
  { id: "Maddhalam", label: "Maddhalam" },
  { id: "Mappilappaattu-Group", label: "Mappilappaattu - Group" },
  { id: "Mappilappaattu-Single", label: "Mappilappaattu - Single" },
  { id: "Mrudangam", label: "Mrudangam" },
  { id: "Nadanpattu", label: "Nadanpattu" },
  { id: "Naagaswaram", label: "Naagaswaram" },
  {
    id: "Pashehcathya-Sangeetham-Single",
    label: "Pashehcathya Sangeetham Single",
  },
  { id: "Pullankuzhal", label: "Pullankuzhal" },
  { id: "Sanghagaanam-Indian", label: "Sanghagaanam - Indian" },
  { id: "Sanghagaanam-Pashehcathyam", label: "Sanghagaanam - Pashehcathyam" },
  { id: "Tabala", label: "Tabala" },
  { id: "Veena", label: "Veena" },
  { id: "Violin-Pashchathyam", label: "Violin - Pashchathyam" },
  { id: "Violin-Pourasthyam", label: "Violin - Pourasthyam" },
];

export const collegeList = [
  { id: "Payyannur-College-Payyanur", label: "Payyannur College, Payyanur" },
  { id: "Sree-Narayana-College", label: "Sree Narayana College" },
  { id: "N.A.M.-College-Kallikandy", label: "N.A.M. College, Kallikandy" },
  {
    id: "Mangattuparamba-Campus-Mangattuparamba",
    label: "Mangattuparamba Campus, Mangattuparamba",
  },
  { id: "Pazhassi-Raja-N.S.S.-College", label: "Pazhassi Raja N.S.S. College" },
  {
    id: "Govt.-Brennen-College-Dharmadam",
    label: "Govt. Brennen College, Dharmadam",
  },
  { id: "Sir-Syed-College", label: "Sir Syed College" },
  { id: "S.E.S.-College", label: "S.E.S. College" },
  {
    id: "Don-Bosco-Arts-&-Science-College",
    label: "Don Bosco Arts & Science College",
  },
  {
    id: "Mahatma-Gandhi-College-Iritty",
    label: "Mahatma Gandhi College, Iritty",
  },
  { id: "Govt.-College-Kasaragod", label: "Govt. College, Kasaragod" },
  {
    id: "Wadihuda-Institute-of-Research-and-Advanced-Studies",
    label: "Wadihuda Institute of Research and Advanced Studies",
  },
  {
    id: "Institute-of-Public-Policy-and-Leadership-Karimbam-Taliparamba",
    label: "Institute of Public Policy and Leadership, Karimbam, Taliparamba",
  },
  {
    id: "S.U.M.-College-of-Teacher-Education",
    label: "S.U.M. College of Teacher Education",
  },
  {
    id: "Govt.-Brennen-College-of-Teacher-Education",
    label: "Govt. Brennen College of Teacher Education",
  },
  {
    id: "Peoples-Co-Operative-Arts-&-Science-College",
    label: "Peoples Co-Operative Arts & Science College",
  },
  {
    id: "Nehru-Arts-and-Science-College",
    label: "Nehru Arts and Science College",
  },
  {
    id: "Government-College-Peringome",
    label: "Government College, Peringome",
  },
  { id: "K.M.M.-Govt.-Womens-College", label: "K.M.M. Govt. Women's College" },
  {
    id: "Kannur-University-School-of-Legal-Studies-Manjeshwaram-Campus",
    label: "Kannur University School of Legal Studies, Manjeshwaram Campus",
  },
  {
    id: "Zainab-Memorial-B.Ed.-Centre-Cherkala-North",
    label: "Zainab Memorial B.Ed. Centre, Cherkala North",
  },
  {
    id: "Sir-Syed-Institute-for-Technical-Studies",
    label: "Sir Syed Institute for Technical Studies",
  },
  {
    id: "Dr.-Ambedkar-College-of-Education-Sreesailam",
    label: "Dr. Ambedkar College of Education, Sreesailam",
  },
  {
    id: "Nusrathul-Islam-Arabic-College",
    label: "Nusrathul Islam Arabic College",
  },
  {
    id: "Nirmalagiri-College-P.O.-Nirmalagiri",
    label: "Nirmalagiri College, P.O. Nirmalagiri",
  },
  {
    id: "Mecf-College-of-Teacher-Education",
    label: "Mecf College of Teacher Education",
  },
  {
    id: "Malabar-Islamic-Complex-Arts-&-Science-College",
    label: "Malabar Islamic Complex - Arts & Science College",
  },
  {
    id: "Kuniya-College-of-Arts-and-Science-Kasaragod",
    label: "Kuniya College of Arts and Science, Kasaragod",
  },
  { id: "Thalassery-Campus-Palayad", label: "Thalassery Campus, Palayad" },
  {
    id: "Co-Operative-Arts-&-Science-College-Madai",
    label: "Co-Operative Arts & Science College, Madai",
  },
  {
    id: "Mary-Matha-Arts-&-Science-College-Mananthavady",
    label: "Mary Matha Arts & Science College, Mananthavady",
  },
  { id: "Keyi-Sahib-Training-College", label: "Keyi Sahib Training College" },
  { id: "St.-Marys-College-Bela", label: "St. Mary's College, Bela" },
  { id: "Govt.-College-Mananthavady", label: "Govt. College, Mananthavady" },
  { id: "University-Campus-Kasaragod", label: "University Campus, Kasaragod" },
  {
    id: "Gurudev-Arts-&-Science-College",
    label: "Gurudev Arts & Science College",
  },
  {
    id: "Navajyothi-College-Cherupuzha",
    label: "Navajyothi College, Cherupuzha",
  },
  {
    id: "Swami-Ananthatheertha-Campus-Payyanur",
    label: "Swami Ananthatheertha Campus, Payyanur",
  },
  {
    id: "E.K.-Nayanar-Memorial-Govt.-College-Elerithattu",
    label: "E.K. Nayanar Memorial Govt. College, Elerithattu",
  },
  {
    id: "Lasya-College-of-Fine-Arts-Pilathara",
    label: "Lasya College of Fine Arts, Pilathara",
  },
  {
    id: "Taliparamba-Arts-&-Science-College",
    label: "Taliparamba Arts & Science College",
  },
  {
    id: "Dr.-P.K.-Rajan-Memorial-Campus-Nileshwaram",
    label: "Dr. P.K. Rajan Memorial Campus, Nileshwaram",
  },
  {
    id: "Department-of-Teacher-Education-Mananthavady",
    label: "Department of Teacher Education, Mananthavady",
  },
  {
    id: "Dr.-APJ-Abdul-Kalam-College-of-Professional-Studies-Ulikkal",
    label: "Dr. APJ Abdul Kalam College of Professional Studies, Ulikkal",
  },
  {
    id: "Malik-Deenar-Institute-of-Management-Studies",
    label: "Malik Deenar Institute of Management Studies",
  },
  {
    id: "Nirmalagiri-College-of-Advanced-Studies",
    label: "Nirmalagiri College of Advanced Studies",
  },
  {
    id: "Malabar-B.Ed.-Training-College",
    label: "Malabar B.Ed. Training College",
  },
  {
    id: "GPM-Government-College-Manjeshwar",
    label: "GPM Government College, Manjeshwar",
  },
  {
    id: "I.T.M.-College-of-Arts-&-Science",
    label: "I.T.M. College of Arts & Science",
  },
  {
    id: "Sree-Narayana-College-of-Management-Studies-Periya",
    label: "Sree Narayana College of Management Studies, Periya",
  },
  {
    id: "Govt.-Arts-&-Science-College-Kinanoor-Karindalam",
    label: "Govt. Arts & Science College, Kinanoor Karindalam",
  },
  {
    id: "Government-Arts-&-Science-College-Uduma",
    label: "Government Arts & Science College, Uduma",
  },
  {
    id: "Mahatma-College-of-Education-Pandikot",
    label: "Mahatma College of Education, Pandikot",
  },
  {
    id: "College-of-Applied-Science-Manjeswaram",
    label: "College of Applied Science, Manjeswaram",
  },
  {
    id: "Chinmaya-Arts-&-Science-College-for-Women",
    label: "Chinmaya Arts & Science College for Women",
  },
  {
    id: "MVR-Institute-of-Life-Science-and-Research-Studies-Pappinisseri",
    label: "MVR Institute of Life Science and Research Studies, Pappinisseri",
  },
  {
    id: "WMO-Imam-Gazzali-Arts-&-Science-College",
    label: "WMO Imam Gazzali Arts & Science College",
  },
  {
    id: "De-Paul-Arts-&-Science-College-Edathotty",
    label: "De Paul Arts & Science College, Edathotty",
  },
  {
    id: "Sharaf-Arts-&-Science-College",
    label: "Sharaf Arts & Science College",
  },
  {
    id: "St.-Josephs-College-Pilathara",
    label: "St. Joseph's College, Pilathara",
  },
  {
    id: "Sree-Narayana-Guru-College-of-Advanced-Studies-Thottada-Kannur",
    label: "Sree Narayana Guru College of Advanced Studies, Thottada, Kannur",
  },
  {
    id: "Nahar-Arts-&-Science-College-Kanhirode",
    label: "Nahar Arts & Science College, Kanhirode",
  },
  { id: "Science-Veerpad-Iritty", label: "Science Veerpad, Iritty" },
  {
    id: "Pilathara-Co-Op-Arts-&-Science-College",
    label: "Pilathara Co-Op Arts & Science College",
  },
  {
    id: "College-of-Applied-Science-Pattuvam-Kuttikol",
    label: "College of Applied Science, Pattuvam, Kuttikol",
  },
  {
    id: "M.M.-Knowledge-Arts-&-Science-College-Thalipparamba",
    label: "M.M. Knowledge Arts & Science College, Thalipparamba",
  },
  { id: "Darul-Irshad-Arabic-College", label: "Darul Irshad Arabic College" },
  {
    id: "Government-College-Thalassery",
    label: "Government College, Thalassery",
  },
  {
    id: "Dr.-Ambedkar-Arts-&-Science-College",
    label: "Dr. Ambedkar Arts & Science College",
  },
  {
    id: "Lourde-Institute-of-Science-and-Technology-Taliparamba",
    label: "Lourde Institute of Science and Technology, Taliparamba",
  },
  {
    id: "College-for-Costume-and-Fashion-Designing-Thottada",
    label: "College for Costume and Fashion Designing, Thottada",
  },
  {
    id: "Amsteck-Arts-&-Science-College-Kalliassery",
    label: "Amsteck Arts & Science College, Kalliassery",
  },
  {
    id: "Nest-Institute-of-Humanities-&-Basic-Science-Kari",
    label: "Nest Institute of Humanities & Basic Science, Kari",
  },
  {
    id: "Crescent-B.Ed.-College-Madayipara",
    label: "Crescent B.Ed. College, Madayipara",
  },
  {
    id: "C.K.-Nair-Arts-&-Management-College-Padannakad",
    label: "C.K. Nair Arts & Management College, Padannakad",
  },
  {
    id: "Tellicherry-Institute-of-Advanced-Studies-Kundoormala",
    label: "Tellicherry Institute of Advanced Studies, Kundoormala",
  },
  {
    id: "Mahatma-Gandhi-Arts-&-Science-College-Chendayad",
    label: "Mahatma Gandhi Arts & Science College, Chendayad",
  },
  { id: "P.K.M.-College-of-Education", label: "P.K.M. College of Education" },
  { id: "Kannur-Salafi-B.Ed.-College", label: "Kannur Salafi B.Ed. College" },
  {
    id: "College-of-Applied-Science-P.O.-Kuthuparamba",
    label: "College of Applied Science, P.O. Kuthuparamba",
  },
  { id: "Model-College-Madikkai", label: "Model College, Madikkai" },
  {
    id: "St.-Pius-X-College-Rajapuram",
    label: "St. Pius X College, Rajapuram",
  },
  {
    id: "Concord-Arts-&-Science-College-Mattannur",
    label: "Concord Arts & Science College, Mattannur",
  },
  {
    id: "Sanatana-Arts-&-Science-College-Parakkalay",
    label: "Sanatana Arts & Science College, Parakkalay",
  },
  {
    id: "S.E.S.-Self-Financing-College-Sreekandapuram",
    label: "S.E.S. Self-Financing College, Sreekandapuram",
  },
  {
    id: "Morazha-Co-Op-Arts-&-Science-College",
    label: "Morazha Co-Op Arts & Science College",
  },
  {
    id: "Nalanda-College-of-Arts-and-Science",
    label: "Nalanda College of Arts and Science",
  },
  {
    id: "IHRD-College-of-Applied-Science-Cheemeni",
    label: "IHRD College of Applied Science, Cheemeni",
  },
  {
    id: "Deva-Matha-Arts-&-Science-College",
    label: "Deva Matha Arts & Science College",
  },
  {
    id: "Rajeev-Memorial-College-of-Teacher-Education",
    label: "Rajeev Memorial College of Teacher Education",
  },
  {
    id: "M.E.S.-College-Naravoor-South",
    label: "M.E.S. College, Naravoor South",
  },
  {
    id: "Kannur-University-Campus-Mananthavady",
    label: "Kannur University Campus, Mananthavady",
  },
  {
    id: "MSS-College-of-Arts-and-Science-Tharuvana",
    label: "MSS College of Arts and Science, Tharuvana",
  },
  {
    id: "College-of-Applied-Science-Neruvambaram",
    label: "College of Applied Science, Neruvambaram",
  },
  {
    id: "Jaybees-Training-College-of-B.Ed.",
    label: "Jaybees Training College of B.Ed.",
  },
  {
    id: "S.N.D.P.-Yogam-Arts-&-Science-College",
    label: "S.N.D.P. Yogam Arts & Science College",
  },
  {
    id: "Sunrise-College-of-Advanced-Studies-Kuttur",
    label: "Sunrise College of Advanced Studies, Kuttur",
  },
  {
    id: "Sibga-Arts-&-Science-College-Irikkur",
    label: "Sibga Arts & Science College, Irikkur",
  },
  {
    id: "College-of-Applied-Science-Pinarayi",
    label: "College of Applied Science, Pinarayi",
  },
  {
    id: "Mary-Matha-Arts-&-Science-College",
    label: "Mary Matha Arts & Science College",
  },
  { id: "Test-College", label: "Test College" },
  {
    id: "People-Institute-of-Management-Studies-Munnad",
    label: "People Institute of Management Studies, Munnad",
  },
  {
    id: "Khansa-Womens-College-for-Advanced-Studies",
    label: "Khansa Womens College for Advanced Studies",
  },
  {
    id: "NA",
    label: "NA",
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
    members: [],
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
    members: [],
  },
];
export const winnerResultThirdInitialFormData = [
  {
    studentName: "",
    studentCode: "",
    collegeName: "",
    grade: "",
    points: "",
    members: [],
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
  {
    id: "Sarvakalashala-prathibha-male",
    label: "Sarvakalashala Prathibha Male",
  },
  {
    id: "Sarvakalashala-prathibha-female",
    label: "Sarvakalashala Prathibha Female",
  },
  {
    id: "SAHITHYOLSAVAM-CHAMPIONSHIP",
    label: "SAHITHYOLSAVAM CHAMPIONSHIP",
  },
  { id: "CHITHROLSAVAM-CHAMPIONSHIP", label: "CHITHROLSAVAM CHAMPIONSHIP" },
  { id: "SANGEETHOLSAVAM-CHAMPIONSHIP", label: "SANGEETHOLSAVAM CHAMPIONSHIP" },
  { id: "NRITHOLSAVAM-CHAMPIONSHIP", label: "NRITHOLSAVAM CHAMPIONSHIP" },
  {
    id: "DRISHYA-NATAKOLSAVAM-CHAMPIONSHIP",
    label: "DRISHYA NATAKOLSAVAM CHAMPIONSHIP",
  },
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

export const offStageLeadingCollegeFormControl = [
  {
    name: "offStagecollegeName",
    label: "College Name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: collegeList,
  },
  {
    name: "offStagepoints",
    label: "OffStage Point",
    componentType: "input",
    type: "number",
    placeholder: "Enter the Points",
  },
];

export const offStageLeadingCollegeInitialFormData = {
  offStagecollegeName: "",
  offStagepoints: "",
};

export const onStageLeadingCollegeFormControl = [
  {
    name: "onStagecollegeName",
    label: "College Name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: collegeList,
  },
  {
    name: "onStagepoints",
    label: "OnStage Point",
    componentType: "input",
    type: "number",
    placeholder: "Enter the Points",
  },
];

export const onStageLeadingCollegeInitialFormData = {
  onStagecollegeName: "",
  onStagepoints: "",
};

export const collegePointInitialFormData = {
  collegeName: "",
  points: "",
};
