import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
	const [products, setProducts] = useState<string[]>([]);

	useEffect(() => {
		console.log("Fetching Products in", category);
		setProducts(["Clothing", "Household"]);
	}, [category]); //this parameter is part of the end state
	return <div>ProductList</div>;
};

export default ProductList;
