import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import styles from './styles/App.module.css';

const LOCAL_STORAGE_KEY = 'todo:tasks';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [notification, setNotification] = useState<string>('');

  useEffect(() => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const setTasksAndSave = (newTasks: Task[]) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const addTask = (taskTitle: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    };
    setTasksAndSave([...tasks, newTask]);
    setNotification('Task added successfully!');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  const deleteTaskById = (taskId: string) => {
    setTasksAndSave(tasks.filter(task => task.id !== taskId));
    setNotification('Task removed successfully!');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  const toggleTaskCompletedById = (taskId: string) => {
    setTasksAndSave(tasks.map(task => 
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    ));
    setNotification('Task completed successfully!');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  const updateTaskById = (taskId: string, newTitle: string) => {
    setTasksAndSave(tasks.map(task => 
      task.id === taskId ? { ...task, title: newTitle } : task
    ));
    setNotification('Task updated successfully!');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  return (
    <div className={styles.app}>
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
        onUpdate={updateTaskById}
      />
      {notification && <div className={styles.notification}>{notification}</div>}
    </div>
  );
}

export default App;