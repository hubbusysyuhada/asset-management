<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M8 7C8.55228 7 9 7.44772 9 8V16C9 16.5523 8.55228 17 8 17C7.44772 17 7 16.5523 7 16V8C7 7.44772 7.44772 7 8 7Z" />
<path :style="colorStyle"  d="M17 16V8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8V16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M6.44444 2C3.98985 2 2 3.98985 2 6.44444V17.5556C2 20.0102 3.98985 22 6.44444 22H17.5556C20.0102 22 22 20.0102 22 17.5556V6.44444C22 3.98985 20.0102 2 17.5556 2H6.44444ZM17.5556 4H6.44444C5.09442 4 4 5.09442 4 6.44444V17.5556C4 18.9056 5.09442 20 6.44444 20H17.5556C18.9056 20 20 18.9056 20 17.5556V6.44444C20 5.09442 18.9056 4 17.5556 4Z" />
<path :style="colorStyle"  d="M17 13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13Z" />
<path :style="colorStyle"  d="M9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" />
<path :style="colorStyle"  fill-rule="evenodd" clip-rule="evenodd" d="M16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12ZM19 13C19 14.6569 17.6569 16 16 16C14.3431 16 13 14.6569 13 13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10ZM11 11C11 12.6569 9.65685 14 8 14C6.34315 14 5 12.6569 5 11C5 9.34315 6.34315 8 8 8C9.65685 8 11 9.34315 11 11Z" />
</svg>

</template>

<script>
export default {
  name: 'Options',
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