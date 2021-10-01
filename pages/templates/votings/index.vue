<template>


<main class="container mx-auto px-8">

  <header class="flex justify-between">
    <div class="w-1/2">
      <h1 class="cheddar mb-4">Голосования</h1>
      <p class="parmigiano">На голосования выносятся только вопросы, касающиеся граждан города и относящиеся к компетенции Правительства и органов исполнительной власти города или области.</p>
    </div>
    <div class="flex">
      <div>
        <div class="cheddar text-rocky">284</div>
        <div class="mozzarella opacity-64">
          Завершено
        </div>
      </div>
      <div class="ml-16">
        <div class="cheddar text-rocky">13437</div>
        <div class="mozzarella opacity-64">
          Открыто
        </div>
      </div>
    </div>
  </header>


  <div class="mt-12 grid grid-cols-3 gap-8"
  >

    <template v-for="It in News">

      <!-- Завершено -->
      <N-link 
        v-if="It.id == 3 || It.id == 8 || It.id == 10"
        to="/templates/votings/item" class="Voting bg-shawshank p-5 shadow-sm hover:shadow-lg rounded-16 overflow-hidden"
        >
        <div class="bryndza text-oldBoy line-clamp-3 h-[3.8em] mb-4">{{It.sentences}}</div>
        <div>
          <div class="mozzarella flex">
              <CIconBase color="#57A003">
                <path d="M15.7071 2.29289c.3905.39053.3905 1.02369 0 1.41422L5.70711 13.7071c-.19004.19-.44857.2956-.71731.2928-.26874-.0027-.52507-.1135-.71119-.3074L.278614 9.52586c-.382475-.39841-.3695557-1.03144.028855-1.41391.398412-.38248 1.031441-.36956 1.413921.02885l3.29319 3.4304 9.27832-9.27831c.3905-.39052 1.0237-.39052 1.4142 0Z"/>
              </CIconBase>
            <div class="ml-6px text-oldBoy">Завершено</div>
          </div>
        </div>

        <div class="">
          <div class="inline-flex mozzarella px-4 py-1 bg-alien rounded-full text-white">
            Ремонтные работы
          </div>
        </div>
      </N-link>


      <N-link
        v-else
        to="/templates/votings/item" 
        class="Voting bg-rush p-5 shadow-sm hover:shadow-lg rounded-16 overflow-hidden"
      >
        <div class="bryndza line-clamp-3 h-[3.8em] mb-4"> Организация зимних видов спорта и рекреационных зон на склонах</div>
        <div>
          <div class="mozzarella flex">
              <CIconBase color="#3D75E4">
                <path d="M4.5 1c0-.552285.44772-1 1-1h5c.5523 0 1 .447715 1 1 0 .55228-.4477 1-1 1H9v1.07645c3.1151.481 5.5 3.17376 5.5 6.42355 0 3.5899-2.9101 6.5-6.5 6.5-3.58985 0-6.5-2.9101-6.5-6.5 0-2.12723 1.0231-4.01543 2.59939-5.19954.44157-.33171 1.06844-.24265 1.40015.19893.33171.44157.24265 1.06844-.19893 1.40015C4.20534 6.72231 3.5 8.02861 3.5 9.5 3.5 11.9853 5.51472 14 8 14c2.4853 0 4.5-2.0147 4.5-4.5C12.5 7.01472 10.4853 5 8 5c-.55228 0-1-.44772-1-1V2H5.5c-.55228 0-1-.44772-1-1Z" />
                <path d="M8.98189 7.16442c.867.30017 1.55361.98675 1.85371 1.85374.1807.52189-.2833.98194-.8356.98194H9c-.55228 0-1-.44776-1-1.00005v-1c0-.55228.46-1.01631.98189-.83563Z" />
              </CIconBase>
            <div class="ml-6px">До 12 июля</div>
          </div>
        </div>

        <div class="">
          <div class="inline-flex mozzarella px-4 py-1 bg-alien rounded-full text-white">
            Ремонтные работы
          </div>
        </div>
      </N-link>
    </template>
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

.Voting {
  /* @apply grid grid-rows-3; */
  display: grid;
  grid-template-rows: 5rem 3rem 24px;
}

</style>