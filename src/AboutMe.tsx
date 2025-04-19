import PageHeader from "./utils/PageHeader";
import Title from "./utils/Title";
import Note from "./utils/Note"
import metadata from "./metadata.json"

function AboutMe() {
    const text = metadata.about_me.text;
    const skills = metadata.about_me.skills;
    console.log(skills);
    
    const fun_facts = metadata.about_me.fun_facts;
    return (
        <div className="aboutContainer flex flex-col items-start mt-[53px]">
            <div className="header">
                <PageHeader pageName="about-me" description="Who am I ?"></PageHeader>

            </div>
            <div className="grid grid-cols-2 items-center gap-16">
                <div className="">
                    { text.map((para, index) => {
                        return (
                            <p key={index} className="text-[16px] text-primary text-left font-regular py-4">
                                {para}
                            </p>
                        )
                    })}
                </div>
                <div className="image w-2/3 overflow-hidden">
                    <img
                        src="aboutme.png"
                        className="w-[80%] object-cover border-b border-highlight mx-auto"
                        alt=""
                    />
                </div>
            </div>
            <div className="">
                <Title className="mt-[68px] mb-[48px]">skills</Title>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
                {skills.map((domain, index) => {
                        return <Note key={index} title={domain.domain} description={domain.list} />
                })}
                </div>
            </div>
            <div>
                <Title className="mt-[68px] mb-[48px]">my-fun-facts</Title>
                <div className="grid grid-cols-[2fr_1fr]">
                    <div className="flex flex-wrap gap-4 mx-auto">
                    {fun_facts.map((fact, index) => (
                        <div
                            key={index}
                            className="border-1 border-primary text-primary text-[16px] text-left font-regular mb-2 p-2"
                            dangerouslySetInnerHTML={{ __html: `${fact}` }}
                        />
                        ))}
                    </div> 

                </div>
            </div>

            <div className="line"> <br></br></div>
        </div>
    )
}

export default AboutMe;