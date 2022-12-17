import { useEffect, useState } from 'react';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import PizzaBlock from '../Components/PizzaBlock';

function Home () {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchPizza = async () => {
		const pizzas = await (await fetch('https://635a4e3638725a1746c29644.mockapi.io/items')).json();
		setIsLoading(false);
		setItems(pizzas);
	};

	useEffect(() => {
		fetchPizza().then();
	}, []);

	return(
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{ isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))
				}
			</div>
		</>
	);
}

export default Home;
