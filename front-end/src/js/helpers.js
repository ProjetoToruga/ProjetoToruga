import { REQUEST_TIMEOUT_SECONDS } from "./config";

import { createIcons, CirclePlus, PencilLine, Trash2, Check, CircleArrowLeft } from "lucide";
import { colorRange } from "@heyeso/color-range";

export const createAllIcons = function () {
    createIcons({
        icons: {
            CirclePlus,
            PencilLine,
            Trash2,
            Check,
            CircleArrowLeft
        },
    });
};

export const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
});

export const phColors = {
    0: "#f12c2c",
    1: "#bf0067",
    2: "#ff7527",
    3: "#ffa827",
    4: "#ffb991",
    5: "#dbff00",
    6: "#fff500",
    7: "#b3ff77",
    8: "#39ad36",
    9: "#76b5d9",
    10: "#32b5ff",
    11: "#89d5ff",
    12: "#9969ff",
    13: "#702dff",
    14: "#4600dc",
};

const turbidityColors = [
    [0, 0, 0],
    [205, 145, 73],
];
const turbidityColorsRange = [0, 100];
export const turbidityColor = colorRange(turbidityColors, turbidityColorsRange);

export const chlorineColors = {
    0.1: "#dde1d0",
    0.25: "#e3e6a3",
    0.5: "#e5e369",
    1: "#e8de03",
    2: "#d7b900",
    4: "#e8cd01",
    6: "#da8103",
    8: "#d43704",
};

export const generatePh = function () {
    return Math.floor(Math.random() * 14);
};

export const generateTurbidity = function () {
    return Math.random() * 4000;
};

export const generateChlorine = function () {
    const levels = [.1, .25, .5, 1, 2, 4, 6, 8];

    return levels[Math.floor(Math.random() * levels.length)];
};

export const generateWaterVolume = function () {
    return Math.random() * 500;
};

const timeout = function (time) {
    return new Promise((_, reject) => setTimeout(reject, time * 1000));
};

export const getData = async function (url) {
    try {
        const response = await Promise.race([fetch(url, {
            method: "GET",
        }), timeout(REQUEST_TIMEOUT_SECONDS)]);
        const json = await response.json();

        if (!response.ok) {
            const { message } = json;
            throw new Error(message);
        };

        return json;
    } catch (err) {
        throw err;
    };
};

export const postData = async function (url, data) {
    try {
        const stringifiedData = JSON.stringify(data);

        const response = await Promise.race([fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: stringifiedData,
        }), timeout(REQUEST_TIMEOUT_SECONDS)]);
        const json = await response.json();

        if (!response.ok) {
            const { message } = json;
            throw new Error(message);
        };

        return json;
    } catch (err) {
        throw err;
    };
};

export const patchData = async function (url, data) {
    try {
        const stringifiedData = JSON.stringify(data);

        const response = await Promise.race([fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: stringifiedData,
        }), timeout(REQUEST_TIMEOUT_SECONDS)]);
        const json = await response.json();

        if (!response.ok) {
            const { message } = json;
            throw new Error(message);
        };

        return json;
    } catch (err) {
        throw err;
    };
};

export const deleteData = async function (url) {
    try {
        const response = await Promise.race([fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }), timeout(REQUEST_TIMEOUT_SECONDS)]);
        const json = await response.json();

        if (!response.ok) {
            const { message } = json;
            throw new Error(message);
        };

        return json;
    } catch (err) {
        throw err;
    };
};

export const putData = async function (url, data) {
    try {
        const stringifiedData = JSON.stringify(data);

        const response = await Promise.race([fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: stringifiedData,
        }), timeout(REQUEST_TIMEOUT_SECONDS)]);
        const json = await response.json();

        if (!response.ok) {
            const { message } = json;
            throw new Error(message);
        };

        return json;
    } catch (err) {
        throw err;
    };
};