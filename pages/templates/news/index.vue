<template>


<main class="container mx-auto px-8">


  <!-- <pre>{{News}}</pre> -->

  <pre class=" h-prose overflow-scroll ">news:{{list}}</pre>

  <h1 class="cheddar mb-4">Новости</h1>


  <div class="flex justify-between items-center">
    <div class="flex gap-x-2 text-white my-10">
      <div 
      class="bg-rocky mozzarella flex items-center space-x-1 pl-2 pr-3 py-1 rounded-full"
      >
        <div class="flex-shrink-0 bg-white rounded-full w-2 h-2"></div>
        <div>Все новости</div>
      </div>
      <div 
      v-for="(It,idx) in ['Город', 'Муниципальные учреждения']" :key="idx"
      class="bg-alien mozzarella flex items-center space-x-1 pl-2 pr-3 py-1 rounded-full"
      >
        <div class="flex-shrink-0 bg-white opacity-16 rounded-full w-2 h-2"></div>
        <div>{{It}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="opacity-48">Показывать</div>
      <div class="ml-3">За всё время</div>
    </div>
  </div>



  <div class="flex flex-wrap gap-8">

    <N-link to="/templates/news/item" class="group w-1/4 flex-shrink flex-grow"
      v-for="(It,idx) in News"
      :key="idx"
    >
      <!-- <picture class="block aspect-9/16">
        <img
          class="shadow-lg rounded-3xl" 
          :src="`https://picsum.photos/id/${It+303}/480/320`" alt=""
        >
      </picture>
      <h3 class="taleggio mt-4 mb-2 group-hover:text-interstellar">Репетиции парада Победы в Мурманске состоятся 5 и 7 мая</h3>
      <div class="parmigiano opacity-48 group-hover:opacity-64">20 апреля</div> -->

      
      <figure>
        <picture class="block aspect-9/16">
          <img
            class="shadow-lg rounded-16" 
            :src="`https://picsum.photos/id/${idx+304}/480/320`" alt="">
        </picture>
        <figcaption>
          <h3 class="line-clamp-3 taleggio mt-4 mb-2 group-hover:text-interstellar">{{It.sentences}}</h3>
          <div class="parmigiano opacity-48 group-hover:opacity-64">20 апреля</div>
        </figcaption>
      </figure>


      
    </N-link>

  </div>

</main>



</template>

<script lang="js">
import { News } from '~/mock_data'

const defaultParams = {
  per_page: 12,
};

export default {

  async asyncData({ $axios }) {
    const [newsRes, categoriesRes] = await Promise.all([
      $axios.$get('news', { params: defaultParams }),
      $axios.$get('news/categories'),
    ]);

    return {
      list: newsRes.data,
      meta: newsRes.meta,
      categories: categoriesRes.data.sort((a, b) => a.order - b.order)
    };
  },


  data() {
    return {
      News
    };
  },
}
</script>

<style>

</style>