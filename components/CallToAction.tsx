"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CallToAction() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "openlens-discussion" });
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="w-full h-[500px] sm:h-[600px] md:h-[650px] flex items-center px-2 sm:px-4">
      <Cal 
    namespace="openlens-discussion"
    calLink="dilpreet-grover/odena-discussion"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
    />
    </div>
  );
}
