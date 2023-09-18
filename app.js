document.getElementById("addTaskBtn").addEventListener('click', addTask)
document.getElementById('taskInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    taskText.className = 'text-wrap'

    if (taskText !== "" ) {
        const currentDate = new Date();
        const currentDateTimeString = currentDate.toLocaleString();
        
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex justify-content-between align-baseline'
        taskItem.innerHTML = `
        <span>${taskText}</span>
        <span>${currentDateTimeString}</span>
        <button type="button" class="btn btn-danger">Delete</button>
        `;

        document.getElementById('taskList').appendChild(taskItem);

        taskList.insertBefore(taskItem, taskList.firstChild);

        taskItem.querySelector('.btn-danger').addEventListener('click', function () {
            taskItem.remove()
        });


        taskInput.value = '';
    };
};

