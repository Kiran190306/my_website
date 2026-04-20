// Sample PDF data
const pdfs = [
    {
        title: "Sample Document 1",
        path: "assets/pdf/file1.pdf"
    },
    {
        title: "Sample Document 2",
        path: "assets/pdf/file2.pdf"
    },
    {
        title: "Sample Document 3",
        path: "assets/pdf/file3.pdf"
    }
];

// DOM elements
const searchInput = document.getElementById('search');
const pdfGrid = document.getElementById('pdf-grid');
const modal = document.getElementById('pdf-modal');
const modalTitle = document.getElementById('modal-title');
const pdfIframe = document.getElementById('pdf-iframe');
const loadingSpinner = document.getElementById('loading-spinner');
const downloadBtn = document.getElementById('download-btn');
const openNewTabBtn = document.getElementById('open-new-tab-btn');
const closeModalBtn = document.getElementById('close-modal');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Current PDF data
let currentPdf = null;

// Initialize the app
function init() {
    renderPdfCards();
    setupEventListeners();
    loadDarkModePreference();
}

// Render PDF cards
function renderPdfCards(filter = '') {
    const filteredPdfs = pdfs.filter(pdf =>
        pdf.title.toLowerCase().includes(filter.toLowerCase())
    );

    pdfGrid.innerHTML = filteredPdfs.map(pdf => `
        <div class="pdf-card" data-path="${pdf.path}">
            <svg class="pdf-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            <div class="pdf-title">${pdf.title}</div>
            <button class="view-btn">View PDF</button>
        </div>
    `).join('');

    // Add event listeners to cards
    document.querySelectorAll('.pdf-card').forEach(card => {
        card.addEventListener('click', () => openPdfModal(card.dataset.path));
    });
}

// Open PDF modal
function openPdfModal(pdfPath) {
    currentPdf = pdfs.find(pdf => pdf.path === pdfPath);
    if (!currentPdf) return;

    modalTitle.textContent = currentPdf.title;
    pdfIframe.src = '';
    pdfIframe.style.display = 'none';
    loadingSpinner.style.display = 'flex';
    modal.classList.add('show');

    // Highlight selected card
    document.querySelectorAll('.pdf-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.path === pdfPath);
    });

    // Load PDF after a short delay to show loading
    setTimeout(() => {
        pdfIframe.src = pdfPath;
        pdfIframe.onload = () => {
            loadingSpinner.style.display = 'none';
            pdfIframe.style.display = 'block';
        };
    }, 300);
}

// Close PDF modal
function closePdfModal() {
    modal.classList.remove('show');
    pdfIframe.src = '';
    document.querySelectorAll('.pdf-card').forEach(card => {
        card.classList.remove('selected');
    });
    currentPdf = null;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        renderPdfCards(e.target.value);
    });

    // Modal controls
    closeModalBtn.addEventListener('click', closePdfModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closePdfModal();
    });

    // Download button
    downloadBtn.addEventListener('click', () => {
        if (currentPdf) {
            const link = document.createElement('a');
            link.href = currentPdf.path;
            link.download = currentPdf.title + '.pdf';
            link.click();
        }
    });

    // Open in new tab button
    openNewTabBtn.addEventListener('click', () => {
        if (currentPdf) {
            window.open(currentPdf.path, '_blank');
        }
    });

    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Dark mode functionality
function toggleDarkMode() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    sunIcon.style.display = isDark ? 'block' : 'none';
    moonIcon.style.display = isDark ? 'none' : 'block';
    localStorage.setItem('darkMode', !isDark);
}

function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    sunIcon.style.display = darkMode ? 'none' : 'block';
    moonIcon.style.display = darkMode ? 'block' : 'none';
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);