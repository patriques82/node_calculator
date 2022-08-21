const gcd = (a, b) => {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}

export default gcd;
