import styles from "@/app/product/styles/product.module.css";

export default function Header() {
    return <section>
        <div className={styles.imgContainer}>
            <img
                src="https://ddpzd2b97pj2g.cloudfront.net/pub/media/banners/FEEL%20SOMETHING%20NEW_HOME_PC_EN.jpg"
                alt="img"/>
        </div>
    </section>;
}