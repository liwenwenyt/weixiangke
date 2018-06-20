// $(function(){
// 	var mySwiper = new Swiper ('.swiper-container', {
//    autoplay:true,
    
//     // 如果需要分页器
//     pagination: {
//       el: '.swiper-pagination',
//     },
//    })
// })


var mySwiper = new Swiper('.swiper-container', {
  // autoplay:true,//等同于以下设置
  pagination : '.swiper-pagination',
  paginationHide :true,
  paginationClickable :true,
  loop : true,
  speed:3000,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
});