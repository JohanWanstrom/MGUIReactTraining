import React from 'react';
import Header from './components/Header'
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        console.log("HEJ" + this.props.children);
        return (
            <div>
                <Header content={this.props.children}/>
            </div>
        );

    }
}
//App.propTypes = {
//    children: PropTypes.object.isRequired
//};

export default App;