<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon Explorer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Pokémon Explorer</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="search.html">Search Pokémon</a></li>
            </ul>
        </div>
    </nav>
    <div class="container mt-5 text-center">
        <h1>Welcome to Pokémon Explorer!</h1>
        <p>Explore the world of Pokémon. Search, discover, and learn about your favorite Pokémon.</p>
        <a href="search.html" class="btn btn-primary btn-lg">Search Pokémon</a>
    </div>
</body>
</html>

<div class="container mt-5">
    <h2>Search for a Pokémon</h2>
    <form id="search-form" class="input-group mb-3">
        <input type="text" id="pokemon-name" class="form-control" placeholder="Enter Pokémon name or ID">
        <button class="btn btn-primary" type="submit">Search</button>
    </form>
    <div id="pokemon-info" class="mt-4"></div>
</div>

<div class="container mt-5">
    <h2>Search for a Pokémon</h2>
    <form id="search-form" class="input-group mb-3">
        <input type="text" id="pokemon-name" class="form-control" placeholder="Enter Pokémon name or ID">
        <button class="btn btn-primary" type="submit">Search</button>
    </form>
    <div id="pokemon-info" class="mt-4"></div>
</div>
