export function formatCurrency(
  amount: number,
  currencyCode: string = "NL",
): string {
  try {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  } catch (error) {
    console.error("Invalid currency code: ", currencyCode, error);
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
  }
}
