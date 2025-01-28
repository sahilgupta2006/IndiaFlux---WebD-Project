fetch('navbar/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'navbar/navbar.css';
    document.head.appendChild(link);
    
    const script = document.createElement('script');
    script.src = 'navbar/navbar.js';
    document.body.appendChild(script);
})
.catch(error => {
    console.error('Error loading the navbar:', error);
});

const divs1 = document.querySelectorAll('.item-news');

window.onload = function() {
    const elements = document.querySelectorAll('.story-desc');
    elements.forEach(function(element) {
        element.style.display = 'none';
    });
}

divs1.forEach(div => {
    div.onclick = function () {
        const title = this.querySelector('.news-title').textContent;
        const desc = this.querySelector('.news-desc').textContent;
        const img = this.querySelector('.news-img').textContent;
        
        localStorage.setItem('newsTitle', title);
        localStorage.setItem('newsDesc', desc);
        localStorage.setItem('newsImg', img);

        window.location.href = "read/";
    };
});

const divs2 = document.querySelectorAll('.item-story');

divs2.forEach(div => {
    div.onclick = function () {
        const title = this.querySelector('.story-title').textContent;
        const desc = this.querySelector('.story-desc').textContent;
        const img = this.querySelector('.story-img').src;
        
        localStorage.setItem('newsTitle', title);
        localStorage.setItem('newsDesc', desc);
        localStorage.setItem('newsImg', img);

        window.location.href = "read/";
    };
});

