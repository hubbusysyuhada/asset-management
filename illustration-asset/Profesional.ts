class Profesional extends HTMLElement {
  id = "talentics-icon-" + (Math.random() + 1).toString(36).substring(5);
  props = ['size', 'color']
  contentStyle = '';
  colorStyle = '';
  size = ''
  color = ''
  constructor() {
    super()
    this._initElement()
    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="406" height="406" viewBox="0 0 406 406" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_580_1990)">
<path d="M261.55 76.0805C258.99 78.2405 257.31 82.4305 256.83 85.9005C256.28 89.9105 256.49 93.6405 257.3 97.0905L261.25 95.0305L301.83 132.71L370.2 152.33C356.6 107.89 325.74 71.0005 285.44 49.4805C278.85 59.2205 270.98 68.1305 261.55 76.0805Z" fill="#CFD3FF"/>
<path d="M102.519 134.499L145.019 95.0293L147.809 96.4893C150.139 89.4693 148.039 79.9293 142.599 75.3393C133.709 67.8393 126.209 59.4393 119.889 50.2793C79.8892 72.1193 49.4192 109.179 36.1992 153.679L93.7492 138.659C96.6892 137.289 99.6092 135.899 102.519 134.499Z" fill="#CFD3FF"/>
<path d="M142.591 75.33C148.031 79.92 150.131 89.46 147.801 96.48L203.121 125.37L257.291 97.08C256.491 93.63 256.271 89.9 256.821 85.89C257.301 82.42 258.981 78.23 261.541 76.07C270.971 68.12 278.841 59.21 285.431 49.47C260.981 36.41 233.061 29 203.401 29C173.141 29 144.691 36.71 119.891 50.26C126.201 59.43 133.701 67.83 142.591 75.33ZM252.311 81.35C252.311 81.35 230.461 106.14 202.391 106.14C172.411 106.14 150.701 81.35 150.701 81.35C150.701 81.35 207.341 115.22 252.311 81.35Z" fill="#FFB7A9"/>
<path d="M93.75 138.66L99.7 137.11L102.51 134.5C99.61 135.9 96.69 137.29 93.75 138.66Z" fill="#FFB7A9"/>
<path d="M202.401 106.149C230.471 106.149 252.321 81.3594 252.321 81.3594C207.351 115.229 150.721 81.3594 150.721 81.3594C150.721 81.3594 172.421 106.149 202.401 106.149Z" fill="#E57E70"/>
<path d="M189.871 199.41H190.321L169.631 176.1L164.891 183.3L105.131 147.34L172.861 274.53L189.871 199.41Z" fill="#F9F5FE"/>
<path d="M99.5995 137.2L99.7095 137.1L93.7595 138.65L36.1995 153.68C36.1995 153.69 36.1895 153.7 36.1895 153.71L99.5995 137.2Z" fill="#F9F5FE"/>
<path d="M236.829 176.48L216.469 199.41H216.029L233.629 275.23L217.409 309.12L292.259 152.67L241.359 183.3L236.829 176.48Z" fill="#F9F5FE"/>
<path d="M201.061 128.351L197.061 134.431C195.691 155.981 202.931 178.431 217.631 193.911C218.261 194.561 218.931 195.231 219.621 195.871L216.481 199.411L236.831 176.481L203.111 125.711L201.061 128.351Z" fill="#FFC401"/>
<path d="M217.631 193.9C202.931 178.42 195.691 155.97 197.061 134.42L169.631 176.1L190.321 199.4H203.221H203.571H216.031H216.471L219.611 195.86C218.931 195.22 218.261 194.56 217.631 193.9Z" fill="#DBA300"/>
<path d="M301.81 132.709L261.24 95.0293L301.79 132.749L301.81 132.709Z" fill="#D1D1D2"/>
<path d="M239.97 172.941L236.83 176.481L241.36 183.301L292.26 152.671L296.31 144.211L242.07 175.631L239.97 172.941Z" fill="#F9F5FE"/>
<path d="M239.97 172.941L236.83 176.481L241.36 183.301L292.26 152.671L296.31 144.211L242.07 175.631L239.97 172.941Z" fill="#D1D1D2"/>
<path d="M236.829 176.479L239.969 172.939L203.129 125.689L203.109 125.709L236.829 176.479Z" fill="#FFC401"/>
<path d="M236.829 176.479L239.969 172.939L203.129 125.689L203.109 125.709L236.829 176.479Z" fill="#D1D1D2"/>
<path d="M203.301 125.469L203.131 125.689L239.971 172.939L242.071 175.629L296.311 144.209L301.791 132.749L261.241 95.0293L257.291 97.0893L203.131 125.379L203.301 125.469Z" fill="#F9F5FE"/>
<path d="M145.02 95.0293L102.52 134.499C102.57 134.469 102.62 134.449 102.68 134.419L145.02 95.0293Z" fill="#D1D1D2"/>
<path d="M102.669 134.42C102.619 134.45 102.569 134.47 102.509 134.5L99.6992 137.11L99.8092 137.08L102.669 134.42Z" fill="#FFB7A9"/>
<path d="M102.669 134.42C102.619 134.45 102.569 134.47 102.509 134.5L99.6992 137.11L99.8092 137.08L102.669 134.42Z" fill="#D1D1D2"/>
<path d="M169.63 176.099L166.53 172.619L164.19 175.629L100.57 138.779L105.13 147.339L164.89 183.299L169.63 176.099Z" fill="#F9F5FE"/>
<path d="M169.63 176.099L166.53 172.619L164.19 175.629L100.57 138.779L105.13 147.339L164.89 183.299L169.63 176.099Z" fill="#D1D1D2"/>
<path d="M99.7096 137.1L99.5996 137.2L99.7096 137.17L99.8196 137.07L99.7096 137.1Z" fill="#F9F5FE"/>
<path d="M99.7096 137.1L99.5996 137.2L99.7096 137.17L99.8196 137.07L99.7096 137.1Z" fill="#D1D1D2"/>
<path d="M201.061 128.35L197.141 133.38C197.111 133.73 197.081 134.08 197.061 134.43L201.061 128.35Z" fill="#FFC401"/>
<path d="M201.061 128.35L197.141 133.38C197.111 133.73 197.081 134.08 197.061 134.43L201.061 128.35Z" fill="#D1D1D2"/>
<path d="M197.139 133.369L166.539 172.619L169.629 176.099L197.059 134.419C197.079 134.069 197.109 133.719 197.139 133.369Z" fill="#DBA300"/>
<path d="M197.139 133.369L166.539 172.619L169.629 176.099L197.059 134.419C197.079 134.069 197.109 133.719 197.139 133.369Z" fill="#D1D1D2"/>
<path d="M166.531 172.619L197.141 133.369L201.061 128.349L203.111 125.709L203.131 125.689L203.301 125.469L203.131 125.379L147.811 96.4793L145.021 95.0293L102.671 134.419L99.8209 137.069L99.7109 137.169H99.7209L100.571 138.779L164.191 175.629L166.531 172.619Z" fill="#F9F5FE"/>
<path d="M359.83 149.359L330.09 162.429L348.44 183.309L203.4 377.789C265.34 377.789 319.73 345.499 350.67 296.839V227.949H352.67V293.619C368.62 267.299 377.8 236.409 377.8 203.389C377.8 185.619 375.13 168.469 370.19 152.319L301.82 132.699L359.83 149.359Z" fill="#3D00C3"/>
<path d="M58.39 183.3L76.74 162.42L47 150.9L99.72 137.17H99.71L99.6 137.2L36.19 153.71C31.52 169.46 29 186.13 29 203.4C29 238.28 39.25 270.76 56.88 298.02V227.45H58.88V301.05C90.23 347.36 143.26 377.8 203.4 377.8L58.39 183.3Z" fill="#3D00C3"/>
<path d="M58.8809 227.439H56.8809V298.009C57.5409 299.029 58.2009 300.039 58.8809 301.039V227.439Z" fill="#22008C"/>
<path d="M352.66 227.949H350.66V296.839C351.34 295.779 352.01 294.709 352.66 293.629V227.949Z" fill="#22008C"/>
<path d="M233.629 275.23L216.029 199.41H203.569H203.219H190.319H189.869L172.859 274.53L205.039 334.98L217.409 309.12L233.629 275.23Z" fill="#FFC401"/>
<path d="M172.86 274.53L105.13 147.34L100.57 138.78L99.72 137.17L47 150.9L76.74 162.43L58.39 183.3L203.4 377.79L205.04 334.98L172.86 274.53Z" fill="#22008C"/>
<path d="M348.44 183.299L330.09 162.429L359.83 149.359L301.82 132.699L301.81 132.709L301.79 132.749L296.31 144.209L292.26 152.669L217.41 309.119L205.04 334.979L203.4 377.789L348.44 183.299Z" fill="#22008C"/>
</g>
<defs>
<clipPath id="clip0_580_1990">
<rect width="348.79" height="348.79" fill="white" transform="translate(29 29)"/>
</clipPath>
</defs>
</svg>
`
  }

  attributeChangedCallback(name: string, _: string, newValue: string) {
    this._setState();
  }

  connectedCallback() {
    this._setState();
  }
  
  disconnectedCallback() {
    this._setState();
  }

  _initElement() {
    this._setState()
    const size = this.size || 24
    let contentStyle = `object-fit: content; width: ${size}; height: ${size}`
    this.contentStyle = contentStyle
    if (this.color) this.colorStyle = `fill: ${this.color}`
  }

  _setState() {
    // @ts-ignore
    this.props.forEach(key => this[key as keyof typeof Profesional] = this.getAttribute(key));
  }
}
export default Profesional