import Button from "./utils/Button";
import LazyImage from "./utils/LazyImage";
import metadata from "./metadata.json";

// max-w-[537px] max-h-[227px]
function Home() {
    const email = metadata.contacts.links.find(link => link.name.toLowerCase() === 'email')?.username || '';
    return (
        <div className="heroContainer flex-col space-y-[112px] mt-[62px] ">
            <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0">
                <div className="flex flex-col text-header justify-center items-start">
                    <h2 className="max-w-[90%] md:max-w-[537px] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-left font-semibold mb-8 leading-sung">
                        Pranav is a <span className="text-highlight"> Full-Stack developer </span>  and <span className="text-highlight"> 
                            ML enthusiast </span></h2>
                    <h3 className="max-w-[464px] text-primary text-left font-regular text-[16px] mb-[36px]">He crafts responsive websites where technologies meet creativity</h3>
                    <a href={`mailto:${email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button type="highlight">Contact Me !!</Button>
                    </a>
                </div>
                <div className="imageContainer flex flex-col items-center relative w-full sm:max-w-[457px] mx-auto ">
                    <LazyImage className="absolute inset-0 w-[35%] top-[20%] object-contain" src="Logo.png" alt="Logo" />
                    <LazyImage className="absolute z-10 relative w-[100%]" src="heroImage.png" alt="Hero" />
                    <LazyImage className="absolute z-20 left-[77%] top-[40%] sm:top-[35%] md:top-[50%] lg:top-[55%] w-[20%]" src="Dots.png" alt="Decoration dots" />
                    <div className="flex border-1 border-primary my-2 p-2 mx-auto">
                        <div className="w-4 h-4 bg-highlight align-center"> </div>
                        <div className="text-primary text-semibold ml-4 text-[10px] sm:text-[10px] md:text-[13px] lg:text-[16px]">
                            Currently Working on <span className="text-white">  Portfolio </span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Quote Section - only show on md and up */}
            <div className="quote flex flex-col w-fit mx-auto hidden md:flex">
                <div className="relative p-8 border-1 w-fit self-center border-primary">
                    <span className="absolute -top-6 left-5 text-[60px] text-primary">“</span>
                    <span className="text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">With great power comes great electricity bill</span>
                </div>
                <div className="relative p-4 border-1 border-primary self-end w-fit text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]"> 
                    <span className="absolute -top-6 left-5 text-[60px] text-primary">“</span>
                    - Dr. Who
                </div>
            </div>
            <div className="line"> <br></br></div>
        </div>
    )
}

export default Home;