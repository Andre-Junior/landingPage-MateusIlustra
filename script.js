window.onscroll = () => scroll();



function scroll() {
    
    let navigation = document.getElementById("navigationId");
    let sticky = navigation.offsetTop;
    
        if (window.pageYOffset > sticky) {
          navigation.classList.add("sticky");
        } else {
          navigation.classList.remove("sticky");
        }
}