// ── STATE ──
let lang = 'fr';
let currentFilter = 'tous';
let isTyping = false;
let t = TRANSLATIONS[lang];

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  applyLang('fr');
  setGreeting();
});

// ── LANGUAGE ──
function applyLang(l) {
  lang = l;
  t = TRANSLATIONS[l];
  document.documentElement.lang = l;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function renderAll() {
  setText('brand1', t.brand);
  setText('tagline1', t.tagline);
  setText('btn-start', t.start);
  setText('btn-login', t.login);
  setText('conf-note', t.confidential_note);
  setText('rs-welcome', t.welcome);
  setText('rs-iam', t.i_am);
  setText('rs-a', t.a);
  setText('rs-choose', t.choose_profile);
  setText('badge-client', t.role_client);
  setText('badge-pro', t.role_pro);
  setText('role-woman-title', t.role_woman_title);
  setText('role-woman-desc', t.role_woman_desc);
  setText('role-lawyer-title', t.role_lawyer_title);
  setText('role-lawyer-desc', t.role_lawyer_desc);
  setText('top-brand', t.brand);
  setText('top-conf', t.session_encrypted);
  setGreeting();
  setText('section-overview', t.overview);
  setText('stat-label-1', t.consultations_avail);
  setText('stat-label-2', t.verified_lawyers);
  setText('section-quick', t.quick_actions);
  setText('action-ai-title', t.consult_ai);
  setText('action-ai-sub', t.ai_sub);
  setText('action-find-title', t.find_lawyer);
  setText('action-find-sub', `12 ${t.find_lawyer_sub}`);
  setText('action-book-title', t.book_appt);
  setText('action-book-sub', t.book_sub);
  setText('action-prem-title', t.go_premium);
  setText('action-prem-sub', t.go_premium_sub);
  setText('section-domains', t.legal_domains);
  setText('d1', t.domain_labor); setText('d2', t.domain_harassment);
  setText('d3', t.domain_contracts); setText('d4', t.domain_discrimination);
  setText('d5', t.domain_property); setText('d6', t.domain_family);
  setText('lawyers-heading-1', t.our_lawyers);
  setText('lawyers-heading-2', t.lawyers_word);
  setText('lawyers-sub', t.lawyers_sub);
  setText('premium-lock-txt', t.premium_lock);
  setAttr('search-input', 'placeholder', t.search_placeholder);
  setText('f-all', t.filter_all); setText('f-labor', t.filter_labor);
  setText('f-harass', t.filter_harass); setText('f-contracts', t.filter_contracts);
  setText('f-family', t.filter_family);
  setText('ai-agent-name', t.ai_name);
  setText('ai-agent-status', t.ai_online);
  setText('chat-encrypted-note', t.chat_encrypted);
  setAttr('chat-input', 'placeholder', t.chat_placeholder);
  setText('sq-1', t.sq_harassment); setText('sq-2', t.sq_discrimination);
  setText('sq-3', t.sq_contract); setText('sq-4', t.sq_maternity);
  setText('sq-5', t.sq_negotiation);
  setText('plans-title-1', t.choose_plan);
  setText('plans-title-2', t.plan_word);
  setText('plans-sub-txt', t.plans_sub);
  setText('pt-women', t.for_women); setText('pt-lawyers', t.for_lawyers);
  setText('plan-essential-badge', t.plan_essential);
  setText('plan-starter-name', t.plan_starter);
  setText('plan-starter-per', t.per_month);
  setText('plan-starter-cta', t.current_plan);
  setText('plan-prem-badge', `✦ ${t.plan_recommended}`);
  setText('plan-prem-name', t.plan_premium);
  setText('plan-prem-per', t.per_month);
  setText('plan-prem-cta', t.cta_premium);
  setText('plan-ann-badge', t.plan_annual);
  setText('plan-ann-name', t.plan_annual_name);
  setText('plan-ann-per', t.per_month_billed);
  setText('plan-ann-cta', t.cta_annual);
  for(let i=1;i<=12;i++) setText(`f${i}`, t[`f${i}`]);
  setText('plan-lawyer-badge', `✦ ${t.lawyer_pro}`);
  setText('plan-lawyer-name', t.professional);
  setText('plan-lawyer-per', t.per_month);
  setText('plan-lawyer-cta', t.cta_lawyer);
  for(let i=1;i<=6;i++) setText(`fa${i}`, t[`fa${i}`]);
  setText('guarantee-txt', t.guarantee.replace('\n','<br/>'));
  setText('section-account', t.my_account);
  setText('si-edit-title', t.edit_profile); setText('si-edit-sub', t.edit_profile_sub);
  setText('si-sub-title', t.my_subscription); setText('si-sub-sub', t.subscription_sub);
  setText('si-hist-title', t.history); setText('si-hist-sub', t.history_sub);
  setText('si-priv-title', t.privacy); setText('si-priv-sub', t.privacy_sub);
  setText('si-notif-title', t.notifications); setText('si-notif-sub', t.notif_sub);
  setText('btn-logout', t.logout);
  setText('nav-label-home', t.nav_home); setText('nav-label-lawyers', t.nav_lawyers);
  setText('nav-label-chat', t.nav_chat); setText('nav-label-plans', t.nav_plans);
  setText('nav-label-profile', t.nav_profile);
  setText('modal-appt-title-1', t.modal_appointment);
  setText('modal-appt-title-2', t.modal_appointment2);
  setText('modal-appt-sub', t.modal_appt_sub);
  setText('label-domain', t.legal_domain);
  setText('label-date', t.desired_date);
  setText('label-describe', t.describe);
  setAttr('textarea-describe', 'placeholder', t.describe_placeholder);
  setText('btn-send-request', t.send_request);
  setText('modal-pay-title-1', t.modal_payment);
  setText('modal-pay-title-2', t.modal_payment2);
  setText('modal-pay-sub', t.payment_sub);
  setText('label-card', t.card_number);
  setText('label-expiry', t.expiry);
  setText('ssl-note-txt', t.ssl_note);
  setText('btn-confirm-pay', t.confirm_pay);
  setText('modal-prof-title-1', t.modal_profile);
  setText('modal-prof-title-2', t.modal_profile2);
  setText('modal-prof-sub', t.profile_sub);
  setText('label-firstname', t.firstname);
  setText('label-email', t.email_conf);
  setText('label-sector', t.sector);
  for(let i=1;i<=6;i++) setText(`sector-opt-${i}`, t[`sector${i}`]);
  setText('btn-save-profile', t.save);
  renderAvocats(currentFilter);
}

function setText(id, val) { const el=document.getElementById(id); if(el) el.innerHTML=val; }
function setAttr(id, attr, val) { const el=document.getElementById(id); if(el) el.setAttribute(attr,val); }

// ── SCREENS ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goToApp() { showScreen('mainApp'); setGreeting(); }

function setGreeting() {
  if(!t) return;
  const h = new Date().getHours();
  const g = h<12?t.good_morning:h<18?t.good_afternoon:t.good_evening;
  setText('greetingTime', g);
}

// ── TABS ──
function switchTab(name) {
  document.querySelectorAll('.tab').forEach(tb=>tb.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  document.getElementById('nav-'+name).classList.add('active');
}

// ── AVOCATS ──
function renderAvocats(filter='tous', search='') {
  currentFilter = filter;
  const list = document.getElementById('avocatsList');
  if(!list) return;
  const filtered = AVOCATS.filter(a=>{
    const matchF = filter==='tous' || a.filter.includes(filter);
    const matchS = !search || a.nom.toLowerCase().includes(search.toLowerCase());
    return matchF && matchS;
  });
  const specKey=`spec_${lang}`, tagsKey=`tags_${lang}`;
  list.innerHTML = filtered.map(a=>`
    <div class="avocat-card">
      <div class="ac-top">
        <div class="ac-avatar">${a.initiale}</div>
        <div class="ac-info">
          <div class="ac-name">${a.nom}</div>
          <div class="ac-spec">${a[specKey]}</div>
          <div class="ac-city">${a.ville} · <span style="color:${a.disponible?'#6dbe7a':'var(--muted)'}">${a.disponible?t.available:t.busy}</span></div>
        </div>
        <div class="ac-verified">&#10003;</div>
      </div>
      <div class="ac-tags">${a[tagsKey].map(tg=>`<div class="ac-tag">${tg}</div>`).join('')}</div>
      <div class="ac-footer">
        <div class="ac-rate">${a.tarif} <span>MAD/h</span></div>
        <button class="ac-btn" onclick="openModal('rdvModal')">${t.contact}</button>
      </div>
    </div>
  `).join('');
}

function setFilter(el, filter) {
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  renderAvocats(filter, document.getElementById('search-input').value);
}

function filterAvocats(val) { renderAvocats(currentFilter, val); }

// ── CHAT ──
function autoResize(el) { el.style.height='auto'; el.style.height=Math.min(el.scrollHeight,100)+'px'; }

function sendSuggested(el) {
  document.getElementById('chat-input').value = el.textContent.trim();
  sendMessage();
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if(!msg || isTyping) return;
  input.value=''; input.style.height='auto';
  addMessage(msg,'user');
  document.getElementById('suggestedQs').style.display='none';
  isTyping=true;
  const typingEl=addTyping();
  setTimeout(()=>{ typingEl.remove(); isTyping=false; addMessage(getAIResponse(msg),'ai'); }, 1000+Math.random()*800);
}

function getAIResponse(msg) {
  const m=msg.toLowerCase(); const r=AI_RESPONSES[lang];
  if(m.includes('harcèl')||m.includes('harcel')||m.includes('تحرش')||m.includes('harassment')) return r.harcelement;
  if(m.includes('discrimin')||m.includes('salaire')||m.includes('تمييز')||m.includes('salary')) return r.discrimination;
  if(m.includes('contrat')||m.includes('rupture')||m.includes('licenci')||m.includes('عقد')||m.includes('contract')) return r.contrat;
  if(m.includes('congé')||m.includes('maternit')||m.includes('أمومة')||m.includes('maternity')) return r.conge;
  return r.default;
}

function addMessage(text, role) {
  const msgs=document.getElementById('messages');
  const now=new Date().toLocaleTimeString(lang==='ar'?'ar':lang==='en'?'en':'fr',{hour:'2-digit',minute:'2-digit'});
  const div=document.createElement('div');
  div.className=`msg ${role}`;
  div.innerHTML=`<div class="msg-bubble">${text.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br/>')}</div><div class="msg-time">${now}</div>`;
  msgs.appendChild(div); msgs.scrollTop=msgs.scrollHeight;
  return div;
}

function addTyping() {
  const msgs=document.getElementById('messages');
  const div=document.createElement('div');
  div.className='msg ai';
  div.innerHTML=`<div class="msg-bubble"><div class="typing"><span></span><span></span><span></span></div></div>`;
  msgs.appendChild(div); msgs.scrollTop=msgs.scrollHeight;
  return div;
}

// ── PLANS ──
function togglePlan(el, type) {
  document.querySelectorAll('.pt-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('plansFemme').style.display=type==='femme'?'block':'none';
  document.getElementById('plansAvocat').style.display=type==='avocat'?'block':'none';
}

// ── MODALS ──
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(e,id) { if(e.target===document.getElementById(id)) closeModalById(id); }
function closeModalById(id) { document.getElementById(id).classList.remove('open'); }

// ── TOAST ──
function showToast(msgKey) {
  const msg=t[msgKey]||msgKey;
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'), 2800);
}

// ── LOGOUT ──
function logout() { showScreen('landing'); }
