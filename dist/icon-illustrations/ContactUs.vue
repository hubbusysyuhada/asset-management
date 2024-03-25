<template>
  <div v-html="template"></div>
</template>

<script>
export default {
  name: 'ContactUs',
  props: {
    size: {
      Type: Number,
    },
    color: {}
  },
  computed: {
    template() {
      return `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="128" height="128" rx="10" fill="#F9F5FE"/>
<g clip-path="url(#clip0_376_2908)">
<path d="M100.54 87.5715C99.016 89.4189 96.775 90.4909 94.3995 90.5137H33.6004C31.2249 90.5137 28.9839 89.4417 27.46 87.5715L56.795 62.689L59.8428 64.81C62.3528 66.5662 65.6695 66.5662 68.157 64.81L71.2048 62.689L100.54 87.5715Z" fill="#3D00C3"/>
<path d="M100.988 41.9571L71.2049 62.7116L68.1571 64.8327C65.6471 66.5888 62.3304 66.5888 59.8428 64.8327L56.795 62.7116L27.0118 41.9115C28.5133 39.722 30.9784 38.3992 33.6004 38.3992H94.3995C97.0439 38.3764 99.509 39.722 100.988 41.9571Z" fill="#7D5BCA"/>
<path d="M56.795 62.6889L27.46 87.5715C26.2498 86.1118 25.5999 84.2645 25.5999 82.3715V46.5415C25.5999 44.8994 26.093 43.28 27.0118 41.9116L56.795 62.6889Z" fill="#3D00C3"/>
<path d="M102.4 46.5416V82.3716C102.4 84.2874 101.75 86.112 100.54 87.5716L71.2048 62.6891L100.988 41.9346C101.907 43.303 102.4 44.8995 102.4 46.5416Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M79.8098 79.0199C79.8098 77.1436 81.3309 75.6226 83.2072 75.6226H93.3992C95.2755 75.6226 96.7966 77.1436 96.7966 79.0199C96.7966 80.8962 95.2755 82.4173 93.3992 82.4173H83.2072C81.3309 82.4173 79.8098 80.8962 79.8098 79.0199Z" fill="#FFC401"/>
</g>
<defs>
<clipPath id="clip0_376_2908">
<rect width="76.8" height="52.1143" fill="white" transform="translate(25.5999 38.3994)"/>
</clipPath>
</defs>
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