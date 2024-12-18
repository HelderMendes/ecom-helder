import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";

// async function BlackFridayBanner(params: type) {
async function BlackFridayBanner() {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY);

  if (!sale?.isActive) return null;

  return (
    <div className="mx-4 mt-2 rounded-lg bg-gradient-to-t from-red-600 to-black px-6 py-10 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="fle-1">
          <h2 className="mb-4 text-left text-3xl font-extrabold sm:text-5xl">
            {sale.title}
          </h2>
          <p className="mb-6 text-left text-xl font-semibold sm:text-3xl">
            {sale.description}
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="duration transform rounded-full bg-white px-6 py-4 text-black shadow-md transition hover:scale-105">
          <span className="text-base font-bold sm:text-xl">
            Use code: <span className="text-red-600">{sale.couponCode}</span>
          </span>
          <span className="ml-2 text-base font-bold sm:text-xl">
            for {sale.discountAmount}% off
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlackFridayBanner;
