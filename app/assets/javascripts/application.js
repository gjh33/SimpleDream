// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require owl.carousel
//= require owl.navigation
//= require owl.lazyload
//= require owl.autoplay
//= require jquery_ujs
//= require turbolinks
//= require_self
//= require_tree .

//Initialization
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    loop: true,
    center: true,
    lazyLoad: true
  });
});
