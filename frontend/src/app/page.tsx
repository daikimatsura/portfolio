import Home from "@/components/pages/Home";
import { getTodos } from "@/services/todo";

const HomePage = async () => {
  const todos = await getTodos();
  console.log(todos);
  return <Home />;
};

export default HomePage;
