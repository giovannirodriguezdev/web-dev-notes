document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.createElement('p');
    paragraph.textContent = "Hey I'm Read";
    paragraph.style.color = 'red';
    document.body.appendChild(paragraph);
});

document.addEventListener('DOMContentLoaded', function(){
    const h3 = document.createElement('h3');
    h3.textContent = "I'm a blue h3!";
    h3.style.color = 'blue';
    document.body.appendChild(h3);
})

document.addEventListener('DOMContentLoaded', function(){
    const div = document.createElement('div');
    div.style.border = '2px solid black';
    div.style.backgroundColor = 'pink';
    div.style.padding = '10px';

    const h1 = document.createElement('h1');
        h1.textContent = "I'm in a div";

    const p = document.createElement('p');
    p.textContent = "ME TOO!";

    div.appendChild(h1);
    div.appendChild(p)

    document.body.appendChild(div);
    
})
