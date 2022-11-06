let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}

function createGame(teamOne, hour, teamTwo) {
    
    return `
    <li>
        <img src="./assets/svgs/${teamOne}.svg" alt="bandeira do(a) ${teamOne}">
        <strong>${hour}</strong>
        <img src="./assets/svgs/${teamTwo}.svg" alt="bandeira do(a) ${teamTwo}">
    </li>
    `
}

document.querySelector("#cards").innerHTML =
        createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia")) +
        createCard("25/11", "sexta", createGame("south korea", "08:00", "ghana") + createGame("brazil", "13:00", "switzerland") + createGame("portugal", "20:00", "uruguay"));