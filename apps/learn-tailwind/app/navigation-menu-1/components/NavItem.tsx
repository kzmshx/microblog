"use client";

import { IonIcon } from "@ionic/react";
import { MouseEvent } from "react";

export type NavItemProps = {
  icon: string;
  title: string;
  url: string;
  active?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export default function NavItem({ icon, title, url, active, onClick }: NavItemProps) {
  return (
    <li className={`group z-10 h-[70px] w-[70px] list-none ${active ? "active" : ""}`}>
      <a
        className="flex w-full flex-col items-center justify-center text-center font-medium"
        href={url}
        onClick={onClick}
      >
        <span
          className="
            text-black-nav-menu-1 text-center text-[1.5rem] leading-[75px] transition duration-500
            group-[.active]:translate-y-[-35px]"
        >
          <IonIcon icon={icon}></IonIcon>
        </span>
        <span
          className="
            text-black-nav-menu-1 absolute translate-y-[20px] transform text-xs font-normal tracking-wider opacity-0 transition duration-500
            group-[.active]:translate-y-[10px] group-[.active]:opacity-100"
        >
          {title}
        </span>
      </a>
    </li>
  );
}
