import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

import theme from "../theme/theme";

const Layout = props => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
			</Head>
			<Navbar />
			{props.children}
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed animi maiores? Modi
				sequi error amet, ad praesentium sunt, architecto assumenda voluptas atque reprehenderit
				deleniti libero voluptates. Reprehenderit eum alias omnis perferendis esse ullam sint magni
				quo assumenda maxime impedit, quaerat fugit nisi officia atque aperiam dicta eius nostrum
				odio, consequatur nihil accusamus sunt! Corporis sapiente ipsum neque amet ipsa minima
				vitae, nostrum facilis quasi deleniti asperiores doloremque in, fuga id itaque eligendi
				totam tenetur quam maxime perferendis consequatur repellat atque! Reiciendis animi est
				perferendis aliquid natus eligendi, dignissimos similique corporis delectus quam officiis.
				Ab officiis eligendi temporibus cupiditate, delectus libero quo fugiat iusto exercitationem
				nesciunt unde, illum maiores praesentium vero voluptates tenetur architecto, expedita porro
				numquam vitae aut? Consequuntur, atque similique? Recusandae suscipit corrupti saepe
				aspernatur obcaecati commodi iusto iste officia voluptate pariatur minus nemo provident
				tempore est quasi laborum error in, repudiandae nisi amet aperiam asperiores! Veniam minima
				neque odit nisi nesciunt perspiciatis accusantium cupiditate culpa quidem iure quae ad
				eligendi iusto sequi cum dolores voluptas harum distinctio assumenda, dolor ullam
				consectetur iste sit. Accusantium blanditiis nihil in nam hic doloribus excepturi voluptate
				esse odit quia illum modi reprehenderit quam nisi laboriosam ad sint eius aliquam iste
				reiciendis, facere perferendis ab! Nihil esse porro saepe laboriosam autem blanditiis
				consectetur quam! Quas, ipsum saepe. Ex quisquam sunt omnis pariatur libero molestias
				cupiditate eveniet praesentium beatae nulla ipsam ratione quae eligendi quas, nesciunt eos
				cumque. Possimus accusantium quod minus nostrum, sequi enim, cupiditate, fuga repellendus
				animi deserunt quisquam quos id. Cupiditate, magni excepturi! Ipsa, nesciunt, quia nulla
				aliquid sint eius quo ullam cumque enim, ipsam doloribus. Voluptatem earum, enim quaerat
				dolore harum quod? Cumque at harum facere assumenda nam consequuntur iure temporibus nulla
				ratione mollitia reprehenderit ex delectus ullam possimus deserunt suscipit, totam sapiente
				reiciendis modi sit. Unde ipsam sint, dolor architecto dicta voluptas ea nihil cupiditate
				doloremque explicabo ab reiciendis officiis similique illo qui expedita perspiciatis ut
				veniam debitis neque eligendi ipsum distinctio maiores! Nesciunt consequuntur illo iste
				tempora, sed aut nobis, ipsam quibusdam asperiores eveniet ipsa? Laborum nisi inventore
				facere perspiciatis recusandae mollitia error, sint ullam iste voluptatibus consequatur
				officia quibusdam praesentium in consectetur, tenetur nobis quam. Cum deserunt fugit ipsam
				esse necessitatibus non tempore cumque doloribus eius quos quis vel officia recusandae
				delectus, voluptatibus dolor similique in qui? Laudantium nemo cupiditate provident beatae
				voluptatem repellendus odit, ad aut itaque magni nihil natus, aperiam nesciunt unde? Sit
				expedita maxime eos mollitia. Itaque tempore similique sunt molestias unde omnis vitae
				exercitationem. Odio ex porro hic, nam nihil animi eveniet aspernatur vel, voluptatem dicta
				dolore id ipsa, neque mollitia incidunt iusto tempore. Perspiciatis eveniet fugit sunt
				quisquam dolor ullam, quia rem a minus maxime, dignissimos sed. Laudantium id cumque ipsam,
				est pariatur suscipit libero obcaecati nemo nesciunt incidunt rerum, delectus minus! Placeat
				optio maxime voluptatum eveniet, aspernatur dolore laudantium at quisquam obcaecati autem
				laborum harum recusandae? Soluta optio vero ducimus maxime vel nesciunt! Praesentium
				voluptatem necessitatibus facilis, dolorem iusto id eaque illo pariatur at magni error,
				quidem maxime perferendis tempora aut saepe quas officia eligendi, non voluptatum ullam?
				Veniam officia cum explicabo molestias quidem quos praesentium! Ab non, deleniti recusandae
				expedita nesciunt facere beatae aspernatur ipsum provident minima voluptatibus? Nisi
				architecto repellendus odit nobis voluptatum, reiciendis corrupti eligendi fugit
				accusantium!
			</p>
			<Footer />
			<style jsx global>
				{`
					@import url("https://fonts.googleapis.com/css?family=Rubik&display=swap");
					html {
						box-sizing: border-box;
					}
					*,
					*:before,
					*:after {
						box-sizing: inherit;
					}
					body {
						font-family: "Rubik", sans-serif;
						margin: 0;
						padding: 0;
						font-size: 16px;
						font-weight: 400;
						line-height: 1.6;
						color: #2b2b2b;
						scroll-behaviour: smooth;
						min-height: 100%;
						min-width: 320px;
					}
					a {
						text-decoration: none;
						color: inherit;
						cursor: pointer;
					}
					button {
						cursor: pointer;
					}
					ul {
						list-style: none;
					}
				`}
			</style>
		</>
	);
};

export default Layout;
