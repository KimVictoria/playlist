let songnames = ['New Dawn'];
let songartists = ['Music Momentum'];
let songlengths = ['1:25'];
let images = ['https://vignette.wikia.nocookie.net/spritechronicles/images/3/36/Wiki_sonic_icon.jpg/revision/latest/scale-to-width-down/340?cb=20160918221002'];
let links = ['https://vignette.wikia.nocookie.net/spritechronicles/images/3/36/Wiki_sonic_icon.jpg/revision/latest/scale-to-width-down/340?cb=20160918221002'];


$("button").click(function() {

let retrievename = $(".songname").val()
songnames.push(retrievename);

let retrieveartist = $(".songartist").val()
songartists.push(retrieveartist);

let retrievelength = $(".songlength").val()
songlengths.push(retrievelength);

let retrieveimage = $(".songimage").val()
images.push(retrieveimage)

let retrievelink = $(".songlink").val()
links.push(retrievelink)

$(".name").empty(); 
$(".artist").empty();
$(".length").empty(); 
$(".image").empty();
$(".link").empty();

songnames.forEach(function(songname) {
    $(".name").append(`<p> ${songname} </p>`);
});

songartists.forEach(function(songartist) {
    $(".artist").append(`<p> ${songartist} </p>`);
});

songlengths.forEach(function(songlength) {
    $(".length").append(`<p> ${songlength} </p>`);
});

images.forEach(function(image) {
    $(".image").append(`<p><img src="${image}"></img> </p>`);
});

links.forEach(function(link) {
    $(".link").append(`<p><a href="${link}">Listen</a></p>`);
});
 

console.log(songnames)
console.log(songartists)
console.log(songlengths)
console.log(images)
console.log(links)

});





