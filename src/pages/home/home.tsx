import { Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../component/header";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../store/reduser/reduser";
import { RootState } from "../../store/store";

function Home() {
  const nav = useNavigate();

  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => state.posts.post);

  function btnNav(id: number, e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.stopPropagation();
    nav(`/admin?editNav=${id}`);
  }
  function handleDelete(id: number) {
    dispatch(deleteProduct(id));
  }
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div
          className="cards"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingTop: "50px",
            gap: "20px",
          }}
        >
          {post.map((el) => (
            <Card
              key={el.id}
              hoverable
              style={{
                width: 800,
                height: 650,
                fontFamily: "Jersey 15",
              }}
              cover={<img alt="example" src={el.url} />}
            >
              <Card.Meta title={el.name} description={el.desc} />
              <hr />
              <Button
                style={{ margin: "20px 0 0 30px" }}
                onClick={(e) => btnNav(el.id, e)}
              >
                Edit
              </Button>
              <Button
                danger
                onClick={() => handleDelete(el.id)}
                style={{ marginLeft: "20px" }}
              >
                Delete
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
