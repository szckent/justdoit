declare module '*/Tasks/index' {
    import { FunctionComponent } from 'react';
  
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
  
    const Tasks: FunctionComponent<TasksProps>;
    export { Tasks };
  }
  
  declare module '*/Tasks/tasks.module.css' {
    const styles: { [className: string]: string };
    export default styles;
  }