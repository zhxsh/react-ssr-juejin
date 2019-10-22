import { connect } from 'react-redux'

import Content from '../components/Content.tsx'

const mapStateToProps = state => {
    return {
        list: state.ArticlesReducer
    }
}

const ArticlesContainer = connect(
    mapStateToProps
)(Content);
export default ArticlesContainer;