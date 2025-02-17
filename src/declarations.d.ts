declare module '*.jsx' {
    import { FunctionComponent } from 'react';
  
    export const Header: FunctionComponent<{ handleAddTask: (taskTitle: string) => void }>;
    export const Tasks: FunctionComponent<{
      tasks: { id: string; title: string; isCompleted: boolean }[];
      onDelete: (taskId: string) => void;
      onComplete: (taskId: string) => void;
      onUpdate: (taskId: string, newTitle: string) => void;
    }>;
  }
  
  declare module '*.module.css' {
    const styles: { [className: string]: string };
    export default styles;
  }
  
  declare module '*.svg' {
    const src: string;
    export default src;
  }