import React, { Component } from 'react'

export default class Items extends Component {

  state={mouseAble:false}

    mouse=(flag)=>{
      return ()=>{
        this.setState({mouseAble:flag})
      }
    }

    handleCheck=(id)=>{
        return (e)=>{
          this.props.updateCheck(id,e.target.checked)
        }
    }

    handleDelete=(id)=>{
          return ()=>{
            if(window.confirm('确认删除？')){
               this.props.deleteTodo(id)
            }
          }   
    }

    render() {
      const {id,name,done}=this.props
      const {mouseAble}=this.state
      
        return (
            
            <li  style={{backgroundColor:mouseAble?'#ddd':'white'}}   onMouseEnter={this.mouse(true)}  onMouseLeave={this.mouse(false)}>
              <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                <span>{name}</span>
              </label>
              <button  onClick={this.handleDelete(id)}   className="btn btn-danger" style={{display:mouseAble?'block':'none'}}>删除</button>
            </li>
            
            
        )
    }
}
