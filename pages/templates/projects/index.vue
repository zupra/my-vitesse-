<template>


<main class="container mx-auto px-8">


  <h1 class="cheddar mb-6">Планы и проекты города</h1>
  <div class="flex justify-between">
    <p class="w-2/3 parmigiano">Знакомьтесь с планами развития, благоустройства и инициативными проектами, реализуемыми в городе. Решайте на что будут расходоваться выделенные на городские инициативы бюджетные средства. </p>

    <div>
      <div class="cheddar text-rocky">134</div>
      <div class="mozzarella opacity-64">
        Опубликовано
      </div>
    </div>
  </div>


  <div class="my-10 h-16 bg-red-100"></div>



  <div class="grid grid-cols-3 gap-8">

    <N-link to="/templates/projects/item" class="relative rounded-16 overflow-hidden hover:shadow-md"
      v-for="(It,idx) in News"
      :key="idx"
    >
      <picture class="">
        <img
          class="" 
          :src="`https://picsum.photos/id/${idx+304}/480/320`" alt="">
      </picture>

      <div class="absolute left-4 top-4 px-3 py-1 bg-alien rounded-full flex items-center text-white">
        <CIconBase color="#FFFFFF">
          <path d="M2.00001 4.98562c.55229 0 1.00001.44843 1.00001 1.00159v7.01119c0 .5532-.44772 1.0016-1.00001 1.0016C1.44772 14 1 13.5516 1 12.9984V5.98721c0-.55316.44772-1.00159 1.00001-1.00159ZM9.26221 1.45155c-.0315-.24038-.08915-.590751-.23743-.869657-.11704-.220162-.39856-.5526381-.89106-.58018497C7.72661-.0210629 7.45062.189718 7.35044.276355c-.22081.190942-.34669.437546-.40893.607661C6.51036 2.06233 5.44837 4.17107 4.36239 5.69279c-.24047.33695-.38323.74878-.38323 1.1857v4.55631c0 .8534.54792 1.6532 1.41909 1.8993 1.46985.4154 3.22019.6992 5.21535.6627.8839-.0161 2.1803-.2537 2.8419-1.4336.4505-.8033.8275-1.9093 1.0921-2.94155.2642-1.03075.4452-2.10173.4523-2.85477.0048-.50889-.2232-.94545-.5773-1.23294-.3348-.27177-.7442-.38445-1.1235-.38445H9.61824s.00195.00047 0 0c-.0121-.00292-.09245-.02268-.19552-.14888-.11842-.14499-.14996-.29387-.14476-.35921.05702-.71599.07765-1.52855.05524-2.22377-.01118-.34675-.03355-.68031-.07099-.96608Z" />
        </CIconBase>
        <span class="ml-2">123</span>
      </div>

      <figcaption class="bg-rush p-5">
        <div class="mozzarella text-rocky">В работе</div>
        <h3 class="line-clamp-3 bryndza my-2">{{It.sentences}}</h3>
        <div class="mozzarella opacity-72">Краткое описание инициативы или проекта, можно на 2 строки</div>
      </figcaption>
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

<style>

</style>