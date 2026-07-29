export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">{description}</p> : null}
    </div>
  );
}