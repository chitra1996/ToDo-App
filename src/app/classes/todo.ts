export class Todo {
  // id of the task
  id: number;
  // name of the task
  text: string;

  /**
   * @param id holds id of the task
   * @param text holds name of task
   */
  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}
