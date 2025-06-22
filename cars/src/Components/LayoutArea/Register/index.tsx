import { useRef, useState } from "react";

// useRef
// direct full access to DOM
// save value between renders ?

export default function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  console.log(
    "This component render?",
    password,
    // @ts-ignore
    userNameRef?.current && (userNameRef?.current?.value as string)
  );
  return (
    <div>
      <h1> Register Page </h1>
      <form action="">
        <input type="text" placeholder="userName" ref={userNameRef} />
        <input type="text" placeholder="password" ref={passwordRef} />
        <input
          type="text"
          placeholder="firstname"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (userNameRef.current) {
              if (userNameRef.current.value.length < 5) {
                alert("User Name too short");
              }
            }

            if (passwordRef.current) {
              console.log(passwordRef.current.value);
            }
          }}
        >
          Register{" "}
        </button>
      </form>
    </div>
  );
}
