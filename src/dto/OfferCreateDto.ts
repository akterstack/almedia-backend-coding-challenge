import { IsIn, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { IOfferCreateDto } from './IOfferCreateDto';
import { OfferProvider } from 'src/helpers';
import { Expose } from 'class-transformer';

export class OfferCreateDto implements IOfferCreateDto {
  @Expose()
  @Length(1, 255)
  name: string;

  @Expose()
  @Length(3, 255)
  get slug() {
    return this.providerName + '_' + this.externalOfferId;
  }

  @Expose()
  @IsNotEmpty()
  description: string;

  @Expose()
  @IsNotEmpty()
  requirements: string;

  @Expose()
  @Length(1, 255)
  thumbnail: string;

  @Expose()
  @IsIn([0, 1])
  isDesktop: number;

  @Expose()
  @IsIn([0, 1])
  isAndroid: number;

  @Expose()
  @IsIn([0, 1])
  isIos: number;

  @Expose()
  @Length(1, 255)
  offerUrlTemplate: string;

  @Expose()
  @Length(1, 255)
  @IsOptional()
  providerName: OfferProvider;

  @Expose()
  @Length(1, 255)
  @IsOptional()
  externalOfferId: string;
}
