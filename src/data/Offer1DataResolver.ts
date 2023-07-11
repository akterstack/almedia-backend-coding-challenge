import { IOffer1Data } from 'src/data/IOffer1Data';
import { IOfferDataResolver } from './IOfferDataResolver';

export class Offer1DataResolver implements IOfferDataResolver<IOffer1Data> {
  resolveOffersData(payload: { response: { offers: IOffer1Data[] } }) {
    return payload.response?.offers;
  }
}
