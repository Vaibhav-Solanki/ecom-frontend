import React from "react";
import { Col, Row } from "antd";

import ProductCard from "./productCard.jsx";

const App = () => {
  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
      </Row>
    </>
  );
};
export default App;
