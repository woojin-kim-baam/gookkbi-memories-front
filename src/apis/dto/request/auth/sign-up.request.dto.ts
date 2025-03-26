// interface: sign up request Body DTO //

import { JoinType } from "src/types/aliases";

export default interface SignUpRequestDto {
  userId: string;
  userPassword: string;
  name: string;
  address: string;
  detailAddress: string | null;
  joinType: JoinType;
  snsId?: string;
}
