class Phone extends HTMLElement {
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
<path style="${this.colorStyle}"  d="M7.1545 21.9545C7.0645 21.9545 6.9645 21.9545 6.8745 21.9545C5.4445 21.9045 4.1145 21.1245 3.3245 19.8645L2.4345 18.4545C1.6745 17.2545 1.9345 15.6745 3.0345 14.7845L5.4245 12.8445C6.5645 11.9245 8.2045 12.0045 9.2545 13.0245C10.3545 14.0945 10.7545 14.2145 10.7745 14.2145C11.0545 14.1845 11.9945 13.4745 12.6745 12.7345C13.4745 11.9945 14.1845 11.0545 14.2145 10.7245C14.2045 10.7245 14.0645 10.3145 13.0245 9.2545C11.9945 8.2045 11.9145 6.5545 12.8445 5.4245L14.7845 3.0345C15.6745 1.9345 17.2545 1.6745 18.4545 2.4345L19.8645 3.3245C21.1245 4.1145 21.9045 5.4445 21.9545 6.8745C22.0345 9.0945 21.2245 12.6445 16.9345 16.9245C12.8145 21.0445 9.3845 21.9545 7.1545 21.9545ZM7.2445 14.1945C7.0445 14.1945 6.8545 14.2545 6.6945 14.3945L4.3045 16.3345C3.9845 16.5945 3.9145 17.0445 4.1345 17.3845L5.0245 18.7945C5.4645 19.4945 6.1845 19.9245 6.9545 19.9545C8.7945 20.0245 11.7445 19.2945 15.5245 15.5145C19.3045 11.7345 20.0245 8.7645 19.9645 6.9445C19.9345 6.1745 19.5045 5.4545 18.8045 5.0145L17.3945 4.1245C17.0545 3.9045 16.5945 3.9845 16.3445 4.2945L14.4045 6.6845C14.1245 7.0345 14.1445 7.5345 14.4645 7.8645C15.8545 9.2945 16.1245 9.98451 16.1945 10.4345C16.4245 11.8445 14.8045 13.4945 14.0945 14.1445C13.5145 14.7945 11.8545 16.4145 10.4445 16.1845C9.9945 16.1045 9.2945 15.8445 7.8745 14.4545C7.6945 14.2845 7.4645 14.1945 7.2445 14.1945Z" />
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
    this.props.forEach(key => this[key as keyof typeof Phone] = this.getAttribute(key));
  }
}
export default Phone