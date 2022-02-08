import RecipeList from "./recipe-list";
import "./recipe.css";

export default function Recipe({ recipeValues = [] }) {
    return (
        <div className="recipieList">
            {recipeValues.map((value) => (
                <RecipeList recipe={value} key={value.name}></RecipeList>
            ))}
        </div>
    );
}
