// Starting date: November 1st, 2022
const startDate = new Date('2022-11-01T00:00:00');

// Function to calculate the difference between the start date and today
function calculateTimeSince() {
    const today = new Date();
    
    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();
    let days = today.getDate() - startDate.getDate();

    // Adjust if negative days or months
    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Last day of previous month
        days += previousMonth.getDate();
    }
    
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
}

// Display the result
const timeSince = calculateTimeSince();
document.getElementById('countDown').textContent = 
    `${timeSince.years} years, ${timeSince.months} months, and ${timeSince.days} days.`;

// Get the button element
const toggleButton = document.getElementById('modeToggle');

// Add event listener for the button click
toggleButton.addEventListener('click', function() {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('light-mode');

    // Toggle the dark-mode class on the button to change its style
    toggleButton.classList.toggle('light-mode');
});
