<template>
<main class="container mx-auto px-8">

  <N-link to="/templates/complaints" class="parmigiano opacity-72 hover:text-blue-600">
    / Обращения
  </N-link>
  <h1 class="cheddar my-2">Уборка проводов в подъезде</h1>

  <div class="grid grid-cols-[3fr,2fr] gap-8">
    <section class="">

      <div class="feta opacity-48 my-3">Обращение № 83437</div>
      <div class="inline-block mozzarella bg-alien px-3 py-1 rounded-full text-white">Проблемы ЖКХ</div>

      <div class="my-5 flex feta">
        <div class="flex items-center">

          <CIconBase class="mr-2">
            <path d="M14 6c0 3.15381-1.7598 5.8955-3.2363 7.6406-.3565.4209-.98636.4727-1.41018.1172-.4209-.3574-.47364-.9883-.11719-1.4101C10.4971 10.8584 12 8.54785 12 6c0-2.20557-1.7939-4-4-4-2.20557 0-4 1.79443-4 4 0 4.4492 4.57959 8.1826 4.62549 8.2197.43017.3457.49951.9746.1543 1.4053-.19776.2471-.48829.375-.78077.375-.21923 0-.43945-.0713-.62353-.2188C7.15576 15.6055 2 11.418 2 6c0-3.30859 2.69141-6 6-6 3.3086 0 6 2.69141 6 6ZM8 4.49982c-.82843 0-1.5.67157-1.5 1.5s.67157 1.5 1.5 1.5 1.5-.67157 1.5-1.5-.67157-1.5-1.5-1.5Z" />
          </CIconBase>
          <span class="opacity-72">Саров, ул. Бессарабенко 1, подъезд №4</span>
        </div>
        <div class="ml-6 flex items-center">
          <CIconBase class="mr-2">
            <path d="M5 8.0116c-.55228 0-1 .44857-1 1.00191v1.11319c0 .5534.44772 1.0019 1 1.0019h1.88889c.55228 0 1-.4485 1-1.0019V9.01351c0-.55334-.44772-1.00191-1-1.00191H5Z"/>
            <path fill-rule="evenodd" d="M5.88867 1.00557c0-.553338-.44771-1.00190789-1-1.00190789-.55228 0-1 .44856989-1 1.00190789v.32672l-1.33311.00004C1.14416 1.33233 0 2.47847 0 3.89256v9.10174C0 14.6543 1.34315 16 3 16h10c1.6569 0 3-1.3457 3-3.0057V4.33785c0-1.66002-1.3431-3.00573-3-3.00573h-.8887v-.32655c0-.553338-.4477-1.00190789-1-1.00190789s-1 .44856989-1 1.00190789v.3265l-4.22263.00015v-.32665Zm5.22263 2.33045-.0183-.00016-6.1885.00021-.01583.00012-.01576-.00012-2.31822.00008-.01182-.00007C2.24191 3.34284 2 3.58939 2 3.89256v1.11331h9.9612c.5523 0 1 .44857 1 1.00191s-.4477 1.00191-1 1.00191H2v5.98461c0 .5533.44772 1.0019 1 1.0019h10c.5523 0 1-.4486 1-1.0019V4.33785c0-.55334-.4477-1.00191-1-1.00191h-1.8758l-.0129.00008Z"/>
          </CIconBase>
          <span class="opacity-72">01 июня 2021, 14:25:03</span>
          
        </div>

      </div>


      <div class="parmigiano">Сотрудники телекоммуникационных компаний совершенно безалаберно обращаются с общедомовым имуществом МКД. Необходимо всё привести в порядок! Ненужные уже провода убрать, нужные - оформить в соответствии с требованиями выполнения данных работ. А испорченную дверку шкафа - заменить.</div>


      <div class="flex gap-4 my-7">
        <img
          v-for="It in 2" :key="It"
          class="block rounded-16 shadow-lg" 
          :src="`https://picsum.photos/id/${It+500}/255/160`" alt="">
      </div>


      <img
        class="w-full shadow-lg rounded-16 mt-8" 
        src="https://static-maps.yandex.ru/1.x/?ll=37.677751,55.757718&spn=0.016457,0.00619&l=map&size=600,300" alt="">


      <div class="flex my-10">
        <div>
          <div class="mozzarella opacity-48 mb-3">Автор обращения</div>
          <div class="flex items-center">
            <div class="avatar mr-2">
              <img :src="`http://daisyui.com/tailwind-css-component-profile-2@56w.png`">
            </div>
            <div class="bryndza">Наумов А.В.</div>
          </div>
        </div>

        <div class="ml-12">
          <div class="mozzarella opacity-48 mb-3">Присоединились</div>  
          <div class="avatar-group">

            <div class="avatar bg-rocky flex">
              <CIconBase color="#FFFFFF" class="m-auto">
                <path d="M8 10c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3S9.7 8 8 8 5 6.7 5 5s1.3-3 3-3zm7.8 13.6c-.3.4-1 .5-1.4.2-1.9-1.4-3.7-2.3-6.4-2.3s-4.5.9-6.4 2.3c-.4.3-1.1.2-1.4-.2-.3-.4-.2-1.1.2-1.4 2.1-1.6 4.3-2.7 7.6-2.7s5.5 1.1 7.6 2.7c.4.3.5 1 .2 1.4z" />
              </CIconBase>
            </div>

            <div class="avatar" v-for="It in 4" :key="It">
              <img :src="`http://daisyui.com/tailwind-css-component-profile-${It}@56w.png`">
            </div>

            <!-- TODO сaprino -->
            <div class="avatar edam bg-gray-200 flex">
              <span class="m-auto ">Ещё <br>248</span>
            </div>
          </div>
        </div>
      </div>



      <br class="mt-10">
      <div class="flex items-center mb-4">
        <div class="avatar mr-4">
          <img :src="`http://daisyui.com/tailwind-css-component-profile-2@56w.png`">
        </div>
        <div>
          <div class="feta mb-1">Прокофьев Артём Миронович</div>
          <div class="mozzarella opacity-48">МУП «Центр ЖКХ» | Ведущий специалист</div>  
        </div>
      </div>
      <div class="feta">16 июня 2021 г. операторами связи, осуществляющими свою деятельность на многоквартирном доме № 1 по ул.Бессарабенко, при участии управляющей компании МУП «Центр ЖКХ» проведен осмотр сетей связи и оборудования. По результатам осмотра принято решение: устранить выявленные нарушения в срок до 01 июля 2021 г.</div>
      <div class="mozzarella opacity-48 mt-4">Опубликовано 16 июня 2021, 14:29</div>  

      <div class="flex items-center my-5">
        <div class="avatar mr-4">
          <img :src="`http://daisyui.com/tailwind-css-component-profile-2@56w.png`">
        </div>
        <div>
          <div class="feta mb-1">Прокофьев Артём Миронович</div>
          <div class="mozzarella opacity-48">МУП «Центр ЖКХ» | Ведущий специалист</div>  
        </div>
      </div>
      <div class="feta">При проведении осмотра 26 июня 2021 г. установлено: операторы связи не выполнили свои обязательства к назначенному сроку. Руководству МТС и Ростелеком в марте 2021 г. будут направлены дополнительные предписания о приведении сетей связи в надлежащее состояние.</div> 


    </section>

    <section class="w-2/3">
      <h2 class="burrata mb-6">Работы по обращению</h2>

      <ul class="steps">
        <li class="step" v-for="(It, idx) in ['Зарегистрировано', 'На рассмотрении', 'Назначен исполнитель', 'Принято в работу']" :key="idx">
          <div class="bryndza mb-1 opacity-48">{{It}}</div>
          <div v-if="idx!=1" class="mozzarella opacity-48">01 июня в 14:24:24</div>        
        </li>

        <li class="step before:bg-rocky">
          <div class="bryndza mb-1 text-rocky ">Вынесено решение</div>
          <div class="mozzarella opacity-48">01 июня в 14:24:24</div>        
        </li>
      </ul>

      <div class="mozzarella">
        Работы по указанному адресу будут выполнены в срок до 01 июля 2021 года
      </div>


      <div class="rounded-16 bg-rush p-4 my-8">
        <div class="bryndza">Народный контроль</div>
        <div class="mozzarella mt-2 mb-5">
          Помогите нам проверить решение обращения
        </div>
        <button>Принять участие</button>
      </div>




      <h3 class="burrata mb-3">Оцените решение</h3>
      <p class="parmigiano opacity-48">Если Вас устроил результат решения вашего обращения, можете оценить его ниже</p>

      <div class="flex gap-x-2 mt-4">
        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" v-for="It in 4" :key="It">
          <path d="M8.60753 1.359c.50385-1.254708 2.28007-1.254706 2.78387 0l1.9593 4.87893 5.2456.35568c1.349.09147 1.8978 1.78074.8602 2.64766l-4.0347 3.37103 1.2827 5.0988c.3299 1.3112-1.1071 2.3552-2.2522 1.6363l-4.45281-2.7955-4.45283 2.7955c-1.14512.7189-2.58211-.3251-2.25224-1.6364l1.28271-5.0987L.542427 9.24127C-.495167 8.37435.053711 6.68508 1.4027 6.59361l5.24558-.35568L8.60753 1.359Z" fill="#3D75E4"/>
        </svg>
        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2154 8.23335c-.766-.05194-1.4346-.53772-1.7207-1.25012L9.99949 3.25972 8.50423 6.98323c-.28608.7124-.9547 1.19818-1.72065 1.25012l-4.00332.27144 3.0792 2.57271c.58914.4922.84453 1.2782.65723 2.0227l-.97893 3.8913 3.39831-2.1335c.65019-.4082 1.47663-.4082 2.12683 0l3.3983 2.1335-.9789-3.8913c-.1873-.7445.0681-1.5305.6572-2.0227l3.0792-2.5727-4.0033-.27145ZM11.3914 1.359c-.5038-1.254706-2.28002-1.254708-2.78387 0L6.64828 6.23793l-5.24558.35568C.053711 6.68508-.495167 8.37435.542427 9.24127L4.57713 12.6123 3.29442 17.711c-.32987 1.3113 1.10712 2.3553 2.25224 1.6364l4.45283-2.7955 4.45281 2.7955c1.1451.7189 2.5821-.3251 2.2522-1.6363l-1.2827-5.0988 4.0347-3.37103c1.0376-.86692.4888-2.55619-.8602-2.64766l-5.2456-.35568L11.3914 1.359Z" fill="#3D75E4"/>
        </svg>
      </div>
    </section>
  </div>
</main>
</template>

<script>
export default {

}
</script>

<style>
.steps {
  @apply ml-1 ;
}


.step {
  @apply relative pl-4 border-memento border-l-width-2px pb-6;
}
.step:before {
  box-sizing: content-box;
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  left: -13px;
  top: 0;
  background-color: #c0d6f6;
  border: 4px solid #fff;
}

.step:last-child {
  @apply border-white;
}
.step:last-child:before {
  @apply bg-rocky;
}

.avatar-group{
  @apply -space-x-4 flex overflow-hidden;
}
.avatar{
  @apply w-12 h-12 rounded-full border-4 border-white border-width-4px overflow-hidden;
}



</style>