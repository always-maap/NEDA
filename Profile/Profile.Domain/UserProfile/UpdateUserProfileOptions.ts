export interface UpdateUserProfileOptions {
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
