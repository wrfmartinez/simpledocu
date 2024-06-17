const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="login-form"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "300px",
          gap: "5px",
        }}
      >
        <label style={{ alignSelf: "flex-start" }} htmlFor="email">
          Email
        </label>
        <input
          style={{ width: "100%", padding: "8px" }}
          type="text"
          name="email"
          placeholder="enter your email"
        />
        <label style={{ alignSelf: "flex-start" }} htmlFor="password">
          Password
        </label>
        <input
          style={{ width: "100%", padding: "8px" }}
          type="password"
          name="password"
          placeholder="enter a password"
        />
        <button style={{ marginTop: "20px" }}>Login</button>
      </div>
    </div>
  );
};

export default Login;
