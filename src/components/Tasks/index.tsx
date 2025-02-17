import { FunctionComponent } from 'react';
import styles from './tasks.module.css';

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TasksProps {
  tasks: Task[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
  onUpdate: (taskId: string, newTitle: string) => void;
}

const Tasks: FunctionComponent<TasksProps> = ({ tasks, onDelete, onComplete, onUpdate }) => {
  return (
    <div className={styles.tasks}>
      {tasks.map(task => (
        <div key={task.id} className={styles.task}>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => onComplete(task.id)}
          />
          <input
            type="text"
            value={task.title}
            onChange={(e) => onUpdate(task.id, e.target.value)}
          />
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export { Tasks };
