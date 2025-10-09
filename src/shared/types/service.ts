export interface IServiceCard {
  id: number;
  title: string;
  subtitle: string;
  price: number | null;
  discount: number | null;
  isPopular: boolean;
  perHour: boolean;
  hours?: number;
}
