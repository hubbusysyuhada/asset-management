class WifiOff extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M10.6156 12.0172C11.0746 11.924 11.5496 11.875 12.036 11.875C13.9784 11.875 15.7404 12.6564 17.0221 13.9199C17.4155 14.3078 17.4203 14.9414 17.0327 15.3352C16.6451 15.729 16.012 15.7337 15.6185 15.3458C14.7982 14.5371 13.7084 14.0051 12.4955 13.897L10.6156 12.0172ZM10.0481 14.2781C9.44989 14.5314 8.9099 14.8958 8.45338 15.3458C8.05993 15.7337 7.42678 15.729 7.03921 15.3352C6.65163 14.9414 6.6564 14.3078 7.04985 13.9199C7.49737 13.4787 8.00346 13.0963 8.55535 12.7854L10.0481 14.2781Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7.68103 9.08279C9.01324 8.49532 10.4865 8.16895 12.0352 8.16895C14.89 8.16895 17.4882 9.2779 19.4196 11.0869C19.8229 11.4646 19.8438 12.098 19.4664 12.5015C19.0891 12.9051 18.4562 12.926 18.053 12.5484C16.4774 11.0726 14.3627 10.1705 12.0352 10.1705C11.0528 10.1705 10.1083 10.3313 9.22629 10.628L7.68103 9.08279ZM7.31279 11.5429C6.84996 11.8377 6.41639 12.1747 6.0174 12.5484C5.61417 12.926 4.98135 12.9051 4.60396 12.5015C4.22658 12.098 4.24754 11.4646 4.65077 11.0869C5.03222 10.7297 5.43967 10.3997 5.86997 10.1002L7.31279 11.5429Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M4.95396 6.35588C7.0472 5.17804 9.46324 4.50586 12.035 4.50586C15.7328 4.50586 19.1086 5.89545 21.6659 8.17977C22.0779 8.54782 22.1138 9.18047 21.746 9.59284C21.3783 10.0052 20.7461 10.0411 20.3341 9.67307C18.1291 7.70344 15.2228 6.50746 12.035 6.50746C10.0198 6.50746 8.11704 6.98543 6.43284 7.83468L4.95396 6.35588ZM4.67906 8.90934C4.32877 9.16595 3.99233 9.44044 3.67105 9.73146C3.26159 10.1024 2.62921 10.0709 2.25859 9.66107C1.88797 9.25128 1.91946 8.61839 2.32893 8.24748C2.62494 7.97933 2.93212 7.72327 3.24969 7.48006L4.67906 8.90934Z" fill="#414042"/>
<path style="${this.colorStyle}"  d="M10.4711 17.9404C10.4711 17.0758 11.1715 16.3749 12.0354 16.3749C12.8993 16.3749 13.5996 17.0758 13.5996 17.9404C13.5996 18.805 12.8993 19.5059 12.0354 19.5059C11.1715 19.5059 10.4711 18.805 10.4711 17.9404Z" fill="#414042"/>
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M3.29287 3.29291C2.90236 3.68345 2.90238 4.31661 3.29291 4.70713L19.2929 20.7062C19.6834 21.0968 20.3166 21.0967 20.7071 20.7062C21.0976 20.3157 21.0976 19.6825 20.7071 19.292L4.70709 3.29287C4.31655 2.90236 3.68339 2.90238 3.29287 3.29291Z" fill="#414042"/>
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
    this.props.forEach(key => this[key as keyof typeof WifiOff] = this.getAttribute(key));
  }
}
export default WifiOff