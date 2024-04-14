import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Menu, Layout, Flex, Image, Input } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

const items = [
  {
    label: 'Electronics',
    key: 'mail',
  },
  {
    label: 'Clothing',
    key: 'app',

  },
  {
    label: 'Smartphones',
    key: 'app',

  },
  {
    label: 'Laptops',
    key: 'app',

  },
  {
    label: 'T-shirts',
    key: 'app',

  },
  {
    label: 'Jeans',
    key: 'app',

  },
  {
    label: 'Fiction',
    key: 'app',

  },
  {
    label: 'Non-fiction',
    key: 'app',

  },
  {
    label: 'Books',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

function AppLayout({ children }) {

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: "auto",
          background: "white",
          flexDirection: "column",
          paddingRight: 0,
          paddingLeft: 0,
        }}
        vertical
      >
        <Flex
          className="topBarWrapper"
          style={{
            width: "100%",
            height: "30px",
            background: "#eeeeee",
            fontSize: "10px",
            fontWeight: "500",
            justifyContent: "center",
          }}
        >
          <Flex
            className="topBar"
            style={{
              alignItems: "center",
              width: "100%",
              maxWidth: "1170px",
              justifyContent: "space-between",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Flex className="pull-left">
              <Flex style={{ marginRight: "10px" }}> Offers</Flex>
              <Flex style={{ marginRight: "10px" }}> Fanbook</Flex>
              <Flex style={{ marginRight: "10px" }}>
                <i className="icon_mobile_covers mobileIcon"></i> Download App
              </Flex>
              <Flex style={{ marginRight: "10px" }}> TriBe Membership</Flex>
            </Flex>
            <Flex className="pull-right">
              <Flex style={{ marginLeft: "10px" }}> Contact Us</Flex>
              <Flex style={{ marginLeft: "10px" }}> Track Order</Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{ width: "100%", justifyContent: "center" }}>
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
            <Flex className="topBar">
              <Flex style={{ marginRight: "20px" }}>
                <Image
                  height="20px"
                  src="https://ik.imagekit.io/itsVaibhav/4acbe14b-a006-4a90-8b6b-45c8457fd661_ku4VDf1Q4.svg"
                />
              </Flex>
              <Flex style={{ marginRight: "20px" }}>MEN</Flex>
              <Flex style={{ marginRight: "20px" }}>WOMEN</Flex>
              <Flex style={{ marginRight: "20px" }}>MOBILE COVERS</Flex>
            </Flex>
            <Flex style={{ alignItems: "center" }}>
              <Flex style={{ marginRight: "20px" }} className="miniIconOnHead">
                <Image
                  width="40px"
                  src="https://ik.imagekit.io/itsVaibhav/cb4bac5b-63d7-4e4b-b17b-66a358db499a_TPZRLRQS3.svg"
                />
              </Flex>
              <Input
                size="default size"
                placeholder="Search..."
                prefix={<SearchOutlined />}
                variant="filled"
                style={{ fontSize: "inherit" }}
              />
              <Flex style={{ marginLeft: "20px" }}>
                <Flex style={{ marginRight: "20px" }}>LOGIN</Flex>
                <Flex style={{ marginRight: "20px" }}>
                  <HeartOutlined />
                </Flex>
                <Flex style={{ marginRight: "20px" }}>
                  <ShoppingOutlined />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex style={{ width: "100%", justifyContent: "center" }}>
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
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{
              width: "100%",
              textTransform: 'uppercase',
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-evenly'
            }} />
          </Flex>
        </Flex>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        {children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node, // Add other prop types as needed
};

export default AppLayout;
