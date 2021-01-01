import { Avatar, Col, Row, Typography, Menu } from "antd";

import "assets/styles/header.scss";


const { Link,Text } = Typography;
const { SubMenu } = Menu;

const Header = () => {
    return(
        <Row justify="center" align="top">
            <Col span={10} offset={1} className="avtPersonal">
                <Link className="customizeLink" target="_top">
                    <Avatar src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.0-9/122006578_1496637897187432_2595046316414962635_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=55Qj20Ds2N4AX9ItfAJ&_nc_ht=scontent.fsgn2-6.fna&oh=a08c0e104af8e147eaa3c5ec1e83cc2b&oe=601192B0"/>
                    <Text> Huynh Trong Dao </Text>
                </Link>
                <br />
                <Text type="secondary"> @imgarp13 </Text>
            </Col>
            <Col span={13} >
                <Menu mode="horizontal">

                    <Menu.Item key="Home">
                        Home
                    </Menu.Item>
        
                    <SubMenu key="SubMenu" title="Experiences" >
                        
                        <Menu.Item key="setting:1">Intern</Menu.Item>
                        
                    </SubMenu>

                    <Menu.Item key="Studying">
                        Studying
                    </Menu.Item>

                    <Menu.Item key="About">
                        About
                    </Menu.Item>

                    <Menu.Item key="Quotes">
                        Quotes
                    </Menu.Item>
                    
                </Menu>
            </Col>
        </Row>
        
    )
}

export default Header;