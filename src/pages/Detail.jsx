import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);

  const navigate = useNavigate();

  const todo = todos.filter((todo) => todo.id === id)[0];

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
    </div>
  );
};
