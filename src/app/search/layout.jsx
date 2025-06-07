import './../globals.css';
import Search from '../components/Search';

export default function layout({ children }) {
  return (
    <div>
      <Search />
      {children}
    </div>
  );
}