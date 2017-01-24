function showBanner() {
    var banner = document.getElementById("banner");
    var bannerClose = banner.querySelector("#banner-close");
    
    bannerClose.addEventListener("click", function(){
        banner.classList.remove("banner-visible");
    })
    
    setTimeout(function(){
        banner.classList.add("banner-visible");
    }, 3000);
}

document.addEventListener("DOMContentLoaded",function() {
    showBanner();
});