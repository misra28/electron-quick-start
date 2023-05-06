document.onkeydown = function(e) {
    switch (e) {
        case 65:
            document.getElementById('A').play();
            break;
        default:
            console.log("Key is not found!");
    }
};