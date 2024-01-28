let sn = document.getElementById("sn");

sn.addEventListener("click", ()=>{

    function snowFade() {
        let snow = document.createElement("i");
        snow.classList.add("fa", "fa-heart");
        snow.style.left = Math.round(Math.random() * innerWidth) + "px";
        snow.style.fontSize = Math.round(Math.random() * 100) + "px";
        document.body.appendChild(snow);
    }
    setInterval(snowFade, 100);
})
