import React from "react";
import "./recipe.css";
import Ingredients from "./ingredients";
import { PercentageBar } from "./percentage";

export default function RecipeList({
    recipe: {
        name,
        description,
        ingredients,
        rating,
        image,
        percentage,
        matchingIngredients
    } = {}
}) {
    return (
        <div className="recipe">
            <table className="tablecss">
                <tbody>
                    <tr>
                        <td>
                            <img className="img" src={image} alt="something cooking..."></img>
                        </td>
                        <td className="content">
                            <div className="header">{name}</div>
                            <br></br>
                            <div className="desc">{description}</div>
                            <br></br>
                            <span style={{ fontWeight: "bold" }}>Ingredients:</span>{" "}
                            <Ingredients
                                ingredients={ingredients}
                                matchedIngredients={matchingIngredients}
                            />
                            {percentage && (
                                <React.Fragment>
                                    <br></br>
                                    <PercentageBar valuePercentage={percentage} />
                                </React.Fragment>
                            )}
                            <br></br>
                            <div>⭐ {rating}</div>
                            <br></br>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
