/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import img1 from '../../../assets/images/portfolio/nmixx_all.png';
import img2 from '../../../assets/images/portfolio/sticky-note-681016.jpg';
import img3 from '../../../assets/images/portfolio/neourban-1734494.jpg';
import img4 from '../../../assets/images/portfolio/img4.jpg';
import img5 from '../../../assets/images/portfolio/img5.jpg';
import img6 from '../../../assets/images/portfolio/img6.jpg';

const PortfolioComponent = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Portfolio</h1>
                            {/*<h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>*/}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">My recent works</h2>
                            <h6 className="subtitle">example</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="4">
                            <Card className="card-shadow">
                                <a href="http://nmixx.ericshim.me" className="img-ho"><img className="card-img-top" src={img1} alt="wrappixel kit" /></a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">NMIXX Fan Page</h5>
                                    <p className="m-b-0 font-14">simple REACT practice</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <a href="http://footprint.ericshim.me/login" className="img-ho"><img className="card-img-top" src={img2} alt="wrappixel kit" /></a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Eric's Guest Book</h5>
                                    <p className="m-b-0 font-14">MongoDB & NodeJS & Express</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <a href="https://github.com/izonejangwonyoung/programmers" className="img-ho"><img className="card-img-top" src={img3} alt="wrappixel kit" style={{width:'350px',height:'380px'}} /></a>
                                <CardBody>
                                    <h5 className="font-medium m-b-0">Algorithm Study</h5>
                                    <p className="m-b-0 font-14">Baekjoon + Programmers</p>
                                </CardBody>
                            </Card>
                        </Col>
                        {/*<Col md="4">*/}
                        {/*    <Card className="card-shadow">*/}
                        {/*        <a href="#" className="img-ho"><img className="card-img-top" src={img4} alt="wrappixel kit" /></a>*/}
                        {/*        <CardBody>*/}
                        {/*            <h5 className="font-medium m-b-0">Zukandre Phoniex</h5>*/}
                        {/*            <p className="m-b-0 font-14">Branding</p>*/}
                        {/*        </CardBody>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                        {/*<Col md="4">*/}
                        {/*    <Card className="card-shadow">*/}
                        {/*        <a href="#" className="img-ho"><img className="card-img-top" src={img5} alt="wrappixel kit" /></a>*/}
                        {/*        <CardBody>*/}
                        {/*            <h5 className="font-medium m-b-0">Sionage Mokcup</h5>*/}
                        {/*            <p className="m-b-0 font-14">Wll Mockup</p>*/}
                        {/*        </CardBody>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                        {/*<Col md="4">*/}
                        {/*    <Card className="card-shadow">*/}
                        {/*        <a href="#" className="img-ho"><img className="card-img-top" src={img6} alt="wrappixel kit" /></a>*/}
                        {/*        <CardBody>*/}
                        {/*            <h5 className="font-medium m-b-0">Hard Cover Book Mock</h5>*/}
                        {/*            <p className="m-b-0 font-14">Book Covers</p>*/}
                        {/*        </CardBody>*/}
                        {/*    </Card>*/}
                        {/*</Col>*/}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PortfolioComponent;
