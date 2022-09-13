type TProps = {
    title: string,
    children: JSX.Element | JSX.Element[],
}

const SidebarSection: React.FC<TProps> = ({ title, children }) => {
    return (
        <section>
            <div className='px-4'>
                <h2 className='py-2 px-4 text-slate-500'>{title}</h2>
                <ul>
                    {children}
                </ul>
            </div>
        </section>
    )
}

export default SidebarSection;