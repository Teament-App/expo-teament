const base = "https://cdn.verkian.com/resources";

class GetImageFromCDN {
  base: string;
  constructor(base: string) {
    this.base = base;
  }

  getSvg(iconName: string): string {
    return `${this.base}/${iconName}`;
  }
}

export const imageUtil = new GetImageFromCDN(base);
