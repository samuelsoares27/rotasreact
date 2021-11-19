import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <Link to="/">Home</Link><br/>
      <Link to="/sobre">Sobre</Link><br/>
      <Link to="/contato">contato</Link><br/>
    </div>
  );
}
