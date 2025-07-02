import css from "./style.module.css"
import styled from "styled-components"

const ButtonAddToCart = styled.button`
    background-color: ${(props: any) => (props.primary ? 'red' : 'blue')};
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover{
        background-color:red
    }
`

export const ProductCard: any = (props: any) => {
    const { id, image, name, price } = props;
    const isCallbackFn = (typeof props.sendP === 'function')
    return <>
        <div key={id} className={css.productCard}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{price}</p>
            <ButtonAddToCart onClick={() => props.sendP({ id, image, name, price })}> Add to Cart</ButtonAddToCart>
            {/* {isCallbackFn && <button onClick={() => {
                if (typeof props.sendP === 'function') {
                    props.sendP({ id, image, name, price })
                }
            }} className={css.addToCartBtn} >Add to Cart</button>} */}
        </div></>
}