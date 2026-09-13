# -*- coding: utf-8 -*-
"""
SwasthyaSetu AI - Python Flask Backend Server
Provides comprehensive REST APIs for Healthcare Facilities in Pune,
Government Schemes, Multilingual General Healthcare AI Guidance, and User Feedback.
"""

import os
import sys
import json
import uuid
import re
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from health_knowledge import answer_health_query

# Ensure default encoding is utf-8
if sys.version_info[0] >= 3:
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "data")

app = Flask(__name__)
CORS(app)

def load_data(filename):
    path = os.path.join(DATA_DIR, filename)
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading {filename}: {e}")
            return []
    return []

def save_data(filename, data):
    path = os.path.join(DATA_DIR, filename)
    try:
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"Error saving {filename}: {e}")
        return False

@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    return response

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "online",
        "service": "SwasthyaSetu AI Backend",
        "version": "2.1.0",
        "region": "Pune, Maharashtra",
        "timestamp": datetime.now().isoformat()
    })

@app.route("/api/facilities", methods=["GET"])
def get_facilities():
    facilities = load_data("facilities.json")
    
    search = request.args.get("search", "").lower().strip()
    fac_type = request.args.get("type", "All")
    category = request.args.get("category", "All")
    emergency = request.args.get("emergency", "").lower() == "true"
    area = request.args.get("area", "").lower().strip()
    
    filtered = facilities
    if search:
        filtered = [
            f for f in filtered 
            if search in f.get("name", "").lower() 
            or search in f.get("address", "").lower() 
            or search in f.get("speciality", "").lower()
            or any(search in d.lower() for d in f.get("departments", []))
        ]
    if area:
        filtered = [f for f in filtered if area in f.get("address", "").lower() or area in f.get("name", "").lower()]
    if fac_type and fac_type != "All":
        filtered = [f for f in filtered if f.get("type") == fac_type]
    if category and category != "All":
        filtered = [f for f in filtered if f.get("category") == category]
    if emergency:
        filtered = [f for f in filtered if f.get("emergency") is True]
        
    return jsonify(filtered)

@app.route("/api/schemes", methods=["GET"])
def get_schemes():
    schemes = load_data("schemes.json")
    return jsonify(schemes)

@app.route("/api/feedback", methods=["POST", "OPTIONS"])
def submit_feedback():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200
        
    body = request.get_json(silent=True) or {}
    feedbacks = load_data("feedback.json")
    
    entry = {
        "id": f"fb-{uuid.uuid4().hex[:8]}",
        "timestamp": datetime.now().isoformat(),
        "reportType": body.get("reportType", "General feedback"),
        "helpful": body.get("helpful", True),
        "details": body.get("details", ""),
        "status": "received"
    }
    feedbacks.append(entry)
    save_data("feedback.json", feedbacks)
    
    return jsonify({
        "success": True,
        "message": "Feedback recorded successfully",
        "record": entry
    }), 201

@app.route("/api/chat", methods=["POST", "OPTIONS"])
def chat_ai():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    body = request.get_json(silent=True) or {}
    question_raw = (body.get("question") or body.get("message") or "").strip()
    lang = body.get("lang") or "en"
    reply = answer_health_query(question_raw, lang)
    return jsonify({
        "reply": reply,
        "language": lang,
        "timestamp": datetime.now().isoformat()
    })


def _chat_ai_legacy_unused():
    q = question_raw.lower()
    lang = body.get("lang") or "en"
    
    # 1. CRITICAL EMERGENCY / 108 ALERTS (Chest pain, severe bleeding, stroke, fainting)
    if any(k in q for k in ["chest pain", "heart attack", "छातीत दुखणे", "हार्ट अटॅक", "सीने में दर्द", "दिल का दौरा", "stroke", "paralysis", "पक्षाघात", "लकवा", "severe bleeding", "रक्तस्त्राव", "खून बहना", "unconscious", "बेहोश", "शारीरिक आघात"]):
        if lang == "mr":
            reply = "🚨 **तात्काळ आपत्कालीन सूचना (Call 108):**\nही गंभीर वैद्यकीय आणीबाणी असू शकते. कृपया विलंब न करता ताबडतोब **१०८ रुग्णवाहिका** कॉल करा!\n\n**प्राथमिक काळजी:**\n1. रुग्णाला शांत बसवा किंवा सुरक्षित झोपवा.\n2. छातीत दुखत असल्यास घट्ट कपडे सैल करा.\n3. रुग्णाला खाण्या-पिण्यास काहीही देऊ नका.\n\n**जवळचे २४x७ आपत्कालीन केंद्र:**\n• ग्रामीण रुग्णालय चाकण (CHC) - ६.८ किमी\n• ससून जनरल हॉस्पिटल पुणे - १८.५ किमी\n• डी.वाय. पाटील हॉस्पिटल पिंपरी - १४.५ किमी"
        elif lang == "hi":
            reply = "🚨 **तत्काल आपातकालीन चेतावनी (Call 108):**\nयह एक गंभीर चिकित्सीय आपातकाल हो सकता है. बिना किसी देरी के तुरंत **१०८ एम्बुलेंस** को कॉल करें!\n\n**प्राथमिक उपाय:**\n1. मरीज को शांत रखें और आराम से बैठाएं या लेटाएं.\n2. सीने में दर्द होने पर तंग कपड़े ढीले करें.\n3. मरीज को कुछ भी खाने-पीने को न दें.\n\n**निकटतम २४x७ आपातकालीन अस्पताल:**\n• सीएचसी चाकण (CHC Chakan) - ६.८ किमी\n• ससून जनरल अस्पताल पुणे - १८.५ किमी\n• डी.वाई. पाटिल अस्पताल पिंपरी - १४.५ किमी"
        else:
            reply = "🚨 **IMMEDIATE EMERGENCY ALERT (Call 108):**\nThis could indicate a critical medical emergency. Please call **108 Ambulance immediately**!\n\n**First Response:**\n1. Keep the person calm and seated or lying down comfortably.\n2. Loosen any tight clothing around the neck and chest.\n3. Do not give water or food.\n\n**Nearest 24x7 Emergency Facilities:**\n• CHC Chakan (6.8 km)\n• YCM Hospital Pimpri (14.2 km)\n• Sassoon General Hospital Pune (18.5 km)"

    # 2. FEVER / INFECTION (ताप, बुखार, Dengue, Malaria, Typhoid)
    elif any(k in q for k in ["fever", "ताप", "बुखार", "dengue", "डेंग्यू", "डेंगू", "malaria", "मलेरिया", "typhoid", "टायफॉईड", "cold", "खोकला", "सर्दी", "cough"]):
        if lang == "mr":
            reply = "🌡️ **ताप आणि संसर्गाबाबत मार्गदर्शन:**\n\n• **घरगुती काळजी:** भरपूर पाणी आणि ओआरएस (ORS) प्या, पूर्ण विश्रांती घ्या. कपाळावर थंड पाण्याच्या घड्या ठेवा.\n• **सुरक्षित औषध:** ताप असल्यास पॅरासिटामॉल (Paracetamol 500/650mg) डॉक्टरांच्या सल्ल्यानुसार घेऊ शकता. ॲस्पिरिन किंवा आयबुप्रोफेन परस्पर घेऊ नका.\n• **धोक्याची चिन्हे:** सलग ३ दिवसांपेक्षा जास्त ताप, तीव्र डोकेदुखी, उलट्या, किंवा अंगावर पुरळ उठल्यास लगेच तपासणी करा (डेंग्यू/मलेरियाची शक्यता).\n\n**जवळचे सरकारी केंद्र (मोफत तपासणी व औषध):**\n• प्राथमिक आरोग्य केंद्र (PHC) खेड - २.४ किमी\n• ग्रामीण रुग्णालय (CHC) चाकण - ६.८ किमी (२४ तास सुरू)"
        elif lang == "hi":
            reply = "🌡️ **बुखार और संक्रमण के लिए स्वास्थ्य मार्गदर्शन:**\n\n• **देखभाल:** पर्याप्त मात्रा में पानी, ओआरएस (ORS) या नारियल पानी पिएं. पूरा आराम करें. माथे पर सामान्य पानी की पट्टियां रखें.\n• **दवा:** बुखार के लिए पैरासिटामोल (Paracetamol) डॉक्टर की सलाह से ले सकते हैं. बिना डॉक्टर ब्रूफेन या एस्पिरिन न लें.\n• **सावधानी:** यदि बुखार ३ दिन से अधिक रहे, शरीर में चकत्ते या अत्यधिक कमजोरी हो तो तुरंत खून की जांच (CBC, Dengue, Malaria) कराएं.\n\n**निकटतम सरकारी केंद्र (मुफ्त जांच और दवाएं):**\n• पीएचसी खेड (PHC Khed) - २.४ किमी\n• सीएचसी चाकण (CHC Chakan) - ६.८ किमी"
        else:
            reply = "🌡️ **Fever & Infection Care Guidance:**\n\n• **Home Care:** Drink plenty of fluids (boiled water, ORS, coconut water). Rest well. Use a damp cloth sponge on the forehead to bring down temperature.\n• **Medication:** Paracetamol (500mg/650mg) as advised by a doctor. Avoid Aspirin or Ibuprofen without consultation.\n• **Warning Signs:** Fever lasting >3 days, severe shivering, body rash, or vomiting requires immediate blood testing for Dengue, Malaria, or Typhoid.\n\n**Nearby Free Testing & Care:**\n• PHC Khed (2.4 km) - Free OPD & Blood Smear\n• CHC Chakan (6.8 km) - 24x7 Emergency & Pathology"

    # 3. DIABETES & BLOOD PRESSURE (मधुमेह, बीपी, हायपरटेन्शन, शुगर)
    elif any(k in q for k in ["diabetes", "sugar", "मधुमेह", "साखर", "शुगर", "blood pressure", "bp", "रक्तदाब", "बीपी", "hypertension"]):
        if lang == "mr":
            reply = "🩺 **मधुमेह (डायबेटीस) आणि रक्तदाब (BP) व्यवस्थापन:**\n\n• **आहार:** जेवणात मीठ आणि साखरेचे प्रमाण कमी करा. हिरव्या पालेभाज्या, कडधान्ये आणि बाजरी/ज्वारीची भाकरी खा.\n• **नियमित व्यायाम:** दररोज किमान ३० मिनिटे जलद चाला.\n• **तपासणी:** दर ३ महिन्यांनी HbA1c आणि महिन्याला BP तपासा. डॉक्टरांनी दिलेली औषधे रोज वेळेवर घ्या, अचानक बंद करू नका.\n\n**सरकारी मोफत औषध योजना:**\nशासकीय प्राथमिक आरोग्य केंद्र (PHC) आणि जन औषधी केंद्रांवर मेटफॉर्मिन, ॲम्लोडिपिन सारखी बीपी-शुगरची औषधे पूर्णपणे मोफत किंवा ९०% सवलतीत मिळतात."
        elif lang == "hi":
            reply = "🩺 **मधुमेह (शुगर) और हाई ब्लड प्रेशर (BP) प्रबंधन:**\n\n• **खान-पान:** भोजन में नमक और चीनी कम करें. हरी सब्जियां, दालें और फाइबर युक्त अनाज लें. तली हुई चीजें बंद करें.\n• **व्यायाम:** रोजाना ३० मिनट तेज वॉक करें.\n• **नियमितता:** डॉक्टर द्वारा दी गई बीपी और शुगर की दवाएं बिना नागा समय पर लें. हर ३ महीने में जांच करवाएं.\n\n**मुफ्त दवाएं:**\nसभी सरकारी प्राथमिक स्वास्थ्य केंद्रों (PHC) पर बीपी और शुगर की नियमित गोलियां निःशुल्क मिलती हैं."
        else:
            reply = "🩺 **Diabetes & Hypertension Management:**\n\n• **Dietary Advice:** Cut down on table salt, refined sugars, and deep-fried items. Include whole grains, leafy vegetables, and high-fiber foods.\n• **Daily Activity:** Aim for at least 30-45 minutes of brisk walking every day.\n• **Monitoring:** Check your fasting/PP blood sugar regularly and test HbA1c every 3 months. Never discontinue prescribed antihypertensive or diabetic pills on your own.\n\n**Free Medication:**\nGovernment PHCs and Jan Aushadhi Kendras provide generic Metformin, Glimepiride, and Amlodipine free or at very nominal rates."

    # 4. PREGNANCY & MATERNAL HEALTH (गर्भवती, गरोदर, डिलिव्हरी, प्रसूती, बाळंतपण)
    elif any(k in q for k in ["pregnant", "pregnancy", "गर्भवती", "गरोदर", "प्रसूती", "बाळंतपण", "delivery", "डिलीवरी", "anc"]):
        if lang == "mr":
            reply = "🤰 **गरोदर माता आणि बाल संगोपन मार्गदर्शन:**\n\n• **आहार व पोषण:** आहारात डाळी, हिरव्या पालेभाज्या, दूध, अंडी आणि शेंगदाणे-गूळ खा. आयर्न व कॅल्शियमच्या गोळ्या नियमित घ्या.\n• **महत्त्वाच्या तपासण्या:** किमान ४ एएनसी (ANC) तपासण्या आणि २ टिटॅनस (TT) इंजेक्शने शासकीय रुग्णालयात मोफत करून घ्या.\n• **सरकारी योजना लाभ:**\n1. **जननी सुरक्षा योजना (JSY):** शासकीय प्रसूतीसाठी ₹१,४०० थेट खात्यात मिळतात.\n2. **PMSMA:** दर महिन्याच्या ९ तारखेला सर्व सरकारी केंद्रांवर मोफत सोनोग्राफी व तज्ज्ञ तपासणी.\n\n**जवळची प्रसूती सुविधा:** CHC चाकण व ससून हॉस्पिटल (२४ तास मोफत प्रसूती व एनआयसीयू)."
        elif lang == "hi":
            reply = "🤰 **गर्भावस्था एवं सुरक्षित मातृत्व सलाह:**\n\n• **पोषण:** भोजन में आयरन, कैल्शियम, हरी सब्जियां, दूध और दालें लें. डॉक्टर द्वारा दी गई आयरन-फोलिक एसिड गोलियां नियमित खाएं.\n• **जांच:** गर्भावस्था में कम से कम ४ प्रसवपूर्व जांचें (ANC) और टेटनस (TT) के टीके जरूर लगवाएं.\n• **सरकारी योजनाएं:**\n1. **जननी सुरक्षा योजना:** ग्रामीण महिलाओं को अस्पताल में प्रसव पर ₹१,४०० की सहायता.\n2. **PMSMA:** हर महीने की ९ तारीख को मुफ्त सोनोग्राफी और विशेषज्ञ जांच.\n\n**मुफ्त प्रसव केंद्र:** सीएचसी चाकण और ससून अस्पताल (२४ घंटे सेवा उपलब्ध)."
        else:
            reply = "🤰 **Pregnancy & Maternal Health Guidance:**\n\n• **Nutrition:** Eat iron-rich foods, green vegetables, pulses, and milk. Take daily Iron and Folic Acid (IFA) and Calcium tablets.\n• **Key Checkups:** Ensure at least 4 Antenatal Care (ANC) visits and Tetanus Toxoid (TT) vaccines.\n• **Govt Benefits:**\n1. **Janani Suraksha Yojana (JSY):** ₹1,400 financial assistance for institutional delivery in rural areas.\n2. **PMSMA:** Free comprehensive antenatal checkup and ultrasound on the 9th of every month.\n\n**Recommended Delivery Facilities:** CHC Chakan (6.8 km) & YCM Hospital (14.2 km) - 24x7 free maternal care."

    # 5. AYUSHMAN BHARAT & SCHEMES (आयुष्मान भारत, योजना, कार्ड, मोफत उपचार)
    elif any(k in q for k in ["ayushman", "pmjay", "scheme", "योजना", "आयुष्मान", "mjpjay", "कार्ड", "card", "free treatment", "मोफत उपचार"]):
        if lang == "mr":
            reply = "📜 **सरकारी आरोग्य योजना माहिती:**\n\n1. **आयुष्मान भारत (PM-JAY):** पात्र कुटुंबांना वर्षाला ₹५ लाखांपर्यंत मोफत कॅशलेस उपचार मिळतात. पिवळे/केशरी रेशन कार्डधारक पात्र आहेत.\n2. **महात्मा ज्योतिबा फुले जन आरोग्य योजना (MJPJAY):** महाराष्ट्रातील नागरिकांसाठी ९९६ उपचारांवर ₹५ लाखांचे मोफत कव्हर.\n3. **आयुष्मान वय वंदना (७०+ वर्षे):** ७० वर्षांवरील सर्व ज्येष्ठ नागरिकांसाठी उत्पन्नाची अट न ठेवता ₹५ लाख मोफत विमा.\n\n**कार्ड कसे काढायचे?**\nजवळच्या 'आपले सरकार सेवा केंद्र' किंवा कोणत्याही सरकारी रुग्णालयातील 'आरोग्यमित्र' कक्षात आधार कार्ड व रेशन कार्ड दाखवून गोल्डन कार्ड तात्काळ मिळते."
        elif lang == "hi":
            reply = "📜 **सरकारी स्वास्थ्य योजनाएं एवं पात्रता:**\n\n1. **आयुष्मान भारत (PM-JAY):** प्रति परिवार प्रति वर्ष ₹५ लाख तक का मुफ्त इलाज. बीपीएल व पात्र राशन कार्ड धारक इसके लाभार्थी हैं.\n2. **महात्मा ज्योतिबा फुले योजना (महाराष्ट्र):** राज्य के नागरिकों के लिए ₹५ लाख तक कैशलेस अस्पताल सुविधा.\n3. **आयुष्मान वय वंदना कार्ड (७०+ वर्ष):** ७० वर्ष से अधिक उम्र के सभी वरिष्ठ नागरिकों को ₹५ लाख का अलग मुफ्त स्वास्थ्य सुरक्षा.\n\n**कार्ड बनवाने का तरीका:**\nनजदीकी सीएससी (CSC) या सरकारी अस्पताल में आयुष्मान मित्र काउंटर पर आधार कार्ड और राशन कार्ड ले जाएं."
        else:
            reply = "📜 **Government Healthcare Schemes Overview:**\n\n1. **Ayushman Bharat PM-JAY:** Up to ₹5 Lakh cashless annual coverage per eligible family across 28,000+ empaneled hospitals.\n2. **MJPJAY (Maharashtra):** Free cashless hospitalization up to ₹5 Lakh for 996 procedures for yellow/orange ration cardholders.\n3. **Ayushman Vay Vandana (70+ Seniors):** Universal ₹5 Lakh health cover for every senior citizen aged 70+, regardless of family income.\n\n**How to Apply:**\nVisit your nearest Common Service Centre (CSC), Aaple Sarkar Kendra, or the Arogyamitra kiosk at any government hospital with your Aadhaar and Ration Card."

    # 6. HOSPITALS & CLINICS NEARBY (रुग्णालय, अस्पताल, doctor, clinic, pune, chakan, khed)
    elif any(k in q for k in ["nearest", "near", "hospital", "रुग्णालय", "अस्पताल", "दवाखाना", "doctor", "डॉक्टर", "clinic", "pune", "chakan", "khed", "पुणे"]):
        if lang == "mr":
            reply = "🏥 **पुणे आणि परिसरातील प्रमुख रुग्णालये:**\n\n• **सरकारी (मोफत/अल्प दर):**\n  1. प्राथमिक आरोग्य केंद्र (PHC) खेड - २.४ किमी (OPD ९ ते ५)\n  2. ग्रामीण रुग्णालय (CHC) चाकण - ६.८ किमी (२४x७ आपत्कालीन व शस्त्रक्रिया)\n  3. ससून जनरल हॉस्पिटल पुणे - १८.५ किमी (१,३०० बेड्स, सुपर-स्पेशालिटी)\n  4. वायसीएम हॉस्पिटल पिंपरी - १४.२ किमी\n\n• **खाजगी (आयुष्मान भारत/MJPJAY पात्र):**\n  1. एबीसी मल्टीस्पेशालिटी चाकण - ८.२ किमी\n  2. डी.वाय. पाटील हॉस्पिटल पिंपरी - १४.५ किमी\n  3. रुबी हॉल क्लिनिक पुणे - १८.८ किमी\n\n📍 थेट गुगल मॅप्सवर पाहण्यासाठी 'Find Healthcare' सेक्शनमधील नकाशा व **Google Maps** बटनावर क्लिक करा!"
        elif lang == "hi":
            reply = "🏥 **पुणे व नजदीकी प्रमुख अस्पताल:**\n\n• **सरकारी अस्पताल (मुफ्त/रियायती):**\n  1. पीएचसी खेड (PHC Khed) - २.४ किमी\n  2. सीएचसी चाकण (CHC Chakan) - ६.८ किमी (२४ घंटे आपातकालीन)\n  3. ससून जनरल अस्पताल पुणे - १८.५ किमी (१,३०० बेड, सुपर स्पेशलिटी)\n  4. वायसीएम अस्पताल पिंपरी - १४.२ किमी\n\n• **निजी अस्पताल:**\n  1. एबीसी मल्टीस्पेशलिटी चाकण - ८.२ किमी\n  2. डी.वाई. पाटिल अस्पताल पिंपरी - १४.५ किमी\n  3. रूबी हॉल क्लीनिक पुणे - १८.८ किमी\n\n📍 सीधा रास्ता देखने के लिए 'Find Healthcare' में **Google Maps** लिंक पर क्लिक करें."
        else:
            reply = "🏥 **Top Government & Private Hospitals in Pune Area:**\n\n• **Government (Free / Nominal Cost):**\n  1. PHC Khed - 2.4 km (9 AM - 5 PM)\n  2. CHC Chakan - 6.8 km (24x7 Emergency & General Surgery)\n  3. YCM Hospital Pimpri - 14.2 km (750 Beds, Trauma Center)\n  4. Sassoon General Hospital Pune - 18.5 km (1,296 Beds, Apex Tertiary Care)\n\n• **Private (Empaneled with Cashless Schemes):**\n  1. ABC Multispeciality Chakan - 8.2 km\n  2. Dr. D.Y. Patil Hospital Pimpri - 14.5 km (Ayushman Bharat / MJPJAY)\n  3. Ruby Hall Clinic Pune - 18.8 km\n\n📍 Click 'Directions' on any hospital card to open its exact location on **Google Maps**!"

    # 7. GENERAL HEALTHCARE / FIRST AID / STOMACH / HEADACHE / PAIN
    elif any(k in q for k in ["stomach", "पोटदुखी", "पेट दर्द", "headache", "डोकेदुखी", "सिरदर्द", "acidity", "ऍसिडिटी", "एसिडिटी", "vomit", "उलटी", "diarrhea", "जुलाब", "दस्त", "burn", "भाजणे", "जलना", "bite", "चावणे", "काटना", "bp", "वजन", "diet", "आहार"]):
        if lang == "mr":
            reply = "🩺 **प्राथमिक आरोग्य व घरगुती काळजी सल्ला:**\n\n• **पोटदुखी / जुलाब (Loose motions):** ओआरएस (ORS) चे पाणी थोडे-थोडे प्या. भाताची पेज, ताक, केळे खा. तिखट-तेलकट पूर्णपणे टाळा.\n• **डोकेदुखी / ऍसिडिटी:** भरपूर पाणी प्या, वेळेवर जेवण घ्या, पुरेशी झोप (७-८ तास) घ्या. चहा-कॉफी मर्यादित करा.\n• **किरकोळ भाजल्यास:** भाजलेल्या भागावर १५ मिनिटे थंड वाहते पाणी धरा. टूथपेस्ट किंवा तेल लावू नका. स्वच्छ पट्टी बांधा.\n• **कीटक / प्राणी चावल्यास:** जखम साबण आणि वाहत्या पाण्याने धुवा आणि तात्काळ जवळच्या PHC मध्ये जाऊन धनुर्वात (Tetanus) व अँटी-रेबीज लस घ्या.\n\n⚠️ *टीप: त्रास वाढल्यास तात्काळ जवळच्या डॉक्टरांचा किंवा प्राथमिक आरोग्य केंद्राचा सल्ला घ्या.*"
        elif lang == "hi":
            reply = "🩺 **प्राथमिक स्वास्थ्य एवं घरेलू देखभाल:**\n\n• **पेट दर्द व दस्त (Loose Motions):** ओआरएस (ORS) का घोल पिएं. खिचड़ी, दही, केला और छाछ लें. तला-भुना बिल्कुल न खाएं.\n• **सिरदर्द व एसिडिटी:** भरपूर पानी पिएं, भूखे पेट न रहें और ७-८ घंटे की पूरी नींद लें.\n• **जलने पर:** जले हुए हिस्से को १०-१५ मिनट ठंडे नल के पानी के नीचे रखें. टूथपेस्ट या हल्दी न लगाएं.\n• **कुत्ते या जानवर के काटने पर:** घाव को तुरंत साबुन और बहते पानी से १५ मिनट धोएं और अस्पताल जाकर रेबीज का टीका लगवाएं.\n\n⚠️ *सलाह: यदि दर्द तेज हो या २४ घंटे में राहत न मिले तो तुरंत डॉक्टर को दिखाएं.*"
        else:
            reply = "🩺 **General Healthcare & First Aid Guidance:**\n\n• **Stomach Upset / Diarrhea:** Drink ORS or electrolyte water frequently. Eat light meals like curd rice, bananas, and toast. Avoid oily foods.\n• **Headache & Acidity:** Stay hydrated, avoid skipping meals, limit excessive caffeine, and ensure 7-8 hours of sleep.\n• **Minor Burns:** Cool the burn under cold running water for 10-15 minutes. Never apply toothpaste or grease; apply a sterile non-stick bandage.\n• **Animal / Dog Bites:** Immediately wash the wound under running water with soap for 15 minutes, then visit the nearest hospital for Tetanus and Anti-Rabies vaccination.\n\n⚠️ *Note: Always consult a licensed medical doctor if symptoms persist or worsen.*"

    # 8. DEFAULT / GENERAL AI QUERY RESPONDER
    else:
        if lang == "mr":
            reply = f"नमस्ते! मी तुमचा स्वास्थ्यसेतू एआय (SwasthyaSetu AI) सहाय्यक आहे.\n\nतुम्ही विचारलेला प्रश्न: **'{question_raw}'**\n\nमी तुम्हाला खालील सर्व आरोग्य सेवांमध्ये मदत करू शकतो:\n• **जवळची रुग्णालये शोधणे:** सरकारी (PHC/CHC/ससून) आणि खाजगी रुग्णालये गुगल मॅप्ससह.\n• **लक्षणे व आजार:** ताप, खोकला, पोटदुखी, डेंग्यू, मलेरिया, डायबेटीस, बीपी, प्रसूती.\n• **मोफत सरकारी योजना:** आयुष्मान भारत (PM-JAY), महात्मा ज्योतिबा फुले योजना, वय वंदना.\n• **उपचार खर्च अंदाज:** विविध उपचारांचा खर्च व इन्शुरन्स क्लेम.\n• **आपत्कालीन मदत:** १०८ रुग्णवाहिका व प्रथमोपचार मार्गदर्शन.\n\nतुम्हाला नक्की काय माहिती हवी आहे ते सांगा, मी संपूर्ण माहिती देईन!"
        elif lang == "hi":
            reply = f"नमस्ते! मैं आपका स्वास्थ्यसेतु एआई (SwasthyaSetu AI) सहायक हूँ.\n\nआपका प्रश्न: **'{question_raw}'**\n\nमैं आपकी निम्न स्वास्थ्य विषयों में सहायता कर सकता हूँ:\n• **अस्पताल खोजना:** नजदीकी सरकारी और निजी अस्पताल (Google Maps लोकेशन के साथ).\n• **लक्षण और बीमारी:** बुखार, खांसी, पेट दर्द, डेंगू, मधुमेह (शुगर), बीपी, गर्भावस्था.\n• **सरकारी स्वास्थ्य योजनाएं:** आयुष्मान भारत कार्ड, महात्मा ज्योतिबा फुले योजना, वय वंदना.\n• **इलाज खर्च का अनुमान:** अस्पताल का अनुमानित खर्च और बीमा सहायता.\n• **आपातकाल:** १०८ एम्बुलेंस और त्वरित प्राथमिक उपचार.\n\nकृपया अपनी आवश्यकता बताएं, मैं आपकी पूरी सहायता करूँगा!"
        else:
            reply = f"Hello! I am your SwasthyaSetu AI Healthcare Assistant.\n\nRegarding your query: **'{question_raw}'**\n\nI can provide guidance on:\n• **Nearby Hospitals:** Government (PHC/CHC/Sassoon) and private hospitals with Google Maps directions.\n• **Symptoms & Illnesses:** Fever, cough, abdominal pain, dengue, diabetes, high blood pressure, pregnancy care, child immunization.\n• **Government Schemes:** Ayushman Bharat PM-JAY (₹5 Lakh cover), MJPJAY, Ayushman Vay Vandana (70+ Seniors).\n• **Cost Estimator:** Approximate out-of-pocket costs and cashless insurance options.\n• **Medical Emergencies:** Immediate guidance and 108 ambulance connection.\n\nPlease feel free to describe your symptoms or what healthcare assistance you need!"

    return jsonify({
        "reply": reply,
        "language": lang,
        "timestamp": datetime.now().isoformat()
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"Starting SwasthyaSetu AI Flask Server on http://127.0.0.1:{port}")
    app.run(host="0.0.0.0", port=port, debug=False)
