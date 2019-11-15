import React, {
    Component
} from "react";
import Star from './Star';

class StarRating extends Component {

    // Initialize a 'rating' state
    state = {
        rating: 0
    };

    // Write a function that returns 5 Star components

    renderStart = () => {
            let starts = [];
            let maxRating = 5;
            for (let i = 0; i < maxRating; i++) {
                starts.push( <
                    Start key = {
                        i
                    }
                    setRating = {
                        () => this.handleSetRating(i + 1)
                    }
                    isSelected = {
                        this.state.rating > 1
                    }
                    />
                );
            };
            // Write an event handler that updates the rating state.

            // Pass the function to a Star component via props
            handleSetRating = (rating) => {
                this.setState({
                    rating: rating
                });
            };
            render() {
                return ( < ul className = "course--stars" > {
                        /* Render the Star components */
                    } {
                        this.renderStart()
                    } <
                    /ul>);
                };

            };


            export default StarRating;