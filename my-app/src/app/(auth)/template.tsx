"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

//usePathName hook to be used to check which link is active, and it works only in client component 
const navLinks = [
    {name: "Register", href: '/register'},
    {name: "Login", href: '/login'},
    {name: "Forgot Password", href: '/forgot-password'}
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}){
    const pathName = usePathname()
    const [input, setInput] = useState("")
    return(
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            {navLinks.map((link) => {
                const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== '/')
                return(
                    <Link className={isActive ? "font-bold mr-4" : "text-blue-500"} href={link.href} key={link.name}>
                    {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}