// Function to update the clock label
function updateClock() {
    const clockLabel = document.getElementById('clockLabel');
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
    clockLabel.textContent = `Current Time: ${formattedTime}`;
  }
document.addEventListener('DOMContentLoaded', function () {
    setInterval(updateClock,1000);
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
  