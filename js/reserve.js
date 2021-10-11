const form = document.getElementById('form');
let error = document.getElementById('error');

function displayError(msg){
    error.style.visibility = 'visible';
    error.innerHTML = msg;
}

function hideError(){
    error.style.visibility = 'hidden';
}
form.addEventListener('submit',function(e){
    let product     = document.getElementById('product').value;
    let quantity    = document.getElementById('quantity').value;
    let color       = document.getElementById('color').value;
    let name        = document.getElementById('name').value;
    let tel         = document.getElementById('telephone').value;
    let address     = document.getElementById('address').value;
    let price       = 0;


    if(product == '' || quantity == '' || color == ''||
     name == '' || tel == '' || address == ''){
        displayError('All field must be filled!');
    }else if(name.length <= 2 ){
        displayError('The length of name must be more than 2!');
    }else if(tel.length<6 || tel.length>15){
        displayError('The length of telephone number must be between 6 and 15!');
    }else if(!address.includes('Jl.')){
        displayError("Address should contain the name of the street that starts with 'Jl.'!");
    }else if(quantity>15){
        displayError("Max quantity is 15!");
    }else{
        if(product=='vixianR') price = 30000000;
        else if(product=='vixian2021') price = 35500000;
        else  if(product=='kawaNinji') price = 40000000;
        else if(product=='kawaZ1000') price = 45500000;

        let total = price * quantity;

        if(confirm('Your total order is Rp.'+ total +'. Do you want to continue?')){
            alert("Your Order has been confirmed!");
            window.location.replace('../html/home.html');
        }else{
            location.reload();
        }
    }

    setTimeout('hideError()',3000)
    e.preventDefault();
})