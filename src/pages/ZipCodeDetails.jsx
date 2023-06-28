import { useNavigate, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';
import Card from '../components/Card';
import correiosLogo from '../assets/images/logo-correios.png';
import viaCEPLogo from '../assets/images/logo-viacep.png';
import noLogo from '../assets/images/no-logo-fallback.svg';
import Button from '../components/Button';
import useSWR from 'swr';
import Skeleton from 'react-loading-skeleton';

const servicesMapper = {
  correios: {
    logo: correiosLogo,
    name: 'Correios',
  },
  'correios-alt': {
    logo: correiosLogo,
    name: 'Correios',
  },
  viacep: {
    logo: viaCEPLogo,
    name: 'ViaCEP',
  },
  widenet: {
    name: 'Widenet',
  },
};

export default function ZipCodeDetails() {
  const { zipCode } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useSWR(
    `https://brasilapi.com.br/api/cep/v2/${zipCode}`
  );

  // Exemplo utilizando axios com estados
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   axios
  //     .get(`https://brasilapi.com.br/api/cep/v2/${zipCode}`)
  //     .then(({ data }) => {
  //       setData(data);
  //     });
  // }, [zipCode]);

  return (
    <Container className="mt-7">
      <header className="flex items-center gap-2">
        {!isLoading ? (
          <>
            <div
              className="w-32 h-11 bg-no-repeat bg-cover bg-center rounded"
              style={{
                backgroundImage: `url("${
                  servicesMapper[data?.data?.service]?.logo || noLogo
                }")`,
              }}
            />
            <Text as="h1" variation="3xl">
              CEP {zipCode}
              {servicesMapper[data?.data?.service]?.name
                ? ` via ${servicesMapper[data?.data?.service].name}`
                : ''}
            </Text>
          </>
        ) : (
          <>
            <Skeleton width={128} height={44} />
            <Skeleton width={368} height={36} />
          </>
        )}
      </header>

      {!error && (
        <section className="grid lg:grid-cols-3 gap-2 mt-5">
          <Card>
            <Text className="font-bold">Endereço:</Text>{' '}
            {!isLoading ? (
              <Text>{data?.data?.street}</Text>
            ) : (
              <Skeleton className="w-[5rem] h-[1.188rem]" />
            )}
          </Card>
          <Card>
            <Text className="font-bold">Bairro:</Text>{' '}
            {!isLoading ? (
              <Text>{data?.data?.neighborhood}</Text>
            ) : (
              <Skeleton className="w-[5rem] h-[1.188rem]" />
            )}
          </Card>
          <Card>
            <Text className="font-bold">Cidade:</Text>{' '}
            {!isLoading ? (
              <Text>{data?.data?.city}</Text>
            ) : (
              <Skeleton className="w-[5rem] h-[1.188rem]" />
            )}
          </Card>
          <Card>
            <Text className="font-bold">Estado:</Text>{' '}
            {!isLoading ? (
              <Text>{data?.data?.state}</Text>
            ) : (
              <Skeleton className="w-[5rem] h-[1.188rem]" />
            )}
          </Card>
          <Card>
            <Text className="font-bold">Longitude:</Text>{' '}
            {!isLoading ? (
              <Text>{data?.data?.location?.coordinates?.longitude}</Text>
            ) : (
              <Skeleton className="w-[5rem] h-[1.188rem]" />
            )}
          </Card>
          <Card>
            <Text className="font-bold">Latitude:</Text>{' '}
            {!isLoading ? (
              <Text>{data?.data?.location?.coordinates?.latitude}</Text>
            ) : (
              <Skeleton className="w-[5rem] h-[1.188rem]" />
            )}
          </Card>
        </section>
      )}

      {error && (
        <Card className="mt-5">
          <Text as="div" className="w-full font-bold italic text-center">
            Informações não encontradas para esse CEP
          </Text>
        </Card>
      )}

      <footer className="mt-8 flex justify-center">
        <Button
          className="!w-60"
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          Fazer nova pesquisa
        </Button>
      </footer>
    </Container>
  );
}
