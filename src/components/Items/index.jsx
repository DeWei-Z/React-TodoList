import React, { Component } from 'react'

export default class Items extends Component {

  state={mouseAble:false}

    mouse=(flag)=>{
      return ()=>{
        this.setState({mouseAble:flag})
      }
    }

    render() {
      const {name,done}=this.props
      const {mouseAble}=this.state
      
        return (
            
            <li  style={{backgroundColor:mouseAble?'#ddd':'white'}}   onMouseEnter={this.mouse(true)}  onMouseLeave={this.mouse(false)}>
              <label>
                <input type="checkbox" defaultChecked={done}  />
                <span>{name}</span>
              </label>
              <button className="btn btn-danger" style={{display:mouseAble?'block':'none'}}>删除</button>
            </li>
            
            
        )
    }
}
