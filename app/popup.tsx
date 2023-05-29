import './popup.css'
import Link from 'next/link';
export const IpInfo = ({ip, country, city, timezone, isp}) => {
    return (
        <>  
        <div className="flex flex-row z-10 space-x-10 popup-wrapper">
            <section className='popup_item have_border'>
                <p>IP Address</p>
                <p className='text-black text-2xl'><b>{ip}</b></p>
            </section>
            <section className='popup_item have_border'>
                <p>Location</p>
                <Link target='_blank' href={`https://www.google.com/search?q=${city}`}>
                <p className='text-black text-2xl'><b>{city + ", "}{country}</b></p>
                </Link>
            </section>
            <section className='popup_item have_border'>
                <p>Timezone</p>
                <p className='text-black text-2xl'><b>UTC {timezone}</b></p>
            </section>
            <section className='popup_item'>
                <p>ISP</p>
                <Link target='_blank' href={`https://www.google.com/search?q=${isp}`}>
                <p className='text-black text-2xl'><b>{isp}</b></p>
                </Link>
            </section>
            </div>
        </>
    );
};
