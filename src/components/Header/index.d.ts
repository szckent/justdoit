declare module '*/Header/index' {
    import { FunctionComponent } from 'react';
  
    interface HeaderProps {
      handleAddTask: (taskTitle: string) => void;
    }
  
    const Header: FunctionComponent<HeaderProps>;
    export { Header };
  }
  
  declare module '*/Header/header.module.css' {
    const styles: { [className: string]: string };
    export default styles;
  }
  
  declare module '*/assets/lexmeet.svg' {
    const src: string;
    export default src;
  }