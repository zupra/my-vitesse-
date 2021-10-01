
<template>


<main class="container mx-auto px-8">

  <h1 class="cheddar mb-4">Афиша</h1>


  <div class="flex gap-x-2 text-white my-10">
    <div 
    class="bg-rocky mozzarella flex items-center space-x-1 pl-2 pr-3 py-1 rounded-full"
    >
      <div class="flex-shrink-0 bg-white rounded-full w-2 h-2"></div>
      <div>Все события</div>
    </div>
    <div 
    v-for="(It,idx) in ['Кино', 'Театр', 'drive', 'Концерты ']" :key="idx"
    class="bg-alien mozzarella flex items-center space-x-1 pl-2 pr-3 py-1 rounded-full"
    >
      <div class="flex-shrink-0 bg-white opacity-16 rounded-full w-2 h-2"></div>
      <div>{{It}}</div>
    </div>
  </div>


  <img class="mt-12 mb-9 w-full shadow-lg rounded-16 " src="https://static-maps.yandex.ru/1.x/?ll=37.677751,55.757718&spn=0.016457,0.00619&l=map&size=650,180" alt="">


  <div class="flex flex-wrap gap-8">

    <N-link to="/templates/events/item" class="Card group w-1/4 h-1/2 flex-shrink flex-grow shadow-lg rounded-16 overflow-hidden"
      v-for="It in 15"
      :key="It"
    >
      <figure class="Card__content p-5 h-24 flex flex-col justify-between  text-white">

        <div class="w-40px h-40px rounded-full bg-rocky flex absolute right-4">
          <CIconBase color="#FFFFFF" class="m-auto">
            <path d="M8 10c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3S9.7 8 8 8 5 6.7 5 5s1.3-3 3-3zm7.8 13.6c-.3.4-1 .5-1.4.2-1.9-1.4-3.7-2.3-6.4-2.3s-4.5.9-6.4 2.3c-.4.3-1.1.2-1.4-.2-.3-.4-.2-1.1.2-1.4 2.1-1.6 4.3-2.7 7.6-2.7s5.5 1.1 7.6 2.7c.4.3.5 1 .2 1.4z" />
          </CIconBase>
        </div>

        <div class="flex flex-wrap">
          <div class="mozzarella px-3 py-1 bg-alien rounded-full">
            Концерты
          </div>
        </div>

        <figcaption>
          <h3 class="taleggio mb-1">Программа «Бабушкин Game Station»</h3>
          <p class="antialiased opacity-72">22 октября–2 ноября</p>
        </figcaption>
      </figure>

      <picture class="">
        <img
          class="object-cover group-hover:scale-150" 
          :src="`https://picsum.photos/id/${It+10}/480/320`" alt="">
      </picture>

    </N-link>
  </div>

</main>


</template>

<script>
import { News } from '~/mock_data'
export default {
  data() {
    return {
      News
    };
  },
}
</script>

<style scoped>

.Card {
  position: relative;
}

/**/
.Card:hover picture img {
  transform: scale(1.5);
  /* mask-image: linear-gradient(360deg, rgba(4, 21, 62, 0.8) 0%, rgba(4, 21, 62, 0) 90%);
  mask-image: linear-gradient(rgba(0, 0, 0, .5), transparent); */
}



.Card__content {
  position: absolute;
  z-index: 1;
  height: 100%;
}

picture {
  position:relative;
  display:block;
  /* height: 100%; */
}

picture:after {
  content:'';
  position:absolute;
  left:0; top:0;
  /* bottom: 0; */
  height:100%;
  width:100%; 
  background: linear-gradient(1turn, rgba(4, 21, 62, 0.8) 0%, rgba(4, 21, 62, 0) 100%);
}

picture img {
  height: 100%;
  width: 100%;
  /* object-fit: cover; */
  transition: all .5s;
}
</style>