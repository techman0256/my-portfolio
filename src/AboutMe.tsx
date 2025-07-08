import PageHeader from "./utils/PageHeader";
import Title from "./utils/Title";
import Note from "./utils/Note"
import LazyImage from "./utils/LazyImage";
import metadata from "./metadata.json"

function AboutMe() {
    const text = metadata.about_me.text;
    const skills = metadata.about_me.skills;
    const fun_facts = metadata.about_me.fun_facts;
    
    return (
        <div className="aboutContainer flex flex-col items-start mt-[53px] px-4 sm:px-6 md:px-8 lg:px-0">
            <div className="header">
                <PageHeader pageName="About Me" description="Who am I ?"></PageHeader>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 w-full">
                <div className="w-full">
                    {text.map((para, index) => (
                        <p key={index} className="text-[14px] sm:text-[16px] text-primary text-left font-regular py-4">
                            {para}
                        </p>
                    ))}
                </div>
                <div className="image w-full md:w-2/3 max-w-full overflow-hidden mx-auto">
                    <LazyImage
                        src="aboutme.png"
                        className="w-full max-w-full md:w-[80%] object-cover border-b border-highlight mx-auto"
                        alt="Profile picture"
                    />
                </div>
            </div>
            <div className="w-full">
                <div className="mt-[48px] md:mt-[68px] mb-[32px] md:mb-[48px] w-fit">
                    <Title>skills</Title>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                    {skills.map((domain, index) => (
                        <Note key={index} title={domain.domain} description={domain.list} />
                    ))}
                </div>
            </div>
            <div className="w-full">
                <div className="mt-[48px] md:mt-[68px] mb-[32px] md:mb-[48px] w-fit">
                    <Title>my-fun-facts</Title>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] w-full">
                    <div className="flex flex-wrap gap-4 w-full">
                        {fun_facts.map((fact, index) => (
                            <div
                                key={index}
                                className="border-1 border-primary text-primary text-[14px] sm:text-[16px] text-left font-regular mb-2 p-2 w-full md:w-auto"
                                dangerouslySetInnerHTML={{ __html: `${fact}` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="line w-full"> <br /></div>
        </div>
    );
}

export default AboutMe;