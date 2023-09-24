
const home = gsap.timeline();

function time() {
    var a = 0;
    setInterval(function () {
        a += Math.floor(Math.random()*16);
        if (a < 100) {
            document.querySelector(".load_heading").innerHTML = `${a++} %`;
        }else{
            a=100
            document.querySelector(".load_heading").innerHTML = `${a++} %`;
        }
    },150)
}

home.to(".loader_wapper h1",{ 
    delay:.5,
    duration:1,
    onStart:time(),
})

home.to(".loader_wapper" , { 
    top:"-100vh",
    delay:.5,
    duration:2
})


