let mysong = {
    name: "New Dawn",
    artist: "Music Momentum",
    length: "3:35",
    image: "https://vignette.wikia.nocookie.net/spritechronicles/images/3/36/Wiki_sonic_icon.jpg/revision/latest/scale-to-width-down/340?cb=20160918221002",
    link: "www.instagram.com",
}

let allsongs = [mysong];

$("button").click(function() {

let newsong = {
    name: $(".songname").val(),
    artist: $(".songartist").val(),
    length: $(".songlength").val(),
    image: $(".songimage").val(),
    link: $(".songlink").val(),
}

allsongs.push(newsong);

console.log(allsongs);

$(".name").append(`<p> ${newsong["name"]} </p>`);
$(".artist").append(`<p> ${newsong["artist"]} </p>`);
$(".length").append(`<p> ${newsong["length"]} </p>`);
$(".image").append(`<p><img src="${newsong["image"]}"></img> </p>`);
$(".link").append(`<p><a href="${newsong["link"]}">Listen</a></p>`);

$(".songname").val('');
$(".songartist").val(''); 
$(".songlength").val(''); 
$(".songimage").val(''); 
$(".songlink").val(''); 

$(".cartamount").html(allsongs.length)
 });





