import { getProducts, getProductByID, createProduct, deleteProduct } from "./api/fakeStoreQueries";

await getProducts();
await getProductByID(1);
await getProductByID(2);

await createProduct({
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
});
await deleteProduct(1);