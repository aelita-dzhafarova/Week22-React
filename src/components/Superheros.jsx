import superheros from '../data/superheros.json';

export default function Superheros() {
    return (
        <div className='container-superheros'>{
            superheros.map((item, index)=>(
                <div className="item" key={index}>
                    <h1 className='item-title'>{item.name}</h1>
                    <img src={item.url} alt={item.name}/>
                    <div>
                        <p>Universe: {item.universe}</p>
                        <p>Alterego: {item.alterego}</p>
                        <p>Occupation: {item.occupation}</p>
                        <p>Friends: {item.friends}</p>
                        <p>Superpowers: {item.superpowers}</p>
                        <p>Info: {item.info}</p>
                    </div>
                </div>
            ))
        }
        </div>
    )
}