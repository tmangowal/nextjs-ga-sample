import React from "react";
import Script from "next/script";
import { gaConfig } from "../config";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaConfig.gaMeasurementId}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', '${gaConfig.gaMeasurementId}');
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
