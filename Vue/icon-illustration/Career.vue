<template>
<svg :style="contentStyle" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.6805 73.2411L46.7731 100.133L94.4916 33.1582L39.6805 73.2411Z" fill="#7D5BC9"/>
<path d="M99.3624 24.4036L24.844 56.8843C21.1849 58.4799 21.0178 63.6093 24.5683 65.4389L39.6808 73.2416L84.6926 41.9305C85.1604 41.6047 85.6617 41.989 85.6784 42.4317L47.9764 78.4211C47.0408 79.315 46.5061 80.5514 46.5061 81.8463V98.521C46.5061 103.308 52.7884 105.079 55.2863 100.994L64.4423 86.015L83.7987 96.0065C86.5305 97.4183 89.8554 95.8978 90.5739 92.9154L105.862 29.8672C106.781 26.0577 102.946 22.8414 99.3624 24.4036Z" fill="#3D00C3"/>
</svg>

</template>

<script>
export default {
  name: 'Career',
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