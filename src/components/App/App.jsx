import { connect } from 'react-redux';

import AppUI from './AppUI';


const mapStateToProps = (state, ownProps) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const App = connect(
    mapStateToProps, 
    mapDispatchToProps
)(AppUI);

export default App;