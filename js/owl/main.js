// jQuery que realiza o carrossel de imagens

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})