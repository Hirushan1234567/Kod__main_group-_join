const i18n = {
    en: { adminMenu: "Admin Panel", loginTitle: "System Login", btnlogin: "Authenticate", lblWhatsapp: "WhatsApp Number", lblGmail: "Gmail Address", lblUsername: "Username", welcomeTxt: "Access Granted,", btnInterviewGroup: "💬 Kod Interview Group", btnMainGroupLocked: "🔒 Main KOD group  (Locked)", btnMainGroupOpen: "🔓 Main KOD group ", adminTitle: "Admin Panel", lblManageUsers: "Registered Database:", btnBack: "Back", chooseAction: "Select Execution:", btnClose: "Close", btnBlock: "Block Entity", btnUnblock: "Unblock Entity", btnGrantAdmin: "Grant Clearance", btnRevokeAdmin: "Revoke Clearance", grantPermission: "Grant Access", revokePermission: "Revoke Access", btnDeleteUser: "Delete User", msgBlocked: "Account Blocked. Access Denied.", msgFillAll: "Fill all mandatory fields.", msgInvalidPhone: "Invalid WhatsApp Number.", msgInvalidEmail: "Invalid Gmail Address." },
    si: { adminMenu: "ඇඩ්මින් පැනලය", loginTitle: "ලොගින් වන්න", btnlogin: "ඇතුල් වන්න", lblWhatsapp: "WhatsApp අංකය", lblGmail: "Gmail ලිපිනය", lblUsername: "පරිශීලක නාමය", welcomeTxt: "සාදරයෙන් පිළිගනිමු,", btnInterviewGroup: "💬 සම්මුඛ පරීක්ෂණ සමූහය", btnMainGroupLocked: "🔒 ප්‍රධාන සමූහය (අගුළු දමා ඇත)", btnMainGroupOpen: "🔓 ප්‍රධාන සමූහය", adminTitle: "ඇඩ්මින් පැනලය", lblManageUsers: "ලියාපදිංචි පරිශීලකයින්:", btnBack: "ආපසු", chooseAction: "ක්‍රියාමාර්ගයක් තෝරන්න:", btnClose: "වසා දමන්න", btnBlock: "බ්ලොක් කරන්න", btnUnblock: "බ්ලොක් ඉවත් කරන්න", btnGrantAdmin: "ඇඩ්මින් දෙන්න", btnRevokeAdmin: "ඇඩ්මින් ඉවත් කරන්න", grantPermission: "ප්‍රවේශය දෙන්න", revokePermission: "ප්‍රවේශය ඉවත් කරන්න", btnDeleteUser: "මකන්න", msgBlocked: "ඔබගේ ගිණුම බ්ලොක් කර ඇත.", msgFillAll: "සියලුම විස්තර පුරවන්න.", msgInvalidPhone: "නිවැරදි WhatsApp අංකයක් ඇතුළත් කරන්න.", msgInvalidEmail: "නිවැරදි Gmail ලිපිනයක් ඇතුළත් කරන්න." },
    ta: { adminMenu: "நிர்வாக குழு", loginTitle: "கணினி உள்நுழைவு", btnlogin: "உள்ளே நுழை", lblWhatsapp: "WhatsApp எண்", lblGmail: "Gmail முகவரி", lblUsername: "பயனர் பெயர்", welcomeTxt: "அணுகல் வழங்கப்பட்டது,", btnInterviewGroup: "💬 நேர்காணல் வலைப்பின்னல்", btnMainGroupLocked: "🔒 முதன்மை வலைப்பின்னல் (பூட்டப்பட்டுள்ளது)", btnMainGroupOpen: "🔓 முதன்மை வலைப்பின்னல்", adminTitle: "நிர்வாக குழு", lblManageUsers: "பதிவுசெய்யப்பட்ட தரவுத்தளம்:", btnBack: "பின் செல்", chooseAction: "செயலைத் தேர்ந்தெடு:", btnClose: "மூடு", btnBlock: "தடு", btnUnblock: "தடுப்பை நீக்கு", btnGrantAdmin: "நிர்வாக அனுமதி அளி", btnRevokeAdmin: "நிர்வாக அனுமதியைத் ரத்துசெய்", grantPermission: "அணுகலை வழங்கு", revokePermission: "அணுகலைத் ரத்துசெய்", btnDeleteUser: "நீக்கு", msgBlocked: "கணக்கு தடைசெய்யப்பட்டுள்ளது. அணுகல் மறுக்கப்பட்டது.", msgFillAll: "அனைத்து புலங்களையும் நிரப்பவும்.", msgInvalidPhone: "செல்லுபடியாகும் WhatsApp எண்.", msgInvalidEmail: "செல்லுபடியாகும் Gmail முகவரி." }
};

let currentLang = 'si';
let selectedUserForAction = null;

let usersDB = JSON.parse(localStorage.getItem('app_users_db')) || [
    { username: "shan00", whatsapp: "94752601225", gmail: "shan00@gmail.com", isAdmin: true, isOwner: true, isBlocked: false, hasPermission: true }
];

function saveDB() { localStorage.setItem('app_users_db', JSON.stringify(usersDB)); }

function toggleTheme() {
    const body = document.body;
    if (body.getAttribute("data-theme") === "dark") { body.setAttribute("data-theme", "light"); }
    else { body.setAttribute("data-theme", "dark"); }
}

function toggleMenu() {
    const menu = document.getElementById('menu-dropdown');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

const _k = "46df05bcbce7f84c2544887d9f731db1d91417525631c7f9c0a7fda00e29d86b";

async function _h(t) {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
}

function changeLanguage() {
    currentLang = document.getElementById('lang-select').value;
    const t = i18n[currentLang];
    document.getElementById('admin-menu-btn').innerText = t.adminMenu;
    document.getElementById('login-title').innerText = t.loginTitle;
    document.getElementById('btn-login').innerText = t.btnlogin;
    document.getElementById('lbl-whatsapp').innerText = t.lblWhatsapp;
    document.getElementById('lbl-gmail').innerText = t.lblGmail;
    document.getElementById('lbl-username').innerText = t.lblUsername;
    document.getElementById('welcome-txt').innerText = t.welcomeTxt;
    document.getElementById('admin-title').innerText = t.adminTitle;
    document.getElementById('lbl-manage-users').innerText = t.lblManageUsers;
    document.getElementById('btn-back').innerText = t.btnBack;
    document.getElementById('lbl-choose-action').innerText = t.chooseAction;
    document.getElementById('btn-action-close').innerText = t.btnClose;
    renderGroups();
}

function loginUser() {
    const whatsapp = document.getElementById('whatsapp-input').value.trim();
    const gmail = document.getElementById('gmail-input').value.trim();
    const username = document.getElementById('username-input').value.trim();
    const t = i18n[currentLang];
    if (whatsapp === "" || gmail === "" || username === "") { alert(t.msgFillAll); return; }
    
    if (!/^\+?\d{9,12}$/.test(whatsapp)) { alert(t.msgInvalidPhone); return; }
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(gmail)) { alert(t.msgInvalidEmail); return; }
    
    let existingUser = usersDB.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (username.toLowerCase() === 'shan00') {
        if (!existingUser) { existingUser = { username: "shan00", whatsapp, gmail, isAdmin: true, isOwner: true, isBlocked: false, hasPermission: true }; usersDB.push(existingUser); saveDB(); }
        else { existingUser.isOwner = true; existingUser.isAdmin = true; existingUser.hasPermission = true; saveDB(); }
    }
    if (existingUser && existingUser.isBlocked) { alert(t.msgBlocked); return; }
    if (!existingUser) { existingUser = { username, whatsapp, gmail, isAdmin: false, isOwner: false, isBlocked: false, hasPermission: false }; usersDB.push(existingUser); saveDB(); }
    localStorage.setItem("current_user", existingUser.username);
    document.getElementById('user-display').innerText = existingUser.username;
    document.getElementById('login-section').classList.remove('active-section');
    document.getElementById('dashboard-section').classList.add('active-section');
    renderGroups();
}

function renderGroups() {
    const t = i18n[currentLang];
    const mainGroupBtn = document.getElementById('btn-main-group');
    document.getElementById('btn-interview-group').innerText = t.btnInterviewGroup;
    const currentUsername = localStorage.getItem("current_user");
    const currentUser = usersDB.find(u => u.username.toLowerCase() === (currentUsername || '').toLowerCase());
    
    const hasAccess = currentUser && (currentUser.hasPermission === true || currentUser.isOwner === true);
    
    if (hasAccess) {
        mainGroupBtn.classList.remove('locked');
        mainGroupBtn.innerText = t.btnMainGroupOpen;
        mainGroupBtn.style.cursor = "pointer";
        mainGroupBtn.style.opacity = "1";
    } else {
        mainGroupBtn.classList.add('locked');
        mainGroupBtn.innerText = t.btnMainGroupLocked;
        mainGroupBtn.style.cursor = "not-allowed";
        mainGroupBtn.style.opacity = "0.7";
    }
}

function handleInterviewGroupClick() {
    const loader = document.getElementById('custom-loader');
    document.getElementById('loader-text').innerText = "Join Code Interview Group...";
    loader.style.display = 'flex';
    setTimeout(() => { loader.style.display = 'none'; window.location.href = "https://chat.whatsapp.com/Ly9AvbVCcF04VwYlaQtDwK?s=cl&p=a&mlu=4&ilr=4"; }, 5000);
}

function handleMainGroupClick() {
    const currentUsername = localStorage.getItem("current_user");
    const currentUser = usersDB.find(u => u.username.toLowerCase() === (currentUsername || '').toLowerCase());
    const hasAccess = currentUser && (currentUser.hasPermission === true || currentUser.isOwner === true);
    const loader = document.getElementById('custom-loader');
    
    if (!hasAccess) {
        document.getElementById('loader-text').innerText = "Access Denied! Contacting Admin...";
        loader.style.display = 'flex';
        setTimeout(() => {
            loader.style.display = 'none';
            const msg = encodeURIComponent(`Hello Admin, I need access to the Main Network.\n\nUsername: ${currentUsername}\nWhatsApp: ${currentUser ? currentUser.whatsapp : 'N/A'}\n\nPlease grant me permission.`);
            window.location.href = `https://wa.me/94752601225?text=${msg}`;
        }, 3000);
        return;
    }
    document.getElementById('loader-text').innerText = "Join Code Main Group...";
    loader.style.display = 'flex';
    setTimeout(() => { loader.style.display = 'none'; window.location.href = "https://chat.whatsapp.com/H3aSfHwy99iLuRSEvD7q7X?s=cl&p=a&mlu=4&ilr=4"; }, 5000);
}

async function openAdminPanel() {
    toggleMenu();
    let passwordInput = prompt("Enter Admin Password:");
    if (!passwordInput) return;
    const inputHash = await _h(passwordInput);
    if (inputHash === _k) {
        document.getElementById('dashboard-section').classList.remove('active-section');
        document.getElementById('login-section').classList.remove('active-section');
        renderUserList();
        document.getElementById('admin-section').classList.add('active-section');
    } else { alert("Incorrect Password! Access Denied."); }
}

function renderUserList(filter = "") {
    const container = document.getElementById('user-list-container');
    container.innerHTML = "";
    let filteredUsers = usersDB.filter(u => u.username.toLowerCase().includes(filter.toLowerCase()) || u.whatsapp.includes(filter));
    filteredUsers.forEach((u) => {
        const originalIndex = usersDB.indexOf(u);
        const item = document.createElement('div');
        item.className = 'user-list-item';
        item.onclick = () => openUserModal(originalIndex);
        let statusBadge = u.isBlocked ? '<span class="user-badge badge-blocked">Blocked</span>' : u.isOwner ? '<span class="user-badge badge-owner">Owner</span>' : u.isAdmin ? '<span class="user-badge badge-admin">Admin</span>' : '<span class="user-badge badge-user">User</span>';
        item.innerHTML = '<span><b>' + u.username + '</b> (' + u.whatsapp + ')</span> ' + statusBadge;
        container.appendChild(item);
    });
}

function filterUserList() { renderUserList(document.getElementById('search-user-input').value); }

function openUserModal(index) {
    selectedUserForAction = usersDB[index];
    document.getElementById('modal-user-name').innerText = selectedUserForAction.username;
    renderModalBtns();
    document.getElementById('user-modal').style.display = 'flex';
}

function renderModalBtns() {
    const t = i18n[currentLang];
    const blockBtn = document.getElementById('btn-action-block');
    const adminBtn = document.getElementById('btn-action-admin');
    const permBtn = document.getElementById('btn-action-permission');
    const deleteBtn = document.getElementById('btn-action-delete');
    if (selectedUserForAction.isOwner) {
        blockBtn.style.display = 'none'; adminBtn.style.display = 'none';
        permBtn.style.display = 'none'; deleteBtn.style.display = 'none';
        document.getElementById('lbl-choose-action').innerText = "Protected Owner Account";
    } else {
        blockBtn.style.display = 'block'; adminBtn.style.display = 'block';
        permBtn.style.display = 'block'; deleteBtn.style.display = 'block';
        document.getElementById('lbl-choose-action').innerText = t.chooseAction;
        blockBtn.innerText = selectedUserForAction.isBlocked ? t.btnUnblock : t.btnBlock;
        adminBtn.innerText = selectedUserForAction.isAdmin ? t.btnRevokeAdmin : t.btnGrantAdmin;
        permBtn.innerText = selectedUserForAction.hasPermission ? t.revokePermission : t.grantPermission;
        deleteBtn.innerText = t.btnDeleteUser;
    }
}

function toggleBlockUser() {
    if (!selectedUserForAction || selectedUserForAction.isOwner) return;
    selectedUserForAction.isBlocked = !selectedUserForAction.isBlocked;
    saveDB(); closeModal(); renderUserList(document.getElementById('search-user-input').value);
}

function toggleAdminUser() {
    if (!selectedUserForAction || selectedUserForAction.isOwner) return;
    selectedUserForAction.isAdmin = !selectedUserForAction.isAdmin;
    saveDB(); closeModal(); renderUserList(document.getElementById('search-user-input').value);
}

function togglePermission() {
    if (!selectedUserForAction) return;
    selectedUserForAction.hasPermission = !selectedUserForAction.hasPermission;
    saveDB(); 
    closeModal(); 
    renderUserList(document.getElementById('search-user-input').value);
    renderGroups();
}

function deleteUser() {
    if (!selectedUserForAction || selectedUserForAction.isOwner) return;
    if (confirm("Delete user: " + selectedUserForAction.username + "?")) {
        usersDB = usersDB.filter(u => u !== selectedUserForAction);
        saveDB(); closeModal(); renderUserList(document.getElementById('search-user-input').value);
    }
}

function closeModal() {
    document.getElementById('user-modal').style.display = 'none';
    selectedUserForAction = null;
}

function backToDashboard() {
    document.getElementById('admin-section').classList.remove('active-section');
    document.getElementById('dashboard-section').classList.add('active-section');
    renderGroups();
}

