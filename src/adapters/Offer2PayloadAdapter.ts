import { IPayloadAdapter } from './IPayloadAdapter';
import { IOfferCreateDto } from 'src/dto/IOfferCreateDto';
import { IOffer2Data } from 'src/adapters/data/IOffer2Data';

export class Offer2PayloadAdapter
  // There is no mapping for `slug` in provider response, it will be generated inside DTO
  implements IPayloadAdapter, Omit<IOfferCreateDto, 'slug'>
{
  constructor(readonly payload: IOffer2Data) {}

  providerName = 'offer2' as const;

  get name() {
    return this.payload.Offer.name;
  }

  get description() {
    return this.payload.Offer.description;
  }

  get requirements() {
    return this.payload.Offer.instructions;
  }

  get thumbnail() {
    return this.payload.Offer.icon;
  }

  get isDesktop() {
    return this.payload.OS.web ? 1 : 0;
  }

  get isAndroid() {
    return this.payload.OS.android ? 1 : 0;
  }

  get isIos() {
    return this.payload.OS.ios ? 1 : 0;
  }

  get offerUrlTemplate() {
    return this.payload.Offer.tracking_url;
  }

  get externalOfferId() {
    return this.payload.Offer.campaign_id.toString();
  }
}
