<template>

<main class="xl:container mx-auto px-8">
  <section class="w-620px mx-auto">

    <N-link to="/templates/votings" class="parmigiano opacity-72 hover:text-blue-600">
      / Голосования
    </N-link>

    <h1 class="cheddar my-4">Нужны ли электробусы на городских улицах?</h1>

    <div class="parmigiano opacity-72 flex items-center">
      <CIconBase color="#3D75E4">
        <path d="M4.5 1c0-.552285.44772-1 1-1h5c.5523 0 1 .447715 1 1 0 .55228-.4477 1-1 1H9v1.07645c3.1151.481 5.5 3.17376 5.5 6.42355 0 3.5899-2.9101 6.5-6.5 6.5-3.58985 0-6.5-2.9101-6.5-6.5 0-2.12723 1.0231-4.01543 2.59939-5.19954.44157-.33171 1.06844-.24265 1.40015.19893.33171.44157.24265 1.06844-.19893 1.40015C4.20534 6.72231 3.5 8.02861 3.5 9.5 3.5 11.9853 5.51472 14 8 14c2.4853 0 4.5-2.0147 4.5-4.5C12.5 7.01472 10.4853 5 8 5c-.55228 0-1-.44772-1-1V2H5.5c-.55228 0-1-.44772-1-1Z" />
        <path d="M8.98189 7.16442c.867.30017 1.55361.98675 1.85371 1.85374.1807.52189-.2833.98194-.8356.98194H9c-.55228 0-1-.44776-1-1.00005v-1c0-.55228.46-1.01631.98189-.83563Z" />
      </CIconBase>
      <div class="ml-1">Завершится 30 апреля, 16:00</div>
    </div>


    <picture class="block aspect-9/16 my-8">
      <img
        class="shadow-lg rounded-16" 
        :src="`https://picsum.photos/id/490/900/600`" alt="">
    </picture>


    <article class="parmigiano opacity-72">    
      <p class="mb-3">Дороги будущего покорит электробус. В перспективе именно этот вид наземного транспорта станет основным средством передвижения по городу, а дизельные автобусы уйдут в прошлое. Уже сейчас всё чаще совершают поездки на электробусах. На различных маршрутах курсирует уже больше 200 таких машин. За год электробусы преодолели в общей сложности 3,5 миллиона километров и перевезли 11 миллионов пассажиров.</p>
    </article>


    <div class="text-rocky flex items-center font-medium my-10">
      <CIconBase>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3c0-1.65685 1.34315-3 3-3h6.1716c.7956 0 1.5587.31607 2.1213.87868l1.8284 1.82843c.5626.56261.8787 1.32567.8787 2.12132V13c0 1.6569-1.3431 3-3 3h-.5c-.5523 0-1-.4477-1-1s.4477-1 1-1h.5c.5523 0 1-.4477 1-1V4.82843c0-.26522-.1054-.51957-.2929-.70711l-1.8284-1.82843C10.6911 2.10536 10.4368 2 10.1716 2H4c-.55228 0-1 .44772-1 1v10c0 .5523.44772 1 1 1h.5c.55228 0 1 .4477 1 1s-.44772 1-1 1H4c-1.65685 0-3-1.3431-3-3V3Z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9999 9.49995c.55229 0 1 .44772 1 1.00005v1.6336c.38243-.221.87993-.1679 1.2071.1592.3905.3906.3905 1.0237 0 1.4143l-1.49999 1.5c-.39053.3905-1.02369.3905-1.41421 0l-1.5-1.5c-.39053-.3906-.39053-1.0237 0-1.4143.32718-.3271.82467-.3802 1.2071-.1592V10.5c0-.55233.44772-1.00005 1-1.00005ZM4.4998 4.5c0-.55228.44771-1 1-1h2.5c.55228 0 1 .44772 1 1s-.44772 1-1 1h-2.5c-.55229 0-1-.44772-1-1ZM4.5 7.49998c0-.55229.44771-1 1-1h5c.5523 0 1 .44771 1 1 0 .55228-.4477 1-1 1h-5c-.55229 0-1-.44772-1-1Z"/>
      </CIconBase>
      <a href="#"
        class="ml-6px"
      >Скачать презентацию</a>
    </div>



    <h3 class="taleggio mt-8">
      Поддерживаете ли вы проект замены дизельных автобусов на электробусы?
    </h3>

    <div class="flex gap-5 my-10 bg-blue-100 p-3">
      <div
        v-for="(tab, idx) in ['Проголосовал', 'Завершено+IMG', 'Голос+IMG', 'Голос+checkbox']" 
        :key="idx" 
        @click="TAB = idx+1"
        class="sulguni text-gray-400 cursor-pointer pb-1" 
        :class="{activeTab : idx === (TAB-1)}" 
      >
        {{ tab }}
      </div>
    </div>
    <transition-group name="tab">
      <SECTION key="tab_1" v-show="TAB===1" class="flex flex-col gap-y-10">
        <div v-for="(It, idx) in [
          {
            title: 'Сноутубинг',
            percent: 23.4,
          },
          {
            title: 'Каток',
            percent: 19.6,
            color: 'green'
          },
          {
            title: 'Лыжи',
            percent: 12.7,
            color: 'green'
          },
          {
            title: 'Сноуборд',
            percent: 38.3,
          }
        ]" :key="idx">
          <C-Progress 
            :title="It.title"
            text="ул. Новоясеневская, 131"
            :percent="It.percent"
            :color="It.color"
          />
        </div>
        <div class="parmigiano flex items-center justify-center">
          <CIconBase color="#57A003">
            <path d="M15.7071 2.29289c.3905.39053.3905 1.02369 0 1.41422L5.70711 13.7071c-.19004.19-.44857.2956-.71731.2928-.26874-.0027-.52507-.1135-.71119-.3074L.278614 9.52586c-.382475-.39841-.3695557-1.03144.028855-1.41391.398412-.38248 1.031441-.36956 1.413921.02885l3.29319 3.4304 9.27832-9.27831c.3905-.39052 1.0237-.39052 1.4142 0Z"/>
          </CIconBase>
          <div class="ml-6px text-matrix">Вы проголосовали</div>
        </div>
      </SECTION>
      <SECTION key="tab_2" v-show="TAB===2" class="flex flex-col gap-y-10">
        <div v-for="(It, idx) in [
          {
            title: 'Сноутубинг',
            percent: 13.4,
          },
          {
            title: 'Каток',
            percent: 29.6,
          },
          {
            title: 'Лыжи',
            percent: 2.7,
          },
          {
            title: 'Сноуборд',
            percent: 48.3,
          }
        ]" :key="idx">

            <DIV class="flex justify-between items-center mb-2">
              <div class="flex items-center">
                <img
                  class="cursor-pointer block mr-3 shadow-lg rounded-8"
                  @click="imgForLightbox = `https://picsum.photos/id/${idx+230}/900/600`, showLightbox = true"
                  :src="`https://picsum.photos/id/${idx+230}/56/56`" alt="">
                <div>
                  <div class="sulguni">{{It.title}}</div>
                  <div class="briscola opacity-64">ул. Новоясеневская, 131</div>
                </div>
              </div>
              <div class="taleggio">{{It.percent}} %</div>
            </div>
            <div class="relative h-2 rounded-full bg-blue-200 overflow-hidden">
              <div 
                :style="{width:`${It.percent}%`}" 
                class="absolute h-full rounded-full bg-blue-400"
              ></div>
            </DIV>

        </div>
        <div class="parmigiano flex items-center justify-center">
          <CIconBase>
            <path d="M10.6789 4.26518c.4055.37412.4303 1.00543.0554 1.41007L5.49566 11.329c-.8113.8755-2.20599.8504-2.98508-.0538L.241734 8.64188c-.360048-.41789-.3124299-1.04789.106359-1.40716.418789-.35927 1.050157-.31176 1.410207.10613l2.26885 2.63329 5.23862-5.6537c.37493-.40465 1.00763-.42939 1.41313-.05526ZM15.6653 4.25287c.4123.36663.4487.99738.0813 1.40882L10.6319 11.389c-.894 1.0012-2.5249.7283-3.04687-.4998-.05466-.1233-.08502-.2597-.08502-.4032 0-.55114.44771-.99789 1-.99789.32556 0 .61479.15525.79739.39559l4.956-5.54969c.3674-.41145.9995-.44777 1.4119-.08114Z"/>
          </CIconBase>
          <div class="ml-6px">Голосование завершено</div>
        </div>
      </SECTION>
      <SECTION key="tab_3" v-show="TAB===3" class="flex flex-col gap-y-10">
        <div class="flex items-center" v-for="(It, idx) in ['Сноутубинг','Каток','Лыжи','Сноуборд']" :key="idx">
          <input type="radio">

          <!-- 
          <picture class="mx-3 shadow-lg rounded-8 h-56px w-56px">
          </picture> 
          -->
          <img
            class="cursor-pointer block mx-3 shadow-lg rounded-8"
            @click="imgForLightbox = `https://picsum.photos/id/${idx+30}/900/600`, showLightbox = true"
            :src="`https://picsum.photos/id/${idx+30}/56/56`" alt="">

          <div>
            <div class="sulguni">
            {{It}}
            </div>
            <div class="briscola opacity-64">ул. Новоясеневская, 131</div>
          </div>
        </div>
      </SECTION>
      <SECTION key="tab_4" v-show="TAB===4" class="flex flex-col gap-y-5">
        <div class="flex items-baseline" v-for="(It, idx) in ['Сноутубинг','Каток','Лыжи','Сноуборд']" :key="idx">
          <input type="checkbox">
          <div class="ml-3">
            <div class="sulguni">
            {{It}}
            </div>
            <div class="briscola opacity-64">ул. Новоясеневская, 131</div>
          </div>
        </div>
      </SECTION>
    </transition-group>


    <div class="text-rocky flex font-medium  my-16">
      <div class="flex items-center">
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





  <h2 class="ricotta mt-12 mb-8">Другие голосования</h2>
  <div class="flex flex-wrap gap-8">

    <N-link to="/templates/votings/item" class="Voting bg-rush p-5 w-1/4 flex-shrink flex-grow shadow-sm hover:shadow-lg rounded-3xl overflow-hidden"
      v-for="It in 3"
      :key="It.id"
    >
      <div class="bryndza">
        Организация зимних видов спорта и рекреационных зон на склонах
      </div>

      <div>
        <div class="mozzarella flex">
          <CIconBase color="#3D75E4">
            <path d="M4.5 1c0-.552285.44772-1 1-1h5c.5523 0 1 .447715 1 1 0 .55228-.4477 1-1 1H9v1.07645c3.1151.481 5.5 3.17376 5.5 6.42355 0 3.5899-2.9101 6.5-6.5 6.5-3.58985 0-6.5-2.9101-6.5-6.5 0-2.12723 1.0231-4.01543 2.59939-5.19954.44157-.33171 1.06844-.24265 1.40015.19893.33171.44157.24265 1.06844-.19893 1.40015C4.20534 6.72231 3.5 8.02861 3.5 9.5 3.5 11.9853 5.51472 14 8 14c2.4853 0 4.5-2.0147 4.5-4.5C12.5 7.01472 10.4853 5 8 5c-.55228 0-1-.44772-1-1V2H5.5c-.55228 0-1-.44772-1-1Z" />
            <path d="M8.98189 7.16442c.867.30017 1.55361.98675 1.85371 1.85374.1807.52189-.2833.98194-.8356.98194H9c-.55228 0-1-.44776-1-1.00005v-1c0-.55228.46-1.01631.98189-.83563Z" />
          </CIconBase>
          <div class="ml-1">До 12 июля</div>
        </div>
      </div>

      <div class="flex">
        <div class="mozzarella px-4 py-1 bg-alien rounded-full text-white">
          Ремонтные работы
        </div>
      </div>
    </N-link>
  </div>

  <CLightbox
    :show.sync="showLightbox">
    <img :src="imgForLightbox" alt="">
  </CLightbox>

</main>
</template>

<script>
export default {
  data () {
    return {
      TAB: 1,
      showLightbox: false,
      imgForLightbox: '',
    }
  }
}
</script>

<style>

.activeTab {
  @apply text-gray-600 border-b-blue-500 border-b-2;
}


.tab-enter-active {
  transition: all .4s ease
}
.tab-enter {
  opacity: 0;
  transform: translateY(10px)
}
.tab-enter-to {
  opacity: 1
}
.tab-leave-active {
  display: none
}

</style>