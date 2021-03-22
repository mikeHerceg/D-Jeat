import React from "react";

export class FindOption extends React.Component  {   

    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude:'',
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
                console.log('success')
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
        return;
    }
    searchFoodOptionLink(){
        let encodeSuggestions = this.encodeSearchTerm(this.props.foodSuggestion);
        let latitude = this.state.latitude;
        let longitude = this.state.longitude;
        return 'https://www.google.com/maps/search/'+encodeSuggestions+'/@'+latitude+','+longitude;
    }
    
    encodeSearchTerm(term){
       return term.replace(/\s/g, '+')
    }
    
    componentDidMount(){
        this.getLocation();
    }

    render(){
        if(this.props.foodSuggestion){
            return (
                <>  
                    <button><a href={this.searchFoodOptionLink()}> Find Local {this.props.foodSuggestion} in my area</a></button>
                </>
            );
        }
        else{
            return (
                <></>
            )
        }
    }
}
export default FindOption;
