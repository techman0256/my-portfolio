type NotesProps = {
    title: string; // domain name
    description: string[]; // list of skills
    className?: string;
  };
  
  function Note({ title, description, className }: NotesProps) {
    return (
      <div className={`w-full max-w-full text-left ${className}`}>
        <div className="text-white text-[16px] font-semibold border-1 border-primary border-b-0 p-2">{title}</div>
        <div className="flex flex-wrap gap-1 border-1 border-primary text-[16px] text-primary font-regular p-1">
          {description.map((skill, index) => (
            <span
              key={index}
              className="px-1 py-1 whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default Note;
  