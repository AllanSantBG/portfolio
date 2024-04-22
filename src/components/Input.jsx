export default function Input({
  type,
  idAndName,
  placeHolder,
  required,
  autoComplete = "on",
}) {
  return (
    <>
      <input
        type={type}
        name={idAndName}
        id={idAndName}
        placeholder={placeHolder}
        className="bg-darkGray p-4 w-full focus:outline focus:outline-1 focus:outline-white"
        required={required}
        autoComplete={autoComplete}
      />
    </>
  )
}
