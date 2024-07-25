var overlay=document.querySelector(".popup-overlay")
var box=document.querySelector(".popup-box")
var btn=document.getElementById("popup-btn")
var cancel_book=document.getElementById("cancel-book")

btn.addEventListener("click",function(){
    overlay.style.display="block"
    box.style.display="block"
})

cancel_book.addEventListener("click",function(event){
    overlay.style.display="none"
    box.style.display="none"
    event.preventDefault()
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var bookauthor=document.getElementById("bookAuthor")
var booktitle=document.getElementById("bookTitle")
var description=document.getElementById("bookDesc")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var a=bookauthor.value
    var b=booktitle.value
    var c=description.value
    if(a!=='' && b!=='' && c!==''){
    var div=document.createElement("div")
    div.setAttribute("class","books-container")
    div.innerHTML=`<h2>${b}</h2>
    <h5>${a}</h5>
    <p>${c}</p>
    <button onclick='deletebook(event)'>delete</button>`
    container.append(div)
    bookAuthor.value=null
    booktitle.value=null
    bookDesc.value=null
    overlay.style.display="none"
    box.style.display="none"}
    else{
        alert("Enter Anything")
    }
})
function deletebook(event){
  event.target.parentElement.remove()
}