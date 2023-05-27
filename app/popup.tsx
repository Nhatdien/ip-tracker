import './popup.css'

export const IpInfo = ({ip, country, city, timezone, isp}) => {
    return (
        <>  
        <div className="flex flex-row z-10 space-x-10 popup-wrapper">
            <section className='popup_item have_border'>
                <p>IP ADDRESS</p>
                <p className='text-black text-2xl'><b>{ip}</b></p>
            </section>
            <section className='popup_item have_border'>
                <p>Location</p>
                <p className='text-black text-2xl'><b>{city + ", "}{country}</b></p>
            </section>
            <section className='popup_item have_border'>
                <p>Timezone</p>
                <p className='text-black text-2xl'><b>UTC {timezone}</b></p>
            </section>
            <section className='popup_item'>
                <p>ISP</p>
                <p className='text-black text-2xl'><b>{isp}</b></p>
            </section>
            </div>
        </>
    );
};
