'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "@/styles/home.css"

export default function Home() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <Container className='mt-5'>

      <section className='carousel'>
        <Row>
          <Col xs={12} md={7}>
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image src="/img/slide1.webp" className="d-block w-100" alt="Slide 1" width={800} height={400} />
                </div>
                <div className="carousel-item">
                  <Image src="/img/slide-2.webp" className="d-block w-100" alt="Slide 2" width={800} height={400} />
                </div>
                <div className="carousel-item">
                  <Image src="/img/slide-3.webp" className="d-block w-100" alt="Slide 3" width={800} height={400} />
                </div>
                <div className="carousel-item">
                  <Image src="/img/slide-4.webp" className="d-block w-100" alt="Slide 3" width={800} height={400} />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <Image className='mb-2' src="/img/ads1.jpg" alt='ads-1' width={400} height={200} />
            <Image src="/img/ads2.jpg" alt='ads-2' width={400} height={200} />
          </Col>
        </Row>
      </section>

      <section className="warranty-section mt-5">
        <div className="container">
          {/* Hàng đầu - Bảo hành */}
          <div className="row align-items-center bg-primary text-white py-4 px-3 rounded" >
            <div className="d-flex col-md-6 gap-3" style={{ paddingLeft: "100px" }}>
              <i className="fa-solid fa-ranking-star" style={{ fontSize: "55px" }}></i>
              <div>
                <h4 className="fw-bold">SỐ 1 VỀ BẢO HÀNH</h4>
                <p>& SỬA CHỮA TẠI VIỆT NAM</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-between">
                <div className="text-center">
                  <i className="fa-solid fa-clock"></i>
                  <p>Bảo hành 6 đến 36 tháng</p>
                </div>
                <div className="text-center">
                  <i className="fa-solid fa-fire"></i>
                  <p>Bảo hành cả cháy nổ</p>
                </div>
                <div className="text-center">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                  <p>Chính sách bảo hành</p>
                </div>
                <div className="text-center">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <p>Hệ thống toàn quốc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hàng thứ hai - Bảo dưỡng */}
          <div className="row mt-2">
            <div className="col text-center bg-warning py-3">
              <span className="fw-bold">Bạn muốn laptop của bạn bền hơn - Hãy bảo dưỡng định kỳ</span>
              <button className="btn btn-light ms-3">Xem thêm</button>
            </div>
          </div>
        </div>
      </section>

      <section className='chooseBrand-section mt-5'>
        <h2 className='text-center text-primary'>Chọn Sửa chữa Laptop 24h.com</h2>
        <div className='row align-items-center justify-content-between'>
          <div className='new col-6 col-md-3 bg-primary'>
            <img src="/img/home/news1.webp" alt='news' />
            <div className='bg-primary pt-3 pb-3'>
              <div className='desc text-center pt-3 pb-3'>
                <h5 className='text-primary'> Dịch vụ sửa chữa Laptop, Macbook uy tín</h5>
                <button className='btn btn-outline-primary'>Xem thêm</button>
              </div>
            </div>
          </div>
          <div className='new col-6 col-md-3 bg-primary'>
            <img src="/img/home/news2.webp" alt='news' />
            <div className='bg-primary pt-3 pb-3'>
              <div className='desc text-center pt-3 pb-3'>
                <h5 className='text-primary'> Nơi duy nhất bạn có thể xem trực tiếp quá trình sửa chữa</h5>
                <button className='btn btn-outline-primary'>Xem thêm</button>
              </div>
            </div>
          </div>
          <div className='new col-6 col-md-3 bg-primary'>
            <img src="/img/home/news3.webp" alt='news' />
            <div className='bg-primary pt-3 pb-3'>
              <div className='desc text-center pt-3 pb-3'>
                <h5 className='text-primary'> Cam kết của sửa chữa laptop 24h</h5>
                <button className='btn btn-outline-primary'>Xem thêm</button>
              </div>
            </div>
          </div>
          <div className='new col-6 col-md-3 bg-primary'>
            <img src="/img/home/news4.webp" alt='news' />
            <div className='bg-primary pt-3 pb-3'>
              <div className='desc text-center pt-3 pb-3'>
                <h5 className='text-primary'> Hệ thống cửa hàng trải rộng khắp toàn quốc</h5>
                <button className='btn btn-outline-primary'>Xem thêm</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section mt-5">
        <Container>
          <h2 className="text-center text-white mb-4">
            15 NĂM TẬN TÂM PHỤC VỤ, UY TÍN VÀ CHUYÊN NGHIỆP
          </h2>
          <Row>
            <Col md={6} className="mb-3">
              <div className="service-box">
                <Image src="/img/home/service1.jpg" alt="Báo giá trước" width={500} height={300} />
                <div className="service-content">
                  <h3><span>1</span> BÁO GIÁ TRƯỚC</h3>
                  <p>Việc báo giá trước khi sửa chữa là một phần trong quy trình phục vụ chuyên nghiệp của chúng tôi.</p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="service-box">
                <Image src="/img/home/service2.jpg" alt="Ký tên linh kiện" width={500} height={300} />
                <div className="service-content">
                  <h3><span>2</span> KÝ TÊN LÊN LINH KIỆN, CHỤP ẢNH MÁY</h3>
                  <p>Bạn sẽ ký tên, chụp ảnh lên linh kiện trước khi bàn giao cho chúng tôi trong trường hợp phải để lại máy.</p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="service-box">
                <Image src="/img/home/service3.jpg" alt="Xem trực tiếp sửa chữa" width={500} height={300} />
                <div className="service-content">
                  <h3><span>3</span> XEM TRỰC TIẾP SỬA CHỮA</h3>
                  <p>Bạn được xem trực tiếp trong lúc sửa chữa giúp bạn yên tâm với dịch vụ của chúng tôi.</p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="service-box">
                <Image src="/img/home/service4.jpg" alt="Hoàn tiền nếu không hài lòng" width={500} height={300} />
                <div className="service-content">
                  <h3><span>4</span> HOÀN TIỀN 100% NẾU KHÔNG HÀI LÒNG</h3>
                  <p>Chỉ cần bạn thấy không hài lòng, chúng tôi sẽ hoàn lại 100% chi phí sửa chữa.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}
