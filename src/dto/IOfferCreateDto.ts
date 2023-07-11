import { IOffer } from 'src/entities/IOffer';
import { OfferProvider } from 'src/helpers';

export interface IOfferCreateDto extends Omit<IOffer, 'id'> {
  providerName: OfferProvider;
}
