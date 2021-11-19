import { useParams } from 'react-router-dom'

export default function Produto() {

   const { id, nome } = useParams();
  return (
    <div>
          <h1>Grade de produtos</h1>
          <span>{nome} {id}</span>
    </div>
  );
}
