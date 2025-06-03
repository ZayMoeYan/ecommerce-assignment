import Link from "next/link";
import styles from '../styles/layout.module.css';

interface Props {
    href: string,
    label: string,
}

export default function NavMenu({ href, label }: Props) {
    return (
        <Link href={href} className={styles.underlineBox}>
            <div className={'cursor-pointer font-thin'} >
                {label}
                <div></div>
            </div>
        </Link>
    );
}