import { useContext, useRef } from 'react';

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { toast } from 'react-toastify';

import { GlobalContext } from '../../contexts/Global.context';

import { Modal } from '../../components';
import { CompanyFormContainer } from './InsertCompany.style';

export function InsertCompanyModal({ handleInsertCompany }) {
  const { closeModal } = useContext(GlobalContext)

  const nameRef = useRef(null);
  const addressRef = useRef({});

  function handleSubmit() {
    const name = nameRef.current.value.trim();
    const address = {
      street: addressRef.current['street'].value.trim(),
      number: Number(addressRef.current['number'].value),
      district: addressRef.current['district'].value.trim(),
      city: addressRef.current['city'].value.trim(),
      state: addressRef.current['state'].value,
    };

    if (name && address.street && address.number && address.district && address.city && address.state) {
      handleInsertCompany({ name, address });
      closeModal();
    } else toast.error('Preencha todos os campos obrigatórios');
  }

  return (
    <Modal
      open
      title='Cadastrar nova empresa'
      cancelButtonText='Cancelar'
      concludeButtonText='Cadastrar'
      onFinish={handleSubmit}
    >
      <CompanyFormContainer>
        <h3>Informações básicas</h3>
        <TextField
          id='companyName'
          inputRef={nameRef}
          label='Nome'
          variant='outlined'
          fullWidth
          required
        />

        <h3>Endereço</h3>
        <TextField
          id='street'
          inputRef={el => addressRef.current['street'] = el}
          label='Logradouro'
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          id='number'
          inputRef={el => addressRef.current['number'] = el}
          label='Número'
          type='number'
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          id='district'
          inputRef={el => addressRef.current['district'] = el}
          label='Bairro'
          variant='outlined'
          fullWidth
          required
        />
        <TextField
          id='city'
          inputRef={el => addressRef.current['city'] = el}
          label='Cidade'
          variant='outlined'
          fullWidth
          required
        />
        <FormControl fullWidth>
          <InputLabel id='state'>Estado *</InputLabel>
          <Select
            inputRef={el => addressRef.current['state'] = el}
            id='state'
            label='Estado'
            variant='outlined'
            defaultValue=''
            required
            fullWidth
          >
            <MenuItem value='AC'>Acre</MenuItem>
            <MenuItem value='AL'>Alagoas</MenuItem>
            <MenuItem value='AP'>Amapá</MenuItem>
            <MenuItem value='AM'>Amazonas</MenuItem>
            <MenuItem value='BA'>Bahia</MenuItem>
            <MenuItem value='CE'>Ceará</MenuItem>
            <MenuItem value='DF'>Distrito Federal</MenuItem>
            <MenuItem value='ES'>Espírito Santo</MenuItem>
            <MenuItem value='GO'>Goiás</MenuItem>
            <MenuItem value='MA'>Maranhão</MenuItem>
            <MenuItem value='MT'>Mato Grosso</MenuItem>
            <MenuItem value='MS'>Mato Grosso do Sul</MenuItem>
            <MenuItem value='MG'>Minas Gerais</MenuItem>
            <MenuItem value='PA'>Pará</MenuItem>
            <MenuItem value='PB'>Paraíba</MenuItem>
            <MenuItem value='PR'>Paraná</MenuItem>
            <MenuItem value='PE'>Pernambuco</MenuItem>
            <MenuItem value='PI'>Piauí</MenuItem>
            <MenuItem value='RJ'>Rio de Janeiro</MenuItem>
            <MenuItem value='RN'>Rio Grande do Norte</MenuItem>
            <MenuItem value='RS'>Rio Grande do Sul</MenuItem>
            <MenuItem value='RO'>Rondônia</MenuItem>
            <MenuItem value='RR'>Roraima</MenuItem>
            <MenuItem value='SC'>Santa Catarina</MenuItem>
            <MenuItem value='SP'>São Paulo</MenuItem>
            <MenuItem value='SE'>Sergipe</MenuItem>
            <MenuItem value='TO'>Tocantins</MenuItem>
          </Select>
        </FormControl>
      </CompanyFormContainer>
    </Modal>
  );
}