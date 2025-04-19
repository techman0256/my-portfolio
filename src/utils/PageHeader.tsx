type PageHeaderProps = {
    pageName: string;
    description?: string;
}

function PageHeader({pageName, description} : PageHeaderProps) {
    return (
        <div className="flex flex-col space-y-4 headerContainer">
            <div className="text-white text-[32px] font-semibold">
                <span className="text-highlight">/</span>{pageName}
            </div>

            {description && (
                <p className="text-white text-[16px] font-regular text-left"> {description} </p>
            )}
        </div>
    )
}

export default PageHeader;