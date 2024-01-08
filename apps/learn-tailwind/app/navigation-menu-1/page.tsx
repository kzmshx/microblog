import { Metadata } from "next";
import NavMenu from "@/app/navigation-menu-1/components/NavMenu";
import { menuItems } from "@/app/navigation-menu-1/data";

export const metadata: Metadata = {
  title: "Learn Tailwind - Navigation Menu 1",
};

export default function Page() {
  return (
    <main className="bg-black-nav-menu-1 flex min-h-screen items-center justify-center">
      <NavMenu menuItems={menuItems} />
    </main>
  );
}
