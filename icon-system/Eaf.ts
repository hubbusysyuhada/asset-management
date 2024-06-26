class Eaf extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
<path style="${this.colorStyle}"  d="M9.97988 11.7002H9.46988C7.34988 11.7002 5.62988 13.4202 5.62988 15.5402V15.8002C5.62988 16.3602 6.08988 16.8202 6.64988 16.8202H12.7899C13.3499 16.8202 13.8099 16.3602 13.8099 15.8002V15.5402C13.8199 13.4202 12.0999 11.7002 9.97988 11.7002ZM7.44988 15.4002V15.2102C7.44988 14.0602 8.37988 13.1302 9.52988 13.1302H9.90988C11.0599 13.1302 11.9899 14.0602 11.9899 15.2102V15.4002H7.44988Z" />
<path style="${this.colorStyle}"  d="M9.72969 11.1898C10.8597 11.1898 11.7797 10.2698 11.7797 9.13984C11.7797 8.00984 10.8597 7.08984 9.72969 7.08984C8.59969 7.08984 7.67969 8.00984 7.67969 9.13984C7.67969 10.2798 8.59969 11.1898 9.72969 11.1898ZM9.72969 8.49984C10.0897 8.49984 10.3797 8.78984 10.3797 9.14984C10.3797 9.50984 10.0897 9.79984 9.72969 9.79984C9.36969 9.79984 9.07969 9.50984 9.07969 9.14984C9.07969 8.78984 9.36969 8.49984 9.72969 8.49984Z" />
<path style="${this.colorStyle}"  d="M17.45 20.54H6.55C4.04 20.54 2 18.51 2 16V8.55C2 6.04 4.04 4 6.55 4H17.46C19.96 4 22 6.04 22 8.55V16C22 18.51 19.96 20.54 17.45 20.54ZM6.55 5.82C5.05 5.82 3.82 7.04 3.82 8.55V16C3.82 17.5 5.04 18.73 6.55 18.73H17.46C18.96 18.73 20.19 17.51 20.19 16V8.55C20.19 7.05 18.97 5.82 17.46 5.82H6.55Z" />
<path style="${this.colorStyle}"  d="M17.4496 9.53973H14.7196C14.2196 9.53973 13.8096 9.12973 13.8096 8.62973C13.8096 8.12973 14.2196 7.71973 14.7196 7.71973H17.4496C17.9496 7.71973 18.3596 8.12973 18.3596 8.62973C18.3596 9.13973 17.9596 9.53973 17.4496 9.53973Z" />
<path style="${this.colorStyle}"  d="M17.4496 13.1804H14.7196C14.2196 13.1804 13.8096 12.7704 13.8096 12.2704C13.8096 11.7704 14.2196 11.3604 14.7196 11.3604H17.4496C17.9496 11.3604 18.3596 11.7704 18.3596 12.2704C18.3596 12.7704 17.9596 13.1804 17.4496 13.1804Z" />
<path style="${this.colorStyle}"  d="M17.4497 16.82H15.6297C15.1297 16.82 14.7197 16.41 14.7197 15.91C14.7197 15.41 15.1297 15 15.6297 15H17.4497C17.9497 15 18.3597 15.41 18.3597 15.91C18.3597 16.41 17.9597 16.82 17.4497 16.82Z" />
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
    this.props.forEach(key => this[key as keyof typeof Eaf] = this.getAttribute(key));
  }
}
export default Eaf