import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model";
import allTorugasView from "./views/allTorugasView";
import toggleRegisterTorugaModal from "./views/toggleRegisterTorugaModal";
import registerTorugaModalView from "./views/registerTorugaModalView";
import torugaInfoView from "./views/torugaInfoView";
import torugaDataView from "./views/torugaDataView";
import updateAnalysisView from "./views/updateAnalysisView";

import { createAllIcons, generateChlorine, generateTurbidity, generatePh, generateWaterVolume } from "./helpers";

const controlAllTorugas = async function () {
    try {
        await model.getAllTorugas();

        allTorugasView.render(model.state.torugas);
    } catch (err) {
        allTorugasView.renderError(err.message);
    };
};

const controlRegisterToruga = async function () {
    try {
        const nickname = registerTorugaModalView.getData();
        if (!nickname.trim()) throw new Error("Você deve escolher um nome para a sua Toruga!");

        const message = await model.registerToruga(nickname.trim());

        //update interface
        await controlAllTorugas();

        allTorugasView.renderMessage(message);
        toggleRegisterTorugaModal.toggleModal();
    } catch (err) {
        allTorugasView.renderError(err.message);
    };
};

const controlUpdateNickname = async function (id, newNickname) {
    try {
        if (!newNickname.trim()) throw new Error("Você não pode deixar o nome da sua Toruga vazio!");

        const message = await model.updateNickname(id, newNickname);

        //update interface
        await controlAllTorugas();

        allTorugasView.renderMessage(message);
        torugaInfoView.renderMessage(message);
    } catch (err) {
        allTorugasView.renderError(err.message);
        torugaInfoView.renderError(err.message);
    };
};

const controlDeleteToruga = async function (id) {
    try {
        const message = await model.deleteToruga(id);

        //update interface
        await controlAllTorugas();

        allTorugasView.goToPage(0);

        allTorugasView.renderMessage(message);
        torugaInfoView.renderMessage(message);
    } catch (err) {
        allTorugasView.renderError(err.message);
        torugaInfoView.renderError(err.message);
    };
};

const controlToruga = async function (id) {
    try {
        await model.getToruga(id);

        torugaInfoView.render(model.state.toruga);
        torugaDataView.render(model.state.toruga);
    } catch (err) {
        allTorugasView.renderError(err.message);
    };
};

const controlUpdateAnalysis = async function () {
    try {
        const data = {
            ph: generatePh(),
            turbidity: generateTurbidity(),
            chlorine: generateChlorine(),
            waterVolume: generateWaterVolume(),
        };

        const message = await model.updateAnalysis(model.state.toruga.id, data);

        //update interface
        await controlToruga(model.state.toruga.id);

        torugaDataView.renderMessage(message);
    } catch (err) {
        torugaDataView.renderError(err.message);
    };
};

const init = function () {
    createAllIcons();
    controlAllTorugas();

    registerTorugaModalView.addHandlerSubmit(controlRegisterToruga);
    allTorugasView.addHandlersClick(controlUpdateNickname, controlDeleteToruga, controlToruga);
    torugaInfoView.addHandlersClick(controlUpdateNickname, controlDeleteToruga);
    updateAnalysisView.addHandlerClick(controlUpdateAnalysis);
};

init();
