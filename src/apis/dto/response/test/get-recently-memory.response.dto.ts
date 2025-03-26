// interface: get recently memory response body DTO //

import { MemoryTest } from "src/types/interfaces";
import ResponseDto from "../response.dto";

export default interface GetRecentlyMemoryResponseDto extends ResponseDto {
    memoryTests: MemoryTest[];
}