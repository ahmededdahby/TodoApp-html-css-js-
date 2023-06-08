var NodeList = document.getElementsByTagName("li")

//adding x to each element in the list
for (i = 0; i < NodeList.length; i++) { 
    var span = document.createElement("span");
    var text = document.createTextNode('\u00D7')
    span.className='close'
    span.appendChild(text)
    NodeList[i].appendChild(span)
}

//click to hide the current li
var close = document.getElementsByClassName('close')

for (i = 0; i < close.length; i++) { 
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display ='none';
    }

}

//clixk on li to mark it as done (checked)
var list = document.querySelector("ul")
list.addEventListener ('click', function (ev) { 
    if (ev.target.tagName === 'LI') { 
        ev.target.className='checked'
    }
}, false)

//add element to checklist
function addElement(){
    var li = document.createElement('li')
    var inputText = document.getElementById('item').value
    var t = document.createTextNode(inputText)
    li.appendChild(t)
    if (inputText === "") {
        alert("text cant be empty")
    } else {
        list.appendChild(li)
    }
    var span = document.createElement("span");
    var text = document.createTextNode('\u00D7')
    span.className='close'
    span.appendChild(text)
    li.appendChild(span)

    for (i = 0; i < close.length; i++) { 
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display ='none';
        }
    
    }
    
}