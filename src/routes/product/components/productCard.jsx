import React from "react";
import { Card, Image, Flex, Typography, Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const { Meta } = Card;

function ProductCard({ product }) {
  return (
    <Flex style={{ flexDirection: "column" }}>
      <Image src={product.thumbnail} alt="example" />
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
              {product.brand}
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
              {product.name}
            </Typography>
          </div>
          <div style={{ padding: "5px" }}>
            <Button
              type="text"
              shape="circle"
              icon={
                <HeartOutlined style={{ fontSize: "22px", color: "red" }} />
              }
            />
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
            ₹{product.discounted_price}
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
            ₹{product.price}
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
}
export default ProductCard;
