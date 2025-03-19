export default async function ReviewDetails({
    params, 
}: {
    params: Promise<{ productId: string }>
}){
    const { productId } = await params;
    return (
        <>
        <h1>Here is the list of reviews for Product - {productId}</h1>
        <h2>Good</h2>
        <h2>Nice</h2>
        <h2>Perfect</h2>
        </>
    )
  }