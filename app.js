function calculatePercentage(marks) {
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    return (totalMarks / (marks.length * 100)) * 100;
}

function findGrade(percentage) {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

// Function to calculate scholarship amount based on percentage
function calculateScholarship(percentage) {
    if (percentage >= 95) return 70;
    // If percentage is 90 or above, award 50% scholarship
    if (percentage >= 90) return 50;
    // If percentage is between 80 and 89, award 30% scholarship
    if (percentage >= 80) return 30;
    // If percentage is between 70 and 79, award 20% scholarship
    if (percentage >= 70) return 20;
    // If percentage is between 60 and 69, award 10% scholarship
    if (percentage >= 60) return 10;
    // If percentage is below 60, no scholarship is awarded
    return 0;
}

function createTable(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    ['Subject', 'Marks', 'Percentage', 'Grade', 'Scholarship (%)'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create data rows
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

// Get user input
const userName = prompt("Enter your name:");
const subjects = ['Math', 'Science', 'English', 'History', 'Art'];
const marks = subjects.map(subject => parseInt(prompt(`Enter marks for ${subject} (out of 100):`)));

// Calculate results
const percentage = calculatePercentage(marks);
const grade = findGrade(percentage);
const scholarship = calculateScholarship(percentage);

// Prepare data for table
const tableData = subjects.map((subject, index) => ({
    subject,
    marks: marks[index],
    percentage: `${(marks[index]).toFixed(2)}%`,
    grade: findGrade(marks[index]),
    scholarship: `${calculateScholarship(marks[index])}%`
}));

// Add summary row
tableData.push({
    subject: 'Overall',
    marks: marks.reduce((sum, mark) => sum + mark, 0),
    percentage: `${percentage.toFixed(2)}%`,
    grade,
    scholarship: `${scholarship}%`
});

// Render results
document.getElementById('userNameHeading').textContent = `Results for ${userName}`;
document.getElementById('resultTable').appendChild(createTable(tableData));