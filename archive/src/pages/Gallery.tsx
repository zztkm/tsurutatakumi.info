import { ReactElement } from "react";
import Head from "../components/Head";
import "98.css"

import hyouBgWaterBlue from '../assets/hyou-1-bg-waterblue.jpg'
import kumoriSuisen from '../assets/kumori-suisen.png'

export default function Gallery(): ReactElement {
	return (
		<>
			<Head title="ギャラリー" />
			<h1>
				ギャラリー
			</h1>
			<div style={{ display: "flex" }}>
				<div className="window" style={{ width: "315px" }}>
					<div className="title-bar">
						<div className="title-bar-text">210829: hyou</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<img src={hyouBgWaterBlue} />
					</div>
				</div>
				<div className="window" style={{ width: "315px" }}>
					<div className="title-bar">
						<div className="title-bar-text">210831: 水仙</div>
						<div className="title-bar-controls">
							<button aria-label="Minimize"></button>
							<button aria-label="Maximize"></button>
							<button aria-label="Close"></button>
						</div>
					</div>
					<div className="window-body">
						<img src={kumoriSuisen} />
					</div>
				</div>
			</div>
		</>
	)
}