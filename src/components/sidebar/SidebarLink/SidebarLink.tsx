import { Link } from 'react-router-dom';

const SidebarLink: React.FC<{ link: string, text: string }> = ({ link, text }) => {
    return (
        <li>
            <Link to={link} className='relative flex w-full items-center justify-start overflow-hidden rounded-lg transition-all after:absolute after:top-0 after:h-full after:w-0 after:-translate-x-full after:rounded-lg after:bg-base-darkest after:transition-all hover:shadow hover:after:w-full hover:after:translate-x-0 active:scale-95 disabled:pointer-events-none disabled:opacity-60'>
                <div className='z-10 py-2 px-4'>
                    {text}
                </div>
            </Link>
        </li>
    )
}

export default SidebarLink;