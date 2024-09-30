import { createAllIcons } from "../helpers";
import { TOAST_DISMISS_DELAY } from "../config";

import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";

export default class View {
    _data;

    render(data) {
        this._data = data;

        const markup = this._generateMarkup();

        this._clearParent();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
        createAllIcons();
    };

    renderError(message) {
        Toastify({
            text: message,
            duration: TOAST_DISMISS_DELAY,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "none",
                backgroundColor: "#DC2626",
                color: "white",
                boxShadow: "none",
                fontFamily: '"Poppins", sans-serif',
                fontSize: "1rem",
                borderRadius: "5px",
            },
            selector: this._parentElement.closest(".app-page"),
        }).showToast();
    };

    renderMessage(message) {
        Toastify({
            text: message,
            duration: TOAST_DISMISS_DELAY,
            gravity: "bottom",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "none",
                backgroundColor: "var(--secondary-background)",
                color: "var(--tertiary-background)",
                boxShadow: "none",
                fontFamily: '"Poppins", sans-serif',
                fontSize: "1rem",
                borderRadius: "5px",
            },
            selector: this._parentElement.closest(".app-page"),
        }).showToast();
    };

    goToPage(page) {
        document.documentElement.style.setProperty("--current-page", page);
    };

    _clearParent() {
        this._parentElement.innerHTML = "";
    };
};
