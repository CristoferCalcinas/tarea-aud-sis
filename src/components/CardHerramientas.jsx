
import Image from "next/image";

export default function CardHerramientas({ posts }) {
  return (
    <div className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-16 space-y-10 lg:mt-5 lg:space-y-20">
            {posts?.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    alt=""
                    src={post.imageUrl}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-x-4 text-xs">
                    <a
                      href={post.category.href}
                      className={`relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 ${
                        post.efective ? "bg-green-300" : "bg-red-400"
                      }`}
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
