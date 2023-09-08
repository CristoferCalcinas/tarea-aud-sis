import CardHerramientaAux from "@/components/CardHerramientaAux";

export default function CardHerramientas({ posts }) {
  return (
    <div className="bg-slate-300 py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="mt-16 space-y-10 lg:mt-5 lg:space-y-20">
            {posts?.map((post) => (
              <CardHerramientaAux key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
