export default function ListSkills({ list }) {
  const listItems = list.map((item, index) => <li key={index}>{item}</li>)

  return (
    <div>
      <ul className="font-light lg:text-xl">{listItems}</ul>
    </div>
  )
}
