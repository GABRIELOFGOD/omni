
const CustomInput = (
  {
    place,
    value,
    setValue
  }:
  {
    place: string,
    value: string,
    setValue: (value: string) => void
  }
) => {
  return (
    <div>
      <input
        type="text"
        className={`w-full h-12 px-3 rounded-md border-2 border-primary `}
        placeholder={place}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

export default CustomInput