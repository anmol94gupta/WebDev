var todos = [];

var input = prompt ("What would you like to do? (try : new, list, delete, quit.)");

while (input !== "quit"){
	if(input === "list"){
		console.log("****************");
		todos.forEach(function(todo,i){
			console.log(i+": "+todo);
		});
		console.log("****************");
	}else if (input === "new"){
		var newTodo = prompt("Enter New Todo (like : Do laundary etc.)");
		todos.push(newTodo);
		console.log("****************");
		todos.forEach(function(todo,i){
			console.log(i+": "+todo);
		});
		console.log("****************");
	}else if(input === "delete"){
		index = prompt("Enter index to delete.")
		if (index > todos.length){
			console.log("Index does not exist")
		}else {
			todos.splice(index,1)
			console.log("Items removed.")
		}

	}else {
		console.log("Enter a valid input.");
	}
	input = prompt ("What would you like to do? (try : new, list, delete, quit.)");
}
console.log("You have quit the App.");