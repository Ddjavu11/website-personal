$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar"); // Memilih elemen navbar
        if ($(this).scrollTop() > $nav.height()) { // Memeriksa apakah scroll melebihi tinggi navbar
            // Tindakan jika scroll lebih besar dari tinggi navbar
           $nav.addClass("scrolled");
           $nav.removeClass("navbar-dark");
           $nav.addClass("navbar-light");
        } else {
            $nav.removeClass("scrolled");
            $nav.addClass("navbar-dark");
            $nav.removeClass("navbar-light");
        }
    });
});
