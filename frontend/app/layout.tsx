import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import Footer from "@/app/components/Footer";


interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav/>
            <main className={styles.main}>{children}</main>
            <hr className={'my-8 text-gray-500'} />
            <footer>
              <Footer/>
            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
