import React from 'react';
import {Link} from 'react-router'

class HomePage extends React.Component {
    render() {
        return <div>
            <Navigation />
            <Title />
            <Show />
            <h1>I am homePage</h1>
          <Link to = "personpage">个人主页</Link>
        </div>
    }
}

class Navigation extends React.Component{
    render(){
        return <div>
            I am Navigation
        </div>
    }
}

class Title extends React.Component{
    render(){
        return <div>
            I am title
        </div>
    }
}

class Show extends React.Component{
    render(){
        return <div>
            I am show
        </div>
    }
}

export default  HomePage;