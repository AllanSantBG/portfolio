import Button from "./Button"

export default function ProjectCard({
  name,
  info,
  className,
  linkWebSite,
  linkCode,
}) {
  return (
    <div
      className={`flex flex-col justify-between transition-colors bg-gray-900 ${className}`}
    >
      <img src="https://placehold.co/600x400" alt="placeholder" />
      <div className="flex flex-col p-8 gap-8 text-gray-100">
        <h3 className="font-semibold uppercase lg:text-xl">{name}</h3>
        <p className="font-light text-xs lg:text-base">{info}</p>
        <div className="flex gap-8 *:p-1 *:lg:p-4 *:w-full *:bg-gradient-to-r from-amber-500 to-rose-500">
          <Button text="Abrir Site" link={linkWebSite} />
          <Button text="Código Fonte" link={linkCode} />
        </div>
      </div>
    </div>
  )
}
