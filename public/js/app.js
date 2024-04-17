let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let count = document.querySelector('.count')
let images = document.querySelectorAll('.item__img')
let item__img = document.querySelector('.item')
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})
images.forEach(item => {
    item.addEventListener('click', function () {
        item__img.src = item.src
    })
})
plus.addEventListener('click', () =>{
    count.innerText = Number(count.innerText) + 1
})
minus.addEventListener('click' , () =>{
    count.innerText = Number(count.innerText) - 1
})
if (count.innerText = 0) {
    
}


// let tabs = document.querySelectorAll('.tab__btn')
// let all_content = document.querySelectorAll('.content')


// tabs.forEach((tab, index) => {
//     tab.addEventListener('click', () => {
//         tabs.forEach(tab => { tab.classList.remove('active') });    
//         tab.classList.add('active')
//     })
// })


