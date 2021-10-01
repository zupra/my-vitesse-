<template>

<div class="Sidebar flex flex-col p-4">
  <div class="flex items-center text-sm">
    <img src="https://icongr.am/material/newspaper-variant-outline.svg?size=24&color=315cb2" alt="">
    <div class="ml-3 font-light tracking-wide text-gray-500">МАКЕТЫ</div>
  </div>


  <div class="mt-4 mb-1 text-xs tracking-wide text-gray-500">НОВОСТИ</div>
  <nav class="text-sm font-light flex flex-col leading-none gap-y-1 text-gray-600">
    <N-link to="/templates/news" 
      class="pl-1 py-1 hover:text-blue-600">
      Новости (список)
    </N-link>
    <N-link to="/templates/news/item" 
      class="pl-1 py-1 hover:text-blue-600">
      Новости (страница новости)
    </N-link>
  </nav>

  <div class="mt-4 mb-1 text-xs tracking-wide text-gray-500">ОБРАЩЕНИЯ</div>
  <nav class="ml-1 text-sm font-light flex flex-col leading-none gap-y-1 text-gray-600">
    <N-link to="/templates/complaints" 
      class="pl-1 py-1 hover:text-blue-600">
      Обращения (список)
    </N-link>
    <N-link to="/templates/complaints/item_add" 
      class="pl-1 py-1 hover:text-blue-600">
      Обращения (Подать обращения)
    </N-link>
    <N-link to="/templates/complaints/item" 
      class="pl-1 py-1 hover:text-blue-600">
      Обращения (страница обращения)
    </N-link>
  </nav>


  <div class="mt-4 mb-1 text-xs tracking-wide text-gray-500">ГОЛОСОВАНИЯ</div>
  <nav class="ml-1 text-sm font-light flex flex-col leading-none gap-y-1 text-gray-600">
    <N-link to="/templates/votings" 
      class="pl-1 py-1 hover:text-blue-600">
      Голосования (список)
    </N-link>
    <N-link to="/templates/votings/item" 
      class="pl-1 py-1 hover:text-blue-600">
      Голосования (страница голосования)
    </N-link>
  </nav>


 




  <h3 class="bryndza uppercase text-gray-700 py-3">
    UI
  </h3>
  <N-link to="/UI/colors" 
  class="text-sm text-gray-500 hover:text-blue-500 flex items-center pb-3 pl-3">
    ЦВЕТ
  </N-link>

  <N-link to="/UI/typography" 
  class="text-sm text-gray-500 hover:text-blue-500 flex items-center pb-3 pl-3">
    Типографика
  </N-link>

  <N-link to="/UI/badge" 
  class="text-sm text-gray-500 hover:text-blue-500 flex items-center pb-3 pl-3">
    badge
  </N-link>

  <N-link to="/UI/avatar" 
  class="text-sm text-gray-500 hover:text-blue-500 flex items-center pb-3 pl-3">
    avatar
  </N-link>





  <h3 class="bryndza uppercase text-gray-700 py-3">
    Section
  </h3>
  <N-link to="/demo_5" 
  v-for="It in 10"
  :key="`5_${It}`"
  class="text-sm text-gray-500 hover:text-blue-500 flex items-center pb-3 pl-3">
    Ссылка_{{It}}
  </N-link>

  <h3 class="bryndza uppercase text-gray-700 py-3">
    Section
  </h3>
  <N-link to="/demo_4" 
  v-for="It in 10"
  :key="`4_${It}`"
  class="text-sm text-gray-500 hover:text-blue-500 flex items-center pb-3 pl-3">
    Ссылка_{{It}}
  </N-link>
</div>

</template>

<script>
export default {

}
</script>

<style>

/* .nuxt-link-active {} */
.Sidebar .nuxt-link-exact-active {
  @apply text-blue-600 bg-gray-100 font-bold;
}


</style>