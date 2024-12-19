<template>
   <div>
      <section>
         <div class="container">
            <h1>ITENS EM <span>DESTAQUE</span> </h1>
            <div class="itenscontainer">
               <div class="left">
                  <img alt="casaco" class="casaco" src="@/assets/coat1.png" />  
               </div>
               <div class="container_center">
                  <img alt="cyber" class="item_mid" src="@/assets/cyber.png" />
                  <img alt="sapato" class="item_mid" src="@/assets/shoes.png" />
                  <img alt="calça" class="item_mid" src="@/assets/pants.png" />
               </div>
               <div class="container_right">
                  <img alt="casaco" class="casaco" src="@/assets/coat2.png" />
               </div>
               
            </div>
            <p class="blue_btn">Acessar Jogo</p>

         </div>

      </section>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style scoped>
   section{
      padding: 120px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      
   }
   .container{
      max-width: 1248px;
   }
   h1{
      padding-bottom: 40px;
      font-size: 40px;
      font-weight: 700;
   }
   h1 > span {
      color: #ffffff;
      background-color: #4996D5;
      padding: 0 20px;
   }
   .itenscontainer{
      display: flex;
      gap: 24px;
   }
   .container_center{
      display: flex;
      flex-direction: column;
      gap: 18px;
   }

   .casaco, .item_mid{
      background-color: #ffffff;
      box-shadow: 0px 0px 20px 0px #00000024;

   }
   .item_mid{
       max-width: 432px;
      max-height: 148px; 
      padding: 12px 24px;
   }
   .casaco{
      height: 480px;
      width: 384px;
      padding: 0 68px 28px;      
   }

   .blue_btn{
      padding: 18.5px 125px;
      color: #ffffff;
      background-color: #4996D5;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin: 0 auto;
      max-width: 435px;
      margin-top: 16px;
   }

   

@media (min-width: 481px) and (max-width: 1014px){
   .itenscontainer{
      flex-direction: column;
      align-items: center;
   }
   .casaco{
      height: 360px;
      width: 330px;      
   }
   .item_mid{
      width: 330px;
      padding: 0;
   }
   .blue_btn{
      max-width: 80%;
      padding: 18.5px 60px;
   }

}


@media (max-width: 481px){
   .itenscontainer{
      flex-direction: column;
      align-items: center;
   }
   .casaco{
      height: 360px;
      width: 330px;      
   }
   .item_mid{
      width: 330px;
      padding: 0;
   }
   h1{
      text-align: center;
   }
   .blue_btn{
      max-width: 80%;
   padding: 18.5px 60px;
   }
}



</style>