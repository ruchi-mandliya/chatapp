import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app);

const App = () => {
  const putData = () => {
    set(ref(db, "users/ruchi"), {
      id: 1,
      name: "ruchi",
      age: 21,
    });
  };
  return (
    <div className="app">
      <h1>Firebase Chat App</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
};

export default App;
