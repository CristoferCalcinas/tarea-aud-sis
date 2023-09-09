"use client";
import Image from "next/image";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import "animate.css";

export default function CardHerramientaAux({ post }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const [selectedPostId, setSelectedPostId] = useState(null);
  return (
    <>
      <motion.article
        onClick={() =>
          setSelectedPostId(selectedPostId === post.id ? null : post.id)
        }
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
            <span
              className={`font-bold  relative z-10 rounded-full px-3 py-1.5 text-gray-700 hover:bg-gray-100 ${
                post.efective ? "bg-green-300" : "bg-red-400"
              }`}
            >
              {post.category.title}
            </span>
          </div>
          <div className="group relative max-w-xl">
            <h3 className="mt-3 text-2xl font-black leading-6 text-gray-900 group-hover:text-gray-600">
              <span href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </span>
            </h3>
            <p className="mt-5 text-base leading-6 text-gray-800 font-semibold">
              {post.description}
            </p>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {selectedPostId && (
          <motion.div layout={selectedPostId}>
            <motion.div className="flex justify-center mb-5">
              <button
                onClick={() => {
                  setSelectedPostId(null);
                }}
                type="button"
                className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              </button>
            </motion.div>
            <motion.article
              className={`bg-[#111827] w-full  rounded-xl text-justify md:text-start md:px-5 animate__animated animate__fadeInUp`}
            >
              <motion.h2 className="font-bold text-xl text-center pt-10 px-3 md:px-0">
                {post?.content?.header}
              </motion.h2>
              <motion.div className="py-10 px-7 space-y-7 md:py-5 md:px-3 lg:p-10">
                {post?.content?.firstParagraph?.map((paragraph, index) => (
                  <motion.div key={index}>
                    <motion.h3 className="font-semibold text-lg">
                      {Object.keys(paragraph)[0]}
                    </motion.h3>
                    <motion.p className="text-sm my-2">
                      {Object.values(paragraph)[0]}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
