import Button from "./Button"

export default function ProjectCard({
  name,
  info,
  className,
  urlImage,
  linkWebSite,
  linkCode,
}) {
  if (urlImage == undefined) {
    urlImage = "./src/assets/progress.svg"
  }
  return (
    <div
      className={`flex flex-col justify-between transition-colors bg-black text-lightGray ${className}`}
    >
      <img src={urlImage} alt="placeholder" />
      <div className="flex flex-col p-8 gap-8 text-lightGray">
        <h3 className="font-semibold uppercase lg:text-xl">{name}</h3>
        <p className="font-light text-xs lg:text-base">{info}</p>
        <div className="flex gap-8 *:w-full">
          <Button
            text="Abrir Site"
            link={linkWebSite}
            className="bg-gradient-to-r from-yellow to-red"
          />
          <Button
            text="Código Fonte"
            link={linkCode}
            className="bg-gradient-to-r from-yellow to-red"
          />
        </div>
      </div>
    </div>
  )
}
