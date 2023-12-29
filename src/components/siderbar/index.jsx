"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { MENU } from "@/constants/menu";
import { useRouter, usePathname } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (link) => {
    router.push(link);
  };
  return (
    <nav className={styles.sidebar}>
      <div className={styles.profile}>
        <Image
          width={100}
          height={100}
          src="https://media.licdn.com/dms/image/D4E35AQGzCVNtWEsmBg/profile-framedphoto-shrink_200_200/0/1703094124225?e=1704466800&v=beta&t=fIXWVnb0YdMTEAr5Cm4Qfaeog0xQPuH0BIcKv4_Itl4"
          alt="Profile Image"
          className={styles.rounded}
          priority
        />
        <div className={styles.profileDetails}>
          <h2 className={styles.name}>Daniel Soto</h2>
          <h3 className={styles.designation}>Software Engineer</h3>
        </div>
      </div>
      <ul className={styles.navItems}>
        {MENU.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`${styles.navItem} ${
                link === pathname ? styles.active : ""
              }`}
              onClick={() => navigateTo(link)}
            >
              <item.icon />
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
