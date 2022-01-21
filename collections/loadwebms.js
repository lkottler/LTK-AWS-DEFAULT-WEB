
var dir = "/webms/";
var fileextension = ".webm";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all .png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            $("body").append("<video src='" + dir + filename + "'>");
        });
    }
});
/*
var video = document.createElement('video');

video.src = "video/webm";
video.src = "webms/hype.webm";
video.autoplay = true;


video.setAttribute("width", "320");
video.setAttribute("height", "240");
video.setAttribute("controls", "controls");
document.body.appendChild(video);
*/