import React, {Component} from 'react';
import TodoItems from './TodoItems';

class TodoList extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state ={
			items: []
		};
		
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	
//Add a task to the todo list.
	addItem(e){
		let itemArray = this.state.items;
		
		if(this._inputElement.value !== ""){
			itemArray.unshift(
				{
					text: this._inputElement.value,
					key: Date.now()
				}
			);
			
			this.setState({
				items: itemArray
			});
			
			this._inputElement.value = "";
		}
   		e.preventDefault();
	};

//Delete a task from the todo list.
	deleteItem(key){
		let filteredItems = this.state.items.filter((item) => {
			return (item.key !== key);
		});
			this.setState({
				items: filteredItems
			});
		}

	render() {
		return(
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a}
						 placeholder="Enter a task..."></input>
						<button type="submit">Add</button>
					</form>
				</div>
				<TodoItems entries={this.state.items}
						   delete={this.deleteItem}/>
			</div>
		);
	}
};

export default TodoList;