

let unorganisedList = document.getElementById('peopleList');

// Add item
const addItem = (e) => {
    e.preventDefault();


    let emailid = document.getElementById('email').value;
    let usernameid = document.getElementById('username').value;
    let numberid = document.getElementById('number').value;

  

    //Creating a List
    let li = document.createElement('li');
    
    li.className = 'list-group-item list-group-item-action list-group-item-dark w-75 m-2';
    li.appendChild(document.createTextNode('Email Addess : ' + emailid + ", " + "UserName: " + usernameid + ", Contact Details: " + numberid));
    unorganisedList.appendChild(li);

    // console.log(li);
    // console.log(li.childNodes);
    // console.log(unorganisedList.childNodes);

    let values = {
        username: document.getElementById('username').value,
        number: document.getElementById('number').value,
        emailid: document.getElementById('email').value
    }
    // let mail = document.getElementById('email').value;
    // let valueStr = JSON.stringify(values);
    // localStorage.setItem(mail, valueStr);
    // let objStr = JSON.parse(localStorage.getItem(mail));    
    // console.log(objStr);
    axios.post('https://crudcrud.com/api/d890bb9a4cee41fcb11cc5686a199d81/bookingData', values)
        .then(data => {
            li.id = data.data._id;
            // console.log(li.id);
        })
        .catch(err => console.error(err))

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
    if (e.target.classList.contains('delete')) {
        
            let li = e.target.parentElement;
            console.log(li.id);
            // localStorage.removeItem(li.id);
            axios.delete(`https://crudcrud.com/api/d890bb9a4cee41fcb11cc5686a199d81/bookingData/${li.id}`)
                .then(data => { console.log(data) })
                .catch(err => console.error(err))
            unorganisedList.removeChild(li);
        
    }
}

const editItem = (e) => {
    let li;
    if (e.target.classList.contains('edit')) {
        li = e.target.parentElement;    


        axios.get(`https://crudcrud.com/api/d890bb9a4cee41fcb11cc5686a199d81/bookingData/${li.id}`)
            .then(data => {
                document.getElementById('username').value = data.data.username;
                document.getElementById('email').value = data.data.emailid;
                document.getElementById('number').value = data.data.number;
            })
            
    }
    document.getElementById('submit').removeEventListener('click', addItem);
    document.getElementById('submit').addEventListener('click', function(e){
        e.preventDefault();
        let obj = {
            username: document.getElementById('username').value,
            number: document.getElementById('number').value,
            emailid: document.getElementById('email').value
        }
        axios.put(`https://crudcrud.com/api/d890bb9a4cee41fcb11cc5686a199d81/bookingData/${li.id}`, obj);
        li.innerHTML = `Email Addess : ${obj.emailid}, UserName: ${obj.username}, Contact Details: ${obj.number}<button class="btn btn-outline-danger btn-sm float-end delete">Del.</button><button class="btn btn-outline-secondary float-end mx-2 btn-sm edit">Edit</button>`
        console.log(li.innerHTML);
    });
    document.getElementById('username').value = "";
    document.getElementById('number').value = "";
    document.getElementById('email').value = "";
}







document.getElementById('submit').addEventListener('click', addItem);
unorganisedList.addEventListener('click', removeItem);
unorganisedList.addEventListener('click', editItem);


document.addEventListener('DOMContentLoaded' , function(){
    axios.get('https://crudcrud.com/api/d890bb9a4cee41fcb11cc5686a199d81/bookingData')
    .then(data =>{
        //Creating List
        data.data.forEach(element => {
            console.log(element);

            
            let li = document.createElement('li');
            li.id = element._id;
            li.className = 'list-group-item list-group-item-action list-group-item-dark w-75 m-2';
            li.appendChild(document.createTextNode('Email Addess : ' + element.emailid + ", " + "UserName: " + element.username + ", Contact Details: " + element.number));
            
            let delbutton = document.createElement('button');
            delbutton.className = 'btn btn-outline-danger btn-sm float-end delete';
            delbutton.appendChild(document.createTextNode('Del.'));
            li.appendChild(delbutton);
            
            
            let editbutton = document.createElement('button');
            editbutton.className = 'btn btn-outline-secondary float-end mx-2 btn-sm edit';
            editbutton.appendChild(document.createTextNode('Edit'));
            li.appendChild(editbutton);

            unorganisedList.appendChild(li);
        });
    });

})

