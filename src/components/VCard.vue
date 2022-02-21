<template>
  <div class="wrapper">
    <VInput 
      label="Имя"
      v-model="props.card.fName"
      class="fname"
    />
    <VInput 
      label="Возраст"
      v-model="props.card.age"
      class="age"
    />
    <div class="del" @click="remove">Удалить</div>
  </div>
</template>

<script setup>
import VInput from './VInput.vue';

const props = defineProps({
  card: {
    type: Object,
    default: () => ({
      id: 0,
      fName: '',
      age: '',
    }),
  },
});
const emits = defineEmits(['removeCard'])
function remove(){
  emits('removeCard', props.card.id)
}
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
    cursor: pointer;
    &:hover{
      color: #7acef8;
    }
  }
}
</style>