import Meals from '../components/Meals.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  component: Meals
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: (args) => ({
    components: { Meals },
    setup() {
      return { args };
    },
    template: `<Meals v-bind="args"/>`
  }),
  args: {
    meals: [{
      "idMeal": "52823",
      "strMeal": "Salmon Prawn Risotto",
      "strDrinkAlternate": null,
      "strCategory": "Seafood",
      "strArea": "Italian",
      "strInstructions": "Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.\r\nAdd the rice and stir to coat all the grains in the butter\r\nAdd the wine and cook gently stirring until it is absorbed\r\nGradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender\r\nSeason with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through\r\nServe scattered with the Parmesan and seasonal vegetables.\r\nGrill the salmon and gently place onto the risotto with the prawns and asparagus",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
      "strTags": "Fish",
      "strYoutube": "https://www.youtube.com/watch?v=V2PMvBv52IE",
      "strIngredient1": "butter",
      "strIngredient2": "onion",
      "strIngredient3": "rice",
      "strIngredient4": "white wine",
      "strIngredient5": "vegetable stock",
      "strIngredient6": "lemon",
      "strIngredient7": "King Prawns",
      "strIngredient8": "salmon",
      "strIngredient9": "asparagus",
      "strIngredient10": "black pepper",
      "strIngredient11": "Parmesan",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "50g/2oz",
      "strMeasure2": "1 finely chopped ",
      "strMeasure3": "150g",
      "strMeasure4": "125ml ",
      "strMeasure5": "1 litre hot",
      "strMeasure6": "The juice and zest of one",
      "strMeasure7": "240g large",
      "strMeasure8": "150g",
      "strMeasure9": "100g tips blanched briefly in boiling water",
      "strMeasure10": "ground",
      "strMeasure11": "50g shavings",
      "strMeasure12": "",
      "strMeasure13": "",
      "strMeasure14": "",
      "strMeasure15": "",
      "strMeasure16": "",
      "strMeasure17": "",
      "strMeasure18": "",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "http://www.rangemaster.co.uk/rangemaster-owners/recipes-ideas-inspiration/recipes/mains/prawn-and-hot-smoked-salmon-risotto-with-asparagus",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": null
    },
    {

      "idMeal": "52960",
      "strMeal": "Salmon Avocado Salad",
      "strDrinkAlternate": null,
      "strCategory": "Seafood",
      "strArea": "British",
      "strInstructions": "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1549542994.jpg",
      "strTags": "Paleo,Keto,LowCarbs,Salad,Alcoholic,Halloween,",
      "strYoutube": "https://www.youtube.com/watch?v=FJiu2S0Xap0",
      "strIngredient1": "Salmon",
      "strIngredient2": "Avocado",
      "strIngredient3": "Cucumber",
      "strIngredient4": "Spinach",
      "strIngredient5": "Mint",
      "strIngredient6": "Lime",
      "strIngredient7": "Honey",
      "strIngredient8": "Olive Oil",
      "strIngredient9": "",
      "strIngredient10": "",
      "strIngredient11": "",
      "strIngredient12": "",
      "strIngredient13": "",
      "strIngredient14": "",
      "strIngredient15": "",
      "strIngredient16": "",
      "strIngredient17": "",
      "strIngredient18": "",
      "strIngredient19": "",
      "strIngredient20": "",
      "strMeasure1": "400g",
      "strMeasure2": "3",
      "strMeasure3": "1",
      "strMeasure4": "400g",
      "strMeasure5": "4 tbs",
      "strMeasure6": "zest and juice of 1",
      "strMeasure7": "2 tsp",
      "strMeasure8": "3 tbs",
      "strMeasure9": "",
      "strMeasure10": "",
      "strMeasure11": "",
      "strMeasure12": "",
      "strMeasure13": "",
      "strMeasure14": "",
      "strMeasure15": "",
      "strMeasure16": "",
      "strMeasure17": "",
      "strMeasure18": "",
      "strMeasure19": "",
      "strMeasure20": "",
      "strSource": "https://www.bbcgoodfood.com/recipes/4521/salmon-avocado-and-cucumber-salad",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": null

    }
    ]
  },
};

