import View from "./View"

class AllTorugasView extends View {
    _parentElement = document.querySelector(".torugas");

    addHandlersClick(handleUpdateNickname, handleDeleteToruga, handleSelectToruga) {
        this._parentElement.addEventListener("click", async function (e) {
            const clickedButton = e.target.closest("button");

            if (!clickedButton) return;

            const idToruga = clickedButton.closest(".toruga").dataset.id;
            const nickname = e.target.closest(".toruga").querySelector(".nickname").textContent;

            clickedButton.disabled = true;

            if (clickedButton.classList.contains("delete-toruga")) {
                window.confirm(`Você realmente quer excluir a Toruga "${nickname}"?`) && await handleDeleteToruga(idToruga);
            } else if (clickedButton.classList.contains("edit-nickname")) {
                await handleUpdateNickname(idToruga, nickname);
            } else if (clickedButton.classList.contains("see-more")) {
                await handleSelectToruga(idToruga);
                this.goToPage(1);
            };

            clickedButton.disabled = false;
        }.bind(this));
    };

    _generateMarkup() {
        if (this._data.length) return this._data.map(this._generateMarkupToruga).join("");

        return `<div class="no-content">Ainda não tem nada aqui. Comece adicionando uma nova Toruga no botão "+" na parte superior do aplicativo!</div>`;
    };

    _generateMarkupToruga(toruga) {
        const { id, nickname } = toruga;

        return `
            <li class="toruga" data-id="${id}">
                <div class="cover">
                    <div class="toruga__info">
                        <p class="nickname" contenteditable="true" title="${nickname}">${nickname}</p>

                        <button class="edit-nickname" title="Alterar nome">
                            <i data-lucide="pencil-line"></i>
                        </button>

                        <button class="delete-toruga" title="Excluir Toruga">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>

                <button class="see-more">Mais detalhes</button>
            </li>
        `;
    };
};

export default new AllTorugasView();
