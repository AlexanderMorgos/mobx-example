import { injectable } from 'inversify';

@injectable()
class TodosService {
  static diToken = Symbol('todos-service');

  list = [];
  
  async create(todo) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // moking create logic

    this.list.push(todo);
  }

  async getList() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return this.list;
  }
}

export default TodosService;