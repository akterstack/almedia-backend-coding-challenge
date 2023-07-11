import { Injectable } from '@nestjs/common';
import {
  OfferProvider,
  CONFIGS_BY_PROVIDER,
  flattenValidationErrorMessage,
} from './helpers';
import { validateOrReject } from 'class-validator';
import { OfferCreateDto } from './dto/OfferCreateDto';
import { plainToInstance } from 'class-transformer';
import { Offer } from './entities/Offer';
import { IOfferCreateDto } from './dto/IOfferCreateDto';

@Injectable()
export class AppService {
  /**
   * This function has following steps:
   * - fetch offer(s) from provider
   * - transform to DTO object(s)
   * - validate DTO(s)
   * - transform to Offer(s) entity from DTO(s)
   *
   * *All provider offers are fetched and transformed concurrently to finish the job faster
   *
   * @returns Promise<Offer[]> Successfully transformed Offer entity objects
   */
  async runOfferJob() {
    return Promise.all(
      Object.keys(CONFIGS_BY_PROVIDER).map((provider: OfferProvider) =>
        this.fetchOffer(provider).then(({ payload }) => {
          const offersData = this.resolveOffersFromResponse(provider, payload);

          return Promise.all(
            offersData.map((offerData) => {
              const offerDto = this.transformToOfferDto(provider, offerData);

              if (offerDto) {
                return validateOrReject(offerDto)
                  .then(() => this.transformToOfferEntity(offerDto))
                  .catch((e) =>
                    console.warn(
                      `[WARN] ValidationError: ${provider}`,
                      flattenValidationErrorMessage(e),
                    ),
                  );
              }

              return null;
            }),
          );
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

  transformToOfferDto(provider: OfferProvider, offerData: any) {
    const PayloadAdapterClass = CONFIGS_BY_PROVIDER[provider].payloadAdapter;
    try {
      return plainToInstance(
        OfferCreateDto,
        new PayloadAdapterClass(offerData),
        {
          excludeExtraneousValues: true,
        },
      );
    } catch (e) {
      console.warn(
        `[WARN] Transforming provider offer object to DTO failed: `,
        e.message,
      );
    }
  }

  transformToOfferEntity(offerDto: IOfferCreateDto) {
    return plainToInstance(Offer, offerDto);
  }
}
