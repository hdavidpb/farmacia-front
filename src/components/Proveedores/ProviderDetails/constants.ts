export type DataToCalculate = {
  discountPercentage: string;
  unitsNumberForApplyDiscount: string;
  giftedUnits: string;
  unitsNumberForApplyGiftedUnits: string;
  unitPrice: string;
};

export const getPromNegotiation = (data: DataToCalculate): number => {
  //   let priceAfterNegociation = 0;

  if (
    data.discountPercentage &&
    data.unitsNumberForApplyDiscount &&
    data.giftedUnits &&
    data.unitsNumberForApplyGiftedUnits
  ) {
    const may = Math.max(
      +data.unitsNumberForApplyDiscount,
      +data.unitsNumberForApplyGiftedUnits
    );
    const multiplyXmay = +data.unitPrice * may;

    const descount = (multiplyXmay * +data.discountPercentage) / 100;

    const subtraction = multiplyXmay - descount;

    const ruleOfTrhreeGiftQuantity =
      (may * +data.giftedUnits) / +data.unitsNumberForApplyGiftedUnits;

    const sumRulePlusMay = ruleOfTrhreeGiftQuantity + may;

    const result = subtraction / sumRulePlusMay;
    console.log(result);
    return result;
  } else if (
    data.discountPercentage &&
    data.unitsNumberForApplyDiscount &&
    !data.giftedUnits &&
    !data.unitsNumberForApplyGiftedUnits
  ) {
    const may = Math.max(
      +data.unitsNumberForApplyDiscount,
      +data.unitsNumberForApplyGiftedUnits
    );

    const multiplyXmay = +data.unitPrice * may;

    const descount = (+data.unitPrice * +data.discountPercentage) / 100;
    const apllyDescount = +data.unitPrice - descount;

    const result = multiplyXmay / apllyDescount;
    console.log(result);
    return result;
  } else if (
    !data.discountPercentage &&
    !data.unitsNumberForApplyDiscount &&
    data.giftedUnits &&
    data.unitsNumberForApplyGiftedUnits
  ) {
    const pricePlusMay = +data.unitPrice * +data.unitsNumberForApplyGiftedUnits;

    const ruleOfThree =
      (+data.unitsNumberForApplyGiftedUnits * +data.giftedUnits) /
      +data.unitsNumberForApplyGiftedUnits;

    const sumRulePlusMay = ruleOfThree + +data.unitsNumberForApplyGiftedUnits;

    const result = pricePlusMay / sumRulePlusMay;
    console.log(result);
    return result;
  } else if (
    !data.discountPercentage &&
    !data.unitsNumberForApplyDiscount &&
    !data.giftedUnits &&
    !data.unitsNumberForApplyGiftedUnits
  ) {
    const result = +data.unitPrice;
    console.log(result);
    return result;
  } else {
    return +data.unitPrice;
  }
};
