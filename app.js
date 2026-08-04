/* ===== CloudAmaze Mini CRM — app.js ===== */
'use strict';

/* ---------- Company Logo ---------- */
const COMPANY_LOGO = 'data:image/png;base64,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';

const COMPANY_LOGO_TEXT = 'CA';

/* ---------- State ---------- */
let leads = [];
let quotations = [];
let purchaseOrders = [];
let vendors = [];
let renewals = [];
let users = [];
let currentView = 'dashboard';
let currentUser = null;
let dataListenersStarted = false;

/* ---------- Company letterhead ---------- */
const COMPANY = {
  name: 'CloudAmaze India Pvt Ltd.',
  addressLines: ['Plot No. 4, 1st Floor, Veer Savarkar Block, Shakarpur, East Delhi – 110092'],
  email: 'sanjay@cloudamaze.in',
  phones: '7011866466 / 9999100378',
  website: 'www.cloudamaze.in',
  gstin: '07AAMCC1324N1ZI',
  cin: 'U62099UP2024PTC209459',
  pan: 'AAMCC1324N',
  logo: COMPANY_LOGO,
  logoText: COMPANY_LOGO_TEXT,
  bank: {
    beneficiary: 'Cloudamaze India Pvt. Ltd.',
    bankName: 'HDFC Bank Ltd',
    address: 'Khichripur, East Delhi, 110091',
    accountNumber: '50200102363107',
    ifsc: 'HDFC0008610',
    branch: ''
  }
};

/* ---------- Utils ---------- */
const $ = (id) => document.getElementById(id);
const todayISO = () => new Date().toISOString().slice(0, 10);
const fmtCurrency = (n) => '₹' + (Number(n) || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtDate = (iso) => {
  if (!iso) return '—';
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
};
const statusClass = (s) => 'status-' + String(s || '').replace(/[\s+]/g, '-');

function getStatusClass(status) {
  const map = {
    'Quotation Sent': 'status-Quotation-Sent',
    'Due Soon': 'status-Due-Soon',
    'Purchase Order': 'status-PO'
  };
  return map[status] || statusClass(status);
}

function toast(msg, isError = false) {
  const t = $('toast');
  t.textContent = msg;
  t.className = 'toast show' + (isError ? ' error' : '');
  setTimeout(() => (t.className = 'toast'), 2600);
}

function setSyncStatus(state) {
  const pill = $('syncStatus');
  if (state === 'online') {
    pill.className = 'sync-pill online';
    pill.innerHTML = '<span class="sync-dot"></span> Live sync';
  } else if (state === 'error') {
    pill.className = 'sync-pill error';
    pill.innerHTML = '<span class="sync-dot"></span> Connection error';
  } else {
    pill.className = 'sync-pill';
    pill.innerHTML = '<span class="sync-dot"></span> Connecting…';
  }
}

/* ---------- Auto-numbering ---------- */
async function nextNumber(type) {
  const ref = db.collection('counters').doc(type);
  const year = new Date().getFullYear();
  const prefix = type === 'quotation' ? 'QT' : 'PO';
  return db.runTransaction(async (tx) => {
    const doc = await tx.get(ref);
    let seq = 1;
    let storedYear = year;
    if (doc.exists) {
      const data = doc.data();
      storedYear = data.year || year;
      seq = storedYear === year ? (data.seq || 0) + 1 : 1;
    }
    tx.set(ref, { year, seq }, { merge: true });
    return `${prefix}-${year}-${String(seq).padStart(4, '0')}`;
  });
}

/* ---------- Navigation ---------- */
document.querySelectorAll('.nav-item').forEach((btn) => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

const viewTitles = {
  dashboard: 'Dashboard', leads: 'Leads', followups: 'Follow-ups',
  quotations: 'Quotations', purchaseorders: 'Purchase Orders',
  vendors: 'Vendors', renewals: 'Renewals', users: 'Users & Roles'
};

function switchView(view) {
  currentView = view;
  document.querySelectorAll('.nav-item').forEach((b) => b.classList.toggle('active', b.dataset.view === view));
  document.querySelectorAll('.view').forEach((v) => v.classList.toggle('active', v.id === 'view-' + view));
  $('pageTitle').textContent = viewTitles[view];
  renderTopbarActions(view);
  renderCurrentView();
}

function renderTopbarActions(view) {
  const el = $('topbarActions');
  el.innerHTML = '';
  const addBtn = (label, onClick) => {
    const b = document.createElement('button');
    b.className = 'btn primary';
    b.textContent = label;
    b.onclick = onClick;
    el.appendChild(b);
  };
  if (view === 'leads') addBtn('+ Add Lead', () => openLeadModal());
  if (view === 'quotations') addBtn('+ Create Quotation', () => openQuoteModal());
  if (view === 'purchaseorders') addBtn('+ Create PO', () => openPoModal());
  if (view === 'vendors') addBtn('+ Add Vendor', () => openVendorModal());
  if (view === 'renewals') addBtn('+ Add Renewal', () => openRenewalModal());
  if (view === 'users') addBtn('+ Add User', () => openModal('modal-user'));
}

function renderCurrentView() {
  if (currentView === 'dashboard') renderDashboard();
  if (currentView === 'leads') renderLeadsTable();
  if (currentView === 'followups') renderFollowupsTable();
  if (currentView === 'quotations') renderQuotesTable();
  if (currentView === 'purchaseorders') renderPoTable();
  if (currentView === 'vendors') renderVendorsTable();
  if (currentView === 'renewals') renderRenewalsTable();
  if (currentView === 'users') renderUsersTable();
}

/* ---------- Modal helpers ---------- */
function openModal(id) { $(id).classList.add('active'); }
function closeModal(id) { $(id).classList.remove('active'); }
document.querySelectorAll('[data-close]').forEach((el) => {
  el.addEventListener('click', () => closeModal(el.dataset.close));
});
document.querySelectorAll('.modal-overlay').forEach((ov) => {
  ov.addEventListener('click', (e) => { if (e.target === ov) ov.classList.remove('active'); });
});

/* =========================================================
   LEADS
========================================================= */
function openLeadModal(lead = null) {
  $('leadModalTitle').textContent = lead ? 'Edit Lead' : 'Add Lead';
  $('leadId').value = lead ? lead.id : '';
  $('leadCompany').value = lead ? lead.companyName : '';
  $('leadContact').value = lead ? lead.contactPerson : '';
  $('leadMobile').value = lead ? lead.mobile : '';
  $('leadEmail').value = lead ? lead.email || '' : '';
  $('leadCity').value = lead ? lead.city || '' : '';
  $('leadSource').value = lead ? lead.leadSource || 'Website' : 'Website';
  $('leadStatus').value = lead ? lead.status || 'New' : 'New';
  $('leadFollowupDate').value = lead ? lead.nextFollowupDate || '' : '';
  $('leadFollowupNotes').value = lead ? lead.followupNotes || '' : '';
  openModal('modal-lead');
}

$('leadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = $('leadId').value;
  const data = {
    companyName: $('leadCompany').value.trim(),
    contactPerson: $('leadContact').value.trim(),
    mobile: $('leadMobile').value.trim(),
    email: $('leadEmail').value.trim(),
    city: $('leadCity').value.trim(),
    leadSource: $('leadSource').value,
    status: $('leadStatus').value,
    nextFollowupDate: $('leadFollowupDate').value || null,
    followupNotes: $('leadFollowupNotes').value.trim(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  try {
    if (id) {
      await db.collection('leads').doc(id).update(data);
      toast('Lead updated');
    } else {
      data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      await db.collection('leads').add(data);
      toast('Lead added');
    }
    closeModal('modal-lead');
  } catch (err) {
    toast('Error saving lead: ' + err.message, true);
  }
});

async function deleteLead(id) {
  if (!confirm('Delete this lead? This cannot be undone.')) return;
  try {
    await db.collection('leads').doc(id).delete();
    toast('Lead deleted');
  } catch (err) { toast('Error: ' + err.message, true); }
}

function renderLeadsTable() {
  const search = ($('leadSearch').value || '').toLowerCase();
  const statusFilter = $('leadStatusFilter').value;
  const filtered = leads.filter((l) => {
    const matchesSearch = !search || [l.companyName, l.contactPerson, l.city].join(' ').toLowerCase().includes(search);
    const matchesStatus = !statusFilter || l.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const tbody = $('leadsTableBody');
  tbody.innerHTML = filtered.map((l) => `
    <tr>
      <td><strong>${esc(l.companyName)}</strong></td>
      <td>${esc(l.contactPerson)}</td>
      <td>${esc(l.mobile)}</td>
      <td>${esc(l.city || '—')}</td>
      <td>${esc(l.leadSource || '—')}</td>
      <td><span class="status-badge ${getStatusClass(l.status)}">${esc(l.status)}</span></td>
      <td>${l.nextFollowupDate ? fmtDate(l.nextFollowupDate) : '—'}</td>
      <td class="row-actions">
        <button class="btn icon" data-action="edit" data-id="${l.id}">✎</button>
        <button class="btn icon" data-action="delete" data-id="${l.id}">🗑</button>
      </td>
    </tr>`).join('');
  
  tbody.querySelectorAll('[data-action="edit"]').forEach(btn => {
    btn.onclick = () => openLeadModal(leads.find(l => l.id === btn.dataset.id));
  });
  tbody.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.onclick = () => deleteLead(btn.dataset.id);
  });
  
  $('leadsEmptyHint').style.display = filtered.length ? 'none' : 'block';
}

$('leadSearch').addEventListener('input', renderLeadsTable);
$('leadStatusFilter').addEventListener('change', renderLeadsTable);

/* =========================================================
   FOLLOW-UPS
========================================================= */
function renderFollowupsTable() {
  const filter = $('followupFilter').value;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString().slice(0, 10);
  
  let rows = leads.filter((l) => l.nextFollowupDate);
  if (filter === 'due') rows = rows.filter((l) => l.nextFollowupDate <= todayISO);
  if (filter === 'upcoming') rows = rows.filter((l) => l.nextFollowupDate > todayISO);
  rows.sort((a, b) => (a.nextFollowupDate || '').localeCompare(b.nextFollowupDate || ''));

  const tbody = $('followupsTableBody');
  tbody.innerHTML = rows.map((l) => {
    const overdue = l.nextFollowupDate < todayISO;
    return `
    <tr>
      <td><strong>${esc(l.companyName)}</strong></td>
      <td>${esc(l.contactPerson)}</td>
      <td><span class="status-badge ${getStatusClass(l.status)}">${esc(l.status)}</span></td>
      <td style="${overdue ? 'color:var(--danger); font-weight:600;' : ''}">${fmtDate(l.nextFollowupDate)}${overdue ? ' (overdue)' : ''}</td>
      <td>${esc(l.followupNotes || '—')}</td>
      <td class="row-actions"><button class="btn icon" data-action="edit" data-id="${l.id}">✎</button></td>
    </tr>`;
  }).join('');
  
  tbody.querySelectorAll('[data-action="edit"]').forEach(btn => {
    btn.onclick = () => openLeadModal(leads.find(l => l