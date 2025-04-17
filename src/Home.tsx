import Button from "./utils/Button";


function Home() {
    return (
        <div className="flex">
            <div className="text-header">
                <h2>Elias is a <span className="text-highlight"> web designer </span>  and <span className="text-highlight"> front-end developer </span></h2>
                <h3 className="text-primary">He crafts responsive websites where technologies meet creativity</h3>

            </div>
            {/* <Button type="highlight">Conact Me !!</Button>
            <Button type="primary">Conact Me !!</Button> */}
        </div>
    )
}

export default Home;