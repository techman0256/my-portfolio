import PageHeader from "./utils/PageHeader";
import Title from "./utils/Title";
import metadata from "./metadata.json"

const Icons: Record<string, string> = {
    twitter: "/Icons/Twitter.svg",
    github: "/Icons/Github.svg",
    landmark: "/Icons/Landmark.svg",
    linkedin: "/Icons/Linkedin.svg",
    email: "/Icons/Email.svg"
};

function Contacts() {
    const description = metadata.contacts.description;
    const links = metadata.contacts.links;
    return (
        <div className="flex flex-col items-start mt-[53px]">
            <div className="header">
                <PageHeader pageName="contacts" description="Connect with me"></PageHeader>
            </div>
            <div className="grid grid-cols-2 items-center gap-16 mt-12">
                <div className="text-left">
                    {description}
                </div>
                <div className="">
                    Image
                    <div></div>
                </div>
            </div>
            <div>
                <Title className="mt-[68px] mb-2">social-media</Title>
                <div className="flex flex-wrap gap-4">
                {links.map((link, index) => {
                    const iconKey = link.name.toLowerCase();
                    const iconSrc = Icons[iconKey];
                    return (
                        <div key={index} className="flex items-center gap-1">
                            {iconSrc ? (
                                <>
                                    <img
                                        src={iconSrc}
                                        alt={link.name}
                                        className="w-8 h-8 cursor-pointer text-primary group-hover:text-highlight transition-colors"
                                    />
                                    {link.username && (
                                        <a
                                            href={link.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-highlight"
                                            style={{ all: "unset", cursor: "pointer" }}
                                        >
                                            {link.username}
                                        </a>
                                    )}
                                </>
                            ) : (
                                <a
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-highlight"
                                    style={{ all: "unset", cursor: "pointer" }}
                                >
                                    {link.name}
                                </a>
                            )}
                        </div>
                    );
                })}
                </div>
            </div>

            <div className="line"> <br></br></div>
        </div>
    )
}

export default Contacts;