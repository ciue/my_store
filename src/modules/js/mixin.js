const mixin = {
    filters: {
        currency(price) {
            const priceStr = '' + price;
            if (priceStr.indexOf('.') > 1) {
                const arr = priceStr.split('.');
                return arr[0] + '.' + (arr[1] + '0').substr(0, 2);
            }
            return priceStr + '.00';

        },
    },
};

export default mixin;
