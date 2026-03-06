// ── STATE ──
let lang = 'fr';
let t = TRANSLATIONS[lang];

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  applyLang('fr');
  renderDashboard();
});

function applyLang(l) {
  lang = l;
  t = TRANSLATIONS[l];
  document.documentElement.lang = l;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function setText(id, val) { const el=document.getElementById(id); if(el) el.innerHTML=val; }
function setAttr(id, attr, val) { const el=document.getElementById(id); if(el) el.setAttribute(attr,val); }

function renderAll() {
  // Landing
  setText('brand1', t.brand);
  setText('tagline1', t.tagline);
  setText('btn-start', t.start);
  setText('btn-login', t.login);
  setText('conf-note-txt', t.confidential_note);
  // Role select
  setText('rs-welcome', t.welcome);
  setText('rs-iam', t.i_am); setText('rs-a', t.a);
  setText('rs-choose', t.choose_profile);
  setText('badge-client', t.role_client); setText('badge-pro', t.role_pro);
  setText('role-woman-title', t.role_woman_title); setText('role-woman-desc', t.role_woman_desc);
  setText('role-lawyer-title', t.role_lawyer_title); setText('role-lawyer-desc', t.role_lawyer_desc);
  // Top bar
  setText('top-brand', t.brand);
  setText('top-role-badge-txt', t.lawyer_plan);
  // Nav
  setText('nav-home-lbl', t.lnav_home); setText('nav-clients-lbl', t.lnav_clients);
  setText('nav-agenda-lbl', t.lnav_agenda); setText('nav-revenus-lbl', t.lnav_revenus);
  setText('nav-profile-lbl', t.lnav_profile);
  // Dashboard
  renderDashboard();
  renderAgenda();
  renderClients();
  renderProfile();
}

// ── SCREENS ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goToApp() {
  showScreen('mainApp');
  renderAll();
}

// ── TABS ──
function switchTab(name) {
  document.querySelectorAll('.tab').forEach(tb=>tb.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  document.getElementById('nav-'+name).classList.add('active');
}

// ── DASHBOARD ──
function renderDashboard() {
  // KPIs
  setText('kpi-requests', '4');
  setText('kpi-clients', '12');
  setText('kpi-revenue', '9 200');
  setText('kpi-rating', '4.9');
  setText('kpi-req-label', t.new_requests||'Nouvelles demandes');
  setText('kpi-cli-label', t.active_clients||'Clientes actives');
  setText('kpi-rev-label', t.month_revenue||'Revenus du mois');
  setText('kpi-rat-label', t.rating||'Note moyenne');
  setText('section-requests', t.recent_requests||'Demandes récentes');

  const statusLabels = { new: t.new_badge||'Nouveau', pending: t.pending_badge||'En attente', urgent: t.urgent_badge||'Urgent' };
  const domainKey = `domain_${lang}`;
  const dateKey = lang==='ar' ? 'date_ar' : lang==='en' ? 'date_en' : 'date';

  const listEl = document.getElementById('requests-list');
  if(!listEl) return;
  listEl.innerHTML = LAWYER_REQUESTS.map(r=>`
    <div class="request-item" onclick="showToast('toast_request_open')">
      <div class="req-avatar">${r.initiale}</div>
      <div class="req-info">
        <div class="req-name">${r.name}</div>
        <div class="req-domain">${r[domainKey]}</div>
      </div>
      <div class="req-meta">
        <div class="req-time">${r[dateKey]}</div>
        <div class="req-badge ${r.status}">${statusLabels[r.status]}</div>
      </div>
    </div>
  `).join('');
  setText('see-all-btn', t.see_all||'Voir tout');
}

// ── AGENDA ──
function renderAgenda() {
  setText('section-agenda', t.upcoming_consult||'Consultations à venir');
  const typeKey = `type_${lang}`;
  const dayKey = lang==='ar'?'day_ar':lang==='en'?'day_en':'day_fr';
  const agendaEl = document.getElementById('agenda-list');
  if(!agendaEl) return;
  agendaEl.innerHTML = AGENDA_ITEMS.map(a=>`
    <div class="agenda-item">
      <div class="agenda-time-block">
        <div class="agenda-time">${a.time}</div>
        <div class="agenda-day">${a[dayKey]}</div>
      </div>
      <div class="agenda-divider"></div>
      <div class="agenda-info">
        <div class="agenda-name">${a.name}</div>
        <div class="agenda-type">${a[typeKey]}</div>
      </div>
      <div class="agenda-dot"></div>
    </div>
  `).join('');
}

// ── REVENUE ──
function renderRevenue() {
  setText('rev-this-month-label', t.this_month||'Ce mois');
  setText('rev-last-month-label', t.last_month||'Mois dernier');
  setText('rev-total-label', t.total_year||'Total année');
  renderChart();
}

function renderChart() {
  const bars = [35,55,40,70,60,85,100];
  const months = ['S','O','N','D','J','F','M'];
  const chartEl = document.getElementById('chart-container');
  if(!chartEl) return;
  const maxH = 80;
  chartEl.innerHTML = `
    <div class="chart-bars">
      ${bars.map((v,i)=>`<div class="chart-bar ${i===6?'active':''}" style="height:${(v/100)*maxH}px"></div>`).join('')}
    </div>
    <div class="chart-labels">
      ${months.map(m=>`<div class="chart-label">${m}</div>`).join('')}
    </div>
  `;
}

// ── CLIENTS ──
function renderClients(search='') {
  const listEl = document.getElementById('clients-list');
  if(!listEl) return;
  const caseKey = `case_${lang}`;
  const filtered = LAWYER_CLIENTS.filter(c=>!search || c.name.toLowerCase().includes(search.toLowerCase()));
  listEl.innerHTML = filtered.map(c=>`
    <div class="client-item" onclick="showToast('toast_client_open')">
      <div class="cli-avatar">${c.initiale}</div>
      <div class="cli-info">
        <div class="cli-name">${c.name}</div>
        <div class="cli-case">${c[caseKey]}</div>
      </div>
      <div class="cli-status ${c.active?'active':'archived'}">${c.active?(t.active_label||'Active'):(t.archived_label||'Archivée')}</div>
    </div>
  `).join('');
}

// ── PROFILE ──
function renderProfile() {
  setText('lp-name-txt', 'Maître A. Bensalem');
  setText('lp-verified-txt', t.verified_badge||'Profil vérifié FemLaw');
  setText('lp-spec-label', t.specialty||'Spécialité');
  setText('lp-spec-val', lang==='ar'?'قانون العمل':lang==='en'?'Labor law':'Droit du travail');
  setText('lp-city-label', t.city_label||'Ville');
  setText('lp-city-val', 'Casablanca');
  setText('lp-rate-label', t.rate_label||'Tarif horaire');
  setText('lp-rate-val', '800 MAD/h');
  setText('lp-section-settings', t.my_account||'Mon compte');
  setText('si-edit-title', t.edit_profile||'Modifier le profil');
  setText('si-edit-sub', t.edit_profile_sub||'Nom, email, spécialité');
  setText('si-sub-title', t.my_subscription||'Mon abonnement');
  setText('si-sub-sub', t.lawyer_plan||'Plan Professionnel');
  setText('si-hist-title', t.history||'Historique');
  setText('si-hist-sub', '12 consultations');
  setText('si-priv-title', t.privacy||'Confidentialité');
  setText('si-priv-sub', t.privacy_sub||'Gérer vos données');
  setText('btn-logout', t.logout||'Se déconnecter');
}

// ── MODALS ──
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(e,id) { if(e.target===document.getElementById(id)) closeModalById(id); }
function closeModalById(id) { document.getElementById(id).classList.remove('open'); }

// ── TOAST ──
function showToast(msgKey) {
  const toastMsgs = {
    toast_saved: t.toast_saved||'Profil mis à jour',
    toast_request_open: lang==='ar'?'تم فتح الطلب':lang==='en'?'Request opened':'Demande ouverte',
    toast_client_open: lang==='ar'?'تم فتح الملف':lang==='en'?'File opened':'Dossier ouvert',
    toast_notif: t.toast_notif||'Notifications configurées',
    toast_privacy: t.toast_privacy||'Confidentialité',
  };
  const msg = toastMsgs[msgKey] || msgKey;
  const el = document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'), 2800);
}

// ── LOGOUT ──
function logout() { showScreen('landing'); }
