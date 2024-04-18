import React, { useState } from "react";
import { Row, Col, Image, Flex, Typography, Carousel, List, Card } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const data = [
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-common--1--1706616684.gif",
    title: "Bestsellers",
    alt: "Bestsellersimage",
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-New-Arrivals-1706616683.jpg",
    title: "New Arrivals",
    alt: "New Arrivalsimage",
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg",
    title: "Official Collaborations",
    alt: "Official Collaborationsimage",
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop--1706616685.jpg",
    title: "Plus Size",
    alt: "Plus Sizeimage",
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg",
    title: "Customization",
    alt: "Customizationimage",
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif",
    title: "Combos",
    alt: "Combosimage",
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg",
    title: "Vote for Designs",
    alt: "Vote for Designsimage",
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
    title: "Last Sizes Left",
    alt: "Last Sizes Leftimage",
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/image-1668598708.png",
    title: "Coupon Offers",
    alt: "Coupon Offersimage",
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Carousel
        slidesToShow={3}
        slidesToScroll={1}
        arrows={true}
        dotPosition={"bottom"}
        infinite={true}
        style={{ margin: "10px" }}
        autoplay
      >
        <div>
          <Image
            src={
              "https://ik.imagekit.io/itsVaibhav/41ab23c0-bc50-401c-8d7c-083835ea1e65_SBJZwrnDV.webp"
            }
            width={"32vw"}
          />
        </div>
        <div>
          <Image
            src={
              "https://ik.imagekit.io/itsVaibhav/41ab23c0-bc50-401c-8d7c-083835ea1e65_SBJZwrnDV.webp"
            }
            width={"32vw"}
          />
        </div>
        <div>
          <Image
            src={
              "https://ik.imagekit.io/itsVaibhav/41ab23c0-bc50-401c-8d7c-083835ea1e65_SBJZwrnDV.webp"
            }
            width={"32vw"}
          />
        </div>
        <div>
          <Image
            src={
              "https://ik.imagekit.io/itsVaibhav/41ab23c0-bc50-401c-8d7c-083835ea1e65_SBJZwrnDV.webp"
            }
            width={"32vw"}
          />
        </div>
        <div>
          <Image
            src={
              "https://ik.imagekit.io/itsVaibhav/41ab23c0-bc50-401c-8d7c-083835ea1e65_SBJZwrnDV.webp"
            }
            width={"32vw"}
          />
        </div>
        <div>
          <Image
            src={
              "https://ik.imagekit.io/itsVaibhav/41ab23c0-bc50-401c-8d7c-083835ea1e65_SBJZwrnDV.webp"
            }
            width={"32vw"}
          />
        </div>
        <div>
          <Image
            src={
              "https://ik.imagekit.io/itsVaibhav/41ab23c0-bc50-401c-8d7c-083835ea1e65_SBJZwrnDV.webp"
            }
            width={"32vw"}
          />
        </div>
        <div>
          <Image
            src={
              "https://ik.imagekit.io/itsVaibhav/41ab23c0-bc50-401c-8d7c-083835ea1e65_SBJZwrnDV.webp"
            }
            width={"32vw"}
          />
        </div>
      </Carousel>
      <Flex
        style={{
          justifyContent: "center",
          width: "100%",
          fontSize: "11px",
          fontWeight: 600,
        }}
      >
        {data.map((item) => (
          <Flex style={{ flexDirection: "column", textAlign: "center" }}>
            <Image alt="example" width={"150px"} src={item.image_url} />
            <Typography>{item.title}</Typography>
          </Flex>
        ))}
      </Flex>
      <Image
        width={"100%"}
        src={
          "https://ik.imagekit.io/itsVaibhav/825016d3-3cd0-4878-a561-fa5d36c63c03_r85s1pfP4.gif"
        }
      />
      <Flex style={{ flexDirection: "column", alignItems: "center" }}>
        <Typography style={{ fontWeight: 700, fontSize: "20px" }}>
          TRENDING CATEGORIES
        </Typography>
        <Row gutter={[16, 16]}>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
          <Col span={4} style={{}}>
            <Image src="https://ik.imagekit.io/itsVaibhav/d97907c2-dcbb-410b-9433-1feda9296947_kRSytBjJl.webp" />
          </Col>
        </Row>
      </Flex>
      <Image
        width={"100%"}
        src={
          "https://ik.imagekit.io/itsVaibhav/825016d3-3cd0-4878-a561-fa5d36c63c03_r85s1pfP4.gif"
        }
      />
    </>
  );
}

export default App;
