/**
 * Extending of Number.
 */
class Number {
    constructor(numberid, varname) {
        this[varname] = numberid
    }
}

class Heading {
    constructor(text, numberhea) {
        this.text = "<h" + numberhea + ">" + text + "</h1>"
    }
}

class Heading1 extends Heading {
    constructor(text, numberhea, id) {
        super(text, numberhea)
        document.getElementById(id).innerHTML = text
    }
}

class Heading2 extends Heading {
    constructor(text, numberhea, id) {
        super(text, numberhea)
        document.getElementById(id).innerHTML = text
    }
}

class Heading3 extends Heading {
    constructor(text, numberhea, id) {
        super(text, numberhea)
        document.getElementById(id).innerHTML = text
    }
}

class Heading4 extends Heading {
    constructor(text, numberhea, id) {
        super(text, numberhea)
        document.getElementById(id).innerHTML = text
    }
}

class Heading5 extends Heading {
    constructor(text, numberhea, id) {
        super(text, numberhea)
        document.getElementById(id).innerHTML = text
    }
}

class Heading6 extends Heading {
    constructor(text, numberhea, id) {
        super(text, numberhea)
        document.getElementById(id).innerHTML = text
    }
}

class Iframe {
    constructor(src, title, width, height) {
        this.text = '<iframe src="' + src + '" title="' + title + '" width="' + width + '" height="' + height + '"></iframe>'

        document.getElementById(id).innerHTML = this.text
    }
}

