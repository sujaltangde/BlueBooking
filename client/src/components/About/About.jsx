import React from "react";
import { Loader } from "../Loader";
import { MetaData } from "../MetaData";

export const About = () => {
  return (
    <>
      <MetaData title={"About"} />

      <div className="min-h-screen pt-16 px-10">
        <div className="pt-8 ">
          <p className="font-bold text-6xl ">About Us</p>
        </div>

        <div>
          <p className="pb-2 pt-5">
            Welcome to BlueBooking – Your Gateway to Seamless Hotel Experiences!
          </p>
          <p>
            At BlueBooking, we believe that every journey begins with a
            comfortable and memorable stay. We understand the importance of
            finding the perfect accommodation that suits your preferences,
            whether you're embarking on a business trip, planning a family
            vacation, or seeking a weekend getaway. Our mission is to simplify
            the hotel booking process, ensuring that you have access to a
            curated selection of hotels that meet your unique needs.
          </p>
        </div>

        <div className="pt-6 ">
          <p className="font-semibold text-xl">Why Choose BlueBooking?</p>

          <ul className="flex flex-col gap-3 pt-3">
            <li>
              {" "}
              <span className="font-bold">Diverse Selection:</span> Explore a
              diverse array of hotels, from luxury resorts to budget-friendly
              options. Our carefully curated collection ensures that there's
              something for every traveler, catering to various tastes and
              budgets.
            </li>

            <li>
              <span className="font-bold">User-Friendly Platform:</span>{" "}
              Navigating through our platform is a breeze. With a clean and
              intuitive interface, you can easily search for hotels, compare
              prices, and book your ideal accommodation in just a few clicks.
            </li>

            <li>
              <span className="font-bold">Transparent Reviews:</span> Make
              informed decisions by reading real and unbiased reviews from
              fellow travelers. We believe in transparency, empowering you to
              choose the perfect hotel based on authentic experiences shared by
              our community.
            </li>

            <li>
              <span className="font-bold">Exclusive Deals:</span> Enjoy access
              to exclusive deals and discounts, making your stay even more
              affordable. BlueBooking collaborates with hotels to bring you
              special offers, ensuring that you get the best value for your
              money.
            </li>

            <li>
              <span className="font-bold">Secure Booking:</span> Rest easy
              knowing that your personal information is secure when booking
              through BlueBooking. We prioritize the privacy and security of
              your data, providing a safe and trustworthy platform for your
              travel needs.
            </li>

            <li>
              <span className="font-bold">24/7 Customer Support:</span> Have
              questions or need assistance? Our dedicated customer support team
              is available 24/7 to address your queries and ensure a smooth
              booking experience.
            </li>
          </ul>
        </div>

        <div className="pb-12 pt-6">
          <p className="pb-4">
            {" "}
            Whether you're planning a solo adventure, a romantic getaway, or a
            family vacation, BlueBooking is here to make your hotel booking
            experience stress-free and enjoyable. Join us on your journey to
            discover incredible destinations and create lasting memories through
            hassle-free hotel reservations.
          </p>
          <p>
            Thank you for choosing BlueBooking – Where Comfort Meets
            Convenience!
          </p>
        </div>
      </div>
    </>
  );
};
