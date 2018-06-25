import React from 'react';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import friends from "./friends.json";
import './App.css';

class App extends React.Component {
    state = {
        friends,
        clicked: [],
        score: 0,
        highScore: 0
    };

    // Fisher-Yates:  https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    randomize(array) {
        for (let i = 0; i < array.length - 2; i++) {
            const j = Math.floor(Math.random() * (this.state.friends.length - i)) + i;
            [array[i], array[j]] = [array[j], array[i]];
        };
        return array;
    };

    callRandomize = () => {
        this.setState({score: this.state.score + 1})
        this.randomize(friends);
    };

    render() {
        return (
            <Wrapper>
                {this.state.friends.map(friend =>
                    {return <Card
                        key = {friend.id}
                        id = {friend.id}
                        name = {friend.name}
                        image = {friend.src}
                        randomize = {this.callRandomize}
                    ></Card>}
                )}
            </Wrapper>
        )
    };
};

export default App;
