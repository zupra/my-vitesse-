<template>
<div class="prose container mx-auto">
  <h1 class="!mb-8 !mt-12">Палитра</h1>

  <p>Палитра состоит из шести цветов с девятью оттенками в каждом. Основным фирменным цветом является синий. Он всегда используется в первую очередь. Оттенки серого используются для оформления тёмной темы интерфейса.</p>

  <p>Остальные цвета могут использоваться для цветового кодирования, а оттенки красного и зелёного также в сообщениях об ошибах и «успехах».</p>


  <p>Тёмные оттенки используются для оформления текстов, 5-й — кнопок и прочих интерактивных элементов, а светлые — плашек и фонов.</p>

  <div class="row_2">
    <div class="col" v-for="(chunk, idx) in colors_9_chunk" :key="idx">
      <div class="cell leading-none" v-for="(color, name, index) in chunk" :key="index" :style="{ backgroundColor: color }">
        <small :style="{ color: index % 9 &gt; 4 ? '#444' : '#EEE' }">{{ name }}</small>
        <div :style="{ color: index % 9 &gt; 4 ? '#444' : '#CCC' }">{{ color }}</div>
      </div>
    </div>
  </div>


  <div class="row_2 mt-4">
    <template v-for="chunk in _colors">
      <div class="col" v-for="(colors, colorGroup, idx) in chunk" :key="`i_${idx}-${colorGroup}`">

        <!-- :class="`bg-${colorGroup}-${9-j}00`" v-for="(clr,name,j) in colors"  -->
        <div 
          class="col cell leading-none " 
          :class="`bg-${colorGroup}-${9-j}00`" v-for="(clr,name,j) in colors" :key="j"
          :style="{ color: j % 9 > 4 ? '#444' : '#EEE' }"
          >
          <small>{{name}}</small>
          <small>{{`${colorGroup}-${9-j}00`}}</small>
          <small>{{clr}}</small>
          <!-- <pre>{{colors}}</pre>
          <pre>{{chunk}}</pre> -->
        </div>
      </div>
    </template>
  </div>


  <div class="row_2 mt-4">
    <template v-for="chunk in _colors">
      <div class="col" v-for="(colors, colorGroup, idx) in chunk" :key="`i_${idx}-${colorGroup}`">
        <div 
          class="col cell leading-none " 
          :class="`bg-${name}`" v-for="(clr,name,j) in colors" :key="j"
          :style="{ color: j % 9 > 4 ? '#444' : '#EEE' }"
          >
          <small>{{name}}</small>
          <small>{{`${colorGroup}-${9-j}00`}}</small>
          <small>{{clr}}</small>
        </div>
      </div>
    </template>
  </div>

  <div class="flex">
    <!-- <pre>{{colors_9_chunk}}</pre> -->
    <pre class="">{{_colors}}</pre>
    <pre class="ml-4">{{toTW}}</pre>
  </div>


</div>
</template>

<script>
const colors = {
  titanic: '#04153E',
  gladiator: '#091F52',
  interstellar: '#113079',
  godfather: '#214EB0',
  rocky: '#3D75E4',
  alien: '#81ABEE',
  memento: '#C0D6F6',
  arrival: '#E4EDFB',
  rush: '#F6F9FE',
  bladerunner: '#111827',
  harakiri: '#1C2331',
  vertigo: '#2E3648',
  troy: '#495469',
  metropolis: '#6F7A90',
  pianist: '#A2ABBE',
  inception: '#CDD3DF',
  apocalypse: '#E6EBF5',
  trainspotting: '#F5F8FC',
  extraction: '#21043E',
  room: '#300F52',
  heat: '#4A197B',
  casino: '#6D3AA6',
  gentlemen: '#9954F2',
  seven: '#BB9AF4',
  unforgiven: '#DBCCFA',
  departed: '#EFE8FC',
  intouchables: '#F9F6FE',
  prestige: '#34040F',
  exorcist: '#480A17',
  predator: '#711426',
  stalker: '#AB213A',
  fargo: '#E14761',
  indiana: '#F196A5',
  bandit: '#F7CFD5',
  romance: '#FBE9EC',
  joker: '#FEF8F9',
  oldBoy: '#142202',
  forest: '#1F3404',
  whiplash: '#304D0A',
  shining: '#467510',
  matrix: '#57A003',
  drive: '#8DC95E',
  psycho: '#C7E6A8',
  amadeus: '#E3F3D8',
  shawshank: '#F6FCF3',
  schindler: '#2A1704',
  capernaum: '#3A1F03',
  platoon: '#643302',
  mulHolland: '#9E4F00',
  lebowski: '#D06E0B',
  snatch: '#E9A35D',
  chinatown: '#F8D6B5',
  jaws: '#FBECDD',
  warrior: '#FEFAF6',
}
export default {
  data() {
    return {
      colors,
    };
  },
  computed: {
    colors_9_chunk() {
      let myArray = Object.entries(this.colors);
      let results = [];
      while (myArray.length) {
        results.push(
          myArray.splice(0, 9).reduce(
            (acc, curr) => ({
              ...acc,
              [curr[0]]: curr[1],
            }),
            {},
          ),
        );
      }
      return results;
    },
    toTW() {
      let myArray = Object.entries(this.colors);
      let results = [];
      while (myArray.length) {
        results.push(
          myArray.splice(0, 9).reduce(
            (acc, curr, idx) => ({
              ...acc,
              [`${9-idx}00`]: curr[1],
            }),
            {},
          ),
        );
      }
      return results;
    },
    _colors() {
      const clr = ['blue', 'gray', 'indigo', 'pink', 'green', 'оrange']
      return clr.map((el, idx) => ({[el]: this.colors_9_chunk[idx]}))
    }
  },

}
</script>

<style scoped>

.row_2 {
  display: grid;
  /* grid-template-columns: repeat(6, 180px); */
  grid-template-columns: repeat(6, 1fr);
}
.col {
  display: flex;
  flex-direction: column;
}

.cell {
  padding: .5em;
}




</style>