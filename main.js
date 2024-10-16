// Starting date: November 1st, 2022
const startDate = new Date('2022-11-01');

// Function to calculate the difference between the start date and today
function calculateDaysSince() {
    const today = new Date();
    const timeDifference = today - startDate; // difference in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // convert to days

    return daysDifference;
}

// Display the result
document.getElementById('countDown').textContent = `${calculateDaysSince()} days`;
