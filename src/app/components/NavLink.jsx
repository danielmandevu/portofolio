import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({link}) => {
    const pathName = usePathname();
  return (
    <Link className={`hover:bg-[#ff014f] h-0.5 ${pathName === link.url && "h-0.5 bg-[#ff014f]"}`} href={link.url} key={link.title}>{link.title}</Link>
  )
}

export default NavLink