import { Col, Row } from 'antd';
import React from 'react';
import Content1 from '../../helper/content'

const index = () => {
    return (
        <div style={{ padding: '2rem 8rem', background: '#650F79', color: '#FFF' }}>
            <Row>
                <Col span={16}>
                    <Row>
                        <Col span={8}>
                            <p style={{ fontWeight: 'bold' }}>Tentang Kami</p>
                            <p style={{ fontWeight: 'bold' }}>Dampak Sosial</p>
                            <p style={{ fontWeight: 'bold' }}>Cara Kerja</p>
                        </Col>
                        <Col span={8}>
                            <p style={{ fontWeight: 'bold' }}>Hubungi Kami</p>
                            <p style={{ fontWeight: 'bold' }}>Karir</p>
                            <p style={{ fontWeight: 'bold' }}>FAQs</p>
                        </Col>
                        <Col span={8}>
                            <p style={{ fontWeight: 'bold' }}>Pelayanan pemberi pinjaman</p>
                            <p style={{ fontWeight: 'bold' }}>Syarat dan Ketentuan</p>
                            <p style={{ fontWeight: 'bold' }}>Blog Amartha</p>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <h4 style={{ fontWeight: 'bold' }}>PT. AMARTHA MIKRO FINTEK</h4>
                    <p style={{ margin: 0 }}>Jl. Ampera Raya No.16</p>
                    <p style={{ margin: 0 }}>Jakarta Selatan, Indonesia 12560</p>
                    <p style={{ margin: 0 }}>Call Center: 150170</p>
                    <p style={{ margin: 0 }}>WhatsApp: 0811-1915-0170</p>
                    <p style={{ margin: 0 }}>Customer Support: support@amartha.com</p>
                    <p style={{ margin: 0 }}>Jam Layanan: Senin - Minggu, 07.00 - 20.00 WIB</p>
                </Col>
            </Row>
            <Content1 />
        </div>
    );
};

export default index;