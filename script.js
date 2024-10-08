/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')

const selectedTheme = localStorage.getItem('selected-theme') || 'dark';
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 600})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 300})
sr.reveal(`.profile__buttons`, {delay: 500})
sr.reveal(`.filters__content`, {delay: 700})
sr.reveal(`.filters`, {delay: 300})



sr.reveal(`.gallery`, {delay: 1000})
sr.reveal(`.swiper`, {delay: 1000})
// sr.reveal(`.gallery__title`, {delay: 1000})
// sr.reveal(`.gallery__data`, {delay: 1000})
// sr.reveal(`.gallery`, {delay: 1000})
// sr.reveal(`.gallery`, {delay: 1000})
// sr.reveal(`.gallery`, {delay: 1000})



// // The extracted class names from the HTML code
// const classNames = [
//     'gallery',
//     'swiper',
//     'swiper-wrapper',
//     'swiper-slide',
//     'gallery__card',
//     'gallery__img',
//     'gallery__data',
//     'gallery__title',
//     'gallery__subtitle',
//     'gallery__overflow',
//     'gallery-thumbs',
//     'gallery__thumbnail',
//     'gallery__thumbnail-img',
//     'swiper-pagination',

// ];

// // Loop through each class name and reveal the element with the corresponding delay
// for (let i = 0; i < classNames.length; i++) {
//     sr.reveal(`.${classNames[i]}`, { delay: 500 + i * 100 });
// }