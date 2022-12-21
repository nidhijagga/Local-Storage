
const gettingValues = (event) =>{
    event.preventDefault();
  
    let values = {
        username : document.getElementById('username').value,
        number : document.getElementById('number').value
    }
    let mail = document.getElementById('email').value;
    let valueStr = JSON.stringify(values);
    localStorage.setItem(mail, valueStr);
    let objStr = JSON.parse(localStorage.getItem(mail));    
    console.log(objStr);
}

document.getElementById('submit').addEventListener('click', gettingValues);


// Add item
 const addItem = (e) => {
    e.preventDefault();
    let unorganisedList = document.getElementById('peopleList');
    let emailid = document.getElementById('email').value;
    let usernameid = document.getElementById('username').value;
    let numberid = document.getElementById('number').value;

    // console.log(unorganisedList);
    // console.log(emailid);
    // console.log(usernameid);
    // console.log(numberid);

    //Creating a List
    let li = document.createElement('li');
    li.className = 'li';
    li.appendChild(document.createTextNode(emailid+ ": " + "UserName: " + usernameid +  " Contact Details: " + numberid));
    unorganisedList.appendChild(li);

    // console.log(li);
    // console.log(li.childNodes);
    // console.log(unorganisedList.childNodes);
    
 }

document.getElementById('submit').addEventListener('click', addItem);

