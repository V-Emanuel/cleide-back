export default class ProductsService {

    public async productsData(data: any) {

        const products = data.products.data;
        let refactorProducts : any[] = [];

        products.forEach((product: any) => {
            refactorProducts.push({
                "id": product.id,
                "shop_id": product.shop_id,
                "title": product.title,
                "price": product.product_default_variant.price,
                "compare_at_price": product.product_default_variant.compare_at_price,
                "url_image": product.images.map((image: any) => image.url.replace("/", "")),
            });
        });

        return refactorProducts;
        return products;
    }
}