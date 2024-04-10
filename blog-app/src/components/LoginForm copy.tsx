import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form action="/post" method="POST" className="form form--lg">
      <h1 className="form_title">로그인</h1>
      <div className="form_block">
        <label htmlFor="title">이메일</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="form_block">
        <label htmlFor="summary">비밀번호</label>
        <input type="text" name="summary" id="summary" required />
      </div>
      <div className="form_block">
        계정이 없으신가요?
        <Link to="/signup" className="form_link">
          회원가입하기
        </Link>
      </div>
      <div className="form_block">
        <input type="submit" value="로그인" className="form_btn--submit" />
      </div>
    </form>
  );
}
