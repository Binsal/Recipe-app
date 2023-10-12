import {getRecipeCard} from "./getRecipeCard.js";
import { getCuisineCard } from "./getCuisine.js";

const cardParentContainer = document.querySelector(".main");
const cuisineParentContainer = document.querySelector(".cuisine-filter");
const searchBox = document.querySelector(".input");

const RECIPEURL = "https://recipeapi.prakashsakari.repl.co/api/recipes";
const CUISINEURL =
  "https://recipeapi.prakashsakari.repl.co/api/recipes/cuisines";

let searchValue = "";
let filteredArrOfRecipes = [];

const createElement = (element)=> document.createElement(element); 

const getData = async (URL) => {
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  

const recipes = await getData(RECIPEURL);
const cuisines = await getData(CUISINEURL);

const getFilteredData = () => {
    filteredArrOfRecipes =
    searchValue?.length > 0
      ? recipes.filter((recipe) =>
          recipe.TranslatedRecipeName.toLowerCase().includes(searchValue)
        )
      : recipes;

    return filteredArrOfRecipes;
};

const searchInputHandler = (event) => {
    searchValue = event.target.value.toLowerCase();
    const filteredData = getFilteredData();
    cardParentContainer.innerHTML = "";
    getRecipeCard(filteredData, cardParentContainer, createElement);
  };

searchBox.addEventListener("keyup", searchInputHandler);

getRecipeCard(recipes, cardParentContainer, createElement);
getCuisineCard(cuisines, cuisineParentContainer, createElement);



