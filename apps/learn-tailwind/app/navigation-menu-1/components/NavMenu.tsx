"use client";

import NavItem from "@/app/navigation-menu-1/components/NavItem";
import { MenuItem } from "@/app/navigation-menu-1/types";
import { MouseEvent, useState } from "react";

export type NavMenuProps = {
  menuItems: MenuItem[];
};

export default function NavMenu({ menuItems }: NavMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavItemClick = (e: MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    setActiveIndex(index);
  };

  return (
    <div className="relative flex h-[70px] w-[400px] items-center justify-center rounded-lg bg-white">
      <ul className="flex w-[350px]">
        {menuItems.map(({ title, url, icon }, index) => (
          <NavItem
            key={index}
            title={title}
            url={url}
            icon={icon}
            active={activeIndex === index}
            onClick={(e) => handleNavItemClick(e, index)}
          />
        ))}
        <div
          className={`
            border-black-nav-menu-1
            before:shadow-black-nav-menu-1
            after:shadow-black-nav-menu-1
            absolute -top-1/2 h-[70px] w-[70px] rounded-full border-8 border-solid bg-green-400 duration-500
            before:absolute before:left-[-22px] before:top-1/2 before:h-5 before:w-5 before:rounded-tr-full before:bg-transparent before:shadow-[0px_-10px_0_0] before:content-['']
            after:absolute after:right-[-22px] after:top-1/2 after:h-5 after:w-5 after:rounded-tl-full after:bg-transparent after:shadow-[0px_-10px_0_0] after:content-['']
          `}
          style={{ transform: `translateX(${70 * activeIndex}px)` }}
        ></div>
      </ul>
    </div>
  );
}
