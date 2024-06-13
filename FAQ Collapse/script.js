const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})