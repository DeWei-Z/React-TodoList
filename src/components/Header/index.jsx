import React, { Component } from 'react'

export default class Header extends Component {

    keyup=(e)=>{
        if(e.keyCode===13){
            
            const todoObj={id:0,name:e.target.value,done:false}
            this.props.addTodos(todoObj)
            e.target.value=''

        }
    }

    render() {
        return (
           
        <div className="todo-header">
            <input onKeyUp={this.keyup}   type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
            
        )
    }
}
