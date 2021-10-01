### нарезка Картинки

'small' => 240,
'medium' => 480,
'large' => 720,
'extra' => 1080,

на картинках ожидаем по дефолту 'medium' ( пример: https://ag.nn.rusatom.dev/storage/WTF/`${medium}`.HASH.jpg )


## Build Setup

```bash
# install and start localhost:3000
$ yarn && yarn dev

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Features

- ⚡️ Vite + 💚 Nuxt - Instant HMR + Nuxt Ecosystem

- 📦 Components auto importing
<!-- 
- 🍍 [State Management via Pinia](https://pinia.esm.dev/) -->

- 🎨 [Windi CSS](https://github.com/windicss/windicss) - next generation utility-first CSS framework

- 😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/vite-plugin-icons)

- 🔥 Use the [new `<script setup>` syntax in Vue 2](https://github.com/antfu/unplugin-vue2-script-setup)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🦾 TypeScript, of course

## Plugins

### Vue Plugins

- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

### Nuxt Modules

- [`nuxt-vite`](https://github.com/nuxt/vite) - Vite for Nuxt 2
- [`nuxt-windicss`](https://github.com/windicss/nuxt-windicss-module) - Windi CSS integration
- [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup) - `<script setup>` support for Vue 2
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - Use Vue Composition API without importing

### Vite Plugins

- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) - icons as Vue components

### Nuxt State

- [x] Dev Server
- [x] HMR
- [x] Build
- [ ] Generate (await `nuxt-vite`)

## IDE Integration

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable Vetur if you have it).
