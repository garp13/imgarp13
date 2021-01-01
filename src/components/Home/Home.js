import {  Col, Image, Row, Typography } from 'antd';
// import 'assets/styles/Home.scss';
import 'assets/styles/Home.scss';
import {FacebookOutlined} from '@ant-design/icons';
const { Title,Text } = Typography;


const Home = () => {

    return ( 
     
            <Row>
                <Col span={14} offset={1}>
                    <Title level={5}>Welcome to my personal website</Title>
                    
                        <ul>
                            <li>
                                <Text>4th year student in Ton Duc Thang University</Text>
                            </li>
                            <li>
                                <Text>Student in Computer Science ( COMPUTATIONAL INTELLIGENCE )</Text>
                            </li>
                            <li>
                                <Text>Used to be a Internship in AziWord company </Text>
                            </li>
                        </ul>
                </Col>
                <Col span={7} offset={1}>
                    <ul className="ulWidget">
                        <li>
                            <Title level={4} className="textTitle">Huynh Trong Dao</Title>
                            <ul>
                                <li>
                                    <Text>Studen</Text>
                                </li>
                                <li>
                                    <Text>Internship</Text>
                                </li>
                            </ul>
                            <a href="/">
                                <Image src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t31.0-8/18449586_674895546028342_3587795657939131547_o.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=1ERjWiJYig4AX9kn4zA&_nc_ht=scontent.fsgn2-2.fna&oh=190c1ac3eee9edbd17f6234eae5dcdc1&oe=6013653F" width={200} />
                            </a>
                        </li>
                        <li>
                            <Title level={4} className="textTitle">Follow Me</Title>
                            <a href="https://www.facebook.com/garp13.github.io/" target="_blank" rel="noreferrer">
                                <FacebookOutlined style={{fontSize:'25px'}}/>
                            </a>
                            
                        </li>
                        
        
                    </ul>
                    
                </Col>
            </Row>
   
    )
}

export default Home;