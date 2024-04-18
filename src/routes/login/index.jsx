import React from "react";

import {
  Button,
  Form,
  Grid,
  Input,
  theme,
  Typography,
  Divider,
  message,
} from "antd";

import { LockOutlined, MailOutlined, GoogleOutlined } from "@ant-design/icons";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../services/firebase.config.js";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function LoginPage() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const provider = new GoogleAuthProvider();

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        messageApi.error(error.code).then(console.log);
      });
  };

  const styles = {
    container: {
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.paddingXL}px ${token.padding}px`,
      width: "380px",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center",
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      justifyContent: "center",
      marginTop: "10vh",
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <>
      {contextHolder}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
            <Title style={styles.title}>Sign in</Title>
            <Text style={styles.text}>Welcome back! Log in to continue.</Text>
          </div>
          <Form
            name="normal_signup"
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              extra="Password needs to be at least 8 characters."
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
          <Divider>OR</Divider>
          <Button
            block
            icon={<GoogleOutlined />}
            onClick={() =>
              signInWithPopup(auth, provider).catch((error) => {
                console.log(error);
              })
            }
          >
            Log in with Google
          </Button>
        </div>
      </section>
    </>
  );
}
