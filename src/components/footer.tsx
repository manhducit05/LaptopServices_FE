'use client'

import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="bg-light text-dark pt-4">
            <Container>
                <Row>
                    {/* Cột GIỚI THIỆU */}
                    <Col md={3} sm={6}>
                        <h5>GIỚI THIỆU</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/" className="text-decoration-none text-dark">Về chúng tôi</Link></li>
                            <li><Link href="/" className="text-decoration-none text-dark">Quy trình sửa laptop</Link></li>
                            <li><Link href="/" className="text-decoration-none text-dark">Văn hóa công ty</Link></li>
                            <li><Link href="/" className="text-decoration-none text-primary">Xem thêm</Link></li>
                        </ul>
                    </Col>

                    {/* Cột HỖ TRỢ */}
                    <Col md={3} sm={6}>
                        <h5>HỖ TRỢ</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/" className="text-decoration-none text-dark">Tư vấn mua hàng</Link></li>
                            <li><Link href="/" className="text-decoration-none text-dark">Hướng dẫn đặt hàng</Link></li>
                            <li><Link href="/" className="text-decoration-none text-dark">Hướng dẫn thanh toán</Link></li>
                        </ul>
                    </Col>

                    {/* Cột CHÍNH SÁCH */}
                    <Col md={3} sm={6}>
                        <h5>CHÍNH SÁCH</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/" className="text-decoration-none text-dark">Chính sách bảo hành</Link></li>
                            <li><Link href="/" className="text-decoration-none text-dark">Chính sách đổi trả</Link></li>
                            <li><Link href="/" className="text-decoration-none text-primary">Xem thêm</Link></li>
                        </ul>
                    </Col>

                    {/* Cột LIÊN HỆ */}
                    <Col md={3} sm={6}>
                        <h5>LIÊN HỆ</h5>
                        <p>🏠 Địa chỉ: Số 5 ngõ 178 Thái Hà, Hà Nội</p>
                        <p>📞 Tổng đài: <strong>1800 6024</strong></p>
                        <p>📧 Email: info@24hgroup.com.vn</p>
                    </Col>
                </Row>

                {/* Khu vực bản quyền */}
                <div className="text-center mt-4">
                    <p className="text-muted">© 2025 Công ty Cổ phần 24H Group. Bảo lưu mọi quyền.</p>
                    <div className="d-flex justify-content-center gap-3">

                    </div>
                </div>
            </Container>
        </footer>
    );
}
