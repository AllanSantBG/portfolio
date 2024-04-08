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
        className={`font-semibold text-sm lg:text-xl flex gap-2 uppercase text-center justify-center items-center hover:rounded-3xl xl:text-xl transition-all p-4 ${className}`}
      >
        {IconParam && <IconParam />}
        {text}
      </a>
    </>
  )
}
