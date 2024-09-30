import View from "./View";

class RegisterTorugaModalView extends View {
    _formElement = document.querySelector(".add-toruga__modal");
    _inputElement = document.querySelector(".choose-nickname");
    _submitButtonElement = document.querySelector(".register-toruga");

    addHandlerSubmit(func) {
        this._formElement.addEventListener("submit", async function (e) {
            e.preventDefault();

            this._submitButtonElement.disabled = true;
            await func();
            this._submitButtonElement.disabled = false;
        }.bind(this));
    };

    getData() {
        return this._inputElement.value;
    };

    clearInput() {
        this._inputElement.value = "";
    };
};

export default new RegisterTorugaModalView();
