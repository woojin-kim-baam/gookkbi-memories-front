// interface: get empathy response body DTO //

import ResponseDto from "../response.dto";

export default interface GetEmpathyResponseDto extends ResponseDto {
  empathies: string[];
}
