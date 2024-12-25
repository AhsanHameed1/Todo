const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../config/database');
const Todo = require('../models/Todo');

describe('Todo API', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  it('should add a new todo', async () => {
    const res = await request(app).post('/todos').send({ title: 'Test Todo' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Todo');
  });

  it('should edit a todo', async () => {
    const todo = await Todo.create({ title: 'Initial Todo' });
    const res = await request(app).put(`/todos/${todo.id}`).send({ title: 'Updated Todo' });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Todo');
  });

  it('should delete a todo', async () => {
    const todo = await Todo.create({ title: 'Delete Me' });
    const res = await request(app).delete(`/todos/${todo.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe('Item Deleted');
  });
});