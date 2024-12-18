"use client";

import { Button } from "@/components/ui/button";
import useBasketStore from "@/store/store";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const clearBasket = useBasketStore((state) => state.clearBasket);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (orderNumber) {
      clearBasket();
    }
  }, [orderNumber, clearBasket]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="mx-4 w-full max-w-2xl rounded-xl bg-white p-12 shadow-lg">
        <div className="mb-8 flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="size-8 text-green-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="mb-6 text-center text-4xl font-bold">
          Thank You for you Order
        </h1>

        <div className="mb-6 border-b border-t border-gray-700 py-6">
          <p className="mb-4 text-lg text-gray-700">
            Your order has been confirm and will be shipped shortly.
          </p>
          <div className="space-y-2">
            {orderNumber && (
              <p className="flex items-center space-y-5 text-gray-600">
                <span>Order Number:</span>
                <span className="font-mono text-sm text-green-600">
                  {orderNumber}
                </span>
              </p>
            )}

            {sessionId && (
              <p className="flex justify-between text-gray-600">
                <span>Transaction ID:</span>
                <span className="font-mono text-sm">{sessionId}</span>
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            A confirmation email has been sent to your registered email address.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href={"/orders"}>View Order Details</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={"/"}>Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
