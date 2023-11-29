export default function Register() {
  return (
    <div>
      <form className="registerForm" method="POST" action="/api/auth/signup">
        <br />
        <h4 className="registerTitle">회원가입 페이지</h4>
        <input className="sign" name="name" type="text" placeholder="name" />
        <input className="sign" name="email" type="text" placeholder="email" />
        <input
          className="sign"
          name="password"
          type="password"
          placeholder="passweor"
        />
        <button className="sign" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
}
