import { useState } from "react";
import Recipe from "./recipe";
import "./style.css";
import _ from "lodash";

import { TagsInput } from "react-tag-input-component";

export default function App() {
  const recipe = [
    {
      name: "Squash au Vin",
      description:
        "What would happen if you gave winter squash the coq au vin treatment? Layers of flavor from browned mushrooms, wine, and miso that give the classic a run for its money.",
      ingredients: ["mushroom", "onion", "squash"],
      rating: "3.7",
      image:
        "https://assets.bonappetit.com/photos/5e399f26dbed3c00080d0e58/1:1/w_2240,c_limit/0320-Dutch-Oven-Squash-Squash-au-Vin.jpg"
    },
    {
      name: "Shrimp and Salami Pasta",
      description:
        "A dreamy vacation to Portugal inspired this shrimp and salami pasta from recipe developer Shilpa Uskokovic",
      ingredients: ["shrimp", "pasta"],
      rating: "4.2",
      image:
        "https://assets.bonappetit.com/photos/6169b04e2f34dd3430e96df8/1:1/w_2240,c_limit/Shrimp-and-Salami-Pasta.jpeg"
    },
    {
      name: "Corn and Sausage Pasta",
      description:
        "Forget breakfast bars or muffins: Our new favorite grab-and-go breakfast is a blondie.",
      ingredients: [
        "spaghetti",
        "pasta",
        "rigatoni",
        "sausage",
        "basil",
        "clove",
        "corn"
      ],
      rating: "4.7",
      image:
        "https://assets.bonappetit.com/photos/60a45997248102a01bcfa132/1:1/w_2240,c_limit/0621-Corn-Sausage-Pasta.jpg"
    },
    {
      name: "Bombay Sandwich",
      description:
        "Something very special happens when you give winter squash the coq au vin treatment.",
      ingredients: ["onions", "potato", "bread"],
      rating: "4.2",
      image:
        "https://assets.bonappetit.com/photos/604ec5e0b5ad3ffa9fef0576/1:1/w_2240,c_limit/Holi-Bombay-Sandwich.jpg"
    }
  ];

  const [inputText, setInputText] = useState("");
  const [tags, setTags] = useState("");
  const [recipeList, updateRecipeList] = useState(recipe);
  const matched = [];

  const onTextEnter = (text) => {
    setInputText(text);
  };

  const beginSearch = () => {
    if (!tags.length) {
      updateRecipeList(recipeList);
      return;
    }
    const userIngredients = tags.map((value) => value.toLowerCase());
    console.log("userIngredients", userIngredients);
    recipe.map((main) => {
      var inter = _.intersection(main.ingredients, userIngredients);
      if (inter.length) {
        const percentage = Math.floor(
          (inter.length / main.ingredients.length) * 100
        );
        matched.push({ ...main, percentage, matchingIngre: inter });
      }
    });
    const sortedMatchedRecipes = _.orderBy(matched, "percentage", ["desc"]);
    updateRecipeList(sortedMatchedRecipes);
  };

  return (
    <div className="App">
      <div className="topnav">
        <span>bon appétit</span>
      </div>
      <br />
      <div> Hey! what's in your kitchen 🍞🥚</div>
      <TagsInput
        value={tags}
        onChange={setTags}
        name="ingredients"
        placeHolder="bread, egg..."
      />
      {/* <InputText textEntered={onTextEnter} textValue={inputText} /> */}
      <br />
      <button onClick={() => beginSearch()}>Let's cook 🥙</button>
      <br />
      <br />
      <div className="main">
        <Recipe recipeValues={recipeList}></Recipe>
      </div>
    </div>
  );
}
