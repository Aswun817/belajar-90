let currentSection = 1;
const totalSections = 3;

function showSection(sectionNumber) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    // Show the current section
    document.getElementById(`section${sectionNumber}`).classList.add('active');
    
    // Update button states
    document.getElementById('prevBtn').disabled = sectionNumber === 1;
    document.getElementById('nextBtn').disabled = sectionNumber === totalSections;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSection < totalSections) {
        currentSection++;
        showSection(currentSection);
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSection > 1) {
        currentSection--;
        showSection(currentSection);
    }
});

// Initialize the first section
showSection(currentSection);
