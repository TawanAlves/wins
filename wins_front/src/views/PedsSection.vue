<template>
   <section>
      <div class="container">
      <div class="header">   
         <p class="name">TUTA</p>      
         
         <p>3500 QUantions</p>
      </div>
      <div class="images">
         <img alt="peds" class="off" src="@/assets/lojike.png" >
         <img alt="peds" class="on" src="@/assets/tuta.png" >
         <img alt="peds" class="off" src="@/assets/penunbro.png" >
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
   export default {
      
   }
</script>

<style scoped>
   section{
      background-color: #070d1d;
      backdrop-filter: blur(119px);
      color: #ffffff;

      display: flex;
      justify-content: center;
      padding: 112px 0 170px;

   }
   .header{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 32px;
   }

   .infos{
      max-width: 432px;
   }
   h1{
      font-size: 40px;
      font-weight: 700;
   }
   .infos p{
      padding: 16px 0 32px;
   }

</style>