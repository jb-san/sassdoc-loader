import { exec } from 'child_process';

module.exports = function scsslintLoader(source, map) {
    const args = [];
    let sassdocConfig = [];
    const _cwd = process.cwd();

    function configCWD() {
        args.push('./node_modules/.bin/sassdoc');
        args.push(sassdocConfig.entry);

        if (sassdocConfig.config) {
            args.push(`--config=${sassdocConfig.config}`);
        }

        if (sassdocConfig.dest) {
            args.push(`--dest=${sassdocConfig.dest}`);
        }

        if (sassdocConfig.theme) {
            args.push(`--theme=${sassdocConfig.theme}`);
        }

        args.push(';');
        exec(args.join(' '), {
            cwd: _cwd,
        }, (error) => {
            if (error) {
                // console.log('sassdoc-loader error: ', error);
            }
        });
    }

    const sassdocDefaults = {
        dest: false,
        config: false,
        theme: false,
        entry: this.resourcePath,
    };
    const globalSettings = this.options.sassdoc || {};
    // const loader_settings = loaderUtils.parseQuery(this.query) || {};
    sassdocConfig = Object.assign(sassdocDefaults, globalSettings);
    this.cacheable();
    if (sassdocConfig.entry.indexOf(_cwd) === 0) {
        sassdocConfig.entry = sassdocConfig.entry.substr(_cwd.length + 1);
    }
    configCWD();
    this.callback(null, source, map);
};
