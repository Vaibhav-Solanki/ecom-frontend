import React from "react";
import { Breadcrumb, Layout, theme, Flex, Menu, Select } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Content, Sider } = Layout;

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

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Flex
      style={{
        width: "100%",
        justifyContent: "center",
        minHeight: "80vh",
      }}
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
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Select
                defaultValue="popular"
                variant="borderless"
                style={{
                  minWidth: '160px'
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
                <ProductGrid />
              </Content>
            </Layout>
          </Content>
        </Layout>
      </Flex>
    </Flex>
  );
};
export default App;
