document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselExampleCaptions');
    var carouselItems = carousel.querySelectorAll('.carousel-item iframe');

    function stopVideo(iframe) {
        var src = iframe.src;
        iframe.src = '';
        iframe.src = src;
    }

    function stopAllVideos() {
        carouselItems.forEach(function (iframe) {
            stopVideo(iframe);
        });
    }

    carousel.addEventListener('slide.bs.carousel', function () {
        stopAllVideos();
    });
});