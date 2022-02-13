  const games = document.querySelector('.games');

const Rawg_API = `https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&ordering=-rating&key=07d8164699e544d697fb867d719fa22d`;
(async function getApi() {
  try {
    const response = await fetch(Rawg_API);
    const rawgData = await response.json();
    const gameResults = rawgData.results;
    games.innerHTML = ``;
    games.classList.add('game-list');
    for (let i = 0; i < gameResults.length; i++) {
      if (i === 8) {
        break;
      }
      console.log(gameResults[i].name);
      games.innerHTML += `
      <div class="game-container"  style="background-image: url('${gameResults[i].background_image}');">
      <div class="game-name"> ${gameResults[i].name}</div>
      <div class="game-rating">${gameResults[i].rating}</div>
      <div class ="game-tags-number">Tags (${gameResults[i].tags.length})</div>
      </div>
      `;
    }
  } catch (error) {
    games.innerHTML = `<div class="error">Oh no something wrong happend! ${error}</div>}`;
  }
})();