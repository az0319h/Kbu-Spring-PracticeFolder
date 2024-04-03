let email = document.querySelector(".email");

function emailClickEventAdd(){
    // if(email.classList.contains('active')){
    //     email.classList.remove('active')
    //     email.style.backgroundColor = "white";     
    // } else{
    //     email.classList.add('active')
    //     email.style.backgroundColor = "aqua";     
    // }   리얼 뻘짓
    email.style.backgroundColor = "white";  
}
email.addEventListener('click', emailClickEventAdd)


// 제이쿼리로 작성함.
$('html').click(function(e) {   
	if(!$(e.target).hasClass("email")) {
        email.style.backgroundColor = "#f9f9f9";  
	}
});