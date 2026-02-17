
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
            <li><a href="schedule.html">Program</a></li>
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
    document.getElementById('footer').innerHTML = footer;

    // responsive menu
    document.querySelector('#menu').addEventListener('click', ()=>{
        document.querySelector('nav ul').classList.toggle('showmenu');
    });

}

window.onload = loadComponents;
