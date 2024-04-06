export default function ListFooter({ title, list }) {
  const listItems = list.map((item, index) => (
    <li key={index}>
      <a href="#" className="hover:opacity-80">
        {item}
      </a>
    </li>
  ))

  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <ul>{listItems}</ul>
    </div>
  )
}
