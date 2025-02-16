import { useState } from 'react';
import styles from './task.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { TbTrash } from 'react-icons/tb';
import { AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';

export function Task({ task, onDelete, onComplete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(task.id, newTitle);
    setIsEditing(false);
  };

  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => onDelete(task.id), 300); // Match the duration of the fadeOut animation
  };

  return (
    <div className={`${styles.task} ${isRemoving ? styles.removing : ''}`}>
      <button 
        className={styles.checkContainer} 
        onClick={() => onComplete(task.id)}
        aria-label={task.isCompleted ? "Mark as incomplete" : "Mark as complete"}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      {isEditing ? (
        <div className={styles.editForm}>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            className={styles.textInput}
          />
          <button 
            className={styles.saveButton} 
            onClick={handleSave}
            aria-label="Save task"
          >
            <AiOutlineSave size={20} />
          </button>
        </div>
      ) : (
        <p className={task.isCompleted ? styles.textCompleted : styles.text}>
          {task.title}
        </p>
      )}

      {!isEditing && (
        <button 
          className={styles.editButton} 
          onClick={handleEdit}
          aria-label="Edit task"
        >
          <AiOutlineEdit size={20} />
        </button>
      )}

      <button 
        className={styles.deleteButton} 
        onClick={handleDelete}
        aria-label="Delete task"
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}