function change(image_js,dur,title,chan,views,ud){
    let html = `<div class="cont">
    <div class="image">
        <div class="fit"><img src=${image_js}
        ></div>
        <div class="dur">${dur}</div>
    </div>
    <div class="a">
        <div class="tit">${title}</div>
        <div class="under">
            <div>${chan}</div>
            <div>${views}</div>
            <div>${ud}</div>
        </div>
    </div>
</div>`
document.querySelector(".bo").innerHTML=document.querySelector(".bo").innerHTML+html;

}

change("https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg","31:00","How to shoot from a professional camera ","Phil's Photography","450k views","10 months ago")
