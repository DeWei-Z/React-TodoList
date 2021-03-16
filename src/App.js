
import './App.css';
import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer/index'
import React from 'react';

class App extends React.Component {
  state={todos:[
    {id:1,name:'吃饭',done:true},
    {id:2,name:'睡觉',done:true},
    {id:3,name:'写代码',done:false},
    {id:4,name:'逛街',done:true}
  ]
    
  }

  addTodos=(todoObj)=>{
     const {todos}=this.state
     const newTodos=[todoObj,...todos]
     console.log(newTodos)
     this.setState({todos:newTodos})
  }

  render() {

    const {todos}=this.state
    console.log(todos)
   return( <div className="todo-container">
              <div className="todo-wrap">
                 <Header addTodos={this.addTodos}/>
                 <List todos={todos}/>
                 <Footer/>
              </div>
          </div>
   )
  }
        
         
    
  
}

export default App;
