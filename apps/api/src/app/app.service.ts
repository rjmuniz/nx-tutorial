import { Injectable } from '@nestjs/common';
import { Todo } from '@myorg/data'


@Injectable()
export class AppService {
  todos: Todo[] =[{title:"todo 1"}, {title: "todo 2"}];


  getData(): Todo[] {
    return this.todos;
  }

  addTodo(){
    this.todos.push({title: `New todo ${Math.floor(Math.random() *10000)}`,})
  };
}
