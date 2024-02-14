import { useNavigate } from 'react-router-dom';
import './productCard.css'
const ProductCard = ({product}) => {
  const navigate=useNavigate();
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div onClick={()=>navigate(`/product/${5}`)} className="h-[20rem] ">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-black p-3">
        <div className="">
          <p className="font-bold opacity-60">{product.brand}</p>
          <p className="">{product.brand}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-green-600">{product.discountPersent}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
