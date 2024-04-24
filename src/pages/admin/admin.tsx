import { Flex, Input } from "antd";
import { useDispatch } from "react-redux";

import btn from "../../assets/addIcons.png";
import Header from "../../component/header";
import { addProduct } from "../../store/reduser/reduser";
import "./admin.css";
import { useState } from "react";

function Admin() {
  const [url, setUrl] = useState("");
  const [nameDate, setNameDate] = useState("");
  const [descDate, setDescDate] = useState("");
  const dispatch = useDispatch();

  const addDate = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    dispatch(
      addProduct({
        id: new Date().getTime(),
        name: nameDate,
        url,
        desc: descDate,
      })
    );
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Flex
          vertical
          align="center"
          gap={20}
          style={{ maxWidth: 300, marginLeft: 450, padding: 50 }}
        >
          <form onSubmit={addDate} className="inputs">
            <Input
              className="urlDate"
              placeholder="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></Input>
            <Input
              className="nameDate"
              placeholder="name"
              onChange={(e) => setNameDate(e.target.value)}
              value={nameDate}
            ></Input>
            <Input
              className="descDate"
              placeholder="description"
              onChange={(e) => setDescDate(e.target.value)}
              value={descDate}
            ></Input>
            <div className="btns">
              <button className="btn" type="submit">
                ADD
                <img src={btn} alt="" className="btnimg" />
              </button>
            </div>
          </form>
        </Flex>
      </div>
    </div>
  );
}

export default Admin;
