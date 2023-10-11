import {getRecipeCard} from "./getRecipeCard.js";

let CardParentContainer = document.querySelector(".main");

const createElement = (element)=> document.createElement(element); 

const RECIPEURL = "https://recipeapi.prakashsakari.repl.co/api/recipes";
const CUISINEURL ="";

const getRecipes = async (URL) =>{
    try{
        const {data} = await axios.get(URL);
        return data;
    }
    catch(err){
        console.log(err);
    }
};

const getCuisine = async (URL) =>{
    try{
        const {data} = await axios.get(URL);
        return data;
    }
    catch(err){
        console.log(err);
    }
};  

const recipes = await getRecipes(RECIPEURL);
getRecipeCard(recipes,CardParentContainer,createElement);