import { useState } from "react"

type User = { userName: string, userLastName: string, userEmail: string, userPhone: string }

export default function UsersPage() {
    const [users, setUsers] = useState<Array<User>>([])
    function addUserHandler(newUser: User) {
        setUsers([...users, newUser])
    }
    return <div>
        <AddUser handler={addUserHandler} />
        <UsersTable usersArray={users} />
    </div >
}

function UsersTable(props: { usersArray: Array<User> }) {
    return <div>
        <table id="customers">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            {props.usersArray.map(u => {
                return <tr>
                    <td>{u.userName}</td>
                    <td>{u.userLastName}</td>
                    <td>{u.userEmail}</td>
                    <td>{u.userPhone}</td>
                </tr>
            })}
        </table>
    </div>
}

function AddUser(props: { handler: Function }) {
    const [userName, setUserName] = useState("Enter User Name")
    const [userLastName, setUserLastName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [phoneError, setPhoneError] = useState("")

    function clearForm() {
        setUserName("")
        setUserLastName("")
        setUserEmail("")
        setUserPhone("")
    }

    return <div>
        <form>
            <input value={userName} placeholder="Name" type="text" onChange={(event) => { setUserName(event.target.value) }}></input>
            <input value={userLastName} placeholder="Last Name" type="text" onChange={(event) => { setUserLastName(event.target.value) }}></input>
            <input value={userEmail} placeholder="Email" onChange={(event) => { setUserEmail(event.target.value) }}></input>
            <input value={userPhone} placeholder="Phone" type="text" onChange={(event) => {
                setUserPhone(event.target.value)
                if (event.target.value.length !== 10) setPhoneError("Phone is invalid")
                else setPhoneError("")
            }}></input>
            <span style={{ color: "red" }}>{phoneError} </span>
            <button type="button" onClick={() => {
                if (!userName || !userLastName || !userEmail || !userPhone) return;
                props.handler({ userName, userLastName, userEmail, userPhone })
                clearForm()
            }}>Add</button>
        </form>
    </div>
}