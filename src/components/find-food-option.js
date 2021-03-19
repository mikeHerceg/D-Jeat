import React from "react";
import { FoodOptions} from "../assets/food-options"

class FindOption extends React.Component  {   

    constructor(props) {
        super(props);
        this.state = {
            latitude: [],
            longitude:[],
            searchLink:''
        };
        this.getLocation = this.getLocation.bind(this);
        
    }

    getLocation(){
        navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude:position.coords.longitude,
                });
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED ){
                    alert(`there was and an error retrieving your location`)
                    this.setState({ //postion for Philadelphia
                        latitude: 40.297036399999996,
                        longitude:-75.4085533,
                    });    
                }
            }
        );
    }
    goToSearch(){
        let encodeSuggestions = this.encodeSearchTerm()
        window.location = `https://www.google.com/maps/search/fast+food/@${this.state.latitude},${this.state.longitude}` 
    }
    encodeSearchTerm(term){

    }
    
    componentDidMount(){
        this.getLocation();
    }

    render(){
        if(this.props.foodSuggestion){
            return (
                <>  
                    <button onClick="goToSearch">Find Local {this.props.foodSuggestion} in my area</button>
                </>
            );
        }else{
            return (
                <></>
            )
        }
    }
}
export default FindOption;
