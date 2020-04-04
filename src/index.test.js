import { showProjects } from './modules/projects';

test('Show deafult projects', () => {
  expect(showProjects()).toStrictEqual([{
    name: 'Project1',
    todos: [{
      description: 'First todo project 1',
      duedate: 'Mar 19, 2020',
      priority: 'Important but not urgent',
      title: 'Todo 1',
    }],
  }]);
});