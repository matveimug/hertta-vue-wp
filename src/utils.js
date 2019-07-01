const utils = {
    urlPathname: function (url) {
        const parser = document.createElement('a');
        parser.href = url;
        parser.hostname;
        let pathname = parser.pathname;

        if (pathname[0] != '/')
        { pathname = '/' + pathname }

        return pathname;
    }
};

export default utils