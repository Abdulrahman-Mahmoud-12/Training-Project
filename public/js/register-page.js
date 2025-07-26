document.addEventListener("DOMContentLoaded", function () {
    const fields = ["firstname", "lastname", "phone", "birth-date", "gender", "email", "password", "confirm-password", "terms"];

    fields.forEach((fieldId) => {
        const input = document.getElementById(fieldId);
        input.addEventListener("blur", () => validateField(fieldId));
    });

    // Add event listener for form submission
    const form = document.getElementById("register-form");
    form.addEventListener("submit", function (event) {
        if(!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

document.addEventListener("keydown", function (event) {
    if (event.altKey && (event.key === "w" || event.key === "h")) {
        window.location.replace("/welcome");
    }
    if (event.altKey && event.key === "v") {
        window.location.replace("/view");
    }
});


function validateField(fieldId) {
    // Get field id element and its error element
    const value = document.getElementById(fieldId).value;
    const errorEl = document.getElementById(fieldId + "Error");

    errorEl.textContent = "";

    // Validate the Name field
    if (fieldId === "firstname" || fieldId === "lastname") {
        if (value.length <= 2) {
            errorEl.textContent = "Name must be more than 2 characters.";
        }
    }
    // Validate the Phone field
    if (fieldId === "phone") {
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(value)) {
            errorEl.textContent = "Phone number must be 11 digits.";
        }
    }
    // Validate the Birth Date field
    if (fieldId === "birth-date") {
        const birthDate = new Date(value);
        const today = new Date();
        if (birthDate >= today) {
            errorEl.textContent = "Birth date must be in the past.";
        }
    }
    // Validate the Gender field
    if (fieldId === "gender") {
        if (value === "") {
            errorEl.textContent = "Please select Your Gender.";
        }
    }
    // Validate the Email field
    if (fieldId === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorEl.textContent = "Invalid email format.";
        }
    }
    // Validate the Password field
    if (fieldId === "password") {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(value)) {
            errorEl.textContent = "Password must be at least 8 characters, and include letters and numbers.";
        }
    }
    // Validate the Confirm Password field
    if (fieldId === "confirm-password") {
        const passValue = document.getElementById("password").value;
        if (value !== passValue) {
            errorEl.textContent = "Passwords do not match.";
        }
    }
    // Validate the Terms and Conditions field
    if (fieldId === "terms") {
        const termsChecked = document.getElementById("terms").checked;
        if (!termsChecked) {
            errorEl.textContent = "You must agree to the terms and conditions.";
        }
    }
};

function validateForm() {
    const fields = ["firstname", "lastname", "phone", "birth-date", "gender", "email", "password", "confirm-password", "terms"];
    let isValid = true;
    fields.forEach((fieldId) => {
        validateField(fieldId);
        const errorEl = document.getElementById(fieldId + "Error");
        if (errorEl.textContent !== "") {
            isValid = false;
        }
    });
    return isValid;
}