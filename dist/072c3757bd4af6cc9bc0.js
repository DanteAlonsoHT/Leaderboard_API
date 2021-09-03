import './index.css';
import displayData from './displayData';
import { postByAPI, getByAPI } from './handleAPI';
var urlGameAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/drTzlikoJDante/scores/';
var formScores = document.getElementById('form-scores');
var refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', function () {
  getByAPI(urlGameAPI).then(function (response) {
    displayData(response.result);
  });
});
formScores.addEventListener('submit', function (ev) {
  ev.preventDefault();
  postByAPI();
  formScores.reset();
});
getByAPI(urlGameAPI).then(function (res) {
  displayData(res.result);
});