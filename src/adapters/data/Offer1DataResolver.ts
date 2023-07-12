import { IOffer1Data } from 'src/adapters/data/IOffer1Data';
import { IOfferDataResolver } from './IOfferDataResolver';

export class Offer1DataResolver implements IOfferDataResolver<IOffer1Data> {
  resolveOffersData(payload: { response: { offers: IOffer1Data[] } }) {
    return payload.response?.offers;
  }
}
