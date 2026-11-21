import useCounter from "./useCounter"

const CounterOne = () => {
  let { count, handleIncrement, handleDecrement } = useCounter()
  return (
    <div>
      <h1>Counter One: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CounterOne