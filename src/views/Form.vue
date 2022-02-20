<template>
  <div class="container">
    <div class="personal-info">
      <div class="header-info-text">Персональные данные</div>
      <div class="fname">
        <VInput 
          label="Имя"
          v-model="fName"
        />
      </div>
      <div class="age">
        <VInput 
          label="Возраст"
          v-model="age"
        />
      </div>
    </div>
    <div class="children">
      <div class="header-child-text">
        <div>Дети (макс.5)</div><VButton>Добавить ребенка</VButton>
      </div>
      <div class="card">
        <VCard/>
      </div>
    </div>
    <div class="btn-save">
      <VButton type="empty">Сохранить</VButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VInput from '../components/VInput.vue';
import VButton from '../components/VButton.vue';
import VCard from '../components/VCard.vue';

const fName = ref('');
const age = ref('');
const children = ref([]);
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .personal-info{
    position: relative;
    display: flex;
    flex-direction: column;

    margin-top: 106px;
    width: 50%;
    height: 166px;
    .header-info-text{
      margin-bottom: 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      display: flex;
      align-items: center;

      color: #111111;
    }
    .age{
      margin-top: 10px;
    }      
  }
  .children{
    display: flex;
    flex-direction: column;
    margin-top: 44px;
    width: 50%;
    height: 166px;
    .header-child-text{
      margin-bottom: 20px;
      position: relative;
      display: flex;
      justify-content: space-between;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      color: #111111;
      .btn{
        position: absolute;
        top: -11px;
        right: 0px;
      }
    }  
  }
  .btn-save{
    width: 50%;
    margin-top: 30px;
  }
}
</style>

