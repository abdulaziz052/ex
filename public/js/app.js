let images = document.querySelectorAll('.item__img')
let item__img = document.querySelector('.item')
let tabs = document.querySelectorAll('.tab__btn')


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active')
    })
})
images.forEach(item => {
    item.addEventListener('click', function () {
        item__img.src = item.src
    })
})

