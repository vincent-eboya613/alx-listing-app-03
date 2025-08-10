import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import Link from "next/link";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <>
          <div className="bg-gray-50 h-[70px] ">
          <div className="container mx-auto relative p-6">
            <Link href="/" className="text-lg container font-semibold text-primary-green after:w-fit underline underline-offset-8">
            &larr; Booking
            </Link>
            </div>

</div>
    <div className="container mx-auto p-6">

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
      
    </div>
    </>
  );
    }
