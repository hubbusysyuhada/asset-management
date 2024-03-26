<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M21 10C20.45 10 20 10.45 20 11V14.15C20 15.72 18.72 17 17.15 17H6.85C5.28 17 4 15.72 4 14.15V8.85C4 7.28 5.28 6 6.85 6H11C11.55 6 12 5.55 12 5C12 4.45 11.55 4 11 4H6.85C4.18 4 2 6.18 2 8.85V14.14C2 16.82 4.18 19 6.85 19H11V20H7C6.45 20 6 20.45 6 21C6 21.55 6.45 22 7 22H17C17.55 22 18 21.55 18 21C18 20.45 17.55 20 17 20H13V19H17.15C19.83 19 22 16.82 22 14.15V11C22 10.45 21.55 10 21 10Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M19.6699 2.57C18.9099 1.81 17.6699 1.81 16.8999 2.57L12.6599 6.81L12.0099 10.75C11.8899 11.48 12.5199 12.11 13.2499 11.99L17.1799 11.33L21.4199 7.09C22.1799 6.33 22.1799 5.09 21.4199 4.32L19.6699 2.57ZM14.1499 9.85L14.4999 7.75L18.2899 3.96L20.0399 5.71L16.2399 9.51L14.1499 9.85Z" />
<circle cx="6" cy="8" r="1" />
</svg>

</template>

<script>
export default {
  name: 'EditPage',
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