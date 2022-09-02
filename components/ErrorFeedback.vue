<script setup>
defineProps(["error"]);
</script>
<template>
  <div class="text-xs mt-3">
    <span class="text-red-400">
      {{ error }}
    </span>
  </div>
</template>
