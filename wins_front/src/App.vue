<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

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

  <RouterView />
</template>

<style scoped>
  header{
    background-color: #000916;
    color: #ffffff !important; 
    width: 100vw;
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

/* 
<!-- 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> --> */
