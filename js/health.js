
document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------
    // DISEASE DATA
    // --------------------------------------------------
    const diseaseData = [
        {
            id: "liver",
            name: {
                en: "Liver Disorders",
                hi: "लिवर (यकृत) विकार"
            },
            title: {
                en: "Liver Disorders",
                hi: "लिवर (यकृत) की समस्याएं"
            },
            whatIs: {
                en: "Liver disorders include a variety of conditions that damage the liver and affect its function. Common types are fatty liver, hepatitis, and cirrhosis. The liver is essential for digesting food and ridding your body of toxic substances.",
                hi: "लिवर विकारों में विभिन्न स्थितियां शामिल हैं जो लिवर को नुकसान पहुंचाती हैं और इसके कार्य को प्रभावित करती हैं। सामान्य प्रकार फैटी लिवर, हेपेटाइटिस और सिरोसिस हैं। भोजन को पचाने और शरीर से विषाक्त पदार्थों को निकालने के लिए लिवर आवश्यक है।"
            },
            symptoms: {
                en: ["Yellowish skin and eyes (Jaundice)", "Abdominal pain and swelling", "Swelling in legs and ankles", "Dark urine color", "Chronic fatigue"],
                hi: ["त्वचा और आंखों का पीला पड़ना (पीलिया)", "पेट में दर्द और सूजन", "पैरों और टखनों में सूजन", "गहरे रंग का मूत्र", "लगातार थकान"]
            },
            avoid: {
                en: ["Alcohol consumption", "Fried and oily foods", "Processed sugar drinks", "Red meat", "High salt intake"],
                hi: ["शराब का सेवन", "तला और मसालेदार भोजन", "मीठे पेय पदार्थ", "लाल मांस (Red Meat)", "अधिक नमक का सेवन"]
            },
            treatment: {
                en: "Treatment depends on the specific liver condition. It may include lifestyle changes like weight loss and stopping alcohol, along with medications like Ursodeoxycholic Acid (e.g., Ursonova 300) to improve bile flow and liver function.",
                hi: "उपचार विशिष्ट लिवर की स्थिति पर निर्भर करता है। इसमें वजन कम करना और शराब छोड़ना जैसे जीवनशैली में बदलाव शामिल हो सकते हैं, साथ ही पित्त प्रवाह और लिवर कार्य को बेहतर बनाने के लिए उर्सोडिकॉक्सीकोलिक एसिड (जैसे Ursonova 300) जैसी दवाएं शामिल हैं।"
            }
        },
        {
            id: "diabetes",
            name: {
                en: "Diabetes",
                hi: "मधुमेह (डायबिटीज)"
            },
            title: {
                en: "Diabetes (High Blood Sugar)",
                hi: "मधुमेह (High Blood Sugar)"
            },
            whatIs: {
                en: "Diabetes is a chronic metabolic disease characterized by elevated levels of blood glucose (or blood sugar), which leads over time to serious damage to the heart, blood vessels, eyes, kidneys and nerves.",
                hi: "मधुमेह एक पुरानी चयापचय बीमारी है जो रक्त शर्करा के ऊंचे स्तर की विशेषता है, जो समय के साथ हृदय, रक्त वाहिकाओं, आंखों, गुर्दे और नसों को गंभीर नुकसान पहुंचाती है।"
            },
            symptoms: {
                en: ["Frequent urination", "Excessive thirst", "Unexplained weight loss", "Blurred vision", "Slow-healing sores"],
                hi: ["बार-बार पेशाब आना", "अत्यधिक प्यास लगना", "अस्पष्टीकृत वजन घटना", "धुंधली दृष्टि", "घावों का धीरे भरना"]
            },
            avoid: {
                en: ["Sugary foods and drinks", "Refined carbohydrates (white bread, pasta)", "Trans fats", "Dried fruits (in excess)", "Fruit juices with added sugar"],
                hi: ["मीठा भोजन और पेय", "मैदा (सफेद ब्रेड, पास्ता)", "ट्रांस फैट", "सूखे मेवे (अधिक मात्रा में)", "चीनी के साथ फलों के रस"]
            },
            treatment: {
                en: "Diabetes management involves blood sugar monitoring, insulin therapy (if needed), oral medications like Metformin or Teneligliptin, and a healthy diet and exercise regimen.",
                hi: "मधुमेह प्रबंधन में रक्त शर्करा की निगरानी, इंसुलिन थेरेपी (यदि आवश्यक हो), मेटफॉर्मिन या टेनेलिग्लिप्टिन जैसी मौखिक दवाएं, और एक स्वस्थ आहार और व्यायाम नियम शामिल हैं।"
            }
        },
        {
            id: "bp",
            name: {
                en: "Blood Pressure",
                hi: "रक्तचाप (BP)"
            },
            title: {
                en: "Hypertension (High Blood Pressure)",
                hi: "उच्च रक्तचाप (Hypertension)"
            },
            whatIs: {
                en: "Hypertension needs lifestyle changes and regular monitoring. It is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease.",
                hi: "उच्च रक्तचाप को जीवनशैली में बदलाव और नियमित निगरानी की आवश्यकता होती है। यह एक सामान्य स्थिति है जिसमें आपकी धमनी की दीवारों के खिलाफ रक्त का दीर्घकालिक बल इतना अधिक होता है कि यह अंततः हृदय रोग जैसी स्वास्थ्य समस्याओं का कारण बन सकता है।"
            },
            symptoms: {
                en: ["Severe headaches", "Nosebleed", "Fatigue or confusion", "Vision problems", "Chest pain (in severe cases)"],
                hi: ["तेज सिरदर्द", "नाक से खून आना", "थकान या भ्रम", "दृष्टि समस्याएं", "छाती में दर्द (गंभीर मामलों में)"]
            },
            avoid: {
                en: ["Salt (Sodium) in excess", "Processed and canned foods", "Coffee and caffeine", "Smoking", "Stressful situations"],
                hi: ["नमक (सोडियम) अधिक मात्रा में", "संसाधित और डिब्बाबंद खाद्य पदार्थ", "कॉफी और कैफीन", "धूम्रपान", "तनावपूर्ण स्थितियां"]
            },
            treatment: {
                en: "Managing BP often involves eating a heart-healthy diet with less salt, getting regular physical activity, maintaining a healthy weight, and taking prescribed anti-hypertensive medicines like Telmisartan or Amlodipine.",
                hi: "बीपी प्रबंधन में अक्सर कम नमक वाला हृदय-स्वस्थ आहार खाना, नियमित शारीरिक गतिविधि करना, स्वस्थ वजन बनाए रखना और टेल्मिसार्टन या एम्लोडिपिन जैसी निर्धारित एंटी-हाइपरटेंसिव दवाएं लेना शामिल होता है।"
            }
        },
        {
            id: "stomach",
            name: {
                en: "Stomach Problems",
                hi: "पेट की समस्याएं"
            },
            title: {
                en: "Stomach & Digestion Issues",
                hi: "पेट और पाचन संबंधी समस्याएं"
            },
            whatIs: {
                en: "Common stomach problems include acidity, gas, indigestion, and GERD. These are often caused by unhealthy eating habits, stress, or infections.",
                hi: "पेट की सामान्य समस्याओं में एसिडिटी, गैस, अपच और गर्ड (GERD) शामिल हैं। ये अक्सर अस्वास्थ्यकर खाने की आदतों, तनाव या संक्रमण के कारण होते हैं।"
            },
            symptoms: {
                en: ["Burning sensation in chest (Heartburn)", "Bloating and gas", "Nausea or vomiting", "Abdominal pain", "Loss of appetite"],
                hi: ["छाती में जलन (Heartburn)", "पेट फूलना और गैस", "जी मिचलाना या उल्टी", "पेट में दर्द", "भूख में कमी"]
            },
            avoid: {
                en: ["Spicy and heavily oiled food", "Late-night heavy meals", "Carbonated soft drinks", "Citrus fruits (if acidic)", "Smoking and alcohol"],
                hi: ["मसालेदार और अधिक तेल वाला भोजन", "देर रात भारी भोजन", "कार्बोनेटेड कोल्ड ड्रिंक्स", "खट्टे फल (यदि एसिडिक हों)", "धूम्रपान और शराब"]
            },
            treatment: {
                en: "Treatment usually involves antacids, proton pump inhibitors (like Pantoprazole or Rabeprazole), and dietary changes. Drinking plenty of water and eating fiber-rich foods helps.",
                hi: "उपचार में आमतौर पर एंटासिड्स, प्रोटॉन पंप इनहिबिटर (जैसे पैंटोप्राज़ोल या रेबेप्राज़ोल) और आहार में बदलाव शामिल होते हैं। खूब पानी पीना और फाइबर युक्त भोजन खाना मदद करता है।"
            }
        },
        {
            id: "heart",
            name: {
                en: "Heart Health",
                hi: "हृदय स्वास्थ्य"
            },
            title: {
                en: "Cardiovascular Health",
                hi: "हृदय (Cardiovascular) स्वास्थ्य"
            },
            whatIs: {
                en: "Heart health refers to the well-being of your heart function. Cardiovascular diseases (CVDs) are the leading cause of death globally. Keeping the heart healthy involves managing risk factors like cholesterol and BP.",
                hi: "हृदय स्वास्थ्य आपके हृदय के कामकाज की भलाई को संदर्भित करता है। हृदय रोग (CVD) विश्व स्तर पर मृत्यु का प्रमुख कारण हैं। हृदय को स्वस्थ रखने में कोलेस्ट्रॉल और बीपी जैसे जोखिम कारकों का प्रबंधन शामिल है।"
            },
            symptoms: {
                en: ["Chest discomfort or pain", "Shortness of breath", "Pain in neck, jaw, or back", "Numbness in limbs", "Irregular heartbeat"],
                hi: ["छाती में बेचैनी या दर्द", "सांस लेने में तकलीफ", "गर्दन, जबड़े या पीठ में दर्द", "हाथ-पैरों में सुन्नता", "अनियमित दिल की धड़कन"]
            },
            avoid: {
                en: ["Saturated and trans fats", "Deep-fried fast foods", "excessive red meat", "Smoking and passive smoking", "Sedentary lifestyle"],
                hi: ["सैचुरेटेड और ट्रांस फैट", "डीप-फ्राइड फास्ट फूड", "अत्यधिक लाल मांस", "धूम्रपान और पैसिव स्मोकिंग", "सुस्त जीवनशैली"]
            },
            treatment: {
                en: "Treatment may involve statins for cholesterol (like Rosuvastatin), blood thinners, and lifestyle modifications like regular cardio exercise and a balanced diet.",
                hi: "उपचार में कोलेस्ट्रॉल के लिए स्टैटिन (जैसे रोसुवास्टेटिन), रक्त को पतला करने वाली दवाएं, और नियमित कार्डियो व्यायाम और संतुलित आहार जैसे जीवनशैली में बदलाव शामिल हो सकते हैं।"
            }
        },
        {
            id: "joint",
            name: {
                en: "Joint & Bone Issues",
                hi: "जोड़ और हड्डी की समस्याएं"
            },
            title: {
                en: "Joint Pain & Bone Health",
                hi: "जोड़ों का दर्द और हड्डियों का स्वास्थ्य"
            },
            whatIs: {
                en: "Joint pain and weak bones can be due to arthritis, calcium deficiency, or aging. Osteoporosis and Osteoarthritis are common conditions affecting mobility.",
                hi: "जोड़ों का दर्द और कमजोर हड्डियां गठिया, कैल्शियम की कमी या उम्र बढ़ने के कारण हो सकती हैं। ऑस्टियोपोरोसिस और ऑस्टियोआर्थराइटिस गतिशीलता को प्रभावित करने वाली सामान्य स्थितियां हैं।"
            },
            symptoms: {
                en: ["Joint stiffness and swelling", "Pain during movement", "Decreased range of motion", "Bone fractures from minor falls", "Back pain"],
                hi: ["जोड़ों में अकड़न और सूजन", "चलते समय दर्द", "गति की सीमा में कमी", "मामूली गिरने से हड्डियों का फ्रैक्चर", "पीठ दर्द"]
            },
            avoid: {
                en: ["High-impact activities if injured", "Inflammatory foods (sugar, refined carbs)", "Excessive caffeine (affects calcium absorption)", "Smoking", "Being overweight"],
                hi: ["चोट लगने पर उच्च प्रभाव वाली गतिविधियां", "सूजन बढ़ाने वाले खाद्य पदार्थ (चीनी, मैदा)", "अत्यधिक कैफीन (कैल्शियम अवशोषण को प्रभावित करता है)", "धूम्रपान", "अधिक वजन होना"]
            },
            treatment: {
                en: "Manage through calcium and Vitamin D supplements, pain relievers (Aceclofenac/Paracetamol), physiotherapy, and weight management.",
                hi: "कैल्शियम और विटामिन डी की खुराक, दर्द निवारक (एसेक्लोफेनाक/पैरासिटामोल), फिजियोथेरेपी और वजन प्रबंधन के माध्यम से प्रबंधन करें।"
            }
        },
        {
            id: "infection",
            name: {
                en: "Common Infections",
                hi: "सामान्य संक्रमण"
            },
            title: {
                en: "Viral & Bacterial Infections",
                hi: "वायरल और बैक्टीरियल संक्रमण"
            },
            whatIs: {
                en: "Infections are caused by organisms — as bacteria, viruses, fungi or parasites. Common examples include flu, cold, typhoid, and urinary tract infections.",
                hi: "संक्रमण जीवों के कारण होते हैं - जैसे बैक्टीरिया, वायरस, कवक या परजीवी। सामान्य उदाहरणों में फ्लू, सर्दी, टाइफाइड और मूत्र पथ के संक्रमण शामिल हैं।"
            },
            symptoms: {
                en: ["Fever and chills", "Cough and sore throat", "Fatigue and body ache", "Nausea or diarrhea", " burning sensation while urinating"],
                hi: ["बुखार और ठंड लगना", "खांसी और गले में खराश", "थकान और शरीर में दर्द", "जी मिचलाना या दस्त", "पेशाब करते समय जलन"]
            },
            avoid: {
                en: ["Close contact with sick people", "Sharing personal items", "Eating unhygienic street food", "Drinking unsafe water", "Touching face with dirty hands"],
                hi: ["बीमार लोगों के साथ निकट संपर्क", "व्यक्तिगत वस्तुओं को साझा करना", "अस्वछ स्ट्रीट फूड खाना", "असुरक्षित पानी पीना", "गंदे हाथों से चेहरे को छूना"]
            },
            treatment: {
                en: "Treatment depends on the cause: Antibiotics for bacteria (like Azithromycin, Cefixime), Antivirals for viruses, and supportive care like rest and hydration.",
                hi: "उपचार कारण पर निर्भर करता है: बैक्टीरिया के लिए एंटीबायोटिक्स (जैसे एज़िथ्रोमाइसिन, सेफिक्साइम), वायरस के लिए एंटीवायरल, और आराम और हाइड्रेशन जैसी सहायक देखभाल।"
            }
        }
    ];

    // --------------------------------------------------
    // DOM ELEMENTS
    // --------------------------------------------------
    const diseaseListEl = document.getElementById('disease-list');
    const detailViewEl = document.getElementById('disease-detail-view');
    const btnEnglish = document.getElementById('btn-english');
    const btnHindi = document.getElementById('btn-hindi');

    // State
    let currentLang = 'en'; // 'en' or 'hi'
    let selectedDiseaseId = null;

    // --------------------------------------------------
    // INITIALIZATION
    // --------------------------------------------------

    // Render Sidebar List
    function renderSidebar() {
        diseaseListEl.innerHTML = '';
        diseaseData.forEach(disease => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.className = `disease-btn ${selectedDiseaseId === disease.id ? 'active' : ''}`;
            btn.innerText = disease.name[currentLang];
            btn.onclick = () => selectDisease(disease.id);
            li.appendChild(btn);
            diseaseListEl.appendChild(li);
        });
    }

    // Render Detail View
    function renderDetailView() {
        if (!selectedDiseaseId) {
            // Keep placeholder or do nothing
            return;
        }

        const data = diseaseData.find(d => d.id === selectedDiseaseId);
        if (!data) return;

        // Populate Content
        const contentHTML = `
            <h2 class="disease-title">${data.title[currentLang]}</h2>
            
            <div class="disease-section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                ${currentLang === 'en' ? 'What is this?' : 'यह क्या है?'}
            </div>
            <p class="disease-text">${data.whatIs[currentLang]}</p>

            <div class="disease-section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                ${currentLang === 'en' ? 'Common Symptoms' : 'सामान्य लक्षण'}
            </div>
            <ul class="symptom-list">
                ${data.symptoms[currentLang].map(item => `<li>${item}</li>`).join('')}
            </ul>

            <div class="disease-section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                </svg>
                ${currentLang === 'en' ? 'What to Avoid' : 'क्या परहेज करें'}
            </div>
            <ul class="avoid-list">
                ${data.avoid[currentLang].map(item => `<li>${item}</li>`).join('')}
            </ul>

            <div class="disease-section-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                ${currentLang === 'en' ? 'General Treatment Awareness' : 'सामान्य उपचार जागरूकता'}
            </div>
            <div class="treatment-box">
                <p>${data.treatment[currentLang]}</p>
            </div>

            <div class="medical-note">
                <p>
                    <strong>${currentLang === 'en' ? 'Important Medical Note:' : 'महत्वपूर्ण चिकित्सा नोट:'}</strong> 
                    ${currentLang === 'en' ? 'Medicines should be taken only as advised by a qualified doctor.' : 'दवाएं केवल एक योग्य चिकित्सक की सलाह के अनुसार ही ली जानी चाहिए।'}
                </p>
            </div>
        `;

        // Update DOM with Animation Reset
        detailViewEl.style.opacity = '0';
        setTimeout(() => {
            detailViewEl.innerHTML = contentHTML;
            detailViewEl.style.animation = 'none';
            detailViewEl.offsetHeight; /* trigger reflow */
            detailViewEl.style.animation = 'fadeIn 0.5s forwards';
        }, 50);
    }

    // Function to handle disease selection
    function selectDisease(id) {
        selectedDiseaseId = id;
        renderSidebar(); // Update active state
        renderDetailView();
    }

    // Initialize
    renderSidebar();

    // --------------------------------------------------
    // EVENT LISTENERS
    // --------------------------------------------------

    // Language Toggle
    btnEnglish.addEventListener('click', () => {
        if (currentLang !== 'en') {
            currentLang = 'en';
            btnEnglish.classList.add('active');
            btnHindi.classList.remove('active');
            renderSidebar(); // Update list language
            renderDetailView(); // Update content language
        }
    });

    btnHindi.addEventListener('click', () => {
        if (currentLang !== 'hi') {
            currentLang = 'hi';
            btnHindi.classList.add('active');
            btnEnglish.classList.remove('active');
            renderSidebar(); // Update list language
            renderDetailView(); // Update content language
        }
    });

    // Default Selection (Optional: Select first item)
    if (diseaseData.length > 0) {
        selectDisease(diseaseData[0].id);
    }
});
