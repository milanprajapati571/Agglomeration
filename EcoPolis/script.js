let left_slider = document.getElementById('left-arrow');
let right_slider = document.getElementById('right-arrow');
let featureHTML = document.getElementsByClassName('feathtml')[0]; 

let content = [
    '1. Analysis at Your Fingertips: Upload GIS maps or images and receive instant biodiversity insights',
    '2. Impact Awareness: Understand how development is reshaping ecosystems in real time.',
    '3. Action-Oriented Insights: Equip yourself with the knowledge to drive meaningful environmental change'
];

let index = 0;


function updateContent() {
  
    featureHTML.classList.remove('fade-in');
    featureHTML.classList.add('fade-out'); 

    
    setTimeout(() => {
        featureHTML.innerHTML = content[index]; 
     
        featureHTML.classList.remove('fade-out');
        featureHTML.classList.add('fade-in');
    }, 500); 
}

featureHTML.innerHTML = content[index];


left_slider.addEventListener('click', (e) => {
    index = (index - 1 + content.length) % content.length; 
    updateContent(); 
});

right_slider.addEventListener('click', (e) => {
    index = (index + 1) % content.length; 
    updateContent(); 
});
