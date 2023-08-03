import { GlobalStyle } from "./Global.styled";
// import { Alert } from "./Alert/Alert";
import recipe from '../recipe.json';
import { Recipe } from './Recipe/Recipe'

export const App = () => {
  return (
    <>
      <GlobalStyle/>
          {recipe.map(({name, image, time, servings, calories}) => {
        return (
        <Recipe 
          key={name}
          name={name}
          image={image}
          time={time}
          servings={servings}
          calories={calories}
          />
        )
      })}
    </>
    );
    // <>
      // <GlobalStyle/>
    //   <Alert type="error" />
    //   <Alert type="success" />
    //   <Alert type="warning" />    
    // </>
  };
