
export default function Counter({ counter, setCounter }) {
  return (
    <div onClick={() => setCounter(counter + 1)} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontSize: 34 }}>
      {counter}
    </div>
  )
}
