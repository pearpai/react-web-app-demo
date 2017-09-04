import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as userinfoActions from '../../actions/userinfo'

import A from '../../components/A';
import B from '../../components/B';
import C from '../../components/C';

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Home</p>

                <hr/>
                <A userinfo = {this.props.userinfo}/>
                <hr/>
                <B userinfo = {this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>

            </div>
        )
    }

    // 这里使用了 绑定的的userinfoActions 同时调用 action中的login 初始化 数据
    componentDidMount(){
        this.props.userinfoActions.login({
            userid:'abc',
            city:'beijing'
        });
    }
}

// 初始化界面 state 为上层store 传入，即返回当前类state 此处初始化了本地state中的 userinfo
// userinfo 为reducer 中的 userinfo 的存入
function mapStateToProps(state) {
    return{
        userinfo: state.userinfo
    }
}

// 对action 进行绑定处理
function mapDispatchToProps(dispatch) {
    return {
        userinfoActions:bindActionCreators(userinfoActions, dispatch)
    }
}

// 即传入的为 绑定state  绑定行为action
export default connect(mapStateToProps, mapDispatchToProps)( Home)