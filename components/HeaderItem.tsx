import { ReactNode } from 'react';

interface HeaderItemProps {
  title:string
  Icon:React.ReactNode
}

function HeaderItem({ title,Icon }: HeaderItemProps) {
  return (
    <div className="group cursor-pointer flex flex-col items-center w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce transition duration-200 ease"/>
        <p className="opacity-0 group-hover:opacity-100 transition duration-500 ease tracking-widest">{title}</p>
    </div>
  );
}

export default HeaderItem;
