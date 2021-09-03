import './index.css';
import displayData from './displayData';
import { postByAPI, getByAPI } from './handleAPI';

const urlGameAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/drTzlikoJDante/scores/';
const formScores = document.getElementById('form-scores');
const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', () => {
  getByAPI(urlGameAPI)
    .then((response) => {
      displayData(response.result);
    });
});

formScores.addEventListener('submit', (ev) => {
  ev.preventDefault();
  postByAPI();
  formScores.reset();
});

getByAPI(urlGameAPI)
  .then((res) => {
    displayData(res.result);
  });