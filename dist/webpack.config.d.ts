declare const _exports: {
    mode: string;
    entry: {
        index: string;
    };
    output: {
        filename: string;
        path: string;
        libraryTarget: string;
    };
    resolve: {
        extensions: string[];
    };
    module: {
        rules: ({
            test: RegExp;
            exclude: RegExp;
            use: {
                loader: string;
            };
        } | {
            test: RegExp;
            use: string;
            exclude: RegExp;
        })[];
    };
    optimization: {
        minimize: boolean;
        minimizer: TerserPlugin<import("terser").MinifyOptions>[];
    };
}[];
export = _exports;
import TerserPlugin = require("terser-webpack-plugin");
