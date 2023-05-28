import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";


function StatsSection() {
  const [tradePrecision, setTradePrecision] = useState(0);
  const [fintechPartner, setFintechPartner] = useState(0);
  const [happyInvestors, setHappyInvestors] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Adjust threshold as needed
  });


  useEffect(() => {
    let interval;

    if (inView) {
      interval = setInterval(() => {
        // Increment the numbers until they reach their respective values
        if (tradePrecision < 99.95) {
          setTradePrecision((prev) => {
            const newValue = prev + 5;
            return newValue >= 99.95 ? 99.95 : newValue;
          });
        }
        if (fintechPartner < 2000) {
          setFintechPartner((prev) => {
            const newValue = prev + 10;
            return newValue >= 2000 ? 2000 : newValue;
          });
        }
        if (happyInvestors < 85) {
          setHappyInvestors((prev) => {
            const newValue = prev + 1;
            return newValue >= 85 ? 85 : newValue;
          });
        }
      }, 10);
    }

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div
    ref={ref}
      id="stats-section"
      className="w-full h-fit mx-auto px-5 md:px-16 lg:px-32 py-10 bg-blue-600"
    >
      <div className="grid gap-6 grid-cols-1 sm:gap-12 lg:grid-cols-3 lg:gap-8 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-200">Trade Precision</h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-100">
            {tradePrecision.toFixed(2)}%
          </p>
          <p className="mt-1 text-slate-800">in executing trades</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-200">Fintech Partner</h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-100">
            {fintechPartner}
          </p>
          <p className="mt-1 text-slate-800">with Secure Capital Trades</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-200">Happy Investors</h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-100">
            {happyInvestors}%
          </p>
          <p className="mt-1 text-slate-800">this year alone</p>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
