import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodolistUI = (props) => {
    return (
        <div style={{ margin: '10px 0 0 10px' }}>
            <Input
                onChange={props.handleInputChange}
                value={props.inputValue}
                style={{ margin: '0 10px 10px 0', width: '300px' }}
                placeholder="Basic usage"
            />
            <Button
                onClick={props.handleBtnClick}
                type="primary"
            >
                提交</Button>
            <List
                style={{ width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => { props.handleItemDelete(index) }}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodolistUI;