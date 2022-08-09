import { LightningElement, track } from 'lwc';

export default class ToDoList extends LightningElement {
    @track

    todoTasks = [];
    newTask ='My New Task';

    updateNewTask(event){

        //console.log(this.newTask);
        //console.log(event.target.value);
        //console.log('method called');
        this.newTask = event.target.value;
    }
    addTaskToList(event){
        //console.log('new button click');

        this.todoTasks.push({

            id: this.todoTasks.length + 1,
            name:this.newTask

        })
        //console.log(this.todoTasks);
        this.newTask = '';

    }
    deleteTaskfromList(event){
        console.log('delete key pressed'+ event.target.name);
        //this.todoTasks = event.target.name
        let idToDelete = event.target.name;
        let todoTasks = this.todoTasks;
        let todoTaskIndex;

        for(let i=0; i <todoTasks; i++){
            if(idToDelete === todoTasks[i].id){
                todoTaskIndex = i;
            }
        }
        
        //todoTasks.splice(todoTaskIndex, 1);
        //console.log('this.todoTask');
        //console.log(JSON.stringify(this.todoTasks));
        todoTasks.splice( 
            todoTasks.findIndex(function(todoTask){
               return todoTask.id === idToDelete; 
            })
             ,1
             );
             //or
            // todoTasks.splice(todoTasks.findIndex(todoTask =>  todoTask.id === idToDelete),1);
    }
}