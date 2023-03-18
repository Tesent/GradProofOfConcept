import React from 'react';
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends PureComponent{

    render(){
        return(
            <h1>{this.props.title} </h1>
        );
    }
}

Sidebar.propTypes = {
    title: PropTypes.string
};

export default Sidebar;