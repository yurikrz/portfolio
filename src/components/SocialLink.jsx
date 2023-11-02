import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLink = () => {
    const socialMediaLinks = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/yurik-rivera-zeled%C3%B3n-066726237/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/yurikrz',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:yurikrz@hotmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/RESUME_YURIK_RIVERA.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]

    return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {
                socialMediaLinks.map(link => (
                    <li key={link.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-light_grey ${link.style}`}>
                        <a 
                            href={link.href}
                            className='flex justify-between items-center w-full text-white'
                            download={link.download}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {link.child}
                        </a>
                    </li>
                ))
            }
           
        </ul>
    </div>
  )
}

export default SocialLink