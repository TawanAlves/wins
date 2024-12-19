<template>
   <section class="container_counter">

    <div class="counter">
      
      <div class="counter_left">
        <div class="content_counter_left">
          <h1>NOME DO PRODUTO</h1>
          <p class="desconto" style="font-weight: 700">50% DE DESCONTO</p>
          <p>Lorem ipsum dolor sit amet consectetur. Aliquet ac 
            massa metus faucibus viverra laoreet varius. Sit ut.</p>
            
            <div style="padding-bottom: 26px">count</div>
            
            <img alt="button" class="blue_btn" src="@/assets/btn_blue.png" width="232px
            " height="48px">
          </div>
        </div>
        <div class="content_counter_right"></div> 
        
      </div>
  </section>
</template>

<script>
   export default {
      
   }
</script>

<style scoped>
 .container_counter{
    background-color: #0F1B35;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .counter{
    display: flex;
    color:#ffffff;
    background-color: #0F1B35;
    max-width: 1500px;
    width: 100%;
  }

  .counter_left{
    width: 50%;
    background-color: #0F1B35;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content_counter_left{
    max-width: 453px;
    display: flex;
    flex-direction: column;
  }
  .counter_left h1{
    font-weight: 700;
    font-size: 40px;
  }

  .desconto{
    background-color: #4996D5;
    padding: 18.5px 28.5px;
    max-width: 207px;
    margin: 40px 0 24px;
    
  }

  .content_counter_right{
    background-image: url("@/assets/counter_img.png") ;
    background-color: #0F1B35;
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;
    height: 573px;
    width: 80%;
  }

  @media (min-width: 481px) and (max-width: 1014px){
   .counter{
    flex-direction: column    
  }
  .content_counter_right{
    height: 400px;
    width: 100%;
  }
  .counter_left{
    width: 100%;
    padding: 50px 0; 

  }
  }

  @media (max-width: 481px){
   .counter{
    flex-direction: column    
  }
  .content_counter_right{
    height: 400px;
    width: 100%;
   
  }
  .counter_left{
    width: 100%;
    padding: 0 10px;
  }

  .counter_left h1{font-size: 35px;}
  
  }
</style>