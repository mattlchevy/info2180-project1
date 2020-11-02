/* Add your JavaScript to this file */
"use strict";


var subscribe = function(){

    document.getElementsByClassName('btn')[1].addEventListener('click',function(e){
        e.preventDefault();
        var email = document.getElementById('email').value;
        if (email === ''){
            document.getElementsByClassName('message')[0].innerHTML = 'Please enter a valid email address.';
        }else{
            document.getElementsByClassName('message')[0].innerHTML = 'Thank you! Your email address ' + email + 'has been added to the mailing list!';
        }
        return false;   
    });

}
window.onload = subscribe;
