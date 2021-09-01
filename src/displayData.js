import { allScores } from './handleData';

const tableScores = document.getElementById('table-scores');

const displayData = () => {
  tableScores.innerHTML = '';
  allScores.forEach((data) => {
    tableScores.innerHTML += `<tr>
                                    <td>${data.Name}: ${data.Score}</td>
                                  </tr>`;
  });
};

export { displayData };