import React, { Component } from 'react'
import Items from '../Items'

export default class List extends Component {
    render() {

        const {todos}=this.props
        return (
            <ul className="todo-main">
                   {
                       todos.map(todo=>{
                           return <Items key={todo.id} {...todo} />
                       })
                   }
            </ul>
            
        )
    }
}
