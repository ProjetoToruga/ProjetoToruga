class UpdateAnalysisView {
    _btnUpdateAnalysisElement = document.querySelector(".update-analysis");

    addHandlerClick(func) {
        this._btnUpdateAnalysisElement.addEventListener("click", async function () {
            this._btnUpdateAnalysisElement.disabled = true;

            await func();

            this._btnUpdateAnalysisElement.disabled = false;
        }.bind(this));
    };
};

export default new UpdateAnalysisView();
