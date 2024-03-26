// JavaScript for dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menuBtn");
    var dropdownContent = document.getElementById("dropdown-content");

    // Function to toggle the visibility of the dropdown menu
    function toggleDropdown() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    }

    // Event listener for the menu button click
    menuBtn.addEventListener("click", toggleDropdown);

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            }
        }
    }
});
