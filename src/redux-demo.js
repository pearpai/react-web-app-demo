import {createStore} from 'redux';

export default function () {

    //第一步：定义计算规则，即reducer  行为执行 方式
    function counter(state = 0, action) {
        switch (action.type){
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }

    //第二步： 根据计算规则生成store
    let store = createStore(counter);

    //第三步：（数据变化后的监听函数） 定义数据（即 state）变化之后的派发规则 变化后规则
    store.subscribe(() => {
        console.log('current state', store.getState())
    });

    //第四步： 触发数据变化
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'DECREMENT'});

}