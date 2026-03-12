
function loadComponents() {
    // This workaround loads the header and the footer, 
    // and insert it into the proper divs (based on their IDs)
    // to avoid duplication across multiple pages.
    
    header = `
    <header>
    <nav>
        <a href="index.html">
            <div class="logo">
               <img src="images/logo.png" alt="Conference Logo" height="60px">
               <span class="logo-text">The Next Frontier in Medical Data 2026</span>
            </div>
        </a>
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About & Venue</a></li>
            <li><a href="schedule.html">Programme</a></li>
            <li><a href="dates.html">Important Dates</a></li>
            <li><a href="committee.html">Committee</a></li>
            <li><a href="registration.html" class="link-btn">Registration</a></li>
        </ul>
    </nav>
    <div id='menu' class='box-icon'><i class='bx bx-menu'></i></div>
    </header>
    `

    footer = `
    <footer>
        <p>© 2026 The Next Frontier in Medical Data. Website template by <a href="https://github.com/nahimsouza/conference-website/" target="_blank">nahimsouza</a>.</p>
    </footer>
    `

    document.getElementById('header').innerHTML = header;

    // responsive menu — attach BEFORE footer so a missing #footer can't break navigation
    document.querySelector('#menu').addEventListener('click', ()=>{
        document.querySelector('nav ul').classList.toggle('showmenu');
    });

    const footerEl = document.getElementById('footer');
    if (footerEl) footerEl.innerHTML = footer;

}

function markLastRowSpeakers() {
    const grid = document.querySelector('.speakers-grid');
    if (!grid) return;
    const cards = grid.querySelectorAll('.speaker-card');
    if (!cards.length) return;

    cards.forEach(c => c.classList.remove('last-row'));

    let lastTop = -1;
    const rows = [];
    let currentRow = [];
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (lastTop !== -1 && Math.abs(top - lastTop) > 5) {
            rows.push(currentRow);
            currentRow = [];
        }
        currentRow.push(card);
        lastTop = top;
    });
    if (currentRow.length) rows.push(currentRow);

    if (rows.length > 1) {
        rows[rows.length - 1].forEach(card => card.classList.add('last-row'));
    }
}

function setupSpeakerTapToggle() {
    const cards = document.querySelectorAll('.speaker-card');
    if (!cards.length) return;

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't toggle if clicking a link
            if (e.target.closest('a')) return;

            const wasActive = this.classList.contains('bio-active');
            // Close all open bios
            cards.forEach(c => c.classList.remove('bio-active'));
            // Toggle the clicked one
            if (!wasActive) {
                this.classList.add('bio-active');
            }
        });
    });

    // Close bio when tapping outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.speaker-card')) {
            cards.forEach(c => c.classList.remove('bio-active'));
        }
    });
}

window.onload = function() {
    loadComponents();
    markLastRowSpeakers();
    setupSpeakerTapToggle();
};
window.addEventListener('resize', markLastRowSpeakers);
