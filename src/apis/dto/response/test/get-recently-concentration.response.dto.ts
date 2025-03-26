// interface: get recently concentration response body DTO //

import { ConcentrationTest } from "src/types/interfaces";
import ResponseDto from "../response.dto";

export default interface GetRecentlyConcentrationResponseDto extends ResponseDto {
    concentrationTests: ConcentrationTest[];
}