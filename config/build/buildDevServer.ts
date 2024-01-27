import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type IBuildOptions } from './types/config';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
    hot: true
  };
}
