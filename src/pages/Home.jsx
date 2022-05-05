import React from 'react';
import { Card, CardGroup, Carousel } from 'react-bootstrap/';

function Home() {
    return (
        <div >
            <Carousel variant="dark" indicators="false" >
                <Carousel.Item  >
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61DrGuDO5FL._SX3000_.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <CardGroup>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202739_379x304_de_DE._SY304_CB409241614_.jpg" />
                            </Card>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg" />
                            </Card>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg" />
                            </Card>
                        </CardGroup>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/61xlajJ39EL._SX3000_.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <CardGroup>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202739_379x304_de_DE._SY304_CB409241614_.jpg" />
                            </Card>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg" />
                            </Card>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg" />
                            </Card>
                        </CardGroup>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/719VXi0SFmL._SX3000_.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <CardGroup>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202739_379x304_de_DE._SY304_CB409241614_.jpg" />
                            </Card>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg" />
                            </Card>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg" />
                            </Card>
                        </CardGroup>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/I/71whyYk1FNL._SX3000_.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <CardGroup>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202739_379x304_de_DE._SY304_CB409241614_.jpg" />
                            </Card>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg" />
                            </Card>
                            <Card>
                                <Card.Title>Card title</Card.Title>
                                <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg" />
                            </Card>
                        </CardGroup>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home