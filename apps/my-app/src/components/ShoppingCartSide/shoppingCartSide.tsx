import style from "./shoppingCartSide.module.css";

function ShoppingCartSide() {
  return (
    <div className={`${style.sideShoppCart} ${style.active}`}>
      <ul>
        <li>
          <a>LOLO</a>
        </li>
        <li>
          <a>LOLO</a>
        </li>
        <li>
          <a>LOLO</a>
        </li>
        <li>
          <a>LOLO</a>
        </li>
      </ul>
    </div>
  );
}

export default ShoppingCartSide;
