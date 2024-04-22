export default function ListFooter({ title, textList, linkList = [] }) {
  const listItems = textList.map((item, index) => (
    <li key={index}>
      <a href={linkList[index]} className="hover:opacity-80">
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
