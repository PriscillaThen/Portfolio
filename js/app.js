// When the page is ready, execute the function
(function(){
    /**
     * Portfolio items menu mouseover
     */
    function toggleImages() {
        // Select the image inside the a tag
        var image = $(this).find('img');

        // Select the source of the image (Ex. : images/b-w/image.png)
        var imageSource = image.attr('src');

        // Replace the by the opposite (ex. if b-w displayed, replace by colour version)
        if(imageSource.indexOf("b-w") > -1) {
            imageSource = imageSource.replace('b-w', 'color');
        } else {
            imageSource = imageSource.replace('color', 'b-w');
        }

        // Replace the image source by the new one
        image.attr('src', imageSource);
    }
    $('.color-change').hover(toggleImages, toggleImages);

    /**
     * Vertical signature adjustement
     */
    function verticalSignatureAdjustement() {
        var scrollPosition = $(this).scrollTop() + $(this).height();
        var footerPosition = $('footer').offset().top;

        if(scrollPosition > footerPosition) {
            var bottomPosition = scrollPosition - footerPosition + 10;
            $('#vertical-signature').css('bottom', bottomPosition+'px' );
        } else {
            $('#vertical-signature').css('bottom', '10px' );
        }
    }
    $(window).scroll(verticalSignatureAdjustement);
})();