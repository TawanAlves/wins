<template>
   <section>
      <div class="container">
         <div class="cobertura">
         <div class="content">
            <h1>EXPLORE AS <br> SKINS ESPECIAIS</h1>
            <p>  Veja todos os produtos que você pode adquirir com <br  >
            Quantions em nosso jogo</p>
            <img alt="divisoria" class="divisor" src="@/assets/armas_soltas_divisorio.png" >
            <div class="container_armas">
               <img alt="Arma" class="gun" src="@/assets/arma1.png"/>
               <img alt="Arma" class="gun" src="@/assets/arma2.png"/>
               <img alt="Arma" class="gun" src="@/assets/arma3.png"/>
               <img alt="Arma" class="gun" src="@/assets/arma4.png"/>
               <img alt="Arma" class="gun" src="@/assets/arma3.png"/>

            </div>
         </div>
      </div>
      </div>

   </section>
</template>

<script>
   export default {

   }
</script>

<style scoped>
   section{
      background-color: #0F1B35;
      display: flex;
      justify-content: center;
      color: #ffffff;
      
   }
   .container{
    background-image: url("@/assets/banner_img.png") ;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding-top: 800px;
    height: 100vh;
    width: 98vw;
    display: flex;
    align-items: center;
    justify-content: center;   
   }
   .cobertura{
      margin-top: -800px;
      height: 130vh;
      width: 100vw;
      display: flex;
    align-items: center;
    justify-content: center;   
      background: linear-gradient(43.26deg, rgba(7, 13, 29, 0.83) 30.65%, rgba(15, 27, 53, 0.629611) 50.68%, rgba(15, 27, 53, 0) 71.27%);}
   .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      

   }

   .container_armas{
      display: flex; 
      gap:8px;
   }
   h1{
      font-weight: 700;
      font-size: 64px;
      text-align: center;
      line-height: 60px;
   }
   p{
      text-align: center;
      font-size: 16px;
   }

</style>