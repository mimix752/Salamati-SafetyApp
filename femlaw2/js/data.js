const AVOCATS = [
  {id:1, initiale:'AB', nom:'Maître Amina Bensalem', spec_fr:'Droit du travail', spec_en:'Labor law', spec_ar:'قانون العمل', ville:'Casablanca', tags_fr:['Harcèlement','Licenciement','Discrimination'], tags_en:['Harassment','Dismissal','Discrimination'], tags_ar:['تحرش','فصل','تمييز'], tarif:'800', filter:['travail','harcelement'], disponible:true},
  {id:2, initiale:'FI', nom:'Maître Fatima-Zahra Idrissi', spec_fr:'Droit de la famille', spec_en:'Family law', spec_ar:'قانون الأسرة', ville:'Rabat', tags_fr:['Divorce','Garde','Patrimoine'], tags_en:['Divorce','Custody','Estate'], tags_ar:['طلاق','حضانة','ميراث'], tarif:'650', filter:['famille'], disponible:true},
  {id:3, initiale:'NB', nom:'Maître Nadia Benchekroun', spec_fr:'Droit des contrats', spec_en:'Contract law', spec_ar:'قانون العقود', ville:'Casablanca', tags_fr:['Contrats','Négociation','Litiges'], tags_en:['Contracts','Negotiation','Disputes'], tags_ar:['عقود','تفاوض','نزاعات'], tarif:'900', filter:['contrats'], disponible:false},
  {id:4, initiale:'SH', nom:'Maître Sara Hajoui', spec_fr:'Harcèlement professionnel', spec_en:'Professional harassment', spec_ar:'التحرش المهني', ville:'Marrakech', tags_fr:['Harcèlement','Droits RH','Plainte'], tags_en:['Harassment','HR rights','Complaint'], tags_ar:['تحرش','حقوق','شكوى'], tarif:'750', filter:['harcelement','travail'], disponible:true},
  {id:5, initiale:'LM', nom:'Maître Loubna Mansouri', spec_fr:'Droit des affaires', spec_en:'Business law', spec_ar:'قانون الأعمال', ville:'Casablanca', tags_fr:['Entreprise','Contrats','Fusion'], tags_en:['Corporate','Contracts','Merger'], tags_ar:['شركات','عقود','اندماج'], tarif:'1200', filter:['contrats'], disponible:true},
  {id:6, initiale:'HO', nom:'Maître Hakima Oujda', spec_fr:'Droit du travail & Social', spec_en:'Labor & Social law', spec_ar:'قانون العمل والشؤون الاجتماعية', ville:'Fès', tags_fr:['Licenciement','Indemnités','Médiation'], tags_en:['Dismissal','Compensation','Mediation'], tags_ar:['فصل','تعويض','وساطة'], tarif:'600', filter:['travail'], disponible:true},
];

const AI_RESPONSES = {
  fr: {
    harcelement: `En droit marocain, le harcèlement au travail est encadré par le **Code du Travail (art. 40)**. Vous disposez de plusieurs recours :\n\n**Procédure interne** : signalement à la DRH ou médecin du travail\n**Inspection du Travail** : dépôt de plainte formelle\n**Action pénale** : le harcèlement moral est pénalement punissable\n\nVotre employeur a une obligation de protection. Documentez chaque incident avec dates et témoins. Souhaitez-vous que je vous prépare un modèle de mise en demeure ?`,
    discrimination: `La discrimination salariale est interdite par la **loi marocaine (art. 346 du Code du Travail)**.\n\nÉtapes recommandées :\n— Collectez vos bulletins de salaire et comparatifs\n— Demandez une copie de votre fiche de poste officielle\n— Saisissez l'Inspection du Travail sous 3 ans\n\nLa charge de la preuve peut être partagée en matière de discrimination. Avec un abonnement Premium, je peux analyser vos documents en détail.`,
    contrat: `Pour une rupture de contrat, vérifiez :\n\n**Type de contrat** (CDI/CDD/mission)\n**Préavis légal** : 8 jours à 3 mois selon le poste\n**Indemnités** dues selon ancienneté\n**Clause de non-concurrence** à examiner\n\nSi la rupture est abusive, vous pouvez réclamer 1,5 mois par année d'ancienneté. Avez-vous votre contrat sous la main ?`,
    conge: `**Congé maternité au Maroc** :\n\n— Durée légale : **14 semaines** (art. 152 Code du Travail)\n— Indemnité journalière : 100% du salaire via CNSS\n— Protection contre le licenciement pendant la grossesse\n— Allaitement : 1h par jour pendant 1 an\n\nSi votre employeur a violé ces droits, c'est une faute grave. Voulez-vous plus de détails ?`,
    default: `Je comprends votre situation. Pour vous conseiller avec précision, pourriez-vous me donner plus de détails ?\n\nJe peux vous aider sur :\n— Analyse de votre situation juridique\n— Vos droits et recours disponibles\n— Rédaction de lettres et mises en demeure\n— Orientation vers le bon spécialiste\n\nVos échanges restent strictement confidentiels.`
  },
  en: {
    harcelement: `Under Moroccan law, workplace harassment is governed by the **Labor Code (art. 40)**. You have several recourse options:\n\n**Internal procedure**: report to HR or occupational physician\n**Labor Inspectorate**: file a formal complaint\n**Criminal action**: moral harassment is criminally punishable\n\nYour employer has an obligation to protect you. Document each incident with dates and witnesses. Would you like me to prepare a formal notice template?`,
    discrimination: `Salary discrimination is prohibited by **Moroccan law (art. 346 of the Labor Code)**.\n\nRecommended steps:\n— Collect your pay slips and comparisons\n— Request a copy of your official job description\n— Contact the Labor Inspectorate within 3 years\n\nThe burden of proof may be shared in discrimination cases. With a Premium subscription, I can analyze your documents in detail.`,
    contrat: `For a contract termination, verify:\n\n**Contract type** (permanent/fixed-term/freelance)\n**Legal notice**: 8 days to 3 months depending on position\n**Severance pay** based on seniority\n**Non-compete clause** to review\n\nIf the termination is abusive, you can claim 1.5 months per year of seniority. Do you have your contract available?`,
    conge: `**Maternity leave in Morocco**:\n\n— Legal duration: **14 weeks** (art. 152 Labor Code)\n— Daily allowance: 100% of salary via CNSS\n— Protection against dismissal during pregnancy\n— Breastfeeding: 1 hour per day for 1 year\n\nIf your employer has violated these rights, it constitutes serious misconduct. Would you like more details?`,
    default: `I understand your situation. To advise you precisely, could you give me more details?\n\nI can help you with:\n— Analysis of your legal situation\n— Your rights and available recourse\n— Drafting letters and formal notices\n— Referral to the right specialist\n\nYour exchanges remain strictly confidential.`
  },
  ar: {
    harcelement: `بموجب القانون المغربي، يخضع التحرش في مكان العمل **لمدونة الشغل (المادة 40)**. لديك عدة خيارات للتظلم:\n\n**الإجراء الداخلي**: الإبلاغ لإدارة الموارد البشرية أو طبيب العمل\n**مفتشية الشغل**: تقديم شكوى رسمية\n**الدعوى الجنائية**: التحرش النفسي جريمة يعاقب عليها القانون\n\nصاحب العمل ملزم بحمايتك. وثّق كل حادثة بالتواريخ والشهود. هل تريدين أن أعدّ لك نموذج إنذار رسمي؟`,
    discrimination: `التمييز في الأجر محظور بموجب **القانون المغربي (المادة 346 من مدونة الشغل)**.\n\nالخطوات الموصى بها:\n— جمع كشوف الراتب والمقارنات\n— طلب نسخة من بطاقة الوظيفة الرسمية\n— التوجه إلى مفتشية الشغل خلال 3 سنوات\n\nقد يكون عبء الإثبات مشتركاً في قضايا التمييز. مع اشتراك بريميوم يمكنني تحليل وثائقك بالتفصيل.`,
    contrat: `لفسخ العقد، تحققي من:\n\n**نوع العقد** (عقد دائم / محدد المدة / مهمة)\n**الإشعار القانوني**: من 8 أيام إلى 3 أشهر حسب المنصب\n**التعويضات** المستحقة حسب الأقدمية\n**شرط عدم المنافسة** الواجب الفحص\n\nإذا كان الفسخ تعسفياً يمكنك المطالبة بـ 1.5 شهر عن كل سنة أقدمية. هل العقد بين يديك؟`,
    conge: `**إجازة الأمومة في المغرب**:\n\n— المدة القانونية: **14 أسبوعاً** (المادة 152 مدونة الشغل)\n— التعويض اليومي: 100% من الراتب عبر الصندوق الوطني للضمان الاجتماعي\n— الحماية من الفصل أثناء الحمل\n— الرضاعة: ساعة يومياً لمدة سنة\n\nإذا انتهك صاحب العمل هذه الحقوق فهو مخطئ خطأ جسيماً. هل تريدين مزيداً من التفاصيل؟`,
    default: `أفهم وضعك. لأنصحك بدقة، هل يمكنك إعطائي مزيداً من التفاصيل؟\n\nيمكنني مساعدتك في:\n— تحليل وضعك القانوني\n— حقوقك وسبل التظلم المتاحة\n— صياغة الرسائل والإنذارات الرسمية\n— التوجيه نحو المتخصص المناسب\n\nمحادثاتك تبقى سرية تماماً.`
  }
};

// Lawyer dashboard mock data
const LAWYER_REQUESTS = [
  { id:1, initiale:'SM', name:'S. Moukrim', domain_fr:'Harcèlement', domain_en:'Harassment', domain_ar:'تحرش', date:'Aujourd\'hui, 09:12', date_en:'Today, 09:12', date_ar:'اليوم، 09:12', status:'new', urgent:false },
  { id:2, initiale:'KA', name:'K. Alami', domain_fr:'Rupture de contrat', domain_en:'Contract termination', domain_ar:'فسخ عقد', date:'Aujourd\'hui, 07:45', date_en:'Today, 07:45', date_ar:'اليوم، 07:45', status:'urgent', urgent:true },
  { id:3, initiale:'NB', name:'N. Bouazza', domain_fr:'Discrimination salariale', domain_en:'Salary discrimination', domain_ar:'تمييز في الأجر', date:'Hier, 16:30', date_en:'Yesterday, 16:30', date_ar:'أمس، 16:30', status:'pending', urgent:false },
  { id:4, initiale:'HR', name:'H. Rachidi', domain_fr:'Droit de la famille', domain_en:'Family law', domain_ar:'قانون الأسرة', date:'Hier, 11:20', date_en:'Yesterday, 11:20', date_ar:'أمس، 11:20', status:'new', urgent:false },
];

const LAWYER_CLIENTS = [
  { id:1, initiale:'SM', name:'Samira M.', case_fr:'Harcèlement — En cours', case_en:'Harassment — Ongoing', case_ar:'تحرش — جارٍ', active:true },
  { id:2, initiale:'KA', name:'Khadija A.', case_fr:'Contrat — Résolu', case_en:'Contract — Resolved', case_ar:'عقد — محلول', active:false },
  { id:3, initiale:'NB', name:'Nour B.', case_fr:'Discrimination — En cours', case_en:'Discrimination — Ongoing', case_ar:'تمييز — جارٍ', active:true },
  { id:4, initiale:'HR', name:'Hafsa R.', case_fr:'Famille — En cours', case_en:'Family — Ongoing', case_ar:'أسرة — جارٍ', active:true },
  { id:5, initiale:'YE', name:'Yasmine E.', case_fr:'Travail — Résolu', case_en:'Labor — Resolved', case_ar:'عمل — محلول', active:false },
];

const AGENDA_ITEMS = [
  { time:'10:00', name:'Samira M.', type_fr:'Harcèlement', type_en:'Harassment', type_ar:'تحرش', day_fr:'Lun 10', day_en:'Mon 10', day_ar:'الإثنين 10' },
  { time:'14:30', name:'Nour B.', type_fr:'Discrimination', type_en:'Discrimination', type_ar:'تمييز', day_fr:'Mar 11', day_en:'Tue 11', day_ar:'الثلاثاء 11' },
  { time:'11:00', name:'Hafsa R.', type_fr:'Famille', type_en:'Family', type_ar:'أسرة', day_fr:'Mer 12', day_en:'Wed 12', day_ar:'الأربعاء 12' },
];
