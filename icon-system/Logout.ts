class Logout extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M13.0002 2C10.2387 2 8.00015 4.23858 8.00015 7C8.00015 7.55228 8.44787 8 9.00015 8C9.55244 8 10.0002 7.55228 10.0002 7C10.0002 5.34315 11.3433 4 13.0002 4H17.0002C18.657 4 20.0002 5.34315 20.0002 7V17C20.0002 18.6569 18.657 20 17.0002 20H13.0002C11.3433 20 10.0002 18.6569 10.0002 17C10.0002 16.4477 9.55244 16 9.00015 16C8.44787 16 8.00015 16.4477 8.00015 17C8.00015 19.7614 10.2387 22 13.0002 22H17.0002C19.7616 22 22.0002 19.7614 22.0002 17V7C22.0002 4.23858 19.7616 2 17.0002 2H13.0002Z" />
<path style="${this.colorStyle}"  d="M14.0002 11C14.5524 11 15.0002 11.4477 15.0002 12C15.0002 12.5523 14.5524 13 14.0002 13V11Z" />
<path style="${this.colorStyle}"  d="M5.71807 11C5.80709 10.8902 5.89239 10.7837 5.97307 10.682C6.21855 10.3723 6.42639 10.1004 6.57315 9.90549C6.6466 9.80795 6.70492 9.72946 6.7452 9.67492L6.79176 9.61162L6.80425 9.59454L6.80866 9.58848C6.8087 9.58842 6.80917 9.58778 6.00015 9L6.80866 9.58848C7.13329 9.14167 7.03474 8.51561 6.58793 8.19098C6.14115 7.86637 5.51582 7.9654 5.19118 8.41215L5.18836 8.41602L5.17813 8.43002L5.13637 8.48679C5.09942 8.53682 5.0448 8.61033 4.9754 8.7025C4.83647 8.88702 4.63898 9.14542 4.40591 9.43937C3.93467 10.0337 3.33783 10.7481 2.79304 11.2929L2.08594 12L2.79304 12.7071C3.33783 13.2519 3.93467 13.9663 4.40591 14.5606C4.63898 14.8546 4.83647 15.113 4.9754 15.2975C5.0448 15.3897 5.09942 15.4632 5.13637 15.5132L5.17813 15.57L5.18836 15.584L5.1907 15.5872C5.51534 16.0339 6.14115 16.1336 6.58793 15.809C7.03474 15.4844 7.13379 14.859 6.80917 14.4122L6.00015 15C6.80917 14.4122 6.80921 14.4123 6.80917 14.4122L6.80425 14.4055L6.79176 14.3884L6.7452 14.3251C6.70492 14.2705 6.6466 14.1921 6.57315 14.0945C6.42639 13.8996 6.21855 13.6277 5.97307 13.318C5.89239 13.2163 5.80709 13.1098 5.71807 13H14.0002V11H5.71807Z" />
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
    this.props.forEach(key => this[key as keyof typeof Logout] = this.getAttribute(key));
  }
}
export default Logout