document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
    const clearBtn = document.getElementById('clearBtn');
    const emptyMessage = document.getElementById('emptyMessage');

    let tasks = [];

    function saveTask() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            renderTasks();
        }
    }

    function renderTasks() {
        taskList.innerHTML = "";

        if (tasks.length === 0) {
            emptyMessage.style.display = 'block';
            clearBtn.disabled = true;
        } else {
            emptyMessage.style.display = 'none';
            clearBtn.disabled = false;

            for (let i = 0; i < tasks.length; i++) {
                let taskText = tasks[i];
                let listItem = document.createElement('li');
                let checkbox = document.createElement('input'); 
                checkbox.type = 'checkbox'; 
                checkbox.checked = false; 

                let taskTextNode = document.createTextNode(taskText);

                listItem.appendChild(checkbox); 
                listItem.appendChild(taskTextNode);
                taskList.appendChild(listItem);
            }
        }
    }

    addBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            tasks.push(taskText);
            saveTask();
            renderTasks();
            taskInput.value = '';
            taskInput.focus();
        }
    });

    clearBtn.addEventListener('click', function() {
        tasks = [];
        saveTask();
        renderTasks();
    });
    loadTasks();
});

