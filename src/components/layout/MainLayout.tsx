
import { Layout,theme } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const { Header, Content, } = Layout;

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Layout style={{height:'100vh'}}>
     
        <Sidebar></Sidebar>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >

              
             {/* this is main content  */}
            <Outlet></Outlet>


            </div>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
