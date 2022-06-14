declare module '*.svg' {
  const url: string;
  export default url;
  export const ReactComponent: any;
}

declare namespace NodeJS {
  type Timeout = number;
  type Timer = number;
}
