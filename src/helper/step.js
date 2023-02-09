import React from "react";
import { Text } from "antd";
import { Button } from 'antd';
import { useRouter } from 'next/router';

const steps = () => {
    const router = useRouter();
    return ([
        {
            selector: '.step-1',
            content: `ini Foto profil saya .... `
        },
        {
            selector: '.step-2',
            content: `Nama saya Anne .... 
            Saya Frontend developer yang keren loohh .....`
        },
        {
            selector: '.step-3',
            content: `Ingin tau saya lebih,, bisa kepoin social media saya yaaa ....`
        },
        {
            selector: '.step-4',
            content: `ini portofolia sayaa....`
        },
        {
            selector: '.step-5',
            content: () => (
                <div>
                    <div style={{ paddingBottom: '1rem' }}>
                        Untuk tau lebih lanjut bisa buka detail portofolio saya
                    </div>
                    <Button className="center" type='primary' onClick={() => router.push('/portofolio')}> See More</Button>
                </div>
            )
        },
        {
            selector: '.step-6',
            content: `ini tentang sayaa yaaakkkk,.....`
        },
        {
            selector: '.step-7',
            content: () => (
                <div>
                    <div style={{ paddingBottom: '1rem' }}>
                        Untuk tau lebih lanjut bisa buka detail profile saya, bisa klik button ini yaaa
                    </div>
                    <Button className="center" type='primary' onClick={() => router.push('/profile')}> See More</Button>
                </div>
            )
        }
    ]);
}
export default steps;
