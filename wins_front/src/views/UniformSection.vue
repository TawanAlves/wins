<template>
  <section>
      <div class="nav">
         <a href="#" class="other"> Caixas</a>
         <a href="#" class="a_uniform">Uniforme</a>
         <a href="#" class="other">Seleção</a>
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
            
            <!-- <img alt="uniforme" class="uniform" src="https://wins.company/assets/TesteFrontEnd/uniforms/SETCOMGAM0009-F.webp" > -->
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >
            <img alt="uniforme" class="uniform" src="@/assets/uniform.png" >         

            <img v-for="uniform in uniforms" :key="uniform.name" :alt="uniform.name" class="uniform" :src="uniform.imageUrl">
           
         </div>
         <!-- <div class="uniform_content">
            <img alt="uniforme" class="uniform" src="https://wins.company/assets/TesteFrontEnd/uniforms/SETCOMGAM0009-F.webp" >
            <img v-for="uniform in uniformDetails" :key="uniform.name" :alt="uniform.name" class="uniform" :src="uniform.imageUrl">
         </div>
         <p>{{this.uniformDetails}}</p> -->
      </div>
  </section>
</template>

<script>
    import api from "@/api/api.js";

   export default {
      data(){
         return{
            uniforms: [], 
            firstImageNames: [],
            uniformDetails: []   
         };
      },

      mounted() {
         this.getAllUniforms();
         // this.getUni();
      },
   methods: {
    
    
      async getAllUniforms() {

         // api.getAllUniforms()
         // .then(response => console.log(response.data))
         // .catch(error => console.error('Erro:', error));
            try {
            const getAllUniforms = await api.getAllUniforms();
            this.uniforms = getAllUniforms.data;
            
            this.firstImageNames = this.uniforms.map(uniform => uniform.images[0]);

            for (let i = 0; i < this.firstImageNames.length; i++) {
               const name = this.firstImageNames[i];
               const response = await api.getUniform(name);

               const imageUrl = response.data;             
               this.uniformDetails.push({ name, imageUrl });
               
            }         
            } catch (error) {
            console.log(error);
            }
         },

         // async getUniforms() {

         // api.getUniform(`NOME`)
         // .then(response => console.log(response.data))
         // .catch(error => console.error('Erro:', error));    

         // api.getAllPeds()
         // .then(response => console.log(response.data))
         // .catch(error => console.error('Erro:', error));

         // api.getAllWeapons()
         // .then(response => console.log(response.data))
         // .catch(error => console.error('Erro:', error));

    }
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
      margin-top: -42px; 
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
      padding: 0 140px;
      background-color: #15223F;
      max-width: 600px;
      align-self:center ;
   }
   .other, .a_uniform{
      padding: 30px 0;
   }

   a{
      font-size: 16px;
      text-decoration: none;
      color: #ffffff !important;      
   }
   .a_uniform{
      border-bottom: 3px solid #FF1A6C;
   }
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
   .nav{padding: 0 30px;}
   .uniform_container_header{
      flex-direction: column;
      row-gap: 20px;
      align-items: center;
   }

}
</style>