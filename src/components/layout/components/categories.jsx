import * as api from "../../../services/api/index.js";
import { Flex, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function formatCategories(category) {
  const row = {
    label: <Link to={`/product/category/${category.id}`}>{category.name}</Link>,
    key: category.id,
  };

  if (category?.sub_category?.length > 0) {
    row.children = category?.sub_category?.map(formatCategories);
  }

  return row;
}

export default function App() {
  const [current, setCurrent] = useState("mail");

  const { loading, error, data: categories } = api.getCategories(1);

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
          selectedKeys={[current]}
          mode="horizontal"
          items={categories?.categories?.map(formatCategories)}
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
