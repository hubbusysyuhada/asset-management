<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Linkedin',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="3" width="18" height="18" rx="1" fill="#0274B3"/>
<path d="M7.07722 8.65846C7.94829 8.65846 8.65443 7.95142 8.65443 7.07923C8.65443 6.20705 7.94829 5.5 7.07722 5.5C6.20614 5.5 5.5 6.20705 5.5 7.07923C5.5 7.95142 6.20614 8.65846 7.07722 8.65846Z" fill="white"/>
<path d="M10.0989 9.82556H12.7129V11.0246C12.7129 11.0246 13.4222 9.60407 15.3522 9.60407C17.0738 9.60407 18.5 10.4533 18.5 13.0417V18.5H15.7912V13.7031C15.7912 12.1762 14.977 12.0082 14.3566 12.0082C13.0691 12.0082 12.8487 13.1202 12.8487 13.9023V18.5H10.0989V9.82556Z" fill="white"/>
<path d="M5.70232 9.82557H8.45212V18.5H5.70232V9.82557Z" fill="white"/>
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