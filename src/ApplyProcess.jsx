import { Container,Row,Col } from "react-bootstrap";


function ApplyProcess(){
    return(
        <>
            <Container fluid className="border border-dark mt-1" style={{height:"auto",backgroundColor:"#2042e3"}}>
                <Container>
                    <Row className="my-5 text-white">
                        <Col className="border border-dark d-flex">
                            <div className="pt-4"> 
                                <svg className="border border-dark rounded-circle dark p-2 " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 128 128">
                                <path fill="#fff" d="M87 59.7c0 12.7-10.3 23-23 23s-23-10.3-23-23V32.3l46 5.5V59.7zM101.1 115.6C93.7 102.7 79.9 94 64 94h0c-15.9 0-29.7 8.7-37.1 21.6L27 119h74L101.1 115.6z"></path><path fill="#444b54" d="M26.9 118.6c-.5 0-1-.1-1.5-.4-1.4-.8-1.9-2.6-1.1-4.1C32.4 99.9 47.6 91 64 91s31.6 8.9 39.7 23.1c.8 1.4.3 3.3-1.1 4.1s-3.3.3-4.1-1.1C91.4 104.7 78.2 97 64 97c-14.2 0-27.4 7.7-34.5 20.1C29 118 28 118.6 26.9 118.6zM77.6 29.1l-.4-.6c-2.9-4.1-7.7-6.6-12.7-6.6H56c-12.7 0-23 10.3-23 23v0c0 1.7 1.3 3 3 3h5.2c.1 0 .1 0 .2 0 11.5 0 23.2 0 31.6-7.5v.1c.4-.4.8-.7 1.1-1.1 1.1-1.2 3-1.4 4.2-.3 1.3 1.1 1.4 3.1.2 4.4-.5.5-.9.9-1.4 1.4-1.3 1.3-.8 3.5.9 4.2l0 0c1 .4 2.1.6 3.2.7 1.5.2 2.7 1.4 2.7 3v6.8c0 10.6-8 19.7-18.6 20.4C53.8 80.8 44.1 71.6 44 60.1c0-1.6-1.2-3-2.8-3.1-1.7-.1-3.2 1.3-3.2 3 0 14.3 11.7 26 26 26 13.9 0 25.3-10.9 26-24.7 0-.1 0-.2 0-.3V47v-3-1C90 35.8 84.6 29.9 77.6 29.1z"></path>
                                </svg>
                            </div>
                            <div className="ms-3">
                                <h4 className="border border-danger py-3">Register Your Account</h4>
                                <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
                            </div>
                        </Col>

                        <Col className="border border-dark"></Col>
                        <Col className="border border-dark"></Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default ApplyProcess;