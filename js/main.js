$(function (){
    $('.slider_blog-inner').slick({
        dots: true,
        prevArrow:'<button type="button" class="slick-prev"> <img src="images/arrow-left.svg" alt="arrow"> </>',
        nextArrow:'<button type="button" class="slick-next"> <img src="images/arrow-right.svg" alt="arrow"> </>',
        responsive:[
            {
                breakpoint:769,
                settings:{
                    arrows:false,
                    autoplay:true,
                    autoplaySpeed:1500,
                }
            }
        ]
    }
    );
    
    $('.menu_btn').on("click", function ()  {
    $('.header__top-inner').toggleClass('header__top-inner--active');
    })
    
    let mixer = mixitup('.portfolio_content')
})

