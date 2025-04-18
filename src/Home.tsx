import Button from "./utils/Button";

// max-w-[537px] max-h-[227px]
function Home() {
    return (
        <div className="heroContainer flex-col space-y-[112px] mt-[62px]">
            <div className="flex justify-between">
                <div className="flex flex-col text-header items-start">
                    <h2 className="max-w-[537px] h-[84px] text-[32px] text-left font-semibold mb-[48px]">Elias is a <span className="text-highlight"> web designer </span>  and <span className="text-highlight"> front-end developer </span></h2>
                    <h3 className="max-w-[464px] h-[50px] text-primary text-left font-regular text-[16px] mb-[36px]">He crafts responsive websites where technologies meet creativity</h3>
                    <Button type="highlight" height="37px" width="148px">Contact Me !!</Button>
                </div>
                <div className="imageContainer">
                    <img className="w-[155px] h-[155px] z-0 absolute mt-[84px]" src="Logo.png" alt="" />
                    <img className="z-10 relative ml-[12px]" src="heroImage.png" alt="" />
                </div>

            </div>
            <div className="quote bg-red-500 justify-center">
                With great power comes great electricity bill
            </div>
        </div>
    )
}

export default Home;