"use client"

import Container from "@/components/container"
import useCart from "@/hooks/use-cart"
import CartItem from "./CartItem";

const CartClient = () => {
  const cart = useCart();


  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && <p className="text-neutral-500">No items inside cart</p>}
            <ul>
              {cart.items.map((item) => (
                <CartItem 
                  key={item.id}
                  data={item}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CartClient