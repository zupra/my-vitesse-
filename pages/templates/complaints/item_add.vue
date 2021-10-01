<template>
<main class="container mx-auto px-8">

  <section class="w-620px mx-auto">

    <N-link to="/templates/complaints" class="parmigiano opacity-72 hover:text-blue-600">
      / Обращения
    </N-link>

    <h1 class="cheddar my-10">Новое обращение</h1>

    <input 
      type="text"
      placeholder="Категория обращения"
      class="rounded-8px h-10 placeholder-gray-500 px-4 w-full mb-8"
    />

    <input 
      type="text"
      placeholder="Заголовок"
      class="rounded-8px h-10 placeholder-gray-500 px-4 w-full mb-8"
    />


    <textarea name="" id="" cols="30" rows="10"
      placeholder="Категория обращения"
      class="rounded-8px placeholder-gray-500 px-4 pt-2 w-full mb-12"
    >
    </textarea>


    <div class="burrata mb-1">
      Укажите место
    </div>

    <div class="feta opacity-48">
      Введите адрес или передвинте метку на карте
    </div>

  <img
    class="w-full shadow-lg rounded-3xl mt-8" 
    src="https://static-maps.yandex.ru/1.x/?ll=37.677751,55.757718&spn=0.016457,0.00619&l=map&size=600,300" alt="">

  </section>


</main>
</template>

<script>
export default {

}
</script>

<style>
input,
textarea {
  background: #EFF4FD;
}

</style>