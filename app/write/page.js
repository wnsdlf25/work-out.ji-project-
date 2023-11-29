export default function Write() {
  return (
    <div className="write-box">
      <h4 className="writeTitle">글작성</h4>
      <form action="/api/post/new" method="POST">
        <input className="ipt" name="title" placeholder="글제목" />
        <input className="ipw" name="content" placeholder="글내용" />
        <br />
        <button className="ipb" type="submit">
          작성
        </button>
      </form>
    </div>
  );
}
