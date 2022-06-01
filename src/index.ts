import '../public/style.css';
type TaskType = { date: Date; content: string };
let taskList: TaskType[] = [];
let doneList: TaskType[] = [];
type ModeType = 'TODO' | 'DONE';
let currentMode: ModeType = 'TODO';
const $text_box = document.querySelector(
    'input[type="text"]'
) as HTMLInputElement;

const $form = document.querySelector('.form') as HTMLFormElement;
const $ul = document.querySelector('.task-list') as HTMLUListElement;
const $todo = document.querySelector('.menu.todo') as HTMLDivElement;
const $done = document.querySelector('.menu.done') as HTMLDivElement;

const deleteDone = (task: TaskType): void => {
    doneList = doneList.filter((_task: TaskType) => _task.date !== task.date);
};
const renderDone = (): void => {
    $ul.innerHTML = '';
    doneList.map((task: TaskType) => {
        const $li = document.createElement('li');
        $li.textContent = task.content;
        $li.addEventListener('click', () => {
            deleteDone(task);
            renderDone();
        });
        $ul.appendChild($li);
    });
};
const deleteTask = (task: TaskType): void => {
    taskList = taskList.filter((_task: TaskType) => _task.date !== task.date);
};

const renderTask = (): void => {
    $ul.innerHTML = '';
    taskList.map((task: TaskType) => {
        const $li = document.createElement('li');
        $li.textContent = task.content;
        $li.addEventListener('click', () => {
            doneList.push(task);
            deleteTask(task);
            renderTask();
        });
        $ul.appendChild($li);
    });
};
const appendTask = (): void => {
    const task_text = $text_box.value;
    const date = new Date();
    if (task_text === '') {
        return;
    }
    taskList.push({ date, content: task_text });
    $text_box.value = '';
};
$form.addEventListener('submit', (event: Event) => {
    appendTask();
    if (currentMode === 'TODO') {
        renderTask();
    }
    event.preventDefault();
});

$todo.addEventListener('click', () => {
    if (currentMode === 'TODO') return;
    currentMode = 'TODO';
    $todo.classList.add('current');
    $done.classList.remove('current');
    $ul.classList.remove('done');
    $form.classList.remove('done');
    renderTask();
});
$done.addEventListener('click', () => {
    if (currentMode === 'DONE') return;
    currentMode = 'DONE';
    $done.classList.add('current');
    $todo.classList.remove('current');
    $ul.classList.add('done');
    $form.classList.add('done');
    renderDone();
});
