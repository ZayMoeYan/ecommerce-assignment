import styles from "@/app/product/styles/product.module.css";

export default function FeatureImages() {
    return (
        <section>
            <div className="flex flex-row flex-wrap justify-center gap-10 px-10 mt-10">
                <div className={styles.imgContainer + " h-100 w-80"}>
                    <img className="w-full h-full"
                         src="https://ddpzd2b97pj2g.cloudfront.net/pub/media/newsfeed/2022/12/YOTR_thumbnail.jpg"
                         alt="feature-img"/>
                </div>
                <div className={styles.imgContainer + " h-100 w-80"}>
                    <img className="w-full h-full"
                         src="https://ddpzd2b97pj2g.cloudfront.net/pub/media/banners/LNY_SECONDARY.jpg"
                         alt="feature-img"/>
                </div>
                <div className={styles.imgContainer + " h-100 w-80"}>
                    <img className="w-full h-full"
                         src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a6526415181429.5628dd18a4f83.jpg"
                         alt="feature-img"/>
                </div>
                <div className={styles.imgContainer + " h-100 w-80"}>
                    <img className="w-full h-full"
                         src="https://images.woodenstreet.de/image/data/the-easel-press/black-vans-poster-a5-poster-with-frame/updated/1.jpg"
                         alt="feature-img"/>
                </div>
                <div className={styles.imgContainer + " h-100 w-80"}>
                    <img className="w-full h-full"
                         src="https://i.pinimg.com/originals/5a/57/60/5a5760a6acf8ae6843173b5f945f684b.jpg"
                         alt="feature-img"/>
                </div>
                <div className={styles.imgContainer + " h-100 w-80"}>
                    <img className="w-full h-full"
                         src="https://images.squarespace-cdn.com/content/v1/655bbdaec3272871d3db1593/1a4ec5c6-9e83-4fc1-8f2a-57b60a041fe4/Vans_Mural_SmallFile.jpg"
                         alt="feature-img"/>
                </div>

            </div>
        </section>
    );
}