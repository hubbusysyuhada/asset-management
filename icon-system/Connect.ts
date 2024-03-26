class Connect extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M16.0828 5.34699C15.5433 4.80751 14.6765 4.80751 14.137 5.34699L13.347 6.13699C12.8075 6.67647 12.8075 7.5433 13.347 8.08278L15.917 10.6528C16.4565 11.1923 17.3233 11.1923 17.8628 10.6528L18.6528 9.86278C19.1923 9.3233 19.1923 8.45647 18.6528 7.91699L16.0828 5.34699ZM12.7228 3.93278C14.0433 2.61225 16.1765 2.61225 17.497 3.93278L20.067 6.50278C21.3875 7.8233 21.3875 9.95646 20.067 11.277L19.277 12.067C17.9565 13.3875 15.8233 13.3875 14.5028 12.067L11.9328 9.49699C10.6123 8.17647 10.6123 6.0433 11.9328 4.72278L12.7228 3.93278Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M8.04274 13.387C7.50326 12.8476 6.63643 12.8476 6.09695 13.387L5.30695 14.177C4.76747 14.7165 4.76747 15.5833 5.30695 16.1228L7.87695 18.6928C8.41643 19.2323 9.28326 19.2323 9.82274 18.6928L10.6127 17.9028C11.1522 17.3633 11.1522 16.4965 10.6127 15.957L8.04274 13.387ZM4.68274 11.9728C6.00326 10.6523 8.13643 10.6523 9.45695 11.9728L12.027 14.5428C13.3475 15.8633 13.3475 17.9965 12.027 19.317L11.2369 20.107C9.91643 21.4276 7.78326 21.4276 6.46274 20.107L3.89274 17.537L4.59984 16.8299L3.89274 17.537C2.57221 16.2165 2.57221 14.0833 3.89274 12.7628L4.59984 13.4699L3.89274 12.7628L4.68274 11.9728Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M11.3367 10.2929C11.7272 10.6834 11.7272 11.3166 11.3367 11.7071L9.55672 13.4871C9.16619 13.8776 8.53303 13.8776 8.1425 13.4871C7.75198 13.0966 7.75198 12.4634 8.1425 12.0729L9.9225 10.2929C10.313 9.90237 10.9462 9.90237 11.3367 10.2929Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M13.7068 12.663C14.0974 13.0535 14.0974 13.6867 13.7068 14.0772L11.9268 15.8572C11.5363 16.2477 10.9031 16.2477 10.5126 15.8572C10.1221 15.4667 10.1221 14.8335 10.5126 14.443L12.2926 12.663C12.6831 12.2725 13.3163 12.2725 13.7068 12.663Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M6.42711 17.5732C6.81763 17.9637 6.81763 18.5969 6.42711 18.9874L3.70711 21.7074C3.31658 22.0979 2.68342 22.0979 2.29289 21.7074C1.90237 21.3169 1.90237 20.6837 2.29289 20.2932L5.01289 17.5732C5.40342 17.1826 6.03658 17.1826 6.42711 17.5732Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M21.7076 2.29289C22.0981 2.68342 22.0981 3.31658 21.7076 3.70711L18.9376 6.47711C18.5471 6.86763 17.9139 6.86763 17.5234 6.47711C17.1328 6.08658 17.1328 5.45342 17.5234 5.06289L20.2934 2.29289C20.6839 1.90237 21.3171 1.90237 21.7076 2.29289Z" />
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
    this.props.forEach(key => this[key as keyof typeof Connect] = this.getAttribute(key));
  }
}
export default Connect