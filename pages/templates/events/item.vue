<template>
<main class="container mx-auto px-8">

  <section class="w-620px mx-auto">

    <N-link to="/templates/events" class="parmigiano opacity-72 hover:text-blue-600">
      / Афиша
    </N-link>

    <h1 class="cheddar my-4">Международный кинофестиваль «Северный характер»</h1>
    <div class="taleggio">12 сентября–2 октября, 10:00–15:00</div>
    
    <div class="flex mt-4 mb-8">
      <div class="flex items-center">
        <CIconBase class="mr-2">
          <path d="M14 6c0 3.15381-1.7598 5.8955-3.2363 7.6406-.3565.4209-.98636.4727-1.41018.1172-.4209-.3574-.47364-.9883-.11719-1.4101C10.4971 10.8584 12 8.54785 12 6c0-2.20557-1.7939-4-4-4-2.20557 0-4 1.79443-4 4 0 4.4492 4.57959 8.1826 4.62549 8.2197.43017.3457.49951.9746.1543 1.4053-.19776.2471-.48829.375-.78077.375-.21923 0-.43945-.0713-.62353-.2188C7.15576 15.6055 2 11.418 2 6c0-3.30859 2.69141-6 6-6 3.3086 0 6 2.69141 6 6ZM8 4.49982c-.82843 0-1.5.67157-1.5 1.5s.67157 1.5 1.5 1.5 1.5-.67157 1.5-1.5-.67157-1.5-1.5-1.5Z" />
        </CIconBase>
        <span class="opacity-72">Саров, ул. Бессарабенко 1, подъезд №4</span>
      </div>
      <div class="ml-6 flex items-center">
        <CIconBase>
          <path d="M10.7164 2.05232c.6377-.1965 1.2836.2803 1.2836.94761 0 .55229.4477 1.00004 1 1.00004s1-.44772 1-1C14 1.29287 12.5977 0 11 0c-.2836.0000314-.5799.0508498-.8725.141005L2.8221 2.39207C1.14452 2.909 0 4.45929 0 6.21471v6.78519c0 1.6569 1.34315 3 3 3h11c1.1046 0 2-.8954 2-2V6.99993c0-1.10457-.8954-2-2-2H4c-.55228 0-1 .44772-1 1 0 .55229.44772 1 1 1h10v6.99997H3c-.55228 0-1-.4477-1-1V6.21471c0-.87771.57226-1.65285 1.41105-1.91132l7.30535-2.25107Z"/>
          <path d="M13 10.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5c0-.82846.6716-1.50003 1.5-1.50003S13 9.67154 13 10.5Z"/>
        </CIconBase>
        <div class="ml-2 parmigiano opacity-72">Бесплатно</div>
      </div>
    </div>

    <img
      class="block my-6 shadow-lg rounded-16" 
      :src="`https://picsum.photos/id/507/900/600`" alt="">



    <article class="parmigiano opacity-72"> 
      <p class="mb-3">Социально-культурный проект, в ходе которого жители Мурманска и региона могут увидеть лучшие документальные, игровые фильмы и телевизионные программы из коллекции Международного кинофестиваля «Северный Характер».</p>
      <p class="mb-3">Авторов работ, представленных в Киномарафоне, объединяет со зрителями любовь к Северу, трепетное отношение к его уникальной природе. Герои фильмов не просто хотят «вжиться» в непростые климатические условия, а меняют свою и окружающую жизнь к лучшему. Не случайно, человека с «северным» характером отличает сердечность, гостеприимство, радушие, готовность прийти на помощь.</p>
    </article>

    <div class="text-rocky flex font-medium mt-10 mb-16">
      <div class="flex items-center">
        <CIconBase>
          <path d="M5 5C3.34315 5 2 6.34315 2 8s1.34315 3 3 3h1c.55228 0 1 .4477 1 1s-.44772 1-1 1H5c-2.76142 0-5-2.2386-5-5 0-2.76142 2.23858-5 5-5h1c.55228 0 1 .44772 1 1s-.44772 1-1 1H5Zm4-1c0-.55228.44771-1 1-1h1c2.7614 0 5 2.23858 5 5 0 2.7614-2.2386 5-5 5h-1c-.55229 0-1-.4477-1-1s.44771-1 1-1h1c1.6569 0 3-1.34315 3-3s-1.3431-3-3-3h-1c-.55229 0-1-.44772-1-1Z" />
          <path d="M4 8c0-.55228.44772-1 1-1h6c.5523 0 1 .44772 1 1s-.4477 1-1 1H5c-.55228 0-1-.44772-1-1Z" />
        </CIconBase>
        <a href="#" class="ml-6px">Источник</a>
      </div>

      <div class="flex items-center ml-6">
        <CIconBase>
          <path d="M3.5 7C2.67157 7 2 7.67157 2 8.5S2.67157 10 3.5 10 5 9.32843 5 8.5 4.32843 7 3.5 7ZM0 8.5C0 6.567 1.567 5 3.5 5S7 6.567 7 8.5 5.433 12 3.5 12 0 10.433 0 8.5ZM12.5 2c-.8284 0-1.5.67157-1.5 1.5S11.6716 5 12.5 5 14 4.32843 14 3.5 13.3284 2 12.5 2ZM9 3.5C9 1.567 10.567 0 12.5 0S16 1.567 16 3.5 14.433 7 12.5 7 9 5.433 9 3.5ZM12.5 11c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5ZM9 12.5C9 10.567 10.567 9 12.5 9s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5S9 14.433 9 12.5Z"/>
          <path d="M8.89443 5.05279c.24699.49398.04676 1.09465-.44722 1.34164l-2 1c-.49397.24699-1.09465.04676-1.34164-.44722-.24699-.49397-.04676-1.09465.44722-1.34164l2-1c.49398-.24699 1.09465-.04676 1.34164.44722ZM7.10557 10.0528c.24699-.49399.84767-.69422 1.34164-.44723l1.99999 1.00003c.494.247.6942.8476.4472 1.3416-.247.494-.8476.6942-1.34161.4472l-2-1c-.49398-.247-.69421-.8476-.44722-1.3416Z"/>
        </CIconBase>
        <a href="#" class="ml-6px">Поделиться</a>
      </div>

      <div class="flex items-center ml-6">
        <CIconBase>
          <path d="M5 2.00966c-.55228 0-1 .44987-1 1.00482V13.9866l2.75061-2.2111c.73044-.5872 1.76834-.5872 2.49878 0L12 13.9866V3.01448c0-.55495-.4477-1.00482-1-1.00482H5ZM2 3.01448C2 1.34963 3.34315 0 5 0h6c1.6569 0 3 1.34963 3 3.01448V13.9866c0 1.6851-1.9399 2.6219-3.2494 1.5692L8 13.3447l-2.75061 2.2111C3.93986 16.6085 2 15.6717 2 13.9866V3.01448Z"/>
        </CIconBase>
        <a href="#" class="ml-6px">В избранное</a>
      </div>
      
    </div>
  </section>






  <div class="flex flex-wrap gap-8">

    <N-link to="/templates/events/item" class="Card group w-1/4 h-1/2 flex-shrink flex-grow shadow-lg rounded-16 overflow-hidden"
      v-for="It in 3"
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
