import { IOffer1Data } from 'src/data/IOffer1Data';
import { IPayloadAdapter } from './IPayloadAdapter';
import { IOfferCreateDto } from 'src/dto/IOfferCreateDto';

export class Offer1PayloadAdapter
  implements IPayloadAdapter, Omit<IOfferCreateDto, 'slug'>
{
  constructor(readonly payload: IOffer1Data) {}

  providerName = 'offer1' as const;

  get name() {
    return this.payload.offer_name;
  }

  get description() {
    return this.payload.offer_desc;
  }

  get requirements() {
    return this.payload.call_to_action;
  }

  get thumbnail() {
    return this.payload.image_url;
  }

  get isDesktop() {
    return this.payload.platform === 'desktop' ? 1 : 0;
  }

  get isAndroid() {
    return this.payload.platform === 'mobile' &&
      this.payload.device !== 'iphone_ipad'
      ? 1
      : 0;
  }

  get isIos() {
    return this.payload.platform === 'mobile' &&
      this.payload.device === 'iphone_ipad'
      ? 1
      : 0;
  }

  get offerUrlTemplate() {
    return this.payload.offer_url;
  }

  public get externalOfferId() {
    return this.payload.offer_id;
  }
}
