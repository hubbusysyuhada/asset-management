class InvitationDetailActive extends HTMLElement {
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
<path d="M14 109.798C14 111.821 15.6378 113.459 17.6609 113.459H110.243C112.266 113.459 113.904 111.821 113.904 109.798V52.7651H14V109.798Z" fill="#7D5BCA"/>
<path d="M14 52.7649L64 15L114 52.7649H14Z" fill="#7D5BCA"/>
<path d="M113.904 52.7651H14L49.5491 79.5474H78.4509L113.904 52.7651Z" fill="#3D00C3"/>
<path d="M17.6609 113.555H110.243C112.266 113.555 113.904 111.917 113.904 109.894L78.3545 79.5474H49.4528L14 109.798C14 111.917 15.6378 113.555 17.6609 113.555Z" fill="#3D00C3"/>
<path d="M23.9236 25.501V60.2794L49.5498 79.5472H78.4515L103.981 60.2794V25.501H23.9236Z" fill="#FFC401"/>
<path d="M61.7843 38.6992H33.3643V41.4931H61.7843V38.6992Z" fill="#F9F5FE"/>
<path d="M75.0791 49.2002H33.3643V51.994H75.0791V49.2002Z" fill="#F9F5FE"/>
<path d="M94.5396 59.7012H33.3643V62.495H94.5396V59.7012Z" fill="#F9F5FE"/>
<path d="M90.8791 70.2021H37.1218L40.7827 72.996H87.1218L90.8791 70.2021Z" fill="#F9F5FE"/>
<path d="M102.151 70.9728L91.0716 62.784C95.3105 55.1732 93.2874 45.3466 86.062 40.048C78.2585 34.2676 67.0832 35.9054 61.3028 43.8052C55.5225 51.6087 57.1603 62.784 65.0601 68.5643C68.1429 70.7801 71.8038 72.0325 75.4647 72.0325C76.3317 72.0325 77.2951 71.9362 78.1622 71.8399C82.0157 71.2618 85.5803 69.4314 88.2778 66.6376L99.3568 74.73C99.7421 75.0191 100.224 75.2117 100.706 75.2117C101.38 75.2117 102.151 74.9227 102.536 74.2483C103.403 73.1886 103.114 71.7435 102.151 70.9728ZM67.8539 64.7108C62.0736 60.4718 60.8211 52.283 65.0601 46.5027C67.0832 43.7088 70.166 41.8784 73.6342 41.3967C74.3086 41.3004 74.983 41.204 75.6574 41.204C78.4512 41.204 81.0524 42.0711 83.3645 43.7088C86.1583 45.732 87.9888 48.8148 88.4705 52.283C88.9522 55.7512 88.1815 59.1231 86.062 61.9169C81.8231 67.7936 73.6342 68.9497 67.8539 64.7108Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof InvitationDetailActive] = this.getAttribute(key));
  }
}
export default InvitationDetailActive