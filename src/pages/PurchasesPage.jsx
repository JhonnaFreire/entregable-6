import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import ProductPurchased from "../components/PurchasesPage/ProductPurchased"

const PurchasesPage = () => {
   const { getAllItems, purchases } = usePurchases()

   useEffect(() => {
    getAllItems()
   },[])

   console.log(purchases)

  return (
    <section>
        <h2>My purchases</h2>
        <div>
            {
                purchases?.map(purch => (
                    <ProductPurchased
                        key={purch.id}
                        purchase={purch}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default PurchasesPage