let i = 0

$(".inc").click(() => {
    i++;
    $("#count").text(i)
})

$(".dec").click(() => {
    i--;
    $("#count").text(i)
})