class InvoicesActive extends HTMLElement {
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
<path d="M103.177 32.5405H24.8791C22.9028 32.5405 21.3333 31.027 21.3333 29.2432V19.2973C21.3333 17.4595 22.9028 16 24.8791 16H103.119C105.096 16 106.665 17.4595 106.665 19.2973V29.2432C106.723 31.027 105.096 32.5405 103.177 32.5405Z" fill="#3D00C3"/>
<path d="M93.7024 24.2695H34.3537C32.8424 24.2695 31.6217 25.4047 31.6217 26.8101V105.891C31.6217 106.648 31.9705 107.405 32.668 107.891L37.4345 111.405C38.3645 112.107 39.7015 112.161 40.6897 111.513L45.9212 108.107C46.8512 107.513 48.13 107.513 49.0601 108.107L54.1753 111.513C55.1054 112.161 56.3842 112.161 57.3724 111.513L62.4295 108.161C63.3596 107.513 64.6384 107.513 65.6266 108.161L70.6837 111.513C71.6137 112.161 72.8925 112.161 73.8807 111.513L78.996 108.107C79.926 107.459 81.2048 107.459 82.1349 108.107L87.3664 111.513C88.3546 112.161 89.6915 112.107 90.6216 111.405L95.3881 107.891C96.0275 107.405 96.4344 106.702 96.4344 105.891V26.8101C96.4344 25.4047 95.2137 24.2695 93.7024 24.2695Z" fill="#DBC8F9"/>
<path d="M73.1383 102.989C82.2559 102.989 89.6472 96.1155 89.6472 87.637C89.6472 79.1584 82.2559 72.2852 73.1383 72.2852C64.0208 72.2852 56.6295 79.1584 56.6295 87.637C56.6295 96.1155 64.0208 102.989 73.1383 102.989Z" fill="#FFC401"/>
<path d="M70.787 91.7452L68.5811 88.7675H68.4388H66.0905V91.7452H63.4576V81.0254H68.4388C69.435 81.0254 70.36 81.1577 71.0716 81.4886C71.7832 81.8194 72.4236 82.2826 72.7794 82.812C73.1352 83.3414 73.4199 84.0693 73.4199 84.8633C73.4199 85.6574 73.2064 86.3191 72.7794 86.9147C72.3525 87.5102 71.7832 87.9072 71.0005 88.2381L73.5622 91.679H70.787V91.7452ZM70.1466 83.5399C69.7196 83.2091 69.1503 83.0767 68.2964 83.0767H66.1617V86.7823H68.2964C69.0792 86.7823 69.7196 86.65 70.1466 86.3191C70.5735 85.9883 70.787 85.5251 70.787 84.9295C70.7158 84.334 70.5024 83.8708 70.1466 83.5399Z" fill="#3D00C3"/>
<path d="M82.8134 83.9376C83.4538 84.2684 84.0231 84.7978 84.3789 85.3934C84.7347 86.0551 84.9482 86.783 84.9482 87.6432C84.9482 88.5034 84.7347 89.2313 84.3789 89.893C84.0231 90.5547 83.4538 91.0179 82.8134 91.3488C82.173 91.6797 81.3902 91.8782 80.5363 91.8782C79.3978 91.8782 78.5439 91.5473 77.9035 90.8856V94.7235H75.3417V83.5405H77.7611V84.4669C78.4016 83.7391 79.3266 83.4082 80.5363 83.4082C81.3902 83.4082 82.173 83.6067 82.8134 83.9376ZM81.746 89.2975C82.173 88.9004 82.3865 88.3049 82.3865 87.6432C82.3865 86.9815 82.173 86.3859 81.746 85.9889C81.3191 85.5919 80.821 85.3934 80.1094 85.3934C79.4689 85.3934 78.8997 85.5919 78.4727 85.9889C78.0458 86.3859 77.8323 86.9815 77.8323 87.6432C77.8323 88.3049 78.0458 88.9004 78.4727 89.2975C78.8997 89.6945 79.4689 89.893 80.1094 89.893C80.821 89.893 81.3191 89.6945 81.746 89.2975Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.5416 39.7979C39.5416 38.8087 40.3774 38.0068 41.4083 38.0068H80.3416C81.3726 38.0068 82.2083 38.8087 82.2083 39.7979C82.2083 40.787 81.3726 41.5889 80.3416 41.5889H41.4083C40.3774 41.5889 39.5416 40.787 39.5416 39.7979Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.5416 50.0313C39.5416 49.0421 40.3774 48.2402 41.4083 48.2402L80.3416 48.2402C81.3726 48.2402 82.2083 49.0421 82.2083 50.0313C82.2083 51.0204 81.3726 51.8223 80.3416 51.8223L41.4083 51.8223C40.3774 51.8223 39.5416 51.0204 39.5416 50.0313Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.5416 60.2647C39.5416 59.2755 40.3774 58.4736 41.4083 58.4736L69.675 58.4736C70.7059 58.4736 71.5416 59.2755 71.5416 60.2647C71.5416 61.2538 70.7059 62.0557 69.675 62.0557L41.4083 62.0557C40.3774 62.0557 39.5416 61.2538 39.5416 60.2647Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof InvoicesActive] = this.getAttribute(key));
  }
}
export default InvoicesActive