<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'Office',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M21 22H10C9.45 22 9 21.55 9 21V7C9 6.45 9.45 6 10 6H21C21.55 6 22 6.45 22 7V21C22 21.55 21.55 22 21 22ZM11 20H20V8H11V20Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M21.0002 8H10.0002C9.69022 8 9.40022 7.86 9.21022 7.62C9.02022 7.38 8.96022 7.06 9.03022 6.76L10.0302 2.76C10.1402 2.31 10.5402 2 11.0002 2H20.0002C20.4602 2 20.8602 2.31 20.9702 2.76L21.9702 6.76C22.0502 7.06 21.9802 7.38 21.7902 7.62C21.6002 7.86 21.3102 8 21.0002 8ZM11.2802 6H19.7202L19.2202 4H11.7802L11.2802 6Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M10 22H3C2.45 22 2 21.55 2 21V10C2 9.45 2.45 9 3 9H10C10.55 9 11 9.45 11 10V21C11 21.55 10.55 22 10 22ZM4 20H9V11H4V20Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M18 22H13C12.45 22 12 21.55 12 21V16C12 15.45 12.45 15 13 15H18C18.55 15 19 15.45 19 16V21C19 21.55 18.55 22 18 22ZM14 20H17V17H14V20Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M7 14H6C5.45 14 5 13.55 5 13C5 12.45 5.45 12 6 12H7C7.55 12 8 12.45 8 13C8 13.55 7.55 14 7 14Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M14 11H13C12.45 11 12 10.55 12 10C12 9.45 12.45 9 13 9H14C14.55 9 15 9.45 15 10C15 10.55 14.55 11 14 11Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M18 11H17C16.45 11 16 10.55 16 10C16 9.45 16.45 9 17 9H18C18.55 9 19 9.45 19 10C19 10.55 18.55 11 18 11Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M14 14H13C12.45 14 12 13.55 12 13C12 12.45 12.45 12 13 12H14C14.55 12 15 12.45 15 13C15 13.55 14.55 14 14 14Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M18 14H17C16.45 14 16 13.55 16 13C16 12.45 16.45 12 17 12H18C18.55 12 19 12.45 19 13C19 13.55 18.55 14 18 14Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M7 17H6C5.45 17 5 16.55 5 16C5 15.45 5.45 15 6 15H7C7.55 15 8 15.45 8 16C8 16.55 7.55 17 7 17Z" fill="#414042"/>
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