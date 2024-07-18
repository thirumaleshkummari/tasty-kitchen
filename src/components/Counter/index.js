import './index.css'

const Counter = props => {
  const {quantity, onIncrement, onDecrement, addItem, testIdValues} = props

  const onClickAddBtn = () => {
    addItem()
  }

  const onClickIncrement = () => {
    onIncrement()
  }

  const onClickDecrement = () => {
    onDecrement()
  }

  return quantity > 0 ? (
    <div className="items-counter">
      <button
        className="dec-inc-btn"
        type="button"
        onClick={onClickDecrement}
        data-testid={testIdValues.dec}
      >
        -
      </button>
      <div className="item-quantity" data-testid={testIdValues.current}>
        {quantity}
      </div>
      <button
        className="dec-inc-btn"
        type="button"
        onClick={onClickIncrement}
        data-testid={testIdValues.inc}
      >
        +
      </button>
    </div>
  ) : (
    <button onClick={onClickAddBtn} type="button" className="food-add-btn">
      ADD
    </button>
  )
}

export default Counter
