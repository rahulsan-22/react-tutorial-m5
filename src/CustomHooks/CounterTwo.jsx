import useCounter from "./useCounter"

const CounterTwo = () => {
  let { count, handleIncrement, handleDecrement } = useCounter()
  return (
    <div>
      <h1>Counter Two: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CounterTwo