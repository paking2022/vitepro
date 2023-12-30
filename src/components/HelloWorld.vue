<template>
  <div class="count">{{ count }}</div>
  <Button @click="addMethod">add</Button>
</template>
<script setup lang="ts">
import { useCounterStore } from "@/store";
import { storeToRefs } from "pinia";
const store = useCounterStore();
const { count } = storeToRefs(store);
const addMethod = () => {
  store.increment();
};
</script>
<style lang="scss" scoped>
.count {
  width: 100px;
  height: 100px;
  background: red;
}
</style>
