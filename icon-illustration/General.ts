class General extends HTMLElement {
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
    shadowRoot.innerHTML = `<svg style="${this.contentStyle}" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72.5205 24H40C35.6013 24 32 27.6013 32 32V96C32 100.399 35.6013 104 40 104H88C92.3987 104 96 100.399 96 96V47.4795C96 45.255 95.1186 43.1144 93.5404 41.5446L78.4554 26.4596C76.8856 24.8814 74.745 24 72.5205 24Z" fill="#F9F5FE"/>
<path d="M72.5201 24V43.2823C72.5201 45.5992 74.4005 47.4795 76.7174 47.4795L95.9996 47.4711C95.9996 45.2466 95.1182 43.106 93.54 41.5362L78.455 26.4596C76.8852 24.8814 74.7446 24 72.5201 24Z" fill="#3D00C3"/>
<path d="M88.6212 57.8721H39.3872C38.4722 57.8721 37.7251 57.125 37.7251 56.21C37.7251 55.295 38.4722 54.5479 39.3872 54.5479H88.6212C89.5362 54.5479 90.2833 55.295 90.2833 56.21C90.2833 57.125 89.5362 57.8721 88.6212 57.8721Z" fill="#7D5BCA"/>
<path d="M88.6212 68.3242H39.3872C38.4722 68.3242 37.7251 67.5771 37.7251 66.6621C37.7251 65.7471 38.4722 65 39.3872 65H88.6212C89.5362 65 90.2833 65.7471 90.2833 66.6621C90.2833 67.5771 89.5362 68.3242 88.6212 68.3242Z" fill="#7D5BCA"/>
<path d="M65.1145 89H38.8855C38.398 89 38 88.3258 38 87.5C38 86.6742 38.398 86 38.8855 86H65.1145C65.602 86 66 86.6742 66 87.5C66 88.3258 65.602 89 65.1145 89Z" fill="#7D5BCA"/>
<path d="M65.1145 79H38.8855C38.398 79 38 78.3258 38 77.5C38 76.6742 38.398 76 38.8855 76H65.1145C65.602 76 66 76.6742 66 77.5C66 78.3258 65.602 79 65.1145 79Z" fill="#7D5BCA"/>
<path d="M63.8909 47.48H39.3872C38.4722 47.48 37.7251 46.7329 37.7251 45.8179C37.7251 44.9029 38.4722 44.1558 39.3872 44.1558H63.8993C64.8143 44.1558 65.5614 44.9029 65.5614 45.8179C65.553 46.7413 64.8143 47.48 63.8909 47.48Z" fill="#7D5BCA"/>
<path d="M63.8909 37.0957H39.3872C38.4722 37.0957 37.7251 36.3486 37.7251 35.4336C37.7251 34.5186 38.4722 33.7715 39.3872 33.7715H63.8993C64.8143 33.7715 65.5614 34.5186 65.5614 35.4336C65.553 36.3486 64.8143 37.0957 63.8909 37.0957Z" fill="#7D5BCA"/>
<rect x="73" y="75" width="17" height="15" rx="3" fill="#7D5BCA"/>
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
    this.props.forEach(key => this[key as keyof typeof General] = this.getAttribute(key));
  }
}
export default General