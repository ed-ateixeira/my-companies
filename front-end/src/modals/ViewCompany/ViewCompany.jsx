import { useEffect, useState } from 'react';

import { getCompanyById } from '../../api/companies.service';

import { Modal } from '../../components';
import { CompanyInfosContainer } from './ViewCompany.style';

export function ViewCompanyModal({ companyId }) {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompanyById(companyId).then((res) => setCompany(res));
  }, []);

  return (
    <Modal
      title={`Detalhes de ${company?.name || ''}`}
      open
    >
      <CompanyInfosContainer>
        {company && (
          <>
            <li><b>ID: </b>{company.id}</li>
            <li><b>Nome: </b>{company.name}</li>
            <li><b>Endereço:</b>
              <ul>
                <li><b>Logradouro: </b>{company.address.street}</li>
                <li><b>Número: </b>{company.address.number}</li>
                <li><b>Bairro: </b>{company.address.district}</li>
                <li><b>Cidade: </b>{company.address.city}</li>
                <li><b>Estado: </b>{company.address.state}</li>
              </ul>
            </li>
          </>
        )}
      </CompanyInfosContainer>
    </Modal>
  );
}