import {
  CheckIcon,
  HomeIcon,
  ListIcon,
  TodoIcon,
} from "@/app/components/icons";

export const MENU = [
  {
    id: 1,
    title: "All Tasks",
    icon: HomeIcon,
    link: "/",
  },
  {
    id: 2,
    title: "Important",
    icon: ListIcon,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed",
    icon: CheckIcon,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do it Now",
    icon: TodoIcon,
    link: "/incomplete",
  },
];
