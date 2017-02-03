import React from 'react';
import {Link} from 'react-router'

class HomePage extends React.Component {
    render() {
        return <div>
            <h1>I am homePage</h1>
          <Link to = "personpage">个人主页</Link>
        </div>
    }
}

export default  HomePage;