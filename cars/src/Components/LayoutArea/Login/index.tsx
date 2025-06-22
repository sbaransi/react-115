import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Login Page </h1>
      <h2> Please login to your application using the credentials.</h2>
      <button
        onClick={() => {
          localStorage.setItem("isAuthenticate", "true");
          navigate("/");
        }}
      >
        Log in
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("isAuthenticate");
        }}
      >
        Logout
      </button>
    </div>
  );
}
