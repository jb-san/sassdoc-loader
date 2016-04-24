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
                // console.log('sassdoc-loader error: ', error);
            }
        });
    }

    var sassdocDefaults = {
        dest: false,
        config: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9zYXNzZG9jLWxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLE9BQU8sT0FBUCxHQUFpQixTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDbEQsUUFBTSxPQUFPLEVBQWI7QUFDQSxRQUFJLGdCQUFnQixFQUFwQjtBQUNBLFFBQU0sT0FBTyxRQUFRLEdBQVIsRUFBYjs7QUFFQSxhQUFTLFNBQVQsR0FBcUI7QUFDakIsYUFBSyxJQUFMLENBQVUsNkJBQVY7QUFDQSxhQUFLLElBQUwsQ0FBVSxjQUFjLEtBQXhCOztBQUVBLFlBQUksY0FBYyxNQUFsQixFQUEwQjtBQUN0QixpQkFBSyxJQUFMLGVBQXNCLGNBQWMsTUFBcEM7QUFDSDs7QUFFRCxZQUFJLGNBQWMsSUFBbEIsRUFBd0I7QUFDcEIsaUJBQUssSUFBTCxhQUFvQixjQUFjLElBQWxDO0FBQ0g7O0FBRUQsWUFBSSxjQUFjLEtBQWxCLEVBQXlCO0FBQ3JCLGlCQUFLLElBQUwsY0FBcUIsY0FBYyxLQUFuQztBQUNIOztBQUVELGFBQUssSUFBTCxDQUFVLEdBQVY7QUFDQSxpQ0FBSyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQUwsRUFBcUI7QUFDakIsaUJBQUs7QUFEWSxTQUFyQixFQUVHLFVBQUMsS0FBRCxFQUFXO0FBQ1YsZ0JBQUksS0FBSixFQUFXOztBQUVWO0FBQ0osU0FORDtBQU9IOztBQUVELFFBQU0sa0JBQWtCO0FBQ3BCLGNBQU0sS0FEYztBQUVwQixnQkFBUSxLQUZZO0FBR3BCLGVBQU8sS0FIYTtBQUlwQixlQUFPLEtBQUs7QUFKUSxLQUF4QjtBQU1BLFFBQU0saUJBQWlCLEtBQUssT0FBTCxDQUFhLE9BQWIsSUFBd0IsRUFBL0M7O0FBRUEsb0JBQWdCLE9BQU8sTUFBUCxDQUFjLGVBQWQsRUFBK0IsY0FBL0IsQ0FBaEI7QUFDQSxTQUFLLFNBQUw7QUFDQSxRQUFJLGNBQWMsS0FBZCxDQUFvQixPQUFwQixDQUE0QixJQUE1QixNQUFzQyxDQUExQyxFQUE2QztBQUN6QyxzQkFBYyxLQUFkLEdBQXNCLGNBQWMsS0FBZCxDQUFvQixNQUFwQixDQUEyQixLQUFLLE1BQUwsR0FBYyxDQUF6QyxDQUF0QjtBQUNIO0FBQ0Q7QUFDQSxTQUFLLFFBQUwsQ0FBYyxJQUFkLEVBQW9CLE1BQXBCLEVBQTRCLEdBQTVCO0FBQ0gsQ0E5Q0QiLCJmaWxlIjoic2Fzc2RvYy1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2Nzc2xpbnRMb2FkZXIoc291cmNlLCBtYXApIHtcbiAgICBjb25zdCBhcmdzID0gW107XG4gICAgbGV0IHNhc3Nkb2NDb25maWcgPSBbXTtcbiAgICBjb25zdCBfY3dkID0gcHJvY2Vzcy5jd2QoKTtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ0NXRCgpIHtcbiAgICAgICAgYXJncy5wdXNoKCcuL25vZGVfbW9kdWxlcy8uYmluL3Nhc3Nkb2MnKTtcbiAgICAgICAgYXJncy5wdXNoKHNhc3Nkb2NDb25maWcuZW50cnkpO1xuXG4gICAgICAgIGlmIChzYXNzZG9jQ29uZmlnLmNvbmZpZykge1xuICAgICAgICAgICAgYXJncy5wdXNoKGAtLWNvbmZpZz0ke3Nhc3Nkb2NDb25maWcuY29uZmlnfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhc3Nkb2NDb25maWcuZGVzdCkge1xuICAgICAgICAgICAgYXJncy5wdXNoKGAtLWRlc3Q9JHtzYXNzZG9jQ29uZmlnLmRlc3R9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2Fzc2RvY0NvbmZpZy50aGVtZSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKGAtLXRoZW1lPSR7c2Fzc2RvY0NvbmZpZy50aGVtZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyZ3MucHVzaCgnOycpO1xuICAgICAgICBleGVjKGFyZ3Muam9pbignICcpLCB7XG4gICAgICAgICAgICBjd2Q6IF9jd2QsXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Nhc3Nkb2MtbG9hZGVyIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHNhc3Nkb2NEZWZhdWx0cyA9IHtcbiAgICAgICAgZGVzdDogZmFsc2UsXG4gICAgICAgIGNvbmZpZzogZmFsc2UsXG4gICAgICAgIHRoZW1lOiBmYWxzZSxcbiAgICAgICAgZW50cnk6IHRoaXMucmVzb3VyY2VQYXRoLFxuICAgIH07XG4gICAgY29uc3QgZ2xvYmFsU2V0dGluZ3MgPSB0aGlzLm9wdGlvbnMuc2Fzc2RvYyB8fCB7fTtcbiAgICAvLyBjb25zdCBsb2FkZXJfc2V0dGluZ3MgPSBsb2FkZXJVdGlscy5wYXJzZVF1ZXJ5KHRoaXMucXVlcnkpIHx8IHt9O1xuICAgIHNhc3Nkb2NDb25maWcgPSBPYmplY3QuYXNzaWduKHNhc3Nkb2NEZWZhdWx0cywgZ2xvYmFsU2V0dGluZ3MpO1xuICAgIHRoaXMuY2FjaGVhYmxlKCk7XG4gICAgaWYgKHNhc3Nkb2NDb25maWcuZW50cnkuaW5kZXhPZihfY3dkKSA9PT0gMCkge1xuICAgICAgICBzYXNzZG9jQ29uZmlnLmVudHJ5ID0gc2Fzc2RvY0NvbmZpZy5lbnRyeS5zdWJzdHIoX2N3ZC5sZW5ndGggKyAxKTtcbiAgICB9XG4gICAgY29uZmlnQ1dEKCk7XG4gICAgdGhpcy5jYWxsYmFjayhudWxsLCBzb3VyY2UsIG1hcCk7XG59O1xuIl19