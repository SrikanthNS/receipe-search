import "./recipe.css";

export default function Ingredients({ ingredients = [], matchedIngredients = [] }) {
    return (
        <div className="ingredients">
            {ingredients.map((value, index) => (
                <span
                    key={`${value}-${index}`}
                    className={matchedIngredients.includes(value) ? "colorBlue" : ""}
                >
                    {value}
                </span>
            ))}
        </div>
    );
}
