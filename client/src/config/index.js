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
  { id: "Kavithadatapanam-Arabic", label: "Kavithadatapanam Arabic" },
  { id: "Kavithadatapanam-English", label: "Kavithadatapanam English" },
  { id: "Kavithadatapanam-Hindi", label: "Kavithadatapanam Hindi" },
  { id: "Kavithadatapanam-Kannada", label: "Kavithadatapanam Kannada" },
  { id: "Kavithadatapanam-Malayalam", label: "Kavithadatapanam Malayalam" },
  { id: "Kavithadatapanam-Sanskrit", label: "Kavithadatapanam Sanskrit" },
  { id: "Kavithadatapanam-Urdu", label: "Kavithadatapanam Urdu" },
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
  {
    id: "Administrative-Unit-Mangattuparamba",
    label: "Administrative Unit, Mangattuparamba",
  },
  {
    id: "Al-Badar-Special-College-Payyannur",
    label: "Al-Badar Special College, Payyannur",
  },
  {
    id: "Anandatheertha-Campus-Payyannur",
    label: "Anandatheertha Campus, Payyannur",
  },
  {
    id: "Arts-&-Science-College-for-Women-Chala",
    label: "Arts & Science College for Women, Chala",
  },
  {
    id: "Arts-&-Science-College-Kalliasseri",
    label: "Arts & Science College, Kalliasseri",
  },
  {
    id: "Arts-&-Science-College-Mathil",
    label: "Arts & Science College, Mathil",
  },
  {
    id: "Arts-&-Science-College-Muttanur",
    label: "Arts & Science College, Muttanur",
  },
  { id: "B.Ed-College-Palangad", label: "B.Ed College, Palangad" },
  {
    id: "Beja-Model-College-of-Arts-&-Science-Sankanamoola",
    label: "Beja Model College of Arts & Science, Sankanamoola",
  },
  {
    id: "Bosco-Arts-&-Science-College-Angadikadavu",
    label: "Bosco Arts & Science College, Angadikadavu",
  },
  { id: "Bosco-College-Angadikadavu", label: "Bosco College, Angadikadavu" },
  { id: "Brennen-College-Thalassery", label: "Brennen College, Thalassery" },
  {
    id: "C.K.-Nair-Arts-&-Management-College-Kanhangad",
    label: "C.K. Nair Arts & Management College, Kanhangad",
  },
  { id: "Campus-Chala-Vidyanagar", label: "Campus, Chala, Vidyanagar" },
  {
    id: "College-of-Applied-Science-Cheemeni",
    label: "College of Applied Science, Cheemeni",
  },
  {
    id: "College-of-Applied-Science-Kuthuparamba",
    label: "College of Applied Science, Kuthuparamba",
  },
  {
    id: "College-of-Applied-Science-Kuttur",
    label: "College of Applied Science, Kuttur",
  },
  {
    id: "College-of-Applied-Science-Manjeshwar",
    label: "College of Applied Science, Manjeshwar",
  },
  {
    id: "College-of-Applied-Science-Neruvambram",
    label: "College of Applied Science, Neruvambram",
  },
  {
    id: "College-of-Applied-Science-Pattuvam",
    label: "College of Applied Science, Pattuvam",
  },
  {
    id: "College-of-Applied-Science-Pinarayi",
    label: "College of Applied Science, Pinarayi",
  },
  {
    id: "College-of-Arts-&-Science-Mayyil",
    label: "College of Arts & Science, Mayyil",
  },
  {
    id: "College-of-Arts-&-Science-Perla",
    label: "College of Arts & Science, Perla",
  },
  { id: "College-Peringome", label: "College, Peringome" },
  { id: "College-Thalassery-Chokli", label: "College, Thalassery, Chokli" },
  {
    id: "Co-operative-Arts-&-Science-College-Madayi",
    label: "Co-operative Arts & Science College, Madayi",
  },
  {
    id: "Darul-Irshad-Arabic-College-Paral",
    label: "Darul Irshad Arabic College, Paral",
  },
  {
    id: "De-Paul-Arts-&-Science-College-Edathotty",
    label: "De Paul Arts & Science College, Edathotty",
  },
  {
    id: "Deenar-College-of-Graduate-Studies-Seethangoli",
    label: "Deenar College of Graduate Studies, Seethangoli",
  },
  {
    id: "Devamatha-Arts-&-Science-College-Paisakary",
    label: "Devamatha Arts & Science College, Paisakary",
  },
  {
    id: "Dr.-B.R.-Ambedkar-Arts-&-Science-College-Periye",
    label: "Dr. B.R. Ambedkar Arts & Science College, Periye",
  },
  {
    id: "Dr.-B.R.-Ambedkar-College-of-Education-Periye",
    label: "Dr. B.R. Ambedkar College of Education, Periye",
  },
  {
    id: "Dr.-Janaki-Ammal-Campus-Palayad",
    label: "Dr. Janaki Ammal Campus, Palayad",
  },
  {
    id: "Dr.-P.K.-Rajan-Memorial-Campus-Nileshwaram",
    label: "Dr. P.K. Rajan Memorial Campus, Nileshwaram",
  },
  {
    id: "E.K.-Nayanar-Memorial-Government-College-Elerithattu",
    label: "E.K. Nayanar Memorial Government College, Elerithattu",
  },
  {
    id: "EMS-Memorial-College-of-Applied-Science-Iritty",
    label: "EMS Memorial College of Applied Science, Iritty",
  },
  {
    id: "Government-Arts-&-Science-College-Kinanoor",
    label: "Government Arts & Science College, Kinanoor",
  },
  {
    id: "Government-Arts-&-Science-College-Uduma",
    label: "Government Arts & Science College, Uduma",
  },
  {
    id: "Government-Brennen-College-of-Teacher-Education-Thalassery",
    label: "Government Brennen College of Teacher Education, Thalassery",
  },
  {
    id: "Government-College-Kasaragod",
    label: "Government College, Kasaragod",
  },
  {
    id: "Government-College-Mananthavady",
    label: "Government College, Mananthavady",
  },
  {
    id: "Government-Women's-College-Kannur",
    label: "Government Women's College, Kannur",
  },
  {
    id: "GPM-Government-College-Manjeshwar",
    label: "GPM Government College, Manjeshwar",
  },
  {
    id: "Greenwoods-Arts-&-Science-College-Kasaragod",
    label: "Greenwoods Arts & Science College, Kasaragod",
  },
  { id: "Ideal-Arabic-College-Uliyil", label: "Ideal Arabic College, Uliyil" },
  {
    id: "Indian-Institute-of-Handloom-Technology-Kannur",
    label: "Indian Institute of Handloom Technology, Kannur",
  },
  {
    id: "Institute-of-Management-Studies-Munnad",
    label: "Institute of Management Studies, Munnad",
  },
  {
    id: "Institute-of-Technology-Chala",
    label: "Institute of Technology, Chala",
  },
  {
    id: "Jaybees-Training-College-of-B.Ed-Mathamangalam-Kannur",
    label: "Jaybees Training College of B.Ed, Mathamangalam, Kannur",
  },
  {
    id: "Kannur-University-Mananthavady-Campus",
    label: "Kannur University Mananthavady Campus",
  },
  {
    id: "Keyi-Sahib-Training-College-Thaliparamba",
    label: "Keyi Sahib Training College, Thaliparamba",
  },
  {
    id: "Khansa-Women's-College-for-Advanced-Studies-Kumbla",
    label: "Khansa Women's College for Advanced Studies, Kumbla",
  },
  {
    id: "Lasya-College-of-Fine-Arts-Pilathara",
    label: "Lasya College of Fine Arts, Pilathara",
  },
  {
    id: "Mahatma-College-of-Education-Nileshwar",
    label: "Mahatma College of Education, Nileshwar",
  },
  {
    id: "Mahatma-Gandhi-Arts-&-Science-College-Chendayad",
    label: "Mahatma Gandhi Arts & Science College, Chendayad",
  },
  {
    id: "Mahatma-Gandhi-College-Iritty",
    label: "Mahatma Gandhi College, Iritty",
  },
  {
    id: "Malabar-B.Ed-Training-College-Peravoor",
    label: "Malabar B.Ed Training College, Peravoor",
  },
  {
    id: "Mar-Thoma-College-for-the-Hearing-Impaired-Cherkala",
    label: "Mar Thoma College for the Hearing Impaired, Cherkala",
  },
  {
    id: "Mary-Matha-Arts-&-Science-College-Alakode",
    label: "Mary Matha Arts & Science College, Alakode",
  },
  {
    id: "Mary-Matha-Arts-&-Science-College-Mananthavady",
    label: "Mary Matha Arts & Science College, Mananthavady",
  },
  {
    id: "MECF-College-of-Teacher-Education-Peringathur",
    label: "MECF College of Teacher Education, Peringathur",
  },
  {
    id: "Memorial-College-of-Teacher-Education",
    label: "Memorial College of Teacher Education",
  },
  { id: "MES-College-Kuthuparamba", label: "MES College, Kuthuparamba" },
  {
    id: "MIC-Arts-&-Science-College-Chattanchal",
    label: "MIC Arts & Science College, Chattanchal",
  },
  {
    id: "MM-Knowledge-Arts-&-Science-College-Karakkundu",
    label: "MM Knowledge Arts & Science College, Karakkundu",
  },
  {
    id: "Model-College-IHRD-Madikai-Nileshwaram",
    label: "Model College, IHRD Madikai, Nileshwaram",
  },
  {
    id: "Morazha-Co-operative-Arts-&-Science-College-Morazha",
    label: "Morazha Co-operative Arts & Science College, Morazha",
  },
  {
    id: "Naher-Arts-&-Science-College-Kanhirode",
    label: "Naher Arts & Science College, Kanhirode",
  },
  { id: "NAM-College-Kallikkandy", label: "NAM College, Kallikkandy" },
  {
    id: "Narayana-Arts-&-Science-College-Kottappara",
    label: "Narayana Arts & Science College, Kottappara",
  },
  {
    id: "Narayana-College-of-Management-Studies-Periya",
    label: "Narayana College of Management Studies, Periya",
  },
  {
    id: "Navajyothi-College-Cherupuzha",
    label: "Navajyothi College, Cherupuzha",
  },
  {
    id: "Nehru-Arts-&-Science-College-Kanhangad",
    label: "Nehru Arts & Science College, Kanhangad",
  },
  { id: "NEST-Institute-Payyannur", label: "NEST Institute, Payyannur" },
  {
    id: "Niles-Co-operative-Arts-&-Science-College-Munnad",
    label: "Niles Co-operative Arts & Science College, Munnad",
  },
  {
    id: "Nirmalagiri-College-Nirmalagiri",
    label: "Nirmalagiri College, Nirmalagiri",
  },
  {
    id: "Nusrathul-Islam-Arabic-College-Kadavathur",
    label: "Nusrathul Islam Arabic College, Kadavathur",
  },
  {
    id: "OUR-College-of-Applied-Sciences-Thimiri",
    label: "OUR College of Applied Sciences, Thimiri",
  },
  {
    id: "P.K.-Kalan-Memorial-College-of-Applied-Science-Mananathavady",
    label: "P.K. Kalan Memorial College of Applied Science, Mananthavady",
  },
  {
    id: "Payyanur-Arabic-College-Kasaragod",
    label: "Payyanur Arabic College, Kasaragod",
  },
  { id: "Payyanur-College-Payyanur", label: "Payyanur College, Payyanur" },
  {
    id: "Pilathara-Co-operative-Arts-&-Science-College-Pilathara",
    label: "Pilathara Co-operative Arts & Science College, Pilathara",
  },
  {
    id: "PKM-College-of-Education-Madampam",
    label: "PKM College of Education, Madampam",
  },
  { id: "PRNSS-College-Mattanur", label: "PRNSS College, Mattanur" },
  {
    id: "Rajeev-Memorial-College-of-Teacher-Education-Kavumpadi",
    label: "Rajeev Memorial College of Teacher Education, Kavumpadi",
  },
  {
    id: "Salafi-B.Ed.-College-Koodali",
    label: "Salafi B.Ed. College, Koodali",
  },
  {
    id: "School-of-Legal-Studies-Manjeshwar-Campus-Kasaragod",
    label: "School of Legal Studies, Manjeshwar Campus, Kasaragod",
  },
  { id: "SES-College-Sreekandapuram", label: "SES College, Sreekandapuram" },
  {
    id: "Sharaf-Arts-&-Science-College-Padne",
    label: "Sharaf Arts & Science College, Padne",
  },
  {
    id: "Sibga-Institute-of-Advanced-Studies-Irikkur",
    label: "Sibga Institute of Advanced Studies, Irikkur",
  },
  {
    id: "Sir-Syed-College-Taliparamba",
    label: "Sir Syed College, Taliparamba",
  },
  {
    id: "Sir-Syed-Institute-for-Technical-Studies-Karimbam",
    label: "Sir Syed Institute for Technical Studies, Karimbam",
  },
  {
    id: "SNDP-Yogam-Arts-&-Science-College-Kalichanadukkam",
    label: "SNDP Yogam Arts & Science College, Kalichanadukkam",
  },
  {
    id: "Sree-Narayana-College-Thottada-Kannur",
    label: "Sree Narayana College, Thottada, Kannur",
  },
  {
    id: "Sree-Narayana-Guru-College-of-Advanced-Studies-Thottada",
    label: "Sree Narayana Guru College of Advanced Studies, Thottada",
  },
  {
    id: "Sree-Narayana-Guru-College-of-Arts-&-Science-Veerpad-Iritty",
    label: "Sree Narayana Guru College of Arts & Science, Veerpad, Iritty",
  },
  {
    id: "St.-Joseph's-College-Pilathara",
    label: "St. Joseph's College, Pilathara",
  },
  {
    id: "St.-Jude's-Arts-&-Science-College-Vellarikkundu",
    label: "St. Jude's Arts & Science College, Vellarikkundu",
  },
  {
    id: "St.-Mary's-Arts-&-Science-College-Cherupanathady",
    label: "St. Mary's Arts & Science College, Cherupanathady",
  },
  {
    id: "St.-Pius-X-College-Rajapuram",
    label: "St. Pius X College, Rajapuram",
  },
  {
    id: "SUM-College-of-Teacher-Education-Mamba",
    label: "SUM College of Teacher Education, Mamba",
  },
  {
    id: "Thaliparamba-Arts-&-Science-College-Kanhirangad",
    label: "Thaliparamba Arts & Science College, Kanhirangad",
  },
  {
    id: "Trikaripur-Arts-&-Science-College-Elambachi",
    label: "Trikaripur Arts & Science College, Elambachi",
  },
  {
    id: "Vimal-Jyothi-Institute-of-Management-&-Research-Chemperi",
    label: "Vimal Jyothi Institute of Management & Research, Chemperi",
  },
  { id: "WIRAS-Vilayancode", label: "WIRAS, Vilayancode" },
  {
    id: "WMO-Imam-Gazzali-Arts-&-Science-College-Koolivayal",
    label: "WMO Imam Gazzali Arts & Science College, Koolivayal",
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
  {
    name: "groupGrade",
    label: "Group Grade ",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: gradeOptions,
  },
  {
    name: "groupCollegeName",
    label: "Group College Name",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: collegeList,
  },

  {
    name: "groupPoints",
    label: "Group Points ",
    componentType: "input",
    type: "number",
    placeholder: "Enter the Points",
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
    collegeName: "",
    grade: "",
    points: "",
  },
];
export const winnerResultSecondInitialFormData = [
  {
    studentName: "",
    collegeName: "",
    grade: "",
    points: "",
  },
];
export const winnerResultThirdInitialFormData = [
  {
    studentName: "",
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
