import { connect } from 'react-redux';

import HeaderUI from './HeaderUI';


const mapStateToProps = (state, ownProps) => {
    return {
    };
}

const mapDispatchToProps = dispatch => ({
    onLogout: () => {
    }
});

const HeaderContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(HeaderUI);

export default HeaderContainer;