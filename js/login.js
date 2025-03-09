let block = document.querySelectorAll('form');

function tosignup(){
    block[0].style.display = "none";
    block[1].style.display = "flex";
}
function tologin(){
    block[0].style.display = "flex";
    block[1].style.display = "none";
}

function signup(){
    if(document.querySelector('#signup input[type=email]').value != ''){
        const passes = document.querySelectorAll('#signup input[type=password]');
        let pass = passes[0].value;
        let confpass = passes[1].value;
        if(pass != '' && confpass != ''){
            if(pass === confpass){
                console.log("yes");
            }
            else{
                passes[0].value = '';
                passes[1].value = '';
                alert("Password and Confirm Password must be same");
            }
        }
    }
}