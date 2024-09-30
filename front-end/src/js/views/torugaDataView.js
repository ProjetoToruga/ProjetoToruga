import View from "./View";
import phImage from 'url:../../../public/ph.png';
import turbidityImage from 'url:../../../public/turbidity.png';
import chlorineImage from 'url:../../../public/chlorine.png';

import { dateFormatter, phColors, chlorineColors, turbidityColor } from "../helpers";

class TorugaDataView extends View {
    _parentElement = document.querySelector(".data");

    _generateMarkup() {
        const { ph, chlorine, turbidity, lastAnalysis } = this._data;

        const lastAnalysisDateString = lastAnalysis ? dateFormatter.format(new Date(lastAnalysis)) : "Nenhum dado coletado.";
        const turbidityPercentage = (100 * turbidity) / 4000;

        return `
            <hgroup class="data__info">
                <h2 class="title">Dados Coletados:</h2>
                <p class="last-analysis"><strong>Data da última coleta: </strong>${lastAnalysisDateString}</p>
            </hgroup>

            <ul class="analysis">
                <li class="parameter ph">
                    <h1 class="ph__title">Nível do pH:</h1>

                    <div class="reading">
                        <div class="ball" style="background-color: ${phColors[ph] || "var(--tertiary-background)"};"></div>
                        <p class="description"><strong>Última leitura:</strong> ${ph === null ? "Nenhum dado coletado." : ph}</p>
                    </div>

                    <img src="${phImage}" class="caption">
                </li>

                <li class="parameter turbidity">
                    <h1 class="turbidity__title">Nível de Turbidez:</h1>

                    <div class="reading">
                        <div class="ball" style="background-color: ${turbidityColor.getColor(turbidityPercentage).toHex || "var(--tertiary-background)"};"></div>
                        <p class="description"><strong>Última leitura:</strong> ${turbidity === null ? "Nenhum dado coletado." : turbidity + " u.T"}</p>
                    </div>

                    <img src="${turbidityImage}" class="caption">
                </li>

                <li class="parameter chlorine">
                    <h1 class="chlorine__title">Nível do Cloro:</h1>

                    <div class="reading">
                        <div class="ball" style="background-color: ${chlorineColors[chlorine] || "var(--tertiary-background)"};"></div>
                        <p class="description"><strong>Última leitura:</strong> ${chlorine === null ? "Nenhum dado coletado." : chlorine}</p>
                    </div>

                    <img src="${chlorineImage}" class="caption">
                </li>
            </ul>
        `;
    };
};

export default new TorugaDataView();
