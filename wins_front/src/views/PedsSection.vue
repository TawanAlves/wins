<template>
   <section>
      <div class="container">
      <div class="header">   
         <p class="name">TUTA</p>      
         
         <p>3500 QUantions</p>
      </div>
      <div class="images">
         <img alt="peds" class="off" src="@/assets/lojike.png" >
         <img alt="peds" class="off" src="https://wins.company/assets/TesteFrontEnd/peds/PEDCOM0001.webp" >
         <img alt="peds" class="off" src="@/assets/penunbro.png" >
      </div>
      <p>{{pedsNames  }}</p>
      <p>{{pedsDetails  }}</p>


      <div class="infos">
         <h1>PEDDINGS</h1>
         <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
         <img alt="button" class="blue_btn" src="@/assets/btn_blue.png" width="232px" height="48px">
      </div>
      </div>
   </section>
</template>

<script>
   import api from "@/api/api.js";
   export default {
   components: {
   },
      data(){
         return{
            peds: [],    
            pedsNames: [],   
            pedsDetails: [],      
            images: [
        // URLs das suas imagens
        'https://wins.company/assets/TesteFrontEnd/peds/PEDCOM0001.webp',
        'https://wins.company/assets/TesteFrontEnd/peds/PEDCOM0001.webp',
        'https://wins.company/assets/TesteFrontEnd/peds/PEDCOM0001.webp',
      ]
  
         };
      },
      mounted() {
         console.log("iniciou");
         this.getAllPeds();
      },
      methods: {
      // async getAllPeds() {
      //     api.getAllPeds()
      //    .then(response => console.log(response.data))
      //    .catch(error => console.error('Erro:', error));
      // }

      async getAllPeds() {

      // api.getAllUniforms()
      // .then(response => console.log(response.data))
      // .catch(error => console.error('Erro:', error));
         try {
         const getAllPeds = await api.getAllPeds();
         this.peds = getAllPeds.data;
         
         this.pedsNames = this.peds.map(peds => peds.images[0]);

         for (let i = 0; i < this.pedsNames.length; i++) {
            const name = this.pedsNames[i];

            const response = await api.getPed(name);

            const imageUrl = response.data;
            
            this.pedsDetails.push({ name, imageUrl });
            
         }         
         } catch (error) {
         console.log(error);
         }
      },


      }
   }
</script>

<style scoped>
   section{
      background-color: #070d1d;
      backdrop-filter: blur(119px);
      color: #ffffff;
      padding: 112px 0 170px;
      display: flex;
      justify-content: center; 

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