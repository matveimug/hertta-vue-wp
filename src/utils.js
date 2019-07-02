const utils = {
    urlPathname: function (url) {
        const parser = document.createElement('a');
        parser.href = url;
        parser.hostname;
        let pathname = parser.pathname;

        if (pathname[0] != '/')
        { pathname = '/' + pathname }

        return pathname;
    },
    colorToRgb: function (color) {
        const d = document.createElement("div");
        d.style.color = color;
        document.body.appendChild(d);
        let parsed = window.getComputedStyle(d).color;
        document.body.removeChild(d);
        return parsed
    },
    randomNumbers: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
};

export default utils