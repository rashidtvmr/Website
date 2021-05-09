
export interface Statistic {
  exclamatoryText: string;
  text: string;
  image: string; // or component?
}

export interface StatisticsProps {
  statistics: Statistic[]
}

export const StatisticsSection = ({
                                    statistics
                                  }: StatisticsProps) => {
  return (
    <div>Statistics section!</div>
  )
}