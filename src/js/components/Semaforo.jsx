import React, { useState } from "react";


//create your first component
const Semaforo = () => {

	const [selected, setSelected] = useState('')

	const handleClick = (val) => {
		setSelected(val)
	}


	return (
		<div className="semaforo" id="Semaforo">
			<div className={`${selected === 'luz-Roja' ? 'luz-Roja active' : 'luz-Roja inactive'}`} onClick={() => handleClick('luz-Roja')}></div>
			<div className={`${selected === 'luz-Amarilla' ? 'luz-Amarilla active' : 'luz-Amarilla inactive'}`} onClick={() => handleClick('luz-Amarilla')}></div>
			<div className={`${selected === 'luz-Verde' ? 'luz-Verde active' : 'luz-Verde inactive'}`} onClick={() => handleClick('luz-Verde')}></div>
		</div>
	);
};

export default Semaforo;