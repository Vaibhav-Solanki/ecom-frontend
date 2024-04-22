import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Breadcrumb,
  Layout,
  theme,
  Flex,
  Menu,
  Select,
  Typography,
} from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Content, Sider } = Layout;

import { getCategory, getBrand } from "../../services/api/index.js";

import ProductGrid from "./components/productGrid.jsx";

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

export default function ProductPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { categoryId, brandId } = useParams();
  const [runGetCategory, { data: categoryData }] = getCategory(+categoryId);
  const [runGetBrand, { data: brandData }] = getBrand(+brandId);

  useEffect(() => {
    if (categoryId) runGetCategory();
    if (brandId) runGetBrand();
  }, [categoryId, brandId]);

  return (
    <Flex
      style={{
        width: "100%",
        justifyContent: "center",
        minHeight: "80vh",
      }}
      key={window.location.pathname}
    >
      <Flex
        style={{
          maxWidth: "1170px",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Layout>
          <Content style={{ background: colorBgContainer }}>
            <Flex
              style={{
                margin: "16px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Product</Breadcrumb.Item>
                {categoryId && <Breadcrumb.Item>Category</Breadcrumb.Item>}
                {categoryId && (
                  <Breadcrumb.Item>
                    {categoryData?.category?.name}
                  </Breadcrumb.Item>
                )}
                {brandId && <Breadcrumb.Item>Brand</Breadcrumb.Item>}
                {brandId && (
                  <Breadcrumb.Item>{brandData?.brand?.name}</Breadcrumb.Item>
                )}
              </Breadcrumb>
              <Select
                defaultValue="popular"
                variant="borderless"
                style={{
                  minWidth: "160px",
                }}
                options={[
                  {
                    value: "popular",
                    label: "Popular",
                  },
                  {
                    value: "new",
                    label: "New",
                  },
                  {
                    value: "high",
                    label: "Price : High to Low",
                  },
                  {
                    value: "low",
                    label: "Price : Low to High",
                  },
                ]}
              />
            </Flex>
            {(categoryId || brandId) && (
              <Flex
                style={{
                  margin: "16px",
                  flexDirection: "column",
                }}
              >
                <Typography
                  style={{
                    fontSize: "24px",
                    textAlign: "left",
                    float: "left",
                    font: "700 25px montserrat-bold, sans-serif",
                  }}
                >
                  {categoryId
                    ? categoryData?.category?.name
                    : brandData?.brand?.name}
                </Typography>
                <div
                  style={{
                    width: "117px",
                    height: "2px",
                    backgroundColor: "#fbd139",
                    display: "block",
                    margin: "6px 0 0 2px",
                  }}
                ></div>
              </Flex>
            )}
            <Layout
              style={{
                padding: "24px 0",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                height: "100%",
              }}
            >
              <Sider
                style={{
                  background: colorBgContainer,
                  display: "none",
                }}
                width={200}
                className={"hideLessThenTab"}
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                  }}
                  items={items2}
                />
              </Sider>
              <Content
                style={{
                  padding: "0 24px",
                  minHeight: 280,
                }}
              >
                <ProductGrid categoryId={categoryId} brandId={brandId} />
              </Content>
            </Layout>
          </Content>
        </Layout>
      </Flex>
    </Flex>
  );
}
