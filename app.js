function parseParms(str) {
    var pieces = str.substring(1).split("&"), data = {}, i, parts;
    // process each query pair
    for (i = 0; i < pieces.length; i++) {
        parts = pieces[i].split("=");
        if (parts.length < 2) {
            parts.push("");
        }
        data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
    return data;
}

var openPhotoSwipe = function() {

    var xmlhttp = new XMLHttpRequest();
    var url = "/images.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var images = JSON.parse(this.responseText);
            render(images);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function render(images) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // define options (if needed)
        var options = {
            index: parseInt(parseParms(location.hash).pid, 10),    
            history: true,
            focus: false,
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
            galleryPIDs: true
        };
        
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, images, options);
        gallery.init();
    }    
};

openPhotoSwipe();

document.getElementById('btn').onclick = openPhotoSwipe;