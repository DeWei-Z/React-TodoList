import React, { Component } from 'react'

export default class Footer extends Component {

    checkAll=(e)=>{
           
       this.props.checkAllTodo(e.target.checked)

         }

    handleClearAllDone=()=>{
       this.props.clearAllDone()
    }

    render() {
  
        const {todos}=this.props
        const count=todos.reduce((pre,todo)=>pre + ( todo.done ? 1:0 ),0)
        const total=todos.length
        return (
            
        <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={this.checkAll} checked={count===total && total!==0 ? true : false}  />
            </label>
            <span>
              <span>已完成{count}</span> / 全部{total}
            </span>
            <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
           
        )
    }
}
