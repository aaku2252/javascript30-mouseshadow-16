const hero = document.querySelector(".hero");
const head = document.querySelector("h1");
const walk = 20;

function changeShadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    if (!(e.target == this)) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
    //here we calculated the distance for shadow to move along the movement of mouse
    xWalk = Math.round((x / width) * walk - walk / 2);
    yWalk = Math.round((y / width) * walk - walk / 2);

    head.style.textShadow = `${xWalk}px ${yWalk}px 10px grey`;
}
hero.addEventListener("mousemove", changeShadow);
