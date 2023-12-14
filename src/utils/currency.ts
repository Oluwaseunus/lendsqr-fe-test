export const Naira = Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

export const formatMoney = (amount?: number, format = Naira) => {
  if (!amount) return format.format(0).slice(0, -3);

  return format.format(+(amount / 100).toFixed(2));
};
