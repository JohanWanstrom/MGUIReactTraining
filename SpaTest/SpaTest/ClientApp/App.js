import React from 'react';
import PersistentDrawer from './components/Header/Header'
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div>
                <PersistentDrawer content={this.props.children}/>
            </div>
        );

    }
}
//App.propTypes = {
//    children: PropTypes.object.isRequired
//};

export default App;