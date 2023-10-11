import {getRecipeCard} from "./getRecipeCard.js";
import { getCuisineCard } from "./getCuisine.js";


// let searchValue = "";
// let filteredArrOfCusines = [];

const CardParentContainer = document.querySelector(".main");
const CuisineParentContainer = document.querySelector(".cusine-filter");
const searchBox = document.querySelector(".input")

const createElement = (element)=> document.createElement(element); 

const RECIPEURL = "https://recipeapi.prakashsakari.repl.co/api/recipes";
const CUISINEURL ="https://recipeapi.prakashsakari.repl.co/api/recipes/cuisines";

const getData = async (URL) =>{
    try{
        const {data} = await axios.get(URL);
        return data;
    }
    catch(err){
        console.log(err);
    }
};

const recipes = await getData(RECIPEURL);
const cuisines = await getData(CUISINEURL);

// searchBox.addEventListener("keyup",searchInputHandler);

getRecipeCard(recipes,CardParentContainer,createElement);
getCuisineCard(cuisines,CuisineParentContainer,createElement);



