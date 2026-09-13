const TOPICS = [
  {
    id: 'emergency',
    keys: ['chest pain', 'heart attack', 'stroke', 'paralysis', 'severe bleeding', 'unconscious', 'छातीत', 'हार्ट', 'सीने', 'दिल का दौरा', 'पक्षाघात', 'लकवा', 'रक्तस्त्राव', 'बेहोश'],
    en: `🚨 IMMEDIATE EMERGENCY — Call 108 now.

This can be a heart attack, stroke, or life-threatening bleed.

Precautions (do now):
• Sit or lie the person down. Keep them calm. Do not leave them alone.
• Loosen tight clothing around the neck and chest.
• Do not give food, water, tea, or home remedies.
• If they stop breathing, start CPR if you are trained.
• Note the time symptoms started (important for stroke).

When to call 108: chest pain, one-sided weakness, sudden speech trouble, heavy bleeding, fainting.

This is guidance only. Get emergency hospital care immediately.`,
    mr: `🚨 तात्काळ आपत्कालीन — आत्ताच १०८ वर कॉल करा.

ही हृदयविकाराचा झटका, पक्षाघात किंवा गंभीर रक्तस्त्राव असू शकतो.

काळजी / खबरदारी:
• रुग्णाला बसवा किंवा झोपवा. एकटे सोडू नका.
• घट्ट कपडे सैल करा.
• खाणे-पिणे किंवा घरगुती उपाय देऊ नका.
• श्वास थांबल्यास प्रशिक्षित असल्यास CPR सुरू करा.

लक्षण दिसताच १०८ बोलावा. ही माहिती मार्गदर्शनासाठी आहे.`,
    hi: `🚨 तुरंत आपातकाल — अभी १०८ पर कॉल करें।

यह हार्ट अटैक, स्ट्रोक या गंभीर रक्तस्राव हो सकता है।

सावधानियाँ:
• मरीज को बैठाएं या लिटाएं। अकेला न छोड़ें।
• तंग कपड़े ढीले करें।
• खाना-पीना या घरेलू नुस्खा न दें।
• सांस रुकने पर प्रशिक्षित हों तो CPR शुरू करें।

लक्षण दिखते ही १०८ बुलाएं। यह केवल मार्गदर्शन है।`,
  },
  {
    id: 'fever',
    keys: ['fever', 'ताप', 'बुखार', 'dengue', 'डेंग्यू', 'डेंगू', 'malaria', 'मलेरिया', 'typhoid', 'टायफॉईड', 'cold', 'खोकला', 'सर्दी', 'cough', 'खांसी'],
    en: `🌡️ Fever, cough & monsoon infections

Home care:
• Rest. Drink boiled water, ORS, coconut water, dal water.
• Sponge with a lukewarm cloth. Do not use ice-cold water.
• Paracetamol only as a doctor advises. Do not mix many fever tablets.

Precautions:
• Use mosquito nets and repellent (dengue/malaria).
• Do not store open water. Cover tanks. Wear full sleeves at dusk.
• Avoid aspirin/ibuprofen in suspected dengue (bleeding risk).
• Cover coughs. Wash hands. Isolate if very infectious.

See a doctor / PHC if: fever > 3 days, rash, vomiting, bleeding gums, severe headache, breathlessness, or a child under 5 with high fever.

Free tests: government PHC/CHC for malaria smear, dengue NS1, CBC.`,
    mr: `🌡️ ताप, खोकला आणि पावसाळी संसर्ग

घरगुती काळजी: विश्रांती, ओआरएस/उकळलेले पाणी, कपाळावर कोमट फडके.

खबरदारी:
• डेंग्यू/मलेरियापासून मच्छरदाणी वापरा. पाणी साठवू नका.
• संशयित डेंग्यूत ॲस्पिरिन/आयबुप्रोफेन घेऊ नका.
• ३ दिवसांपेक्षा जास्त ताप, पुरळ, उलट्या, हिरड्यातून रक्त — लगेच PHC/CHC.`,
    hi: `🌡️ बुखार, खांसी और मौसमी संक्रमण

देखभाल: आराम, ORS/उबला पानी, गुनगुने पानी की पट्टी।

सावधानियाँ:
• डेंगू/मलेरिया से मच्छरदानी और पूरी बाजू के कपड़े।
• डेंगू संदेह में एस्पिरिन/ब्रूफेन न लें।
• ३ दिन से अधिक बुखार, चकत्ते, उल्टी, मसूड़ों से खून — तुरंत सरकारी केंद्र।`,
  },
  {
    id: 'diabetes_bp',
    keys: ['diabetes', 'sugar', 'मधुमेह', 'साखर', 'शुगर', 'blood pressure', 'bp', 'रक्तदाब', 'बीपी', 'hypertension', 'insulin'],
    en: `🩺 Diabetes & blood pressure

Daily precautions:
• Take prescribed tablets at the same time. Never stop suddenly.
• Cut extra salt, fried snacks, sweets, and sugary tea.
• Walk 30 minutes most days. Do not sit all day.
• Check fasting sugar and BP as advised. Keep a small notebook.

Warning signs — go to hospital:
• Chest pain, sudden weakness, very high or very low sugar (sweating, confusion).
• Severe headache with high BP, vision loss, swelling of feet.

Free / low-cost: PHC and Jan Aushadhi for metformin, amlodipine and similar generics.`,
    mr: `🩺 मधुमेह आणि रक्तदाब

खबरदारी: औषधे वेळेवर घ्या, मीठ-साखर कमी करा, रोज ३० मिनिटे चाला. औषध अचानक बंद करू नका.

धोका: छातीत दुखणे, अचानक अशक्तपणा, खूप कमी/जास्त शुगर — रुग्णालयात जा. PHC/जन औषधीवर मोफत/स्वस्त गोळ्या मिळतात.`,
    hi: `🩺 शुगर और ब्लड प्रेशर

सावधानी: दवा समय पर लें, नमक-चीनी कम करें, रोज ३० मिनट चलें। दवा अचानक बंद न करें।

चेतावनी: सीने में दर्द, बहुत कम/ज्यादा शुगर, तेज सिरदर्द — अस्पताल जाएँ। PHC/जन औषधि पर सस्ती दवा मिलती है।`,
  },
  {
    id: 'pregnancy',
    keys: ['pregnant', 'pregnancy', 'गर्भवती', 'गरोदर', 'प्रसूती', 'बाळंतपण', 'delivery', 'डिलीवरी', 'anc', 'antenatal'],
    en: `🤰 Pregnancy precautions

Do:
• At least 4 ANC visits, TT injections, iron + folic acid + calcium daily.
• Eat dal, green vegetables, milk, eggs, jaggery-groundnut. Rest on the left side.
• Deliver in a government hospital (JSY cash help for rural institutional delivery).
• PMSMA: free specialist checkup on the 9th of every month.

Avoid:
• Heavy lifting, tobacco, alcohol, self-medication, missed iron tablets.
• Delay if bleeding, severe headache, blurred vision, reduced baby movements, swelling of face.

Call 108 for labour pain, bleeding, or fits.`,
    mr: `🤰 गरोदरपणातील खबरदारी

४ ANC तपासण्या, TT, आयर्न-फॉलिक-कॅल्शियम रोज घ्या. तंबाखू-दारू-स्वतः औषध टाळा.

रक्तस्त्राव, तीव्र डोकेदुखी, बाळ हलणे कमी — १०८ किंवा CHC. JSY व PMSMA (९ तारीख) मोफत लाभ.`,
    hi: `🤰 गर्भावस्था सावधानियाँ

कम से कम ४ ANC, TT, आयरन-फोलिक-कैल्शियम रोज। तंबाकू-शराब-खुद दवा न लें।

खून आना, तेज सिरदर्द, बच्चे की हलचल कम — १०८। JSY और PMSMA (हर महीने ९ तारीख) का लाभ लें।`,
  },
  {
    id: 'schemes',
    keys: ['ayushman', 'pmjay', 'scheme', 'योजना', 'आयुष्मान', 'mjpjay', 'कार्ड', 'card', 'free treatment', 'मोफत उपचार'],
    en: `📜 Government health cover

Ayushman Bharat PM-JAY: up to ₹5 lakh cashless per eligible family.
MJPJAY (Maharashtra): cashless surgeries in empaneled hospitals.
Ayushman Vay Vandana: ₹5 lakh for every citizen 70+.

How to apply: CSC / Aaple Sarkar / Arogyamitra desk with Aadhaar + ration card.

Precaution: only use empaneled hospitals. Keep Golden Card and referral papers. Do not pay agents for “faster” cards.`,
    mr: `📜 सरकारी आरोग्य योजना

PM-JAY व MJPJAY: पात्र कुटुंबाला कॅशलेस उपचार. ७०+ साठी वय वंदना.

आधार + रेशन कार्ड घेऊन CSC/आरोग्यमित्र कडे जा. दलालांना पैसे देऊ नका. फक्त सूचीबद्ध रुग्णालय वापरा.`,
    hi: `📜 सरकारी स्वास्थ्य योजना

PM-JAY और MJPJAY: पात्र परिवार को कैशलेस इलाज। ७०+ के लिए वय वंदना।

आधार + राशन कार्ड लेकर CSC/आरोग्यमित्र जाएँ। दलाल को पैसे न दें। केवल सूचीबद्ध अस्पताल।`,
  },
  {
    id: 'hospitals',
    keys: ['nearest', 'near', 'hospital', 'रुग्णालय', 'अस्पताल', 'दवाखाना', 'doctor', 'डॉक्टर', 'clinic', 'phc', 'chc'],
    en: `🏥 Finding care nearby

Use Find Healthcare Nearby on this site. Allow location so hospitals can be ranked by your phone’s GPS / cell-tower position.

Precautions when choosing:
• For emergencies: 24x7 government CHC / civil hospital first, then call 108.
• For fever, ANC, BP, sugar: nearest PHC is usually enough and free.
• Carry Aadhaar, ration card, old reports, and a list of medicines.

Open the hospital card and tap Google Maps for directions.`,
    mr: `🏥 जवळची सेवा

या साइटवरील Find Healthcare Nearby वापरा. लोकेशन परवानगी द्या (GPS/मोबाइल टॉवर).

आपत्कालीन: २४x७ सरकारी रुग्णालय + १०८. सामान्य तपासणी: जवळचे PHC. आधार-रेशन-जुने रिपोर्ट नेऊन जा.`,
    hi: `🏥 नजदीकी देखभाल

Find Healthcare Nearby इस्तेमाल करें और लोकेशन दें (GPS/मोबाइल टावर)।

आपात: २४x७ सरकारी अस्पताल + १०८। सामान्य जांच: नजदीकी PHC। आधार-राशन-पुरानी रिपोर्ट साथ रखें।`,
  },
  {
    id: 'stomach',
    keys: ['stomach', 'पोटदुखी', 'पेट दर्द', 'acidity', 'ऍसिडिटी', 'एसिडिटी', 'vomit', 'उलटी', 'diarrhea', 'जुलाब', 'दस्त', 'loose motion', 'food poisoning', 'cholera'],
    en: `🩺 Stomach upset, vomiting & diarrhoea

Care: sip ORS often. Eat banana, curd, khichdi. Avoid oil, spice, street food, raw water.

Precautions:
• Wash hands with soap before eating and after toilet.
• Use boiled or filtered water. Cover leftover food.
• Zinc for children as advised at PHC. Do not give anti-diarrhoeal tablets to small children on your own.

Go urgently if: blood in stool, repeated vomiting, no urine, very dry mouth, high fever, or a baby becoming limp.`,
    mr: `🩺 पोटदुखी / जुलाब

ओआरएस प्या, हलके जेवण. हात धुवा, उकळलेले पाणी प्या.

रक्ताळ जुलाब, मूत्र न होणे, बाळ म्लान — लगेच रुग्णालय.`,
    hi: `🩺 पेट दर्द / दस्त

ORS पिएँ, हल्का भोजन। हाथ धोएँ, उबला पानी पिएँ।

खून वाला दस्त, पेशाब न आना, बच्चा सुस्त — तुरंत अस्पताल।`,
  },
  {
    id: 'firstaid',
    keys: ['burn', 'भाजणे', 'जलना', 'bite', 'चावणे', 'काटना', 'dog', 'snake', 'साप', 'कुत्रा', 'rabies', 'रेबीज', 'wound', 'cut', 'headache', 'डोकेदुखी', 'सिरदर्द'],
    en: `🩺 First aid & bites

Burns: cool under running water 10–15 min. No toothpaste, oil, or turmeric.
Cuts: wash with soap and water, press to stop bleeding, clean cloth.
Dog/animal bite: wash 15 min with soap + running water. Get anti-rabies + tetanus at hospital the same day. Do not wait.
Snake bite: keep the limb still, do not cut, suck, or tie tight tourniquets. Call 108. Carry the person, do not make them walk far.

Headache: water, rest, skip skipped meals. Sudden worst headache of life = emergency.`,
    mr: `🩺 प्रथमोपचार

भाजणे: वाहते पाणी १०–१५ मिनिटे. टूथपेस्ट/तेल लावू नका.
प्राणी चावा: साबणाने १५ मिनिटे धुवा, त्याच दिवशी रेबीज+टिटॅनस.
साप: हातपाय halवू नका, चीरु नका. १०८ बोलावा.`,
    hi: `🩺 प्राथमिक उपचार

जलना: नल का पानी १०–१५ मिनट। टूथपेस्ट/तेल न लगाएं।
काटना: साबुन से १५ मिनट धोएं, उसी दिन रेबीज+टिटनेस।
सांप: काटें नहीं, चूसें नहीं। १०८ बुलाएं।`,
  },
  {
    id: 'child',
    keys: ['child', 'baby', 'infant', 'vaccination', 'immunization', 'मुल', 'बाळ', 'टीका', 'टीकाकरण', 'pneumonia', 'measles', 'malnutrition', 'ors'],
    en: `👶 Child health precautions

• Complete all vaccines on the MCP card (BCG, pentavalent, measles-rubella, etc.) at the PHC / Anganwadi.
• Exclusive breastfeeding for 6 months. Then add mashed home food.
• ORS + zinc for diarrhoea. Watch for fast breathing (possible pneumonia) — go to hospital.
• Use a mosquito net. Keep the child away from smoke and open flames.

Emergency: blue lips, not feeding, convulsions, very sleepy baby — call 108.`,
    mr: `👶 बाल आरोग्य

MCP कार्डवरील सर्व लसी घ्या. ६ महिने स्तनपान. जुलाबात ओआरएस.
जलद श्वास, खात नाही, झटके — १०८.`,
    hi: `👶 बाल स्वास्थ्य

MCP कार्ड के सभी टीके लगवाएं। ६ महीने स्तनपान। दस्त में ORS।
तेज सांस, दूध न पीना, दौरे — १०८।`,
  },
  {
    id: 'heat',
    keys: ['heat', 'sunstroke', 'heat stroke', 'उन्हाळा', 'लू', 'dehydrat', 'गर्मी'],
    en: `☀️ Heat & dehydration precautions

• Drink water often even if not thirsty. ORS if dizzy.
• Avoid peak sun 12–4 pm. Cover head. Light cotton clothes.
• Never leave children in parked vehicles.
• Rest in shade if headache, nausea, very high body heat — this can be heat stroke. Cool the body and call 108.`,
    mr: `☀️ उष्माघात खबरदारी

वारंवार पाणी प्या, दुपारची ऊन टाळा, डोके झाका. चक्कर/अत्यंत ताप — सावलीत आणा व १०८.`,
    hi: `☀️ लू / डिहाइड्रेशन

बार-बार पानी पिएँ, दोपहर धूप से बचें, सिर ढकें। चक्कर/तेज गर्मी — छाया में लाएँ और १०८।`,
  },
  {
    id: 'tb',
    keys: ['tb', 'tuberculosis', 'क्षय', 'क्षयरोग', 'निःक्षय', 'nikshay', 'cough for'],
    en: `🫁 Cough lasting over 2 weeks may be TB

Precautions: cover cough, sleep in a ventilated room, finish the full DOTS course — never stop early.
Nikshay Poshan: ₹500/month nutrition support after notification.
Free tests and medicines at government facilities. Family contacts should get screened.`,
    mr: `🫁 २ आठवड्यांपेक्षा जास्त खोकला = क्षयरोग तपासणी

औषध पूर्ण कोर्स घ्या. निकषाय पोषण योजना ₹५००/महिना. सरकारी केंद्रात मोफत औषध.`,
    hi: `🫁 २ सप्ताह से अधिक खांसी = टीबी जांच

पूरा कोर्स लें। निःक्षय पोषण ₹५००/माह। सरकारी केंद्र पर मुफ्त दवा।`,
  },
  {
    id: 'hygiene',
    keys: ['precaution', 'prevention', 'hygiene', 'wash', 'prevent', 'खबरदारी', 'सावधानी', 'स्वच्छता', 'हात धु'],
    en: `🛡️ Everyday health precautions

• Wash hands with soap: before food, after toilet, after cleaning a child.
• Boil drinking water in monsoon. Cover food from flies.
• Sleep under a net. Empty coolers and pots weekly.
• Do not share razors or used needles.
• Complete vaccines for children and TT/ANC for mothers.
• Keep a small kit: ORS packets, paracetamol (as advised), clean cloth, your PHC number, 108.

Ask me about a symptom (fever, bite, pregnancy, sugar) for specific steps.`,
    mr: `🛡️ रोजची खबरदारी

जेवणाआधी हात धुवा, पावसाळ्यात पाणी उकळा, मच्छरदाणी वापरा, लसी पूर्ण करा. ओआरएस व १०८ नंबर जवळ ठेवा.`,
    hi: `🛡️ रोज़ की सावधानी

खाना से पहले हाथ धोएँ, मानसून में पानी उबालें, मच्छरदानी, पूरे टीके। ORS और १०८ पास रखें।`,
  },
];

export function localHealthReply(question, lang = 'en') {
  const q = (question || '').toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const topic of TOPICS) {
    let score = 0;
    for (const k of topic.keys) {
      if (q.includes(k.toLowerCase())) score += k.length > 6 ? 3 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }
  const field = lang === 'mr' ? 'mr' : lang === 'hi' ? 'hi' : 'en';
  if (best && bestScore > 0) return best[field];
  if (lang === 'mr') {
    return `नमस्ते! मी स्वास्थ्यसेतू एआय आहे.\n\nतुम्ही विचारले: "${question}"\n\nमी ताप, डेंग्यू, मधुमेह, गरोदरपणा, चावा, प्रथमोपचार, योजना आणि जवळची रुग्णालये याबाबत खबरदारी सांगतो. लक्षण किंवा प्रश्न स्पष्ट लिहा.`;
  }
  if (lang === 'hi') {
    return `नमस्ते! मैं स्वास्थ्यसेतु एआई हूँ.\n\nआपका प्रश्न: "${question}"\n\nमैं बुखार, डेंगू, शुगर, गर्भावस्था, काटना, प्राथमिक उपचार, योजना और अस्पताल — सावधानियों के साथ बता सकता हूँ। लक्षण लिखें।`;
  }
  return `Hello! I am SwasthyaSetu AI.\n\nYou asked: "${question}"\n\nI can explain precautions for fever, dengue, diabetes, pregnancy, bites, first aid, schemes, and nearby hospitals. Describe the symptom or what you need to stay safe.`;
}
