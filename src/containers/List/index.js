import React from 'react'
import E from "../../components/E";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as listInfoActions from '../../actions/listInfo';
import F from "../../components/F";


class List extends React.Component {
    render() {
        return (
            <div>
                <p>List</p>
                <hr/>
                <E listInfo={this.props.listInfo}/>
                <F actions={this.props.listInfoActions}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.listInfoActions.fruit({
            info:
                [1, 2, 3, 4]
        })
    }

}

function mapStateToProps(state) {
    return {
        listInfo: state.listInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        listInfoActions: bindActionCreators(listInfoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)