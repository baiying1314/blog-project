import React from 'react';

class Blog extends React.Component {
    render() {
        return (
            <div>
                {this.props.children && React.cloneElement(this.props.children, {
                })}
            </div>
        )
    }
}

export default  Blog;