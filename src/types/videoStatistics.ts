import { IconName } from "./Icon";

export interface StatisticsProps  {
    name: IconName;
    value: string;
  };

export interface VideoStatisticsProps  {
  statistics: StatisticsProps[];
};
