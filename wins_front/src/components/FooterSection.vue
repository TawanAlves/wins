<template>
   <footer>
    <div class="footer_content">
    <div class="termos">
      <a href="#">Política de privacidade</a>
      <a href="#">Termos de serviço</a>
    </div>
    
    <img alt="logo footer" class="logo_wins" src="@/assets/logo_wins.png" width="194px" height="32px"/>

    
    <div class="footer_social">
    <img alt="Footer Icon" class="footer_icon" src="@/assets/discord.svg" />
    <img alt="Footer Icon" class="footer_icon" src="@/assets/instagram.svg" />
    <img alt="Footer Icon" class="footer_icon" src="@/assets/youtube.svg" />
    <img alt="Footer Icon" class="footer_icon" src="@/assets/tiktok.svg" />
    <img alt="Footer Icon" class="footer_icon" src="@/assets/x.svg" />
  </div>

    <img alt="classificacao " class="classificacao" src="@/assets/classificacao.jpg"  height="32px" />
    </div>
  </footer>
</template>

<script>
   export default {
      
   }
</script>

<style scoped>

a{
    color: #FFFFFFB2 !important; 
  }
  footer{
    display: flex;
    background-color: #0F1B35;
    padding: 180px 0 132px;
    justify-content: center;
    align-items: center;
  }
  .footer_content{
    display: flex;
    column-gap: 80px;
    max-width: 1280px;
  }

  .footer_social{
    display: flex;
    column-gap: 5px;
  }
  .termos{
    display: flex;
    align-items: center;
    column-gap: 30px;
  }

  @media (min-width: 481px) and (max-width: 1014px){
   .footer_content{
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
  }

  }


 @media (max-width: 481px){  
  .footer_content{
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
  }}
  
</style>