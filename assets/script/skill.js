const item_html = document.querySelector('#html>i')
const item_css = document.querySelector('#css>i')
const item_git = document.querySelector('#git>i')
const item_github = document.querySelector('#github>i')
const item_js = document.querySelector('#js>i')
const item_angular = document.querySelector('#angular>i')
const item_bootstrap = document.querySelector('#bootstrap>i')

let text_html = document.querySelector('#html>p')
let text_css = document.querySelector('#css>p')
let text_git = document.querySelector('#git>p')
let text_github = document.querySelector('#github>p')
let text_js = document.querySelector('#js>p')
let text_angular = document.querySelector('#angular>p')
let text_bootstrap = document.querySelector('#bootstrap>p')

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

item_angular.addEventListener('mouseover', function(){
    text_angular.style.display = 'block'
})

item_angular.addEventListener('mouseout', function(){
    text_angular.style.display = 'none'
})

item_bootstrap.addEventListener('mouseover', function(){
    text_bootstrap.style.display = 'block'
})

item_bootstrap.addEventListener('mouseout', function(){
    text_bootstrap.style.display = 'none'
})