<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'TestRegistrationActive',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M106.548 32.3667L106.216 92.0313L98.2018 108.733L90.3726 91.958L90.7419 32.2568C90.7419 30.572 92.1452 29.1802 93.881 29.1802L103.483 29.2168C105.182 29.2534 106.585 30.6452 106.548 32.3667Z" fill="#3D00C3"/>
<path d="M106.216 92.0288L98.2018 108.731L97.574 107.412L90.3726 91.9556L106.216 92.0288Z" fill="#FFC401"/>
<path d="M106.549 32.3667L106.475 43.9407L90.6688 43.8308L90.7427 32.2568C90.7427 30.572 92.146 29.1802 93.8818 29.1802L103.484 29.2168C105.183 29.2534 106.586 30.6452 106.549 32.3667Z" fill="#FFC401"/>
<path d="M48.1109 61.4639H57.1913C71.0117 61.4639 82.2622 72.7144 82.2622 86.5348V99.8412H23.04V86.5348C23.04 72.6573 34.2905 61.4639 48.1109 61.4639Z" fill="#3D00C3"/>
<rect x="23.04" y="92.1587" width="58.88" height="7.68" fill="#3D00C3"/>
<path d="M72.0859 39.84C72.0859 42.1814 71.6861 44.5229 70.8295 46.7502C67.0603 56.8014 55.8669 61.8841 45.8157 58.1149C35.7645 54.3457 30.6818 43.1523 34.451 33.1011C37.3065 25.5056 44.5593 20.48 52.6688 20.48C63.3482 20.48 72.0859 29.1606 72.0859 39.84Z" fill="#7D5BCA"/>
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