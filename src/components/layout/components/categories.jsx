import * as application from "../../../services/application/category.js";
import { Flex, Menu } from "antd";
import React, { useState } from "react";

export default function App() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const categories = application.getCategories(1);

  return (
    <Flex
      className="topBar"
      style={{ width: "100%", justifyContent: "center" }}
    >
      <Flex
        className="bottomBarWrapper"
        style={{
          alignItems: "center",
          width: "100%",
          maxWidth: "1170px",
          justifyContent: "space-between",
          fontSize: "13px",
          fontFamily: "montserrat, sans-serif",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={categories}
          style={{
            width: "100%",
            textTransform: "uppercase",
            fontWeight: 500,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        />
      </Flex>
    </Flex>
  );
}
