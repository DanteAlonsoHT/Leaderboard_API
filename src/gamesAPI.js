const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/drTzlikoJDante/scores';

const createGame = () => {
  fetch(urlAPI, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Lol! I am a game',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default createGame;