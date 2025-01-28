// Dynamically load the navbar HTML content into the #navbar div
fetch('navbar/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
    
    // Dynamically load the navbar CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'navbar/navbar.css';
    document.head.appendChild(link);
    
    // Dynamically load the navbar JavaScript
    const script = document.createElement('script');
    script.src = 'navbar/navbar.js';
    document.body.appendChild(script);
})
.catch(error => {
    console.error('Error loading the navbar:', error);
});

function openNewsDetail(title, desc) {
    localStorage.setItem('newsTitle', title);
    localStorage.setItem('newsDesc', desc);

    window.location.href = "read/";
}