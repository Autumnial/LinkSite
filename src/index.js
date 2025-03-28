var col = true;
var nsfw_div = document.getElementById("collapse")

function toggle_vis() {
    if (col) {
        nsfw_div.style.visibility = "visible"
    } else {

        nsfw_div.style.visibility = "collapse"
    }
    col = !col
}

document.getElementById("nsfw-header").onclick = toggle_vis

