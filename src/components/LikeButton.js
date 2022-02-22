import React from 'react';


const LikeButton =(props)=> {
    const [likes, setLikes] = React.useState(0);

    let colors = ['blue', 'purple', 'green', 'orange', 'red', 'yellow'];
    let pickColor = colors[Math.floor(Math.random()*6)];
    return (
        <div>
            <button style = {{backgroundColor: pickColor}}
                    onClick = {() => setLikes(likes + 1)}> {likes} {likes === 1 ? 'Like' : 'Likes'} {' '}</button>
        </div>
    );
};


export default LikeButton