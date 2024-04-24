import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import Header from "../component/header";
import { RootState } from "../store/store";

function NotePage() {
  const { id } = useParams();
  const post = useSelector((state: RootState) =>
    state.post.post.find((post: RootState) => post.id === id)
  );

  return (
    <div>
      <Header />
      <div className="container" style={{ margin: "0 auto" }}>
        <div className="notePage">
          <h1>{post.title}</h1>
          {post.text ? parse(post.text) : null}
          {post.date}
        </div>
      </div>
    </div>
  );
}

export default NotePage;
