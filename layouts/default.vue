<template>
<div id="layout" :class="{hasSidebar: hasSidebar}">

  <div id="layout_sidebar" v-show="hasSidebar"
    class=" h-screen scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded scrollbar-thumb-rounded-md scrollbar-track-blue-100"
  >
    <!-- <LdSidebar /> -->
  </div>

  <div id="layout_header"
    class="border-b-2 border-gray-100 px-4 flex items-center"
  >
    <svg
      class="cursor-pointer hover:fill-blue-500"
      @click="hasSidebar = !hasSidebar"
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      version="1.1" width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="#81ABEE">
      <path :d="hasSidebar ? 'M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z': 'M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z'"/>
    </svg>

    <nav class="topNav m-auto flex gap-x-4">
      <N-link 
        v-for="(V,K,idx) in {'/templates/news': 'Новости', '/templates/votings': 'Голосования', '/templates/complaints': 'Обращения', '/templates/events':'Афиша', '/templates/projects': 'Проекты'}" :key="idx"
        :to="K"
        class="pl-1 py-1 hover:text-blue-500">
        {{V}}
      </N-link>
    </nav>
  </div>
  <div id="layout_body">
    <!-- <div class=" h-screen bg-blue-50"></div> -->
    <Nuxt class="mt-24 px-6" />
    <LdFooter />
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      hasSidebar: true
    }
  },
  watch: {
    '$route' () {
      this.hasSidebar = false
    }
  },
}
</script>

<style>
#layout {
  display: grid;
  height: 100vh;
  grid-template-rows: 44px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:  
    'header'
    'body';
}
#layout.hasSidebar {
  grid-template-columns: 240px 1fr;
  grid-template-areas:  
    'sidebar header'
    'sidebar body'; 
}
#layout_header {
  grid-area: header;
}
#layout_sidebar {
  grid-area: sidebar;
}
#layout_body {
  grid-area: body;
}
#layout_sidebar,
#layout_body {
  /* height: 100vh; */
  overflow-y: scroll;
  /* -webkit-overflow-scrolling: touch; */
}

.topNav .nuxt-link-active {
  @apply text-blue-600;
}

</style>
