
const gettingValues = (event) =>{
    event.preventDefault();
  
    let values = {
        username : document.getElementById('username').value,
        number : document.getElementById('number').value,
        emailid : document.getElementById('email').value
    }
    let mail = document.getElementById('email').value;
    let valueStr = JSON.stringify(values);
    localStorage.setItem(mail, valueStr);
    let objStr = JSON.parse(localStorage.getItem(mail));    
    console.log(objStr);
}

document.getElementById('submit').addEventListener('click', gettingValues);
let unorganisedList = document.getElementById('peopleList');

// Add item
 const addItem = (e) => {
    e.preventDefault();
    
    let emailid = document.getElementById('email').value;
    let usernameid = document.getElementById('username').value;
    let numberid = document.getElementById('number').value;

    // console.log(unorganisedList);
    // console.log(emailid);
    // console.log(usernameid);
    // console.log(numberid);

    //Creating a List
    let li = document.createElement('li');
    li.id = emailid;
    li.className = 'list-group-item list-group-item-action list-group-item-dark w-75 m-2';
    li.appendChild(document.createTextNode('Email Addess : ' + emailid + ", " + "UserName: " + usernameid +  ", Contact Details: " + numberid));
    unorganisedList.appendChild(li);

    // console.log(li);
    // console.log(li.childNodes);
    // console.log(unorganisedList.childNodes);
    
    let delbutton = document.createElement('button');
    delbutton.className = 'btn btn-outline-danger btn-sm float-end delete';
    delbutton.appendChild(document.createTextNode('Del.'));
    li.appendChild(delbutton);
    
    
    let editbutton = document.createElement('button');
    editbutton.className = 'btn btn-outline-secondary float-end mx-2 btn-sm edit';
    editbutton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbutton);

    document.getElementById('username').value = "";
    document.getElementById('number').value = "";
    document.getElementById('email').value = "";

}

const removeItem = (e) => {
    if(e.target.classList.contains('delete')){
      if(confirm('Are you Sure?')){
        let li = e.target.parentElement;
        localStorage.removeItem(li.id);
        unorganisedList.removeChild(li);
      }
    }
  }

const editItem = (e) => {
    if(e.target.classList.contains('edit')){
        let li = e.target.parentElement;
        
       let obj = JSON.parse(localStorage.getItem(li.id));
       document.getElementById('username').value = obj.username;
       document.getElementById('email').value = obj.emailid;
       document.getElementById('number').value = obj.number;
       localStorage.removeItem(li.id);
       unorganisedList.removeChild(li);

    }
  }





// const  editfunction = (e) =>{
//     e.preventDefault();
//     let i = document.getElementById('edit').parentElement.firstChild;
//     console.log(i);

//     localStorage.removeItem(document.getElementById('edit').parentElement.firstChild);

// }


document.getElementById('submit').addEventListener('click', addItem);
unorganisedList.addEventListener('click', removeItem);
unorganisedList.addEventListener('click', editItem);


