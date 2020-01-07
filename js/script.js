let songnames = ["Sdj lsdkf", "sjkfh jd"];
let songartists = [];
let songlengths = [];
let images = [];
let links = [];


songnames.forEach(function(songname) {
    $(".songs").append(songname);
});

songartists.forEach(function(songartist) {
    $(".songartists").append(songartist);
});

songlengths.forEach(function(songlength) {
    $(".songlengths").append(songlength);
});

images.forEach(function(image) {
    $(".images").append(`<img src="${image}"></img>`);
});

links.forEach(function(link) {
    $(".links").append(`<a href="${link}">Listen</a>`);
});



