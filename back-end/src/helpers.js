const weightPH = 0.3;
const weightTurbidity = 0.4;
const weightChlorine = 0.3;

const qualityPH = function (ph) {
    if (ph < 6.5 || ph > 8.5) return 0;
    return (ph - 6.5) / (8.5 - 6.5) * 100;
};

const qualityTurbidity = function (turbidity) {
    if (turbidity < 0.1) return 0;
    if (turbidity > 4000) return 0;
    return (4000 - turbidity) / (4000 - 0.1) * 100;
};

const qualityChlorine = function (chlorine) {
    if (chlorine < 0.1) return 0;
    if (chlorine > 8.0) return 0;
    return (8.0 - chlorine) / (8.0 - 0.1) * 100;
};

const calculateIQA = function (ph, turbidity, chlorine) {
    const qiPH = qualityPH(ph);
    const qiTurbidity = qualityTurbidity(turbidity);
    const qiChlorine = qualityChlorine(chlorine);

    const iqa = Math.pow(
        Math.pow(qiPH, weightPH) *
        Math.pow(qiTurbidity, weightTurbidity) *
        Math.pow(qiChlorine, weightChlorine),
        1 / (weightPH + weightTurbidity + weightChlorine)
    );

    return iqa;
};

module.exports = { calculateIQA };