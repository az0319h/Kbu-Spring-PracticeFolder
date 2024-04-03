let subscribed_id = document.querySelector(".subscribed_id");

function subscribedIdClickEventAdd(){
    subscribed_id.style.backgroundColor = "white";  
}
subscribed_id.addEventListener('click', subscribedIdClickEventAdd)


// 제이쿼리로 작성함.
$('html').click(function(e) {   
	if(!$(e.target).hasClass("subscribed_id")) {
        subscribed_id.style.backgroundColor = "#f9f9f9";  
	}
});