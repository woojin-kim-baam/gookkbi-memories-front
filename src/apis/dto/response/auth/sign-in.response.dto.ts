// interface: sign in response body DTO //

// import ResponseDto from "../response.dto";
import { ResponseDto } from "src/apis/dto/response"; // 바꾼이유 : 절대 경로를 유지하기 위해 / 상대 경로는 폴더 이동 시 import가 되지 않는다.

export default interface SignInResponseDto extends ResponseDto {
  accessToken: string;
  expiration: number;
}
