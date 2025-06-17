
interface Props {
    children : String
}

const My_app = ({ children } : Props) => {
  return <div className="my-app">{ children }</div>;
};

export default My_app;
