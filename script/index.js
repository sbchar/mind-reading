var imgBoardDom = document.getElementsByClassName("img-board")[0];
var rightDom = document.getElementsByClassName("right")[0];
var imgDom = document.getElementsByClassName("round")[0]

var results = Math.floor(Math.random()*16);
var isGameOver = false;

/**
 * 产生随机数
 * @param {number} min - 产生随机数的最小值(包含)
 * @param {number} max - 产生随机数的最大值(包含)
 */
function getRadom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function initDictionary() {
    var tempStr = '';
    var imgNum;
    for(var i = 0; i < 100; i++){
        imgNum = i % 9 == 0 ? results : getRadom(0, 15);
        tempStr += `
        <div class="item">
            <span class="num">${ i }</span>
            <img src="./img/values/${ imgNum }.png" alt="">
        </div>
        `
    }
    rightDom.innerHTML = tempStr;
}

function bindEvent() {
    imgBoardDom.addEventListener("click", function (){
        if (isGameOver) {
            return;
        }
        this.style.transition = "all 4s ease-in-out"
        this.style.transform = "rotate(3600deg)";
    }, false);
    
    imgBoardDom.addEventListener("webkitTransitionEnd", function (){
        imgDom.src = `./img/values/${ results }.png`;
        this.style.transition = "none";
        this.style.transform = "rotate(0deg)";
        isGameOver = true;
    }, false);
}

initDictionary();
bindEvent();