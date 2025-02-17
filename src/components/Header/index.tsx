import { FunctionComponent } from 'react';
import styles from './header.module.css';
import lexmeet from '../../assets/lexmeet.svg';

interface HeaderProps {
  handleAddTask: (taskTitle: string) => void;
}

const Header: FunctionComponent<HeaderProps> = ({ handleAddTask }) => {
  return (
    <header className={styles.header}>
      <img src={lexmeet} alt="Logo" />
      <button onClick={() => handleAddTask('New Task')}>Add Task</button>
    </header>
  );
};

export { Header };
