import { ApiProperty } from '@nestjs/swagger';

export class DataDecodedParameter {
  @ApiProperty()
  name: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  value: unknown;
  @ApiProperty()
  valueDecoded?:
    | Record<string, unknown>
    | Record<string, unknown>[]
    | undefined;

  constructor(
    name: string,
    type: string,
    value: unknown,
    valueDecoded:
      | Record<string, unknown>
      | Record<string, unknown>[]
      | undefined,
  ) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.valueDecoded = valueDecoded;
  }
}
