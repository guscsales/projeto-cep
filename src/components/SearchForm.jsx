import { useForm } from 'react-hook-form';
import Button from './Button';
import InputText from './InputText';
import { useNavigate } from 'react-router-dom';
import Text from './Text';

export default function SearchForm() {
  const form = useForm();
  const navigate = useNavigate();

  function onSubmit({ zipCode }) {
    navigate(`/detalhes/${zipCode}`);
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col lg:flex-row gap-2 mt-5 w-full"
    >
      <div className="w-full flex flex-col gap-2">
        <InputText
          placeholder="Exemplo: 01001000"
          maxLength="8"
          {...form.register('zipCode', {
            required: true,
            minLength: 8,
            maxLength: 8,
          })}
        />
        {form.formState.errors.zipCode && (
          <Text className="text-red-600">
            Valor inválido, digite um CEP que contenha 8 digitos
          </Text>
        )}
      </div>

      <Button
        type="submit"
        className="lg:basis-52"
        // Uma maneira de validar
        // disabled={!form.formState.isValid}
      >
        Buscar
      </Button>
    </form>
  );
}
