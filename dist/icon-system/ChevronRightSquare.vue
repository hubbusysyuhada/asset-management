<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M17 22C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17ZM20 17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17ZM14.495 12.9192C15.0027 12.4116 15.0027 11.5884 14.495 11.0808L11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289C9.90237 8.68342 9.90237 9.31658 10.2929 9.70711L12.5858 12L10.2929 14.2929C9.90237 14.6834 9.90237 15.3166 10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071L14.495 12.9192Z" />
</svg>

</template>

<script>
export default {
  name: 'ChevronRightSquare',
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