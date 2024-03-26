<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M7 22C4.23858 22 2 19.7614 2 17L2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7ZM4 17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7L4 17ZM9.50503 12.9192C8.99734 12.4116 8.99734 11.5884 9.50503 11.0808L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L11.4142 12L13.7071 14.2929C14.0976 14.6834 14.0976 15.3166 13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071L9.50503 12.9192Z" />
</svg>

</template>

<script>
export default {
  name: 'ChevronLeftSquare',
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