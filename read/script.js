fetch('../navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

function displayNews() {
    const newsTitle = localStorage.getItem('newsTitle');
    const newsDesc = localStorage.getItem('newsDesc');

    document.title = newsTitle;
    document.getElementsByClassName('news-title')[0].textContent = newsTitle;
    document.getElementsByClassName('news-desc')[0].textContent = newsDesc;

    // localStorage.removeItem('newsTitle');
    // localStorage.removeItem('newsDesc');
}

// window.addEventListener('beforeunload', () => {
//     // Check if the user is closing the tab or navigating away
//     if (performance.navigation.type === PerformanceNavigation.TYPE_RELOAD) {
//         // Do nothing if the page is being reloaded
//         return;
//     }

//     // Clear localStorage if the user is closing the tab or navigating away
//     localStorage.removeItem('newsTitle');
//     localStorage.removeItem('newsDesc');
// });

// if (window.location.pathname.includes('index.html')) {
displayNews();
// }