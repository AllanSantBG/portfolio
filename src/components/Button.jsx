export default function Button({
  icon: IconParam,
  text,
  link = "#",
  className,
}) {
  return (
    <>
      <a
        href={link}
        className={`font-semibold flex gap-2 uppercase text-center justify-center items-center hover:opacity-80 hover:rounded-3xl xl:text-xl transition-all p-4 ${className}`}
      >
        {IconParam && <IconParam />}
        {text}
      </a>
    </>
  )
}
