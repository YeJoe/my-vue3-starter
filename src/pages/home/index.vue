<template>
  <div >
    <h1>Home</h1>
    <div v-text="testStore.name" />
    <button @click="onUpdateName">test pina</button>
    </div>
    <div>
    <p>This is Icon Test</p>
      <i-carbon-accessibility/>
      <i-mdi-account-box style="font-size: 2em; color: red"/>
    </div>

</template>

<script setup lang="ts">
import { useTestStore } from "@/pinia/test";

const testStore = useTestStore();
const onUpdateName = () => {
  // 通过 actions 去修改 state
  testStore.updateName("pina可以用");
};
</script>
<style scoped lang="less">
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
    button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #627eda;
    cursor: pointer;
    transition: border-color 0.25s;
  }
}

</style>
