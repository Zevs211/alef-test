<template>
  <div class="wrapper">
    <VInput 
      label="Имя"
      v-model="fName"
      class="fname"
    />
    <VInput 
      label="Возраст"
      v-model="age"
      class="age"
    />
    <div class="del">Удалить</div>
  </div>
</template>

<script setup>
import VInput from './VInput.vue';


</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  .fname{
    margin-right: 18px;
  }
  .age{
    margin-right: 18px;
  }
  .del{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    
    display: flex;
    align-items: center;

    color: #01A7FD;
  }
}
</style>