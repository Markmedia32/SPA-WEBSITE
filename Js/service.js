document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const dropdownContent = document.getElementById('dropdown-content');

    menuBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown menu when clicking outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    });
});
