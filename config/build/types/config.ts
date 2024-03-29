export type TypeBuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface IBuildOptions {
  mode: TypeBuildMode;
  paths: IBuildPaths;
  port: number;
  apiUrl: string;
}

export interface IBuildEnv {
  mode: TypeBuildMode;
  port: number;
  apiUrl: string;
}
