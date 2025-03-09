import banner from '../../assets/banner/banner-Photoroom.png';

const Banner = () => {
    return (
        <div className='flex items-center flex-col-reverse md:flex-row px-3 md:px-5 justify-around py-5 md:py-0'>
            <div className='md:space-y-5 space-y-2 md:w-1/2'>
                <h1 className='md:text-4xl text-2xl font-semibold'>New Releases This Week</h1>
                <p className='text-[15px]'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
                <button className='bg-amber-300 cursor-pointer hover:bg-amber-400 transition-all duration-300 text-white font font-semibold px-7 py-1 rounded-sm'>Subscribe</button>
            </div>
            <div className='w-[450px]'>
                <img className='' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;