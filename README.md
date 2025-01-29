# **Taller Introductorio: Git, GitHub y Consumo de API con HTML, CSS y JS**

## **1. Validar credenciales de Git en local y configuración inicial**

### **Verificación de Git instalado**

Ejecuta el siguiente comando en la terminal para verificar si tienes Git instalado:

```sh
git --version
```

Si no está instalado, descárgalo e instálalo desde: [https://git-scm.com/](https://git-scm.com/)

### **Configuración inicial de Git**

Ejecuta los siguientes comandos para configurar tu nombre de usuario y correo:

```sh
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

Para verificar la configuración:

```sh
git config --list
```

Si usas autenticación con GitHub, genera un Token de Acceso Personal desde [GitHub Tokens](https://github.com/settings/tokens) y guárdalo en tu configuración.

## **2. Crear un repositorio en GitHub**

1. Accede a [GitHub](https://github.com/) y haz login.
2. Haz clic en **New Repository**.
3. Nombra el repositorio, por ejemplo: `pokeapi-front`.
4. Marca la opción **Public** o **Private**.
5. Inicializa con un **README** y selecciona **Create Repository**.
6. Copia la URL del repositorio (SSH o HTTPS).

## **3. Clonar el repositorio en local**

Ejecuta el siguiente comando en la terminal, reemplazando la URL con la de tu repositorio:

```sh
git clone https://github.com/tuusuario/pokeapi-front.git
```

Entra al directorio:

```sh
cd pokeapi-front
```

## **4. Breve explicación de HTML, CSS y JS**

### **HTML (HyperText Markup Language)**

Es el lenguaje de marcado que define la estructura del contenido en una página web.

### **CSS (Cascading Style Sheets)**

Es el lenguaje de estilos que permite diseñar la apariencia visual de la web.

### **JavaScript (JS)**

Es el lenguaje de programación que permite agregar interactividad y consumir APIs.

## **5. Generar HTML, CSS y JS para consumir la API y mostrar los Pokémon en tarjetas**

### **Estructura del proyecto**

```plaintext
pokeapi-front/
├── index.html
├── styles.css
└── script.js
```

### **index.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PokeAPI Front</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Lista de Pokémon</h1>
    <div id="pokemon-container" class="pokemon-container"></div>
    <script src="script.js"></script>
</body>
</html>
```

### **styles.css**

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
}
.pokemon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.pokemon-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.pokemon-card img {
    width: 100px;
}
```

### **script.js**

```js
const container = document.getElementById('pokemon-container');

async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    data.results.forEach(async (pokemon) => {
        const pokemonData = await fetch(pokemon.url);
        const pokemonInfo = await pokemonData.json();
        displayPokemon(pokemonInfo);
    });
}

function displayPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    card.innerHTML = `
        <h3>${pokemon.name}</h3>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `;
    container.appendChild(card);
}

fetchPokemon();
```

## **6. Subir el código al repositorio**

Ejecuta los siguientes comandos:

```sh
git add .
git commit -m "Primer commit - Estructura inicial"
git push origin main
```