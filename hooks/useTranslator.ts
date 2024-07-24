import { useEffect, useState } from "react";

export const useTranslator = (dataToTransform: any, translatorToUse: any) => {
  const [translatedInfo, setTranslatedInfo] = useState([]);

  const translate = () => {
    const ans = dataToTransform?.map((item: any) => translatorToUse(item));
    setTranslatedInfo(ans);
  };

  useEffect(() => {
    translate();
  }, [dataToTransform]);

  return translatedInfo;
};
