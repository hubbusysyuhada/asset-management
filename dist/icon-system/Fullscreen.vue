<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 5.1311 4.57642 3 7.5 3H8.75C9.30228 3 9.75 3.44772 9.75 4C9.75 4.55228 9.30228 5 8.75 5H7.5C5.45302 5 4 6.45062 4 8V9C4 9.55228 3.55228 10 3 10C2.44772 10 2 9.55228 2 9V8ZM14.25 4C14.25 3.44772 14.6977 3 15.25 3H16.5C19.4236 3 22 5.1311 22 8V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V8C20 6.45062 18.547 5 16.5 5H15.25C14.6977 5 14.25 4.55228 14.25 4ZM3 14C3.55228 14 4 14.4477 4 15V16C4 17.5494 5.45302 19 7.5 19H8.75C9.30228 19 9.75 19.4477 9.75 20C9.75 20.5523 9.30228 21 8.75 21H7.5C4.57642 21 2 18.8689 2 16V15C2 14.4477 2.44772 14 3 14ZM21 14C21.5523 14 22 14.4477 22 15V16C22 18.8689 19.4236 21 16.5 21H15.25C14.6977 21 14.25 20.5523 14.25 20C14.25 19.4477 14.6977 19 15.25 19H16.5C18.547 19 20 17.5494 20 16V15C20 14.4477 20.4477 14 21 14Z" />
</svg>

</template>

<script>
export default {
  name: 'Fullscreen',
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