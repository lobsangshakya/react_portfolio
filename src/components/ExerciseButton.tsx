// components/ExerciseButton.js
interface Props {
    children : string
}

const ExerciseButton = ({ children } : Props ) => {
    return <button>{children}</button>;
  };
  
  export default ExerciseButton;
  