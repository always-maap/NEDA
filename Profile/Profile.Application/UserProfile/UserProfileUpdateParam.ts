export interface UserProfileUpdateParam {
  Location?: {
    Country: string;
    State: string;
    City: string;
  };
  Age?: string;
  Bio?: string;
  LookingFor?: string;
  Education?: string;
}
