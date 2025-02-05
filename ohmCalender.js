function generateCalendar() {
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("month-year");
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    monthYear.textContent = `${monthNames[month]} ${year}`;
    calendar.innerHTML = ""






    // ________________________________________________   WRITEE HEREEEE!!!!!!


    // Array for completed and missed days
    const completedDays = [4,5]; // Blue
    const missedDays = [1,2,3]; // Red



     // ________________________________________________               WRITE HEREEEE!!!!!!!





     

    // Fill in the empty cells for days in the previous month
    for (let i = 0; i < firstDay; i++) {
        let emptyCell = document.createElement("div");
        calendar.appendChild(emptyCell);
    }

    // Creating calendar days
    for (let day = 1; day <= daysInMonth; day++) {
        let dayCell = document.createElement("div");
        dayCell.classList.add("day");
        dayCell.textContent = day;

        // Check if the day is in the completed or missed days array and apply styles accordingly
        if (completedDays.includes(day)) {
            dayCell.classList.add("completed"); // Class for completed days (green)
        } else if (missedDays.includes(day)) {
            dayCell.classList.add("missed"); // Class for missed days (red)
        }

        calendar.appendChild(dayCell);
    }
}

generateCalendar();