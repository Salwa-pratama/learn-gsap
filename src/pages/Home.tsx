import { useEffect } from "react";
import { fadeIn } from "../utils/gsapAnimation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

const Home = () => {
  useEffect(() => {
    fadeIn({ el: ".fin-animation", delay: 0.3 });
  });
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "back.in",
    });
  }, []);

  return (
    <div className="container py-5 align-items-center text-center">
      <h2 className="fw-bold text-center mb-4 text-primary">
        Selamat Datang di Dokumentasi Belajar GSAP
      </h2>
      <p className="lead text-center text-secondary text-light">
        Website ini akan saya gunakan untuk dokumentasi proses belajar saya
        mengenai GSAP animation, agar web atau applikasi yang saya buat jadi
        lebih interaktiv banget
      </p>
      <h2 className="text-primary">Animasi Fade In pada GSAP</h2>
      <p
        id="fin-animation"
        className="fin-animation text-light bg-bg-primary border-2 m-auto "
      >
        Animasi fade in
      </p>
      <p className="text-primary">gsap.to()</p>

      <div id="blue-box" className="w-25  p-5 bg-primary rounded"></div>
    </div>
  );
};

export default Home;
