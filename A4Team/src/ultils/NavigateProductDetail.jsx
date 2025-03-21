import { useNavigate } from "react-router-dom";

function useNavigateProductDetail() {
    const navigate = useNavigate();

    return (product) => {
        if(!product || !product.id) return;

        const slug = product.name.trim().toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g, "-");
        const id = product.id;

        navigate(`/product-detail/buy/${id}/${slug}`);
    }
}

export default useNavigateProductDetail;