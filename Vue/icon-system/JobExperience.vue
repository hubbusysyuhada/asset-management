<template>
<svg :style="contentStyle" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path :style="colorStyle"  d="M17.5 16.0901V15.3101C17.5 14.7601 17.05 14.3101 16.5 14.3101C15.95 14.3101 15.5 14.7601 15.5 15.3101V16.5001C15.5 16.7701 15.61 17.0201 15.79 17.2101L16.95 18.3701C17.15 18.5701 17.4 18.6601 17.66 18.6601C17.92 18.6601 18.17 18.5601 18.37 18.3701C18.76 17.9801 18.76 17.3501 18.37 16.9601L17.5 16.0901Z" />
<path :style="colorStyle"  d="M16.5 11C13.47 11 11 13.47 11 16.5C11 19.53 13.47 22 16.5 22C19.53 22 22 19.53 22 16.5C22 13.47 19.53 11 16.5 11ZM16.5 20C14.57 20 13 18.43 13 16.5C13 14.57 14.57 13 16.5 13C18.43 13 20 14.57 20 16.5C20 18.43 18.43 20 16.5 20Z" />
<path :style="colorStyle"  d="M6.33 14.83H9.17C9.72 14.83 10.17 14.38 10.17 13.83C10.17 13.28 9.72 12.83 9.17 12.83H6.33C5.05 12.83 4 11.79 4 10.5V8C4 7.63 4.3 7.33 4.67 7.33H6.34H14.67H16.34C16.7 7.33 17 7.63 17 8V9C17 9.55 17.45 10 18 10C18.55 10 19 9.55 19 9V8C19 6.53 17.8 5.33 16.33 5.33H15.54C15.09 3.43 13.38 2 11.33 2H9.67C7.62 2 5.91 3.43 5.46 5.33H4.67C3.2 5.33 2 6.53 2 8V10.5V16.33C2 17.8 3.2 19 4.67 19H9.18C9.73 19 10.18 18.55 10.18 18C10.18 17.45 9.73 17 9.18 17H4.67C4.3 17 4 16.7 4 16.33V14.14C4.67 14.57 5.47 14.83 6.33 14.83ZM9.67 4H11.34C12.27 4 13.07 4.55 13.45 5.33H7.56C7.93 4.55 8.74 4 9.67 4Z" />
<path :style="colorStyle"  d="M11.5 11.33V10.5C11.5 9.95 11.05 9.5 10.5 9.5C9.95 9.5 9.5 9.95 9.5 10.5V11.33C9.5 11.88 9.95 12.33 10.5 12.33C11.05 12.33 11.5 11.89 11.5 11.33Z" />
</svg>

</template>

<script>
export default {
  name: 'JobExperience',
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