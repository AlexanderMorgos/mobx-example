import { observable } from 'mobx';

import { diContainer } from './core/di';
import TodosService from './shared/services/todos';

export class AppViewModel {
  todosService = diContainer.get(TodosService.diToken);
  @observable list = [];

  addTodo = async (todo) => {
    await this.todosService.create(todo);
    this.list = await this.todosService.getList();
  }
}