let is_favourite = false;
function add_favourite(el) {
    if (is_favourite){
        el.src = "src/white_heart.png";
        is_favourite = false;
    }
    else {
        el.src = "src/black_heart.png";
        is_favourite = true;
    }
}

function selectX(id) {
    let all_elms = document.getElementsByClassName('colors');
    Array.prototype.forEach.call(all_elms, function (el) {
        el.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

function changeSize(chosen) {
    let all_elms = document.getElementsByClassName('checkNEW');
    Array.prototype.forEach.call(all_elms, function (el) {
        el.classList.remove("checkNEW");
        el.classList.add("checkOLD");
    });
    chosen.classList.remove("checkOLD");
    chosen.classList.add("checkNEW");
}