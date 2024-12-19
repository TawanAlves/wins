<template>
  <section>
      <div class="nav">
         <a href="#">Caixas</a>
         <a href="#" class="a_uniform">Uniforme</a>
         <a href="#">Seleção</a>
      </div>
      <div class="uniform_container">
         <div class="uniform_container_header">
            <h1>Uniforme</h1> 
            <select name="drop" id="drop">
               <option value="lendário">Landario</option>
               <option value="lendário">Landario</option>
               <option value="lendário">Landario</option>               
            </select>
         </div>
         <div class="uniform_content">
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >         
           
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
      background-color: #070D1D;
      backdrop-filter: blur(154px);
      padding: 160px;
      color: #ffffff;

      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .uniform_content{
      display: flex;
      gap:8px;
      flex-wrap: wrap;
      padding-top: 40px;
      justify-content: center;
   }
   .uniform_container{
      padding-top: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .uniform_container_header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1018px;   
      width: 100%;
   }

   .nav{
      display: flex; 
      gap: 11px;
      padding: 30px 140px;
      background-color: #15223F;
      max-width: 600px;
      align-self:center ;
   }

   a{
      font-size: 16px;
      text-decoration: none;
      color: #ffffff !important;      
   }
   /* .a_uniform{
      border-bottom: 8px solid #FF1A6C;
   } */
   h1{
      font-weight: 700;
      font-size: 32px;
   }
   img{
      width: 197px;
      background-color: #0F1B35;

   }
   select{
      padding: 6px 16px;
      clip-path: polygon(
    4% 14%, 8% 0%, 100% 0%, 100% 74%, 96% 88%, 92% 100%, 0% 100%, 0% 36%
  )      ;
      height: 32px;
      width: 140px;
   }

 @media (min-width: 481px) and (max-width: 1014px){
   .uniform_container_header{
      flex-direction: column;
      row-gap: 20px;
      align-items: center;
   }
}


@media (max-width: 481px){
   .nav{padding: 30px 30px;}
   .uniform_container_header{
      flex-direction: column;
      row-gap: 20px;
      align-items: center;
   }

}
</style>