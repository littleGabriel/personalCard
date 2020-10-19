import './style.css'

// import {MDCList} from '@material/list';
// import {MDCRipple} from '@material/ripple';

// const list = new MDCList(document.querySelector('.mdc-list'));
// const listItemRipples = list.listElements.map((el) => new MDCRipple(el));

function createRipple(e) {
    const el = e.target;
    const circle = document.createElement("span");
    const diameter = Math.max(el.clientWidth, el.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.offsetX - radius}px`;
    circle.style.top = `${e.offsetY - radius}px`;
    circle.classList.add("ripple");
    const rippleSpan = el.getElementsByClassName("ripple")[0];
    if (rippleSpan) rippleSpan.remove();
    el.appendChild(circle);
}

const elements = document.getElementsByClassName("element");
for (const element of elements) {
    element.addEventListener("click", createRipple);
}

const els = document.getElementsByClassName("ripple-mask");
for (const el of els) {
    el.addEventListener("click", createRipple);
}

