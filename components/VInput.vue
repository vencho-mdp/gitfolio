<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
    class="outline-none duration-300 text-xs p-1 border-2 border-primary-brown text-white bg-gray focus:border-primary-sky rounded"
  />
</template>
