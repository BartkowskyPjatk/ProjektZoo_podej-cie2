function click(){
    console.log("click")
}
const guzikGora = document.getElementById("contactRollDown");
const guzikDol = document.getElementById("contactRollUp");
const checkbox = document.getElementById('menuTap');
const scrollingElement = (document.scrollingElement || document.body);

const scrollSmoothToBottom = () => {
    console.log("clickDown");
    $(scrollingElement).animate({
        scrollTop: document.body.scrollHeight,
        scrollLeft: 0
    }, 500);
};
const scrollSmoothToTop = () => {
    console.log("clickUp");
    $(scrollingElement).animate({
        scrollTop: 0
    }, 500);
};
guzikGora.addEventListener("click", scrollSmoothToBottom);
guzikDol.addEventListener("click", scrollSmoothToTop);

    checkbox.addEventListener('change',function (){
        if(this.checked){
            $(scrollingElement).animate({
                scrollLeft: document.body.scrollWidth,
                scrollTop: 0
            }, 500);
        }
        else {
            $(scrollingElement).animate({
                scrollLeft: 0,
                scrollTop: 0
            }, 500);
        }
    })
