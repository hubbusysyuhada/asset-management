class InvitationScheduleActive extends HTMLElement {
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
<path d="M14 101.679C14 103.529 15.4975 105.026 17.3473 105.026H102C103.85 105.026 105.347 103.529 105.347 101.679V49.5308H14V101.679Z" fill="#7D5BCA"/>
<path d="M14 49.5305L59.7176 15L105.435 49.5305H14Z" fill="#7D5BCA"/>
<path d="M105.347 49.5308H14L46.5045 74.0192H72.9308L105.347 49.5308Z" fill="#3D00C3"/>
<path d="M17.3473 105.114H102C103.85 105.114 105.347 103.617 105.347 101.767L72.8427 74.019H46.4164L14 101.679C14 103.617 15.4975 105.114 17.3473 105.114Z" fill="#3D00C3"/>
<path d="M23.074 24.6016V56.4013L46.5054 74.0189H72.9317L96.275 56.4013V24.6016H23.074Z" fill="#FFC401"/>
<path d="M57.6922 36.6694H31.7063V39.224H57.6922V36.6694Z" fill="#F9F5FE"/>
<path d="M69.8484 46.271H31.7063V48.8255H69.8484V46.271Z" fill="#F9F5FE"/>
<path d="M87.6421 55.8726H31.7063V58.4271H87.6421V55.8726Z" fill="#F9F5FE"/>
<path d="M84.2954 65.4741H35.1423L38.4897 68.0287H80.86L84.2954 65.4741Z" fill="#F9F5FE"/>
<circle cx="94.1733" cy="92.4308" r="19.8264" fill="#FFC401"/>
<path d="M88.5895 91.1701C88.5895 90.5734 89.0732 90.0896 89.67 90.0896C90.2668 90.0896 90.7505 90.5734 90.7505 91.1701C90.7505 91.7669 90.2668 92.2507 89.67 92.2507C89.0732 92.2507 88.5895 91.7669 88.5895 91.1701Z" fill="#3D00C3"/>
<path d="M88.5895 96.5728C88.5895 95.9761 89.0732 95.4923 89.67 95.4923C90.2668 95.4923 90.7505 95.9761 90.7505 96.5728C90.7505 97.1696 90.2668 97.6534 89.67 97.6534C89.0732 97.6534 88.5895 97.1696 88.5895 96.5728Z" fill="#3D00C3"/>
<path d="M92.9116 91.1701C92.9116 90.5734 93.3954 90.0896 93.9921 90.0896C94.5889 90.0896 95.0727 90.5734 95.0727 91.1701C95.0727 91.7669 94.5889 92.2507 93.9921 92.2507C93.3954 92.2507 92.9116 91.7669 92.9116 91.1701Z" fill="#3D00C3"/>
<path d="M92.9116 96.5728C92.9116 95.9761 93.3954 95.4923 93.9921 95.4923C94.5889 95.4923 95.0727 95.9761 95.0727 96.5728C95.0727 97.1696 94.5889 97.6534 93.9921 97.6534C93.3954 97.6534 92.9116 97.1696 92.9116 96.5728Z" fill="#3D00C3"/>
<path d="M97.2337 91.1701C97.2337 90.5734 97.7175 90.0896 98.3143 90.0896C98.911 90.0896 99.3948 90.5734 99.3948 91.1701C99.3948 91.7669 98.911 92.2507 98.3143 92.2507C97.7175 92.2507 97.2337 91.7669 97.2337 91.1701Z" fill="#3D00C3"/>
<path d="M97.2337 96.5728C97.2337 95.9761 97.7175 95.4923 98.3143 95.4923C98.911 95.4923 99.3948 95.9761 99.3948 96.5728C99.3948 97.1696 98.911 97.6534 98.3143 97.6534C97.7175 97.6534 97.2337 97.1696 97.2337 96.5728Z" fill="#3D00C3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M89.67 81.4453C90.2668 81.4453 90.7505 81.9291 90.7505 82.5258V83.6064H97.2337V82.5258C97.2337 81.9291 97.7175 81.4453 98.3143 81.4453C98.911 81.4453 99.3948 81.9291 99.3948 82.5258V83.6064C102.379 83.6064 104.797 86.0252 104.797 89.0091V97.6534C104.797 100.637 102.379 103.056 99.3948 103.056H88.5895C85.6056 103.056 83.1868 100.637 83.1868 97.6534V89.0091C83.1868 86.0252 85.6056 83.6064 88.5895 83.6064V82.5258C88.5895 81.9291 89.0732 81.4453 89.67 81.4453ZM88.5895 85.7675C86.7992 85.7675 85.3478 87.2188 85.3478 89.0091V97.6534C85.3478 99.4437 86.7992 100.895 88.5895 100.895H99.3948C101.185 100.895 102.636 99.4437 102.636 97.6534V89.0091C102.636 87.2188 101.185 85.7675 99.3948 85.7675C99.3948 86.3642 98.911 86.848 98.3143 86.848C97.7175 86.848 97.2337 86.3642 97.2337 85.7675H90.7505C90.7505 86.3642 90.2668 86.848 89.67 86.848C89.0732 86.848 88.5895 86.3642 88.5895 85.7675Z" fill="#3D00C3"/>
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
    this.props.forEach(key => this[key as keyof typeof InvitationScheduleActive] = this.getAttribute(key));
  }
}
export default InvitationScheduleActive