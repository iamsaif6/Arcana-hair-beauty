$(document).ready(function(){


   	 /*=====================================
           PRODUCT-QUANTITY +/-
        ======================================*/  
          $('.num-in span').click(function () {
              var $input = $(this).parents('.num-block').find('input.in-num');
            if($(this).hasClass('minus')) {
              var count = parseFloat($input.val()) - 1;
              count = count < 1 ? 1 : count;
              if (count < 2) {
                $(this).addClass('dis');
              }
              else {
                $(this).removeClass('dis');
              }
              $input.val(count);
            }
            else {
              var count = parseFloat($input.val()) + 1
              $input.val(count);
              if (count > 1) {
                $(this).parents('.num-block').find(('.minus')).removeClass('dis');
              }
            }
            
            $input.change();
            return false;
          }); 


          
       // customer-review
          $('.testimonial-sec .owl-carousel').owlCarousel({
              autoplay :   false,
              smartSpeed : 1000,
              nav :  false ,
              loop: false,
              dots :  false ,
              autoplayHoverPause:true,
              items:1,
              margin:30,
              responsive:{
                  0:{
                      items:1,
                      autoplay: true,
                      loop: true,
                  },
                  576:{
                      items:2,
                      autoplay: true,
                      loop: true,
                  },
                  768:{
                      items:3,
                      autoplay: true,
                      loop: true,
                  },
                  991:{
                      items:4,
                      autoplay: true,
                      loop: true,
                  },
              }
          })

          //  sidebar menu

          $(".openmenu").click(function(){
             $("#mySidenav").fadeIn(4);
          })
          $(".closebtn").click(function(){
             $("#mySidenav").fadeOut(4);
          })


});

 	 

         