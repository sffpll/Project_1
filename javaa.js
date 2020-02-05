


//BORDER

function firstFunction() {
    var border = document.querySelector("#b1");
    border.style.borderColor = "rgb(252, 244, 157)";
    console.log("working1");
}

function secondFunction() {
    var border = document.querySelector("#b1");
    border.style.borderColor = "pink";
    console.log("working2");
}


//GHOPHER, CAT, MONSTER

function thirdFunction() {
    var gopher = document.querySelector("#image1");
   gopher.classList.toggle("gopherLarge");
    console.log("working neeeew");
}

function fourthFunction() {
    var cat = document.querySelector("#image2");
    cat.classList.toggle("catLarge");
    console.log("working cat");
}

function fifthFunction() {
    var monster = document.querySelector("#image3");
    monster.classList.toggle("monsterLarge");
    console.log("working monster");
}