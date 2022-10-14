import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Balance } from './balance.entity';

@ApiExtraModels(Balance)
export class Balances {
  @ApiProperty()
  fiatTotal: number;
  @ApiProperty({ type: 'array', oneOf: [{ $ref: getSchemaPath(Balance) }] })
  items: Balance[];
}
