class Cart extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M14.3999 3.20006C14.8417 2.86869 15.4685 2.95823 15.7999 3.40006L18.4999 7.00006H18.5031C20.3417 7.00006 21.7478 8.63895 21.4682 10.4562L20.3913 17.4562C20.1661 18.9197 18.9069 20.0001 17.4261 20.0001H6.57366C5.09295 20.0001 3.8337 18.9197 3.60855 17.4562L2.53162 10.4562C2.25204 8.63895 3.65808 7.00006 5.49674 7.00006H5.4999L8.1999 3.40006C8.53127 2.95823 9.15808 2.86869 9.5999 3.20006C10.0417 3.53143 10.1313 4.15823 9.7999 4.60006L7.9999 7.00006H15.9999L14.1999 4.60006C13.8685 4.15823 13.9581 3.53143 14.3999 3.20006ZM5.98825 9.00006C5.99551 9.00014 6.00277 9.00014 6.01002 9.00006H17.9898H18.0116H18.5031C19.116 9.00006 19.5846 9.54636 19.4914 10.1521L18.4145 17.1521C18.3395 17.6399 17.9197 18.0001 17.4261 18.0001H6.57366C6.08009 18.0001 5.66034 17.6399 5.58529 17.1521L4.50837 10.1521C4.41517 9.54636 4.88385 9.00006 5.49674 9.00006H5.98825Z" />
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
    this.props.forEach(key => this[key as keyof typeof Cart] = this.getAttribute(key));
  }
}
export default Cart