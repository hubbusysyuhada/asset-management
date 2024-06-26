class KeputusanDisabled extends HTMLElement {
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
<path d="M22.0008 12.0006C22.0008 6.47749 17.5235 2.00015 12.0004 2.00015C6.47734 2.00015 2 6.47749 2 12.0006C2 17.5236 6.47734 22.001 12.0004 22.001C17.5235 22.001 22.0008 17.5236 22.0008 12.0006Z" stroke="#B7B6B7" stroke-width="1.7142" stroke-miterlimit="10"/>
<path d="M17.6044 11.209H14.7344L11.7644 8.23902C11.6144 8.08902 11.4144 7.99902 11.1944 7.99902H7.99436C7.55436 7.99902 7.19436 8.35902 7.19436 8.79902C7.19436 9.23902 7.55436 9.59902 7.99436 9.59902H10.8644L12.4644 11.199H6.39436C5.95436 11.199 5.59436 11.559 5.59436 11.999C5.59436 12.439 5.95436 12.799 6.39436 12.799H14.0744L12.4744 14.399H9.59436C9.15436 14.399 8.79436 14.759 8.79436 15.199C8.79436 15.639 9.15436 15.999 9.59436 15.999H12.7944C13.0044 15.999 13.2144 15.919 13.3644 15.769L16.3344 12.799H17.6044C18.0444 12.799 18.4044 12.439 18.4044 11.999C18.4044 11.559 18.0544 11.209 17.6044 11.209Z" fill="#B7B6B7"/>
<path d="M6.39436 12.8088H14.0744L12.4744 14.4088H9.59436C9.15436 14.4088 8.79436 14.7688 8.79436 15.2088C8.79436 15.6488 9.15436 16.0088 9.59436 16.0088H12.7944C13.0044 16.0088 13.2144 15.9288 13.3644 15.7788L16.3344 12.8088H17.6044C18.0444 12.8088 18.4044 12.4488 18.4044 12.0088H5.59436C5.59436 12.4488 5.95436 12.8088 6.39436 12.8088Z" fill="#F2F2F2"/>
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
    this.props.forEach(key => this[key as keyof typeof KeputusanDisabled] = this.getAttribute(key));
  }
}
export default KeputusanDisabled