import { Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

const content1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`

function index() {
    const router = useRouter();
    const isHome = router.pathname === '/';
    return (
        <div style={{ paddingTop: isHome ? 0 : '7rem' }}>
            <div style={{ background: 'white', padding: isHome ? 0 : '1rem' }}>
                <h1>
                    About Me
                </h1>
                <div className='step-6'>
                    {isHome ? content1.slice(0, 800) + '...' : content1}
                </div>
                {isHome ?
                    <div className='center step-7' style={{ padding: '1rem 0' }}>
                        <Button type='primary' onClick={() => router.push('/profile')}> See More</Button>
                    </div> :
                    <div style={{ padding: '2rem 0' }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                        generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                        Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                        to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,
                        injected humour, or non-characteristic words etc.
                    </div>
                }
            </div>
        </div>
    );
}

export default index;