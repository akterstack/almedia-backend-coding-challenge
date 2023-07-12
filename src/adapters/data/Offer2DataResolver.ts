import { IOffer2Data } from 'src/adapters/data/IOffer2Data';
import { IOfferDataResolver } from './IOfferDataResolver';

export class Offer2DataResolver implements IOfferDataResolver<IOffer2Data> {
  resolveOffersData(payload: {
    data: Record<string, IOffer2Data>;
  }): IOffer2Data[] {
    return Object.values(payload.data);
  }
}
