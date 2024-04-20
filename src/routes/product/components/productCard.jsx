import React from "react";
import { Card, Image, Flex, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const { Meta } = Card;
const App = () => (
  <Flex style={{ flexDirection: "column" }}>
    <Image
      src={
        "https://ik.imagekit.io/itsVaibhav/0080f771-9150-41aa-a095-b0c61fc89e04_Xu4hN9HKX.webp"
      }
      alt="example"
    />
    <div style={{ marginTop: "12px" }}>
      <Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
        <div
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography
            style={{
              color: "#4f5362",
              textTransform: "capitalize",
              fontFamily: "montserrat-semibold, sans-serif",
              fontSize: "12px",
              lineHeight: "15px",
            }}
          >
            bewakoof x dc
          </Typography>
          <Typography
            style={{
              marginTop: "4px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontFamily: "montserrat-regular, sans-serif",
              fontSize: "10px",
              lineHeight: "12px",
            }}
          >
            Unisex Black Dark Knight Embroidered Baseball Cap
          </Typography>
        </div>
        <div style={{ padding: "5px" }}>
          <HeartOutlined style={{ fontSize: "22px" }} />
        </div>
      </Flex>
      <Flex style={{ alignItems: "center" }}>
        <Typography
          style={{
            fontFamily: "montserrat-semibold, sans-serif",
            fontSize: "16px",
            lineHeight: "14px",
            fontWeight: 500,
          }}
        >
          ₹499
        </Typography>
        <Typography
          style={{
            fontFamily: "montserrat-regular, sans-serif",
            fontSize: "12px",
            lineHeight: "12px",
            paddingLeft: "5px",
            textDecoration: "line-through",
            color: "#949494",
          }}
        >
          ₹1299
        </Typography>
      </Flex>
      <div
        style={{
          border: "1px solid rgb(115, 115, 115)",
          background: "white",
          width: "fit-content",
          paddingRight: ".5rem",
          paddingLeft: ".5rem",
          paddingTop: ".25rem",
          paddingBottom: ".25rem",
          marginTop: "12px",
          marginBottom: "12px",
        }}
      >
        <Typography
          style={{
            fontFamily: "montserrat-semibold, sans-serif",
            fontSize: "10px",
            lineHeight: "10px",
            color: "rgb(115, 115, 115)",
          }}
        >
          100% COTTON
        </Typography>
      </div>
    </div>
  </Flex>
);
export default App;
