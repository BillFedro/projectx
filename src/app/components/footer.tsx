import React from "react";
import Link from "next/link"


const footerLinks = [
   {name:'About', href:'/about'},
   {name:'Download the X App', href:'/download'},
   {name: 'Help Center', href: '/help'},
   {name: 'Terms of Service', href: '/terms'},
   {name: 'Privacy Policy', href: '/privacy'},
   {name: 'Cookie Policy', href: '/cookie'},
   {name: 'Accessibility', href: '/accessibility'},
   {name: 'Ads Info', href: '/ads'},
   {name: 'Blog', href: '/blog'},
   {name: 'Careers', href: '/careers'},
   {name: 'Brand Resources', href: '/brand'},
   {name: 'Advertising', href: '/advertising'},
   {name: 'Marketing', href: '/marketing'},
   {name: 'X for Business', href: '/business'},
   {name: 'Developers', href: '/developers'},
   {name: 'Directory', href: '/directory'},
   {name: 'Settings', href: '/settings'},




];

const XFooter: React.FC = () => {
    return  (
        <footer className="bg-black text-gray-500 text-xs py-4 px-6">
            <nav className="flex flex-wrap justify-center">
                {footerLinks.map((link,index) => (
                    <React.Fragment key={link.name}>
                        <Link  href={link.href} className="hover:underline mx-2 my-1">
                            {link.name}
                        </Link>
                        {index < footerLinks.length - 1 && <span className="mx-2 my-1">.</span>}
                    </React.Fragment>
                ))}
            </nav>
            <p className="text-center">© 2024 X Corp</p>
        </footer>
    );
};

