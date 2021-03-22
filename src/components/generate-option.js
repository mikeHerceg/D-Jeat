import React from "react";
import { FoodOptions} from "../assets/food-options"
import { FindOption } from './find-food-option'



class GenerateOption extends React.Component  {   

    constructor(props) {
        super(props);
        this.state = {
            foodSuggestion:'',
            foodSuggestionString:''
        };
        this.chooseOption = this.chooseOption.bind(this);
    }

    chooseOption(){
        if(FoodOptions){
            let rand = Math.floor(Math.random() * FoodOptions.length);
            this.setState({
                foodSuggestion : `${FoodOptions[rand]}`,
                foodSuggestionString : `Go eat ${FoodOptions[rand]} then.`
            });
        }
        document.getElementsByTagName('button')[0].style="display:none;"
        return;
    }
    

    render(){
        return (
            <>
                <button onClick={this.chooseOption}>Not Yet</button>
                <p>{this.state.foodSuggestionString}</p>
                <FindOption foodSuggestion={this.state.foodSuggestion}></FindOption>
            </>
        );
    }
}
export default GenerateOption;
