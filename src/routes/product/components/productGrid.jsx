import React, { useEffect } from "react";
import { Col, Row } from "antd";
import * as application from "../../../services/application/products.js";

import ProductCard from "./productCard.jsx";
import product from "../index.jsx";

const App = () => {
  const products = application.getProducts();

  return (
    <>
      <Row gutter={[8, 8]}>
        {products?.length > 0 &&
          products.map((product) => (
            <Col span={8}>
              {" "}
              <ProductCard product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};
export default App;
