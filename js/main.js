import { getCine, getCines, getPelicula, getPeliculas } from "./consultas.js";
import { renderCines, renderPeliculas, renderPelicula, renderCine } from "./render.js";

var contenido = document.getElementById("contenido-interno");
var aCines = document.getElementById("RenderCines");
var aIndex = document.querySelectorAll("#index");
var aPeliculas = document.getElementById("RenderPeliculas");
aIndex.forEach((element) => {
    
    element.addEventListener("click", () => {
        contenido.innerHTML = "";
    });
});

aPeliculas.addEventListener("click", async () => {

    const peliculas = await getPeliculas();
    const html =  renderPeliculas(peliculas);
    contenido.innerHTML = html;

});

contenido.addEventListener("click", async (e) => {

    const btn = e.target.closest(".btn-ver-pelicula");
    if (!btn) return;
    e.preventDefault();

    const id = btn.getAttribute("data-id");


    const pelicula = await getPelicula(id);
    const html = renderPelicula(pelicula);

    contenido.innerHTML = html;
});


aCines.addEventListener("click", async () => {
    
    const response = await fetch("https://mi-api-azurecinestar-gdf7g9dadmfzcyaq.mexicocentral-01.azurewebsites.net/api/getCines")
    const cines = await response.json();
    const html =  renderCines(cines);
    contenido.innerHTML = html;
});

contenido.addEventListener("click", async (e) => {

    const btn = e.target.closest(".btn-ver-cine");
    if (!btn) return;
    e.preventDefault();

    const id = btn.getAttribute("data-id");
    const cine = await getCine(id);
    const html = renderCine(cine);
    contenido.innerHTML = html;

});