import React, { useEffect, useState } from "react";
import { Col, Row, Spin } from "antd";
import * as application from "../../../services/application/products.js";
import * as api from "../../../services/api/index.js";

const PRODUCT_LIMIT = 12;

import ProductCard from "./productCard.jsx";

const App = () => {
  const [page, setPage] = useState({
    offset: 0,
    found: 1,
    limit: PRODUCT_LIMIT,
  });
  const [getData, { loading, error, data }] = api.getProducts();

  const [productList, setProductList] = useState([]);

  function handleScroll() {
    const scroll = window.innerHeight + document.documentElement.scrollTop + 1;
    const height = document.documentElement.scrollHeight;

    if (scroll > height && !loading) {
      setPage((page) => {
        if (page.offset < page.found)
          return { ...page, offset: page.offset + page.limit };
        return page;
      });
    }
  }

  useEffect(() => {
    getData({
      variables: {
        page: {
          offset: page.offset,
          limit: page.limit,
        },
      },
    });
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (data?.products?.found) {
      setPage((page) => {
        if (Number.isInteger(data?.products?.found))
          return { ...page, found: data?.products?.found };
        return page;
      });
      setProductList((el) =>
        el.concat(
          data?.products?.products?.map(application.formatProducts) || [],
        ),
      );
    }
  }, [data]);

  return (
    <>
      <Row gutter={[8, 8]}>
        {productList?.length > 0 &&
          productList?.map(
            (product) =>
              product && (
                <Col span={8} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ),
          )}
      </Row>
      <Spin spinning={loading} fullscreen />
    </>
  );
};
export default App;
