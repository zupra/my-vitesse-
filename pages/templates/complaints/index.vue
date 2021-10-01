<template>


<main class="container mx-auto px-8">

  <header class="flex justify-between">
    <div class="w-1/2">
      <h1 class="cheddar mb-4">Обращения</h1>
      <p class="parmigiano">Вместе мы сможем сделать наш город лучше! Следите за ходом и результатами работ по обращениям, которые подают жители города и области. </p>
    </div>
    <div class="flex">
      <div>
        <div class="cheddar text-rocky">128</div>
        <div class="mozzarella opacity-64">
          Обращения </br>подано
        </div>
      </div>
      <div class="ml-16">
        <div class="cheddar text-rocky">120</div>
        <div class="mozzarella opacity-64">
          Обращений </br>исполнено
        </div>
      </div>
    </div>
  </header>


  <img class="mt-12 mb-8 w-full shadow-lg rounded-16 " src="https://static-maps.yandex.ru/1.x/?ll=37.677751,55.757718&spn=0.016457,0.00619&l=map&size=650,200" alt="">


  <div class="flex flex-wrap gap-8">

    <N-link to="/templates/complaints/item" class="Card group w-1/4 h-1/2 flex-shrink flex-grow shadow-lg rounded-16 overflow-hidden"
      v-for="It in 15"
      :key="It.id"
    >
      <figure class="Card__content p-4 h-24 flex flex-col justify-between  text-white">

        <div class="w-40px h-40px rounded-full bg-rocky flex absolute right-4">
          <CIconBase color="#FFFFFF" class="m-auto">
            <path d="M8 10c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3S9.7 8 8 8 5 6.7 5 5s1.3-3 3-3zm7.8 13.6c-.3.4-1 .5-1.4.2-1.9-1.4-3.7-2.3-6.4-2.3s-4.5.9-6.4 2.3c-.4.3-1.1.2-1.4-.2-.3-.4-.2-1.1.2-1.4 2.1-1.6 4.3-2.7 7.6-2.7s5.5 1.1 7.6 2.7c.4.3.5 1 .2 1.4z" />
          </CIconBase>
        </div>

        <div class="flex flex-wrap">
          <div class="mozzarella px-3 py-1 bg-snatch rounded-full">
            Дворовые территории
          </div>
        </div>

        <figcaption>
          <h3 class="taleggio">Охранные зоны объектов электросетевого хозяйства.</h3>
          <p class="antialiased opacity-72">г. Волгодонск, Раменский р-он</p>
          <div class="flex items-center mt-2">
            <!-- <img src="https://icongr.am/material/eye-outline.svg?size=24&color=315cb2" alt=""> -->
            <CIconBase color="#3D75E4">
              <path d="M7.00006 8.33191c0-.55229.44772-1 1-1 .55229 0 1 .44771 1 1 0 .55228.44772 1 1.00004 1 .5522 0 1-.44772 1-1 0-1.65685-1.34318-3-3.00004-3-1.65685 0-3 1.34315-3 3s1.34315 2.99999 3 2.99999c.55229 0 1-.4477 1-1 0-.55228-.44771-.99999-1-.99999-.55228 0-1-.44772-1-1Z"/>
              <path d="M8.0001 2.33191c-4.80236 0-7.215812 4.00237-7.809138 5.19285-.1272671.25536-.19090096.50639-.19090096.80716s.06363406.5518.19090296.80716C.784291 10.3296 3.19774 14.3319 8.0001 14.3319c4.8024 0 7.2157-4.0023 7.8091-5.19282.1272-.25536.1909-.53126.1909-.80716 0-.2759-.0637-.5518-.1909-.80716-.5934-1.19048-3.0067-5.19285-7.8091-5.19285Zm0 9.99999c-3.46589 0-5.40075-2.83456-6.00004-3.99998.59929-1.16543 2.53415-4.00001 6.00004-4.00001 3.4659 0 5.4007 2.83458 6 4.00001-.5993 1.16543-2.5341 3.99998-6 3.99998Z"/>
            </CIconBase>
            <div class="ml-2 opacity-72">12</div>
          </div>
        </figcaption>
      </figure>

      <picture class="">
        <img
          class="object-cover group-hover:scale-150" 
          :src="`https://picsum.photos/id/${It+500}/480/320`" alt="">
      </picture>

    </N-link>
  </div>

</main>


</template>

<script>
export default {

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