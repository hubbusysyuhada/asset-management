<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7ZM12.361 7.22479C13.142 6.44375 14.4084 6.44374 15.1894 7.22479L16.981 9.0164C17.7621 9.79745 17.7621 11.0638 16.981 11.8448L12.6474 16.1784L8.62734 16.849C7.88336 16.9732 7.23801 16.3287 7.36109 15.5846L8.02686 11.5589L12.361 7.22479ZM15.5668 10.4306L13.7752 8.63901L9.89526 12.519L9.53964 14.6692L11.6863 14.3111L15.5668 10.4306Z" />
</svg>

</template>

<script>
export default {
  name: 'New',
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