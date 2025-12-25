import { useFlatsQuery } from '@/entities/flat';
import { FlatCard } from './flat-card';

export function FlatList() {
  const { data } = useFlatsQuery();

  return (
    <>{data ? data.map((flat, index) => (<FlatCard key={index} flat={flat}/>)) : <p>Пусто</p>}</>
  )
}