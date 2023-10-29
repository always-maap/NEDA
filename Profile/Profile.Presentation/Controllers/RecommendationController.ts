import type { Request, Response } from "express";

import { IRecommendationService } from "Profile.Application";

export class RecommendationController {
  private readonly _recommendationService: IRecommendationService;

  constructor(recommendationService: IRecommendationService) {
    this._recommendationService = recommendationService;
  }

  public Get = async (req: Request, res: Response) => {
    res.send("ok");
  };
}

// 10 match -> not in matched, not in rejected, not in accepted
