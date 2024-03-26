class GrowthPackage extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24.5" cy="24.5" r="22.5" fill="#F4EBFF"/>
<path d="M45.7949 2.00326C41.0616 2.36125 36.7502 3.54737 32.9106 5.30454L34.6005 13.7756L43.659 16.0676C46.1701 10.4588 46.8249 5.46931 46.9957 3.20922C47.0483 2.52342 46.4798 1.9515 45.7949 2.00326Z" fill="#DBC8F9"/>
<path d="M43.6599 16.0669C46.171 10.458 46.8257 5.46859 46.9965 3.2085C47.0224 2.86517 46.893 2.55031 46.6713 2.32861L35.0991 13.9008L43.6599 16.0669Z" fill="#CBABFE"/>
<path d="M22.7532 36.2894L24.795 45.7438C24.8848 46.1579 25.3963 46.3088 25.6948 46.0095L32.1093 39.5863C32.3034 39.3922 32.4069 39.124 32.3931 38.8496L31.9868 30.4778L24.8917 28.8009C24.3344 28.6689 23.7849 29.045 23.7047 29.6117L22.7506 36.2919" fill="#7D5BCA"/>
<path d="M12.6949 26.2223L18.7791 24.2986C19.2363 24.1537 19.5209 23.6974 19.4485 23.2229L18.5004 16.9732L10.1398 16.566C9.86552 16.5531 9.5981 16.6557 9.40401 16.8507L2.99035 23.2747C2.69102 23.574 2.84198 24.0864 3.25518 24.1762L12.6967 26.2206" fill="#7D5BCA"/>
<path d="M21.825 13.0303C18.4056 16.4549 14.9964 22.0448 12.6949 26.2216L15.4079 33.6739L22.7506 36.2911C27.2518 33.6661 33.3722 29.874 36.0093 27.2335C39.6004 23.6372 42.0235 19.7208 43.6591 16.0667L32.9107 5.30371C28.5941 7.27913 24.8744 9.97658 21.825 13.0303Z" fill="#7C57D0"/>
<path d="M15.4079 33.6745L22.7506 36.2917C27.2518 33.6667 33.3722 29.8746 36.0093 27.2341C39.6004 23.6378 42.0235 19.7215 43.6591 16.0665L38.2987 10.6992L15.3864 33.6133L15.4079 33.6745Z" fill="#6635D5"/>
<path d="M13.1125 40.7765C13.4584 40.5695 13.7776 40.2986 14.0502 39.9614C15.1164 38.6424 15.0758 36.7144 13.957 35.4403C12.6053 33.9005 10.2598 33.8444 8.83471 35.2712C8.51554 35.5913 8.27141 35.9579 8.10061 36.3487L3.78229 44.2055C3.42084 44.8628 4.13596 45.5866 4.79674 45.232L12.7364 40.9698C12.8641 40.9137 12.9891 40.8499 13.1108 40.7774L13.1125 40.7765Z" fill="#FFC401"/>
<path d="M24.3017 24.7543C23.7591 24.2108 22.8783 24.2108 22.3349 24.7543L15.4847 31.613L17.4515 33.5824L24.3017 26.7237C24.8443 26.1793 24.8443 25.2977 24.3017 24.7543Z" fill="#F9F5FE"/>
<path d="M30.8223 22.6554C33.2658 22.6554 35.2467 20.6718 35.2467 18.2249C35.2467 15.778 33.2658 13.7944 30.8223 13.7944C28.3787 13.7944 26.3978 15.778 26.3978 18.2249C26.3978 20.6718 28.3787 22.6554 30.8223 22.6554Z" fill="#FFC401"/>
<path d="M4.79675 45.2321L12.7364 40.9699C12.8641 40.9138 12.9892 40.85 13.1108 40.7775L13.1125 40.7766C13.4584 40.5696 13.7776 40.2987 14.0502 39.9614C15.1164 38.6425 15.0759 36.7145 13.957 35.4404C13.8941 35.3688 13.8294 35.3024 13.7621 35.2368L3.90393 45.0958C4.12045 45.3167 4.4655 45.4107 4.79675 45.2321Z" fill="#DBA300"/>
<path d="M17.4515 33.5824L24.3016 26.7237C24.8442 26.1802 24.8442 25.2986 24.3016 24.7543C24.2921 24.7448 24.2818 24.737 24.2723 24.7275L16.4353 32.5645L17.4515 33.5824Z" fill="#E0D2FF"/>
<path d="M27.6935 21.3583C29.4213 23.0887 32.2223 23.0887 33.9501 21.3583C35.678 19.6278 35.678 16.8234 33.9501 15.093C33.9432 15.0861 33.9355 15.0792 33.9277 15.0723L27.6685 21.3315C27.6771 21.3401 27.6848 21.3496 27.6935 21.3583Z" fill="#DBA300"/>
<path d="M30.8222 24.0477C29.2686 24.0477 27.809 23.4421 26.71 22.3423C25.611 21.2424 25.0072 19.7803 25.0072 18.225C25.0072 16.6696 25.6119 15.2075 26.71 14.1076C28.977 11.8372 32.6665 11.8372 34.9335 14.1076C37.2005 16.3781 37.2005 20.0718 34.9335 22.3423C33.8354 23.4421 32.3749 24.0477 30.8222 24.0477ZM30.8222 15.1885C30.045 15.1885 29.2686 15.4844 28.6768 16.077C28.104 16.6507 27.7883 17.4132 27.7883 18.225C27.7883 19.0367 28.104 19.7993 28.6768 20.3729C29.2496 20.9465 30.0113 21.2631 30.8222 21.2631C31.6331 21.2631 32.3948 20.9474 32.9676 20.3738C34.1502 19.1894 34.1502 17.2623 32.9676 16.0779C32.3758 15.4844 31.5986 15.1885 30.8222 15.1885Z" fill="#3D00C3"/>
<path d="M32.9667 16.0768C34.1494 17.2612 34.1494 19.1883 32.9667 20.3727C32.394 20.9463 31.6323 21.262 30.8214 21.262C30.0105 21.262 29.2488 20.9463 28.676 20.3718C28.6674 20.3632 28.6596 20.3546 28.6519 20.3459L26.6842 22.3136C26.6928 22.3222 26.7015 22.3317 26.7101 22.3403C27.8082 23.4402 29.2686 24.0458 30.8222 24.0458C32.3758 24.0458 33.8354 23.4402 34.9344 22.3403C37.2014 20.0699 37.2014 16.3761 34.9344 14.1057C34.9275 14.0988 34.9197 14.0927 34.9128 14.085L32.9452 16.0526C32.9521 16.0621 32.9598 16.069 32.9667 16.0768Z" fill="#3D00C3"/>
<path d="M10.3166 30.7691C10.0363 31.3367 10.1484 32.019 10.5953 32.4667L16.6388 38.5181C17.1029 38.9831 17.8181 39.0848 18.3926 38.7674C19.3423 38.2429 20.9123 37.3639 22.7514 36.2917L12.6949 26.2222C11.6261 28.1622 10.7963 29.7978 10.3166 30.7691Z" fill="#531FC8"/>
<path d="M16.6389 38.5184C17.103 38.9833 17.8181 39.0851 18.3926 38.7677C19.3424 38.2432 20.9124 37.3642 22.7515 36.2919L17.7336 31.2671L13.5627 35.4379L16.6389 38.5184Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof GrowthPackage] = this.getAttribute(key));
  }
}
export default GrowthPackage