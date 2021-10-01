<template>
<div class="p-5 flex flex-col space-y-4">
    <div class="flex flex-col space-y-2">
        <div>Basic badges</div>
            <div class="flex space-x-2 text-white">
                <div 
                v-for="clr,idx in ['amelie','rocky', 'snatch', 'drive', 'indiana ']" :key="idx"
                class="mozzarella px-3 py-1 rounded-full"
                :class="`bg-${clr}`">
                <div>Badge</div>
            </div>
        </div>
    </div>


    <div class="flex flex-col space-y-2">
        <div>Badge with dot</div>
        <div class="flex space-x-2 text-white">
            <div 
            v-for="clr,idx in ['rocky', 'snatch', 'drive', 'indiana ']" :key="idx"
            class="mozzarella flex items-center space-x-1 pl-2 pr-3 py-1 rounded-full"
            :class="`bg-${clr}`">
                <div class="flex-shrink-0 bg-white rounded-full w-2 h-2"></div>
                <div>Badge</div>
            </div>
        </div>
    </div>



    <div class="flex flex-col space-y-2">
        <div>Badge w-1/2</div>
        <div class="flex flex-wrap space-y-2 gap-2 text-white">
            <div 
            v-for="clr,idx in ['rocky', 'snatch', 'drive', 'indiana ']" :key="idx"
            class="mozzarella flex items-center space-x-1 pl-2 pr-3 py-1 rounded-full w-1/2"
            :class="`bg-${clr}`">
                <div class="flex-shrink-0 bg-white rounded-full w-2 h-2"></div>
                <div class="truncate">
  Пример тага c ну очень-очень-очень длинным текстом контетом для тестирования сиутуации когда элемент не помещается в контейнер по ширине
                </div>
            </div>
        </div>
    </div>
</div> 
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