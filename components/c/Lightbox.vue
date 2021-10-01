<template>
<transition name="fade">
  <div class="Lightbox"
    v-if='show'
    @click.self='close'
    tabindex="0"
    @keydown.esc="close"
  >
    <div class="Lightbox__slot">
      <slot />
    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    const self = this
    document.body.addEventListener('keydown', function (e) {
      e.keyCode === 27 && self.show && self.close()
    })
  },
  beforeDestroy() {
    const self = this
    document.body.removeEventListener('keydown', function (e) {
      e.keyCode === 27 && self.show && self.close()
    })
  },
  methods: {
    close() {
      this.$emit('update:show', false)
      // document.body.style = ''
    },
  },
}
</script>

<style>
.Lightbox {
  cursor: pointer;
  user-select: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: #FFF url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' stroke='RoyalBlue'><line x1='2' y1='2' x2='18' y2='18' /><line x1='18' y1='2' x2='2' y2='18' /></svg>") calc(100% - 18px) 18px no-repeat;
  display: flex;
}

.Lightbox__slot {
  cursor: default;
  margin: auto;

  display: flex;
  align-items: center;

  max-width: 90%;
  height: 100%;
  max-height: 90vh;
}

.Lightbox__slot * {
  @apply shadow-lg;
  border-radius: 16px;
  height: 100%;
  object-fit: cover;
}



.fade-enter-active, .fade-leave-active { transition: all .3s }
.fade-enter, .fade-leave-active { opacity: 0; transform: translateY(10px)}
</style>