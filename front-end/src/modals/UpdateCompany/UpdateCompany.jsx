import { useContext, useEffect, useRef, useState } from 'react';
import { Modal } from '../../components';
import { CompanyFormContainer } from './UpdateCompany.style';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { GlobalContext } from '../../contexts/Global.context';
import { toast } from 'react-toastify';
import { getCompanyById } from '../../api/companies.service';

export function UpdateCompanyModal({ companyId, handleUpdateCompany }) {
  const { closeModal } = useContext(GlobalContext)

  const [company, setCompany] = useState(null);

  const nameRef = useRef(null);
  const addressRef = useRef({});

  function handleSubmit() {
    const name = nameRef.current.value.trim();
    const address = {
      street: addressRef.current['street'].value.trim(),
      number: addressRef.current['number'].value,
      district: addressRef.current['district'].value.trim(),
      city: addressRef.current['city'].value.trim(),
      state: addressRef.current['state'].value,
    };

    if (name && address.street && address.number && address.district && address.city && address.state) {
      handleUpdateCompany(companyId, { name, address });
      closeModal();
    } else toast.error('Preencha todos os campos obrigatórios');
  }

  useEffect(() => {
    getCompanyById(companyId).then((res) => setCompany(res));
  }, []);


  return (
    <Modal
      open
      title={`Editar empresa: ${company?.name || ''}`}
      cancelButtonText='Cancelar'
      concludeButtonText='Salvar'
      onFinish={handleSubmit}
    >
      <CompanyFormContainer>
        {company && (
          <>
            <h3>Informações básicas</h3>
            <TextField
              id='companyName'
              inputRef={nameRef}
              label='Nome'
              variant='outlined'
              defaultValue={company.name}
              fullWidth
              required
            />

            <h3>Endereço</h3>
            <TextField
              id='street'
              inputRef={el => addressRef.current['street'] = el}
              label='Logradouro'
              variant='outlined'
              defaultValue={company.address.street}
              fullWidth
              required
            />
            <TextField
              id='number'
              inputRef={el => addressRef.current['number'] = el}
              label='Número'
              type='number'
              variant='outlined'
              defaultValue={Number(company.address.number)}
              fullWidth
              required
            />
            <TextField
              id='district'
              inputRef={el => addressRef.current['district'] = el}
              label='Bairro'
              variant='outlined'
              defaultValue={company.address.district}
              fullWidth
              required
            />
            <TextField
              id='city'
              inputRef={el => addressRef.current['city'] = el}
              label='Cidade'
              variant='outlined'
              defaultValue={company.address.city}
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
                defaultValue={company.address.state}
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
          </>
        )}
      </CompanyFormContainer>
    </Modal>
  );
}