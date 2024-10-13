import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

export function Cart() {
  const {products, currency, cartItems} = useContext(ShopContext)
    return (
      <div></div>
    )
  }