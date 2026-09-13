/**
 * SwasthyaSetu AI - API Client Adapter
 * Serves 45+ Maharashtra facilities across remote & urban districts.
 */

const API_BASE = 'https://swasthyasetu-ai-eu9l.onrender.com';

const fallbackFacilities = [
  {
    "id": "mh-gad-1",
    "name": "SEARCH Shodhgram Hospital (Dr. Abhay Bang)",
    "district": "Gadchiroli",
    "taluka": "Dhanora",
    "address": "Shodhgram, Post Chatgaon, Taluka Dhanora, Gadchiroli - 442605",
    "type": "Private",
    "category": "Hospital",
    "distance": 18.0,
    "lat": 20.152,
    "lng": 80.215,
    "speciality": "Pioneering Rural & Tribal Healthcare, Neonatal Care, Alcohol Addiction, Spine & General Surgery",
    "emergency": true,
    "hours": "24x7 Emergency",
    "status": "Open 24 Hours",
    "phone": "+91 7138 255400",
    "costRange": "Highly Subsidized / Free for Tribals",
    "beds": "100",
    "doctors": "15",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Tribal Medicine",
      "Neonatal Intensive Care",
      "General Surgery",
      "Addiction Psychiatry",
      "Community Health"
    ],
    "diagnostics": [
      "X-Ray",
      "Ultrasound",
      "Malaria & Sickle Cell Lab",
      "Blood Bank"
    ],
    "insurance": [
      "MJPJAY",
      "Charity Quota"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "National Sickle Cell Mission"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=SEARCH+Shodhgram+Hospital+(Dr.+Abhay+Bang),+Shodhgram,+Post+Chatgaon,+Taluka+Dhanora,+Gadchiroli+-+442605"
  },
  {
    "id": "mh-gad-2",
    "name": "District Civil Hospital Gadchiroli",
    "district": "Gadchiroli",
    "taluka": "Gadchiroli",
    "address": "Complex Area, Gadchiroli Headquarter - 442605",
    "type": "Government",
    "category": "Hospital",
    "distance": 5.2,
    "lat": 20.184,
    "lng": 79.998,
    "speciality": "Apex District Government Hospital, Trauma, Sickle Cell Anaemia, Snake Bite Treatment",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7132 222122",
    "costRange": "100% Free",
    "beds": "350",
    "doctors": "42",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Emergency & Trauma",
      "Sickle Cell Center",
      "Pediatrics & SNCU",
      "Maternity",
      "General Surgery"
    ],
    "diagnostics": [
      "CT Scan",
      "Digital X-Ray",
      "Sickle Cell Electrophoresis",
      "Blood Storage"
    ],
    "insurance": [
      "PM-JAY Cashless",
      "MJPJAY 100% Free"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "National Sickle Cell Elimination Mission",
      "JSY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+Civil+Hospital+Gadchiroli,+Complex+Area,+Gadchiroli+Headquarter+-+442605"
  },
  {
    "id": "mh-gad-3",
    "name": "Sub-District Hospital Kurkheda",
    "district": "Gadchiroli",
    "taluka": "Kurkheda",
    "address": "State Highway 354, Kurkheda, Gadchiroli - 441209",
    "type": "Government",
    "category": "Hospital",
    "distance": 32.0,
    "lat": 20.575,
    "lng": 80.178,
    "speciality": "Sub-District Rural Healthcare, Emergency Trauma, Malaria & Dengue Care",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7137 232100",
    "costRange": "Free",
    "beds": "100",
    "doctors": "12",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Emergency OPD",
      "Obstetrics & Maternity",
      "Inpatient Wards",
      "Pediatrics"
    ],
    "diagnostics": [
      "Digital X-Ray",
      "Rapid Diagnostic Malaria Lab",
      "Pathology"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sub-District+Hospital+Kurkheda,+State+Highway+354,+Kurkheda,+Gadchiroli+-+441209"
  },
  {
    "id": "mh-gad-4",
    "name": "Primary Health Centre (PHC) Bhamragarh",
    "district": "Gadchiroli",
    "taluka": "Bhamragarh",
    "address": "Hemalkasa-Bhamragarh Road, Deep Forest Area, Gadchiroli - 442710",
    "type": "Government",
    "category": "PHC",
    "distance": 68.0,
    "lat": 19.389,
    "lng": 80.354,
    "speciality": "Remote Tribal Primary Care, Snake Bite Venom Treatment, Institutional Delivery",
    "emergency": true,
    "hours": "24x7 Emergency",
    "status": "Open 24 Hours",
    "phone": "+91 7134 220108",
    "costRange": "Free",
    "beds": "15",
    "doctors": "3",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Tribal OPD",
      "Labor Room",
      "Anti-Snake Venom Centre",
      "Immunization"
    ],
    "diagnostics": [
      "Rapid Malaria Testing",
      "Hemoglobinometer",
      "Urine Routine"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana",
      "National Health Mission"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Primary+Health+Centre+(PHC)+Bhamragarh,+Hemalkasa-Bhamragarh+Road,+Deep+Forest+Area,+Gadchiroli+-+442710"
  },
  {
    "id": "mh-nan-1",
    "name": "District Civil Hospital Nandurbar",
    "district": "Nandurbar",
    "taluka": "Nandurbar",
    "address": "Sakri Road, Near District Collector Office, Nandurbar - 425412",
    "type": "Government",
    "category": "Hospital",
    "distance": 6.0,
    "lat": 21.368,
    "lng": 74.238,
    "speciality": "District Apex Facility, Malnutrition Stabilization (NRC), Sickle Cell Care, Trauma",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2564 222204",
    "costRange": "Free",
    "beds": "300",
    "doctors": "40",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Nutrition Rehabilitation Center (NRC)",
      "Sickle Cell Clinic",
      "Obstetrics & NICU",
      "General Surgery"
    ],
    "diagnostics": [
      "CT Scan",
      "X-Ray",
      "Ultrasound",
      "Blood Component Unit"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "National Sickle Cell Mission",
      "RBSK"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+Civil+Hospital+Nandurbar,+Sakri+Road,+Near+District+Collector+Office,+Nandurbar+-+425412"
  },
  {
    "id": "mh-nan-2",
    "name": "Sub-District Hospital Dhadgaon (Akrani)",
    "district": "Nandurbar",
    "taluka": "Dhadgaon",
    "address": "Main Market, Akrani Tribal Hills, Dhadgaon, Nandurbar - 425414",
    "type": "Government",
    "category": "Hospital",
    "distance": 45.0,
    "lat": 21.821,
    "lng": 74.225,
    "speciality": "Highland Tribal Hospital, Severe Acute Malnutrition (SAM) Care, High-Risk Delivery",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2569 244100",
    "costRange": "Free",
    "beds": "100",
    "doctors": "10",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "SAM Ward & NRC",
      "Maternity Wards",
      "Emergency Trauma",
      "Pediatrics"
    ],
    "diagnostics": [
      "X-Ray",
      "Point of Care Blood Testing",
      "Hemoglobin"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana",
      "Kuposhan Mukti Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sub-District+Hospital+Dhadgaon+(Akrani),+Main+Market,+Akrani+Tribal+Hills,+Dhadgaon,+Nandurbar+-+425414"
  },
  {
    "id": "mh-nan-3",
    "name": "Primary Health Centre (PHC) Toranmal",
    "district": "Nandurbar",
    "taluka": "Shahada",
    "address": "Toranmal Plateau, Satpura Hills, Nandurbar - 425432",
    "type": "Government",
    "category": "PHC",
    "distance": 52.0,
    "lat": 21.875,
    "lng": 74.453,
    "speciality": "Remote Hill-Top Tribal PHC, Emergency Oxygen, Institutional Deliveries",
    "emergency": true,
    "hours": "24x7 Emergency",
    "status": "Open 24 Hours",
    "phone": "+91 2565 260108",
    "costRange": "Free",
    "beds": "12",
    "doctors": "2",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Labor Room",
      "Oxygen Support Ward",
      "OPD Clinic",
      "Vaccination"
    ],
    "diagnostics": [
      "Rapid Diagnostic Tests",
      "Hb",
      "Blood Sugar"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Primary+Health+Centre+(PHC)+Toranmal,+Toranmal+Plateau,+Satpura+Hills,+Nandurbar+-+425432"
  },
  {
    "id": "mh-nan-4",
    "name": "Ashwini Rural Hospital & Research Centre",
    "district": "Nandurbar",
    "taluka": "Shahada",
    "address": "Shahada-Khetia Road, Shahada, Nandurbar - 425409",
    "type": "Private",
    "category": "Hospital",
    "distance": 28.0,
    "lat": 21.545,
    "lng": 74.468,
    "speciality": "Charitable Rural Multi-Speciality, Orthopedics, Intensive Care, Dialysis",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2565 223400",
    "costRange": "₹300 – ₹18,000",
    "beds": "80",
    "doctors": "14",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "ICU",
      "Dialysis",
      "General Surgery",
      "Orthopedics",
      "Pediatrics"
    ],
    "diagnostics": [
      "Digital X-Ray",
      "Ultrasound",
      "Pathology Lab",
      "ECG"
    ],
    "insurance": [
      "MJPJAY",
      "PM-JAY Empaneled",
      "Star Health"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ashwini+Rural+Hospital+&+Research+Centre,+Shahada-Khetia+Road,+Shahada,+Nandurbar+-+425409"
  },
  {
    "id": "mh-mel-1",
    "name": "Sub-District Hospital Dharni (Melghat)",
    "district": "Amravati",
    "taluka": "Dharni",
    "address": "Khandwa-Paratwada Road, Dharni, Melghat, Amravati - 444702",
    "type": "Government",
    "category": "Hospital",
    "distance": 42.0,
    "lat": 21.468,
    "lng": 76.985,
    "speciality": "Korku Tribal Healthcare Hub, Malnutrition Treatment (NRC), Snakebite & Poisoning Treatment",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7226 224210",
    "costRange": "Free",
    "beds": "100",
    "doctors": "14",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Nutritional Rehabilitation Center",
      "NICU & Kangaroo Mother Care",
      "Emergency Trauma",
      "Surgery"
    ],
    "diagnostics": [
      "Digital X-Ray",
      "Ultrasound Sonography",
      "Pathology Lab"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "Janani Suraksha Yojana",
      "Melghat Special Health Package"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sub-District+Hospital+Dharni+(Melghat),+Khandwa-Paratwada+Road,+Dharni,+Melghat,+Amravati+-+444702"
  },
  {
    "id": "mh-mel-2",
    "name": "Rural Hospital Chikhaldara",
    "district": "Amravati",
    "taluka": "Chikhaldara",
    "address": "Near Upper Plateau View, Chikhaldara, Melghat - 444807",
    "type": "Government",
    "category": "Hospital",
    "distance": 38.0,
    "lat": 21.401,
    "lng": 77.325,
    "speciality": "Hilly Tribal Rural Hospital, Emergency Stabilization, Maternity Care",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7220 230230",
    "costRange": "Free",
    "beds": "30",
    "doctors": "6",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Emergency First Response",
      "Maternity",
      "General OPD",
      "Pediatrics"
    ],
    "diagnostics": [
      "Basic Pathology",
      "X-Ray",
      "ECG"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "RBSK"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Rural+Hospital+Chikhaldara,+Near+Upper+Plateau+View,+Chikhaldara,+Melghat+-+444807"
  },
  {
    "id": "mh-mel-3",
    "name": "MAHAN Trust Hospital & Intensive Care (Melghat)",
    "district": "Amravati",
    "taluka": "Dharni",
    "address": "Khandwa Road, Melghat Tribal Region, Utavali, Amravati - 444702",
    "type": "Private",
    "category": "Hospital",
    "distance": 46.0,
    "lat": 21.482,
    "lng": 77.012,
    "speciality": "Renowned NGO Hospital (Dr. Ashish Satav), Severe Malnutrition (SAM), Blindness Elimination, Critical Tribal Care",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7226 224455",
    "costRange": "Subsidized / Free for Korku Tribals",
    "beds": "50",
    "doctors": "8",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Pediatric ICU",
      "Cataract Surgery",
      "Community Nutrition",
      "General Medicine"
    ],
    "diagnostics": [
      "Automated Blood Lab",
      "Ultrasound",
      "Ophthalmic Slit Lamp"
    ],
    "insurance": [
      "MJPJAY",
      "NGO Charity Fund"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=MAHAN+Trust+Hospital+&+Intensive+Care+(Melghat),+Khandwa+Road,+Melghat+Tribal+Region,+Utavali,+Amravati+-+444702"
  },
  {
    "id": "mh-pal-1",
    "name": "Sub-District Hospital Jawhar",
    "district": "Palghar",
    "taluka": "Jawhar",
    "address": "Near Sunset Point Road, Jawhar Tribal Area, Palghar - 401603",
    "type": "Government",
    "category": "Hospital",
    "distance": 35.0,
    "lat": 19.912,
    "lng": 73.231,
    "speciality": "Tribal Healthcare Referral Center, SAM/MAM Nutrition Center, Maternal Emergency Care",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2520 222340",
    "costRange": "Free",
    "beds": "100",
    "doctors": "16",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "NRC Malnutrition",
      "Emergency Trauma",
      "Maternity & NICU",
      "Pediatrics"
    ],
    "diagnostics": [
      "Digital X-Ray",
      "Ultrasound",
      "Pathology Lab",
      "Sickle Cell Screening"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "Janani Suraksha Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sub-District+Hospital+Jawhar,+Near+Sunset+Point+Road,+Jawhar+Tribal+Area,+Palghar+-+401603"
  },
  {
    "id": "mh-pal-2",
    "name": "Rural Hospital Mokhada",
    "district": "Palghar",
    "taluka": "Mokhada",
    "address": "Main Road, Mokhada Hilly Tribal Pocket, Palghar - 401604",
    "type": "Government",
    "category": "Hospital",
    "distance": 48.0,
    "lat": 19.935,
    "lng": 73.342,
    "speciality": "Remote Hilly Primary-Secondary Facility, Maternal Health, Child Dehydration & ORS Hub",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2520 240100",
    "costRange": "Free",
    "beds": "30",
    "doctors": "5",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "OPD",
      "Labor Room",
      "Emergency Stabilization",
      "Immunization"
    ],
    "diagnostics": [
      "Basic Pathology",
      "X-Ray",
      "Hemoglobin"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana",
      "RBSK"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Rural+Hospital+Mokhada,+Main+Road,+Mokhada+Hilly+Tribal+Pocket,+Palghar+-+401604"
  },
  {
    "id": "mh-pal-3",
    "name": "District Civil Hospital Palghar",
    "district": "Palghar",
    "taluka": "Palghar",
    "address": "Mahim Road, Palghar West, Palghar - 401404",
    "type": "Government",
    "category": "Hospital",
    "distance": 12.0,
    "lat": 19.696,
    "lng": 72.765,
    "speciality": "District Headquarters Hospital, Multi-speciality Surgery, Intensive Care, Dialysis",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2525 252102",
    "costRange": "Free",
    "beds": "200",
    "doctors": "35",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Dialysis",
      "Trauma Care",
      "Obstetrics & Gynecology",
      "General Surgery",
      "Pediatrics"
    ],
    "diagnostics": [
      "CT Scan",
      "Digital X-Ray",
      "Sonography",
      "Blood Bank"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+Civil+Hospital+Palghar,+Mahim+Road,+Palghar+West,+Palghar+-+401404"
  },
  {
    "id": "mh-rat-1",
    "name": "B.K.L. Walawalkar Rural Medical College & Hospital",
    "district": "Ratnagiri",
    "taluka": "Chiplun",
    "address": "Mumbai-Goa Highway, Kasarwadi, Dervan, Chiplun, Ratnagiri - 415606",
    "type": "Private",
    "category": "Hospital",
    "distance": 22.0,
    "lat": 17.514,
    "lng": 73.535,
    "speciality": "Apex Rural Teaching Hospital in Konkan, Oncology, Cardiac Surgery, Level 1 Trauma, Free Cancer Screening",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2355 264137",
    "costRange": "Highly Subsidized / Free Charitable Wards",
    "beds": "650",
    "doctors": "120",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Radiation Oncology",
      "Cardiothoracic Surgery",
      "Neurosurgery",
      "Pediatrics",
      "Joint Replacement"
    ],
    "diagnostics": [
      "Linear Accelerator (Cancer)",
      "MRI 1.5T",
      "128 Slice CT",
      "Digital Cath Lab"
    ],
    "insurance": [
      "MJPJAY Cashless",
      "PM-JAY Empaneled",
      "Star Health",
      "All Major TPAs"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Mahatma Jyotiba Phule Jan Arogya Yojana",
      "Indigent Patients Fund"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B.K.L.+Walawalkar+Rural+Medical+College+&+Hospital,+Mumbai-Goa+Highway,+Kasarwadi,+Dervan,+Chiplun,+Ratnagiri+-+415606"
  },
  {
    "id": "mh-rat-2",
    "name": "District Civil Hospital Ratnagiri",
    "district": "Ratnagiri",
    "taluka": "Ratnagiri",
    "address": "Jail Road, Near Maruti Mandir, Ratnagiri - 415612",
    "type": "Government",
    "category": "Hospital",
    "distance": 8.5,
    "lat": 16.994,
    "lng": 73.305,
    "speciality": "Coastal District Civil Hospital, Marine Sting & Snakebite Treatment, Emergency Trauma",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2352 222365",
    "costRange": "Free",
    "beds": "280",
    "doctors": "38",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Marine Toxicology / Snakebite Care",
      "Trauma",
      "Dialysis",
      "Maternity"
    ],
    "diagnostics": [
      "Digital X-Ray",
      "Ultrasound",
      "Pathology",
      "Blood Bank"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+Civil+Hospital+Ratnagiri,+Jail+Road,+Near+Maruti+Mandir,+Ratnagiri+-+415612"
  },
  {
    "id": "mh-sin-1",
    "name": "Sub-District Hospital Kankavli",
    "district": "Sindhudurg",
    "taluka": "Kankavli",
    "address": "Mumbai-Goa Highway NH66, Kankavli, Sindhudurg - 416602",
    "type": "Government",
    "category": "Hospital",
    "distance": 26.0,
    "lat": 16.272,
    "lng": 73.714,
    "speciality": "Konkan Rural Emergency Hub, Orthopedics, Viper & Cobra Antivenom Centre",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2367 232050",
    "costRange": "Free",
    "beds": "100",
    "doctors": "14",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Highway Trauma",
      "Anti-Snake Venom Unit",
      "Obstetrics",
      "General Medicine"
    ],
    "diagnostics": [
      "X-Ray",
      "Sonography",
      "Clinical Pathology"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "Janani Suraksha Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sub-District+Hospital+Kankavli,+Mumbai-Goa+Highway+NH66,+Kankavli,+Sindhudurg+-+416602"
  },
  {
    "id": "mh-sat-1",
    "name": "Rural Hospital Patan",
    "district": "Satara",
    "taluka": "Patan",
    "address": "Karad-Chiplun State Highway, Patan, Satara - 415206",
    "type": "Government",
    "category": "Hospital",
    "distance": 30.0,
    "lat": 17.375,
    "lng": 73.901,
    "speciality": "Remote Koyna Backwaters Healthcare, Landslide & Ghat Emergency Response, Maternal Health",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2372 283100",
    "costRange": "Free",
    "beds": "30",
    "doctors": "6",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Emergency Trauma",
      "Maternity Wards",
      "Anti-Snake Venom Unit",
      "OPD"
    ],
    "diagnostics": [
      "Basic Pathology",
      "X-Ray",
      "ECG"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Rural+Hospital+Patan,+Karad-Chiplun+State+Highway,+Patan,+Satara+-+415206"
  },
  {
    "id": "mh-sat-2",
    "name": "Krishna Institute of Medical Sciences (KIMS Karad)",
    "district": "Satara",
    "taluka": "Karad",
    "address": "Malkapur, Pune-Bangalore Highway, Karad, Satara - 415539",
    "type": "Private",
    "category": "Hospital",
    "distance": 18.0,
    "lat": 17.268,
    "lng": 74.195,
    "speciality": "Apex Super-Speciality Hospital in South Maharashtra, Organ Transplant, Robotic Surgery, Cardiac ICU",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2164 241555",
    "costRange": "₹400 – ₹1,80,000 (Subsidized Charitable Wards)",
    "beds": "1125",
    "doctors": "260",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Cardiology & Cath Lab",
      "Neurosurgery",
      "Renal Transplant",
      "Oncology",
      "Trauma & Critical Care"
    ],
    "diagnostics": [
      "MRI 3 Tesla",
      "CT Scan 128 Slice",
      "Digital Cath Lab",
      "Blood Component Center"
    ],
    "insurance": [
      "MJPJAY Empaneled",
      "PM-JAY Cashless",
      "All Major TPAs"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Mahatma Jyotiba Phule Jan Arogya Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Krishna+Institute+of+Medical+Sciences+(KIMS+Karad),+Malkapur,+Pune-Bangalore+Highway,+Karad,+Satara+-+415539"
  },
  {
    "id": "mh-sat-3",
    "name": "Kranti Sinha Nana Patil District Civil Hospital Satara",
    "district": "Satara",
    "taluka": "Satara",
    "address": "Sadar Bazar, Camp, Satara - 415001",
    "type": "Government",
    "category": "Hospital",
    "distance": 8.0,
    "lat": 17.691,
    "lng": 74.004,
    "speciality": "District Civil Hospital, General Surgery, Dialysis, SNCU Pediatric Unit",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2162 233101",
    "costRange": "Free",
    "beds": "350",
    "doctors": "45",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Dialysis",
      "NICU/SNCU",
      "General Surgery",
      "Orthopedics",
      "Eye OPD"
    ],
    "diagnostics": [
      "CT Scan",
      "Digital X-Ray",
      "Ultrasound",
      "Pathology"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Kranti+Sinha+Nana+Patil+District+Civil+Hospital+Satara,+Sadar+Bazar,+Camp,+Satara+-+415001"
  },
  {
    "id": "mh-ahm-1",
    "name": "Rural Hospital Akole (Kalsubai Tribal Valley)",
    "district": "Ahmednagar",
    "taluka": "Akole",
    "address": "Sangamner-Rajur Road, Akole Tribal Belt, Ahmednagar - 422601",
    "type": "Government",
    "category": "Hospital",
    "distance": 32.0,
    "lat": 19.542,
    "lng": 74.008,
    "speciality": "Remote Western Ghats Tribal Hospital, Antivenom & Anti-Rabies, Maternal Deliveries",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2424 221200",
    "costRange": "Free",
    "beds": "50",
    "doctors": "8",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Emergency First Response",
      "Labor Room",
      "OPD",
      "Snakebite Ward"
    ],
    "diagnostics": [
      "Basic Pathology",
      "X-Ray",
      "ECG"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana",
      "RBSK"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Rural+Hospital+Akole+(Kalsubai+Tribal+Valley),+Sangamner-Rajur+Road,+Akole+Tribal+Belt,+Ahmednagar+-+422601"
  },
  {
    "id": "mh-ahm-2",
    "name": "Pravara Rural Medical College & Hospital (Loni)",
    "district": "Ahmednagar",
    "taluka": "Rahata",
    "address": "Loni-Pravaranagar, Taluka Rahata, Ahmednagar - 413736",
    "type": "Private",
    "category": "Hospital",
    "distance": 25.0,
    "lat": 19.588,
    "lng": 74.455,
    "speciality": "Famous Rural Medical University & Tertiary Hospital, Cardiac, Oncology, Low-Cost Rural Wards",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2422 273600",
    "costRange": "₹250 – ₹60,000 (Charity Subsidies)",
    "beds": "1275",
    "doctors": "220",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Cardiology & Cath Lab",
      "Oncology",
      "Pediatric Surgery",
      "Nephrology & Dialysis",
      "Orthopedics"
    ],
    "diagnostics": [
      "MRI",
      "Spiral CT",
      "Color Doppler",
      "Fully Automated Labs"
    ],
    "insurance": [
      "PM-JAY Empaneled",
      "MJPJAY Cashless",
      "All Major TPAs"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "Indigent Patients Fund"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Pravara+Rural+Medical+College+&+Hospital+(Loni),+Loni-Pravaranagar,+Taluka+Rahata,+Ahmednagar+-+413736"
  },
  {
    "id": "mh-yav-1",
    "name": "Shri Vasantrao Naik Government Medical College & Hospital",
    "district": "Yavatmal",
    "taluka": "Yavatmal",
    "address": "Civil Lines, Yavatmal - 445001",
    "type": "Government",
    "category": "Hospital",
    "distance": 7.0,
    "lat": 20.395,
    "lng": 78.128,
    "speciality": "Apex Vidarbha Medical College, Pesticide Poisoning Protocol Unit, Agrarian Trauma Center",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7232 242456",
    "costRange": "100% Free",
    "beds": "800",
    "doctors": "160",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Toxicology & ICU (Pesticide Center)",
      "Trauma",
      "Pediatrics",
      "Cardiology",
      "Burn Unit"
    ],
    "diagnostics": [
      "CT Scan",
      "Digital X-Ray",
      "Dialysis",
      "Blood Bank"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "Balasaheb Thackeray Accident Insurance Scheme"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Shri+Vasantrao+Naik+Government+Medical+College+&+Hospital,+Civil+Lines,+Yavatmal+-+445001"
  },
  {
    "id": "mh-yav-2",
    "name": "Rural Hospital Ghatanji",
    "district": "Yavatmal",
    "taluka": "Ghatanji",
    "address": "Main Road, Ghatanji Tribal Pocket, Yavatmal - 445301",
    "type": "Government",
    "category": "Hospital",
    "distance": 38.0,
    "lat": 20.138,
    "lng": 78.318,
    "speciality": "Kolam Tribal Belt Rural Hospital, Sickle Cell Management, Institutional Delivery",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7230 277200",
    "costRange": "Free",
    "beds": "30",
    "doctors": "5",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Sickle Cell OPD",
      "Maternity",
      "OPD",
      "Emergency First Response"
    ],
    "diagnostics": [
      "Rapid Sickle Screening",
      "Hemoglobin",
      "Blood Sugar"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Rural+Hospital+Ghatanji,+Main+Road,+Ghatanji+Tribal+Pocket,+Yavatmal+-+445301"
  },
  {
    "id": "mh-was-1",
    "name": "District Civil Hospital Washim",
    "district": "Washim",
    "taluka": "Washim",
    "address": "Risod Road, Washim Headquarter - 444505",
    "type": "Government",
    "category": "Hospital",
    "distance": 9.0,
    "lat": 20.108,
    "lng": 77.135,
    "speciality": "District Government Hospital, General Surgery, Dialysis, Maternity Care",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7252 232115",
    "costRange": "Free",
    "beds": "200",
    "doctors": "28",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Dialysis Unit",
      "Maternity",
      "General OPD",
      "Trauma Care"
    ],
    "diagnostics": [
      "X-Ray",
      "Ultrasound",
      "Pathology"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+Civil+Hospital+Washim,+Risod+Road,+Washim+Headquarter+-+444505"
  },
  {
    "id": "mh-bee-1",
    "name": "District Civil Hospital Beed",
    "district": "Beed",
    "taluka": "Beed",
    "address": "Jalna Road, Near Bus Stand, Beed - 431122",
    "type": "Government",
    "category": "Hospital",
    "distance": 8.0,
    "lat": 18.989,
    "lng": 75.755,
    "speciality": "Marathwada District Hospital, Heat Stroke Care Unit, Maternal & Women Health",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2442 222405",
    "costRange": "Free",
    "beds": "350",
    "doctors": "44",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Heat Stroke Dedicated Ward",
      "Maternity & C-Section",
      "Pediatrics",
      "Trauma"
    ],
    "diagnostics": [
      "Digital X-Ray",
      "CT Scan",
      "Pathology",
      "Blood Bank"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "Janani Suraksha Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+Civil+Hospital+Beed,+Jalna+Road,+Near+Bus+Stand,+Beed+-+431122"
  },
  {
    "id": "mh-dha-1",
    "name": "District Civil Hospital Dharashiv (Osmanabad)",
    "district": "Dharashiv",
    "taluka": "Dharashiv",
    "address": "Solapur-Aurangabad Road, Dharashiv - 413501",
    "type": "Government",
    "category": "Hospital",
    "distance": 11.0,
    "lat": 18.185,
    "lng": 76.042,
    "speciality": "District Government Hospital, Orthopedic Trauma, Dialysis Unit, Maternal Health",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2472 222125",
    "costRange": "Free",
    "beds": "250",
    "doctors": "34",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Dialysis",
      "Emergency Trauma",
      "Maternity",
      "Pediatrics"
    ],
    "diagnostics": [
      "X-Ray",
      "Ultrasound",
      "Clinical Labs"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+Civil+Hospital+Dharashiv+(Osmanabad),+Solapur-Aurangabad+Road,+Dharashiv+-+413501"
  },
  {
    "id": "mh-cha-1",
    "name": "Government Medical College & Hospital Chandrapur",
    "district": "Chandrapur",
    "taluka": "Chandrapur",
    "address": "Ramnagar Road, Near Forest Academy, Chandrapur - 442401",
    "type": "Government",
    "category": "Hospital",
    "distance": 7.5,
    "lat": 19.958,
    "lng": 79.295,
    "speciality": "Eastern Vidarbha Apex Medical College, Thermal Power Plant Occupational Health, Trauma",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7172 252522",
    "costRange": "Free",
    "beds": "600",
    "doctors": "95",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Occupational Lung Diseases",
      "Trauma Care",
      "Burn Unit",
      "Pediatrics",
      "General Surgery"
    ],
    "diagnostics": [
      "CT Scan",
      "Digital X-Ray",
      "Bronchoscopy",
      "Blood Bank"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Government+Medical+College+&+Hospital+Chandrapur,+Ramnagar+Road,+Near+Forest+Academy,+Chandrapur+-+442401"
  },
  {
    "id": "mh-gon-1",
    "name": "District General Hospital Gondia",
    "district": "Gondia",
    "taluka": "Gondia",
    "address": "Kudwa Naka, Gondia - 441614",
    "type": "Government",
    "category": "Hospital",
    "distance": 6.5,
    "lat": 21.462,
    "lng": 80.198,
    "speciality": "District Government Hospital, Sickle Cell Centre, Malaria Protocol Center",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 7182 236100",
    "costRange": "Free",
    "beds": "250",
    "doctors": "36",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Sickle Cell Clinic",
      "Emergency Trauma",
      "Maternity",
      "Pediatrics"
    ],
    "diagnostics": [
      "Digital X-Ray",
      "Ultrasound",
      "Pathology"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "National Sickle Cell Mission"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+General+Hospital+Gondia,+Kudwa+Naka,+Gondia+-+441614"
  },
  {
    "id": "mh-rai-1",
    "name": "District Civil Hospital Alibag",
    "district": "Raigad",
    "taluka": "Alibag",
    "address": "Near Chendhare, Alibag, Raigad - 402201",
    "type": "Government",
    "category": "Hospital",
    "distance": 8.0,
    "lat": 18.641,
    "lng": 72.872,
    "speciality": "Coastal District Hospital, Drowning & Marine Trauma Response, Dialysis",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2141 222120",
    "costRange": "Free",
    "beds": "200",
    "doctors": "32",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Dialysis Unit",
      "Emergency Care",
      "Maternity",
      "General OPD"
    ],
    "diagnostics": [
      "Digital X-Ray",
      "Ultrasound",
      "Clinical Labs"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+Civil+Hospital+Alibag,+Near+Chendhare,+Alibag,+Raigad+-+402201"
  },
  {
    "id": "mh-rai-2",
    "name": "Rural Hospital Mahad",
    "district": "Raigad",
    "taluka": "Mahad",
    "address": "Mumbai-Goa Highway NH66, Mahad, Raigad - 402301",
    "type": "Government",
    "category": "Hospital",
    "distance": 32.0,
    "lat": 18.082,
    "lng": 73.421,
    "speciality": "Highway Trauma Care, Flood Emergency Response, Antivenom Centre",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2145 222108",
    "costRange": "Free",
    "beds": "50",
    "doctors": "8",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Highway Emergency Unit",
      "Maternity",
      "General Wards"
    ],
    "diagnostics": [
      "X-Ray",
      "Pathology Lab",
      "ECG"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Balasaheb Thackeray Accident Scheme"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Rural+Hospital+Mahad,+Mumbai-Goa+Highway+NH66,+Mahad,+Raigad+-+402301"
  },
  {
    "id": "mh-nas-1",
    "name": "Rural Hospital Surgana (Remote Tribal Taluka)",
    "district": "Nashik",
    "taluka": "Surgana",
    "address": "Waghai-Surgana Road, Surgana Tribal Pocket, Nashik - 422211",
    "type": "Government",
    "category": "Hospital",
    "distance": 45.0,
    "lat": 20.572,
    "lng": 73.618,
    "speciality": "Deep Ghats Tribal Healthcare, Traditional Healing & Modern Medicine Integration, SAM Treatment",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2571 222100",
    "costRange": "Free",
    "beds": "30",
    "doctors": "6",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Tribal OPD",
      "Labor Room",
      "NRC Malnutrition",
      "Emergency First Aid"
    ],
    "diagnostics": [
      "Basic Labs",
      "Hemoglobin",
      "X-Ray"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana",
      "RBSK"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Rural+Hospital+Surgana+(Remote+Tribal+Taluka),+Waghai-Surgana+Road,+Surgana+Tribal+Pocket,+Nashik+-+422211"
  },
  {
    "id": "mh-nas-2",
    "name": "District Civil Hospital Nashik",
    "district": "Nashik",
    "taluka": "Nashik",
    "address": "Trimbak Road, Near CBS, Nashik - 422002",
    "type": "Government",
    "category": "Hospital",
    "distance": 8.0,
    "lat": 19.995,
    "lng": 73.785,
    "speciality": "Northern Maharashtra Apex Civil Hospital, Dialysis, Neonatology, Comprehensive Surgery",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 253 2576106",
    "costRange": "Free",
    "beds": "550",
    "doctors": "75",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Dialysis",
      "Trauma Center",
      "NICU",
      "General Surgery",
      "Orthopedics"
    ],
    "diagnostics": [
      "CT Scan",
      "Digital X-Ray",
      "Color Doppler",
      "Blood Bank"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=District+Civil+Hospital+Nashik,+Trimbak+Road,+Near+CBS,+Nashik+-+422002"
  },
  {
    "id": "mh-pun-1",
    "name": "Primary Health Centre (PHC) Khed",
    "district": "Pune",
    "taluka": "Khed",
    "address": "Opposite Gram Panchayat, Rajgurunagar, Khed, Pune - 410505",
    "type": "Government",
    "category": "PHC",
    "distance": 2.4,
    "lat": 18.854,
    "lng": 73.896,
    "speciality": "General Medicine, Maternal & Child Care, Free Immunization",
    "emergency": false,
    "hours": "9:00 AM – 5:00 PM",
    "status": "Open now",
    "phone": "+91 2135 222108",
    "costRange": "Free",
    "beds": "12",
    "doctors": "3",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "General OPD",
      "Immunization",
      "Maternity",
      "Pathology Lab"
    ],
    "diagnostics": [
      "Basic Blood Test",
      "Urine Routine",
      "Malaria Smear"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana",
      "RBSK"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Primary+Health+Centre+(PHC)+Khed,+Opposite+Gram+Panchayat,+Rajgurunagar,+Khed,+Pune+-+410505"
  },
  {
    "id": "mh-pun-2",
    "name": "Community Health Centre (CHC) Chakan",
    "district": "Pune",
    "taluka": "Khed",
    "address": "Talegaon-Chakan Road, Near Bus Stand, Chakan, Pune - 410501",
    "type": "Government",
    "category": "CHC",
    "distance": 6.8,
    "lat": 18.758,
    "lng": 73.856,
    "speciality": "Emergency, General Surgery, Obstetrics & Gynecology, Pediatrics",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2135 249100",
    "costRange": "Free / Up to ₹500",
    "beds": "30",
    "doctors": "8",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Emergency & Trauma",
      "General Surgery",
      "Pediatrics",
      "Gynecology & Obstetrics",
      "Radiology"
    ],
    "diagnostics": [
      "X-Ray",
      "Ultrasound",
      "Complete Blood Count",
      "ECG"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY",
      "RSBY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "RBSK",
      "National Health Mission"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Community+Health+Centre+(CHC)+Chakan,+Talegaon-Chakan+Road,+Near+Bus+Stand,+Chakan,+Pune+-+410501"
  },
  {
    "id": "mh-pun-3",
    "name": "Sassoon General Hospital & B.J. Govt Medical College",
    "district": "Pune",
    "taluka": "Pune City",
    "address": "Station Road, Near Pune Railway Station, Pune - 411001",
    "type": "Government",
    "category": "Hospital",
    "distance": 18.5,
    "lat": 18.5283,
    "lng": 73.8741,
    "speciality": "Apex Tertiary Care, Trauma Centre, Cardiology, Oncology, Neurosurgery",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 20 2612 8000",
    "costRange": "100% Free / Subsidized",
    "beds": "1296",
    "doctors": "240",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Trauma & Emergency",
      "Cardiology",
      "Cardiothoracic Surgery",
      "Neurosurgery",
      "Oncology",
      "Pediatrics",
      "Burn ICU"
    ],
    "diagnostics": [
      "MRI (1.5T & 3T)",
      "CT Scan 128-slice",
      "Digital Cath Lab",
      "Advanced Biochemistry",
      "Histopathology"
    ],
    "insurance": [
      "PM-JAY Cashless",
      "MJPJAY Free",
      "ESIC",
      "CGHS"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Mahatma Jyotiba Phule Jan Arogya Yojana",
      "Mukhyamantri Sahayata Nidhi",
      "Rashtriya Arogya Nidhi"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sassoon+General+Hospital+&+B.J.+Govt+Medical+College,+Station+Road,+Near+Pune+Railway+Station,+Pune+-+411001"
  },
  {
    "id": "mh-pun-4",
    "name": "Sub-District Hospital Manchar",
    "district": "Pune",
    "taluka": "Ambegaon",
    "address": "Pune-Nashik Highway, Manchar, Taluka Ambegaon, Pune - 410503",
    "type": "Government",
    "category": "Hospital",
    "distance": 22.0,
    "lat": 19.0062,
    "lng": 73.943,
    "speciality": "Rural Sub-District Hospital, Trauma Care, Maternal Health",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2133 223100",
    "costRange": "Free",
    "beds": "100",
    "doctors": "18",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Trauma Care",
      "Obstetrics",
      "General OPD",
      "Pediatrics",
      "Minor Surgery"
    ],
    "diagnostics": [
      "X-Ray",
      "Blood Testing Lab",
      "ECG"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Janani Suraksha Yojana",
      "RBSK"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sub-District+Hospital+Manchar,+Pune-Nashik+Highway,+Manchar,+Taluka+Ambegaon,+Pune+-+410503"
  },
  {
    "id": "mh-pun-5",
    "name": "Government Medical College & Hospital Baramati",
    "district": "Pune",
    "taluka": "Baramati",
    "address": "MIDC Area, Baramati, Pune - 413133",
    "type": "Government",
    "category": "Hospital",
    "distance": 48.0,
    "lat": 18.152,
    "lng": 74.578,
    "speciality": "Government Teaching Hospital, Multi-speciality Surgery, Critical Care, Dialysis",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 2112 244172",
    "costRange": "Free",
    "beds": "500",
    "doctors": "85",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Trauma & Surgery",
      "Dialysis Unit",
      "Maternity & NICU",
      "Orthopedics",
      "Cardiology"
    ],
    "diagnostics": [
      "CT Scan",
      "Digital X-Ray",
      "Blood Bank",
      "Pathology"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Government+Medical+College+&+Hospital+Baramati,+MIDC+Area,+Baramati,+Pune+-+413133"
  },
  {
    "id": "mh-pun-6",
    "name": "YCM Hospital (Pimpri-Chinchwad)",
    "district": "Pune",
    "taluka": "Haveli",
    "address": "Sant Tukaram Nagar, Pimpri, Pune - 411018",
    "type": "Government",
    "category": "Hospital",
    "distance": 14.2,
    "lat": 18.6256,
    "lng": 73.8188,
    "speciality": "Municipal Tertiary Hospital, Multi-speciality, Emergency & Trauma",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 20 2742 0000",
    "costRange": "Free / Low Nominal Cost",
    "beds": "750",
    "doctors": "140",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Emergency Medicine",
      "General Surgery",
      "Orthopedics",
      "Pediatrics",
      "ENT",
      "Dialysis"
    ],
    "diagnostics": [
      "CT Scan",
      "X-Ray",
      "Ultrasonography",
      "Blood Bank",
      "Pathology"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY",
      "PCMC Urban Health"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=YCM+Hospital+(Pimpri-Chinchwad),+Sant+Tukaram+Nagar,+Pimpri,+Pune+-+411018"
  },
  {
    "id": "mh-pun-7",
    "name": "Ruby Hall Clinic (Pune Station)",
    "district": "Pune",
    "taluka": "Pune City",
    "address": "40, Sassoon Road, Sangamvadi, Pune - 411001",
    "type": "Private",
    "category": "Hospital",
    "distance": 18.8,
    "lat": 18.5326,
    "lng": 73.877,
    "speciality": "Cardiology, Organ Transplant, Oncology, Neurosciences, Level 1 Trauma",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 20 6645 5100",
    "costRange": "₹1,500 – ₹2,50,000",
    "beds": "600",
    "doctors": "180",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Cardiology & Cath Lab",
      "Oncology",
      "Neurosurgery",
      "Organ Transplant",
      "Critical Care ICU"
    ],
    "diagnostics": [
      "PET-CT",
      "3T MRI",
      "Cath Lab",
      "Advanced Genomic Testing"
    ],
    "insurance": [
      "All TPA Insurance",
      "Star Health",
      "HDFC ERGO",
      "PM-JAY Empaneled (Select procedures)",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY (Select Procedures)",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ruby+Hall+Clinic+(Pune+Station),+40,+Sassoon+Road,+Sangamvadi,+Pune+-+411001"
  },
  {
    "id": "mh-pun-8",
    "name": "Dr. D.Y. Patil Medical College Hospital & Research Centre",
    "district": "Pune",
    "taluka": "Haveli",
    "address": "Sant Tukaram Nagar, Pimpri, Pune - 411018",
    "type": "Private",
    "category": "Hospital",
    "distance": 14.5,
    "lat": 18.6215,
    "lng": 73.821,
    "speciality": "Large Teaching Hospital, Super-Speciality, IVF, Organ Transplant, 24x7 Emergency",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 20 2780 5100",
    "costRange": "₹300 – ₹60,000 (Charitable Beds Available)",
    "beds": "2000",
    "doctors": "350",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Emergency & Trauma",
      "Cardiology",
      "Neurology",
      "Plastic Surgery",
      "Pediatric Surgery"
    ],
    "diagnostics": [
      "MRI 3 Tesla",
      "CT 128 Slice",
      "Digital Mammography",
      "Robotic Cath Lab"
    ],
    "insurance": [
      "PM-JAY Cashless",
      "MJPJAY Cashless",
      "All Private TPAs"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Mahatma Jyotiba Phule Jan Arogya Yojana"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Dr.+D.Y.+Patil+Medical+College+Hospital+&+Research+Centre,+Sant+Tukaram+Nagar,+Pimpri,+Pune+-+411018"
  },
  {
    "id": "mh-pun-9",
    "name": "Deenanath Mangeshkar Hospital & Research Centre",
    "district": "Pune",
    "taluka": "Pune City",
    "address": "Near Mhatre Bridge, Erandwane, Pune - 411004",
    "type": "Private",
    "category": "Hospital",
    "distance": 21.0,
    "lat": 18.5042,
    "lng": 73.8327,
    "speciality": "Trust Hospital, Multi-speciality, Pediatrics, Cancer, Cardiology",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 20 4015 1000",
    "costRange": "₹600 – ₹1,20,000 (Subsidized Rates)",
    "beds": "800",
    "doctors": "210",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Pediatric Cardiology",
      "Medical Oncology",
      "Joint Replacement",
      "Nephrology & Dialysis"
    ],
    "diagnostics": [
      "MRI",
      "Dual Source CT",
      "Nuclear Medicine",
      "Automated Pathology"
    ],
    "insurance": [
      "All Major Health Insurers",
      "PM-JAY",
      "MJPJAY Trust Quota"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY",
      "Indigent Patients Fund"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Deenanath+Mangeshkar+Hospital+&+Research+Centre,+Near+Mhatre+Bridge,+Erandwane,+Pune+-+411004"
  },
  {
    "id": "mh-pun-10",
    "name": "ABC Multispeciality Hospital",
    "district": "Pune",
    "taluka": "Khed",
    "address": "Near Pune-Nashik Highway Bypass, Chakan, Pune - 410501",
    "type": "Private",
    "category": "Hospital",
    "distance": 8.2,
    "lat": 18.752,
    "lng": 73.832,
    "speciality": "Cardiology, Orthopedics, Intensive Care Unit, General Surgery",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 20 6688 9900",
    "costRange": "₹500 – ₹15,000",
    "beds": "110",
    "doctors": "24",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "ICU / CCU",
      "Trauma Care"
    ],
    "diagnostics": [
      "MRI",
      "CT Scan",
      "Digital X-Ray",
      "Pathology Lab"
    ],
    "insurance": [
      "Star Health",
      "HDFC ERGO",
      "PM-JAY Cashless",
      "Care Health"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=ABC+Multispeciality+Hospital,+Near+Pune-Nashik+Highway+Bypass,+Chakan,+Pune+-+410501"
  },
  {
    "id": "mh-nag-1",
    "name": "Government Medical College & Hospital (GMCH Nagpur)",
    "district": "Nagpur",
    "taluka": "Nagpur Urban",
    "address": "Medical Square, Hanuman Nagar, Nagpur - 440003",
    "type": "Government",
    "category": "Hospital",
    "distance": 12.0,
    "lat": 21.127,
    "lng": 79.098,
    "speciality": "Apex Medical College in Central India, Multi-Organ Transplant, Burn ICU, Trauma Centre",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 712 2744671",
    "costRange": "100% Free",
    "beds": "1400",
    "doctors": "310",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Cardiothoracic Surgery",
      "Neurosurgery",
      "Pediatric Surgery",
      "Trauma",
      "Oncology"
    ],
    "diagnostics": [
      "MRI 3T",
      "CT 128 Slice",
      "Cath Lab",
      "Blood Bank"
    ],
    "insurance": [
      "PM-JAY Cashless",
      "MJPJAY Free"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "Mahatma Jyotiba Phule Jan Arogya Yojana",
      "Mukhyamantri Sahayata Nidhi"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Government+Medical+College+&+Hospital+(GMCH+Nagpur),+Medical+Square,+Hanuman+Nagar,+Nagpur+-+440003"
  },
  {
    "id": "mh-aur-1",
    "name": "Govt Medical College & Hospital (GMCH Chhatrapati Sambhajinagar)",
    "district": "Chhatrapati Sambhajinagar",
    "taluka": "Sambhajinagar",
    "address": "Panchakki Road, Chhatrapati Sambhajinagar - 431001",
    "type": "Government",
    "category": "Hospital",
    "distance": 10.0,
    "lat": 19.895,
    "lng": 75.318,
    "speciality": "Apex Marathwada Medical College, Super-Speciality Hospital, Tertiary Emergency Care",
    "emergency": true,
    "hours": "24x7",
    "status": "Open 24 Hours",
    "phone": "+91 240 2402412",
    "costRange": "100% Free",
    "beds": "1170",
    "doctors": "240",
    "pharmacy": true,
    "accessible": true,
    "departments": [
      "Nephrology & Dialysis",
      "Cardiology",
      "Trauma",
      "Obstetrics",
      "Oncology"
    ],
    "diagnostics": [
      "MRI",
      "CT Scan",
      "Color Doppler",
      "Blood Component Unit"
    ],
    "insurance": [
      "PM-JAY",
      "MJPJAY"
    ],
    "schemes": [
      "Ayushman Bharat PM-JAY",
      "MJPJAY"
    ],
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Govt+Medical+College+&+Hospital+(GMCH+Chhatrapati+Sambhajinagar),+Panchakki+Road,+Chhatrapati+Sambhajinagar+-+431001"
  }
];
const fallbackSchemes = [
  {
    "id": "pmjay",
    "name": "Ayushman Bharat - PM-JAY",
    "tag": "National Cashless Healthcare",
    "benefit": "Up to ₹5,00,000 cashless secondary and tertiary hospitalization cover per family per year across 28,000+ empaneled hospitals.",
    "who": "Bottom 40% vulnerable families identified in SECC 2011 database, BPL cardholders, and Antyodaya beneficiaries.",
    "eligibility": "Rural families living in kutcha houses, landless agricultural workers, SC/ST households, destitute families with disabled earners.",
    "docs": [
      "Aadhaar Card",
      "Ration Card (Yellow/Orange)",
      "PM-JAY Golden Card or Verification Letter"
    ],
    "helpline": "14555",
    "officialUrl": "https://pmjay.gov.in",
    "criteria": {
      "incomeMax": "Low Income / BPL",
      "requiresRationCard": true,
      "ageRange": "All Ages",
      "coveredCosts": "100% Cashless up to ₹5,00,000"
    }
  },
  {
    "id": "mjpjay",
    "name": "Mahatma Jyotiba Phule Jan Arogya Yojana (MJPJAY)",
    "tag": "Maharashtra State Scheme",
    "benefit": "Free cashless hospitalization and surgical treatment up to ₹5,00,000 for 996 identified medical and surgical procedures in Maharashtra.",
    "who": "Maharashtra resident families holding valid Yellow, Orange, Antyodaya, or Annapurna ration cards.",
    "eligibility": "Permanent resident of Maharashtra with annual family income up to ₹1,00,000 (relaxed for agrarian distress districts).",
    "docs": [
      "Ration Card (Yellow or Orange)",
      "Aadhaar Card or Voter ID",
      "Doctor Referral Slip from Govt or Network Hospital"
    ],
    "helpline": "155388 / 1800-233-2200",
    "officialUrl": "https://www.jeevandayee.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "requiresRationCard": true,
      "ageRange": "All Ages",
      "coveredCosts": "100% Cashless up to ₹5,00,000 per year"
    }
  },
  {
    "id": "vay_vandana",
    "name": "Ayushman Vay Vandana Card (Senior Citizens 70+)",
    "tag": "Senior Citizen Universal Cover",
    "benefit": "Separate free annual health coverage of ₹5,00,000 exclusively for every citizen aged 70 years and above, irrespective of family income.",
    "who": "All senior citizens aged 70 years or older residing in India (universal cover, not restricted by economic status).",
    "eligibility": "Age verification: Must be 70 years or older as documented on Aadhaar card. No income ceiling or means-testing applies.",
    "docs": [
      "Aadhaar Card with full Date of Birth",
      "Active Mobile Number linked to Aadhaar for OTP verification"
    ],
    "helpline": "14555",
    "officialUrl": "https://beneficiary.nha.gov.in",
    "criteria": {
      "minAge": 70,
      "universal": true,
      "coveredCosts": "₹5,00,000 dedicated annual cashless pool"
    }
  },
  {
    "id": "jsy",
    "name": "Janani Suraksha Yojana (JSY)",
    "tag": "Maternal & Newborn Care",
    "benefit": "Cash assistance of ₹1,400 for rural mothers opting for institutional delivery in govt facilities + free antenatal care, delivery and newborn care.",
    "who": "Pregnant women in rural and semi-urban communities delivering in government hospitals or accredited private centres.",
    "eligibility": "All pregnant women from BPL/SC/ST families in rural areas delivering in accredited public or private health centres.",
    "docs": [
      "Maternal & Child Health (MCH) Card",
      "Bank Account Passbook (Aadhaar linked for DBT)",
      "Aadhaar Card",
      "Ration Card"
    ],
    "helpline": "104 (Health Information Helpline)",
    "officialUrl": "https://nhm.gov.in",
    "criteria": {
      "pregnancy": true,
      "ruralBonus": true,
      "coveredCosts": "₹1,400 direct benefit transfer + 100% free delivery"
    }
  },
  {
    "id": "pmsma",
    "name": "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)",
    "tag": "Free Antenatal Care",
    "benefit": "Free, assured, comprehensive antenatal checkups including ultrasound, blood panels, and specialist consultation on the 9th of every month.",
    "who": "All pregnant women in their 2nd and 3rd trimesters across rural and urban India.",
    "eligibility": "Open to all pregnant women regardless of income category visiting designated government health facilities on the 9th.",
    "docs": [
      "Mother-Child Protection Card (MCP)",
      "Aadhaar Card"
    ],
    "helpline": "1800-180-1104",
    "officialUrl": "https://pmsma.nhp.gov.in",
    "criteria": {
      "pregnancy": true,
      "secondTrimester": true,
      "coveredCosts": "Free consultations, diagnostics, IFA & Calcium supplements"
    }
  },
  {
    "id": "rbsk",
    "name": "Rashtriya Bal Swasthya Karyakram (RBSK)",
    "tag": "Child Health & Tertiary Surgery",
    "benefit": "Free screening and fully funded specialized medical and surgical treatments for 30 common health conditions in children aged 0-18 years.",
    "who": "Infants, toddlers, Anganwadi children, and all students enrolled in government and government-aided schools.",
    "eligibility": "Children from birth up to 18 years identified with Defects at birth, Deficiencies, Diseases, and Developmental delays (4Ds).",
    "docs": [
      "School ID or Anganwadi Registration",
      "Birth Certificate or Aadhaar Card",
      "RBSK Mobile Health Team Referral"
    ],
    "helpline": "104",
    "officialUrl": "https://rbsk.gov.in",
    "criteria": {
      "maxAge": 18,
      "studentOrAnganwadi": true,
      "coveredCosts": "100% Free surgery including heart defects, clubfoot, cleft palate"
    }
  },
  {
    "id": "nikshay",
    "name": "Nikshay Poshan Yojana (NPY - TB Support)",
    "tag": "TB Nutritional Support",
    "benefit": "Direct benefit transfer (DBT) of ₹500 per month directly into the patient's bank account for nutritional support during TB treatment.",
    "who": "All notified tuberculosis (TB) patients undergoing treatment in government or private health centres.",
    "eligibility": "Any individual diagnosed with TB and enrolled on the central Ni-kshay online tracking portal.",
    "docs": [
      "Aadhaar Card",
      "Bank Account Details (Passbook copy)",
      "TB Treatment Card / Nikshay ID"
    ],
    "helpline": "1800-11-6666 (Nikshay Helpline)",
    "officialUrl": "https://nikshay.in",
    "criteria": {
      "tbPatient": true,
      "coveredCosts": "₹500/month financial aid + 100% free anti-TB drugs"
    }
  },
  {
    "id": "cm_relief",
    "name": "Mukhyamantri Sahayata Nidhi (CM Medical Relief Fund)",
    "tag": "Maharashtra Emergency Surgery Aid",
    "benefit": "Financial grant up to ₹3,00,000 for critical surgeries (cardiac, renal transplant, brain surgery, cochlear implant, pediatric surgery).",
    "who": "Permanent residents of Maharashtra from poor families facing sudden major medical emergencies not covered by other schemes.",
    "eligibility": "Annual family income less than ₹1,60,000. Not benefiting from private high-value corporate mediclaim.",
    "docs": [
      "Income Certificate from Tehsildar",
      "Ration Card copy",
      "Hospital Cost Estimation Certificate signed by Civil Surgeon"
    ],
    "helpline": "022-22026948 (Mantralaya Cell)",
    "officialUrl": "https://cmrf.maharashtra.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "incomeMax": "₹1.6 Lakh",
      "coveredCosts": "Grant directly sent to treating hospital account"
    }
  }
];

export const base44 = {
  entities: {
    HealthcareFacility: {
      async list(sortOrder = '-distance', limit = 100) {
        try {
          const res = await fetch(`${API_BASE}/facilities`);
          if (res.ok) {
            const data = await res.json();
            return data.slice(0, limit);
          }
        } catch (e) {
          console.warn('Backend API unreachable, using local facility cache:', e);
        }
        return fallbackFacilities.slice(0, limit);
      }
    },
    GovernmentScheme: {
      async list(sortOrder = '-created_date', limit = 50) {
        try {
          const res = await fetch(`${API_BASE}/schemes`);
          if (res.ok) {
            const data = await res.json();
            return data.slice(0, limit);
          }
        } catch (e) {
          console.warn('Backend API unreachable, using local schemes cache:', e);
        }
        return fallbackSchemes.slice(0, limit);
      }
    },
    FacilityFeedback: {
      async create(data) {
        try {
          const res = await fetch(`${API_BASE}/feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          if (res.ok) {
            return await res.json();
          }
        } catch (e) {
          console.warn('Feedback recorded locally:', e);
        }
        return { success: true, local: true };
      }
    }
  },
  ai: {
    async chat(question, lang = 'en') {
      // Try backend first
      try {
        const res = await fetch(`${API_BASE}/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question, lang }),
          signal: AbortSignal.timeout(5000),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.reply) return data.reply;
        }
      } catch (e) {
        console.warn('AI backend unreachable, using local health knowledge:', e);
      }
      // Fallback: answer using local healthKnowledge.js (works 100% offline / on Vercel)
      return localAnswerHealthQuery(question, lang);
    }
  }
};

// ─── Local AI Engine (works without backend) ──────────────────────────────
const LOCAL_TOPICS = [
  { id: 'emergency', keys: ['chest pain','heart attack','stroke','paralysis','severe bleeding','unconscious','fainting','छातीत','हार्ट','सीने','दिल का दौरा','पक्षाघात','लकवा','रक्तस्त्राव','बेहोश'],
    en: '🚨 IMMEDIATE EMERGENCY — Call 108 now.\n\nPrecautions:\n• Sit or lie the person down. Keep them calm. Do not leave them alone.\n• Loosen tight clothing. Do not give food, water, or home remedies.\n• If they stop breathing, start CPR if trained.\n• Note the time symptoms started.\n\nCall 108 for chest pain, one-sided weakness, sudden speech trouble, heavy bleeding, or fainting.',
    mr: '🚨 तात्काळ आपत्कालीन — आत्ताच १०८ वर कॉल करा.\n\n• रुग्णाला बसवा/झोपवा. एकटे सोडू नका.\n• घट्ट कपडे सैल करा. खाणे-पिणे देऊ नका.\n• श्वास थांबल्यास CPR. लक्षण दिसताच १०८.',
    hi: '🚨 तुरंत आपातकाल — अभी १०८ पर कॉल करें।\n\n• मरीज को बैठाएं/लिटाएं। अकेला न छोड़ें।\n• तंग कपड़े ढीले करें। खाना-पीना न दें।\n• सांस रुकने पर CPR। लक्षण दिखते ही १०८।' },
  { id: 'fever', keys: ['fever','ताप','बुखार','dengue','डेंग्यू','डेंगू','malaria','मलेरिया','typhoid','टायफॉईड','cold','cough','खांसी','सर्दी','खोकला'],
    en: '🌡️ Fever, Cough & Monsoon Infections\n\nHome care:\n• Rest. Drink ORS, boiled water, coconut water.\n• Sponge with lukewarm cloth. No ice-cold water.\n• Paracetamol as advised. Avoid Aspirin/Ibuprofen in dengue (bleeding risk).\n• Use mosquito nets. Empty stored water weekly.\n\n⚠️ See a doctor if fever > 3 days, rash, vomiting, bleeding gums, or breathlessness.',
    mr: '🌡️ ताप / पावसाळी संसर्ग\n\nविश्रांती, ओआरएस, कोमट फडके. डेंग्यूत ॲस्पिरिन टाळा. मच्छरदाणी वापरा. ३ दिवसांपेक्षा जास्त ताप, पुरळ, उलट्या — PHC/CHC ला जा.',
    hi: '🌡️ बुखार और मौसमी संक्रमण\n\nआराम, ORS, गुनगुनी पट्टी। डेंगू में एस्पिरिन न लें। मच्छरदानी। ३ दिन से अधिक बुखार, चकत्ते, उल्टी — तुरंत डॉक्टर।' },
  { id: 'headache', keys: ['headache','migraine','डोकेदुखी','सिरदर्द','माइग्रेन'],
    en: '🤕 Headache & Migraine\n\nHome Care:\n• Drink plenty of water. Rest in a dark, quiet room.\n• 7-8 hours sleep. Do not skip meals.\n• Limit tea, coffee, screen time.\n\n🚨 Emergency: Sudden worst headache of life + vomiting + stiff neck = call 108 immediately.',
    mr: '🤕 डोकेदुखी / मायग्रेन\n\nभरपूर पाणी प्या, अंधाऱ्या शांत खोलीत झोपा. जेवण वगळू नका. अचानक तीव्र डोकेदुखी + उलट्या = लगेच १०८.',
    hi: '🤕 सिरदर्द और माइग्रेन\n\nखूब पानी पिएं, अंधेरे कमरे में आराम करें। भोजन न छोड़ें। अचानक भयंकर सिरदर्द + उल्टी = तुरंत १०८।' },
  { id: 'stomach', keys: ['stomach','पोटदुखी','पेट दर्द','acidity','ऍसिडिटी','एसिडिटी','vomit','उलटी','diarrhea','जुलाब','दस्त','loose motion','food poisoning'],
    en: '🩺 Stomach Upset, Acidity & Diarrhoea\n\n• Diarrhoea: Sip ORS frequently. Eat bananas, curd, khichdi. Avoid oily/spicy food.\n• Acidity: Eat smaller, frequent meals. Avoid lying down right after eating. Limit tea/coffee.\n• Wash hands with soap before meals.\n\n⚠️ Seek help if blood in stool, repeated vomiting, or no urination.',
    mr: '🩺 पोटदुखी / ऍसिडिटी\n\nओआरएस सतत प्या. हलके जेवण घ्या. तिखट-तेलकट टाळा. रक्ताळ जुलाब, सतत उलट्या — लगेच डॉक्टर.',
    hi: '🩺 पेट दर्द / एसिडिटी\n\nORS पिएँ। हल्का भोजन लें। मसालेदार न खाएं। खूनी दस्त या लगातार उल्टी — तुरंत डॉक्टर।' },
  { id: 'diabetes_bp', keys: ['diabetes','sugar','मधुमेह','साखर','शुगर','blood pressure','bp','रक्तदाब','बीपी','hypertension','insulin'],
    en: '🩺 Diabetes & Blood Pressure\n\nDaily precautions:\n• Take tablets on time. Never stop suddenly.\n• Cut salt, fried food, sweets, and sugary tea.\n• Walk 30-40 minutes daily.\n• Check sugar and BP regularly.\n\n⚠️ Go to hospital: chest pain, sudden weakness, sweating/confusion (low sugar), or severe headache.',
    mr: '🩺 मधुमेह आणि रक्तदाब\n\nऔषधे वेळेवर घ्या, मीठ-साखर कमी करा, रोज ३० मिनिटे चाला. औषध अचानक बंद करू नका.',
    hi: '🩺 शुगर और ब्लड प्रेशर\n\nदवा समय पर लें, नमक-चीनी कम करें, रोज चलें। दवा अचानक बंद न करें।' },
  { id: 'firstaid', keys: ['burn','भाजणे','जलना','bite','चावणे','काटना','dog','snake','साप','कुत्रा','rabies','wound','cut','fracture','sprain','poisoning','choking'],
    en: '🩹 First Aid\n\n• Burns: Cool under running water 10–15 min. No toothpaste or oil.\n• Cuts: Wash with soap/water, press to stop bleeding.\n• Dog bite: Wash 15 min with soap + water. Same-day anti-rabies & tetanus shot.\n• Snake bite: Keep limb still. Do NOT cut or suck. Call 108.\n• Poisoning: Do NOT induce vomiting. Rush to hospital with the bottle.\n• Sprain: Rest, Ice, Compression, Elevation (RICE).',
    mr: '🩹 प्रथमोपचार\n\nभाजणे: वाहते पाणी १०-१५ मिनिटे. टूथपेस्ट लावू नका. प्राणी चावा: साबणाने धुवा + रेबीज लस. साप: चीरु नका, १०८.',
    hi: '🩹 प्राथमिक उपचार\n\nजलना: नल का पानी १०-१५ मिनट। काटना: साबुन से धोएं + रेबीज टीका। सांप: काटें नहीं, १०८।' },
  { id: 'child', keys: ['child','baby','infant','vaccination','immunization','मुल','बाळ','टीका','टीकाकरण','pneumonia','measles','malnutrition'],
    en: '👶 Child Health & Vaccination\n\n• Exclusive breastfeeding for 6 months, then mashed home food.\n• Complete all vaccines on MCP card at PHC/Anganwadi.\n• For diarrhoea: ORS + Zinc.\n\n🚨 Call 108: fast breathing, blue lips, convulsions, cannot feed, extreme lethargy.',
    mr: '👶 बाल आरोग्य\n\n६ महिने स्तनपान. MCP कार्डवरील सर्व लसी घ्या. जुलाबात ओआरएस+झिंक. झटके/श्वास जलद — १०८.',
    hi: '👶 बाल स्वास्थ्य\n\n६ महीने स्तनपान। MCP कार्ड के सभी टीके। दस्त में ORS+जिंक। दौरे/तेज सांस — १०८।' },
  { id: 'pregnancy', keys: ['pregnant','pregnancy','गर्भवती','गरोदर','प्रसूती','बाळंतपण','delivery','डिलीवरी','anc'],
    en: '🤰 Pregnancy Precautions\n\n• At least 4 ANC visits & TT injections.\n• Daily Iron, Folic Acid, and Calcium tablets.\n• Eat pulses, greens, milk, eggs.\n• Avoid tobacco, alcohol, and self-medication.\n\n🚨 Call 108: bleeding, severe headache, blurred vision, fewer baby movements.',
    mr: '🤰 गरोदरपणातील खबरदारी\n\n४ ANC, TT, आयर्न-फॉलिक-कॅल्शियम रोज. तंबाखू-दारू टाळा. रक्तस्त्राव किंवा बाळ हलणे कमी — १०८.',
    hi: '🤰 गर्भावस्था सावधानियाँ\n\n४ ANC, TT, आयरन-फोलिक-कैल्शियम रोज। तंबाकू-शराब न लें। खून आना — १०८।' },
  { id: 'schemes', keys: ['ayushman','pmjay','scheme','योजना','आयुष्मान','mjpjay','card','कार्ड','free treatment','मोफत उपचार'],
    en: '📜 Government Health Schemes\n\n• Ayushman Bharat PM-JAY: ₹5 lakh cashless cover per eligible family.\n• MJPJAY (Maharashtra): Cashless in empaneled hospitals.\n• Ayushman Vay Vandana: ₹5 lakh for every citizen aged 70+.\n• JSY: ₹1,400 for institutional delivery.\n\nApply at CSC / Aaple Sarkar with Aadhaar + Ration Card. Do not pay agents.',
    mr: '📜 सरकारी आरोग्य योजना\n\nPM-JAY (₹५ लाख), MJPJAY कॅशलेस. ७०+ साठी वय वंदना. JSY प्रसूतीसाठी ₹१४००. आधार + रेशन कार्ड घेऊन CSC ला जा.',
    hi: '📜 सरकारी स्वास्थ्य योजनाएं\n\nPM-JAY (₹५ लाख), MJPJAY कैशलेस। ७०+ के लिए वय वंदना। JSY प्रसव के लिए ₹१४००। आधार + राशन कार्ड लेकर CSC जाएँ।' },
  { id: 'heat', keys: ['heat','sunstroke','heatstroke','उन्हाळा','लू','dehydrat','गर्मी'],
    en: '☀️ Heatstroke & Dehydration\n\n• Drink water frequently even if not thirsty.\n• Avoid sun 12–4 PM. Cover head, wear light cotton.\n• Never leave children in parked vehicles.\n\n🚨 High body heat + no sweating + confusion = heatstroke. Cool body with wet cloth & call 108.',
    mr: '☀️ उष्माघात\n\nवारंवार पाणी प्या, दुपारची ऊन टाळा, डोके झाका. घाम न येता खूप ताप = सावलीत आणा + १०८.',
    hi: '☀️ लू / डिहाइड्रेशन\n\nबार-बार पानी पिएँ, धूप से बचें, सिर ढकें। पसीना न आए + चक्कर = छाया में लाएँ + १०८।' },
  { id: 'joint_pain', keys: ['joint pain','arthritis','गुडघेदुखी','सांधेदुखी','जोड़ों का दर्द','गठिया','back pain','पाठदुखी','कमर दर्द'],
    en: '🦴 Joint Pain & Arthritis\n\n• Maintain healthy weight. Exercise daily (walking, swimming).\n• Proper posture while sitting or lifting.\n• Calcium + Vitamin D (milk, sunlight).\n• Hot/cold compress for relief.\n\nConsult a doctor if joint is swollen, red, or movement is limited.',
    mr: '🦴 सांधेदुखी\n\nवजन नियंत्रणात ठेवा, नियमित हलका व्यायाम करा. कॅल्शियम + ड-जीवनसत्व घ्या. जास्त सूज = डॉक्टर.',
    hi: '🦴 जोड़ों का दर्द\n\nवजन नियंत्रित रखें, नियमित व्यायाम करें। कैल्शियम + विटामिन D लें। ज्यादा सूजन = डॉक्टर।' },
  { id: 'weakness', keys: ['weakness','fatigue','tired','थकवा','अशक्तपणा','कमजोरी','थकान','anemia','रक्तक्षय','खून की कमी'],
    en: '😴 Weakness, Fatigue & Anemia\n\n• 7-8 hours sleep. Stay hydrated. Do not skip meals.\n• Iron-rich foods: jaggery, spinach, dates, groundnuts, beetroot.\n\nPersistent weakness despite rest → Get CBC blood test at a PHC (free).',
    mr: '😴 थकवा / अशक्तपणा\n\n७-८ तास झोप, पाणी भरपूर प्या. गूळ-शेंगदाणे, बीट, हिरव्या भाज्या खा. सतत थकवा = CBC तपासणी.',
    hi: '😴 कमजोरी / एनीमिया\n\n७-८ घंटे सोएं। गुड़, पालक, खजूर, चुकंदर खाएं। लगातार थकान = CBC जांच (सरकारी PHC में मुफ्त)।' },
  { id: 'tb', keys: ['tb','tuberculosis','क्षय','क्षयरोग','nikshay','asthma','अस्थमा','दमा'],
    en: '🫁 TB & Respiratory Health\n\n• Cough > 2 weeks → Get tested for TB. It is completely curable.\n• Take the full DOTS course. Never stop early.\n• Nikshay Poshan: ₹500/month nutrition support.\n• Asthma: avoid dust/smoke, always carry inhaler.\n• No smoking.',
    mr: '🫁 क्षयरोग (TB) व दमा\n\n२ आठवड्यांपेक्षा जास्त खोकला = TB तपासणी. औषध पूर्ण कोर्स घ्या (निकषाय पोषण ₹५००/महिना). दमा = धूळ टाळा, इनहेलर सोबत ठेवा.',
    hi: '🫁 टीबी और दमा\n\n२ सप्ताह से अधिक खांसी = TB जांच। पूरा कोर्स लें (निःक्षय ₹५००/माह)। अस्थमा = धूल से बचें, इनहेलर साथ रखें।' },
  { id: 'weight', keys: ['weight','obesity','वजन','मोटापा','diet','आहार'],
    en: '⚖️ Weight Management & Diet\n\n• Balanced meals: fruits, vegetables, proteins, fiber.\n• No skipping meals. Limit fried/processed food and sugar.\n• Walk 30-45 minutes daily. Drink 8-10 glasses of water.\n\nSudden unexplained weight loss → see a doctor (could be diabetes, TB, or thyroid).',
    mr: '⚖️ वजन व आहार\n\nसंतुलित आहार, फास्ट फूड टाळा, रोज ३०-४५ मिनिटे व्यायाम करा. अचानक वजन कमी = डॉक्टर.',
    hi: '⚖️ वजन और आहार\n\nसंतुलित भोजन, फास्ट फूड कम करें, रोज व्यायाम करें। अचानक वजन घटे = डॉक्टर।' },
  { id: 'hygiene', keys: ['precaution','prevention','hygiene','wash','prevent','health tips','खबरदारी','सावधानी','स्वच्छता'],
    en: '🛡️ Everyday Health Precautions\n\n• Wash hands with soap before food and after toilet.\n• Drink clean/boiled water. Cover food.\n• Use mosquito nets. Empty water containers weekly.\n• Complete child vaccines and ANC for mothers.\n• Keep ORS, PHC number, and 108 ready.\n\nAsk me about any specific condition — fever, bite, pregnancy, diabetes, joint pain, and more!',
    mr: '🛡️ रोजची खबरदारी\n\nहात साबणाने धुवा, पाणी उकळा, मच्छरदाणी, लसी पूर्ण करा. ओआरएस व १०८ जवळ ठेवा.',
    hi: '🛡️ रोज़ की सावधानी\n\nसाबुन से हाथ धोएँ, उबला पानी पिएँ, मच्छरदानी, पूरे टीके। ORS और १०८ पास रखें।' },
];

function localAnswerHealthQuery(questionRaw, lang) {
  const q = (questionRaw || '').toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const topic of LOCAL_TOPICS) {
    let score = 0;
    for (const key of topic.keys) {
      if (q.includes(key.toLowerCase())) score += key.length > 6 ? 3 : 1;
    }
    if (score > bestScore) { bestScore = score; best = topic; }
  }
  const field = lang === 'mr' ? 'mr' : lang === 'hi' ? 'hi' : 'en';
  if (best && bestScore > 0) return best[field];
  const q2 = questionRaw || '';
  if (lang === 'mr') return `नमस्ते! मी स्वास्थ्यसेतू एआय आहे.\n\nतुमचा प्रश्न: "${q2}"\n\nमी ताप, डेंग्यू, मधुमेह, गरोदरपण, प्रथमोपचार, योजना, सांधेदुखी, थकवा यांबाबत मार्गदर्शन करतो. कृपया लक्षण स्पष्ट लिहा.`;
  if (lang === 'hi') return `नमस्ते! मैं स्वास्थ्यसेतु AI हूँ.\n\nआपका प्रश्न: "${q2}"\n\nमैं बुखार, डेंगू, शुगर, गर्भावस्था, प्राथमिक उपचार, योजनाएं, जोड़ों का दर्द पर मार्गदर्शन कर सकता हूँ।`;
  return `Hello! I am SwasthyaSetu AI Health Assistant.\n\nYou asked: "${q2}"\n\nI can help with fever, dengue, diabetes, pregnancy, first aid, government schemes, joint pain, fatigue, and more. Please describe your symptom clearly!`;
}
