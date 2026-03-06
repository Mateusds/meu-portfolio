declare module "eva-icons" {
  interface EvaSvgOptions {
    fill?: string;
    width?: string | number;
    height?: string | number;
    class?: string;
  }

  interface EvaIconDef {
    toSvg: (options?: EvaSvgOptions) => string;
  }

  interface EvaReplaceOptions {
    fill?: string;
    width?: string | number;
    height?: string | number;
    animation?: {
      type?: string;
      hover?: boolean;
      infinite?: boolean;
    };
  }

  const eva: {
    icons: Record<string, EvaIconDef>;
    replace: (options?: EvaReplaceOptions) => void;
  };

  export default eva;
}
