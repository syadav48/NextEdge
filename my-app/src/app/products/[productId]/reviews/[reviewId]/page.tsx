export default async function ProductReview({
    params, 
}: {
    params: Promise<{ productId: string, reviewId: string }>
}){
    const { productId, reviewId } = await params;
    return <h2>Review {reviewId} for product {productId}</h2>
  }