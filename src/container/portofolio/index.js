import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

const content1 = `Amartha merupakan fintech microfinance marketplace di Indonesia yang telah resmi berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK). Selain memberikan layanan inklusi keuangan atau pinjam meminjam untuk modal usaha bagi pelaku UKM di pedesaan, Amartha juga memiliki misi untuk memberikan akselerasi ekonomi pada usaha mikro sehingga dapat meningkatkan inklusi ekonomi di Indonesia. 
Mari, segera tingkatkan aset Anda bersama Amartha dan turut ciptakan dampak sosial yang nyata. Mendanai di Amartha, Aman dan Terpercaya!`

function index() {
    const router = useRouter();
    const isHome = router.pathname === '/';
    return (
        <div style={{ paddingTop: isHome ? 0 : '7rem' }}>
            <div style={{ background: 'white', padding: isHome ? 0 : '1rem' }}>
                <h3>
                    Mengapa Mendanai di Amartha Microfinance Marketplace
                </h3>
                <div className='step-4'>
                    {isHome ? content1.slice(0, 800) + '...' : content1}
                </div>
                {isHome ?
                    <div className='center step-5' style={{ padding: '1rem 0' }}>
                        <Button type='primary' onClick={() => router.push('/portofolio')}> See More</Button>
                    </div> :
                    <div style={{ padding: '2rem 0' }}>
                        <h3>Tingkatkan Aset Anda Bersama Amartha</h3>
                        Berbuat kebaikan sambil menuai banyak manfaat. Itulah yang dapat Anda rasakan dengan mendanai pelaku usaha mikro bersama Amartha. Selain bagi hasil yang bersaing, mendanai di Amartha akan memberikan peluang bagi sektor UKM untuk dapat maju dan berdaya. Kami memberikan kemudahan bagi Anda untuk melakukan pendanaan, dengan hanya mendaftar melalui website ataupun aplikasi yang telah tersedia di Playstore maupun Appstore, dan Anda dapat melihat para UKM yang dapat Anda danai nantinya.
                        Bersama Amartha untuk mewujudkan kesejahteraan merata bagi kita, Indonesia. Daftar dan Mulai Modalin Perempuan Tangguh.
                    </div>
                }
            </div>
        </div>
    );
}

export default index;