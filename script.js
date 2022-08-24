const text1= document.getElementById('text1');
const text2= document.getElementById('text2');
const text3= document.getElementById('text3');
const textContainer= document.getElementById('textContainer');

document.addEventListener('click', (e) => {
    let id = e.target.getAttribute('id');

    switch (id) {
        case 'title1':                       
            textContainer.textContent = text1.innerText;
            break;
        case 'title2':  
            textContainer.textContent = text2.innerText;
            break;
        case 'title3':
            textContainer.textContent = text3.innerText;
            break;
        
    }
});



