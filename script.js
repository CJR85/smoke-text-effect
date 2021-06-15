// Split text into letters
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\$/g, '<span>$&</span>');
