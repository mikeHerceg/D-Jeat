import React from "react";
import { FoodOptions} from "../assets/food-options"



class GenerateOption extends React.Component  {   

    constructor(props) {
        super(props);
        this.state = {
            foodSuggestion:'',
        };
        this.chooseOption = this.chooseOption.bind(this);
    }

    chooseOption(){
        if(FoodOptions){
            let rand = Math.floor(Math.random() * FoodOptions.length);
            this.setState({
                foodSuggestion : `Go eat ${FoodOptions[rand]} then.`
            });
        }
    }
    

    render(){
        return (
            <>
                <button onClick={this.chooseOption}>Not Yet</button>
                <p>{this.state.foodSuggestion}</p>
            </>
        );
    }
}
export default GenerateOption;
