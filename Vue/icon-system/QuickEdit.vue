<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M14.41 3.1175C15.9 1.6275 18.32 1.6275 19.81 3.1175L20.89 4.1975C22.38 5.6875 22.38 8.1075 20.89 9.5975L8.47 21.9975H3.52C2.68 21.9975 2 21.3175 2 20.4675V15.5175L14.41 3.1175ZM18.01 4.3375L19.66 5.9875C20.11 6.4375 20.11 7.1775 19.66 7.6375L17.19 10.0975L13.9 6.8075L16.37 4.3375C16.82 3.8875 17.56 3.8875 18.01 4.3375ZM15.77 11.5175L7.29 19.9975H4V16.7275L12.48 8.2275L15.77 11.5175Z" />
</svg>

</template>

<script>
export default {
  name: 'QuickEdit',
  props: {
    size: {
      Type: Number,
    },
    color: {
      Type: String,
    }
  },
  computed: {
    contentStyle() {
      const size = this.size || 24
      return `width: ${size}px; height: ${size}px`
    },
    colorStyle() {
      if (this.color) return `fill: ${this.color}`
      return ""
    }
  },
}
</script>