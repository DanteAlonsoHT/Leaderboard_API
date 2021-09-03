const urlGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/drTzlikoJDante/scores/';

const postByAPI = async () => {
  const nameInput = document.getElementById('floatingInput');
  const scoreInput = document.getElementById('floatingScore');

  const data = await fetch(urlGame, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(
      {
        user: `${nameInput.value}`,
        score: `${scoreInput.value}`,
      },
    ),
  });
  const res = await data.json();
  return res;
};

const getByAPI = async (url) => {
  const response = await fetch(url);

  const result = await response.json();

  return result;
};

export { postByAPI, getByAPI };