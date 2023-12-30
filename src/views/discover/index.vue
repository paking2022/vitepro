<template>
  <div>发现页:{{ count }}</div>
</template>
<script setup lang="ts">
import { useCounterStore } from "@/store";
import { storeToRefs } from "pinia";
const store = useCounterStore();
const { count } = storeToRefs(store);
</script>
<style lang="scss" scoped></style>
