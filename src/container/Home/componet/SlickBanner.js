import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '30rem',
};
const App = () => {
    return (
        <Carousel autoplay>
            <div style={contentStyle}>
                <img src="/icon/banner1.png" style={{ width: '100%' }} />
            </div>
            <div style={contentStyle}>
                <img src="/icon/banner2.png" style={{ width: '100%' }} />
            </div>
            <div style={contentStyle}>
                <img src="/icon/banner3.png" style={{ width: '100%' }} />
            </div>
        </Carousel>
    );
};
export default App;