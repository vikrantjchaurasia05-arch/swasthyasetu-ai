# -*- coding: utf-8 -*-
"""Keyword health guidance with precautions (not a replacement for a doctor)."""

TOPICS = [
    {
        "id": "emergency",
        "keys": ["chest pain", "heart attack", "stroke", "paralysis", "severe bleeding", "unconscious", "fainting", "छातीत", "हार्ट", "सीने", "दिल का दौरा", "पक्षाघात", "लकवा", "रक्तस्त्राव", "बेहोश", "शारीरिक आघात"],
        "en": (
            "🚨 IMMEDIATE EMERGENCY — Call 108 now.\n\n"
            "This can be a heart attack, stroke, or life-threatening bleed.\n\n"
            "Precautions (do now):\n"
            "• Sit or lie the person down. Keep them calm. Do not leave them alone.\n"
            "• Loosen tight clothing around the neck and chest.\n"
            "• Do not give food, water, tea, or home remedies.\n"
            "• If they stop breathing, start CPR if you are trained.\n"
            "• Note the time symptoms started (important for stroke).\n\n"
            "Call 108 for chest pain, one-sided weakness, sudden speech trouble, heavy bleeding, or fainting.\n"
            "This is guidance only — get emergency hospital care immediately."
        ),
        "mr": "🚨 तात्काळ आपत्कालीन — आत्ताच १०८ वर कॉल करा.\n\nकाळजी / खबरदारी:\n• रुग्णाला बसवा किंवा झोपवा. एकटे सोडू नका.\n• घट्ट कपडे सैल करा. खाणे-पिणे देऊ नका.\n• श्वास थांबल्यास प्रशिक्षित असल्यास CPR.\n\nलक्षण दिसताच १०८. ही माहिती मार्गदर्शनासाठी आहे.",
        "hi": "🚨 तुरंत आपातकाल — अभी १०८ पर कॉल करें।\n\nसावधानियाँ:\n• मरीज को बैठाएं या लिटाएं। अकेला न छोड़ें।\n• तंग कपड़े ढीले करें। खाना-पीना न दें।\n• सांस रुकने पर प्रशिक्षित हों तो CPR।\n\nलक्षण दिखते ही १०८। यह केवल मार्गदर्शन है।"
    },
    {
        "id": "fever",
        "keys": ["fever", "ताप", "बुखार", "dengue", "डेंग्यू", "डेंगू", "malaria", "मलेरिया", "typhoid", "टायफॉईड", "cold", "खोकला", "सर्दी", "cough", "खांसी"],
        "en": (
            "🌡️ Fever, cough & monsoon infections\n\n"
            "Home care & Precautions:\n"
            "• Rest completely. Drink boiled water, ORS, or coconut water.\n"
            "• Sponge with a lukewarm cloth. Do not use ice-cold water.\n"
            "• Paracetamol only as advised by a doctor. Avoid Aspirin/Ibuprofen (risk of bleeding in dengue).\n"
            "• Cover coughs. Wash hands with soap.\n"
            "• Use mosquito nets/repellents. Empty stored water weekly.\n\n"
            "Red Flags (See Doctor Immediately):\n"
            "Fever lasting >3 days, body rash, vomiting, bleeding gums, severe headache, or breathlessness."
        ),
        "mr": "🌡️ ताप आणि पावसाळी संसर्ग\n\nविश्रांती, ओआरएस, कोमट फडके. डेंग्यूत ॲस्पिरिन/आयबुप्रोफेन घेऊ नका. मच्छरदाणी वापरा. ३ दिवसांपेक्षा जास्त ताप, पुरळ, उलट्या — लगेच PHC/CHC.",
        "hi": "🌡️ बुखार और मौसमी संक्रमण\n\nआराम, ORS, गुनगुनी पट्टी। डेंगू संदेह में एस्पिरिन/ब्रूफेन न लें। मच्छरदानी। ३ दिन से अधिक बुखार, चकत्ते, उल्टी — तुरंत सरकारी केंद्र।"
    },
    {
        "id": "diabetes_bp",
        "keys": ["diabetes", "sugar", "मधुमेह", "साखर", "शुगर", "blood pressure", "bp", "रक्तदाब", "बीपी", "hypertension", "insulin"],
        "en": (
            "🩺 Diabetes & Blood Pressure Management\n\n"
            "Daily precautions:\n"
            "• Take prescribed tablets on time. Never stop medication suddenly.\n"
            "• Cut extra salt, fried snacks, sweets, and sugary tea.\n"
            "• Include high-fiber foods, greens, and whole grains.\n"
            "• Walk 30-40 minutes daily.\n"
            "• Check fasting sugar and BP regularly.\n\n"
            "Warning Signs:\n"
            "Chest pain, sudden weakness, sweating/confusion (low sugar), or severe headache. Seek hospital care immediately."
        ),
        "mr": "🩺 मधुमेह आणि रक्तदाब\n\nऔषधे वेळेवर घ्या, मीठ-साखर कमी करा, रोज ३० मिनिटे चाला. औषध अचानक बंद करू नका. छातीत दुखणे किंवा खूप कमी/जास्त शुगर — लगेच रुग्णालय.",
        "hi": "🩺 शुगर और ब्लड प्रेशर\n\nदवा समय पर लें, नमक-चीनी कम करें, रोज चलें। दवा अचानक बंद न करें। सीने में दर्द या बहुत कम/ज्यादा शुगर — अस्पताल जाएँ।"
    },
    {
        "id": "pregnancy",
        "keys": ["pregnant", "pregnancy", "गर्भवती", "गरोदर", "प्रसूती", "बाळंतपण", "delivery", "डिलीवरी", "anc", "antenatal"],
        "en": (
            "🤰 Pregnancy Precautions\n\n"
            "Do:\n"
            "• Ensure at least 4 ANC checkups & TT injections.\n"
            "• Take daily Iron, Folic Acid, and Calcium.\n"
            "• Eat pulses, greens, milk, and eggs.\n"
            "• Use PMSMA for free specialist checkups on the 9th of every month.\n\n"
            "Avoid: heavy lifting, tobacco, alcohol, and self-medication.\n\n"
            "Emergency (Call 108): Bleeding, severe headache, blurred vision, or decreased baby movements."
        ),
        "mr": "🤰 गरोदरपणातील खबरदारी\n\n४ ANC, TT, आयर्न-फॉलिक-कॅल्शियम रोज. तंबाखू-दारू-स्वतः औषध टाळा. रक्तस्त्राव किंवा बाळ हलणे कमी — १०८. JSY व PMSMA लाभ घ्या.",
        "hi": "🤰 गर्भावस्था सावधानियाँ\n\n४ ANC, TT, आयरन-फोलिक-कैल्शियम रोज। तंबाकू-शराब न लें। खून आना या बच्चे की हलचल कम — १०८। JSY और PMSMA का लाभ लें।"
    },
    {
        "id": "schemes",
        "keys": ["ayushman", "pmjay", "scheme", "योजना", "आयुष्मान", "mjpjay", "कार्ड", "card", "free treatment", "मोफत उपचार"],
        "en": (
            "📜 Government Health Cover\n\n"
            "• Ayushman Bharat PM-JAY: Up to ₹5 lakh cashless per eligible family.\n"
            "• MJPJAY (Maharashtra): Cashless care in empaneled hospitals.\n"
            "• Ayushman Vay Vandana: ₹5 lakh cover for ALL citizens aged 70+.\n\n"
            "Apply at CSC / Aaple Sarkar / Arogyamitra with Aadhaar and ration card. Do not pay agents."
        ),
        "mr": "📜 सरकारी आरोग्य योजना\n\nPM-JAY व MJPJAY कॅशलेस उपचार. ७०+ साठी वय वंदना. आधार + रेशन कार्ड घेऊन CSC/आरोग्यमित्र कडे जा. दलालांना पैसे देऊ नका.",
        "hi": "📜 सरकारी स्वास्थ्य योजना\n\nPM-JAY और MJPJAY कैशलेस इलाज। ७०+ के लिए वय वंदना। आधार + राशन कार्ड लेकर CSC जाएँ। दलाल को पैसे न दें।"
    },
    {
        "id": "headache",
        "keys": ["headache", "migraine", "डोकेदुखी", "सिरदर्द", "माइग्रेन"],
        "en": (
            "🤕 Headache & Migraine Precautions\n\n"
            "Common causes: Stress, dehydration, lack of sleep, or acidity.\n\n"
            "Home Care:\n"
            "• Drink plenty of water and rest in a quiet, dark room.\n"
            "• Ensure 7-8 hours of sleep. Avoid skipping meals.\n"
            "• Limit excessive tea, coffee, or screen time.\n\n"
            "Red Flag (Emergency): The 'worst headache of your life', accompanied by vomiting, stiff neck, or weakness, requires immediate hospital care (call 108)."
        ),
        "mr": "🤕 डोकेदुखी / मायग्रेन\n\nभरपूर पाणी प्या, अंधाऱ्या शांत खोलीत विश्रांती घ्या. जेवण टाळू नका. अचानक अत्यंत तीव्र डोकेदुखी, उलट्या किंवा मान आखडल्यास लगेच १०८ ला कॉल करा.",
        "hi": "🤕 सिरदर्द और माइग्रेन\n\nभरपूर पानी पिएं, शांत कमरे में आराम करें। भोजन न छोड़ें। अचानक बहुत भयंकर सिरदर्द या उल्टी होने पर तुरंत अस्पताल जाएँ (१०८)।"
    },
    {
        "id": "stomach",
        "keys": ["stomach", "पोटदुखी", "पेट दर्द", "acidity", "ऍसिडिटी", "एसिडिटी", "vomit", "उलटी", "diarrhea", "जुलाब", "दस्त", "loose motion", "food poisoning", "cholera"],
        "en": (
            "🩺 Stomach Upset, Acidity & Diarrhoea\n\n"
            "Home Care & Precautions:\n"
            "• Diarrhoea: Sip ORS continuously. Eat bananas, curd, rice, toast. Avoid oily/spicy/street food.\n"
            "• Acidity: Eat smaller, frequent meals. Avoid lying down immediately after eating. Limit tea/coffee.\n"
            "• Wash hands properly with soap before meals and after using the toilet.\n\n"
            "See a Doctor if: Blood in stool, inability to keep fluids down, severe pain, or if a baby is very lethargic."
        ),
        "mr": "🩺 पोटदुखी / ऍसिडिटी / जुलाब\n\nओआरएस सतत प्या. हलके जेवण (भात, दही, केळे) घ्या. तिखट-तेलकट टाळा. रक्ताळ जुलाब, सतत उलट्या किंवा बाळ सुस्त असल्यास लगेच डॉक्टरकडे जा.",
        "hi": "🩺 पेट दर्द / दस्त / एसिडिटी\n\nलगातार ORS पिएँ। हल्का भोजन (दही, केला, खिचड़ी) लें। मसालेदार न खाएं। खूनी दस्त, लगातार उल्टी या बच्चा सुस्त हो तो तुरंत डॉक्टर को दिखाएं।"
    },
    {
        "id": "hairfall",
        "keys": ["hair fall", "hair loss", "केस गळणे", "बाल झड़ना"],
        "en": (
            "💇 Hair Fall & Scalp Health\n\n"
            "Precautions & Tips:\n"
            "• Nutrition: Ensure adequate protein, iron, and vitamins in your diet (greens, eggs, nuts, lentils).\n"
            "• Avoid harsh chemicals, excessive heat styling, or tight hairstyles.\n"
            "• Manage stress through yoga or meditation.\n"
            "• Wash hair gently with mild shampoo.\n\n"
            "Consult a doctor if hair fall is sudden, in patches, or accompanied by an itchy/painful scalp."
        ),
        "mr": "💇 केस गळणे\n\nआहारात प्रथिने आणि आयर्न (हिरव्या भाज्या, अंडी, कडधान्ये) घ्या. केमिकल शाम्पू/गरम पाणी टाळा. ताणतणाव कमी करा. अचानक जास्त केस गळत असल्यास डॉक्टरांचा सल्ला घ्या.",
        "hi": "💇 बाल झड़ना\n\nभोजन में प्रोटीन और आयरन लें (हरी सब्जियां, दालें, मेवे)। केमिकल या ज्यादा गरम पानी का इस्तेमाल न करें। तनाव कम करें। अचानक ज्यादा बाल झड़ने पर डॉक्टर से मिलें।"
    },
    {
        "id": "weight",
        "keys": ["weight loss", "obesity", "वजन", "मोटापा", "diet", "आहार", "पतला", "वजन कमी"],
        "en": (
            "⚖️ Weight Management & Diet\n\n"
            "Healthy Practices:\n"
            "• Eat balanced meals with fruits, vegetables, proteins, and fibers.\n"
            "• Avoid skipping meals as it harms metabolism.\n"
            "• Limit processed foods, sugar, and high-fat items.\n"
            "• Exercise or walk briskly for 30-45 minutes daily.\n"
            "• Drink 8-10 glasses of water. Avoid sugary cold drinks.\n\n"
            "Sudden, unexplained weight loss without trying can be a sign of diabetes, TB, or thyroid issues—see a doctor."
        ),
        "mr": "⚖️ वजन आणि आहार\n\nसंतुलित आहार घ्या. फास्ट फूड, साखर व तेलकट पदार्थ टाळा. रोज ३०-४५ मिनिटे व्यायाम करा. विनाकारण अचानक वजन कमी होत असल्यास (डायबेटीस/थायरॉईड) तपासणी करा.",
        "hi": "⚖️ वजन और आहार\n\nसंतुलित भोजन लें। मीठा, तला-भुना और फास्ट फूड कम करें। रोज ३०-४५ मिनट व्यायाम करें। बिना कोशिश के अचानक वजन घटे तो शुगर या थायराइड की जांच कराएं।"
    },
    {
        "id": "joint_pain",
        "keys": ["joint pain", "arthritis", "गुडघेदुखी", "सांधेदुखी", "जोड़ों का दर्द", "गठिया", "back pain", "पाठदुखी", "कमर दर्द"],
        "en": (
            "🦴 Joint Pain, Back Pain & Arthritis\n\n"
            "Precautions:\n"
            "• Maintain a healthy weight to reduce stress on knees and hips.\n"
            "• Exercise regularly (walking, swimming, light stretching) to keep joints flexible.\n"
            "• Maintain proper posture while sitting or lifting heavy objects.\n"
            "• Apply hot or cold compress for relief.\n"
            "• Include calcium and vitamin D in your diet (milk, sunlight).\n\n"
            "Consult an orthopaedic doctor if pain is severe, swollen, red, or limits movement."
        ),
        "mr": "🦴 सांधेदुखी आणि गुडघेदुखी\n\nवजन नियंत्रणात ठेवा, नियमित हलका व्यायाम करा. बसताना पाठीचा कणा ताठ ठेवा. कॅल्शियम व ड-जीवनसत्व युक्त आहार घ्या. जास्त सूज किंवा वेदना असल्यास डॉक्टरांना दाखवा.",
        "hi": "🦴 जोड़ों और कमर का दर्द\n\nवजन नियंत्रित रखें, नियमित हल्का व्यायाम करें। सही मुद्रा (पोस्चर) में बैठें। धूप सेंकें और कैल्शियम लें। ज्यादा सूजन या असहनीय दर्द होने पर डॉक्टर से सलाह लें।"
    },
    {
        "id": "weakness",
        "keys": ["weakness", "fatigue", "tired", "थकवा", "अशक्तपणा", "कमजोरी", "थकान", "anemia", "रक्तक्षय", "खून की कमी"],
        "en": (
            "😴 Weakness, Fatigue & Anemia\n\n"
            "Precautions:\n"
            "• Ensure 7-8 hours of sound sleep.\n"
            "• Stay hydrated and eat on time. Do not skip breakfast.\n"
            "• For Anemia (Iron deficiency): Eat jaggery, groundnuts, spinach, dates, and beetroot.\n"
            "• Reduce mental stress through relaxation and hobbies.\n\n"
            "If weakness persists for weeks despite good rest, get a CBC (blood test) at a PHC to check for anemia, thyroid, or diabetes."
        ),
        "mr": "😴 थकवा आणि अशक्तपणा\n\n७-८ तास झोप घ्या, भरपूर पाणी प्या. आहारात गूळ-शेंगदाणे, खजूर, बीट व हिरव्या भाज्या वाढवा. सतत थकवा जाणवत असल्यास रक्ताची तपासणी (CBC/Sugar) करून घ्या.",
        "hi": "😴 कमजोरी और थकान\n\n७-८ घंटे की नींद लें, पानी पिएं। भोजन में गुड़, मूंगफली, पालक, खजूर शामिल करें। लगातार थकान रहे तो सरकारी केंद्र में खून की जांच (CBC/Sugar) करवाएं।"
    },
    {
        "id": "insomnia",
        "keys": ["insomnia", "sleep", "झोप", "नींद"],
        "en": (
            "💤 Insomnia & Sleep Disorders\n\n"
            "Healthy Sleep Habits:\n"
            "• Keep a fixed sleep schedule every day.\n"
            "• Avoid screens (phones, TV) 1 hour before bed.\n"
            "• Limit caffeine (tea/coffee) in the evening.\n"
            "• Keep the bedroom dark, quiet, and cool.\n"
            "• Try meditation, deep breathing, or reading before sleeping.\n\n"
            "Avoid self-medicating with sleeping pills. Consult a doctor if insomnia persists."
        ),
        "mr": "💤 झोपेच्या समस्या\n\nझोपण्याची वेळ निश्चित ठेवा. झोपण्यापूर्वी १ तास मोबाइल टाळा. संध्याकाळी चहा-कॉफी पिणे कमी करा. शांत वातावरणात झोपा. स्वतःहून झोपेच्या गोळ्या घेऊ नका.",
        "hi": "💤 नींद न आना (अनिद्रा)\n\nसोने का समय निश्चित करें। सोने से १ घंटा पहले मोबाइल न देखें। शाम को चाय/कॉफी से बचें। बिना डॉक्टर की सलाह के नींद की गोलियां न लें।"
    },
    {
        "id": "firstaid_trauma",
        "keys": ["burn", "भाजणे", "जलना", "bite", "चावणे", "काटना", "dog", "snake", "साप", "कुत्रा", "rabies", "रेबीज", "wound", "cut", "fracture", "sprain", "poisoning", "hypothermia", "choking"],
        "en": (
            "🩺 First Aid & Trauma Precautions\n\n"
            "• Burns: Cool with running water for 10–15 mins. No toothpaste or oil. Cover with a clean cloth.\n"
            "• Cuts: Clean with soap/water, press firmly to stop bleeding.\n"
            "• Dog/Animal Bite: Wash for 15 mins with soap + water. Get Anti-Rabies & Tetanus shots same day.\n"
            "• Snake Bite: Keep limb still (immobilize). Do NOT suck venom or cut. Call 108 immediately.\n"
            "• Sprain (RICE): Rest, Ice, Compression, Elevation.\n"
            "• Poisoning: Do NOT induce vomiting. Rush to hospital with the poison bottle.\n"
            "• Choking: Perform Heimlich maneuver if trained, or seek emergency help."
        ),
        "mr": "🩺 प्रथमोपचार व काळजी\n\nभाजणे: वाहते पाणी १०–१५ मिनिटे (टूथपेस्ट लावू नका). प्राणी चावा: साबणाने १५ मिनिटे धुवा व रेबीज लस घ्या. साप: चीरु नका, हलवू नका, १०८ बोलावा. विषबाधा: उलट्या करू नका, लगेच रुग्णालय गाठा.",
        "hi": "🩺 प्राथमिक उपचार\n\nजलना: नल का पानी १०–१५ मिनट (टूथपेस्ट न लगाएं)। काटना: साबुन से १५ मिनट धोएं, रेबीज टीका लें। सांप: काटें नहीं, १०८ बुलाएं। जहर: उल्टी न कराएं, तुरंत अस्पताल पहुंचें।"
    },
    {
        "id": "child",
        "keys": ["child", "baby", "infant", "vaccination", "immunization", "मुल", "बाळ", "टीका", "टीकाकरण", "pneumonia", "measles", "malnutrition"],
        "en": (
            "👶 Child Health & Vaccination\n\n"
            "Precautions:\n"
            "• Exclusive breastfeeding for the first 6 months. Then introduce mashed home food.\n"
            "• Complete all vaccines on the MCP card at PHC / Anganwadi (BCG, Polio, DTP, Measles).\n"
            "• For diarrhoea: give ORS + Zinc.\n\n"
            "Danger Signs (Call 108):\n"
            "Fast breathing/chest indrawing (pneumonia), blue lips, convulsions, inability to feed, or extreme lethargy."
        ),
        "mr": "👶 बाल आरोग्य व लसीकरण\n\n६ महिने केवळ स्तनपान. MCP कार्डवरील सर्व लसी वेळेवर घ्या. जुलाबात ओआरएस व झिंक. बाळ दूध पीत नसेल, झटके येत असतील किंवा श्वास जलद घेत असेल तर लगेच १०८.",
        "hi": "👶 बाल स्वास्थ्य व टीकाकरण\n\n६ महीने केवल स्तनपान। MCP कार्ड के सभी टीके लगवाएं। दस्त में ORS + जिंक। यदि बच्चा सुस्त हो, तेज सांस ले (निमोनिया) या दूध न पी पाए — १०८ बुलाएं।"
    },
    {
        "id": "heat",
        "keys": ["heat", "sunstroke", "heat stroke", "उन्हाळा", "लू", "dehydrat", "गर्मी"],
        "en": (
            "☀️ Heatstroke & Dehydration Precautions\n\n"
            "• Drink water frequently, even if not thirsty.\n"
            "• Avoid peak sun between 12 PM and 4 PM.\n"
            "• Wear light, loose cotton clothes and cover your head.\n"
            "• Never leave children in parked, closed vehicles.\n\n"
            "Emergency: High body temperature without sweating, severe headache, confusion, or fainting means heatstroke — cool the body with wet cloths and call 108."
        ),
        "mr": "☀️ उष्माघात (Heatstroke) खबरदारी\n\nवारंवार पाणी प्या, दुपारची ऊन टाळा, डोके झाका. चक्कर, घाम न येता खूप ताप किंवा बेशुद्धी आल्यास रुग्णाला सावलीत आणा, ओल्या फडक्याने पुसा व १०८ बोलावा.",
        "hi": "☀️ लू और डिहाइड्रेशन (Heatstroke)\n\nबार-बार पानी पिएँ, दोपहर की धूप से बचें, सिर ढकें। तेज गर्मी, पसीना न आना और चक्कर आना लू के लक्षण हैं — मरीज को ठंडे में लाएँ और १०८ बुलाएं।"
    },
    {
        "id": "tb",
        "keys": ["tb", "tuberculosis", "क्षय", "क्षयरोग", "निःक्षय", "nikshay", "asthma", "अस्थमा", "दमा", "श्वसन"],
        "en": (
            "🫁 Respiratory Health, TB & Asthma\n\n"
            "Precautions:\n"
            "• Cough lasting > 2 weeks: Get tested for TB. It is curable.\n"
            "• Finish the full DOTS course — never stop early. Govt gives ₹500/month (Nikshay Poshan).\n"
            "• Asthma: Avoid dust, smoke, and cold air. Carry your inhaler always.\n"
            "• Cover your mouth when coughing. Keep rooms well-ventilated.\n"
            "• Avoid smoking and second-hand smoke."
        ),
        "mr": "🫁 श्वसन, क्षयरोग (TB) व दमा\n\n२ आठवड्यांपेक्षा जास्त खोकला असल्यास TB तपासणी करा. औषध पूर्ण कोर्स घ्या. दमा असल्यास धूळ, धूर टाळा व इनहेलर सोबत ठेवा. धूम्रपान पूर्णपणे टाळा.",
        "hi": "🫁 श्वास, टीबी (TB) और अस्थमा\n\n२ सप्ताह से अधिक खांसी हो तो टीबी जांच कराएं। पूरा कोर्स लें। अस्थमा में धूल-धुएं से बचें और इनहेलर साथ रखें। धूम्रपान न करें।"
    },
    {
        "id": "hygiene",
        "keys": ["precaution", "prevention", "hygiene", "wash", "prevent", "खबरदारी", "सावधानी", "स्वच्छता"],
        "en": (
            "🛡️ Everyday Health Precautions\n\n"
            "• Wash hands properly with soap and water.\n"
            "• Drink clean, boiled, or filtered water.\n"
            "• Keep home and surroundings clean. Prevent water logging to stop mosquitoes.\n"
            "• Maintain mental well-being with yoga, meditation, and social connections.\n"
            "• Monitor blood pressure, sugar, and weight regularly.\n\n"
            "Ask me about any specific symptom (like fever, dog bite, stomach pain, joint pain) for more details!"
        ),
        "mr": "🛡️ रोजची खबरदारी आणि स्वच्छता\n\nहात साबणाने धुवा, स्वच्छ पाणी प्या, आजूबाजूला पाणी साचू देऊ नका. मानसिक आरोग्यासाठी ध्यान-योगा करा. तुम्हाला कोणत्याही आजाराबाबत (उदा. ताप, सांधेदुखी) माहिती हवी असल्यास नक्की विचारा!",
        "hi": "🛡️ रोज़मर्रा की सावधानी और स्वच्छता\n\nसाबुन से हाथ धोएँ, साफ पानी पिएँ, मच्छर न पनपने दें। तनाव से बचें और योगा करें। किसी भी बीमारी (जैसे बुखार, जोड़ों का दर्द) के बारे में पूछें!"
    }
]

def answer_health_query(question_raw, lang="en"):
    q = (question_raw or "").lower()
    best = None
    best_score = 0
    for topic in TOPICS:
        score = 0
        for key in topic["keys"]:
            if key.lower() in q:
                score += 3 if len(key) > 6 else 1
        if score > best_score:
            best_score = score
            best = topic
    
    field = "mr" if lang == "mr" else "hi" if lang == "hi" else "en"
    
    if best and best_score > 0:
        return best[field]
    
    quoted = question_raw or ""
    if lang == "mr":
        return (
            f'नमस्ते! मी स्वास्थ्यसेतू एआय (SwasthyaSetu AI) आहे.\n\n'
            f'तुमचा प्रश्न: "{quoted}"\n\n'
            "मी तुम्हाला आरोग्य, खबरदारी आणि प्रथमोपचाराबाबत मार्गदर्शन करू शकतो. "
            "उदा: ताप, डेंग्यू, मधुमेह, केस गळणे, सांधेदुखी, वजन कमी करणे, गरोदरपण, प्राणी चावणे किंवा आपत्कालीन सेवा.\n"
            "कृपया तुमचा प्रश्न किंवा लक्षण अधिक स्पष्ट सांगा."
        )
    if lang == "hi":
        return (
            f'नमस्ते! मैं स्वास्थ्यसेतु एआई (SwasthyaSetu AI) हूँ.\n\n'
            f'आपका प्रश्न: "{quoted}"\n\n'
            "मैं आपको स्वास्थ्य, सावधानियों और प्राथमिक उपचार पर मार्गदर्शन दे सकता हूँ। "
            "जैसे: बुखार, शुगर, बाल झड़ना, जोड़ों का दर्द, वजन कम करना, गर्भावस्था, कुत्ता काटना या आपातकाल।\n"
            "कृपया अपना लक्षण या प्रश्न स्पष्ट करें।"
        )
    return (
        f'Hello! I am SwasthyaSetu AI Health Assistant.\n\n'
        f'You asked: "{quoted}"\n\n'
        "I can provide health awareness, precautions, preventive care, and first-aid for conditions like "
        "fever, diabetes, hypertension, hair fall, weight management, joint pain, insomnia, stomach ache, bites, or emergencies.\n"
        "Please specify your symptom or what you need to know to stay safe."
    )
