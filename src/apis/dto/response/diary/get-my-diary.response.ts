import { Diary } from "src/types/interfaces";
import ResponseDto from "../response.dto";

// interface: get my diary response body DTO //
export default interface GetMyDiaryResponseDto extends ResponseDto {
  diaries: Diary[];
}
