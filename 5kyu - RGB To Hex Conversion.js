function rgb(r, g, b) {

    function toHex(x) {

        switch (true) {
            case (x > 255): return "FF"
                break
            case (x <= 0): return "00"
                break
            default: return x.toString(16).padStart(2, '0')
        }
    }

    return (toHex(r) + toHex(g) + toHex(b)).toUpperCase()

}