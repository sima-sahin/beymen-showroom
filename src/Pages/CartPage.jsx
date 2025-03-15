import useCartStore from "../store/cartStore";
import { useNavigate } from "react-router-dom";
import { useCartCount } from "../store/cartStore";
import { useTotalPrice } from "../store/cartStore";
import { useShippingCost } from "../store/cartStore";
import { useDiscountedPrice } from "../store/cartStore";
import { HiOutlineTrash } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";
import PaymentDetails from "../Components/PaymentDetails";
import YourFavorites from "../Components/YourFavorites";


const CartPage = () => {
  const { cart, clearCart, removeFromCart, increment, decrement, saveForLater } = useCartStore();

  const cartCount = useCartCount();
  const totalPrice = useTotalPrice();
  const shippingCost = useShippingCost();
  const discountedPrice = useDiscountedPrice();
  console.log(totalPrice - discountedPrice);

  const navigate = useNavigate();

  const groupedCart = cart.reduce((acc, item) => {
    const brand = ["Beymen Reborn", "Beymen Club"].includes(item.brand) ? "Beymen" : item.brand;
    if (!acc[brand]) acc[brand] = [];
    acc[brand].push(item);
    return acc;
  }, {});

  return (

    <>
    {cart.length === 0 ? (
      <>
        <div className="mx-auto mt-25 mb-8 text-center text-xl">SEPETİN BOŞ</div>
        <div className="mx-auto mb-20 text-center">
          <button className="bg-black text-white py-3 px-6 cursor-pointer" onClick={() => navigate("/")}>
            ALIŞVERİŞE BAŞLA
          </button>
        </div>
        <div className="flex justify-center px-34">
          <YourFavorites/>
        </div>

      </>
    ) : (
      <div className="container mx-auto mb-18 px-18">
        <div className="flex items-center justify-between mt-4 pb-2 border-b border-zinc-300 mb-4">
          <h2 className="tracking-wider">SEPETİM ({cartCount} Ürün)</h2>
          <button onClick={clearCart} className="bg-black text-white px-5 py-2 cursor-pointer">
            Temizle
          </button>
        </div>

        <div className="flex flex-row mx-auto w-full">
          {/* SOL SÜTUN - ÜRÜNLER */}
          <div className="flex flex-col w-5/8">
            {Object.entries(groupedCart).reverse().map(([brand, items]) => (
              <div key={brand} className="border border-zinc-200 my-3 p-4">
                {/* Marka Başlığı */}
                <div className="border-b border-zinc-200 pb-2 px-2 flex items-center text-sm mb-3 text-zinc-600">
                  <LiaShippingFastSolid className="text-lg mr-1" />
                  <span className="font-semibold mr-1">{brand}</span> tarafından gönderilecektir.
                </div>

                {/* Aynı markaya ait ürünler */}
                {items.reverse().map((item) => {
                  const isDiscount = item.discountRate >= 10;
                  const discountedPrice = isDiscount ? (item.price / 100) * (100 - item.discountRate) : item.price;
                  const isSize = item.size.length > 0;

                  return (
                    <div key={item.id} className="flex flex-row w-full border-b border-zinc-200 pb-4 mb-4 last:border-none">
                      {/* Ürün Resmi */}
                      <div className="flex flex-col w-1/4">
                        <img
                          src={item.image[0]}
                          alt={item.name}
                          className="w-full h-60 object-cover cursor-pointer"
                          onClick={() => navigate(`/${item.slug}`)}
                        />
                      </div>

                      {/* Ürün Detayları */}
                      <div className="flex flex-col w-3/4 mt-2 ml-4 relative">
                        {isDiscount && (
                          <div className="absolute top-[-10px] right-0 bg-red-600 py-2 px-3 text-white">
                            % {item.discountRate}
                          </div>
                        )}

                        <div className="font-semibold mt-2 text-sm tracking-wide cursor-pointer" onClick={() => navigate(`/${item.slug}`)}>
                          {item.brand.toUpperCase()}
                        </div>
                        <p className="mb-4 text-zinc-600 text-xs mt-1 cursor-pointer" onClick={() => navigate(`/${item.slug}`)}>
                          {item.name}
                        </p>

                        <div className="mt-3 flex justify-between items-end">
                          {isDiscount ? (
                            <div className="flex flex-row gap-x-2">
                              <span className="text-zinc-500 line-through text-sm">{item.price.toLocaleString()} TL</span>
                              <span className="font-bold">{discountedPrice.toLocaleString()} TL</span>
                            </div>
                          ) : (
                            <div className="">
                              <span className="font-bold">{item.price.toLocaleString()} TL</span>
                            </div>
                          )}
                        </div>

                        <div className="flex my-4 items-center text-sm">
                          <div className="text-zinc-500">
                            <span className="font-semibold mr-1 text-black">Renk:</span>
                            {item.color}
                          </div>
                          {isSize && (
                            <>
                              <div className="w-[0.5px] h-5 bg-zinc-500 mx-4"></div>
                              <div className="text-zinc-500">
                                <span className="font-semibold text-black mr-1">Beden:</span>
                                {item.selectedSize}
                              </div>
                            </>
                          )}
                        </div>

                        <div className="flex my-1">
                          <span className="font-semibold mr-2 text-sm">Adet:</span>
                          <div className="flex items-center gap-x-1">
                            <button className="outline outline-zinc-400 w-5 h-5 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer rounded-xs" onClick={() => decrement(item.id, item.size)}>
                              -
                            </button>
                            <input className="w-6 h-6 text-center rounded-xs" value={item.quantity} />
                            <button className="outline outline-zinc-400 w-5 h-5 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer rounded-xs" onClick={() => increment(item.id, item.size)}>
                              +
                            </button>
                          </div>
                        </div>

                        <div className="text-xs text-zinc-400 mt-4">
                          Tahmini Kargoya Teslim: <span className="text-zinc-500">13 Mart - 16 Mart</span>
                        </div>

                        <div className="flex items-center justify-end mr-4">
                          <button className="text-sm text-zinc-600 font-semibold underline cursor-pointer" onClick={() => saveForLater(item.id)}>
                            Favorilere Taşı
                          </button>
                          <div className="w-[0.5px] h-4 bg-zinc-500 mx-3"></div>
                          <button className="flex items-center justify-center text-sm text-red-600 underline cursor-pointer" onClick={() => removeFromCart(item.id, item.selectedSize)}>
                            <HiOutlineTrash className="mr-1" /> Sil
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* SAĞ SÜTUN - ÖDEME DETAYLARI */}
          <div className="flex flex-col w-3/8">
            <div className="bg-white p-6 bg-zinc-100 w-full max-w-sm ml-10 mt-4">
              <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-2">SİPARİŞ ÖZETİ</h2>
              
              <div className="flex justify-between text-sm py-2">
                <span>Toplam Tutar (KDV Dahil)</span>
                <span className="font-semibold">{totalPrice.toLocaleString()} TL</span>
              </div>

              <div className="flex justify-between text-sm py-2">
                <span>Toplam İndirim Tutarı</span>
                <span className="text-red-500">-{(totalPrice - discountedPrice).toLocaleString()} TL</span>
              </div>

              <div className="flex justify-between text-sm pt-2 pb-4 border-b border-zinc-200 mb-2">
                <span>Kargo Ücreti</span>
                <span className="font-semibold">{shippingCost.toLocaleString()} TL</span>
              </div>

              <div className="flex justify-between py-3">
                <span className="">Ödenecek Tutar</span>
                <span className="font-bold">{(discountedPrice + shippingCost).toLocaleString()} TL</span>
              </div>

              <button className="btn w-full rounded-none bg-black text-white hover:bg-zinc-700 mt-5 py-6 text-lg">
                SATIN AL
              </button>
            </div>

             <div className="ml-10">
              <PaymentDetails/>
            </div>

          </div>
           
        </div>

        <YourFavorites/>

      </div>
    )}
  </>
  )
}

export default CartPage;
