"use client";
import Image from "next/image";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

export default function CardHerramientaAux({ post }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.article
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="relative isolate rounded-2xl flex flex-col gap-8 lg:flex-row hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:bg-cyan-50"
    >
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
        <Image
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
          alt=""
          src={post.imageUrl}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="flex flex-col justify-center p-5">
        <div className="flex items-center gap-x-4 text-xs">
          <a
            href={post.category.href}
            className={`font-bold  relative z-10 rounded-full px-3 py-1.5 text-gray-700 hover:bg-gray-100 ${
              post.efective ? "bg-green-300" : "bg-red-400"
            }`}
          >
            {post.category.title}
          </a>
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-2xl font-black leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 text-base leading-6 text-gray-800 font-semibold">
            {post.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
