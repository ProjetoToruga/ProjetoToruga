import { getData, postData, patchData, deleteData, putData } from "./helpers";
import { API_URL } from "./config"

export const state = {
    torugas: [],
    toruga: {},
};

export const getAllTorugas = async function () {
    try {
        const { data } = await getData(API_URL);

        state.torugas = data.torugas;
    } catch (err) {
        throw err;
    };
};

export const registerToruga = async function (nickname) {
    try {
        const { message } = await postData(API_URL, { nickname });

        return message;
    } catch (err) {
        throw err;
    };
};

export const updateNickname = async function (id, newNickname) {
    try {
        const { message } = await patchData(`${API_URL}${id}`, { newNickname });

        return message;
    } catch (err) {
        throw err;
    };
};

export const deleteToruga = async function (id) {
    try {
        const { message } = await deleteData(`${API_URL}${id}`);

        return message;
    } catch (err) {
        throw err;
    };
};

export const getToruga = async function (id) {
    try {
        const { data } = await getData(`${API_URL}${id}`);

        state.toruga = data.toruga;
    } catch (err) {
        throw err;
    };
};

export const updateAnalysis = async function (id, data) {
    try {
        console.log(data);

        const { message } = await putData(`${API_URL}${id}`, data);

        return message;
    } catch (err) {
        throw err;
    };
};
