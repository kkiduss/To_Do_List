document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const categoryLinks = document.querySelectorAll('#categoryList a');

    let tasks = [];

    function renderTasks(filteredTasks = tasks) {
        taskList.innerHTML = '';
        filteredTasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskItem.innerHTML = `
                <div>
                    <div class="task-title">${task.title}</div>
                    <div>
                        <span class="task-description" contenteditable="true">${task.description}</span>
                        <p><i class="fa fa-calendar" aria-hidden="true"></i> Date- ${task.dueDate} </p>
                        <p>priority- <em>${task.priority}</em></p>
                        <p class="task-context"><i class="fa fa-plus" aria-hidden="true"></i> ${task.context}</p>
                    </div>
                </div>
                <button class="complete-task">${task.completed ? 'Undo' : 'Complete'}</button>
            `;

            // Toggle completion
            taskItem.querySelector('.complete-task').addEventListener('click', () => {
                task.completed = !task.completed;
                renderTasks();
            });

            // Inline editing
            const descriptionSpan = taskItem.querySelector('.task-description');
            descriptionSpan.addEventListener('blur', () => {
                const newDescription = descriptionSpan.textContent.trim();
                if (newDescription !== task.description) {
                    tasks[index].description = newDescription;
                }
            });

            // Allow saving on Enter key
            descriptionSpan.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Prevent newline
                    descriptionSpan.blur();
                }
            });

            taskList.appendChild(taskItem);
        });
    }

    addTaskButton.addEventListener('click', () => {
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;
        const priority = document.getElementById('taskPriority').value;
        const context = document.getElementById('taskContext').value;
        const category = document.querySelector('#categoryList a.active').dataset.category;

        if (title && description) {
            tasks.push({
                title,
                description,
                dueDate,
                priority,
                context,
                category,
                completed: false
            });
            renderTasks();
            document.getElementById('taskTitle').value = '';
            document.getElementById('taskDescription').value = '';
            document.getElementById('taskDueDate').value = '';
            document.getElementById('taskContext').value = '';
        }
    });

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            categoryLinks.forEach(catLink => catLink.classList.remove('active'));
            link.classList.add('active');
            const category = link.dataset.category;
            if (category === 'all') {
                renderTasks();
            } else {
                const filteredTasks = tasks.filter(task => task.category === category);
                renderTasks(filteredTasks);
            }
        });
    });

    // Initial Render
    renderTasks();
    function redirectToDashboard(event) {
        event.preventDefault(); // Prevent the default form submission
        window.location.href = 'dashboard.html'; // Replace 'dashboard.html' with your target page
    }
});
