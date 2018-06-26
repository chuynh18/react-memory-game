import React from 'react';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Scorebar from "./components/Scorebar";
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

    executeGameLogic = (id) => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.setState({
                clicked: this.state.clicked.concat(id),
                score: this.state.score + 1
            });
            if (this.state.score >= this.state.highScore) {
                this.setState({highScore: this.state.highScore + 1});
            }
            else {
                this.setState({highScore: this.state.highScore});
            }
        }
        else {
            this.setState({
                clicked: [],
                score: 0
            });
        }
        this.randomize(friends);
    };

    render() {
        return (
            <div>
                <Scorebar
                    currentScore = {this.state.score}
                    highScore = {this.state.highScore}
                />
                <Wrapper>
                    {this.state.friends.map(friend =>
                        {return <Card
                            key = {friend.id}
                            id = {friend.id}
                            name = {friend.name}
                            image = {friend.src}
                            gameLogic = {this.executeGameLogic}
                        ></Card>}
                    )}
                </Wrapper>
            </div>
        )
    };
};

export default App;
