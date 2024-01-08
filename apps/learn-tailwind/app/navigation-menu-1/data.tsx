import { cameraOutline, chatbubbleOutline, cogOutline, homeOutline, personOutline } from "ionicons/icons";
import { MenuItem } from "@/app/navigation-menu-1/types";

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: "#",
    icon: homeOutline,
  },
  {
    title: "Profile",
    url: "#",
    icon: personOutline,
  },
  {
    title: "Messages",
    url: "#",
    icon: chatbubbleOutline,
  },
  {
    title: "Photos",
    url: "#",
    icon: cameraOutline,
  },
  {
    title: "Settings",
    url: "#",
    icon: cogOutline,
  },
];
