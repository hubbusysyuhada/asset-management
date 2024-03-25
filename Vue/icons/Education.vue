<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Education',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M12 16.9975C11.79 16.9975 11.59 16.9375 11.41 16.8075L2.41 10.3075C2.15 10.1175 2 9.8175 2 9.4975C2 9.1775 2.15 8.8775 2.41 8.6875L11.41 2.1875C11.76 1.9375 12.23 1.9375 12.58 2.1875L21.58 8.6875C21.85 8.8775 22 9.1775 22 9.4975C22 9.8175 21.85 10.1175 21.59 10.3075L12.59 16.8075C12.41 16.9375 12.21 16.9975 12 16.9975ZM4.71 9.4975L12 14.7675L19.29 9.4975L12 4.2275L4.71 9.4975Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M12 21.5176C11.38 21.5176 10.76 21.3276 10.23 20.9376L4.41 16.6676C4.15 16.4876 4 16.1876 4 15.8676V10.9976H6V15.3576L11.41 19.3276C11.76 19.5876 12.24 19.5876 12.59 19.3276L18 15.3576V10.9976H20V15.8676C20 16.1876 19.85 16.4876 19.59 16.6776L13.77 20.9476C13.24 21.3276 12.62 21.5176 12 21.5176Z" fill="#414042"/>
</svg>
`
    },
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