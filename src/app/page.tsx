"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const refs = [section1Ref, section2Ref];

  const [screenshots, setScreenshots] = useState<string[]>(["", ""]);
  const [domtoimage, setDomtoimage] = useState<any>(null);

  useEffect(() => {
    // Dynamically import dom-to-image-more only on the client side
    import("dom-to-image-more").then((module) => {
      setDomtoimage(module.default);
    });
  }, []);

  function takeScreenshot() {
    if (!domtoimage) return;

    refs.forEach((ref, index) => {
      if (ref.current) {
        domtoimage.toPng(ref.current).then((dataUrl: string) => {
          setScreenshots((prevScreenshots) => {
            const newScreenshots = [...prevScreenshots];
            newScreenshots[index] = dataUrl;
            return newScreenshots;
          });
        });
      }
    });
  }

  useEffect(() => {
    if (domtoimage) {
      takeScreenshot();
    }
  }, [domtoimage]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div id="section-1" className={styles.section} ref={section1Ref}>
          <h1 className={styles.title}>First</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae venenatis ante, vestibulum pretium ligula. Morbi blandit
            venenatis diam, quis cursus nulla aliquam eleifend. Maecenas porta
            orci sed bibendum ornare. Nunc vel fringilla ex. Nam purus arcu,
            faucibus vel libero et, tristique laoreet dolor.
          </p>
        </div>
        <div id="section-2" className={styles.section} ref={section2Ref}>
          <h1 className={styles.title}>Second</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae venenatis ante, vestibulum pretium ligula. Morbi blandit
            venenatis diam, quis cursus nulla aliquam eleifend. Maecenas porta
            orci sed bibendum ornare. Nunc vel fringilla ex. Nam purus arcu,
            faucibus vel libero et, tristique laoreet dolor.
          </p>
        </div>

        {/* <button className={styles.button} onClick={takeScreenshot}>
          take Screenshot
        </button> */}
      </main>

      <div className={styles.screenshotPanel}>
        {screenshots.map((screenshot, index) => (
          <div key={index} className={styles.screenshotFrame}>
            {screenshot && (
              <img src={screenshot} alt={`Screenshot ${index + 1}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
