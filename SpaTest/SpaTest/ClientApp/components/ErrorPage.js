import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class ErrorPage extends React.Component {
    render() {

        return (
            <div>
                <h1>Denna sida finns ej...</h1>
            </div>
        );

    }
}
//App.propTypes = {
//    children: Propty.object.isRequired
//};

export default ErrorPage;