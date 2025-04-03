'use client';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import Image from 'next/image';
import '@/styles/booking.css';

export default function BookingForm() {
    const [service, setService] = useState('');
    const [store, setStore] = useState('');
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');

    return (
        <Container className="booking-container mt-5">

            <h2 className="text-center mb-4">Đặt lịch sửa chữa</h2>
            <h4 className="suggest d-flex justify-content-center">
                <Badge bg="primary">Mời bạn chọn dịch vụ để cửa hàng có thể hỗ trợ chu đáo nhất</Badge>
            </h4>
            <Row className="justify-content-center">
                <Col md={8} className="booking-form p-4 rounded">
                    {/* Step 1: Chọn dịch vụ */}
                    <h5 className="mb-3">1. Chọn dịch vụ</h5>

                    <Form.Select className="mt-3" value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="">Chọn dịch vụ</option>
                        <option value="store">Đặt lịch tại cửa hàng</option>
                        <option value="home">Sửa chữa tận nhà</option>
                    </Form.Select>
                    <Form.Control className="mt-2" placeholder="Chọn cửa hàng sửa chữa" value={store} onChange={(e) => setStore(e.target.value)} />

                    {/* Step 2: Chọn thời gian */}
                    <h5 className="mt-4">2. Chọn thời gian</h5>
                    <Form.Control type="datetime-local" className="mt-2" value={date} onChange={(e) => setDate(e.target.value)} required />
                    <Form.Control as="textarea" className="mt-2" placeholder="Ghi chú của khách hàng" value={note} onChange={(e) => setNote(e.target.value)} />

                    {/* Button Đặt lịch */}
                    <Button className="w-100 mt-4" variant="primary" disabled={!service || !date}>Đặt lịch</Button>
                </Col>
            </Row>
        </Container>
    );
}
