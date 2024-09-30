class ToggleRegisterTorugaModal {
    _modalElement = document.querySelector(".add-toruga__modal");
    _modalOverlayElement = document.querySelector(".add-toruga__modal--overlay");
    _btnOpenModal = document.querySelector(".add-toruga");

    constructor() {
        [this._btnOpenModal, this._modalOverlayElement].forEach(element => element.addEventListener("click", this.toggleModal.bind(this)));
    };

    toggleModal() {
        this._modalElement.classList.toggle("hidden");
        this._modalOverlayElement.classList.toggle("hidden");
    };
};

export default new ToggleRegisterTorugaModal();
