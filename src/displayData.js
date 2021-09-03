const tableScores = document.getElementById('table-scores');

const displayData = (players) => {
  tableScores.innerHTML = '';
  players.forEach((player, index) => {
    tableScores.innerHTML += `<tr>
                                    <td id="player-${index}">${player.user}: ${player.score}</td>
                                  </tr>`;
  });
};

export default displayData;