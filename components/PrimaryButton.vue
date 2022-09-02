<template>
  <button
    class="font-semibold p-2 text-xs rounded duration-300"
    :class="[
      $attrs.disabled
        ? '!bg-gray-light'
        : 'hover:bg-primary-sky-darker bg-primary-sky ',
    ]"
  >
    <slot />
  </button>
</template>
