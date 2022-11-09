function createGame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
  `
}

let delay = -0.1;
function createCard(date, day, games) {
  delay = delay + 0.1;
  return `
  <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguai", "10:00", "south_korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("south_korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("south_korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguai") +
      createGame("cameroon", "16:00", "brazil") +
      createGame("serbia", "16:00", "switzerland")
  )