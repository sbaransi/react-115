import { useState } from "react"
import { AddUser } from "./add-user"
import { UsersTable } from "./users-table"


export type User = { userName: string, userLastName: string, userEmail: string, userPhone: string }

export default function UsersPage() {
    const [users, setUsers] = useState<Array<User>>([])
    function addUserHandler(newUser: User) {
        setUsers([...users, newUser])
    }
    return <div>
        <AddUser handler={addUserHandler} />
        <div className="nicole-bg">
            is this has background?
        </div>
        <UsersTable usersArray={users} />

    </div >
}


