import React from 'react';

class F extends React.Component{
    render(){

        return(
            <div>
                <button onClick={this.changeUserInfo.bind(this)}>修改</button>
            </div>
        )

    }

    changeUserInfo(){
        // 向 action 传递 数据 交给 redux 自行监听修改展示数
        const actions = this.props.actions;
        actions.fruit({
            info: ['x','y','z']
        })
    }

}

export default F;