<template>
   <header>
    <div class="header_content">
      <img alt="win logo" class="logo" src="@/assets/Logo.png" />    
      <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/about">NOTICIAS</RouterLink>
        <RouterLink to="/">LOJA </RouterLink>
        <RouterLink to="/">ESTÁTICAS </RouterLink>
        <RouterLink to="/">CAMPEONATO</RouterLink>
        <RouterLink to="/">SUPORTE </RouterLink>
        <RouterLink to="/">CL </RouterLink>
      </nav>
      <img alt="menu icon" class="menu_icon" src="@/assets/menu.svg" />
      <div class="nav_right">
        <img alt="exit button" class="exit_btn" src="@/assets/exit_btn.png" />
        <img alt="exit button" class="web_btn" src="@/assets/web.svg" />
        <img alt="exit button" src="@/assets/user.png" />
      </div>
    </div>
  </header>
</template>

<script>
   export default {
      
   }
</script>

<style scoped>
header{
    background-color: #000916;
    color: #ffffff !important; 
    width: 100%;
    display: flex;
    padding: 28px 0;
    justify-content: center; 
  }
  a{
    text-decoration: none;
    color: #FFFFFFB2 !important; 
  }
  .header_content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 1280px; 
  }
  nav{
    display: flex;
    column-gap: 20px;
    align-self: center;
    font-size: 16px
  }
  .menu_icon{
    display: none;
  }
  .nav_right{
    display: flex;
    column-gap: 16px;
  }

  @media (min-width: 481px) and (max-width: 1014px){
    nav{
    display: none;
  }
  
    .logo{
      width: 190px;
      height: 40px;
  }
  .exit_btn{
    width: 120px;
    height: 40px;

  }
  .menu_icon{
    display: block;
    width: 30px;
  }
  .nav_right{
    column-gap: 10px;
  }
  }

  @media (max-width: 481px){
   .exit_btn, .web_btn, nav{
    display: none;
  }
  .menu_icon{
    display: block;
    width: 30px;
  }
  }
</style>