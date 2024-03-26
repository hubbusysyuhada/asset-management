class VolumeUp extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M15.4454 8.16806C15.9049 7.8617 16.5258 7.98588 16.8322 8.44541C18.2672 10.598 18.2672 13.4023 16.8322 15.5548C16.5258 16.0143 15.9049 16.1385 15.4454 15.8322C14.9859 15.5258 14.8617 14.9049 15.1681 14.4454C16.1552 12.9647 16.1552 11.0356 15.1681 9.55481C14.8617 9.09528 14.9859 8.47441 15.4454 8.16806Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M19.553 7.1053C20.047 6.85831 20.6477 7.05854 20.8946 7.55252C22.2944 10.3521 22.2944 13.6474 20.8946 16.4469C20.6477 16.9409 20.047 17.1411 19.553 16.8942C19.059 16.6472 18.8588 16.0465 19.1058 15.5525C20.2241 13.316 20.2241 10.6835 19.1058 8.44694C18.8588 7.95297 19.059 7.35229 19.553 7.1053Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M12 7.20253C12 6.77861 11.5056 6.54703 11.1799 6.81842L8.05739 9.42052C7.6081 9.79493 7.04177 9.99997 6.45693 9.99997H4.5C4.22386 9.99997 4 10.2238 4 10.5V13.5C4 13.7761 4.22386 14 4.5 14H6.45693C7.04177 14 7.6081 14.205 8.05739 14.5794L11.1799 17.1815C11.5056 17.4529 12 17.2213 12 16.7974V7.20253ZM9.89954 5.28198C11.5279 3.92505 14 5.08294 14 7.20253V16.7974C14 18.917 11.5279 20.0749 9.89954 18.718L6.77702 16.1159C6.68716 16.041 6.57389 16 6.45693 16H4.5C3.11929 16 2 14.8807 2 13.5V10.5C2 9.11926 3.11929 7.99997 4.5 7.99997H6.45693C6.57389 7.99997 6.68716 7.95896 6.77702 7.88408L9.89954 5.28198Z" />
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
    this.props.forEach(key => this[key as keyof typeof VolumeUp] = this.getAttribute(key));
  }
}
export default VolumeUp