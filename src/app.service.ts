import { Injectable } from '@nestjs/common';
import { OfferProvider, CONFIGS_BY_PROVIDER } from './helpers';
import { validate } from 'class-validator';
import { OfferCreateDto } from './dto/OfferCreateDto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AppService {
  async runOfferJob() {
    return Promise.all(
      Object.keys(CONFIGS_BY_PROVIDER).map((provider: OfferProvider) =>
        this.fetchOffer(provider).then(({ payload }) => {
          const offersData = this.resolveOffersFromResponse(provider, payload);
          return this.validateDto(provider, offersData);
        }),
      ),
    );
  }

  fetchOffer(provider: OfferProvider) {
    return import(`./payloads/${provider}.payload`);
  }

  resolveOffersFromResponse(provider: OfferProvider, payload: any) {
    const OffersDataResolverClass =
      CONFIGS_BY_PROVIDER[provider].offersDataResolver;
    return new OffersDataResolverClass().resolveOffersData(payload);
  }

  async validateDto(provider: OfferProvider, offersData: any[]) {
    const PayloadAdapterClass = CONFIGS_BY_PROVIDER[provider].payloadAdapter;
    offersData.forEach(async (offerData) => {
      const error = await validate(
        plainToInstance(OfferCreateDto, new PayloadAdapterClass(offerData), {
          excludeExtraneousValues: true,
        }),
      );
      console.log(error);
    });
  }
}
