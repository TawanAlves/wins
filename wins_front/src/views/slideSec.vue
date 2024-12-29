<template>
  <section>
    <div class="container">
      <div class="header">   
         <p class="name">TUTA</p>               
         <p class="quant">3500 QUantions</p>
      </div>
    <swiper :modules="modules"
      :slides-per-view="3"
      :breakpoints="breakpoints"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"    
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :effect="'coverflow'"
      :centeredSlides="true"
      :loop="true"
      :coverflowEffect="{
        rotate: 50,
        stretch: 5,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }">
              <swiper-slide v-for="(image, index) in images" :key="index" data-swiper-autoplay="200">
                <div style=""> <img :src="image" alt="Imagem do Slide"> </div>
              </swiper-slide>
              
    </swiper>
    <div class="container_floor">
      <img alt="chão" class="floor" src="@/assets/floor.png" >
    </div>

      <div class="infos">
          <h1>PEDDINGS</h1>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <img alt="button" class="blue_btn" src="@/assets/btn_blue.png" width="232px" height="48px">
      </div>

    </div>
    </section>
 
</template>

<script>
  import { Swiper, SwiperSlide,  } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import 'swiper/css';
  import { Navigation, Pagination, EffectCoverflow, Autoplay   } from 'swiper/modules';   
   export default {
      components: {
        Swiper,
        SwiperSlide
   
   },
   setup() {
      const onSwiper = (swiper) => {
        console.log();
      };
      const onSlideChange = () => {
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
      };
    },
  
      data(){
         return{
          breakpoints: {
            0: {
          slidesPerView: 1, // Aplicado para telas menores que 640px
        },
        1040: {
          slidesPerView: 3, // Padrão para telas maiores ou iguais a 640px
        },
      },
            images: [
        // URLs das suas imagens
        'https://wins.company/assets/TesteFrontEnd/peds/PEDCOM0000-M.webp',
        'https://wins.company/assets/TesteFrontEnd/peds/PEDCOM0000-F.webp',
        'https://wins.company/assets/TesteFrontEnd/peds/PEDCOM0002.webp',
        'https://wins.company/assets/TesteFrontEnd/peds/PEDCOM0001.webp',
        'https://wins.company/assets/TesteFrontEnd/peds/PEDCOM0003.webp',
        
      ]
         }}
      
   }
</script>

<style scoped>
  section{
    background-color: #070d1d;
      backdrop-filter: blur(119px);
      color: #ffffff;
      padding: 110px 0 110px;
      display: flex;
      justify-content: center;     
  }
  .container_floor{
    margin-top: -62px;
    display: flex;
    padding-left: 100px;
  }
  .floor{
    margin: 0 auto;
    text-align: center
  }
  .infos{
    z-index: 100;
    max-width: 432px;
    margin-top: -105px;
  }
  h1{
      font-size: 40px;
      font-weight: 700;
   }
   .infos p{
      padding: 16px 0 32px;
   }
   .container{
    width: 100%;    
    max-width: 1280px;
   }

   .header{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 40px;
   }
   .name{
    padding-bottom: 16px;
   }
   .quant{
    clip-path: polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%);
      background: #568EFF;
    padding: 8px 20px;
   }
   .swiper-slide-prev{
    filter: blur(5px);
   }
   .swiper-slide-next{
    filter: blur(5px);
   }
   .swiper-button-prev{
    color: red !important;
   }

   @media (min-width: 481px) and (max-width: 1014px){
    .floor{
    max-width: 100%;
  }
  .infos{
    align-self: center;
    margin: 0 auto;
    padding: 20px 10px 0;
    text-align: center;
  }
 

}


@media (max-width: 481px){
  .floor{
    max-width: 100%;
  }
  .infos{
    margin-top: 0px;
    padding: 20px 10px 0;
    text-align: center;
  }
  .infos h1{
    font-size: 35px;
  }

  .container_floor{
    padding-left: 0;
  }
 
}
</style>