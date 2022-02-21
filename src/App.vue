<template>
  <div id="nav">
    <div class="head">
      <router-link class="route-form" to="/">Форма</router-link>
      <router-link class="route-prev" to="/prev">Превью</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
#nav{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  .head{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 76px;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  }
  .route-form{
    margin-left: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    align-items: flex-end;

    color: #1111117a;
    text-decoration: none;
  }
  .route-prev{
    margin-left: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    
    display: flex;
    align-items: flex-end;
    
    color: #1111117a;
    text-decoration: none;
  }
}
</style>
