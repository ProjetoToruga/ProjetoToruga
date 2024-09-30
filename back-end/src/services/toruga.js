const express = require("express");
const router = express.Router();
const sqlConnection = require("../sqlConnection");

const { calculateIQA } = require("../helpers");

//register toruga
router.post("/", (req, res) => {
    const { nickname } = req.body;

    sqlConnection.query(`call registerToruga('${nickname}')`, (err, results) => {
        if (err) res.status(400).send("Não foi possível adicionar uma nova Toruga, tente novamente mais tarde!");

        const id = results.at(0).at(0).id

        res.status(201).send({
            data: {
                id,
            },
            message: "Nova Toruga registrada com sucesso!"
        });
    });
});

//update analysis
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { ph, chlorine, turbidity, waterVolume } = req.body;

    const iqa = calculateIQA(ph, turbidity, chlorine);

    sqlConnection.query(`call updateAnalysis(${id}, ${ph}, ${chlorine}, ${turbidity}, ${waterVolume}, ${iqa})`, (err) => {
        if (err) res.status(400).send("Não foi possível alterar os dados dessa toruga, tente novamente mais tarde.");

        res.status(200).send({
            data: {},
            message: "Novos dados coletados e processados com sucesso!"
        });
    });
});

//update toruga nickname
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { newNickname } = req.body;

    sqlConnection.query(`call updateNickname(${id}, '${newNickname}')`, (err) => {
        if (err) res.status(400).send("Não foi possível alterar o nome dessa Toruga. Tente novamente mais tarde");

        res.status(200).send({
            data: {},
            message: "Nome alterado com sucesso!",
        });
    });
});

//delete toruga
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    sqlConnection.query(`call deleteToruga(${id})`, (err) => {
        if (err) res.status(400).send("Não foi possível excluir essa Toruga. Tente novamente mais tarde.");

        res.status(200).send({
            data: {},
            message: "Toruga deletada com sucesso!",
        });
    });
});

//get all torugas
router.get("/", (_, res) => {
    sqlConnection.query("call getAllTorugas()", (err, results) => {
        if (err) res.status(400).send("Não foi possível carregar suas Torugas. Tente novamente mais tarde.");

        const torugas = results.at(0);

        res.status(200).send({
            data: {
                torugas,
            },
            message: "",
        });
    });
});

//get toruga
router.get("/:id", (req, res) => {
    const { id } = req.params;

    sqlConnection.query(`call getToruga(${id})`, (err, results) => {
        if (err) res.status(400).send("Não foi possível encontrar essa Toruga no sistema. Tente novamente mais tarde.");

        const toruga = results.at(0).at(0);

        res.status(200).send({
            data: {
                toruga,
            },
            message: "",
        });
    });
});

module.exports = router;