const item_html = document.querySelector('#html>i')
const item_css = document.querySelector('#css>i')
const item_git = document.querySelector('#git>i')
const item_github = document.querySelector('#github>i')
const item_js = document.querySelector('#js>i')

let text_html = document.querySelector('#html>p')
let text_css = document.querySelector('#css>p')
let text_git = document.querySelector('#git>p')
let text_github = document.querySelector('#github>p')
let text_js = document.querySelector('#js>p')


item_html.addEventListener('mouseover', function(){
    text_html.style.display = 'block'
})

item_html.addEventListener('mouseout', function(){
    text_html.style.display = 'none'
})

item_css.addEventListener('mouseover', function(){
    text_css.style.display = 'block'
})

item_css.addEventListener('mouseout', function(){
    text_css.style.display = 'none'
})

item_git.addEventListener('mouseover', function(){
    text_git.style.display = 'block'
})

item_git.addEventListener('mouseout', function(){
    text_git.style.display = 'none'
})

item_github.addEventListener('mouseover', function(){
    text_github.style.display = 'block'
})

item_github.addEventListener('mouseout', function(){
    text_github.style.display = 'none'
})

item_js.addEventListener('mouseover', function(){
    text_js.style.display = 'block'
})

item_js.addEventListener('mouseout', function(){
    text_js.style.display = 'none'
})