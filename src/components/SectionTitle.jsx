export default function SectionTitle({ text, color = "currentColor" }) {
  return (
    <h2
      className={`text-2xl lg:text-4xl w-full font-bold uppercase text-${color}`}
    >
      {text}
    </h2>
  )
}
