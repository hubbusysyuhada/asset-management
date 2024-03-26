class Image extends HTMLElement {
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
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M7.45455 2H16.5455C19.5579 2 22 4.44208 22 7.45455V16.5455C22 19.5579 19.5579 22 16.5455 22H7.45455C4.44208 22 2 19.5579 2 16.5455V7.45455C2 4.44208 4.44208 2 7.45455 2ZM7.45455 3.81818C5.44624 3.81818 3.81818 5.44624 3.81818 7.45455V16.5455C3.81818 18.5538 5.44624 20.1818 7.45455 20.1818H16.5455C18.5538 20.1818 20.1818 18.5538 20.1818 16.5455V7.45455C20.1818 5.44624 18.5538 3.81818 16.5455 3.81818H7.45455Z" />
<path style="${this.colorStyle}"  fill-rule="evenodd" clip-rule="evenodd" d="M4.26206 19.4684C3.91265 19.137 3.91265 18.5998 4.26206 18.2685L8.72734 14.034L8.73989 14.023C9.11896 13.69 9.70503 13.6917 10.082 14.0269L10.0835 14.0283L11.0021 14.849L13.9564 11.6051C14.329 11.1959 14.9891 11.1716 15.394 11.5522L15.4071 11.5645L20.7607 17.0285C21.0971 17.3718 21.0763 17.9087 20.7143 18.2276C20.3523 18.5466 19.7861 18.5269 19.4498 18.1836L14.7231 13.3594L12.3057 16.0139L16.2452 19.534C16.6048 19.8553 16.6217 20.3923 16.2828 20.7334C15.9439 21.0744 15.3776 21.0904 15.018 20.769L9.42545 15.7719L5.52741 19.4684C5.17799 19.7997 4.61148 19.7997 4.26206 19.4684ZM8.92106 8.69697C8.42691 8.69697 8.02632 9.07685 8.02632 9.54545C8.02632 10.0141 8.42691 10.3939 8.92106 10.3939C9.41521 10.3939 9.81579 10.0141 9.81579 9.54545C9.81579 9.07685 9.41521 8.69697 8.92106 8.69697ZM11.6053 9.54545C11.6053 10.9513 10.4035 12.0909 8.92106 12.0909C7.43861 12.0909 6.23685 10.9513 6.23685 9.54545C6.23685 8.13964 7.43861 7 8.92106 7C10.4035 7 11.6053 8.13964 11.6053 9.54545Z" />
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
    this.props.forEach(key => this[key as keyof typeof Image] = this.getAttribute(key));
  }
}
export default Image