import UserIem from "../UserItem";
import './style.css'
function UserList({title,data}) {
    return (
        <div className="UserList">
            <h1 className="UserList-title">{title}</h1>
            <ul>
            {data.map(user=>(
                <UserIem key={user._id} user={user}/>
            ))}
            </ul>
        </div>
    );
}

export default UserList;