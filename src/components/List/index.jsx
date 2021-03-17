import React, { Component } from 'react'
import Items from '../Items'

export default class List extends Component {
    render() {

        const {todos,updateCheck,deleteTodo}=this.props
        return (
            <ul className="todo-main">
                   {
                       todos.map(todo=>{
                           return <Items key={todo.id} {...todo}  updateCheck={updateCheck} deleteTodo={deleteTodo} />
                       })
                   }
            </ul>
            
        )
    }
}
