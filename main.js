var bookNameInput=document.getElementById('bookName')
var bookUrlInputt = document.getElementById('bookUrl')
var btn = document.getElementById('btn')
var tableRaw = document.getElementById('tableRaw')
var bookArray=[]
if(localStorage.getItem('products')!=null)
   bookArray=JSON.parse(localStorage.getItem('books'))
display(bookArray)
btn.onclick=function () {
    addBook();
    clearItems()
}
function addBook() {
    var book={
        bookName:bookNameInput.value,
        bookUrl:bookUrlInputt.value
    }
    bookArray.push(book);
    localStorage.setItem('books', JSON.stringify(bookArray));
    display(bookArray);
}
function display(list) {
    box =''
    for(var i=0 ; i<list.length ; i++){
        box+=` 
        <tr>
        <td>${i+1}</td>
        <td>${list[i].bookName}</td>
        <td><button type="button" class="btn btn-success">Visit</button></td>
        <td><button type="button" class="btn btn-danger" onclick = "deleteItem(${i})">Delete</button></td>
    </tr>
    `
    }
    tableRaw.innerHTML=box;
}
function deleteItem(index) {
    bookArray.splice(index,1);
    localStorage.setItem('books',JSON.stringify(bookArray))
    display(bookArray)
}
function clearItems(){
    bookNameInput.value ='';
    bookUrlInputt.value ='';
}