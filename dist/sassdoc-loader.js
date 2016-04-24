'use strict';

var _child_process = require('child_process');

module.exports = function scsslintLoader(source, map) {
    var args = [];
    var sassdocConfig = [];
    var _cwd = process.cwd();

    function configCWD() {
        args.push('./node_modules/.bin/sassdoc');
        args.push(sassdocConfig.entry);

        if (sassdocConfig.config) {
            args.push('--config=' + sassdocConfig.config);
        }

        if (sassdocConfig.dest) {
            args.push('--dest=' + sassdocConfig.dest);
        }

        if (sassdocConfig.theme) {
            args.push('--theme=' + sassdocConfig.theme);
        }

        args.push(';');
        (0, _child_process.exec)(args.join(' '), {
            cwd: _cwd
        }, function (error) {
            if (error) {
                // console.log('documentation-loader error: ', error);
            }
        });
    }

    var sassdocDefaults = {
        dest: './documentation',
        config: '',
        theme: false,
        entry: this.resourcePath
    };
    var globalSettings = this.options.sassdoc || {};
    // const loader_settings = loaderUtils.parseQuery(this.query) || {};
    sassdocConfig = Object.assign(sassdocDefaults, globalSettings);
    this.cacheable();
    if (sassdocConfig.entry.indexOf(_cwd) === 0) {
        sassdocConfig.entry = sassdocConfig.entry.substr(_cwd.length + 1);
    }
    configCWD();
    this.callback(null, source, map);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9zYXNzZG9jLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLE9BQU8sT0FBUCxHQUFpQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDbEQsUUFBTSxPQUFPLEVBQWI7QUFDQSxRQUFJLGdCQUFnQixFQUFwQjtBQUNBLFFBQU0sT0FBTyxRQUFRLEdBQVIsRUFBYjs7QUFFQSxhQUFTLFNBQVQsR0FBcUI7QUFDakIsYUFBSyxJQUFMLENBQVUsNkJBQVY7QUFDQSxhQUFLLElBQUwsQ0FBVSxjQUFjLEtBQXhCOztBQUVBLFlBQUksY0FBYyxNQUFsQixFQUEwQjtBQUN0QixpQkFBSyxJQUFMLGVBQXNCLGNBQWMsTUFBcEM7QUFDSDs7QUFFRCxZQUFJLGNBQWMsSUFBbEIsRUFBd0I7QUFDcEIsaUJBQUssSUFBTCxhQUFvQixjQUFjLElBQWxDO0FBQ0g7O0FBRUQsWUFBSSxjQUFjLEtBQWxCLEVBQXlCO0FBQ3JCLGlCQUFLLElBQUwsY0FBcUIsY0FBYyxLQUFuQztBQUNIOztBQUVELGFBQUssSUFBTCxDQUFVLEdBQVY7QUFDQSxpQ0FBSyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQUwsRUFBcUI7QUFDakIsaUJBQUs7QUFEWSxTQUFyQixFQUVHLFVBQUMsS0FBRCxFQUFXO0FBQ1YsZ0JBQUksS0FBSixFQUFXOztBQUVWO0FBQ0osU0FORDtBQU9IOztBQUVELFFBQU0sa0JBQWtCO0FBQ3BCLGNBQU0saUJBRGM7QUFFcEIsZ0JBQVEsRUFGWTtBQUdwQixlQUFPLEtBSGE7QUFJcEIsZUFBTyxLQUFLO0FBSlEsS0FBeEI7QUFNQSxRQUFNLGlCQUFpQixLQUFLLE9BQUwsQ0FBYSxPQUFiLElBQXdCLEVBQS9DOztBQUVBLG9CQUFnQixPQUFPLE1BQVAsQ0FBYyxlQUFkLEVBQStCLGNBQS9CLENBQWhCO0FBQ0EsU0FBSyxTQUFMO0FBQ0EsUUFBSSxjQUFjLEtBQWQsQ0FBb0IsT0FBcEIsQ0FBNEIsSUFBNUIsTUFBc0MsQ0FBMUMsRUFBNkM7QUFDekMsc0JBQWMsS0FBZCxHQUFzQixjQUFjLEtBQWQsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBSyxNQUFMLEdBQWMsQ0FBekMsQ0FBdEI7QUFDSDtBQUNEO0FBQ0EsU0FBSyxRQUFMLENBQWMsSUFBZCxFQUFvQixNQUFwQixFQUE0QixHQUE1QjtBQUNILENBOUNEIiwiZmlsZSI6InNhc3Nkb2MtbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNjc3NsaW50TG9hZGVyKHNvdXJjZSwgbWFwKSB7XG4gICAgY29uc3QgYXJncyA9IFtdO1xuICAgIGxldCBzYXNzZG9jQ29uZmlnID0gW107XG4gICAgY29uc3QgX2N3ZCA9IHByb2Nlc3MuY3dkKCk7XG5cbiAgICBmdW5jdGlvbiBjb25maWdDV0QoKSB7XG4gICAgICAgIGFyZ3MucHVzaCgnLi9ub2RlX21vZHVsZXMvLmJpbi9zYXNzZG9jJyk7XG4gICAgICAgIGFyZ3MucHVzaChzYXNzZG9jQ29uZmlnLmVudHJ5KTtcblxuICAgICAgICBpZiAoc2Fzc2RvY0NvbmZpZy5jb25maWcpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChgLS1jb25maWc9JHtzYXNzZG9jQ29uZmlnLmNvbmZpZ31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYXNzZG9jQ29uZmlnLmRlc3QpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChgLS1kZXN0PSR7c2Fzc2RvY0NvbmZpZy5kZXN0fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhc3Nkb2NDb25maWcudGhlbWUpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChgLS10aGVtZT0ke3Nhc3Nkb2NDb25maWcudGhlbWV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBhcmdzLnB1c2goJzsnKTtcbiAgICAgICAgZXhlYyhhcmdzLmpvaW4oJyAnKSwge1xuICAgICAgICAgICAgY3dkOiBfY3dkLFxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkb2N1bWVudGF0aW9uLWxvYWRlciBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzYXNzZG9jRGVmYXVsdHMgPSB7XG4gICAgICAgIGRlc3Q6ICcuL2RvY3VtZW50YXRpb24nLFxuICAgICAgICBjb25maWc6ICcnLFxuICAgICAgICB0aGVtZTogZmFsc2UsXG4gICAgICAgIGVudHJ5OiB0aGlzLnJlc291cmNlUGF0aCxcbiAgICB9O1xuICAgIGNvbnN0IGdsb2JhbFNldHRpbmdzID0gdGhpcy5vcHRpb25zLnNhc3Nkb2MgfHwge307XG4gICAgLy8gY29uc3QgbG9hZGVyX3NldHRpbmdzID0gbG9hZGVyVXRpbHMucGFyc2VRdWVyeSh0aGlzLnF1ZXJ5KSB8fCB7fTtcbiAgICBzYXNzZG9jQ29uZmlnID0gT2JqZWN0LmFzc2lnbihzYXNzZG9jRGVmYXVsdHMsIGdsb2JhbFNldHRpbmdzKTtcbiAgICB0aGlzLmNhY2hlYWJsZSgpO1xuICAgIGlmIChzYXNzZG9jQ29uZmlnLmVudHJ5LmluZGV4T2YoX2N3ZCkgPT09IDApIHtcbiAgICAgICAgc2Fzc2RvY0NvbmZpZy5lbnRyeSA9IHNhc3Nkb2NDb25maWcuZW50cnkuc3Vic3RyKF9jd2QubGVuZ3RoICsgMSk7XG4gICAgfVxuICAgIGNvbmZpZ0NXRCgpO1xuICAgIHRoaXMuY2FsbGJhY2sobnVsbCwgc291cmNlLCBtYXApO1xufTtcbiJdfQ==