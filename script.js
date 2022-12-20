
const gettingValues = (event) =>{
    event.preventDefault();
    let username = document.getElementById('username').value;
    let mail = document.getElementById('exampleInputEmail1').value;
    console.log(username);
    console.log(mail);

    localStorage.setItem(mail, username);
    
}


document.getElementById('submit').addEventListener('click', gettingValues);