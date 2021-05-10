import { request } from "./network"

export function getDetail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request({
        url: "/recommend"
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title,
            this.desc = itemInfo.desc,
            this.price = itemInfo.lowNowPrice,
            this.oldPrice = itemInfo.oldPrice,
            this.discountDesc = itemInfo.discountDesc,
            this.discountBgColor = itemInfo.discountBgColor,
            this.columns = columns,
            this.services = services,
            this.realPrice = itemInfo.realPrice
    }
}

export class Shop {
    constructor(ShopInfo) {
        this.name = ShopInfo.name;
        this.Fans = ShopInfo.cFans;
        this.Sells = ShopInfo.cSells;
        this.goodCount = ShopInfo.cGoods;
        this.score = ShopInfo.score;
        this.logo = ShopInfo.shopLogo;

    }
}
export class GoodsParam {
    constructor(info, rule) {
        this.image = info.image ? info.image[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables
    }
}