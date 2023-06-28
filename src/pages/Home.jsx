import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import Text from '../components/Text';

export default function Home() {
  return (
    <Container className="flex flex-col justify-center items-center mt-28">
      <header className="flex flex-col items-center gap-1">
        <Text as="h1" variation="4xl" className="text-center">
          Busque qualquer endereço...
        </Text>
        <Text as="p" className="text-gray-300 italic text-center">
          Digite o valor do CEP do endereço para coletar mais informações sobre
          o mesmo.
        </Text>
      </header>

      <SearchForm />
    </Container>
  );
}
