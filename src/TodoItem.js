import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        //  当组件的state或props发生改变的时候render函数就会重新执行
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }else {
            return false;
        }
    }
    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick() {
        const { handleItemDelete, index } = this.props;
        handleItemDelete(index);
    }
}

TodoItem.protoTypes = {
    test:PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    handleItemDelete: PropTypes.func,
    index: PropTypes.number,
}
export default TodoItem;