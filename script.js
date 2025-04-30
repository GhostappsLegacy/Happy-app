document.addEventListener('DOMContentLoaded', () => {
    const listView = document.getElementById('listView');
    const detailView = document.getElementById('detailView');
    const backButton = document.getElementById('backButton');
    const appItems = document.querySelectorAll('.app-list li[data-appid]'); // Select only items with data-appid

    // Function to switch views
    function showView(viewToShow) {
        listView.classList.remove('active');
        detailView.classList.remove('active');

        if (viewToShow === 'list') {
            listView.classList.add('active');
        } else if (viewToShow === 'detail') {
            detailView.classList.add('active');
            // Potentially load specific app data here in a real app
            // For now, it just shows the static detail view structure
            window.scrollTo(0, 0); // Scroll to top when showing detail view
        }
    }

    // Event listeners for app items
    appItems.forEach(item => {
        item.addEventListener('click', () => {
            const appId = item.getAttribute('data-appid');
            console.log(`Navigating to detail for app: ${appId}`); // For debugging
            // In a real app, you'd use appId to fetch/display correct detail data
            showView('detail');
        });
        // Add simple active state for visual feedback on tap
        item.addEventListener('touchstart', () => item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)', { passive: true });
        item.addEventListener('touchend', () => setTimeout(() => item.style.backgroundColor = '', 100)); // Reset bg quickly
    });

    // Event listener for back button
    if (backButton) {
        backButton.addEventListener('click', () => {
            showView('list');
        });
    }

    // Initial setup: Show the list view by default
    // The 'active' class is already set in HTML for the list view,
    // but this ensures JS control if HTML is modified.
    showView('list');

    // Basic toggle switch interaction (visual only)
    const toggleSwitches = document.querySelectorAll('.toggle-switch');
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('on');
        });
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 2) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load
  });
