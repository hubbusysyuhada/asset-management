class EditAdministratorDefault extends HTMLElement {
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
<path d="M91.93 49.5799H85.77V34.9199H91.93C93.12 34.9199 94.08 35.8799 94.08 37.0699V47.4399C94.08 48.6199 93.12 49.5799 91.93 49.5799Z" fill="#D1D1D2"/>
<path d="M36.2101 34.9199H42.3701V49.5899H36.2101C35.0201 49.5899 34.0601 48.6299 34.0601 47.4399V37.0699C34.0601 35.8799 35.0201 34.9199 36.2101 34.9199Z" fill="#D1D1D2"/>
<path d="M64.82 64.0302C41.27 63.6202 22 83.2902 22 106.84V109.51C22 112.27 24.24 114.51 27 114.51H101.14C103.9 114.51 106.14 112.27 106.14 109.51V106.1C106.14 83.1502 87.68 64.4302 64.82 64.0302ZM50.41 104.02L52.36 96.7402L57.69 102.07L50.41 104.02ZM58.76 100.99L53.43 95.6602L69.32 79.7702L74.65 85.1002L58.76 100.99ZM77.11 82.6502L75.73 84.0302L70.4 78.7002L71.78 77.3202C72.62 76.4802 73.97 76.4802 74.81 77.3202L77.11 79.6202C77.94 80.4602 77.94 81.8102 77.11 82.6502Z" fill="#989899"/>
<path d="M64.07 60.5502C75.5575 60.5502 84.87 51.2377 84.87 39.7502C84.87 28.2627 75.5575 18.9502 64.07 18.9502C52.5825 18.9502 43.27 28.2627 43.27 39.7502C43.27 51.2377 52.5825 60.5502 64.07 60.5502Z" fill="#E8E8E8"/>
<path d="M90.8201 39.75H87.8201C87.8201 26.65 77.1701 16 64.0701 16C50.9701 16 40.3201 26.65 40.3201 39.75H37.3201C37.3201 25 49.3201 13 64.0701 13C78.8201 13 90.8201 25 90.8201 39.75Z" fill="#D1D1D2"/>
<path d="M81.8799 58.8198L81.1499 58.1398C85.3899 53.5598 87.7199 47.5898 87.7199 41.3398H88.7199C88.7199 47.8398 86.2899 54.0498 81.8799 58.8198Z" fill="#D1D1D2"/>
<path d="M83.64 60.4497C82.55 61.6197 80.72 61.6997 79.55 60.6097C78.38 59.5197 78.3 57.6897 79.39 56.5197C80.48 55.3497 82.31 55.2697 83.48 56.3597C84.66 57.4397 84.73 59.2697 83.64 60.4497Z" fill="#D1D1D2"/>
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
    this.props.forEach(key => this[key as keyof typeof EditAdministratorDefault] = this.getAttribute(key));
  }
}
export default EditAdministratorDefault