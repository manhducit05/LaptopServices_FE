'use client'
import Head from "next/head";
import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from "react";


const SpaLaptop = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Chỉ render trên client sau khi JavaScript đã chạy
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Không render nội dung phụ thuộc vào client trước khi JS chạy
    }
    return (
        <>
            <Head>
                <title>Dịch Vụ Spa Laptop - Vệ Sinh Bảo Dưỡng Laptop</title>
                <meta name="description" content="Dịch vụ Spa Laptop tại Sửa chữa Laptop 24h, bảo dưỡng laptop, vệ sinh laptop định kỳ để tối ưu hiệu suất và kéo dài tuổi thọ thiết bị." />
            </Head>

            <div className="container mt-5">
                <h1 className="text-center mb-4">Dịch Vụ Spa Laptop - Vệ Sinh Bảo Dưỡng Laptop</h1>

                <section>
                    <h2>1. Khái niệm Spa Laptop</h2>
                    <p>
                        Spa Laptop là toàn bộ quá trình vệ sinh, bảo dưỡng laptop bao gồm các bước: thổi bụi, vệ sinh bề mặt laptop, lau khô keo tản nhiệt cũ, tra kem tản nhiệt mới, tra mỡ quạt, vệ sinh khe tản nhiệt ống đồng, vệ sinh cánh quạt, bàn phím, loại bỏ các vết bẩn cứng đầu…
                    </p>
                    <p>
                        Bạn nên thực hiện Spa Laptop từ 6 - 12 tháng tùy theo tần suất sử dụng và môi trường làm việc để đảm bảo máy luôn hoạt động ở trạng thái tốt nhất.
                    </p>
                    <div className="d-flex justify-content-center">
                        <img src="/img/news/1.jpeg" alt="news" />
                    </div>
                </section>

                <section>
                    <h2>2. Các dịch vụ Spa Laptop cung cấp</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Spa Laptop Cơ Bản</h3>
                            <ul>
                                <li>Vệ sinh bề mặt laptop, tản nhiệt laptop</li>
                                <li>Bảo dưỡng phần cứng: CPU, VGA, RAM, cổng kết nối</li>
                                <li>Bảo dưỡng bản lề</li>
                            </ul>
                            <p>Giá tham khảo: 100.000 VNĐ</p>
                        </div>
                        <div className="col-md-6">
                            <h3>Spa Laptop Nâng Cao</h3>
                            <ul>
                                <li>Toàn bộ các dịch vụ của gói Spa Laptop cơ bản</li>
                                <li>Kiểm tra, đánh giá phần mềm, dọn rác, quét diệt virus miễn phí</li>
                                <li>Hỗ trợ ship 1 chiều trong bán kính 5km</li>
                            </ul>
                            <p>Giá tham khảo: 200.000 - 300.000 VNĐ</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <img src="/img/news/2.jpeg" alt="news" />
                    </div>

                </section>

                <section>
                    <h2>3. Quy trình Spa Laptop tại Sửa chữa Laptop 24h</h2>
                    <p>Quy trình Spa Laptop tại Sửa chữa Laptop 24h diễn ra qua các bước:</p>
                    <ol>
                        <li>Tiếp nhận nhu cầu khách hàng.</li>
                        <li>Kiểm tra tổng quát và test các bộ phận máy.</li>
                        <li>Tiến hành vệ sinh bảo dưỡng.</li>
                        <li>Hoàn thiện, kiểm tra lại và bàn giao máy cho khách hàng.</li>
                    </ol>
                    <div className="d-flex justify-content-center">
                        <img src="/img/news/3.jpeg" alt="news" />
                    </div>

                </section>

                <section>

                    <h2>4. Nguy cơ khi không vệ sinh bảo dưỡng laptop thường xuyên</h2>
                    <div className="d-flex justify-content-center">
                        <img src="/img/news/5.jpg" alt="news" />
                    </div>
                    <ul>
                        <li>Máy nóng bất thường, treo đơ, giật lag</li>
                        <li>Côn trùng làm tổ trong máy</li>
                        <li>Gãy bản lề, hỏng màn hình</li>
                        <li>Quạt tản nhiệt kêu to, gãy hỏng cánh</li>
                        <li>Máy bật không lên, mất dữ liệu</li>
                        <li>Linh kiện nhanh xuống cấp</li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <img src="/img/news/6.jpg" alt="news" />
                    </div>
                </section>

                <section>
                    <h2>5. Một số câu hỏi thường gặp</h2>
                    <div className="d-flex justify-content-center">
                        <img src="/img/news/7.jpg" alt="news" />
                    </div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Spa Laptop có làm mất bảo hành không?

                            </Accordion.Header>
                            <Accordion.Body>
                                Trả lời: Thao tác tháo máy chắc chắn sẽ làm rách tem và mất bảo hành. Do đó, nếu laptop còn bảo hành, kỹ thuật sẽ chỉ vệ sinh các bộ phận bên ngoài để không ảnh hưởng đến bảo hành của khách.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Bao lâu nên tới Spa Laptop 1 lần?</Accordion.Header>
                            <Accordion.Body>
                                Trả lời: Người dùng nên vệ sinh bảo dưỡng laptop định kỳ 6 - 12 tháng/lần tùy theo tần suất sử dụng và môi trường làm việc của laptop.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Có nên tự vệ sinh laptop thường xuyên?
                            </Accordion.Header>
                            <Accordion.Body>
                                Trả lời: Có. Người dùng nên vệ sinh laptop thường xuyên để hạn chế tối đa bụi bẩn, mẩu thức ăn mắc kẹt lâu ngày trong laptop.

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className="d-flex justify-content-center">
                        <img src="/img/news/8.jpg" alt="news" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default SpaLaptop;
