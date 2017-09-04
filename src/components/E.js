import React from 'react';

class E extends React.Component {

    render() {
        const info = this.props.listInfo.info;
        // 对 info 数据判断 如果没有 直接返回null
        if (info == null)
            return null;
        console.log("----->");
        console.log(info);
        return (
            <div>
                <p>{info}</p>
                <hr/>
                <ul>
                    {
                        info.map((item) => {
                            return (
                                // 这里的key 需要唯一
                                <li key={item}>
                                    <label>{item}</label>
                                    <button>delete</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        )

    }
}

export default E;