import type { User } from ".."
import css from "./usersTable.module.css"

export function UsersTable(props: { usersArray: Array<User> }) {
    return <div>
        <table className={css.generalTable}>
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
