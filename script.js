document.addEventListener('DOMContentLoaded', () => {
    const listView = document.getElementById('listView');
    const detailView = document.getElementById('detailView');
    const backButton = document.getElementById('backButton');
    const navbar = document.getElementById('navbar');
    const navbarTitle = document.getElementById('navbarTitle');
    const appItems = document.querySelectorAll('.app-list li[data-appid]');
    const toggleSwitches = document.querySelectorAll('.toggle-switch');

    // Function to switch views
    function showView(viewToShow) {
        listView.classList.remove('active');
        detailView.classList.remove('active');

        if (viewToShow === 'list') {
            listView.classList.add('active');
            backButton.classList.add('hidden');
            navbarTitle.textContent = 'Apps';
        } else if (viewToShow === 'detail') {
            detailView.classList.add('active');
            backButton.classList.remove('hidden');
            navbarTitle.textContent = '';
            window.scrollTo(0, 0); // Scroll to top
        }
    }

    // Scroll blur + separator toggle
    function handleScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 2) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    // App list item click handler
    appItems.forEach(item => {
        item.addEventListener('click', () => {
            const appId = item.getAttribute('data-appid');
            console.log(`Navigating to detail for app: ${appId}`);
            showView('detail');
        });

        // Touch feedback
        item.addEventListener('touchstart', () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }, { passive: true });

        item.addEventListener('touchend', () => {
            setTimeout(() => {
                item.style.backgroundColor = '';
            }, 100);
        });
    });

    // Back button click handler
    if (backButton) {
        backButton.addEventListener('click', () => {
            showView('list');
        });
    }

    // Toggle switches
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('on');
        });
    });

    // Default view on load
    showView('list');
});