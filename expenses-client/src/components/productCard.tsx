import css from "./style.module.css"

export const ProductCard: any = (props: any) => {
    const { id, image, name, price } = props;
    const isCallbackFn = (typeof props.sendP === 'function')
    return <>
        <div key={id} className={css.productCard}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{price}</p>
            {isCallbackFn && <button onClick={() => {
                if (typeof props.sendP === 'function') {
                    props.sendP({ id, image, name, price })
                }
            }} className={css.addToCartBtn} >Add to Cart</button>}
        </div></>
}