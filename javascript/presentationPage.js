setInterval(function()
 
{
            var div = document.querySelector("#countDown");
            var count = div.textContent * 1 - 1;
            div.textContent = count;
            if (count <= 0) {
				
				window.location.replace("homepage.html");
			
			}
				       
}, 1000);