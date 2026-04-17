// Role selector toggle login
const roleButtons = document.querySelectorAll(".role-selector button");

roleButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        // Remove active from all
        roleButtons.forEach(btn => {
            btn.classList.remove("active-role");
            btn.classList.add("text-muted");
        });

        // Add active to clicked
        button.classList.add("active-role");
        button.classList.remove("text-muted");
    });
});

// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const toggleIcon = togglePassword.querySelector("i");

togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.getAttribute("type") === "password";

    // Toggle input type
    passwordInput.setAttribute(
        "type",
        isPassword ? "text" : "password"
    );

    // Toggle icon
    toggleIcon.classList.toggle("bi-eye");
    toggleIcon.classList.toggle("bi-eye-slash");
});



document.addEventListener('DOMContentLoaded', function() {
    // Handling form submission visually for the prototype
    const resetForm = document.getElementById('resetForm');
    
    if(resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Grab the button to show a loading state
            const btn = this.querySelector('button[type="submit"]');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
            btn.disabled = true;
            
            // Simulate API Call
            setTimeout(() => {
                btn.innerHTML = '<i class="bi bi-check-circle me-2"></i> Link Sent!';
                btn.classList.replace('btn-teal', 'btn-success');
                
                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.classList.replace('btn-success', 'btn-teal');
                    btn.disabled = false;
                    resetForm.reset();
                }, 3000);
            }, 1500);
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    
    // Interaction for the "Resend email" button
    const resendBtn = document.getElementById('resendBtn');
    
    if (resendBtn) {
        resendBtn.addEventListener('click', function() {
            const originalText = this.innerText;
            
            // Show loading state
            this.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
            this.disabled = true;
            this.style.opacity = '0.8';
            
            // Simulate network request (1.5 seconds)
            setTimeout(() => {
                // Show success state
                this.innerHTML = '<i class="bi bi-check2 me-2"></i> Email Sent!';
                this.classList.replace('btn-teal', 'btn-success');
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    this.innerText = originalText;
                    this.classList.replace('btn-success', 'btn-teal');
                    this.disabled = false;
                    this.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }
});


