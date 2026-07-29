export default function SkillGroup({ title, items }) {
  return (
    <article className="rounded-[2rem] border border-stone-200 bg-white/78 p-7 shadow-[0_18px_48px_rgba(120,92,52,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,92,52,0.1)]">
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-stone-950">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-stone-100 bg-[#efe4d2] px-3 py-1.5 text-sm font-medium text-stone-700 shadow-[0_8px_20px_rgba(120,92,52,0.04)]">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}