let html = document.querySelector('#item_html>i')
html.addEventListener('mouseover', mouseHTML)
html.addEventListener('mouseout', saiHTML)



function mouseHTML(){
    let text = document.querySelector('#item_html_text')
    
    if (text.style.display == 'block'){
         text.style.display = 'none'
     } else {
        text.style.display = 'block'
     }
}

function saiHTML(){
    let text = document.querySelector('#item_html_text')

    if (text.style.display == 'none'){
        text.style.diplay = 'block'
    } else {
        text.style.display = 'none'
    }
}