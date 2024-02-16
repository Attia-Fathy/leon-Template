function show() {
    const element = document.getElementById("men");
    element.classList.remove("hiden-menu"); // Remove mystyle class
    element.classList.add("show-menu"); // Add newone class
    element.classList.remove("none-menu"); // Remove mystyle class
    element.classList.add("block-menu"); // Add newone class
}

function hiden() {
    const element = document.getElementById("men");
    element.classList.remove("show-menu"); // Remove mystyle class
    element.classList.add("hiden-menu"); // Add newone class
}

function delayNone() {
    setTimeout(function () {
        const element = document.getElementById("men");
        element.classList.remove("block-menu");
        element.classList.add("none-menu");
    }, 500)
}

function fullHiden() {
    hiden();
    delayNone();
}

function closeMenu() {
    const element = document.getElementById("men");
    element.classList.remove("block-menu");
    element.classList.add("none-menu");
}