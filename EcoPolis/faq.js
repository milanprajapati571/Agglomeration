document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded
    let left_slider = document.getElementById('left-arrow');
    let right_slider = document.getElementById('right-arrow');
    let questionsContainer = document.querySelector('.questions'); 

    if (!questionsContainer) {
        console.error("Element with class 'questions' not found.");
        return; // Exit early if the element is not found
    }

    let faqs = [
        'Q1: What is EcoPolis?<br>A: EcoPolis is an AI-driven urban biodiversity planning tool...',
        'Q2: Why is biodiversity planning important in urban areas?<br>A: Urbanization often replaces natural ecosystems...',
        'Q3: Who can use EcoPolis?<br>A: EcoPolis is designed for urban planners, environmental scientists...',
        'Q4: What does EcoPolis do?<br>A: EcoPolis offers three main functions: GIS-based biodiversity visualization...',
        'Q5: What type of data can I upload to EcoPolis?<br>A: You can upload GIS files, climate data...',
        'Q6: Can I use EcoPolis for any city?<br>A: Yes, as long as you have the relevant GIS, climate, and land use data...',
        'Q7: Does the tool provide real-time analysis?<br>A: The analysis depends on the data you upload...',
        'Q8: What kind of recommendations does EcoPolis provide?<br>A: Recommendations include optimal green corridors...',
        'Q9: How does EcoPolis predict the impact of urban development?<br>A: EcoPolis uses a machine learning model...',
        'Q10: What technologies power EcoPolis?<br>A: EcoPolis uses Python libraries like GeoPandas...',
        'Q11: Is EcoPolis available as a mobile app?<br>A: Currently, EcoPolis is a web app...',
        'Q12: Do I need programming skills to use EcoPolis?<br>A: No, EcoPolis features an interactive interface...',
        'Q13: Is my uploaded data secure?<br>A: Yes, EcoPolis prioritizes data security...',
        'Q14: Does EcoPolis store user data?<br>A: EcoPolis does not store any data unless explicitly required...',
        'Q15: Can EcoPolis be integrated with other urban planning tools?<br>A: Yes, the tool can export recommendations...'
    ];
    let currentIndex = 0;

    function updateFAQContent() {
        questionsContainer.classList.remove('fade-in');
        questionsContainer.classList.add('fade-out');
        setTimeout(() => {
            questionsContainer.innerHTML = faqs[currentIndex];
            questionsContainer.classList.remove('fade-out');
            questionsContainer.classList.add('fade-in');
        }, 500);
    }

    // Initial load of FAQ
    questionsContainer.innerHTML = faqs[currentIndex];

    left_slider.addEventListener('click', (e) => {
        currentIndex = (currentIndex - 1 + faqs.length) % faqs.length;
        updateFAQContent();
    });

    right_slider.addEventListener('click', (e) => {
        currentIndex = (currentIndex + 1) % faqs.length;
        updateFAQContent();
    });
});
