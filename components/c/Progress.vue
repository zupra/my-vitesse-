// Progress
<template>
<div>
  <div class="flex justify-between items-center mb-2">
    <div>
      <div class="sulguni">
      {{title}}
      </div>
      <div class="briscola opacity-64">
        {{text}}
      </div>
    </div>
    <div class="taleggio">
      {{percent}} %
    </div>
  </div>
  <div 
    class="relative h-2 rounded-full overflow-hidden"
    :class="color === 'blue' ? 'bg-blue-200' : 'bg-green-200'"
  >
    <div 
      :style="{width:`${percent}%`}" 
      class="absolute h-full rounded-full"
      :class="color === 'blue' ? 'bg-blue-400' : 'bg-green-400'"
    ></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    text: {
      type: String,
    },
    percent: {
      type: [Number, String],
      default: 50
    },
    color: {
      type: String,
      default: 'blue'
    },
  },
}
</script>