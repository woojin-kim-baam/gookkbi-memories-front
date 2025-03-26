import { Feeling } from "src/types/aliases";
import Weather from "src/types/aliases/weather.alias";

// interface: post diary request body DTO //
export default interface PostDiaryRequestDto {
  weather: Weather;
  feeling: Feeling;
  title: string;
  content: string;
}
