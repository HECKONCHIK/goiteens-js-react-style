import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { RecipeInfo } from "../RecipeInfo/RecipeInfo"
import { RecipeList } from "./Recipe.styled";
import { RecipeCard } from "./Recipe.styled";
export const Recipe = ({ name, image, time, servings, calories }) => {
    return (
        <>
        <RecipeCard>
            <h1>${name}</h1>
            <img src={image} alt={name} width={300} />
            <RecipeList>
                <RecipeInfo text={`${time} min`} icon={BsAlarm}/>
                <RecipeInfo text={`${servings} serving`} icon={HiOutlineChartPie}/>
                <RecipeInfo text={`${calories} calories`} icon={HiOutlineChartBar}/>
            </RecipeList>            
        </RecipeCard>   
        </>
    )
}