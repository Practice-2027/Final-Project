import ProductList from '../Components/ProductList'
export default function Cart() {
    return (
        <div className="home-page">
            <ProductList title= "Cart" endpoint="/products" category=""/>
        </div>
    );
}

