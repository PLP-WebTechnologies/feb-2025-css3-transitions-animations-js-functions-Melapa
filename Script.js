// 1. CSS Animation

const animatedButton = document.getElementById('animated-button');
const animatedBox = document.querySelector('.animated-box');

animatedButton.addEventListener('click', () => {
    animatedBox.classList.toggle('animated-box');
});


// 2. Local Storage

const bgColorSpan = document.getElementById('bg-color');
const fontSizeSpan = document.getElementById('font-size');
const savePreferencesButton = document.getElementById('save-preferences');

function loadPreferences() {
    const bgColor = localStorage.getItem('userBackgroundColor') || '#f0f0f0';
    const fontSize = localStorage.getItem('userFontSize') || '16px';

    document.body.style.backgroundColor = bgColor;
    document.body.style.fontSize = fontSize;

    bgColorSpan.textContent = bgColor;
    fontSizeSpan.textContent = fontSize;
}
loadPreferences();

savePreferencesButton.addEventListener('click', () => {
    const newBgColor = prompt('Enter new background color (e.g., #ffffff, lightblue):', '#f0f0f0');
    const newFontSize = prompt('Enter new font size (e.g., 14px, 20px):', '16px');

    if (newBgColor) {
        localStorage.setItem('userBackgroundColor', newBgColor);
        document.body.style.backgroundColor = newBgColor;
        bgColorSpan.textContent = newBgColor;
    }
    if (newFontSize) {
        localStorage.setItem('userFontSize', newFontSize);
        document.body.style.fontSize = newFontSize;
        fontSizeSpan.textContent = newFontSize;
    }
    alert('Preferences saved! Refresh the page to see changes.');
});



// 3. Combining CSS Animations and JavaScript
const changeContentButton = document.getElementById('change-content-button');
const contentArea = document.getElementById('content-area');

changeContentButton.addEventListener('click', () => {
    contentArea.classList.add('animated-box');
    contentArea.innerHTML = '<p>The content has been changed dynamically!</p>';
     setTimeout(() => {
        contentArea.classList.remove('animated-box');
    }, 1000);
});