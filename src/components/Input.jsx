export default function Input({ type, idAndName, placeHolder }) {
  return (
    <>
      <input
        type={type}
        name={idAndName}
        id={idAndName}
        placeholder={placeHolder}
        className="bg-darkGray p-2 w-full focus:outline focus:outline-1 focus:outline-white"
      />
    </>
  )
}
