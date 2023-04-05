function UserIem({user}) {
    const style={color:"white", listStyle:"number",padding:"10px"}
    return (
        <li style={style}>{user.Username}</li>
    );
}

export default UserIem;