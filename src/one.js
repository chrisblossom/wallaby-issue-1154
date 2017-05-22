import React from 'react';
import { connect } from 'react-redux';

import Two from './two';

function One() {
    return (
        <div>
            <Two />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        checkout: state.checkout,
    };
};

const connector = connect(mapStateToProps);
export default connector(One);
