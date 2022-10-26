class TodosController < ApplicationController
  def index
    todos = [
      {
        id: 1,
        title: 'Todo 1'
      },
      {
        id: 2,
        title: 'Todo 2'
      },
      {
        id: 3,
        title: 'Todo 3'
      },
      {
        id: 4,
        title: 'Todo 4'
      }
    ]

    render json: { data: todos }
  end
end