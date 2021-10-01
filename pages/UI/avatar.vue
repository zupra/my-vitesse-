<template>
  <div class="-space-x-6 avatar-group">
    <div class="avatar" v-for="It in 4" :key="It">
      <img :src="`http://daisyui.com/tailwind-css-component-profile-${It}@56w.png`">
    </div>

    <div class="avatar bg-gray-200 flex">
      <span class="m-auto">+99</span>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.avatar-group{
  @apply flex overflow-hidden;
  .avatar{
    @apply w-16 h-16
    @apply rounded-full border-4 border-white border-width-4px overflow-hidden;
  }
}
</style>