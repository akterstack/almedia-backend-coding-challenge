export interface IOfferDataResolver<T> {
  resolveOffersData(payload: unknown): T[];
}
