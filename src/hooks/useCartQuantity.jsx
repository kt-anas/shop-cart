import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useCartQuantity = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = carts.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  }, [carts]);

  return totalQuantity;
};

export default useCartQuantity;
