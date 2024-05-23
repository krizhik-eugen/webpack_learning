import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/types';

export function buildLoaders({mode}: BuildOptions): ModuleOptions['rules'] {
    const isDev = mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }

    const scssLoader = {
        test: /\.(sa|sc|c)ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader = {
        // ts loader умеет работать с  JSX
        // без ts loader нужно ставить и настраивать babel
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            transpileOnly: isDev
        }
    }

    return [
        assetLoader,
        scssLoader,
        tsLoader,
        svgLoader,
    ]
}