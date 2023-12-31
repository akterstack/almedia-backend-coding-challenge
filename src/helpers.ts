import { ValidationError } from 'class-validator';
import { Offer1PayloadAdapter } from './adapters/Offer1PayloadAdapter';
import { Offer2PayloadAdapter } from './adapters/Offer2PayloadAdapter';
import { Offer1DataResolver } from './adapters/data/Offer1DataResolver';
import { Offer2DataResolver } from './adapters/data/Offer2DataResolver';

export const CONFIGS_BY_PROVIDER = {
  offer1: {
    offersDataResolver: Offer1DataResolver,
    payloadAdapter: Offer1PayloadAdapter,
  },
  offer2: {
    offersDataResolver: Offer2DataResolver,
    payloadAdapter: Offer2PayloadAdapter,
  },
} as const;

export type OfferProvider = keyof typeof CONFIGS_BY_PROVIDER;

export const flattenValidationErrorMessage = (errors: ValidationError[]) => {
  return errors.flatMap((err) => Object.values(err.constraints || {}));
};
