/* Add your JavaScript to this file */
window.onload = () =>{
    const btn = document.getElementsByClassName("btn");

    btn.addEventListener('submit', function(event){
        event.preventDefault();

        var emailadd = getElementsByID("email").value;

        console.log(emailadd);

    })
}

