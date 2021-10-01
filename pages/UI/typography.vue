<template>
<div class="prose container mx-auto">

  <h1 class="">Заголовки</h1>
  <div class="grid">
    <div class="fontItem" v-for="(V, K, idx) in headerFonts" :key="idx">
      <div class="mr-1 text-godfather" :class="K">.{{ K }}</div>
      <pre class=" !overflow-x-visible">{{ V }}</pre>
    </div>
  </div>
  <h1 class="!mb-8 !mt-12">Основной наборный текст</h1>
  <div class="grid">
    <div class="fontItem" v-for="(V, K, idx) in basicFonts" :key="idx">
      <div class=" text-godfather" :class="K">.{{ K }}</div>
      <pre class=" !overflow-x-visible">{{ V }}</pre>
    </div>
  </div>
  <h1 class="!mb-8 !mt-12">Дополнительный текст</h1>
  <div class="grid">
    <div class="fontItem" v-for="(V, K, idx) in additionalFonts" :key="idx">
      <div class=" text-red-500" :class="K">.{{ K }}</div>
      <pre class=" !overflow-x-visible">{{ V }}</pre>
    </div>
  </div>
  <h1 class="!mb-8 !mt-12">Контролы</h1>
  <div class="grid">
    <div class="fontItem" v-for="(V, K, idx) in controlsFonts" :key="idx">
      <div class=" text-godfather" :class="K">.{{ K }}</div>
      <pre class=" !overflow-x-visible">{{ V }}</pre>
    </div>
  </div>


</div>
</template>

<script>
const headerFonts = {
  primo: {
    'font-size': '72px',
    'line-height': '72px',
    'font-weight': '700',
  },
  gouda: {
    'font-size': '56px',
    'line-height': '56px',
    'font-weight': '700',
  },
  cheddar: {
    'font-size': '40px',
    'line-height': '44px',
    'font-weight': '700',
  },
  camembert: {
    'font-size': '32px',
    'line-height': '36px',
    'font-weight': '700',
  },
  ricotta: {
    'font-size': '28px',
    'line-height': '32px',
    'font-weight': '700',
  },
  burrata: {
    'font-size': '24px',
    'line-height': '28px',
    'font-weight': '700',
  },
  taleggio: {
    'font-size': '20px',
    'line-height': '24px',
    'font-weight': '700',
  },
  comte: {
    'font-size': '20px',
    'line-height': '28px',
    'font-weight': '700',
  },
  bryndza: {
    'font-size': '16px',
    'line-height': '20px',
    'font-weight': '700',
  },
  tulum: {
    'font-size': '16px',
    'line-height': '24px',
    'font-weight': '700',
  }
};

const basicFonts = {
  mascarpone: {
    'font-size': '20px',
    'line-height': '28px',
    'font-weight': '400',
  },
  brie: {
    'font-size': '20px',
    'line-height': '24px',
    'font-weight': '400',
  },
  parmigiano: {
    'font-size': '16px',
    'line-height': '24px',
    'font-weight': '400',
  },
  feta: {
    'font-size': '16px',
    'line-height': '20px',
    'font-weight': '400',
  }
}; 


const additionalFonts = {  
  mozzarella: {
    'font-size': '13px',
    'line-height': '16px',
    'font-weight': '400',
  },
  roquefort: {
    'font-size': '13px',
    'line-height': '16px',
    'font-weight': '700',
  },
  сaprino: {
    'font-size': '10px',
    'line-height': '12px',
    'font-weight': '400',
  }
};

const controlsFonts = { 
  maasdam: {
    'font-size': '20px',
    'line-height': '24px',
    'font-weight': '500',
  },
  sulguni: {
    'font-size': '16px',
    'line-height': '20px',
    'font-weight': '500',
  },
  briscola: {
    'font-size': '13px',
    'line-height': '16px',
    'font-weight': '500',
  },
  edam: {
    'font-size': '10px',
    'line-height': '12px',
    'font-weight': '500',
  }
};
export default {

  data() {
    return {
      // windiConfig,
      // theme,

      headerFonts,
      basicFonts,
      additionalFonts,
      controlsFonts,
    };
  }

}
</script>

<style scoped>

.grid {
  margin: 2em 0;
  display: grid;
  /* grid-template-columns: min-content min-content; */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
}

.fontItem {
  display: grid;
  grid-template-columns: -1fr min-content;
  align-items: baseline;
  justify-content: left;
  border-bottom: 1px solid #ccc;
}

</style>