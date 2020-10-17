
// add the new row 
var target = document.querySelector('.add');
// add the click event
target.addEventListener('click' ,create_row);

function create_row()
{
    console.log("Ankit");
    var CartRow=document.createElement('div');

    var CartItems=document.querySelector('.test');
    CartRow.classList.add('row');

    var CartRowContents= `
                        <input class="write" type="text" placeholder="First name" value="">
                        <input class="write" type="text" placeholder="Last name" value="">
                        <input class="btn" type="button" value="Delete">
                        ` ;
    CartRow.innerHTML=CartRowContents;
    CartItems.append(CartRow);

    // adding the click event of newely added row
    // var rem = document.querySelectorAll(".btn");
    // rem[rem.length-1].addEventListener('click' , remove);

    var rem = (CartItems.children[CartItems.children.length-1].children[2]);
    rem.addEventListener('click' , remove);
}

// remove the newely added row

function remove(event)
{
    // remove from the first box
    var buttonClicked=event.target;
    var x=  buttonClicked.parentElement.children;
    buttonClicked.parentElement.remove();

    // adding to the recycle box
    var CartRow=document.createElement('div');
    var CartItems=document.querySelector('.recycle');
    CartRow.classList.add('row');

    var CartRowContents= `
                            <input class="write" type="text" placeholder="First name" value="${x[0].value}">
                            <input class="write" type="text" placeholder="Last name" value="${x[1].value}">
                            <input class="btn" type="button" value="Delete" onclick="mydelete(this)">
                            <input class="btn" type="button" value="Restore" onclick="myrestore(this)">
                            `;
    CartRow.innerHTML=CartRowContents;
    CartItems.append(CartRow);

};

function mydelete(event)
{
    var buttonClicked = event.parentElement;
    buttonClicked.remove();
}
function myrestore(event)
{

    var x = (event.parentElement.children);

    var CartRow=document.createElement('div');
    var CartItems=document.querySelector('.test');
    CartRow.classList.add('row');

    var CartRowContents= `
                            <input class="write restored" type="text" placeholder="First name" value="${x[0].value}">
                            <input class="write restored" type="text" placeholder="Last name" value="${x[1].value}">
                            <input class="btn restored" type="button" value="Delete" onclick="mydelete(this)">
                            `;
    CartRow.innerHTML=CartRowContents;
    CartItems.append(CartRow);

    mydelete(event);
}
