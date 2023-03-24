// OVERLAY NAV MENU DRAWER
// const mymenubutton = document.querySelector('.menu-button');
// const mysitenav = document.querySelector('.site-header .site-nav');

// mymenubutton.onclick = function () {
//     if (mysitenav.getAttribute('data-navstate') === 'open') {
//         mysitenav.setAttribute('data-navstate', 'closed');
//     } else {
//         mysitenav.setAttribute('data-navstate', 'open');
//     }
// }

// CLOSE OVERLAY NAV DRAWER ON CLICK
// const mysitenavlinks = document.querySelectorAll('.site-header .site-nav a');

// for (let i = 0; i < mysitenavlinks.length; i++) {
//     mysitenavlinks[i].onclick = function () {
//         mysitenav.setAttribute('data-navstate', 'closed');
//     };
// };

// ON HOVER VIDEO PLAY
const videos = document.querySelectorAll(".project-video");

for (const video of videos) {
    video.addEventListener('mouseover', function () { video.play() }, false);
    video.addEventListener('mouseout', function () { video.pause() }, false);
}

// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const io_options = {
    // root: document.body,
    rootMargin: "0px 0px 0px 0px",
    threshold: ".50"
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-sectionstate", "active");
        } else {
            entry.target.setAttribute("data-sectionstate", "inactive");
        }
    });
}, io_options);
document.querySelectorAll(".animate-on-scroll").forEach((section) => {
    observer.observe(section);
});

// FULLPAGE INIT
new fullpage('#fullpage', {
    licenseKey: 'gplv3-license'
});

new fullpage('#fullpage', {
    //options here
    scrollingSpeed: 700,
    autoScrolling: true,
    navigation: true,
});

// LOTTIE READER
// SECTIONS
var animation = bodymovin.loadAnimation({
    container: document.getElementById('tz-hero-animation-1'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/tz-hero-animation-1.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('forge-banner'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/forge-banner-1.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('forge-web-1'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/forge-web-ad-1.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('forge-web-2'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/forge-web-ad-2.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('hero-animation'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/hero-animation.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('piko-animation-collection'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/piko-animation-collection.json'
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('piko-website-demo'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/piko-website-demo.json'
});