import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className = 'ui container comments'>
            <ApprovalCard>
            <CommentDetail 
                author = ' Chumley Walrus ' 
                timeAgo = 'Today at 5:45PM' 
                text = 'You guys ROCK!' 
                avatar = {faker.image.avatar} 
                />
                </ApprovalCard>
            <CommentDetail 
                author = ' Tennesse Tuxedo ' 
                timeAgo = 'Today at 8:18AM' 
                text = 'Pretty bad a$$!'
                avatar = {faker.image.avatar} />
            <CommentDetail 
                author = ' Phineas J. Whoopee ' 
                timeAgo = 'Yesterday at 1:33PM' 
                text = 'Dude that is solid' 
                avatar = {faker.image.avatar} />
            <CommentDetail 
                author = ' Stanley Livingstone' 
                timeAgo = 'Yesterday at 2:03AM' 
                text = 'Far out man!' 
                avatar = {faker.image.avatar} />
        </div>
    );
};

ReactDOM.render( <App />, document.getElementById ('root'));