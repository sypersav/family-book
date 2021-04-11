var images = ["father.jfif",
    "big brother.jfif",
    "little brother.jfif",
    "mother.jfif"
];
var text = [
    "this is my father",
    "this is me",
    "this is my little brother",
    "this is my mother"
]
var i = 0;

function nextslide() {
    document.getElementById("imgo").src = images[i];
    i++;
    if (i == 4) {
        i = 0;
    }

    document.getElementById("texto").src = text[i];
    i++;
    if (i == 2) {
        i = 0;
    }
}