"use client"

import Container from "@/components/container"

const CartClient = () => {

  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CartClient