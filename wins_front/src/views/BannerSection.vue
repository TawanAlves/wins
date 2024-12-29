<template>
   <section>
      <div class="container">
         <!-- <div class="cobertura"> -->
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
               <!-- <img v-for="weapon in weaponDetails" :key="weapon.name" :alt="weapon.name" class="gun" :src="weapon.imageUrl"> -->
            </div>

            <!-- <img v-for="weapon in weaponDetails" :key="weapon.name" :alt="weapon.name" class="gun" :src="weapon.imageUrl"> -->

            <!-- <p>{{ this.weaponNames   }}</p> -->
         </div>
      <!-- </div> -->
      </div>

   </section>
</template>

<script>
   import api from "@/api/api.js";
   export default {
      data(){
         return{
            wearpons: [],
            weaponNames: [],
            weaponDetails: [],
         };
      },
      mounted() {
         this.getAllWeapons();
      },
      methods: {
      async getAllWeapons() {
      //    api.getAllWeapons()
      //    .then(response => console.log(response.data))
      //    .catch(error => console.error('Erro:', error));
      // },
      try {
            const getWeapons = await api.getAllWeapons();
            this.Weapons = getWeapons.data;

            this.weaponNames = this.Weapons.map(weapon => weapon.images[0]);

                     for (let i = 0; i < this.weaponNames.length; i++) {
            const name = this.weaponNames[i];

            const response = await api.getWeapon(name);

            const imageUrl = response.data;

            this.weaponDetails.push({ name, imageUrl });
         }
                     } catch (error) {
                     console.log(error);
            }
         }}
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
    background-image: url("@/assets/banner2.png") ;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 1030px;
    width: 98vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
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
   @media (min-width: 562px) and (max-width: 1014px){
      .divisor{
         max-width: 100%;
         
      }
      .container_armas{
         flex-wrap: wrap;
         justify-content: center
      }
   }


   @media (max-width: 562px){
      .divisor{
         max-width: 100%;
      }
      .container_armas{
         flex-wrap: wrap;
         justify-content: center
      }
      .content h1{
         font-size: 35px;
         line-height: 30px;   
      }

   }

</style>