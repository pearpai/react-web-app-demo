import React from 'react'
import ReactDOM from 'react-dom';
var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

ReactDOM.render(
    <HelloMessage name="Runoob" />,
    document.getElementById('example')
);