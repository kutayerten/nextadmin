import { addProduct } from "@/app/lib/actions"
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css"

const Add = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="number" placeholder="size" name="size" />
        <textarea name="desc" id="desc" cols={30} rows={10} placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Add