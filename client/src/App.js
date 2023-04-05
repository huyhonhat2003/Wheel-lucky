import { useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList";
import WheelLucky from "./components/WheelLuckey";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/reducer/usersSlice";
import AddUser from "./components/AddUser";
function App() {
  const disatch = useDispatch();
  useEffect(() => {
    disatch(fetchUsers());
  }, [disatch]);
  const dataUser = useSelector((state) => state.users.data);
  const dataWinner = useSelector((state) => state.winner);
  console.log("dataUser", dataUser);
  console.log("dataWinner", dataWinner);
  console.log("render-lai");
  return (
    <div className="App">
      <h1>Wheel lucky</h1>
      <div className="wapper">
        <div>
          <AddUser />
          <UserList title={"Danh sách người chơi"} data={dataUser} />
        </div>

        <WheelLucky className="WheelLucky" users={dataUser} />
        <UserList title={"Danh sách người được chọn"} data={dataWinner} />
      </div>
    </div>
  );
}

export default App;
