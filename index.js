document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        // Get the container to display the todos
        const todosGrid = document.getElementById('todosGrid');

        // Iterate over each todo and create a card for it
        todos.forEach(todo => {
          const todoCard = document.createElement('div');
          todoCard.classList.add('todo-card');
          todoCard.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.completed ? 'Completed' : 'Not Completed'}</p>
          `;
          // Add border styling to each todo card
          todoCard.style.border = '10px solid #ccc';
          todoCard.style.borderRadius = '8px';

          todosGrid.appendChild(todoCard);
        });
      })
      .catch(error => console.error('Error fetching todos:', error));
  });