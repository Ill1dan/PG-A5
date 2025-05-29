const completedOne = document.getElementById("completed-one");
const completedOneProblem = document.getElementById("completed-one-problem");

const completedTwo = document.getElementById("completed-two");
const completedTwoProblem = document.getElementById("completed-two-problem");

const completedThree = document.getElementById("completed-three");
const completedThreeProblem = document.getElementById("completed-three-problem");

const completedFour = document.getElementById("completed-four");
const completedFourProblem = document.getElementById("completed-four-problem");

const completedFive = document.getElementById("completed-five");
const completedFiveProblem = document.getElementById("completed-five-problem");

const completedSix = document.getElementById("completed-six");
const completedSixProblem = document.getElementById("completed-six-problem");

const taskAssigned = document.getElementById("task-assigned");
const taskCompleted = document.getElementById("task-completed");
const activityLog = document.getElementById("activity-log");
const clearHistory = document.getElementById("clear-history");

// Completed Task 1
completedOne.addEventListener("click", function(){
    alert('Board updated successfully!');

    // Decrease the task Assigned
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;

    if (parseInt(taskAssigned.innerText) < 10) {
        taskAssigned.innerText = "0" + taskAssigned.innerText;
    }

    // Increase the task Completed
    taskCompleted.innerText = parseInt(taskCompleted.innerText) + 1;

    if (parseInt(taskCompleted.innerText) < 10) {
        taskCompleted.innerText = "0" + taskCompleted.innerText;
    }

    // Disable the completed button
    completedOne.disabled = true;

    // Update the Activity log
    const today = new Date();

    const time = new Intl.DateTimeFormat("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const currentTime = time.format(today);

    // Update Activity Log
    div = document.createElement("div");
    div.className = "bg-[#F4F7FF] p-6 rounded-2xl mb-4 back";
    activityLog.appendChild(div);

    h1 = document.createElement("h1");
    h1.innerText = `You have completed The Task ${completedOneProblem.innerText} at ${currentTime}.`
    div.appendChild(h1);

    checkAllTasksCompleted();
});

// Completed Task 2
completedTwo.addEventListener("click", function(){
    alert('Board updated successfully!');

    // Decrease the task Assigned
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;

    if (parseInt(taskAssigned.innerText) < 10) {
        taskAssigned.innerText = "0" + taskAssigned.innerText;
    }

    // Increase the task Completed
    taskCompleted.innerText = parseInt(taskCompleted.innerText) + 1;

    if (parseInt(taskCompleted.innerText) < 10) {
        taskCompleted.innerText = "0" + taskCompleted.innerText;
    }

    // Disable the completed button
    completedTwo.disabled = true;

    // Update the Activity log
    const today = new Date();
    
    const time = new Intl.DateTimeFormat("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const currentTime = time.format(today);

    // Update Activity Log
    div = document.createElement("div");
    div.className = "bg-[#F4F7FF] p-6 rounded-2xl mb-4 back";
    activityLog.appendChild(div);

    h1 = document.createElement("h1");
    h1.innerText = `You have completed The Task ${completedTwoProblem.innerText} at ${currentTime}.`
    div.appendChild(h1);

    checkAllTasksCompleted();
});

// Completed Task 3
completedThree.addEventListener("click", function(){
    alert('Board updated successfully!');

    // Decrease the task Assigned
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;

    if (parseInt(taskAssigned.innerText) < 10) {
        taskAssigned.innerText = "0" + taskAssigned.innerText;
    }

    // Increase the task Completed
    taskCompleted.innerText = parseInt(taskCompleted.innerText) + 1;

    if (parseInt(taskCompleted.innerText) < 10) {
        taskCompleted.innerText = "0" + taskCompleted.innerText;
    }

    // Disable the completed button
    completedThree.disabled = true;

    // Update the Activity log
    const today = new Date();
    
    const time = new Intl.DateTimeFormat("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const currentTime = time.format(today);

    // Update Activity Log
    div = document.createElement("div");
    div.className = "bg-[#F4F7FF] p-6 rounded-2xl mb-4 back";
    activityLog.appendChild(div);

    h1 = document.createElement("h1");
    h1.innerText = `You have completed The Task ${completedThreeProblem.innerText} at ${currentTime}.`
    div.appendChild(h1);

    checkAllTasksCompleted();
});

// Completed Task 4
completedFour.addEventListener("click", function(){
    alert('Board updated successfully!');

    // Decrease the task Assigned
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;

    if (parseInt(taskAssigned.innerText) < 10) {
        taskAssigned.innerText = "0" + taskAssigned.innerText;
    }

    // Increase the task Completed
    taskCompleted.innerText = parseInt(taskCompleted.innerText) + 1;

    if (parseInt(taskCompleted.innerText) < 10) {
        taskCompleted.innerText = "0" + taskCompleted.innerText;
    }

    // Disable the completed button
    completedFour.disabled = true;

    // Update the Activity log
    const today = new Date();
    
    const time = new Intl.DateTimeFormat("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const currentTime = time.format(today);

    // Update Activity Log
    div = document.createElement("div");
    div.className = "bg-[#F4F7FF] p-6 rounded-2xl mb-4 back";
    activityLog.appendChild(div);

    h1 = document.createElement("h1");
    h1.innerText = `You have completed The Task ${completedFourProblem.innerText} at ${currentTime}.`
    div.appendChild(h1);

    checkAllTasksCompleted();
});

// Completed Task 5
completedFive.addEventListener("click", function(){
    alert('Board updated successfully!');

    // Decrease the task Assigned
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;

    if (parseInt(taskAssigned.innerText) < 10) {
        taskAssigned.innerText = "0" + taskAssigned.innerText;
    }

    // Increase the task Completed
    taskCompleted.innerText = parseInt(taskCompleted.innerText) + 1;

    if (parseInt(taskCompleted.innerText) < 10) {
        taskCompleted.innerText = "0" + taskCompleted.innerText;
    }

    // Disable the completed button
    completedFive.disabled = true;

    // Update the Activity log
    const today = new Date();
    
    const time = new Intl.DateTimeFormat("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const currentTime = time.format(today);

    // Update Activity Log
    div = document.createElement("div");
    div.className = "bg-[#F4F7FF] p-6 rounded-2xl mb-4 back";
    activityLog.appendChild(div);

    h1 = document.createElement("h1");
    h1.innerText = `You have completed The Task ${completedFiveProblem.innerText} at ${currentTime}.`
    div.appendChild(h1);

    checkAllTasksCompleted();
});

// Completed Task 6
completedSix.addEventListener("click", function(){
    alert('Board updated successfully!');

    // Decrease the task Assigned
    taskAssigned.innerText = parseInt(taskAssigned.innerText) - 1;

    if (parseInt(taskAssigned.innerText) < 10) {
        taskAssigned.innerText = "0" + taskAssigned.innerText;
    }

    // Increase the task Completed
    taskCompleted.innerText = parseInt(taskCompleted.innerText) + 1;

    if (parseInt(taskCompleted.innerText) < 10) {
        taskCompleted.innerText = "0" + taskCompleted.innerText;
    }

    // Disable the completed button
    completedSix.disabled = true;

    // Update the Activity log
    const today = new Date();
    
    const time = new Intl.DateTimeFormat("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const currentTime = time.format(today);

    // Update Activity Log
    div = document.createElement("div");
    div.className = "bg-[#F4F7FF] p-6 rounded-2xl mb-4 back";
    activityLog.appendChild(div);

    h1 = document.createElement("h1");
    h1.innerText = `You have completed The Task ${completedSixProblem.innerText} at ${currentTime}.`
    div.appendChild(h1);

    checkAllTasksCompleted();
});

// Check if all tasks are completed
function checkAllTasksCompleted() {
    if (parseInt(taskAssigned.innerText) < 1) {
        alert('Congrats!!! You have completed all the current tasks');
    }
};

// Clear Activity Log
clearHistory.addEventListener("click", function() {
    if (activityLog.children.length > 0) {
        activityLog.innerHTML = '';
        alert('Activity log cleared successfully!');
    } else {
        alert('No activity log to clear.');
    }
});