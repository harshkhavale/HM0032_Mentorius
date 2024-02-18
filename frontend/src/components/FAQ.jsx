import React from "react";
import wave from "../assets/wave.svg";

const FAQ = () => {
  return (
    <>
      <div
        className="overflow-hidden"
        id="faq"
      >
        <div className="md:px-8 mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              <div>
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Can I try Updrafts before paying?
                </h5>
                <div className="mt-2 text-base text-gray-500">
                  Sure! You can test out Updrafts on our free plan where you can
                  experiment with 2 projects. Your projects will have a two-page
                  limit.
                </div>
              </div>
              <div>
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Can I cancel my subscription at any time?
                </h5>
                <div className="mt-2 text-base text-gray-500">
                  Yes, you can cancel your account at any time. If you do,
                  you'll be downgraded to the free plan, where you can manage
                  two projects. You won't be locked out of any projects that
                  have been created during your subscription.
                </div>
              </div>
              <div>
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Is there a refundable trial period?
                </h5>
                <div className="mt-2 text-base text-gray-500">
                  No, all sales are final. Try the free plan if you're not sure
                  if it's worth paying for, or a monthly subscription to try the
                  pro features for a small compensation.
                </div>
              </div>
              <div>
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Is Updrafts production ready?
                </h5>
                <div className="mt-2 text-base text-gray-500">
                  Yes. The product is stable and works as advertised. But there
                  are still some rough edges on the UX and not all Tailwind
                  options are configurable trough property buttons, just yet.
                </div>
              </div>
              <div>
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Where can I find the documentation?
                </h5>
                <div className="mt-2 text-base text-gray-500">
                  Documentation isn't written yet. Our focus lies on making
                  Updrafts feature complete. Once that's done, we'll work on
                  proper docs.
                </div>
              </div>
              <div>
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  What version of tailwindcss is used?
                </h5>
                <div className="mt-2 text-base text-gray-500">
                  Updrafts is tailwindcss v2 compatible. We've extended the
                  default theme with all available tailwindcss colors.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={wave} alt="" className="w-[100vw] rotate-180"/>
      </div>
    </>
  );
};

export default FAQ;
