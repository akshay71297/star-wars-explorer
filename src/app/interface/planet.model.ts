export class Planet {
  name: string;
  terrain: string;
  population: number;
  title = () => this.name;
}
