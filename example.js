document.getElementById("search-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const nameOrId = document.getElementById("pokemon-name").value.trim().toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    const data = await response.json();

    if (response.ok) {
        document.getElementById("pokemon-info").innerHTML = `
            <h3>${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Type: ${data.types.map(type => type.type.name).join(", ")}</p>
            <p>Abilities: ${data.abilities.map(ability => ability.ability.name).join(", ")}</p>
        `;
    } else {
        document.getElementById("pokemon-info").innerHTML = `<p>Pokémon not found!</p>`;
    }
});