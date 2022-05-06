import React from "react";
import { Card, CardGroup, Carousel, Row, Col } from "react-bootstrap/";
import "./Home.scss"

function Home() {
  return (
    <div>
      <Carousel variant="dark" indicators="false">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61DrGuDO5FL._SX3000_.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <CardGroup>
              <Card>
                <Card.Title>Shop in your currency</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202739_379x304_de_DE._SY304_CB409241614_.jpg"
                />
              </Card>
              <Card>
                <Card.Title>Save up to 15% with automatic delivery</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg"
                />
              </Card>
              <Card>
                <Card.Title>New to Amazon?</Card.Title>
                <div className="img-grid">
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/desktopprofilecard-kitchen-low._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Kitchen& Home</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/FashionProfie_card_186x116._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Fashions</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/XCM_CUTTLE_1241637_1282839_SE_3256207_186x116_1X_sv_SE._SY116_CB660065647_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Sports&Outdoors</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/Electronics_186x116._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Electronics</p>
                  </div>
                </div>
              </Card>
              <Card style={{ height: "min-content" }}>
                <Card.Title>Amazon Smile</Card.Title>
                <Card.Text style={{ backgroundColor: "initial" }}>
                  Support a charity of your choice every time you shop.
                </Card.Text>
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
                <Card.Title>Shop in your currency</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202739_379x304_de_DE._SY304_CB409241614_.jpg"
                />
              </Card>
              <Card>
                <Card.Title>Save up to 15% with automatic delivery</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg"
                />
              </Card>
              <Card>
                <Card.Title>New to Amazon?</Card.Title>
                <div className="img-grid">
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/desktopprofilecard-kitchen-low._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Kitchen& Home</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/FashionProfie_card_186x116._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Fashions</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/XCM_CUTTLE_1241637_1282839_SE_3256207_186x116_1X_sv_SE._SY116_CB660065647_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Sports&Outdoors</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/Electronics_186x116._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Electronics</p>
                  </div>
                </div>
              </Card>
              <Card style={{ height: "min-content" }}>
                <Card.Title>Amazon Smile</Card.Title>
                <Card.Text style={{ backgroundColor: "initial" }}>
                  Support a charity of your choice every time you shop.
                </Card.Text>
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
                <Card.Title>Shop in your currency</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202739_379x304_de_DE._SY304_CB409241614_.jpg"
                />
              </Card>
              <Card>
                <Card.Title>Save up to 15% with automatic delivery</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg"
                />
              </Card>
              <Card>
                <Card.Title>New to Amazon?</Card.Title>
                <div className="img-grid">
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/desktopprofilecard-kitchen-low._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Kitchen& Home</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/FashionProfie_card_186x116._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Fashions</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/XCM_CUTTLE_1241637_1282839_SE_3256207_186x116_1X_sv_SE._SY116_CB660065647_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Sports&Outdoors</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/Electronics_186x116._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Electronics</p>
                  </div>
                </div>
              </Card>
              <Card style={{ height: "min-content" }}>
                <Card.Title>Amazon Smile</Card.Title>
                <Card.Text style={{ backgroundColor: "initial" }}>
                  Support a charity of your choice every time you shop.
                </Card.Text>
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
                <Card.Title>Shop in your currency</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202739_379x304_de_DE._SY304_CB409241614_.jpg"
                />
              </Card>
              <Card>
                <Card.Title>Save up to 15% with automatic delivery</Card.Title>
                <Card.Img
                  variant="top"
                  src="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg"
                />
              </Card>
              <Card>
                <Card.Title>New to Amazon?</Card.Title>
                <div className="img-grid">
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/desktopprofilecard-kitchen-low._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Kitchen& Home</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/FashionProfie_card_186x116._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Fashions</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/XCM_CUTTLE_1241637_1282839_SE_3256207_186x116_1X_sv_SE._SY116_CB660065647_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Sports&Outdoors</p>
                  </div>
                  <div className="img-grid-item">
                    <img
                      src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/2021/Electronics_186x116._SY116_CB660023625_.jpg"
                      alt=""
                      style={{ width: "5rem", height: "5rem" }}
                    />
                    <p>Electronics</p>
                  </div>
                </div>
              </Card>
              <Card style={{ height: "min-content" }}>
                <Card.Title>Amazon Smile</Card.Title>
                <Card.Text style={{ backgroundColor: "initial" }}>
                  Support a charity of your choice every time you shop.
                </Card.Text>
              </Card>
            </CardGroup>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
