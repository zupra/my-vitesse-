<template>
  <footer class="text-white body-font  bg-blue-800 mt-96">
    <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <p class="mb-4">Библиотека компонентов</p>
        <img src="https://test.rosatom.city/images-svg/rir_b8e179.svg" alt="">
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class=" mascarpone text-white mb-3">Категория</h2>
          <nav class="list-none mb-10">
            <li v-for="(link, idx) in 4" :key="idx">
              <a class="text-white hover:text-red-300" href="#">Ссылка</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class=" mascarpone  text-white mb-3">Категория</h2>
          <nav class="list-none mb-10">
            <li v-for="(link, idx) in 4" :key="idx">
              <a class="text-white hover:text-red-300" href="#">Ссылка</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class=" mascarpone  text-white mb-3">Категория</h2>
          <nav class="list-none mb-10">
            <li v-for="(link, idx) in 4" :key="idx">
              <a class="text-white hover:text-red-300" href="#">Ссылка</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class=" mascarpone  text-white mb-3">Категория</h2>
          <nav class="list-none mb-10">
            <li v-for="(link, idx) in 4" :key="idx">
              <a class="text-white hover:text-red-300" href="#">Ссылка</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-900">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-white text-sm text-center sm:text-left">© 2021 Dev —
          <a href="https://wa.me/79261039948?text=from%20DOC" rel="noopener noreferrer" class="text-gray-400 ml-1" target="_blank">@Zupra</a>
        </p>


      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>