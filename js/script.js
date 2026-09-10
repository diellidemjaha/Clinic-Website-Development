// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------
    // Current Year in Footer
    // --------------------------------

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // --------------------------------
    // Appointment Form
    // --------------------------------

    const appointmentForm = document.getElementById("appointmentForm");
    const formMessage = document.getElementById("formMessage");

    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get values from the form
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const department = document.getElementById("department").value;
        const preferredDate = document.getElementById("preferredDate").value;

        // Simple validation
        if (
            fullName === "" ||
            email === "" ||
            phone === "" ||
            department === "" ||
            preferredDate === ""
        ) {
            formMessage.innerHTML = `
                <div class="alert alert-danger">
                    <i class="bi bi-exclamation-circle me-2"></i>
                    Please fill in all required fields.
                </div>
            `;

            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.innerHTML = `
                <div class="alert alert-danger">
                    <i class="bi bi-exclamation-circle me-2"></i>
                    Please enter a valid email address.
                </div>
            `;

            return;
        }

        // Show success message
        formMessage.innerHTML = `
            <div class="alert alert-success">
                <i class="bi bi-check-circle me-2"></i>
                Thank you! Your appointment request has been received.
            </div>
        `;

        // Clear the form
        appointmentForm.reset();
    });


    // --------------------------------
    // Prevent selecting a past date
    // --------------------------------

    const dateInput = document.getElementById("preferredDate");

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;


    // --------------------------------
    // Close mobile navbar after clicking
    // --------------------------------

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("mainNavbar");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                const navbar = bootstrap.Collapse.getInstance(navbarCollapse);

                if (navbar) {
                    navbar.hide();
                }
            }
        });
    });

});
