import { all_scores } from './handleData';

const tableScores = document.getElementById("table-scores");

const displayData = () => {
    tableScores.innerHTML = "";
    all_scores.forEach((data) => {
        tableScores.innerHTML += `<tr>
                                    <td>${data['Name']}: ${data['Score']}</td>
                                  </tr>`
    });
};

export { displayData };