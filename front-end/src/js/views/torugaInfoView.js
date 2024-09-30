import View from "./View";

class TorugaInfoView extends View {
    _parentElement = document.querySelector(".toruga-info");

    addHandlersClick(handleUpdateNickname, handleDeleteToruga) {
        this._parentElement.addEventListener("click", async function (e) {
            const clickedButton = e.target.closest("button");

            if (!clickedButton) return;

            const idToruga = this._data.id;
            const nickname = clickedButton.closest(".toruga-info__info")?.querySelector(".toruga-nickname").textContent;

            clickedButton.disabled = true;

            if (clickedButton.classList.contains("toruga-actions__edit-nickname")) {
                await handleUpdateNickname(idToruga, nickname);
            } else if (clickedButton.classList.contains("toruga-actions__delete-toruga")) {
                window.confirm(`Você realmente quer excluir a Toruga "${nickname}"?`) && await handleDeleteToruga(idToruga);
            } else if (clickedButton.classList.contains("go-back")) {
                this.goToPage(0);
            };

            clickedButton.disabled = false;
        }.bind(this));
    };

    _generateMarkup() {
        const { id, nickname } = this._data;

        return `
            <button class="go-back">
                <i data-lucide="circle-arrow-left"></i>
            </button>

            <hgroup class="toruga-info__info">
                <h1 class="toruga-nickname" contenteditable="true" title="${nickname}">${nickname}</h1>

                <div class="toruga-actions">
                    <button class="toruga-actions__edit-nickname" title="Alterar nome">
                        <i data-lucide="pencil-line"></i>
                    </button>

                    <button class="toruga-actions__delete-toruga" title="Excluir Toruga">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </hgroup>

            <p class="toruga-id">ID da sua Toruga: #${String(id).padStart(4, "0")}</p>
        `;
    };
};

export default new TorugaInfoView();
