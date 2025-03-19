const shareBtn = document.querySelector(".share"); 
const shareButtons = document.getElementById("shareButtons"); 

shareBtn.addEventListener("click", function (event) {
    event.stopPropagation(); 
    
    if (shareButtons.style.opacity === "1") {
        shareButtons.style.opacity = "0";
        shareButtons.style.visibility = "hidden";
        shareButtons.style.bottom = "150%";
    } else {
        shareButtons.style.opacity = "1";
        shareButtons.style.visibility = "visible";
        shareButtons.style.bottom = "100%"; 
    }
});
