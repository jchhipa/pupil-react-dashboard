import { connect } from 'react-redux';
import HomeUI from './HomeUI';


const mapStateToProps = (state, ownProps) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const HomeContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(HomeUI);

export default HomeContainer;