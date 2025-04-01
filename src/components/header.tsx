'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Badge } from "react-bootstrap";
import '@/styles/header.css'

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <header>
            <div className="title">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col xs={12} md={6}>
                            <div className="Logo">
                                <Link href="/">
                                    <Image src="/img/logo.png" alt="Logo" width={350} height={65} />
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-md-end">
                            <div className="booking d-flex align-items-center mb-2 mb-md-0">
                                <div className="icon">
                                    <i className="fa-solid fa-calendar-days" style={{ color: "#0D6EFD" }}></i>
                                </div>
                                <h4 className="ms-2 desc text-primary mb-0">Đặt lịch sửa chữa</h4>
                            </div>
                            <div className="d-flex align-items-center ms-md-4">
                                <div className="icon">
                                    <i className="fa-solid fa-phone-volume me-1" style={{ color: "#DC3545", }}></i>
                                </div>
                                <h4>
                                    <Badge bg="danger">1800 8888</Badge>
                                </h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="navbar">
                <Navbar bg="primary" expand="lg" variant="light" expanded={expanded}>
                    <Container>
                        {/* Toggle Button */}
                        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} href="/" className="text-light">Trang chủ</Nav.Link>
                                <Nav.Link as={Link} href="/" className="text-light">Giới thiệu</Nav.Link>
                                <Nav.Link as={Link} href="/" className="text-light">Dịch vụ</Nav.Link>
                                <Nav.Link as={Link} href="/" className="text-light">Linh kiện</Nav.Link>
                                <Nav.Link as={Link} href="/" className="text-light">Tin tức</Nav.Link>
                                <Nav.Link as={Link} href="/" className="text-light">Laptop</Nav.Link>
                                <Nav.Link as={Link} href="/" className="text-light">Báo giá</Nav.Link>
                                <Nav.Link as={Link} href="/" className="text-light">Đặt lịch</Nav.Link>
                                <Nav.Link as={Link} href="/" className="text-light">Liên hệ</Nav.Link>
                                <Nav.Link as={Link} href="/" className="text-light">Test online</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}
