const Form = (props) => {
  const {setName, setSpeed, setColor} = props;

  return (
    <>
      <label htmlFor="name" className="my-4 text-3xl font-semibold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="text-black p-1"
        />

        <label htmlFor="speed" className="my-4 text-3xl font-semibold">
          Speed (mph):
        </label>
        <input
          type="text"
          id="speed"
          name="speed"
          onChange={(e) => setSpeed(e.target.value)}
          className="text-black p-1"
        />

        <label htmlFor="color" className="my-4 text-3xl font-semibold">
          Color:
        </label>
        <select
          name="color"
          id="color"
          onChange={(e) => setColor(e.target.value)}
          className="text-black p-1">
          <option value="">Select A Color</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
          <option value="Yellow">Yellow</option>
          <option value="Orange">Orange</option>
          <option value="Pink">Pink</option>
          <option value="Rainbow">Rainbow</option>
        </select>
    </>
  )
}

export default Form